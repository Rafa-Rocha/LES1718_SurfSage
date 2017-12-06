import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPage } from '../pages/search/search.component';
import { weatherService } from '../services/weatherService.service';
import { GoogleMapsService } from '../services/googleMaps.service';
import { StorageService } from '../services/storageService.service';
import { Keyboard } from '@ionic-native/keyboard';
import { ViewController } from 'ionic-angular';

describe('PeopleGroupComponent', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPage ],
      providers: [ViewController, Keyboard, StorageService, GoogleMapsService, weatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
