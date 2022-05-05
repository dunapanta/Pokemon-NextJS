import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "components/ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({
  children,
  title = "Pokemon App",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Daniel Unapanta" />
        <meta name="description" content="Información sobre el pokemon" />
        <meta name="keywords" content="pokemon, información, pokedex" />

        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Datos curiosos sobre el pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/pokemon.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
