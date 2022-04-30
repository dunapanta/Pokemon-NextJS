import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "components/layouts";
import pokemonApi from "api/pokemonApi";
import { SinglePokemonResponse } from "interfaces/singlePokemonInterfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: SinglePokemonResponse;
}

const SinglePokemon: NextPage<Props> = ({ pokemon }: Props) => {
  const router = useRouter();
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
              <Button color="gradient" ghost>
                Guardar en favoritos
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
