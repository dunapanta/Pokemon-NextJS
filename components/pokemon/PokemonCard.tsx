import React from "react";
import { Card, Row, Text } from "@nextui-org/react";

import { PokemonData } from "interfaces/pokemonInterfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card hoverable clickable onClick={onClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={pokemon.img} width="100%" height={100} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{pokemon.name}</Text>
          <Text># {pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
