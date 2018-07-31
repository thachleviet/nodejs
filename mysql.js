const mysql = require('mysql') ;
const  Log  = require('./logging') ;
const {
    DB_USER_PRODUCT,
    DB_HOST_PRODUCT,
    DB_PASSWORD_PRODUCT,
    DB_NAME_PRODUCT
} = require("./setting");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST_PRODUCT,
    user: DB_USER_PRODUCT,
    password: DB_PASSWORD_PRODUCT,
    database: DB_NAME_PRODUCT
});

function addProduct(connection , shop_id){
    const table  = `product_${shop_id}` ;
    const CURRENT_TIMESTAMP = {
        toSqlString: function() {
            return "CURRENT_TIMESTAMP()";
        }
    };
    const { title = "", handle = "", id = 0, image = {} } = data;
    const { src = "" } = image;
    const statement = `insert into ?? (id, title, handle, image, is_reviews, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)`;
    const insert = [
        table,
        id,
        title,
        handle,
        src,
        0,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    ];
    const sql = mysql.format(statement, insert);
    Log.info("SQL insert product %s", sql);
    const query = connection.query({ sql, timeout: 20000 });
    return query;
}

async function getItemShop(shop_name){
    try {
        var result;
        console.log("TRUOC KHI await ") ;
        result  = await findShopId();

        console.log("SAU KHI await ") ;
        return result;

    }catch (e) {
        return e.message
    }
}

findShopId =()=>{
    return new Promise(function (resolve, reject) {
        const con =  mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : '',
            database : 'alireview'
        });
         con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT shop_id FROM shop", function (err, rows, fields) {
                if (err) throw err;
                resolve(rows) ;
            });
        });
    });
}


module.exports = {
    pool,
    addProduct,
    getItemShop
};
