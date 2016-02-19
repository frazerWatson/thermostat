
$(document).ready(function(){
  var thermostat = new Thermostat;
  $('#temperature').text(thermostat.temperature);
  $('#increase_temperature').click(function(){
     thermostat.increaseTemperature();
     $('#temperature').text(thermostat.temperature);
    });
  $('#decrease_temperature').click(function(){
      thermostat.decreaseTemperature();
      $('#temperature').text(thermostat.temperature);
  });
  $('#temperature_reset').click(function(){
      thermostat.resetTemperature();
      $('#temperature').text(thermostat.temperature);
  });
  $('#powersaving_on').click(function(){
      thermostat.switchPowerSavingModeOn();
  });
  $('#powersaving_off').click(function(){
      thermostat.switchPowerSavingModeOff();
  });
});

