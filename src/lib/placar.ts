import { useSyncExternalStore } from 'react';

export type Placar = {
  vitorias: number;
  derrotas: number;
  sequencia: number;
  recorde: number;
};

const inicial: Placar = { vitorias: 0, derrotas: 0, sequencia: 0, recorde: 0 };

let estado: Placar = inicial;
const inscritos = new Set<() => void>();

function notificar() {
  inscritos.forEach((fn) => fn());
}

export function getPlacar() {
  return estado;
}

export function registrarVitoria() {
  const sequencia = estado.sequencia + 1;
  estado = {
    ...estado,
    vitorias: estado.vitorias + 1,
    sequencia,
    recorde: Math.max(estado.recorde, sequencia),
  };
  notificar();
}

export function registrarDerrota() {
  estado = { ...estado, derrotas: estado.derrotas + 1, sequencia: 0 };
  notificar();
}

function inscrever(fn: () => void) {
  inscritos.add(fn);
  return () => {
    inscritos.delete(fn);
  };
}

/** Placar compartilhado entre as visitas à tela do jogo. */
export function usePlacar(): Placar {
  return useSyncExternalStore(inscrever, getPlacar, getPlacar);
}
