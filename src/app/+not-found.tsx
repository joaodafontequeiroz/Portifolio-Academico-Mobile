import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Screen } from '@/components/screen';
import { Button } from '@/components/ui';
import { colors, fonts, space } from '@/constants/theme';

export default function NotFound() {
  return (
    <Screen back kicker="404" title="Rota não encontrada." subtitle="O caminho que você abriu não existe neste app.">
      <Text style={styles.text}>
        {">~ "}cd / e tente novamente — todas as telas estão no menu lateral.
      </Text>
      <Button label="voltar para o início" icon="home" onPress={() => router.navigate('/')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.mono,
    fontSize: 12,
    lineHeight: 20,
    color: colors.textMid,
    marginBottom: space.lg,
  },
});
