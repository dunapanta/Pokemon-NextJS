import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
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
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png" alt="" width={70} height={70} />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        OKÉMON
      </Text>

      {/* Space */}
      <Spacer css={{ flex: 1 }} />

      {/* Fav */}
      <Text color="white">Favoritos</Text>
    </div>
  );
};
