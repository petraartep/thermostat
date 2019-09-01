'use strict';

$(document).ready(() => {
  function displayWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}`;
    const token = '&appid=67c1e939bf0ee62d8b5673d155f0c7d6';
    const units = '&units=metric';
    $.get(url + token + units, (data) => {
      $('#current-temperature').text(data.main.temp);
    });
  }

  displayWeather('London');

  $('#select-city').submit((event) => {
    event.preventDefault();
    const city = $('#current-city').val();
    displayWeather(city);
  });

  const thermostat = new Thermostat();
  function updateTemperature();

  $('#temp-up').on('click', () => {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(() => {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(() => {
    console.log('thermostat');
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(() => {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on');
    updateTemperature();
  });

  $('#psm-off').click(() => {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#current-thermostat-temp').text(thermostat.temperature);
    $('#current-thermostat-temp').attr('class', thermostat.energyUsage());
  }
});
