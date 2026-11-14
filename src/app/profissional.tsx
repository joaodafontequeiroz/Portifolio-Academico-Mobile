import { Linking, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Bullet, Button, Card, SectionHeading, Tag } from '@/components/ui';
import { colors, fonts, space } from '@/constants/theme';
import { professionalExperiences } from '@/data/resume';
import { site } from '@/data/site';

export default function Profissional() {
  return (
    <Screen
      kicker="./carreira --profissional"
      title="Experiência profissional."
      subtitle="Onde trabalho hoje e o que já construí na prática — dentro e fora da sala de aula."
    >
      {professionalExperiences.map((experience, index) => (
        <Card key={experience.role} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.index}>{String(index + 1).padStart(2, '0')}</Text>
            <Text style={styles.period}>{experience.period}</Text>
          </View>

          <Text style={styles.role}>{experience.role}</Text>
          <Text style={styles.org}>@ {experience.org}</Text>

          <Text style={styles.description}>{experience.description}</Text>

          <View style={styles.tags}>
            {experience.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </View>
        </Card>
      ))}

      <SectionHeading index="01" title="no dia a dia" caption="o que o estágio colocou em prática" />
      <Card tone="accent">
        <Bullet>C# e .NET na construção e manutenção de aplicações e serviços.</Bullet>
        <Bullet>Versionamento de código, padrões de projeto e revisão entre pares.</Bullet>
        <Bullet>Trabalho em equipe com rituais e entregas do ambiente corporativo.</Bullet>
        <Bullet>Arquitetura e integração de IA no Adapt, projeto integrador da UNICAP.</Bullet>
      </Card>

      <Button
        label="falar comigo"
        icon="mail"
        onPress={() => Linking.openURL(`mailto:${site.email}`)}
        style={styles.contactButton}
      />

      <Text style={styles.note}>
        {">~ "}
        {site.location} · disponível para estágios e projetos
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: space.md },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: space.sm,
  },
  index: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
  },
  period: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.accent,
    letterSpacing: 0.5,
  },
  role: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  org: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.accent,
    marginTop: 3,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textMid,
    marginTop: space.md,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.md,
  },
  contactButton: { marginTop: space.xxl },
  note: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.lg,
    textAlign: 'center',
  },
});
