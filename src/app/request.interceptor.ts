import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(request);
    request=request.clone({
      setParams: {
        api_key: "35572fd815c38ffbe7933c9223c3b638"
      }
  })
  // console.log("After cloning::");
  // console.log(request);

    return next.handle(request);
  }
}
