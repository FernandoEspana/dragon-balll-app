import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Characters } from './pages/characters/characters';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'characters', component: Characters },
];
