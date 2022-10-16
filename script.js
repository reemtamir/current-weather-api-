'use strict';
$('button').click(getWeather);
function getWeather() {
  let cityName = $('.text')[0].value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ca7e9ec969ad1cce407a30f2829b0e9f&units=metric`
  )
    .then((data) => data.json())
    .then((body) => {
      const image = `http://openweathermap.org/img/wn/${body.weather[0].icon}@2x.png`;
      let html = `
      <div class="card-body">
        <h5 class="card-title">${body.name}</h5>
     
      <ul class="list-group list-group-flush">
        <li class="list-group-item">temp: ${Math.round(
          body.main.temp
        )} &#8451  <img src="${image}"></li>
        <li class="list-group-item"> Description: ${
          body.weather[0].description
        }</li>
        <li class="list-group-item">Feels like: ${Math.round(
          body.main.feels_like
        )} &#8451</li>
        <li class="list-group-item">Max temp: ${Math.round(
          body.main.temp_max
        )} &#8451</li>
        <li class="list-group-item">Min temp: ${Math.round(
          body.main.temp_min
        )} &#8451</li>
        <li class="list-group-item">Humidity
        : ${Math.round(body.main.humidity)}%</li>
      </ul>
      </div>
     `;
      $('.card').removeClass('d-none');
      $('.card').html(html);
    });
}
