import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error) => {
      // Check for different error types
      if (error.status === 500) {
        snackBar.open(
          'Internal Server Error. Please try again later.',
          'Close',
          {
            duration: 5000,
            panelClass: ['error-snackbar'],
          },
        );
      } else if (error.status === 404) {
        snackBar.open('Resource not found.', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      } else if (error.status === 0) {
        snackBar.open('Network error. Please check your connection.', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
      } else {
        snackBar.open(
          error.error?.message || 'Something went wrong.',
          'Close',
          {
            duration: 5000,
            panelClass: ['error-snackbar'],
          },
        );
      }
      return throwError(() => error);
    }),
  );
};
