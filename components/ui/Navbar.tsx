import { Spacer, Text, useTheme, Link, Container } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0x 20px",
        backgroundColor: theme?.colors.purple900.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png"
              alt=""
              width={70}
              height={70}
            />
            <Text color="white" h2>
              P
            </Text>
            <Text css={{ marginTop: 14 }} color="white" h3>
              OKÉMON
            </Text>
          </div>
        </Link>
      </NextLink>

      {/* Space */}
      <Spacer css={{ flex: 1 }} />

      {/* Fav */}
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: 10 }}>
          <Text css={{ fontSize: 18, fontWeight: "bold" }} color="white">
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
