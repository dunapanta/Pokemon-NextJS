export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonData[];
}

export interface PokemonData {
  id: number;
  name: string;
  url: string;
  img: string;
}
