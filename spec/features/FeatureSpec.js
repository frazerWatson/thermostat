 
 describe('Feature', function(){
    it('starts at 20 degrees', function(){
    var thermostat = new Thermostat();
    expect(thermostat.startTemperature).toBe(20);

    }); 

    describe('raising the temperature', function() {
  it('clicking the button raises the temp', function() {
    var $tempUpButton = $('#temperature_up'); // this uses a jQuery selector to get the button from the page
    var $temperatureHolder = $('#temperature_holder'); // a jQuery selector to get the temperature holder
    var initialTemperature = parseInt($temperatureHolder.text()); // store the temperature (as an integer) before the click
    $tempUpButton.click(); // click the button
    var newTemperature = parseInt($temperatureHolder.text()); // store the temperature (as an integer) after the click
    expect(newTemperature > initialTemperature).toEqual(true);
  });
});
  
 });