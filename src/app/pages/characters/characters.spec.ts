import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Characters } from './characters';

describe('Characters', () => {
  let component: Characters;
  let fixture: ComponentFixture<Characters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characters],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Characters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
