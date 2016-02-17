'use strict;'

function Thermostat(){
  //  where we store the property of an object
  Thermostat.prototype.getCurrentTemperature = function() {};
    return this.temperature;

  Thermostat.prototype.up = function() {
    this.temperature +=1;
  }

  Thermostat.prototype.down =function() {
    this.temperature -=1;
  }
};