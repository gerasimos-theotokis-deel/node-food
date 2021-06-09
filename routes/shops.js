const express = require('express');
const router = express.Router();
const shopsController = require('../controllers/shops');

router.get('/shops/:shopId',  shopsController.getShop);

module.exports = router;