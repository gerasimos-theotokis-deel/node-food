const Shop = require('../models/shop');

/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.getShop = (req, res, next) => {
    const shopId = req.params.shopId;
    Shop.fetchShop(shopId)
        .then(shop => {
            res.json(shop);
        })
        .catch(err => {
            throw err;
        })
};
