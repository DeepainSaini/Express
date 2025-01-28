const Product = require('../models/products');

const path = require('path');

const rootDir = require('../util/path');



exports.getAddProductPage = (req,res,next)=>{

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
};


exports.postProduct = (req,res,next)=>{
     
    const product = new Product(req.body.title);
    product.save();
    console.log(req.body); 
    res.redirect('/shop');
};

exports.getProducts = (req,res,next)=>{

    Product.fetchAll((products)=>{
         
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    });

}