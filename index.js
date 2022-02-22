var openweather = require('./routes/openweather');
var weatherbit = require('./routes/weatherbit');

openweather.pozoviOpenWeatherV1(function(dataopenweather){
    weatherbit.pozoviWeatherbitv1(function(dataweatherbit){
        console.log("Svinjarevci");
        console.log("-----------");
        console.log("OpenweatherAPI -",dataopenweather);
        console.log("WeatherbitAPI -",dataweatherbit);
        for (let i = 0; i < dataweatherbit.length; i++) {
            for (let j = 0; j< dataopenweather.length; j++) {
                if(dataweatherbit[i].datum == dataopenweather[j].datum.substring(0,10)){
                    console.log('Za datum '+dataweatherbit[i].datum+ ' razlika u temperaturama je: '+(dataweatherbit[i].temperatura-dataopenweather[j].temperatura)+' °C');
                }
            }
        }
    });
})
