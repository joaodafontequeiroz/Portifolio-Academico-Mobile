export type Project = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  description: string;
  stack: string[];
  year: string;
  category: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'adapt',
    title: 'Adapt',
    tagline: 'IA a serviço da acessibilidade na avaliação acadêmica',
    short:
      'IA que sugere adaptações pedagógicas para avaliações mais inclusivas e acessíveis.',
    description:
      'Sistema web que utiliza tecnologia e inteligência artificial para sugerir adaptações pedagógicas em provas e atividades acadêmicas, tornando o processo avaliativo mais inclusivo e acessível. Desenvolvido na disciplina de Projeto Integrador, com meta de evoluir para um produto de impacto educacional.',
    stack: ['Next.js', 'React', 'IA'],
    year: '2025',
    category: 'Web',
    repo: 'https://github.com/noemisoares/Adapt',
    featured: true,
  },
  {
    slug: 'vitrina',
    title: 'Vitrina',
    tagline: 'Economia criativa e sustentável nos espaços urbanos',
    short:
      'Conecta negócios locais a comunidades urbanas, fortalecendo a economia criativa.',
    description:
      'Plataforma digital que conecta pequenos negócios e empreendedores locais às comunidades urbanas, dando visibilidade a serviços e fortalecendo a indústria criativa. Busca diversificar a economia local e promover comunidades mais autossuficientes.',
    stack: ['Web', 'UX', 'Produto'],
    year: '2025',
    category: 'Web',
    repo: 'https://github.com/Williansilva2207/Vitrina',
    featured: true,
  },
  {
    slug: 'cubo-magico-3d',
    title: 'Cubo Mágico 3D',
    tagline: "Rubik's Cube interativo direto no navegador",
    short:
      "Rubik's Cube interativo em Three.js e WebGL, com 27 peças e câmera orbitável.",
    description:
      'Protótipo tridimensional e totalmente interativo de um Cubo Mágico executado no navegador com Three.js e WebGL: malha 3×3×3 com 27 peças independentes, OrbitControls para explorar o cubo por qualquer ângulo, rotação interativa de faces e embaralhamento automatizado.',
    stack: ['Three.js', 'WebGL', 'TypeScript'],
    year: '2024',
    category: '3D',
    repo: 'https://github.com/Gerso7/projeto-cg2',
    featured: true,
  },
  {
    slug: 'gestao-socios-nautico',
    title: 'Gestão de Sócios — Náutico',
    tagline: 'Sistema de associados em Java puro',
    short:
      'Gerenciador de sócios do Náutico em Java, com threads e padrões de projeto.',
    description:
      'Sistema desktop para gerenciamento de sócios do Clube Náutico Capibaribe: cadastro, edição, exclusão e consulta de categorias e sócios. Foco em conceitos avançados de POO — persistência de dados, exceções, coleções, threads e padrões de projeto.',
    stack: ['Java', 'POO', 'Threads'],
    year: '2024',
    category: 'Java',
    repo: 'https://github.com/joaodafontequeiroz/meu-repo-faculdade/blob/main/sistema%20de%20gestao%20de%20socios/README-gestao-socios.md',
  },
  {
    slug: 'banco-concessionaria',
    title: 'BD Concessionária',
    tagline: 'Modelagem física e consultas analíticas',
    short: 'BD relacional completo de uma concessionária, de DDL a relatórios analíticos.',
    description:
      'Modelagem física e implementação completa de um banco de dados relacional para gerenciamento de uma concessionária de veículos — da criação estrutural e restrições de segurança à extração de relatórios analíticos com consultas avançadas.',
    stack: ['SQL', 'PostgreSQL', 'Modelagem'],
    year: '2024',
    category: 'Dados',
    repo: 'https://github.com/joaodafontequeiroz/projeto-concessionaria-bd',
  },
  {
    slug: 'tabela-hash',
    title: 'Tabela Hash',
    tagline: 'Estrutura de dados na prática',
    short: 'Hash table do zero: inserção, remoção, colisões e análise de complexidade.',
    description:
      'Implementação de uma Tabela Hash para gerenciar cadastro e descadastramento de usuários, com funções de hashing, tratamento de colisões e análise de complexidade.',
    stack: ['C', 'Estruturas de Dados'],
    year: '2023',
    category: 'Dados',
    repo: 'https://github.com/joaodafontequeiroz/meu-repo-faculdade/blob/main/tabela%20hash/README-tabela-hash.md',
  },
  {
    slug: 'porta-rfid',
    title: 'Porta RFID',
    tagline: 'Acessibilidade e autonomia com baixo custo',
    short: 'Porta inteligente com RFID que dá autonomia a alunos com deficiência.',
    description:
      'Transformação de uma porta de operação manual em sistema de acesso inteligente: alunos com deficiência travam e destravam a porta com tags RFID, garantindo autonomia, independência e dignidade. Projeto de Robótica e Acessibilidade do curso.',
    stack: ['Arduino', 'RFID', 'C++'],
    year: '2024',
    category: 'Hardware',
    repo: 'https://github.com/heitorfariass/Controle-de-Acesso-Inclusivo---UNICAP',
  },
];

export function getProject(slug: string | string[] | undefined): Project | undefined {
  const key = Array.isArray(slug) ? slug[0] : slug;
  return projects.find((project) => project.slug === key);
}
