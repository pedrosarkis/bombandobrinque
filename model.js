'use strict'
const mongoose = require('mongoose');

const productSchema = {strict: false}

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
