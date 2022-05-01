import { Layout } from "components/layouts";
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
      <NoFavorites />
    </Layout>
  );
};

export default Favorites;
