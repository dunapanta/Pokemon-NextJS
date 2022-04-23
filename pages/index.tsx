import type { GetStaticProps, NextPage } from "next";

import { Layout } from "components/layouts";

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Pokémon primera generación">
      <ul>
        <li>Pokemin 1</li>
      </ul>
    </Layout>
  );
};

// Se ejecuta en el lado del servidor y solo se ejecuta en build time
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("Desde getStaticProps");
  return {
    props: {
      name: "Pokemon SG",
    },
  };
};

export default HomePage;
