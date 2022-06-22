import React from "react";
import { ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { TableContainer } from "../../components/TableContainer";

import { styles } from "./styles";

export const Table: React.FC = () => {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Header />
      </View>
      <TableContainer />
      </ScrollView>
    </Background>
  );
};
