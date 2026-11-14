export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
};

export const education = {
  degree: 'Bacharelado em Ciência da Computação',
  institution: 'UNICAP — Universidade Católica de Pernambuco',
  period: '2023 — 2028',
  status: 'Em andamento',
  highlights: [
    'Base sólida em estruturas de dados, algoritmos e orientação a objetos.',
    'Projetos práticos em banco de dados, POO e desenvolvimento web.',
    'Foco em tecnologia com impacto social e acessibilidade.',
  ],
} as const;

export const academicExperiences: Experience[] = [
  {
    role: 'Monitor / Pesquisa',
    org: 'Disciplinas de programação',
    period: '2024 — 2025',
    description:
      'Apoio a colegas em estruturas de dados e POO, revisão de código e estudos dirigidos. Participação em projetos de extensão com foco em tecnologia inclusiva.',
    tags: ['Java', 'Estruturas de dados', 'Ensino'],
  },
];

export const professionalExperiences: Experience[] = [
  {
    role: 'Estagiário — Desenvolvedor Back-end',
    org: 'SEBRAE',
    period: '2026 — Presente',
    description:
      'Estágio em desenvolvimento back-end com C#, atuando na construção e manutenção de aplicações e serviços da instituição. Experiência prática com o dia a dia corporativo: versionamento, padrões de código e trabalho em equipe.',
    tags: ['C#', '.NET', 'Back-end'],
  },
  {
    role: 'Desenvolvedor — Projeto Integrador',
    org: 'UNICAP',
    period: '2025 — Presente',
    description:
      'Desenvolvimento do Adapt, sistema web com IA para adaptações pedagógicas acessíveis em avaliações acadêmicas. Atuação em arquitetura, backend e integração de modelos de IA.',
    tags: ['Next.js', 'IA', 'Acessibilidade'],
  },
];

export const academicSubjects = [
  'Lógica de programação',
  'Orientação a objetos',
  'Estruturas de dados',
  'Banco de dados',
  'Engenharia de software',
  'Robótica e acessibilidade',
];
