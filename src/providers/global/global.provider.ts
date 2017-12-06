import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { RulerUnit } from '../../models/rulerUnit.model';

@Injectable()
export class GlobalProvider {
  public selectedRulerUnit: RulerUnit = RulerUnit.METRIC;
}
