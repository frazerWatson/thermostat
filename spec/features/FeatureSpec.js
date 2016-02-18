 
 describe('Feature', function(){

    var thermostat;

    beforeEach(function(){
      thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toBe(20);

    }); 
  
    it('has minimum of 10 degrees', function(){
      for (var i = 0; i < 10; i++) {
        thermostat.decreaseTemperature();
      }
      expect(function() {thermostat.decreaseTemperature();}).toThrow('minimum temperature reached');
    });

});
  
 



   //   describe('raising the temperature', function() {
  // it('clicking the button raises the temp', function() {
  //   var $tempUpButton = $('#temperature_up'); // this uses a jQuery selector to get the button from the page
  //   var $temperatureHolder = $('#temperature_holder'); // a jQuery selector to get the temperature holder
  //   var initialTemperature = parseInt($temperatureHolder.text()); // store the temperature (as an integer) before the click
  //   $tempUpButton.click(); // click the button
  //   var newTemperature = parseInt($temperatureHolder.text()); // store the temperature (as an integer) after the click
  //   expect(newTemperature > initialTemperature).toEqual(true);
  // });