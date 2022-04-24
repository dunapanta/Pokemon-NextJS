import React from "react";
import { Card, Row, Text } from "@nextui-org/react";

import { PokemonData } from "interfaces/pokemonInterfaces";

interface Props {
  pokemon: PokemonData;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card hoverable clickable>
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
