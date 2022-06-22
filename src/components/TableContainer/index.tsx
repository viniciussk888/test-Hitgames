import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

import { DataTable } from "react-native-paper";

import { data } from "../../utils/data";
import { SvgUri } from "react-native-svg";

export const TableContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <DataTable style={styles.table}>
          {data.map((item) => (
            <DataTable.Row key={item.time.sigla}>
                <DataTable.Cell>N° {item.posicao} |</DataTable.Cell>
                <DataTable.Cell>Pontos: {item.pontos} |</DataTable.Cell>
              <DataTable.Cell>
                <SvgUri width={20} height={20} uri={item.time.escudo} />
              </DataTable.Cell>
              <DataTable.Cell>{item.time.nome_popular}</DataTable.Cell>
              <DataTable.Cell>{item.time.sigla} |</DataTable.Cell>
              <DataTable.Cell>Jogos: {item.jogos} |</DataTable.Cell>
              <DataTable.Cell>Vitórias: {item.vitorias} |</DataTable.Cell>
              <DataTable.Cell>Empates: {item.empates} |</DataTable.Cell>
              <DataTable.Cell>Derrotas: {item.derrotas} |</DataTable.Cell>
              <DataTable.Cell>Gols pró: {item.gols_pro} |</DataTable.Cell>
              <DataTable.Cell>Gols contra: {item.gols_contra} |</DataTable.Cell>
              <DataTable.Cell>
                Saldo de gols: {item.saldo_gols} |
              </DataTable.Cell>
              <DataTable.Cell>
                Aproveitamento: {item.aproveitamento}% |
              </DataTable.Cell>
              <DataTable.Cell>
                Últimos jogos: {item.ultimos_jogos}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};
