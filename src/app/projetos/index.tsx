import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Tag } from '@/components/ui';
import { colors, fonts, space } from '@/constants/theme';
import { projects } from '@/data/projects';

export default function Projetos() {
  return (
    <Screen
      kicker="./projetos --all"
      title="Projetos."
      subtitle={`${projects.length} projetos — de sistemas web a hardware, passando por bancos de dados e 3D no navegador.`}
    >
      {projects.map((project, index) => (
        <Pressable
          key={project.slug}
          accessibilityRole="button"
          accessibilityLabel={`Abrir detalhes de ${project.title}`}
          onPress={() =>
            router.push({ pathname: '/projetos/[slug]', params: { slug: project.slug } })
          }
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        >
          <Card>
            <View style={styles.topRow}>
              <Text style={styles.index}>{String(index + 1).padStart(2, '0')}</Text>
              <Text style={styles.category}>
                [{project.category.toLowerCase()}] · {project.year}
              </Text>
            </View>

            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.tagline}>{project.tagline}</Text>
            <Text style={styles.short}>{project.short}</Text>

            <View style={styles.bottomRow}>
              <View style={styles.tags}>
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </View>
              <Feather name="arrow-right" size={16} color={colors.accent} />
            </View>
          </Card>
        </Pressable>
      ))}

      <Text style={styles.more}>
        {">~ "}mais experimentos no GitHub · @joaodafontequeiroz
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  pressable: { marginBottom: space.md },
  pressed: { opacity: 0.75 },
  topRow: {
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
  category: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.accent,
  },
  title: {
    fontFamily: fonts.displaySemi,
    fontSize: 20,
    letterSpacing: -0.3,
    color: colors.text,
  },
  tagline: {
    fontFamily: fonts.bodyMedium,
    fontSize: 13,
    lineHeight: 19,
    color: colors.textMid,
    marginTop: 3,
  },
  short: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.textDim,
    marginTop: space.sm,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: space.sm,
    marginTop: space.md,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  more: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.md,
    textAlign: 'center',
  },
});
