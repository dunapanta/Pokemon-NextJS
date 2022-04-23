import React, { FC } from "react";
import Head from "next/head";

interface Props {
  title?: string;
  children: React.ReactNode;
}

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
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
