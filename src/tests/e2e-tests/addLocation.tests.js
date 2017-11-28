describe('Adding a Location', function(){  
    var addLocationButton;

    beforeEach(function() {
        browser.get('/');
        addLocationButton = element(by.css('.addLocation'));
    });

    it('should search for the inputed valid location in the Search Page, and add it to Home Page', function() {
        addLocationButton.click().then(function() {
            // check if it's the search page
            //expect(browser.getCurrentUrl()).toMatch('/search');

            var searchBar = element(by.id('searchbar'));
            searchBar.click();

            var input = searchBar.element(by.css('.searchbar-input'));
            input.sendKeys('porto, portugal');

            // wait for search results
            browser.sleep(15000);

            // check if the correct result appears
            var searchResult = element(by.cssContainingText('.searchResult', 'Porto, Portugal'));
            searchResult.click();

            browser.sleep(1000);

            var savedLocation = element(by.cssContainingText('.location', 'Porto'));
            expect(savedLocation.isPresent()).toBe(true);
        });
    });

});