import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Background } from "../../components/Background";
import { CardTime } from "../../components/CardTime";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { theme } from "../../global/styles/theme";
import { data } from "../../utils/data";

import { styles } from "./styles";

export const List: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [searchAprov, setSearchAprov] = useState("");
  const [searchGols, setSearchGols] = useState("");
  const [dataFiltered, setDataFiltered] = useState(data);

  const filterDataByName = () => {
    const newData = data.filter((item) => {
      return item.time.nome_popular
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
    setDataFiltered(newData);
  };

  const filterDataByAprov = () => {
    const newData = data.filter((item) => {
      return item.aproveitamento >= Number(searchAprov);
    });
    setDataFiltered(newData);
  };

  const filterDataByGols = () => {
    const newData = data.filter((item) => {
      return item.saldo_gols >= Number(searchGols);
    });
    setDataFiltered(newData);
  };

  const filterVenceu = () => {
    setSearchAprov("");
    setSearchGols("");
    setSearchName("");
    const newData = data.filter((item) => {
      return item.ultimos_jogos[0] === "v";
    });
    setDataFiltered(newData);
  };

  const filterPerdeu = () => {
    setSearchAprov("");
    setSearchGols("");
    setSearchName("");
    const newData = data.filter((item) => {
      return item.ultimos_jogos[0] === "d";
    });
    setDataFiltered(newData);
  };
  const resetfilters = () => {
    setDataFiltered(data);
    setSearchAprov("");
    setSearchGols("");
    setSearchName("");
  };

  useEffect(() => {
    if (
      searchName.length === 0 ||
      searchAprov.length === 0 ||
      searchGols.length === 0
    ) {
      setDataFiltered(data);
    }
  }, [searchName, searchGols, searchAprov]);
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={{ marginBottom: 20, marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Filtros</Text>
            <TouchableOpacity
              onPress={resetfilters}
              style={{ backgroundColor: "yellow", padding: 5, borderRadius: 8 }}
            >
              <Text>REDEFINIR</Text>
            </TouchableOpacity>
          </View>
          <Input
            placeholderTextColor={theme.colors.highlight}
            placeholder="Digite para filtrar por nome"
            value={searchName}
            onChangeText={(text) => setSearchName(text)}
            onBlur={filterDataByName}
          />
          <Input
            keyboardType="numeric"
            placeholderTextColor={theme.colors.highlight}
            placeholder="Filtar por Aproveitamento"
            value={searchAprov}
            onChangeText={(text) => setSearchAprov(text)}
            onBlur={filterDataByAprov}
          />
          <Input
            keyboardType="numeric"
            placeholderTextColor={theme.colors.highlight}
            placeholder="Filtar por saldo de gols"
            value={searchGols}
            onChangeText={(text) => setSearchGols(text)}
            onBlur={filterDataByGols}
          />
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={filterVenceu}
              style={{ backgroundColor: "green", padding: 10, borderRadius: 8 }}
            >
              <Text>Venceu último jogo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={filterPerdeu}
              style={{ backgroundColor: "red", padding: 10, borderRadius: 8 }}
            >
              <Text>Perdeu último jogo</Text>
            </TouchableOpacity>
          </View>
        </View>
        {dataFiltered.map((item) => (
          <View key={item.time.sigla}>
            <CardTime key={item.time.sigla} data={item} />
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </Background>
  );
};
