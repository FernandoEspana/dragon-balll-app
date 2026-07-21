import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  enabled: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly navItems: readonly NavItem[] = [
    { label: 'Personajes', path: '/characters', enabled: true },
    { label: 'Planetas', path: '/planets', enabled: false },
    { label: 'Transformaciones', path: '/transformations', enabled: false },
    { label: 'Sagas', path: '/sagas', enabled: false },
  ];
}
