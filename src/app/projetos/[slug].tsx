import { useLocalSearchParams } from 'expo-router';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, Kicker, Tag } from '@/components/ui';
import { colors, fonts, space } from '@/constants/theme';
import { getProject } from '@/data/projects';

export default function ProjetoDetalhe() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const project = getProject(slug);

  if (!project) {
    return (
      <Screen back kicker="./projetos" title="Projeto não encontrado.">
        <Text style={styles.notFound}>
          O projeto “{slug}” não está catalogado neste portfólio. Volte para a lista e escolha
          outro.
        </Text>
        <Button
          label="ver todos os projetos"
          icon="arrow-left"
          onPress={() => Linking.openURL('https://github.com/joaodafontequeiroz')}
          style={styles.button}
        />
      </Screen>
    );
  }

  return (
    <Screen back kicker={`./projetos/${project.slug}`} title={project.title} subtitle={project.tagline}>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>[{project.category.toLowerCase()}]</Text>
        <Text style={styles.meta}>{project.year}</Text>
        {project.featured ? <Text style={styles.featured}>destaque</Text> : null}
      </View>

      <Card style={styles.card}>
        <Kicker>sobre o projeto</Kicker>
        <Text style={styles.description}>{project.description}</Text>

        <Text style={styles.stackLabel}>stack</Text>
        <View style={styles.tags}>
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </View>
      </Card>

      <Button
        label="abrir repositório"
        icon="github"
        onPress={() => Linking.openURL(project.repo)}
      />
      <Text style={styles.note}>{">~ abre o GitHub no navegador do sistema"}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  notFound: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textMid,
  },
  button: { marginTop: space.lg },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    marginTop: space.sm,
    marginBottom: space.lg,
  },
  meta: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.textDim,
  },
  featured: {
    fontFamily: fonts.mono,
    fontSize: 10,
    color: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentLine,
    backgroundColor: colors.accentSoft,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  card: { marginBottom: space.lg },
  description: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 24,
    color: colors.textMid,
  },
  stackLabel: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.textDim,
    marginTop: space.lg,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.sm,
  },
  note: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.sm,
  },
});
