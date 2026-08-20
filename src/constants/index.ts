import type { Benefit, Module, Bonus, FAQ, Problem, NavLink, BeforeAfter, PricingPlan } from "@/types";

export const SITE_CONFIG = {
  name: "Edition Aleh",
  tagline: "Escolhas Inteligentes para organizar sua vida, seu dinheiro e cuidar de você.",
  description: "O guia prático para assumir o controle do seu dinheiro, eliminar o caos financeiro e conquistar uma vida mais tranquila.",
  url: "https://editionaleh.com",
  ogImage: "/images/og-image.jpg",
  author: "Edition Aleh",
  email: "editionaleh@outlook.com",
  phone: "5592993747071",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Bônus", href: "#bonus" },
  { label: "Planilha", href: "#planilha" },
  { label: "Conteúdo incluído", href: "#conteudo-incluido" },
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
    description: "Comece a transformar sua relação com o dinheiro, no seu ritmo.",
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
    description: "Organize suas finanças mês a mês com um planner completo e intuitivo.",
    icon: "NotebookPen",
  },
  {
    title: "Checklist Financeiro",
    description: "Checklist prático para manter suas finanças sempre em dia sem esquecimentos.",
    icon: "ClipboardCheck",
  },
  {
    title: "Calendário Financeiro",
    description: "Calendário anual com todas as datas importantes para sua vida financeira.",
    icon: "CalendarDays",
  },
  {
    title: "Desafio 30 Dias",
    description: "Transforme seus hábitos financeiros em apenas 30 dias com desafios diários.",
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
    "Mais clareza e segurança para cuidar do seu dinheiro",
  ],
};

export const WHAT_YOU_GET: Bonus[] = [
  {
    title: "E-book Edition Aleh",
    description: "O guia completo em PDF com o passo a passo para organizar suas finanças.",
    icon: "BookOpen",
  },
  {
    title: "Planner Financeiro",
    description: "Organize suas finanças mês a mês com um planner completo e intuitivo.",
    icon: "NotebookPen",
  },
  {
    title: "Checklist Financeiro",
    description: "Checklist prático para manter suas finanças sempre em dia sem esquecimentos.",
    icon: "ClipboardCheck",
  },
  {
    title: "Calendário Financeiro",
    description: "Calendário anual com todas as datas importantes para sua vida financeira.",
    icon: "CalendarDays",
  },
  {
    title: "Desafio 30 Dias",
    description: "Transforme seus hábitos financeiros em apenas 30 dias com desafios diários.",
    icon: "Zap",
  },
  {
    title: "Acesso Vitalício",
    description: "Receba o material e acesse quando quiser, por quantas vezes precisar.",
    icon: "Infinity",
  },
];

export const OFFER_ITEMS = [
  { label: "E-book Edition Aleh em PDF", icon: "BookOpen" },
  { label: "Planner Financeiro", icon: "NotebookPen" },
  { label: "Checklist Financeiro", icon: "ClipboardCheck" },
  { label: "Calendário Financeiro", icon: "CalendarDays" },
  { label: "Desafio de 30 dias", icon: "Zap" },
  { label: "Acesso vitalício", icon: "Infinity" },
];

export const FAQS: FAQ[] = [
  {
    question: "O ebook é adequado para iniciantes?",
    answer: "Sim! O Edition Aleh foi pensado especialmente para mulheres que nunca tiveram contato com organização financeira. A linguagem é simples, acolhedora e o passo a passo é muito claro.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "O método é estruturado para que você já comece a organizar sua vida financeira desde o diagnóstico inicial. O ritmo de evolução depende da sua dedicação e consistência na aplicação do que aprender.",
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
    answer: "Sim! Todos os bônus estão incluídos no valor do ebook. Você leva o Planner Financeiro, Checklist Financeiro, Calendário Financeiro e o Desafio 30 Dias sem nenhum custo adicional.",
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
  { name: "WhatsApp", url: `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent("Olá! Tenho interesse no ebook Edition Aleh.")}`, icon: "MessageCircle" },
];

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent("Olá! Tenho interesse no ebook Edition Aleh.")}`;
export const INSTAGRAM_LINK = "https://instagram.com/editionaleh";
export const PURCHASE_LINK = "https://pay.hotmart.com/G106990278J";
export const SPREADSHEET_LINK = "https://pay.hotmart.com/F106992089X";

export const FOOTER_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Conteúdo incluído", href: "#conteudo-incluido" },
  { label: "FAQ", href: "#faq" },
  { label: "Planilha", href: "#planilha" },
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos de Uso", href: "/termos-uso" },
  { label: "Contato", href: "mailto:editionaleh@outlook.com" },
];

export const PRICING: PricingPlan = {
  name: "Edition Aleh",
  price: "R$ 9,99",
  originalPrice: "R$ 19,90",
  description: "Comece a transformar sua relação com o dinheiro e dê os primeiros passos para organizar sua vida financeira.",
  features: [
    "E-book Edition Aleh em PDF",
    "Planner Financeiro",
    "Checklist Financeiro",
    "Calendário Financeiro",
    "Desafio de 30 dias",
    "Acesso vitalício",
  ],
};

export const SPREADSHEET_PRICING: PricingPlan = {
  name: "Planilha Financeira Premium",
  price: "R$ 3,97",
  originalPrice: "R$ 12,90",
  description: "Sua rotina financeira em ordem com uma planilha completa, automática e fácil de usar.",
  features: [
    "Controle de gastos mês a mês",
    "Metas de economia automáticas",
    "Gráficos e relatórios visuais",
    "Fórmulas prontas, sem complicação",
    "Funciona no Excel e Google Sheets",
    "Acesso vitalício e atualizações",
  ],
};
