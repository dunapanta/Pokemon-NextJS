import React from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  favoritesPokemon: number[];
}

export const FavoritePokemons = ({ favoritesPokemon }: Props) => {
  const router = useRouter();
  const onFavoritePokemonClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid.Container justify="flex-start" direction="row" gap={2}>
      {favoritesPokemon.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card
            hoverable
            clickable
            onClick={() => onFavoritePokemonClick(id)}
            css={{ padding: "10px" }}
          >
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width="100%"
              height={150}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
