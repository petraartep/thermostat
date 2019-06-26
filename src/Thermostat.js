'use strict';

function Thermostat() {
  this.temperature = 20;
};

Thermostat.protoype.getCurrentTemperature = function(){
  return this.temperature;
};

