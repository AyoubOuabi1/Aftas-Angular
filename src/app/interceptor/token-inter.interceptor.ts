import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {AuthService} from "../services/auth/auth.service";

@Injectable()
export class TokenInterInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Token expired or unauthorized
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Refresh token logic
    return this.authService.refreshToken().pipe(
      switchMap(() => {
        // Retry the original request with the new access token
        request = this.addAccessTokenToRequest(request);
        return next.handle(request);
      }),
      catchError(refreshError => {
        // Handle refresh token failure
        return throwError(refreshError);
      })
    );
  }

  private addAccessTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.authService.getAccessToken();
    if (accessToken) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    } else {
      return request;
    }
  }
}
