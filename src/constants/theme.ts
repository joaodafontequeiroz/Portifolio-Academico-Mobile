/**
 * Tokens visuais do portfólio.
 * Mesma paleta escura + accent âmbar usada na versão web, adaptada ao mobile.
 */

export const colors = {
  bg: '#0b0c0e',
  bgSoft: '#101216',
  bgElev: '#14171c',
  border: '#20242b',
  borderStrong: '#2e343e',
  text: '#e9e7e1',
  textMid: '#a3a199',
  textDim: '#6d6c66',
  accent: '#ffb454',
  accentSoft: 'rgba(255, 180, 84, 0.12)',
  accentLine: 'rgba(255, 180, 84, 0.28)',
  ok: '#7bd88f',
  danger: '#ff6b6b',
  overlay: 'rgba(0, 0, 0, 0.55)',
} as const;

export const fonts = {
  display: 'SpaceGrotesk_700Bold',
  displaySemi: 'SpaceGrotesk_600SemiBold',
  displayMedium: 'SpaceGrotesk_500Medium',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemi: 'Inter_600SemiBold',
  mono: 'JetBrainsMono_400Regular',
  monoMedium: 'JetBrainsMono_500Medium',
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const layout = {
  screenPadding: 20,
  maxWidth: 560,
} as const;
