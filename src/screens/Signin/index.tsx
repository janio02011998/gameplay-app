import React from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";

import { useAuth } from "../../hooks/auth";

import { useNavigation } from "@react-navigation/native";
import IllustrationImg from "assets/illustration.png";
import { ButtonIcon } from "components/ButtonIcon";
import { Background } from "components/Background";

import { styles } from "./style";

export function SignIn() {
  const navigation = useNavigation();
  const { signIn, user, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(String(error));
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`}
            suas jogatinas {`\n`}
            facilmente {`\n`}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
