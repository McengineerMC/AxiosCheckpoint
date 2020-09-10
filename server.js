const axios =require ('axios');
const express = require ('express');
const app=express();

app.get('/',(req,res)=>{
    
axios.get("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=66665cd3d35441a457c3421558f5cc68")

  .then(function(response){
      console.log(response.data);
    })
  .catch(err => {
    console.error(err);
  });
  });







  const port = process.env.PORT || 3000;
  app.listen(port,(err)=>{
      if(err) {console.log('server not run')}
      else { console.log( `server run on port ${port}`);}
      })