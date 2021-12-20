const express = require('express');
const app = express();

app.use(express.static('style.css'));

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



  
  //https://github.com/ElTitoMaiki/uf1844_MiguelAngel_Masiello_Palmer/tree/master/sitio-node