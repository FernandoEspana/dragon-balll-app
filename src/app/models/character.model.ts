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
