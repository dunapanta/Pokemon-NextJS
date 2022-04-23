import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

const pokemonApi = axios.create({
  baseURL: baseUrl,
});

export default pokemonApi;
