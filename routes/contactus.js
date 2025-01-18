const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.use('/contactus',(req,res,next)=>{

    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
    
});

router.post('/success',(req,res,next)=>{
     
    console.log(req.body); 
    res.status(201).sendFile(path.join(rootDir, 'views', '201.html'));
});

module.exports = router;