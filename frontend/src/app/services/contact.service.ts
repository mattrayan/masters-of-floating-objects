import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Join, Message } from '../models/contact';

const MESSAGE_URL: string = '/api/message/';
const JOIN_URL: string = '/api/join/';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public message(data: Message): Observable<Message> {
    return this.http.post(MESSAGE_URL, data)
      .map((result: Message) => result);
  }

  public join(data: Join): Observable<Join> {
    return this.http.post(JOIN_URL, data)
      .map((result: Join) => result);
  }

}
