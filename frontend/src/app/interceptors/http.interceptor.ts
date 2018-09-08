import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpXsrfTokenExtractor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { CacheService } from '../services/cache.service';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(
    private tokenExtractor: HttpXsrfTokenExtractor,
    private cache: CacheService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET') {
      const cachedResponse: HttpEvent<any> = this.cache.get(request);

      if (cachedResponse) {
        return Observable.of(cachedResponse);
      }

      return next.handle(request)
        .do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.cache.set(request, event);
          }
        })
        .catch((error: HttpErrorResponse) => Observable.throw(error));
    } else {
      const headerName: string = 'X-CSRFToken';
      const token: string = this.tokenExtractor.getToken() as string;

      if (token && !request.headers.has(headerName)) {
        request = request.clone({ headers: request.headers.set(headerName, token) });
      }

      return next.handle(request)
        .catch((error: HttpErrorResponse) => Observable.throw(error));
    }
  }
}
