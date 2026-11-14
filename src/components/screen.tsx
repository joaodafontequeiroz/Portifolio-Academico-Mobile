import { Feather } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import type { ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Kicker } from '@/components/ui';
import { colors, fonts, layout, space } from '@/constants/theme';

type ScreenProps = {
  children: ReactNode;
  kicker?: string;
  title?: string;
  subtitle?: string;
  back?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  footer?: ReactNode;
};

export function Screen({
  children,
  kicker,
  title,
  subtitle,
  back = false,
  contentStyle,
  footer,
}: ScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <TopBar back={back} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + space.xxl },
          contentStyle,
        ]}
      >
        {kicker ? <Kicker>{kicker}</Kicker> : null}
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        {children}
        {footer}
      </ScrollView>
    </View>
  );
}

export function TopBar({ back = false }: { back?: boolean }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const openDrawer = () => {
    const drawer = navigation as unknown as { openDrawer?: () => void };
    drawer.openDrawer?.();
  };

  return (
    <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={back ? 'Voltar' : 'Abrir menu'}
        hitSlop={12}
        onPress={() => (back ? router.back() : openDrawer())}
        style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      >
        <Feather name={back ? 'arrow-left' : 'menu'} size={20} color={colors.text} />
      </Pressable>

      <Text style={styles.logo}>
        <Text style={styles.logoPrompt}>&gt;~</Text> {back ? 'voltar' : 'joão'}
      </Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Abrir o jogo da forca"
        hitSlop={12}
        onPress={() => router.navigate('/jogo')}
        style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      >
        <Feather name="terminal" size={18} color={colors.accent} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.md,
    paddingBottom: space.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.bg,
  },
  iconButton: {
    width: 40,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  pressed: { opacity: 0.55 },
  logo: {
    fontFamily: fonts.mono,
    fontSize: 13,
    color: colors.text,
    letterSpacing: 0.2,
  },
  logoPrompt: { color: colors.accent },
  content: {
    paddingHorizontal: layout.screenPadding,
    paddingTop: space.xl,
    width: '100%',
    maxWidth: layout.maxWidth,
    alignSelf: 'center',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 39,
    letterSpacing: -1,
    color: colors.text,
    marginBottom: space.md,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.textMid,
    marginBottom: space.sm,
  },
});
