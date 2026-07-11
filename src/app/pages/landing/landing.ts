import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NgOptimizedImage],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {
  private router = inject(Router);

  onIniciar(): void {
    this.router.navigate(['/characters']);
  }
}
