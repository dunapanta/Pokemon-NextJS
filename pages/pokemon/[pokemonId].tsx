import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "components/layouts";
import pokemonApi from "api/pokemonApi";
import { SinglePokemonResponse } from "interfaces/singlePokemonInterfaces";

interface Props {
  pokemon: SinglePokemonResponse;
}

const SinglePokemon: NextPage<Props> = ({ pokemon }: Props) => {
  const router = useRouter();
  return (
    <Layout title="">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsFirstGen = [...Array(151)].map((value, i) => `${i + 1}`);
  return {
    paths: pokemonsFirstGen.map((id) => ({ params: { pokemonId: id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonId } = params as { pokemonId: string };

  const { data: pokemon } = await pokemonApi.get<SinglePokemonResponse>(
    `/pokemon/${pokemonId}`
  );

  return {
    props: {
      pokemon,
    },
  };
};

export default SinglePokemon;
