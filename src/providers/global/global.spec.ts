import { GlobalProvider } from './global.provider';

import {
    TestBed, inject
} from '@angular/core/testing';
import { RulerUnit } from '../../models/rulerUnit.model';

describe('Global Provider', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GlobalProvider
            ]
        });
    });

    it('Should exist', inject([GlobalProvider], (globalProvider) => {
        expect(globalProvider).toBeDefined();
    }));

    it('Should be Metric system', inject([GlobalProvider], (globalProvider) => {
        globalProvider.setRulerUnit(RulerUnit.METRIC);
        expect(globalProvider.getRulerUnit()).toBe(RulerUnit.METRIC);
    }));
    it('Should be Imperial system', inject([GlobalProvider], (globalProvider) => {
        globalProvider.setRulerUnit(RulerUnit.IMPERIAL);
        expect(globalProvider.getRulerUnit()).toBe(RulerUnit.IMPERIAL);
    }));
});