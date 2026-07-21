import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Character } from '../../models/character.model';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  character = input.required<Character>();
}
