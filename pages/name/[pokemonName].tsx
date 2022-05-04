import pokemonApi from "api/pokemonApi";
import { Layout } from "components/layouts";
import { FirstGenPokemonNamesResponse } from "interfaces/pokemonNamesInterfaces";
import { SinglePokemonResponse } from "interfaces/singlePokemonInterfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface Props {
  pokemon: SinglePokemonResponse;
}

const PokemonByNamePage = ({ pokemon }: Props) => {
  return (
    <Layout title={`${pokemon.name}`}>
      <h1>{pokemon.name}</h1>
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonName } = params as { pokemonName: string };
  const { data: singlePokemonName } =
    await pokemonApi.get<SinglePokemonResponse>(`/pokemon/${pokemonName}`);
  return {
    props: {
      pokemon: singlePokemonName,
    },
  };
};

export default PokemonByNamePage;
