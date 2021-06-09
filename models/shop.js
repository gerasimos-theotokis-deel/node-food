const collection = require("../db").getCollection;

module.exports = class Shop {
    static fetchShop(id) {
        return collection('shops')
            .find({shop_id: parseInt(id)})
            .next()
            .then(product => {
                if(product){
                    return product;
                }
                return {};
            })
            .catch(err => {
                throw err;
            })
    }
}