import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [MaterialModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/restricted']);
  }
}
