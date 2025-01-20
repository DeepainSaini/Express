
const path = require('path');

const rootDir = require('../util/path');



exports.getAddProductPage = (req,res,next)=>{

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
};


exports.postProduct = (req,res,next)=>{
     
    console.log(req.body); 
    res.redirect('/shop');
};

exports.getProducts = (req,res,next)=>{

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}