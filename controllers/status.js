
const path = require('path');

const rootDir = require('../util/path');


exports.get404 = (req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
};

exports.get201 = (req,res,next)=>{
     
    console.log(req.body); 
    res.status(201).sendFile(path.join(rootDir, 'views', '201.html'));
};