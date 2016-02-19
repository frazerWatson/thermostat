
$(document).ready(function(){
  var thermostat = new Thermostat;
  $('#temperature').text(thermostat.temperature);
  $('#increase_temperature').click(function(){
     thermostat.increaseTemperature();
     updateTemperature();
    });
  $('#decrease_temperature').click(function(){
      thermostat.decreaseTemperature();
      updateTemperature();
  });
  $('#temperature_reset').click(function(){
      thermostat.resetTemperature();
      updateTemperature();
  });
  $('#powersaving_on').click(function(){
      thermostat.switchPowerSavingModeOn();
  });
  $('#powersaving_off').click(function(){
      thermostat.switchPowerSavingModeOff();
  });



  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});

