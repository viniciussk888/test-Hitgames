import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";

import { styles } from "./styles";

interface props {
  data: {
    posicao: number;
    pontos: number;
    time: {
      time_id: number;
      nome_popular: string;
      sigla: string;
      escudo: string;
    };
    jogos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    gols_pro: number;
    gols_contra: number,
    saldo_gols: number,
    aproveitamento: number,
    variacao_posicao: number,
    ultimos_jogos: string[],
  };
}

export function CardTime({ data }:props) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>

        <View
          style={styles.guildIconContainer}
        >
          <SvgUri
            width={50}
            height={50}
            uri={data.time.escudo}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.time.nome_popular}</Text>
            <Text style={styles.category}>Posição {data.posicao}º</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <Text style={styles.date}>{data.time.sigla}</Text>
            </View>

            <View style={styles.playersInfo}>
              <Text style={styles.player}>Pontos {data.pontos}</Text>
            </View>
          </View>
        </View>

      </View>
      </TouchableOpacity>
  );
}
