import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';
import { Character } from '../../models/character.model';

const mockCharacter: Character = {
  id: 1,
  name: 'Goku',
  ki: '60.000.000',
  maxKi: '90 Septillion',
  race: 'Saiyan',
  gender: 'Male',
  description: '',
  image: 'https://example.com/goku.png',
  affiliation: 'Z Fighter',
  deletedAt: null,
};

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    fixture.componentRef.setInput('character', mockCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the character name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Goku');
  });
});
