import { Storage } from "@ionic/storage";
import { StorageService } from '../services/storageService.service';

describe('Google Maps Service', () => {
    let storage: Storage;
    let storageService: StorageService;
    const data = [{city:'São Paulo', country: 'Brasil'}]

    beforeEach(() => {
        storageService = new StorageService(storage);
    });

    afterEach(() => {
        localStorage.removeItem('locationMock');
        storageService = null;
    });

    it('Should exist ', () => {
        expect(storageService).toBeTruthy();
    });
    it('Should exist getLocations', () => {
        expect(storageService.getLocations).toBeTruthy();
    });

    it('Should exist saveLocations', () => {
        expect(storageService.saveLocations).toBeTruthy();
    });

    it('Should set localstorage', () => {
        localStorage.setItem('locationMock', JSON.stringify(data));
        const result = localStorage.getItem('locationMock');
        expect(result).toBe(JSON.stringify(data));
    });

    it('Should have length of 1', () => {
        localStorage.setItem('locationMock', JSON.stringify(data));
        const result = localStorage.getItem('locationMock');
        expect(JSON.parse(result).length).toBe(data.length);
    });
    it('Should delete', () => {
        localStorage.removeItem('locationMock');
        expect(localStorage.getItem('locationMock')).toBeFalsy();
    });


});