import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Header() {
  const getMessage = useMemo(() => {
    const messages = ["Hoje é dia de vitória", "Bora finalizar o dia invicto?", "Ouse desafiar"];
    const message = messages[Math.floor(Math.random() * messages.length)];
    return message;
  }, []);

  return (
    <View style={styles.container}>
        <Avatar urlImage='https://hit-game.com/assets/images/png/hit-logo.png' />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Bem-vindo</Text>
        </View>
        <Text style={styles.message}>{getMessage}</Text>
      </View>
    </View>
  );
}