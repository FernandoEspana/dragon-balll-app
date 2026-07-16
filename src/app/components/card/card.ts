import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { Character } from '../../models/character.model';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  character = input.required<Character>();
}
