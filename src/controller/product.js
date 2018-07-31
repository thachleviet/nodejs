
const Raven = require("../../sentry");

const Log = require("../../logging") ;

const { pool , addProduct, getItemShop} = require("../../mysql");

module.exports = {
    create_product: async (req, res)=> {

        // pool.getConnection();
        var item  = getItemShop("thach-shop.myshopify.com");
        console.log(item) ;
    }
};