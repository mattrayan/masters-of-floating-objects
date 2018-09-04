import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { About } from '../models/content';

const ABOUT_URL: string = '/api/about/';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  public getAbout(): Observable<string> {
    return this.http.get(ABOUT_URL)
      .map((results: About[]) => {
        return results.length ? results[0].description : '';
      });
  }

}
