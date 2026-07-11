import { inject, Service } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CharacterListResponse } from '../models/character.model';

@Service()
export class Characters {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://dragonball-api.com/api/characters';

  getCharacters(page = 1, limit = 10): Observable<CharacterListResponse> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<CharacterListResponse>(this.baseUrl, { params });
  }
}
