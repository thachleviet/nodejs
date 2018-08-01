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

function addProduct(connection , shop_id ,data){
    const table = `products_${shop_id}`;

    const { title = "", id = 0 } = data;

    const statement = `insert into ?? (id, title) values (?, ?)`;
    const insert = [
        table,
        id,
        title
    ];
    const sql = mysql.format(statement, insert);
    Log.info("SQL insert product %s", sql);
    const query = connection.query({ sql, timeout: 20000 });
    return query;
}

async function getItemShop(shop_name){
    try {
        return await findShopId(shop_name);
    }catch (e) {
        return e.message
    }
}

findShopId =(shop_name)=>{
    return new Promise(function (resolve, reject) {
        const con =  mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : '',
            database : 'blog'
        });
        const sql  = `SELECT shop_id FROM shop where shop_name = '${shop_name}'`;
        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, rows, fields) {
                if (err) throw err;
                console.log(rows[0]) ;
                resolve(rows[0].shop_id) ;
            });
        });
    });
};


module.exports = {
    pool,
    addProduct,
    getItemShop
};
