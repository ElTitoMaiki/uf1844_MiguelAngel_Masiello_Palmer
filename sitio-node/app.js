const express = require('express');
const app = express();

app.get('/',function(request,res){
    res.sendFile('./index.html',{root:__dirname});
});
app.get('/products',function(request,res){
    res.sendFile(__dirname+'/productos.html');
});
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname+'/404.html');
  })