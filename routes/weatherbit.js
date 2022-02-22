var weatherbit = {

pozoviWeatherbitv1 :function(callback){
    
const https = require('https');
const opUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Svinjarevci&key=c39c2b5f05dc459b8508443564ca2c98';

https.get(opUrl, res => {
  var data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    var wePohrani = {datum: "",temperatura: ""};
    var wePolje = [];
    let i = 0;
      for(i; i < 6; i++){
        a = data.data[i].datetime;
        b = data.data[i].temp;
        wePohrani = {
          datum: a, 
          temperatura: b   
        };
        wePolje.push(wePohrani);
    };
    callback(wePolje);
  })
}).on('error', err => {
  console.log(err);
  callback([]);
})

},

};

module.exports = weatherbit;
