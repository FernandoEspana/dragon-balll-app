import { Component, inject, OnInit, signal } from '@angular/core';
import { Characters as CharactersService } from '../../services/characters';
import { Character } from '../../models/character.model';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-characters',
  imports: [Card],
  templateUrl: './characters.html',
  styles: ``,
})
export class Characters implements OnInit {
  private readonly charactersService = inject(CharactersService);

  protected readonly characters = signal<Character[]>([]);

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((response) => {
      this.characters.set(response.items);
    });
  }
}
