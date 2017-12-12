describe('Removing a Location', function(){  
    var savedItem;

    beforeEach(function() {
        browser.get('/');
        var elements = element(by.id("item")).all(by.tagName("ion-item-sliding"));
        savedItem = elements.get(0);
    });

    it('should select a saved location in the Home Page and remove it from storage', function() {

        savedItem.getLocation().then((location) => {
            
            var startLocation = {
                x: location.x + 300,
                y: location.y + 50
            }
            var newLocation = {
                x: startLocation.x - 100,
                y: startLocation.y
            };
    
            browser.driver.touchActions()
                            .tapAndHold(startLocation)
                            .move(newLocation)
                            .perform();
            
            var deleteButton = element(by.cssContainingText('.delete', 'Delete'));
            browser.actions().mouseMove(deleteButton).click().perform();
            //expect(savedItem.isPresent()).toBe(false);
        });
    });

});