const express  = require('express');

const app  = express();

app.use((req,res,next)=>{

    console.log("first middleware");
    next();
});

app.use((req,res,next)=>{

    console.log("Second middleware");
    res.send('<h1>Welcome to express js</h1>');
})



app.listen(4000);