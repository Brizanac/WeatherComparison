var openweather = {

  pozoviOpenWeatherV1 :function(callback){
    const https = require('https');
    const opUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Svinjarevci&appid=0880103ebc1b5a5bbd0a1138a376074f&units=metric'; 
    https.get(opUrl, res => {
      var data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
    
        var opPohrani = {
          datum: "",
          temperatura: ""
        };
    
        var opPolje = [];
       //console.log(data);
        
        let i = 0;
        var velicina=data.list.length;
       // var lista = data.list[i].dt_txt;
    
      try {
        for(i; velicina; i++){
          var podne = data.list[i].dt_txt;
            if(podne.includes("12:00:00") == true){
              opDohvati();
              opPohrani = {
                datum: a, 
                temperatura: b   
              };
              opPolje.push(opPohrani);
            };
    
       };
       
        function opDohvati(){
        a = data.list[i].dt_txt;
        b = data.list[i].main.temp;
        };
        
        
      } catch (error) {
        console.log('');
      }
    
        callback(opPolje);
      })
    }).on('error', err => {
      console.log(err.message);
      callback([]);
    }) 
  
  },
  
  };
  
  module.exports = openweather;
  


