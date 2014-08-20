
$(document).ready(function(){

  $.ajax({
    url: 'https://api.wunderground.com/api/2213c59ecb478372/hourly/q/SC/Charleston.json',
    dataType: 'jsonp',
    type: 'GET'
  })

  .success(function(data){

    var hourInfo = "<div class=\"weatherList\">";

    for(var i=0; i<=12; i++){
      hourInfo += "<ul>"
                  +"<li><h3>" + data.hourly_forecast[i].FCTTIME.weekday_name + ", " + data.hourly_forecast[i].FCTTIME.civil + "</h3></li>"
                  +"<li><span>TEMP: </span> " + data.hourly_forecast[i].temp.english +"&deg </li>"
                  +"<li><span>HUMIDITY: </span> " + data.hourly_forecast[i].humidity + "%</li>"
                  +"<li><span>CONDITION: </span> <img width=\"15px\" src=\"" + data.hourly_forecast[i].icon_url + "\"> " + data.hourly_forecast[i].condition + "</li>"

                  +"</ul>";
    }

    hourInfo += "</div>";
    $(".weather").html(hourInfo);
  })


});
