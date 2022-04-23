export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}
