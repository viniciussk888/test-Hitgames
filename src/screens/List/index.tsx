import React from "react";
import { ScrollView, View } from "react-native";
import { Background } from "../../components/Background";
import { CardTime } from "../../components/CardTime";
import { Header } from "../../components/Header";
import { data } from "../../utils/data";

import { styles } from "./styles";

export const List: React.FC = () => {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Header />
        </View>
        {data.map((item) => (
          <View key={item.time.sigla}>
            <CardTime data={item} />
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </Background>
  );
};
