import type { Benefit, Module, Bonus, Testimonial, FAQ, Problem, NavLink, BeforeAfter, PricingPlan } from "@/types";

export const SITE_CONFIG = {
  name: "Edition Aleh",
  tagline: "Escolhas Inteligentes para organizar sua vida, seu dinheiro e cuidar de você.",
  description: "O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.",
  url: "https://editionaleh.com",
  ogImage: "/images/og-image.jpg",
  author: "Edition Aleh",
  email: "contato@editionaleh.com",
  phone: "5588999999999",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Bônus", href: "#bonus" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const PROBLEMS: Problem[] = [
  {
    title: "Meu dinheiro desaparece",
    description: "Você ganha mas no fim do mês nunca sabe pra onde foi o dinheiro.",
    icon: "SearchX",
  },
  {
    title: "Nunca consigo economizar",
    description: "Toda tentativa de poupar termina em frustração no meio do caminho.",
    icon: "Banknote",
  },
  {
    title: "Tenho medo de olhar minha conta",
    description: "A ansiedade toma conta quando chega a hora de ver o extrato.",
    icon: "AlertTriangle",
  },
  {
    title: "Compro por impulso",
    description: "As emoções controlam suas compras e o arrependimento vem depois.",
    icon: "ShoppingBag",
  },
  {
    title: "Não consigo realizar meus sonhos",
    description: "Viajar, fazer um curso, reformar a casa... tudo parece tão distante.",
    icon: "Heart",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Organização Financeira",
    description: "Um sistema simples para colocar todas as suas contas e gastos em ordem.",
    icon: "FolderOpen",
  },
  {
    title: "Economia Inteligente",
    description: "Estratégias práticas para poupar sem sacrifício, no seu ritmo.",
    icon: "PiggyBank",
  },
  {
    title: "Metas e Realizações",
    description: "Aprenda a definir objetivos financeiros e criará um plano para alcançá-los.",
    icon: "Target",
  },
  {
    title: "Autocuidado Financeiro",
    description: "Dinheiro também é cuidado. Uma relação saudável com suas finanças.",
    icon: "HeartHandshake",
  },
  {
    title: "Planejamento Mensal",
    description: "Um método passo a passo para planejar cada mês sem estresse.",
    icon: "CalendarCheck",
  },
  {
    title: "Controle de Gastos",
    description: "Ferramentas para monitorar seus gastos sem precisar de planilhas complexas.",
    icon: "LineChart",
  },
];

export const WHAT_YOU_LEARN = [
  {
    title: "Diagnóstico Financeiro",
    description: "Entenda sua realidade financeira atual sem julgamentos.",
  },
  {
    title: "Organização Completa",
    description: "Um sistema de organização que cabe na sua rotina.",
  },
  {
    title: "Planejamento Mensal",
    description: "Aprenda a planejar cada mês com propósito e confiança.",
  },
  {
    title: "Controle de Gastos",
    description: "Técnicas simples para manter o controle sem neuras.",
  },
  {
    title: "Reserva de Emergência",
    description: "Como construir sua proteção financeira passo a passo.",
  },
  {
    title: "Mudança de Mentalidade",
    description: "Transforme sua relação com o dinheiro de vez.",
  },
];

export const MODULES: Module[] = [
  {
    number: 1,
    title: "O Sistema Financeiro da Sua Mente",
    icon: "BrainCircuit",
    topics: [
      "Para onde seu dinheiro vai",
      "Como seu cérebro influencia seus gastos",
      "Construindo hábitos financeiros",
    ],
  },
  {
    number: 2,
    title: "Ferramentas Práticas",
    icon: "Wrench",
    topics: [
      "Método 50/30/20",
      "Método das 3 Contas",
      "Mapa Financeiro",
    ],
  },
  {
    number: 3,
    title: "Entendendo o Dinheiro",
    icon: "CircleDollarSign",
    topics: [
      "Conceitos essenciais",
      "O valor do tempo",
      "Organização financeira",
    ],
  },
  {
    number: 4,
    title: "Nova Mentalidade Financeira",
    icon: "TrendingUp",
    topics: [
      "Elimine crenças limitantes",
      "Crie hábitos duradouros",
      "Evolução financeira",
    ],
  },
  {
    number: 5,
    title: "Extras",
    icon: "Gift",
    topics: [
      "Ferramentas recomendadas",
      "Aplicativos úteis",
      "Conteúdos para continuar evoluindo",
    ],
  },
];

export const BONUSES: Bonus[] = [
  {
    title: "Planner Financeiro",
    description: "Um planner completo para acompanhar suas finanças mês a mês.",
    icon: "BookOpen",
  },
  {
    title: "Planilha Premium",
    description: "Planilha inteligente para controle de gastos e metas.",
    icon: "FileSpreadsheet",
  },
  {
    title: "Checklist Financeiro",
    description: "Checklist prático para manter suas finanças sempre em dia.",
    icon: "ClipboardCheck",
  },
  {
    title: "Calendário Financeiro",
    description: "Calendário anual com datas importantes para sua vida financeira.",
    icon: "Calendar",
  },
  {
    title: "Desafio 30 Dias",
    description: "Um desafio transformador de 30 dias para criar novos hábitos.",
    icon: "Zap",
  },
];

export const BEFORE_AFTER: BeforeAfter = {
  before: [
    "Ansiedade ao falar de dinheiro",
    "Bagunça financeira total",
    "Sem controle dos gastos",
    "Dívidas que não diminuem",
    "Sonhos guardados na gaveta",
  ],
  after: [
    "Paz ao olhar sua conta",
    "Organização que funciona",
    "Controle total das finanças",
    "Clareza para decidir",
    "Liberdade financeira real",
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Carolina",
    role: "Designer",
    avatar: "/images/testimonial-1.jpg",
    content: "Esse ebook mudou completamente minha relação com o dinheiro. Em apenas 30 dias já consegui organizar minhas contas e comecei minha reserva de emergência.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Professora",
    avatar: "/images/testimonial-2.jpg",
    content: "Finalmente um método que funciona de verdade! A linguagem é acolhedora e o passo a passo é tão simples que qualquer consegue seguir.",
    rating: 5,
  },
  {
    name: "Rafaela Costa",
    role: "Arquiteta",
    avatar: "/images/testimonial-3.jpg",
    content: "Comprei vários cursos de finanças mas só com o Edition Aleh consegui realmente colocar em prática. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Marina Oliveira",
    role: "Médica",
    avatar: "/images/testimonial-4.jpg",
    content: "O planner financeiro e a planilha são incríveis! Finalmente tenho controle sobre meus gastos e já estou vendo resultados reais.",
    rating: 5,
  },
  {
    name: "Beatriz Santos",
    role: "Empresária",
    avatar: "/images/testimonial-5.jpg",
    content: "O Edition Aleh não é só um ebook, é um verdadeiro curso de educação financeira com um toque de acolhimento que faz toda diferença.",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "O ebook é adequado para iniciantes?",
    answer: "Sim! O Edition Aleh foi pensado especialmente para mulheres que nunca tiveram contato com organização financeira. A linguagem é simples, acolhedora e o passo a passo é muito claro.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Muitas alunas relatam mudanças significativas já nas primeiras semanas. O método é estruturado para que você veja resultados desde o diagnóstico inicial.",
  },
  {
    question: "Como recebo o ebook após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um email com o link para download do ebook em PDF e todos os bônus exclusivos.",
  },
  {
    question: "O material é digital ou físico?",
    answer: "O Edition Aleh é 100% digital. Você recebe o ebook em PDF e todos os bônus em formatos compatíveis com computador, tablet e celular.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito (à vista ou parcelado), boleto bancário e PIX. O acesso é liberado automaticamente após a confirmação do pagamento.",
  },
  {
    question: "Os bônus são realmente gratuitos?",
    answer: "Sim! Todos os bônus estão incluídos no valor do ebook. Você leva o Planner Financeiro, Planilha Premium, Checklist, Calendário Financeiro e o Desafio 30 Dias sem nenhum custo adicional.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro sem burocracia.",
  },
  {
    question: "O conteúdo funciona para qualquer realidade financeira?",
    answer: "Com certeza! O método foi desenvolvido para funcionar independentemente da sua renda ou situação financeira atual. Cada mulher no seu ritmo.",
  },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com/editionaleh", icon: "Camera" },
  { name: "YouTube", url: "https://youtube.com/@editionaleh", icon: "Video" },
  { name: "TikTok", url: "https://tiktok.com/@editionaleh", icon: "Music2" },
  { name: "Pinterest", url: "https://pinterest.com/editionaleh", icon: "Palette" },
];

export const FOOTER_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos de Uso", href: "/termos-uso" },
  { label: "Contato", href: "mailto:contato@editionaleh.com" },
];

export const PRICING: PricingPlan = {
  name: "Edition Aleh",
  price: "R$ 47,00",
  originalPrice: "R$ 97,00",
  description: "Transforme sua relação com o dinheiro e conquiste a liberdade financeira que você merece.",
  features: [
    "Ebook completo em PDF",
    "Planner Financeiro",
    "Planilha Premium",
    "Checklist Financeiro",
    "Calendário Financeiro",
    "Desafio 30 Dias",
    "Suporte via email",
    "7 dias de garantia",
    "Acesso vitalício",
  ],
};
