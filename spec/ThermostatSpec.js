'use strict;'

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    var thermostat = new Thermostat();
  });
  
  it('has a starting temperature of 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases in temperature with the up button', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decreases in temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  });