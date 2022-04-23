import type { NextPage } from "next";
import { Button } from "@nextui-org/react";

import { Layout } from "components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokémon primera generación">
      <Button color="gradient">Pokémon</Button>
    </Layout>
  );
};

export default HomePage;
