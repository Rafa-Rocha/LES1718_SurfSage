describe('HomePage', function() {
    
    var homePage,
        deferredLocations,
        storageServiceMock,
        navCtrlMock,
        modalCtrlMock,
        testLocation1,
        testLocation2;

    // load the App Module
    beforeEach(module('app'));  

    // instantiate the homePage class and mocks for every test
    beforeEach(inject(function() {  

        // mock storageService
        /*
        storageServiceMock = {
            saveLocations: jasmine.createSpy('saveLocations spy'),
            
            getLocations: jasmine.createSpy('getLocations spy')
                        .and.returnValue(deferredLocations.promise)             
        };

        // mock navCtrl
        navCtrlMock = jasmine.createSpyObj('navCtrl spy', ['push']);

        // mock modalCtrl
        modalCtrlMock = jasmine.createSpyObj('modalCtrl spy', ['create']);

        // instantiate HomePage
        homePage = $homePage('HomePage', { 
                        "navCtrl": navCtrlMock,
                        "storageService": storageServiceMock,
                        'modalCtrl': modalCtrlMock }
                    );

        testLocation1 = Places("testCity1", "testCountry1", "1", "1");
        testLocation2 = Places("testCity2", "testCountry2", "2", "2");*/
    }));

    describe('Location storage', function() {

        it('should save a location on local storage through storageService', function() {
            /* homePage.saveItem(testLocation1);
             homePage.saveItem(testLocation2);*/
            /* expect(homePage.locations.length).toEqual(2);*/
        });

        it('should remove a location from local storage through storageService', function() {
            /*homePage.deleteItem(testLocation1);
            expect(homePage.locations.length).toEqual(1);
            expect(homePage.locations[0])*/
       });
    })
});