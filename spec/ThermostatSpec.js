'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increase the temperature with up()', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down()', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature 10 degreees', function(){
    thermostat.min();
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
