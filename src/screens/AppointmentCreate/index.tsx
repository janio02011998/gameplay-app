import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { CategorySelect } from 'components/CategorySelect';
import { Background } from 'components/Background';
import { SmallInput } from 'components/SmallInput';
import { GuildIcon } from 'components/GuildIcon';
import { TextArea } from 'components/TextArea';
import { Header } from 'components/Header';

import { styles } from './styles';
import { theme } from 'global/styles/theme';
import { Button } from 'components/Button';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header title='Agendar partida' />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 36 },
        ]}
      >
        Categoria
      </Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <ScrollView style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {/* <View style={styles.image} /> */}

            {<GuildIcon />}

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione u servidor</Text>
            </View>

            <Feather
              name='chevron-right'
              size={18}
              color={theme.colors.heading}
            />
          </View>
        </RectButton>

        <View style={styles.field}>
          <View>
            <Text style={styles.label}>Dia e mês</Text>

            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>/</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Hora e minuto</Text>

            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>:</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
        </View>
        <TextArea
          multiline
          maxLength={100}
          numberOfLines={5}
          autoCorrect={false}
        />

        <View style={styles.footer}>
          <Button title='Agender' />
        </View>
      </ScrollView>
    </Background>
  );
}
