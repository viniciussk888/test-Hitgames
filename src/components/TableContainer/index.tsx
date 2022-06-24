import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

import { DataTable } from "react-native-paper";

import { data } from "../../utils/data";
import { SvgUri } from "react-native-svg";
import { SECardExpandable } from "../CardExpandable";

export const TableContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <SECardExpandable
          subtitle={`Posição: ${item.posicao} Pontos: ${item.pontos}`}
          uriSvg={item.time.escudo}
          key={item.time.time_id}
          radius={8}
          fontSize={16}
          titleColor="#000000"
          title={`${item.time.nome_popular} ${item.time.sigla}`}
          expanded={false}
        >
          <DataTable.Row>
            <DataTable.Cell>Vitórias: {item.vitorias}</DataTable.Cell>
            <DataTable.Cell>Empates: {item.empates}</DataTable.Cell>
            <DataTable.Cell>Derrotas: {item.derrotas}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Gols P: {item.gols_pro}</DataTable.Cell>
            <DataTable.Cell>Gols C: {item.gols_contra}</DataTable.Cell>
            <DataTable.Cell>Saldo: {item.saldo_gols}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Total Jogos: {item.jogos}</DataTable.Cell>
            <DataTable.Cell>
              Aproveitamento: {item.aproveitamento}%
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Últimos jogos: {item.ultimos_jogos}</DataTable.Cell>
          </DataTable.Row>
        </SECardExpandable>
      ))}
    </View>
  );
};
