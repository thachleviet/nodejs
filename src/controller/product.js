
const Raven = require("../../sentry");

const Log = require("../../logging") ;

const { pool , addProduct, getItemShop} = require("../../mysql");

module.exports = {
    create_product: async (req, res)=> {
        console.log("======>");
        await getItemShop("thach-shop.myshopify.com").then(shop_id =>{
            data = [{title: "Hoàng anh tuan", id: 10000} ];
            pool.getConnection(function (error, connection) {


                console.log("CUOI=>",connection);
                if(error) throw Error(error) ;
                addProduct(connection , shop_id, data)
            });
        });



    }
};