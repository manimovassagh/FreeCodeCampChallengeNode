let express = require('express');
let app = express();

require('dotenv').config()

app.get('/', (req, res) => {

  res.sendFile(__dirname+'/views/index.html');
})

 app.use("/public",express.static(__dirname + "/public"));


 function convertToUppercase(){
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    return "Hello json".toUpperCase();
  } else {
    return "Hello json";
  }
  return 
 }
 app.get('/json', (req, res) => {

      res.json(convertToUppercase());
    
})
console.log(process.env.MESSAGE_STYLE == 'uppercase');







 module.exports = app;
