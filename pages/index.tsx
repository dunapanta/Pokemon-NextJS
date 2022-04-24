import type { GetStaticProps, NextPage } from "next";

import { Layout } from "components/layouts";
import pokemonApi from "api/pokemonApi";
import { PokemonData, PokemonListResponse } from "interfaces/pokemonInterfaces";
import Image from "next/image";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: PokemonData[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokémon primera generación">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={pokemon.img} width="100%" height={800} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{pokemon.name}</Text>
                  <Text># {pokemon.id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

// Se ejecuta en el lado del servidor y solo se ejecuta en build time
export const getStaticProps: GetStaticProps = async (context) => {
  const { data: pokemons } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  let pokemonsData: PokemonData[] = pokemons.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png`,
    };
  });

  return {
    props: {
      pokemons: pokemonsData,
    },
  };
};

export default HomePage;
