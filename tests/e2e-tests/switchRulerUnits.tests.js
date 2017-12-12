describe("Switching ruler units", function(){  
    var test;
    
    beforeEach(function() {
        browser.get('/');
    });

    it("should check a location's weather and tidal conditions", function() {
        browser.sleep(2000);
        
        var temperature = element(by.css('.temperature'));
        var temperatureValue = temperature.getText();

        // switch ruler units
        var switchButton = element(by.css('.switchRulerUnit'));
        switchButton.click();

        var switchedTemperatureValue = temperature.getText();
        
        test = (temperatureValue === switchedTemperatureValue); 
        expect(test).toBe(false);
    });
});