import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Layout } from './layout/layout';
import { Characters } from './pages/characters/characters';
import { CharacterDetail } from './pages/character-detail/character-detail';

export const routes: Routes = [
  { path: '', component: Landing, pathMatch: 'full' },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'characters', component: Characters },
      { path: 'characters/:id', component: CharacterDetail },
      // Rutas futuras (heredan navbar): planets, transformations, sagas
    ],
  },
];
