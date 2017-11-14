// When we delete it, please delete the provider inside the procedures.
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
  private baseUrl: string;

  constructor(private http: Http) {
  }

  public get<T>(resource: string): Observable<T> {
    return this.http.get(this.baseUrl + resource)
      .map<Response, T>(this.extractData);
  }

  private extractData(response: Response) {
    return response.json();
  }
}
