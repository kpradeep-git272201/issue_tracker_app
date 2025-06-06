import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() {}

  loadBhashiniScript(): void {
  
    const script = document.createElement('script');
    script.src = 'https://translation-plugin.bhashini.co.in/v2/website_translation_utility.js';
    script.setAttribute('data-pos-x', '5');
    script.setAttribute('data-pos-y', '10');
    script.setAttribute('referer', 'localhost'); // change in production
    script.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    document.body.appendChild(script);
  }
}
