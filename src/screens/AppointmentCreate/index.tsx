import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Header } from "components/Header";
import { Background } from "components/Background";
import { CategorySelect } from "components/CategorySelect";

import BannerImg from "assets/banner.png";

import { styles } from "./styles";
import { theme } from "global/styles/theme";
import { GuildIcon } from "components/GuildIcon";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <Header title="Agendar partida" />
      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {/* <View style={styles.image} /> */}

            {<GuildIcon />}

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione u servidor</Text>
            </View>

            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.heading}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}
