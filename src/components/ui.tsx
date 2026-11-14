import { Feather } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { colors, fonts, radius, space } from '@/constants/theme';

export function Kicker({ children }: { children: ReactNode }) {
  return <Text style={styles.kicker}>{children}</Text>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <Text style={styles.lead}>{children}</Text>;
}

export function BodyText({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

export function Card({
  children,
  style,
  tone = 'default',
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  tone?: 'default' | 'accent';
}) {
  return <View style={[styles.card, tone === 'accent' && styles.cardAccent, style]}>{children}</View>;
}

export function SectionHeading({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionIndex}>{index}</Text>
      <View style={styles.sectionText}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {caption ? <Text style={styles.sectionCaption}>{caption}</Text> : null}
      </View>
    </View>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagLabel}>{children}</Text>
    </View>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletArrow}>-&gt;</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function Button({
  label,
  onPress,
  variant = 'solid',
  icon,
  style,
}: {
  label: string;
  onPress: () => void;
  variant?: 'solid' | 'ghost';
  icon?: keyof typeof Feather.glyphMap;
  style?: StyleProp<ViewStyle>;
}) {
  const solid = variant === 'solid';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        solid ? styles.buttonSolid : styles.buttonGhost,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.buttonLabel, solid ? styles.buttonLabelSolid : styles.buttonLabelGhost]}>
        {label}
      </Text>
      {icon ? <Feather name={icon} size={14} color={solid ? colors.bg : colors.accent} /> : null}
    </Pressable>
  );
}

export function LinkRow({
  index,
  label,
  hint,
  onPress,
}: {
  index: string;
  label: string;
  hint: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${label} — ${hint}`}
      onPress={onPress}
      style={({ pressed }) => [styles.linkRow, pressed && styles.linkRowPressed]}
    >
      <Text style={styles.linkIndex}>{index}</Text>
      <View style={styles.linkBody}>
        <Text style={styles.linkLabel}>{label}</Text>
        <Text style={styles.linkHint}>{hint}</Text>
      </View>
      <Feather name="arrow-up-right" size={17} color={colors.accent} />
    </Pressable>
  );
}

export const uiStyles = StyleSheet.create({
  mono: { fontFamily: fonts.mono, color: colors.accent },
});

const styles = StyleSheet.create({
  kicker: {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: space.md,
  },
  lead: {
    fontFamily: fonts.body,
    fontSize: 15.5,
    lineHeight: 24,
    color: colors.textMid,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textMid,
  },
  card: {
    backgroundColor: colors.bgSoft,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg + 2,
  },
  cardAccent: {
    borderColor: colors.accentLine,
    backgroundColor: colors.bgElev,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: space.md,
    marginBottom: space.lg,
    marginTop: space.xxl,
  },
  sectionIndex: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.accent,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  sectionText: { flex: 1 },
  sectionTitle: {
    fontFamily: fonts.displaySemi,
    fontSize: 20,
    color: colors.text,
    letterSpacing: -0.3,
  },
  sectionCaption: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.textDim,
    marginTop: 3,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgElev,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagLabel: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.textMid,
  },
  bullet: {
    flexDirection: 'row',
    gap: space.sm,
    marginBottom: space.sm,
  },
  bulletArrow: {
    fontFamily: fonts.mono,
    fontSize: 13,
    lineHeight: 22,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textMid,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg + 2,
    paddingVertical: 13,
    borderRadius: radius.md,
    borderWidth: 1,
  },
  buttonSolid: { backgroundColor: colors.accent, borderColor: colors.accent },
  buttonGhost: { backgroundColor: 'transparent', borderColor: colors.borderStrong },
  buttonLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 14.5,
  },
  buttonLabelSolid: { color: colors.bg },
  buttonLabelGhost: { color: colors.text },
  pressed: { opacity: 0.72 },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgSoft,
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    paddingVertical: space.md + 2,
    marginBottom: space.sm + 2,
  },
  linkRowPressed: { backgroundColor: colors.bgElev, borderColor: colors.borderStrong },
  linkIndex: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.textDim,
  },
  linkBody: { flex: 1 },
  linkLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 15,
    color: colors.text,
  },
  linkHint: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    color: colors.textDim,
    marginTop: 2,
  },
});
