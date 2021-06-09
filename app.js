const express = require('express');
const app = express();
const dbConnect = require('./db').dbConnect;
const shopRoutes = require('./routes/shops');

app.use(shopRoutes);

dbConnect(() => {
    app.listen(8080);
})