describe("Checking a Location's current status", function(){  
    var addLocationButton;
    var test;

    beforeEach(function() {
        browser.get('/');
    });

    it("should check a location's current weather and tidal status", function() {   
        // check if it's the home page
        //expect(browser.getCurrentUrl()).toMatch('/search');

        // wait for search results
        browser.sleep(5000);

        var temperature = element(by.css('.temperature'));
        var tidalHeight = element(by.css('.tidalHeight'));
        var weatherCondition = element(by.css('.weatherCondition'));

        var temperatureValue = temperature.getText();
        test = (temperatureValue !== ""); 
        expect(test).toBe(true);

        var tidalHeightValue = tidalHeight.getText();
        test = (tidalHeightValue !== ""); 
        expect(test).toBe(true);

        var weatherConditionSource = weatherCondition.getAttribute('src');
        test= (weatherConditionSource !== "");
        expect(test).toBe(true);
    });

});