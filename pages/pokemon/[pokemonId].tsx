import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "components/layouts";

interface Props {
  id: string;
  name: string;
}

const SinglePokemon: NextPage<Props> = ({ id, name }: Props) => {
  const router = useRouter();
  return (
    <Layout title="">
      <h1>
        {id} - {name}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {
          pokemonId: "1",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  /* const { data: pokemons } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  ); */

  return {
    props: {
      id: 1,
      name: "Bulbasor",
    },
  };
};

export default SinglePokemon;
