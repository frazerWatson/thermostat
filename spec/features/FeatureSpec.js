 
 describe('Feature', function(){
    it('starts at 20 degrees', function(){
    var thermostat = new Thermostat();
    expect(thermostat.startTemperature).toBe(20);

    }); 

 });