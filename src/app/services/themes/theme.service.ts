import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'app-theme';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  setTheme(themeName: string) {
    localStorage.setItem(this.themeKey, themeName);
    this.loadTheme(themeName);
  }

  // theme.service.ts

  loadTheme(themeName?: string) {
    if (this.isBrowser()) {
      const theme =
        themeName || localStorage.getItem(this.themeKey) || 'orange-theme';
      const head = document.getElementsByTagName('head')[0];
      const existingLink = document.getElementById(
        'client-theme',
      ) as HTMLLinkElement;

      const themeMap: Record<string, string> = {
        'green-theme': 'assets/themes/green-theme/green-theme.css',
        'purple-theme': 'assets/themes/purple-theme/purple-theme.css',
        'red-theme': 'assets/themes/red-theme/red-theme.css',
        'orange-theme': 'assets/themes/orange-theme/orange-theme.css',
        'teal-theme': 'assets/themes/teal-theme/teal-theme.css',
      };

      const themeHref = themeMap[theme] || themeMap['orange-theme'];

      if (existingLink) {
        existingLink.href = themeHref;
      } else {
        const link = document.createElement('link');
        link.id = 'client-theme';
        link.rel = 'stylesheet';
        link.href = themeHref;
        head.appendChild(link);
      }
    }
  }

  clearTheme() {
    localStorage.removeItem(this.themeKey);
    this.setTheme('orange-theme');
  }
}
