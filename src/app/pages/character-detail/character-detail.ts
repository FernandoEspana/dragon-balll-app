import { Component, inject, input, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Characters as CharactersService } from '../../services/characters';
import { CharacterDetail as CharacterDetailModel } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './character-detail.html',
})
export class CharacterDetail implements OnInit {
  private readonly charactersService = inject(CharactersService);

  readonly id = input.required<string>();
  protected readonly character = signal<CharacterDetailModel | null>(null);

  ngOnInit(): void {
    this.charactersService.getCharacterById(Number(this.id())).subscribe((detail) => {
      this.character.set(detail);
    });
  }
}
