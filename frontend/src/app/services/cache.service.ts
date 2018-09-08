import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class CacheService {
  private cache: Map<string, HttpEvent<any>> = new Map<string, HttpEvent<any>>();

  constructor() { }

  get(request: HttpRequest<any>): HttpEvent<any> {
    return this.cache.get(request.urlWithParams);
  }

  set(request: HttpRequest<any>, event: HttpEvent<any>): void {
    this.cache.set(request.urlWithParams, event);
  }
}
