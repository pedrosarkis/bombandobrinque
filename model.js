'use strict'
const mongoose = require('mongoose');


// create a scrict false schema
const productSchema = new mongoose.Schema({}, { strict: false });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
