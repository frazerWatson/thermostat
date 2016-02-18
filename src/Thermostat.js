'use strict;'

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  //  where we store the property of an object
  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  }
    

  Thermostat.prototype.increaseTemperature = function() {
    this.temperature +=1;
  }

  Thermostat.prototype.isMinimumTeperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  Thermostat.prototype.decreaseTemperature =function() {
    if(this.isMinimumTeperature()) {
      throw('minimum temperature reached');
    } else {
      this.temperature -=1;
    }
  }
  
};