# Portfólio Acadêmico — React Native + Expo

Versão mobile do portfólio de **João Da Fonte Queiroz**, construída em **React Native com Expo Router**.
Mesmo conteúdo e mesma identidade visual (fundo escuro + accent âmbar + tipografia monoespaçada) da versão web em Next.js, agora como app nativo.

## Telas

| Rota | Tela | Conteúdo |
| --- | --- | --- |
| `/` | **Home** | apresentação, foco de estudo, atalhos para todas as telas e contato |
| `/sobre` | **Sobre** | bio + **todas as tecnologias e módulos** usados no app, agrupados por área |
| `/academica` | **Experiência Acadêmica** | graduação na UNICAP, monitoria/pesquisa e disciplinas |
| `/profissional` | **Experiência Profissional** | estágio no SEBRAE e Projeto Integrador (Adapt) |
| `/projetos` | **Projetos** | 7 projetos catalogados |
| `/projetos/[slug]` | **Detalhe do projeto** | descrição completa, stack e link do repositório |
| `/jogo` | **Jogo** | Jogo da Forca rodando em React Native |

Navegação: **drawer lateral** (menu) do Expo Router em todas as telas + rota dinâmica em `/projetos/[slug]`.

## O jogo

O Jogo da Forca foi **portado do React (versão web) para componentes nativos** (`src/components/forca.tsx`):
`View`, `Text`, `Pressable` e `StyleSheet`. Não há WebView, iframe ou link para a versão web — o jogo
roda dentro do app, com teclado virtual, boneco em ASCII art, dicas, placar da sessão e reinício.

## Tecnologias e módulos

- **Base:** React Native 0.88, Expo SDK 58, React 19, TypeScript 6
- **Navegação:** Expo Router (drawer + rota dinâmica), react-native-screens, react-native-safe-area-context, react-native-gesture-handler, react-native-reanimated + react-native-worklets
- **Interface:** StyleSheet, expo-font + Google Fonts (Space Grotesk, Inter, JetBrains Mono), expo-linear-gradient, @expo/vector-icons
- **Plataforma e entrega:** expo-splash-screen, expo-status-bar, expo-system-ui, expo-updates (+ EAS Update), EAS Build, ESLint

## Rodando localmente

```bash
npm install
npx expo start
```

Abra o QR Code no **Expo Go** (Android/iOS) ou pressione `w` para a versão web de desenvolvimento.
Para Android/iOS nativos: `npm run android` / `npm run ios`.

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Publicando o update over-the-air (QR Code do Expo)

O projeto já tem `eas.json` com os canais `development`, `preview` e `production`, e o
`expo-updates` instalado. Falta apenas vincular a conta/projeto Expo (isso exige o seu login,
por isso não vem preenchido):

```bash
npx eas-cli@latest login
npx eas-cli@latest init          # cria o projeto no EAS e preenche updates.url + extra.eas.projectId no app.json
npx eas-cli@latest update --branch preview --message "portfólio mobile"
```

O comando `update` imprime o **link/QR Code do update**. É esse link que vai na entrega
(`https://expo.dev/...` ou `exp://u.expo.dev/...`), e ele abre o app no Expo Go.

Build instalável (opcional):

```bash
npx eas-cli@latest build --profile preview --platform android   # gera um APK
```

> Enquanto o projeto não estiver vinculado ao EAS, o app funciona normalmente — o `expo-updates`
> apenas fica inativo.

## Estrutura

```
src/
  app/                 rotas (Expo Router)
    _layout.tsx        Drawer + fontes + splash
    index.tsx          Home
    sobre.tsx          Sobre + stack completa
    academica.tsx      Experiência acadêmica
    profissional.tsx   Experiência profissional
    projetos/          lista e detalhe ([slug])
    jogo.tsx           Jogo da Forca
  components/          Screen, UI, DrawerContent e Forca
  constants/theme.ts   cores, fontes, espaçamento
  data/                conteúdo do portfólio (site, currículo, projetos, stack)
  lib/placar.ts        placar compartilhado do jogo
```
