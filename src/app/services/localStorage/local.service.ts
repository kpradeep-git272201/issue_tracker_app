import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit() {}

  getUserData() {
    let user = null;
    if (this.isBrowser()) {
      const userString = localStorage.getItem('loggedUser');
      if (userString) {
        user = JSON.parse(userString);
        return user;
      }
    }
    return user;
  }
}
