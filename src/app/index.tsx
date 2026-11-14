import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, LinkRow, SectionHeading } from '@/components/ui';
import { colors, fonts, radius, space } from '@/constants/theme';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

const navegacao = [
  { index: '01', label: 'sobre', hint: 'quem sou e as tecnologias deste app', href: '/sobre' },
  {
    index: '02',
    label: 'experiência acadêmica',
    hint: 'UNICAP, monitoria e disciplinas',
    href: '/academica',
  },
  {
    index: '03',
    label: 'experiência profissional',
    hint: 'SEBRAE, Adapt e o dia a dia de dev',
    href: '/profissional',
  },
  {
    index: '04',
    label: 'projetos',
    hint: `${projects.length} projetos de web a hardware`,
    href: '/projetos',
  },
  {
    index: '05',
    label: 'jogo da forca',
    hint: 'jogável aqui dentro, em React Native',
    href: '/jogo',
  },
] as const;

export default function Home() {
  return (
    <Screen contentStyle={styles.content}>
      <LinearGradient
        colors={['#1c222b', '#0e1014']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.glow} />
        <Text style={styles.heroKicker}>
          {site.role} — {site.institution}
        </Text>

        <Text style={styles.heroName}>
          João Da Fonte{'\n'}Queiroz<Text style={styles.heroDot}>.</Text>
        </Text>

        <Text style={styles.heroLead}>
          Desenvolvo software com foco em <Text style={styles.emphasis}>resolução de problemas</Text>,{' '}
          <Text style={styles.emphasis}>orientação a objetos</Text> e{' '}
          <Text style={styles.emphasis}>bancos de dados relacionais</Text>.
        </Text>

        <View style={styles.heroActions}>
          <Button
            label="ver projetos"
            icon="arrow-right"
            onPress={() => router.navigate('/projetos')}
          />
          <Button
            label="jogar forca"
            variant="ghost"
            icon="terminal"
            onPress={() => router.navigate('/jogo')}
          />
        </View>

        <Text style={styles.heroMeta}>
          <Text style={styles.heroMetaCommand}>$ ls projetos/ | wc -l</Text> → {projects.length}
        </Text>
      </LinearGradient>

      <Card style={styles.terminal}>
        <Text style={styles.termLine}>
          <Text style={styles.termPrompt}>&gt;~</Text> whoami
        </Text>
        <Text style={styles.termOut}>joão da fonte queiroz</Text>

        <Text style={[styles.termLine, styles.termSpacing]}>
          <Text style={styles.termPrompt}>&gt;~</Text> cat foco.txt
        </Text>
        {site.focus.map((item) => (
          <Text key={item} style={styles.termOut}>
            {item}
          </Text>
        ))}

        <View style={styles.cursorRow}>
          <Text style={styles.termPrompt}>&gt;~</Text>
          <View style={styles.cursor} />
        </View>
      </Card>

      <SectionHeading index="01" title="navegar" caption="todas as telas deste app" />
      <View>
        {navegacao.map((item) => (
          <LinkRow
            key={item.href}
            index={item.index}
            label={item.label}
            hint={item.hint}
            onPress={() => router.navigate(item.href)}
          />
        ))}
      </View>

      <SectionHeading
        index="02"
        title="contato"
        caption="aberto a projetos, estágios, pesquisa e boas conversas"
      />
      <LinkRow
        index="@"
        label={site.email}
        hint="abrir e-mail"
        onPress={() => Linking.openURL(`mailto:${site.email}`)}
      />
      <LinkRow
        index="gh"
        label={site.github.label}
        hint={site.github.handle}
        onPress={() => Linking.openURL(site.github.url)}
      />
      <LinkRow
        index="in"
        label={site.linkedin.label}
        hint={site.linkedin.handle}
        onPress={() => Linking.openURL(site.linkedin.url)}
      />

      <Pressable
        accessibilityRole="link"
        onPress={() => Linking.openURL(`mailto:${site.email}`)}
        style={({ pressed }) => [styles.location, pressed && { opacity: 0.6 }]}
      >
        <Feather name="map-pin" size={13} color={colors.textDim} />
        <Text style={styles.locationText}># {site.location}</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerLine}>
          <Text style={styles.footerPrompt}>&gt;~</Text> designed &amp; built por{' '}
          <Text style={styles.footerName}>{site.name}</Text>
        </Text>
        <Text style={styles.footerMeta}>expo · react native · typescript — 2026</Text>
        <Text style={styles.footerMeta}>
          {projects.length} projetos catalogados · <Text style={styles.footerExit}>exit 0</Text>
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: space.sm },
  hero: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    padding: space.xl,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(255, 180, 84, 0.10)',
    top: -110,
    right: -80,
  },
  heroKicker: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: space.md,
  },
  heroName: {
    fontFamily: fonts.display,
    fontSize: 36,
    lineHeight: 39,
    letterSpacing: -1.3,
    color: colors.text,
  },
  heroDot: { color: colors.accent },
  heroLead: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.textMid,
    marginTop: space.md,
  },
  emphasis: { color: colors.text, fontFamily: fonts.bodyMedium },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.sm,
    marginTop: space.lg,
  },
  heroMeta: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.lg,
  },
  heroMetaCommand: { color: colors.textMid },
  terminal: {
    marginTop: space.md,
    backgroundColor: '#0d0f12',
    borderRadius: radius.md,
    padding: space.lg,
  },
  termLine: {
    fontFamily: fonts.mono,
    fontSize: 12,
    color: colors.text,
    lineHeight: 20,
  },
  termSpacing: { marginTop: space.sm },
  termPrompt: { color: colors.accent },
  termOut: {
    fontFamily: fonts.mono,
    fontSize: 12,
    lineHeight: 20,
    color: colors.textDim,
    paddingLeft: 20,
  },
  cursorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: space.sm,
  },
  cursor: {
    width: 8,
    height: 14,
    backgroundColor: colors.accent,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: space.lg,
  },
  locationText: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.textDim,
  },
  footer: {
    marginTop: space.xxl,
    paddingTop: space.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
    gap: 3,
  },
  footerLine: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textDim,
    textAlign: 'center',
  },
  footerPrompt: { fontFamily: fonts.mono, color: colors.accent },
  footerName: { color: colors.textMid },
  footerMeta: {
    fontFamily: fonts.mono,
    fontSize: 10,
    color: colors.textDim,
    textAlign: 'center',
  },
  footerExit: { color: colors.ok },
});
