
describe('Thermostat', function(){
  var thermostat = new Thermostat();
  it('has a starting temperature of 20', function(){
    expect(thermostat.startTemperature).toBe(20);
  });
  });