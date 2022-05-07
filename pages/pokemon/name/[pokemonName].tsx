import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import pokemonApi from "api/pokemonApi";
import { Layout } from "components/layouts";
import { FirstGenPokemonNamesResponse } from "interfaces/pokemonNamesInterfaces";
import { SinglePokemonResponse } from "interfaces/singlePokemonInterfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import {
  exitstInFavorites,
  handleLocalStorageFavorites,
} from "utils/localFavorites";

interface Props {
  pokemon: SinglePokemonResponse;
}

const PokemonByNamePage = ({ pokemon }: Props) => {
  const [isInFavorites, setIsInFavorites] = useState(
    exitstInFavorites(pokemon.id)
  );
  const handleFavorite = () => {
    handleLocalStorageFavorites(pokemon.id);
    setIsInFavorites((prevSatate) => !prevSatate);

    if (!isInFavorites) {
      confetti({
        zIndex: 9999,
        particleCount: 500,
        spread: 200,
        startVelocity: 20,
        decay: 0.95,
        ticks: 1000,
        origin: {
          x: 0.6,
          y: 0.5,
        },
      });
    }
  };
  return (
    <Layout title={`${pokemon.name}`}>
      <Grid.Container css={{ marginTop: "6px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              ></Card.Image>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                onClick={handleFavorite}
                color="gradient"
                ghost={!isInFavorites}
              >
                {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width="20%"
                  height={200}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width="20%"
                  height={200}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width="20%"
                  height={200}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width="20%"
                  height={200}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: pokemonFirstGenNames } =
    await pokemonApi.get<FirstGenPokemonNamesResponse>("/pokemon?limit=151");

  return {
    paths: pokemonFirstGenNames.results.map((poke) => ({
      params: { pokemonName: poke.name },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonName } = params as { pokemonName: string };

  let pokemon;
  try {
    const { data: singlePokemonName } =
      await pokemonApi.get<SinglePokemonResponse>(`/pokemon/${pokemonName}`);

    pokemon = {
      id: singlePokemonName.id,
      name: singlePokemonName.name,
      sprites: singlePokemonName.sprites,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      //pokemon: singlePokemonName,
      pokemon,
    },
  };
};

export default PokemonByNamePage;
