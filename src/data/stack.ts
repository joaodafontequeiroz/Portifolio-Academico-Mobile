/**
 * Tudo o que foi usado para construir este app.
 * A tela "Sobre" lista esta estrutura completa.
 */

export type StackGroup = {
  title: string;
  caption: string;
  items: { name: string; role: string }[];
};

export const stack: StackGroup[] = [
  {
    title: 'base',
    caption: 'o que roda embaixo de tudo',
    items: [
      {
        name: 'React Native 0.88',
        role: 'componentes nativos de iOS e Android a partir de um único código',
      },
      {
        name: 'Expo SDK 58',
        role: 'runtime, módulos nativos e ferramentas de desenvolvimento',
      },
      { name: 'React 19', role: 'estado, hooks e composição das telas' },
      { name: 'TypeScript 6', role: 'tipagem estática em todo o projeto' },
    ],
  },
  {
    title: 'navegação',
    caption: 'Expo Router em todas as transições',
    items: [
      {
        name: 'Expo Router',
        role: 'rotas por arquivo, drawer lateral e rota dinâmica /projetos/[slug]',
      },
      {
        name: 'react-native-screens',
        role: 'telas nativas, com melhor desempenho e gestos do sistema',
      },
      {
        name: 'react-native-safe-area-context',
        role: 'respeito ao notch, ilha dinâmica e barras do Android',
      },
      {
        name: 'react-native-gesture-handler',
        role: 'arrastar o menu lateral e o toque das cartas',
      },
      {
        name: 'react-native-reanimated + worklets',
        role: 'animações do drawer rodando na thread de UI',
      },
    ],
  },
  {
    title: 'interface',
    caption: 'o visual terminal-inspired do portfólio',
    items: [
      {
        name: 'StyleSheet (React Native)',
        role: 'todos os estilos, sem CSS externo',
      },
      {
        name: 'expo-font + Google Fonts',
        role: 'Space Grotesk (títulos), Inter (texto) e JetBrains Mono (código)',
      },
      {
        name: 'expo-linear-gradient',
        role: 'gradiente do bloco de apresentação na Home',
      },
      {
        name: '@expo/vector-icons (Feather)',
        role: 'ícones do menu e dos botões',
      },
    ],
  },
  {
    title: 'plataforma e entrega',
    caption: 'do código ao QR Code',
    items: [
      { name: 'expo-splash-screen', role: 'splash escura enquanto as fontes carregam' },
      { name: 'expo-status-bar', role: 'barra de status no tema claro sobre fundo escuro' },
      { name: 'expo-system-ui', role: 'cor de fundo nativa do app' },
      { name: 'expo-updates + EAS Update', role: 'atualizações over-the-air e QR Code' },
      { name: 'EAS Build', role: 'build assinado para Android e iOS' },
      { name: 'ESLint (expo lint)', role: 'padrões e consistência do código' },
    ],
  },
];
