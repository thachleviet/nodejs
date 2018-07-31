require("events").EventEmitter.prototype._maxListeners = 30;
const mysql   = require('mysql');
const express = require('express');
const Log = require("./logging");
const port = process.env.PORT || 3000;
const app = express();
const { create_product } = require("./src/controller/product");
app.post('/product/create', create_product);

Log.info("Server starting at %s", port);

app.listen(port);
