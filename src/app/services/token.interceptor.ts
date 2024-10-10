import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const toExclude = "/login";
    if (request.url.includes(toExclude)) {
      return next.handle(request);
    }

    const jwt = this.authService.getToken();
    const reqWithToken = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt}`
      }
    });
    return next.handle(reqWithToken);
  }
}
