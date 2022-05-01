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

export const exitstInFavorites = (id: number): Boolean => {
  if (typeof window === "undefined") return false;

  const favoritesPokemons: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favoritesPokemons.includes(id);
};
