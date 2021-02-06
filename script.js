var submit = document.getElementById("button");
var citySelected = document.getElementById("cityName"); 
var tempSelected = document.getElementById("temperature");
var humiditySelected = document.getElementById("humidity");
var windSpeedSelected = document.getElementById("windSpeed");
var uvIndexSelected = document.getElementById("uvIndex");
var dayOneTempSelected = document.getElementById("dayOneTemp");
var dayOneHumiditySelected = document.getElementById("dayOneHumidity");
var dayTwoTempSelected = document.getElementById("dayTwoTemp");
var dayTwoHumiditySelected = document.getElementById("dayTwoHumidity");
var dayThreeTempSelected = document.getElementById("dayThreeTemp");
var dayThreeHumiditySelected = document.getElementById("dayThreeHumidity");
var dayFourTempSelected = document.getElementById("dayFourTemp");
var dayFourHumiditySelected = document.getElementById("dayFourHumidity");
var dayFiveTempSelected = document.getElementById("dayFiveTemp");
var dayFiveHumiditySelected = document.getElementById("dayFiveHumidity");
var todaysDateSelected = document.getElementById("Date");
var todaysDate = new Date().toLocaleDateString();
var dayOneDateSelected =document.getElementById("dayOneDate");
var dayTwoDateSelected =document.getElementById("dayTwoDate");
var dayThreeDateSelected =document.getElementById("dayThreeDate");
var dayFourDateSelected =document.getElementById("dayFourDate");
var dayFiveDateSelected =document.getElementById("dayFiveDate");



//My function
submit.addEventListener("click", searchCity);

function searchCity() {
  var city = document.getElementById('userInput').value;
  
 requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9301f28d45fd9954f27db87ef3841dd4";
 
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {

//information for my main screen    
      var cityName = data.name;
      citySelected.append(cityName);
      todaysDateSelected.append(todaysDate);

      var temperature = data.main.temp;
      tempSelected.append(temperature);

      var humidity = data.main.humidity;
      humiditySelected.append(humidity);
      
      var windSpeed = data.wind.speed;
      windSpeedSelected.append(windSpeed);
      
      var cityLat = data.coord.lat;
      var cityLon = data.coord.lon;

      var Url ='https://api.openweathermap.org/data/2.5/onecall?lat='+ cityLat + '&lon=' + cityLon + '&units=imperial&exclude=minutely&appid=9301f28d45fd9954f27db87ef3841dd4';
      
      fetch(Url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
      
        // Informaition about 5 day forecast
          var uvi = data.current.uvi;
          uvIndexSelected.append(uvi);

          var Day1 = new Date();
          var datatodays = Day1.setDate(new Date(Day1).getDate()+ 1);
          var todate = new Date(datatodays).toLocaleDateString();
          dayOneDateSelected.append(todate);


          var day1temp=data.daily[0].feels_like.day;
          dayOneTempSelected.append(day1temp);
          var day1Hum = data.daily[0].humidity;
          dayOneHumiditySelected.append(day1Hum);
          
          
          var Day2 = new Date();
          var datatodays = Day2.setDate(new Date(Day2).getDate()+ 2);
          var todate = new Date(datatodays).toLocaleDateString();
          dayTwoDateSelected.append(todate);

          var day2temp=data.daily[1].feels_like.day;
          dayTwoTempSelected.append(day2temp);
          var day2Hum = data.daily[1].humidity;
          dayTwoHumiditySelected.append(day2Hum);

          var Day3 = new Date();
          var datatodays = Day3.setDate(new Date(Day3).getDate()+ 3);
          var todate = new Date(datatodays).toLocaleDateString();
          dayThreeDateSelected.append(todate);
          var day3temp=data.daily[2].feels_like.day;
          dayThreeTempSelected.append(day3temp);
          var day3Hum = data.daily[2].humidity;
          dayThreeHumiditySelected.append(day3Hum);


          var Day4 = new Date();
          var datatodays = Day4.setDate(new Date(Day4).getDate()+ 4);
          var todate = new Date(datatodays).toLocaleDateString();
          dayFourDateSelected.append(todate);

          var day4temp=data.daily[3].feels_like.day;
          dayFourTempSelected.append(day4temp);
          var day4Hum = data.daily[3].humidity;
          dayFourHumiditySelected.append(day4Hum);


          var Day5 = new Date();
          var datatodays = Day5.setDate(new Date(Day5).getDate()+ 5);
          var todate = new Date(datatodays).toLocaleDateString();
          dayFiveDateSelected.append(todate);

          var day5temp=data.daily[4].feels_like.day;
          dayFiveTempSelected.append(day5temp);
          var day5Hum = data.daily[4].humidity;
          dayFiveHumiditySelected.append(day5Hum);

      });
      

    });
    

} 

