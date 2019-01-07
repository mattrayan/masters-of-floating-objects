import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { About, News, Profile, JoinDescription } from '../models/content';

const ABOUT_URL: string = '/api/about/';
const NEWS_URL: string = '/api/news';
const PROFILES_URL: string = '/api/profiles';
const JOIN_DESCRIPTION_URL: string = '/api/join-description/';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  public getAbout(): Observable<string> {
    return this.http.get(ABOUT_URL)
      .map((results: About[]) => results[0].description);
  }

  public getNews(): Observable<News[]> {
    return this.http.get(NEWS_URL)
      .map((results: News[]) => results);
  }

  public getNewsItem(id: number): Observable<News> {
    return this.http.get(`${NEWS_URL}/${id}`)
      .map((result: News) => result);
  }

  public getProfiles(alumni?: boolean): Observable<Profile[]> {
    return this.http.get(`${PROFILES_URL}/${alumni ? '?alumni=true' : ''}`)
      .map((results: Profile[]) => results);
  }

  public getJoinDescription(): Observable<string> {
    return this.http.get(JOIN_DESCRIPTION_URL)
      .map((results: JoinDescription[]) => results[0].description);
  }

}
