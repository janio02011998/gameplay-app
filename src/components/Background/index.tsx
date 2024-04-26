import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { LayoutChangeEvent } from "react-native";

type Props = {
  children: ReactNode;
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
};

export function Background({ children, onLayout }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      onLayout={onLayout}
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
