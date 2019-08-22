const express = require('express');

const app = express();

function dowork(duration){
    const start = Date.now();
    while(Date.now() - start < duration){}
}
app.get('/', (req,res)=>{
    dowork(10000);
    res.send("Hi");
})

app.listen(3000);