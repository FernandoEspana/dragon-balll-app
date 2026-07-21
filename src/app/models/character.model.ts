export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: string | null;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
}

// Respuesta del endpoint de detalle: /characters/{id}
export interface CharacterDetail extends Character {
  originPlanet: Planet | null;
  transformations: Transformation[];
}

export interface CharacterListMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface CharacterListLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface CharacterListResponse {
  items: Character[];
  meta: CharacterListMeta;
  links: CharacterListLinks;
}
