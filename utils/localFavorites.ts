export const handleLocalStorageFavorites = (id: number) => {
  let favoritesPokemons: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favoritesPokemons.includes(id)) {
    favoritesPokemons = favoritesPokemons.filter((pokeId) => pokeId !== id);
  } else {
    favoritesPokemons.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favoritesPokemons));
};
