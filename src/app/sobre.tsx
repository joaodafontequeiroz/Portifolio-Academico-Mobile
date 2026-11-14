import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { BodyText, Bullet, Card, SectionHeading, Tag } from '@/components/ui';
import { colors, fonts, radius, space } from '@/constants/theme';
import { site } from '@/data/site';
import { stack } from '@/data/stack';

export default function Sobre() {
  return (
    <Screen
      kicker="./sobre --stack"
      title="Sobre mim."
      subtitle="Quem escreve este portfólio e com o que ele foi construído."
    >
      <View style={styles.bio}>
        {site.bio.map((paragraph) => (
          <BodyText key={paragraph.slice(0, 24)} style={styles.paragraph}>
            {paragraph}
          </BodyText>
        ))}
      </View>

      <View style={styles.tags}>
        {site.focus.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </View>

      <SectionHeading
        index="01"
        title="tecnologias & módulos"
        caption="tudo o que roda neste app, do runtime ao QR Code"
      />

      {stack.map((group) => (
        <View key={group.title} style={styles.group}>
          <View style={styles.groupHeader}>
            <Text style={styles.groupTitle}>[{group.title}]</Text>
            <Text style={styles.groupCaption}>{group.caption}</Text>
          </View>

          <Card style={styles.groupCard}>
            {group.items.map((item, index) => (
              <View
                key={item.name}
                style={[styles.stackRow, index < group.items.length - 1 && styles.stackRowBorder]}
              >
                <Text style={styles.stackName}>{item.name}</Text>
                <Text style={styles.stackRole}>{item.role}</Text>
              </View>
            ))}
          </Card>
        </View>
      ))}

      <SectionHeading index="02" title="como o app foi montado" caption="decisões que valem registro" />

      <Card tone="accent">
        <Bullet>
          Expo Router com drawer lateral em todas as telas e rota dinâmica /projetos/[slug].
        </Bullet>
        <Bullet>
          Jogo da forca portado do React para componentes nativos: roda dentro do app, sem WebView
          e sem link para a versão web.
        </Bullet>
        <Bullet>
          Tema escuro com Space Grotesk, Inter e JetBrains Mono carregadas via expo-font.
        </Bullet>
        <Bullet>Publicação via EAS Update, com QR Code over-the-air para abrir no Expo Go.</Bullet>
      </Card>

      <Text style={styles.signature}>
        {">~ "}recife, pernambuco · {site.period}
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bio: { gap: space.md, marginTop: space.sm },
  paragraph: { fontSize: 15, lineHeight: 25 },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.lg,
  },
  group: { marginBottom: space.xl },
  groupHeader: { marginBottom: space.sm },
  groupTitle: {
    fontFamily: fonts.mono,
    fontSize: 12,
    color: colors.accent,
    letterSpacing: 0.4,
  },
  groupCaption: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textDim,
    marginTop: 2,
  },
  groupCard: { padding: 0 },
  stackRow: { paddingHorizontal: space.lg, paddingVertical: space.md },
  stackRowBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  stackName: {
    fontFamily: fonts.bodySemi,
    fontSize: 13.5,
    color: colors.text,
  },
  stackRole: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    lineHeight: 19,
    color: colors.textDim,
    marginTop: 3,
  },
  signature: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.textDim,
    marginTop: space.xl,
    borderRadius: radius.sm,
  },
});
