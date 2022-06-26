let express = require('express');
let app = express();

require('dotenv').config()

app.get('/', (req, res) => {

  res.sendFile(__dirname+'/views/index.html');
})

 app.use("/public",express.static(__dirname + "/public"));


 
 app.get('/json', (req, res) => {

  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.send("Hello World".toUpperCase())  ;
  } else {
    res.send("Hello World") ;
  }
  
  
})









 module.exports = app;
