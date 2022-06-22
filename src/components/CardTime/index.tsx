import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SvgUri } from "react-native-svg";
import { Dialog, Portal } from "react-native-paper";

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
    gols_contra: number;
    saldo_gols: number;
    aproveitamento: number;
    variacao_posicao: number;
    ultimos_jogos: string[];
  };
}

export function CardTime({ data }: props) {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <View style={styles.container}>
        <View style={styles.guildIconContainer}>
          <SvgUri width={50} height={50} uri={data.time.escudo} />
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
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              <View style={styles.modalContent}>
                <View style={styles.modalContentHeader}>
                  <SvgUri width={70} height={70} uri={data.time.escudo} />
                  <Text style={styles.textTitle}>
                    {data.time.nome_popular} {data.time.sigla}
                  </Text>
                </View>
                <View style={styles.modalContentBody}>
                  <Text style={styles.textRow}>Posição {data.posicao}</Text>
                  <Text style={styles.textRow}>Pontos {data.pontos}</Text>
                </View>
                <View style={styles.modalContentBody}>
                  <Text style={styles.textRow}>V. {data.vitorias}</Text>
                  <Text style={styles.textRow}>D. {data.derrotas}</Text>
                  <Text style={styles.textRow}>E. {data.empates}</Text>
                </View>
                <View style={styles.modalContentBody}>
                  <Text style={styles.textRow}>Gols P. {data.gols_pro}</Text>
                  <Text style={styles.textRow}>Gols C. {data.gols_contra}</Text>
                  <Text style={styles.textRow}>Saldo {data.saldo_gols}</Text>
                </View>
                <View style={styles.modalContentBody}>
                  <Text style={styles.textRow}>Jogos {data.jogos}</Text>
                  <Text style={styles.textRow}>Aproveitamento {data.aproveitamento}%</Text>
                </View>
                <View style={styles.modalContentBody}>
                  <Text style={styles.textRow}>
                    Ultimos jogos:{" "}
                    {data.ultimos_jogos.map((item) => (
                      <Text style={styles.textRow}>{item.toLocaleUpperCase()} </Text>
                    ))}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    </TouchableOpacity>
  );
}
