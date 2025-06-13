import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Inject, Injectable, OnInit, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light'; 
@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnInit{
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<ThemeMode>('light');
  private themeKey = 'app-theme';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (this.isBrowser()) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.setTheme(storedTheme);
      } else {
        this.setTheme('light-theme');
      }
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
        themeName || localStorage.getItem(this.themeKey) || 'teal-theme';
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

      const themeHref = themeMap[theme] || themeMap['teal-theme'];

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
    this.setTheme('teal-theme');
  }

  setThemeMode(themeMode: ThemeMode){
    this.currentTheme.set(themeMode);
    if(themeMode == 'dark'){
      this.document.documentElement.classList.add('dark-mode');
    }else{
      this.document.documentElement.classList.remove('dark-mode');
    }
  }

    toggleTheme() {
    const newTheme = this.currentTheme() == 'light' ? 'dark' : 'light';
    this.setThemeMode(newTheme);
  }
}
