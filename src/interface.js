$(document).ready(function() {

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=67c1e939bf0ee62d8b5673d155f0c7d6';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

  displayWeather('London');

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=67c1e939bf0ee62d8b5673d155f0c7d6&units=metric', function (data) {
  //   $('#current-temperature').text(data.main.temp);
  //   });
  // });

  // $('#select-city').submit(function (event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=67c1e939bf0ee62d8b5673d155f0c7d6&units=metric', function (data) {
  //     $('#current-temperature').text(data.main.temp);
  //   });
  // });

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    console.log('thermostat');
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});



