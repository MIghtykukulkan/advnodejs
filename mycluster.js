const express = require('express');
const cluster = require('cluster');

if(cluster.isMaster){
    cluster.fork();
    cluster.fork();
}else{
    
const app = express();

function dowork(duration){
    const start = Date.now();
    while(Date.now() - start < duration){}
}
app.get('/', (req,res)=>{
    dowork(5000);
    res.send("Hi");
})

app.get('/fast', (req,res)=>{
    res.send('fast route')
})

app.listen(3000);
}
