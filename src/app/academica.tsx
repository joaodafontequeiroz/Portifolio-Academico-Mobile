import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Bullet, Button, Card, SectionHeading, Tag } from '@/components/ui';
import { colors, fonts, space } from '@/constants/theme';
import { academicExperiences, academicSubjects, education } from '@/data/resume';

export default function Academica() {
  return (
    <Screen
      kicker="./formacao --academica"
      title="Experiência acadêmica."
      subtitle="Graduação, monitoria e as disciplinas que sustentam o que construo."
    >
      <Card tone="accent" style={styles.degreeCard}>
        <Text style={styles.cardLabel}>graduação</Text>
        <Text style={styles.degree}>{education.degree}</Text>
        <Text style={styles.institution}>{education.institution}</Text>

        <View style={styles.periodRow}>
          <View style={styles.statusDot} />
          <Text style={styles.period}>
            {education.period} · {education.status}
          </Text>
        </View>

        <View style={styles.highlights}>
          {education.highlights.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </View>
      </Card>

      <SectionHeading
        index="01"
        title="monitoria & pesquisa"
        caption="onde a teoria virou prática com outras pessoas"
      />

      {academicExperiences.map((experience) => (
        <Card key={experience.role} style={styles.experienceCard}>
          <Text style={styles.periodSmall}>{experience.period}</Text>
          <Text style={styles.role}>
            {experience.role} <Text style={styles.at}>@</Text>{' '}
            <Text style={styles.org}>{experience.org}</Text>
          </Text>
          <Text style={styles.description}>{experience.description}</Text>

          <View style={styles.tags}>
            {experience.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </View>
        </Card>
      ))}

      <SectionHeading index="02" title="disciplinas" caption="a base que aparece em cada projeto" />
      <View style={styles.tags}>
        {academicSubjects.map((subject) => (
          <Tag key={subject}>{subject}</Tag>
        ))}
      </View>

      <Button
        label="ver os projetos da graduação"
        icon="arrow-right"
        onPress={() => router.navigate('/projetos')}
        style={styles.button}
      />

      <Text style={styles.note}>
        {">~ "}a maior parte dos projetos abaixo nasceu de disciplinas do curso.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  degreeCard: { marginTop: space.sm },
  cardLabel: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: space.sm,
  },
  degree: {
    fontFamily: fonts.displaySemi,
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
    letterSpacing: -0.4,
  },
  institution: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.textMid,
    marginTop: 4,
  },
  periodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: space.md,
    marginBottom: space.md,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.ok,
  },
  period: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.textMid,
  },
  highlights: { marginTop: space.xs },
  experienceCard: { marginBottom: space.md },
  periodSmall: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  role: {
    fontFamily: fonts.bodySemi,
    fontSize: 15.5,
    lineHeight: 22,
    color: colors.text,
  },
  at: { color: colors.accent },
  org: { color: colors.accent },
  description: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textMid,
    marginTop: space.sm,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.md,
  },
  button: { marginTop: space.xxl },
  note: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.md,
  },
});
