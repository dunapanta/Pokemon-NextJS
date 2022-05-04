import { Layout } from "components/layouts";
import { FavoritePokemons } from "components/pokemon/FavoritePokemons";
import { NoFavorites } from "components/ui/NoFavorites";
import React, { useEffect, useState } from "react";
import { favoritesPokemons } from "utils/localFavorites";

const Favorites = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(favoritesPokemons());
  }, []);

  return (
    <Layout title="Favorite pokemon">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemon={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default Favorites;
