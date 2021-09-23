import { Background } from 'components/Background';
import React, { ReactNode } from 'react';
import { Modal, ModalProps, View } from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
};
export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType='fade' {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}>{children}</View>
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
