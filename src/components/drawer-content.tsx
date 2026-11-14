import { Feather } from '@expo/vector-icons';
import { router, usePathname, type Href } from 'expo-router';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fonts, radius, space } from '@/constants/theme';
import { site } from '@/data/site';

type Item = {
  href: Href;
  label: string;
  hint: string;
  icon: keyof typeof Feather.glyphMap;
};

const items: Item[] = [
  { href: '/', label: 'início', hint: 'apresentação', icon: 'home' },
  { href: '/sobre', label: 'sobre', hint: 'quem sou e as tecnologias do app', icon: 'user' },
  {
    href: '/academica',
    label: 'experiência acadêmica',
    hint: 'graduação, monitoria e disciplinas',
    icon: 'book-open',
  },
  {
    href: '/profissional',
    label: 'experiência profissional',
    hint: 'estágio no SEBRAE e projetos',
    icon: 'briefcase',
  },
  { href: '/projetos', label: 'projetos', hint: '7 projetos catalogados', icon: 'folder' },
  {
    href: '/jogo',
    label: 'jogo da forca',
    hint: 'jogável aqui, em React Native',
    icon: 'terminal',
  },
];

export function DrawerContent() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top + space.lg }]}>
      <View style={styles.brand}>
        <Text style={styles.brandPrompt}>&gt;~</Text>
        <Text style={styles.brandName}>{site.shortName}</Text>
        <View style={styles.cursor} />
      </View>
      <Text style={styles.brandRole}>{site.role}</Text>
      <Text style={styles.brandMeta}>UNICAP · {site.location}</Text>

      <View style={styles.divider} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        <Text style={styles.listLabel}>{'// navegar'}</Text>
        {items.map((item, index) => {
          const href = String(item.href);
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Pressable
              key={item.label}
              accessibilityRole="button"
              accessibilityLabel={item.label}
              onPress={() => router.navigate(item.href)}
              style={({ pressed }) => [
                styles.item,
                active && styles.itemActive,
                pressed && styles.itemPressed,
              ]}
            >
              <Feather
                name={item.icon}
                size={16}
                color={active ? colors.accent : colors.textDim}
              />
              <View style={styles.itemBody}>
                <Text style={[styles.itemLabel, active && styles.itemLabelActive]}>
                  <Text style={styles.itemIndex}>{String(index + 1).padStart(2, '0')}.</Text>{' '}
                  {item.label}
                </Text>
                <Text style={styles.itemHint}>{item.hint}</Text>
              </View>
              {active ? <View style={styles.activeDot} /> : null}
            </Pressable>
          );
        })}

        <View style={styles.divider} />

        <Pressable
          accessibilityRole="link"
          onPress={() => Linking.openURL(`mailto:${site.email}`)}
          style={({ pressed }) => [styles.link, pressed && styles.itemPressed]}
        >
          <Feather name="mail" size={14} color={colors.textMid} />
          <Text style={styles.linkText}>{site.email}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="link"
          onPress={() => Linking.openURL(site.github.url)}
          style={({ pressed }) => [styles.link, pressed && styles.itemPressed]}
        >
          <Feather name="github" size={14} color={colors.textMid} />
          <Text style={styles.linkText}>{site.github.label}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="link"
          onPress={() => Linking.openURL(site.linkedin.url)}
          style={({ pressed }) => [styles.link, pressed && styles.itemPressed]}
        >
          <Feather name="linkedin" size={14} color={colors.textMid} />
          <Text style={styles.linkText}>{site.linkedin.label}</Text>
        </Pressable>
      </ScrollView>

      <Text style={[styles.exit, { paddingBottom: insets.bottom + space.lg }]}>
        <Text style={styles.exitMono}>exit 0</Text> · expo + react native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgSoft,
    paddingHorizontal: space.lg,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  brandPrompt: {
    fontFamily: fonts.mono,
    fontSize: 18,
    color: colors.accent,
  },
  brandName: {
    fontFamily: fonts.display,
    fontSize: 26,
    letterSpacing: -0.6,
    color: colors.text,
  },
  cursor: {
    width: 9,
    height: 4,
    backgroundColor: colors.accent,
    alignSelf: 'flex-end',
    marginBottom: 6,
  },
  brandRole: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    color: colors.textMid,
    marginTop: space.sm,
  },
  brandMeta: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: space.lg,
  },
  list: { paddingBottom: space.md },
  listLabel: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    letterSpacing: 0.8,
    marginBottom: space.md,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingHorizontal: space.md,
    paddingVertical: space.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 2,
  },
  itemActive: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.accentLine,
  },
  itemPressed: { opacity: 0.65 },
  itemBody: { flex: 1 },
  itemLabel: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    color: colors.text,
  },
  itemLabelActive: { color: colors.accent },
  itemIndex: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
  },
  itemHint: {
    fontFamily: fonts.body,
    fontSize: 11.5,
    color: colors.textDim,
    marginTop: 1,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingVertical: space.sm + 2,
    paddingHorizontal: space.md,
  },
  linkText: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.textMid,
  },
  exit: {
    fontFamily: fonts.body,
    fontSize: 11,
    color: colors.textDim,
  },
  exitMono: {
    fontFamily: fonts.mono,
    color: colors.textMid,
  },
});
