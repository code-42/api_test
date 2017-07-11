$(document).ready(function(){
    var url = "http://api.openweathermap.org/data/2.5/weather";
    var data = {"zip":"02908,us", "appid":"a806a6b5e2943ee6f6d7e4a1d752ffbb", "units":"imperial"};
    
    $.ajax({
        // url: "http://api.openweathermap.org/data/2.5/weather",
        url:url,
        data:data,
        success: function(response) {
            console.log("1.response == " + response.main.temp);
  
        console.log("2.url == " + url);
        $("#tempr").html(response.main.temp);
    
        }
    });    
})