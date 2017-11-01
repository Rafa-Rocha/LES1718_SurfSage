describe('Searching for a Location ', function(){  
    var addLocationButton;

    beforeEach(function() {
        browser.get('/');
        addLocationButton = element(by.cssContainingText('.addLocation', 'Add Location'));
    });

    it('should display the Search view, search for the inputed valid location and show its search results', function() {
        addLocationButton.click().then(function() {
            //expect(browser.getCurrentUrl()).toMatch('/search');

            var searchBar = element(by.id('searchbar'));
            searchBar.click();

            var input = searchBar.element(by.css('.searchbar-input'));
            input.sendKeys('porto, portugal');

            browser.sleep(15000);

            var searchResult = element(by.cssContainingText('.searchResult', 'Porto, Portugal'));
            expect(searchResult.isPresent()).toBe(true);
        });
    })

    
    it('should display the Search view, search for the inputed invalid location and not show any search results', function() {
        addLocationButton.click().then(function() {
            //expect(browser.getCurrentUrl()).toMatch('/search');

            var searchBar = element(by.id('searchbar'));
            searchBar.click();

            var input = searchBar.element(by.css('.searchbar-input'));
            input.sendKeys('aaaaaaaa');

            browser.sleep(15000);

            var searchResult = element(by.css('.searchResult'));
            expect(searchResult.isPresent()).toBe(false);
        });
    });
    
});