import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 500) {
        return throwError(() => messageService.getErrorMessage(error.message));
      } else if (error.status === 404) {
        return throwError(() => messageService.getErrorMessage(error.message));
      } else if (error.status === 0) {
        return throwError(() => messageService.getErrorMessage(error.message));
      } else if (error.status == 401) {
        return throwError(() =>
          messageService.getErrorMessage('You are Unauthorized'),
        );
      }
      return throwError(() => messageService.getErrorMessage(error.message));
    }),
  );
};
