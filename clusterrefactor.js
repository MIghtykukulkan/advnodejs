process.env.UV_THREADPOOL_SIZE=1;
const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');

if(cluster.isMaster){
   // cluster.fork();
    cluster.fork();
}else{
    
const app = express();

function dowork(){
   
    
}
app.get('/', (req,res)=>{

    crypto.pbkdf2('a','b',10000, 512, 'sha512', ()=>{
        res.send('hello');
    });
})

app.get('/fast', (req,res)=>{
    res.send('fast route')
})

app.listen(3000);
}
