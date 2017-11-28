describe("Checking a Location's weather and tide status", function(){  
    var test;

    beforeEach(function() {
        browser.get('/');
    });

    it("should check a location's current weather and tidal status", function() {   
        // check if it's the home page
        //expect(browser.getCurrentUrl()).toMatch('/');

        // wait for saved location
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
        test = (weatherConditionSource !== "");
        expect(test).toBe(true);
    });

    it("should check a location's weather and tidal conditions", function() {  
        var location = element(by.css('.location'));
        location.click();
        browser.sleep(5000);

        var weathercondition = element(by.id('weatherCondition'));
        var temp = element(by.id('temperature'));
        var weekday = element(by.css('.weekday'));
        var icon = element(by.css('.icon'));
        var highLowTemperature = element(by.css('.highLowTemperature'));
        var wind = element(by.id('wind'));

        var weatherconditionValue = weathercondition.getText();
        test = (weatherconditionValue !== "");
        expect(test).toBe(true);

        var tempValue = temp.getText();
        test = (tempValue !== "");
        expect(test).toBe(true);

        var weekdayValue = weekday.getText();
        test = (weekdayValue !== "");
        expect(test).toBe(true);

        var iconSource = icon.getAttribute('src');
        test = (iconSource !== "");
        expect(test).toBe(true);

        var highLowTemperatureValue = highLowTemperature.getText();
        test = (highLowTemperatureValue !== "");
        expect(test).toBe(true);

        var windValue = wind.getText();
        test = (windValue !== "");
        expect(test).toBe(true);
    });
});