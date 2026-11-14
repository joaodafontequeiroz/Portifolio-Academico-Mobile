import { useCallback, useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import { Button, Card } from '@/components/ui';
import { colors, fonts, radius, space } from '@/constants/theme';
import { registrarDerrota, registrarVitoria, usePlacar } from '@/lib/placar';

const MAX_ERRORS = 6;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const WORDS = [
  { word: 'algoritmo', hint: 'conceito' },
  { word: 'compilador', hint: 'ferramenta' },
  { word: 'recursao', hint: 'conceito' },
  { word: 'javascript', hint: 'linguagem' },
  { word: 'typescript', hint: 'linguagem' },
  { word: 'python', hint: 'linguagem' },
  { word: 'java', hint: 'linguagem' },
  { word: 'hardware', hint: 'sistema' },
  { word: 'kernel', hint: 'sistema' },
  { word: 'deploy', hint: 'devops' },
  { word: 'cache', hint: 'conceito' },
  { word: 'latencia', hint: 'redes' },
  { word: 'middleware', hint: 'arquitetura' },
  { word: 'framework', hint: 'ferramenta' },
  { word: 'fullstack', hint: 'perfil' },
  { word: 'open source', hint: 'cultura' },
  { word: 'machine learning', hint: 'ia' },
  { word: 'banco de dados', hint: 'dados' },
  { word: 'estrutura de dados', hint: 'conceito' },
  { word: 'docker', hint: 'ferramenta' },
  { word: 'webgl', hint: 'gráficos 3d' },
  { word: 'rfid', hint: 'hardware' },
  { word: 'tabela hash', hint: 'estrutura de dados' },
  { word: 'portfolio', hint: 'você está aqui' },
];

/** Estágios do boneco — índice = número de erros (0..6). */
const STAGES = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

export function Forca() {
  const [entry, setEntry] = useState(WORDS[0]);
  const [used, setUsed] = useState<string[]>([]);
  const placar = usePlacar();
  const { width } = useWindowDimensions();

  const { word, hint } = entry;
  const letters = useMemo(() => word.split(''), [word]);
  const errors = used.filter((letter) => !word.includes(letter)).length;
  const won = letters.every((letter) => letter === ' ' || used.includes(letter));
  const lost = errors >= MAX_ERRORS;
  const finished = won || lost;

  const guess = useCallback(
    (letter: string) => {
      if (finished || used.includes(letter)) return;

      const nextUsed = [...used, letter];
      const nextErrors = nextUsed.filter((item) => !word.includes(item)).length;
      const nextWon = word
        .split('')
        .every((char) => char === ' ' || nextUsed.includes(char));

      setUsed(nextUsed);

      if (nextWon) registrarVitoria();
      else if (nextErrors >= MAX_ERRORS) registrarDerrota();
    },
    [finished, used, word],
  );

  const restart = useCallback(() => {
    let next = WORDS[Math.floor(Math.random() * WORDS.length)];
    if (WORDS.length > 1 && next.word === word) {
      next = WORDS[(WORDS.indexOf(next) + 1) % WORDS.length];
    }
    setEntry(next);
    setUsed([]);
  }, [word]);

  const keySize = Math.max(34, Math.min(46, Math.floor((Math.min(width, 560) - 40 - 36) / 7)));

  return (
    <View>
      <View style={styles.statusRow}>
        <Text style={styles.statusText}>
          <Text style={styles.prompt}>$</Text> ./forca --jogar
        </Text>
        <Text style={styles.statusText}>
          erros:{' '}
          <Text style={{ color: errors >= 4 ? colors.danger : colors.accent }}>
            {errors}/{MAX_ERRORS}
          </Text>
        </Text>
      </View>

      <Card style={styles.board}>
        <Text style={[styles.gallows, lost && styles.gallowsLost]}>{STAGES[errors]}</Text>

        <View style={styles.wordRow}>
          {letters.map((char, index) => {
            if (char === ' ') return <View key={`gap-${index}`} style={styles.wordGap} />;

            const revealed = used.includes(char) || lost;
            const missed = lost && !used.includes(char);

            return (
              <View
                key={`${char}-${index}`}
                style={[styles.slot, revealed && styles.slotOn, missed && styles.slotMiss]}
              >
                <Text style={[styles.slotText, missed && styles.slotTextMiss]}>
                  {revealed ? char.toUpperCase() : ''}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.hint}>
          dica: <Text style={styles.hintValue}>[{hint}]</Text>
        </Text>
      </Card>

      <View style={styles.keyboard}>
        {ALPHABET.map((letter) => {
          const isUsed = used.includes(letter);
          const hit = isUsed && word.includes(letter);
          const miss = isUsed && !word.includes(letter);

          return (
            <Pressable
              key={letter}
              accessibilityRole="button"
              accessibilityState={{ disabled: isUsed || finished }}
              accessibilityLabel={`Letra ${letter}${hit ? ', correta' : miss ? ', não existe' : ''}`}
              disabled={isUsed || finished}
              onPress={() => guess(letter)}
              style={({ pressed }) => [
                styles.key,
                { width: keySize, height: 44 },
                hit && styles.keyHit,
                miss && styles.keyMiss,
                pressed && styles.keyPressed,
              ]}
            >
              <Text
                style={[
                  styles.keyText,
                  hit && styles.keyTextHit,
                  miss && styles.keyTextMiss,
                ]}
              >
                {letter}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {finished ? (
        <Card style={[styles.result, lost ? styles.resultLost : styles.resultWon]}>
          <Text style={[styles.resultTitle, { color: lost ? colors.danger : colors.ok }]}>
            {lost ? '✘ game over' : '✔ vitória'}
          </Text>
          <Text style={styles.resultWord}>
            {lost ? 'a palavra era ' : 'palavra: '}
            <Text style={styles.resultWordStrong}>{word}</Text>
          </Text>
          <Button label="novo jogo" onPress={restart} icon="refresh-cw" />
        </Card>
      ) : (
        <Button label="reiniciar palavra" variant="ghost" onPress={restart} icon="refresh-cw" />
      )}

      <View style={styles.stats}>
        <Stat label="vitórias" value={placar.vitorias} tone={colors.accent} />
        <Stat label="derrotas" value={placar.derrotas} tone={colors.danger} />
        <Stat label="sequência" value={placar.sequencia} tone={colors.accent} />
        <Stat label="recorde" value={placar.recorde} tone={colors.text} />
      </View>
      <Text style={styles.statsNote}>{"// placar da sessão"}</Text>
    </View>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, { color: tone }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: space.md,
  },
  statusText: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.textDim,
  },
  prompt: { color: colors.accent },
  board: {
    backgroundColor: '#0d0f12',
    alignItems: 'center',
    paddingVertical: space.xl,
  },
  gallows: {
    fontFamily: fonts.mono,
    fontSize: 14,
    lineHeight: 17,
    color: colors.textMid,
    marginBottom: space.lg,
  },
  gallowsLost: { color: colors.danger },
  wordRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 6,
    rowGap: 10,
  },
  wordGap: { width: 12, height: 1 },
  slot: {
    width: 25,
    height: 32,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  slotOn: { borderBottomColor: colors.accent },
  slotMiss: { borderBottomColor: colors.danger },
  slotText: {
    fontFamily: fonts.monoMedium,
    fontSize: 18,
    lineHeight: 24,
    color: colors.text,
  },
  slotTextMiss: { color: colors.danger },
  hint: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.textDim,
    marginTop: space.lg,
  },
  hintValue: { color: colors.accent },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    marginTop: space.lg,
    marginBottom: space.lg,
  },
  key: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgElev,
  },
  keyHit: {
    borderColor: colors.accent,
    backgroundColor: colors.accentSoft,
  },
  keyMiss: {
    borderColor: colors.border,
    backgroundColor: colors.bgSoft,
    opacity: 0.4,
  },
  keyPressed: { opacity: 0.6 },
  keyText: {
    fontFamily: fonts.monoMedium,
    fontSize: 15,
    color: colors.text,
  },
  keyTextHit: { color: colors.accent },
  keyTextMiss: {
    color: colors.textDim,
    textDecorationLine: 'line-through',
  },
  result: {
    alignItems: 'center',
    marginBottom: space.md,
  },
  resultWon: { borderColor: colors.ok },
  resultLost: { borderColor: colors.danger },
  resultTitle: {
    fontFamily: fonts.displaySemi,
    fontSize: 20,
    marginBottom: space.xs,
  },
  resultWord: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.textMid,
    marginBottom: space.lg,
  },
  resultWordStrong: {
    fontFamily: fonts.monoMedium,
    color: colors.text,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.bgSoft,
    paddingVertical: space.md,
    marginTop: space.lg,
  },
  stat: { flex: 1, alignItems: 'center' },
  statValue: {
    fontFamily: fonts.display,
    fontSize: 20,
  },
  statLabel: {
    fontFamily: fonts.mono,
    fontSize: 9.5,
    color: colors.textDim,
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  statsNote: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    color: colors.textDim,
    marginTop: space.sm,
    textAlign: 'center',
  },
});
