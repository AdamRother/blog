export type CoverImage = {
  src: string
  alt: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string        // ≤160 chars — used as meta description
  keywords: string       // comma-separated keyword cluster for Article schema
  category: string
  author: string
  authorRole: string
  authorBio: string      // E-E-A-T: displayed at bottom of post + Author schema
  publishDate: string
  readTime: number
  featured: boolean
  coverImage: CoverImage
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'intelligence-as-a-service',
    title: 'What Is Intelligence as a Service?',
    // 149 chars — keyword + benefit + soft CTA
    excerpt:
      'Intelligence as a service: load your methodology once, apply it to every client in an isolated workspace. Definition, examples, and who it works for.',
    keywords:
      'intelligence as a service, what is intelligence as a service, IaaS for service businesses, AI brain for service business, per-client AI workspace, intelligence as a service for consultants, intelligence as a service examples, intelligence as a service definition',
    category: 'Business Model',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-04-29',
    readTime: 12,
    featured: true,
    coverImage: {
      src: '/images/pexels/8849295.webp',
      alt: 'Abstract AI illustration — a silhouette head filled with eyes, symbolising the collective intelligence at the core of intelligence as a service',
      photographer: 'Tara Winstead',
      photographerUrl: 'https://www.pexels.com/@tara-winstead',
      pexelsUrl: 'https://www.pexels.com/photo/8849295/',
    },
  },
  {
    slug: 'how-to-scale-consulting-without-hiring',
    title: 'How to Scale a Consulting Business Without Hiring',
    // 158 chars — keyword + model change framing + delivery promise
    excerpt:
      'The path to scaling a consulting business without hiring is a model change, not an efficiency gain. Here\'s how to systematise delivery without adding headcount.',
    keywords:
      'how to scale consulting without hiring, scaling service business with AI, founder bottleneck service business, scaling without adding headcount, how to scale consulting business without growing team, AI for service fulfillment, too busy to scale service business, remove yourself from operations consultant, AI for consistent client service delivery',
    category: 'Operations',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-01',
    readTime: 11,
    featured: false,
    coverImage: {
      src: '/images/pexels/8294566.webp',
      alt: 'White robot with glowing cyan eyes on a reflective black surface — the AI system that replaces the need for a larger team',
      photographer: 'Pavel Danilyuk',
      photographerUrl: 'https://www.pexels.com/@pavel-danilyuk',
      pexelsUrl: 'https://www.pexels.com/photo/8294566/',
    },
  },
  {
    slug: 'why-services-beat-courses-in-the-ai-era',
    title: 'Why Services Beat Courses in the AI Era',
    // 159 chars — primary keyword + core argument + stakes
    excerpt:
      'AI delivers information at near-zero cost. It cannot apply it in context. Here\'s why services beat courses in an economy where information is no longer scarce.',
    keywords:
      'why services beat courses in the AI era, are info products dead, services vs info products AI era, future of coaching businesses with AI, will AI replace coaches, why online courses are dying 2025, selling expertise in AI age, should I pivot from courses to services AI, AI makes courses obsolete, new business models with AI 2025',
    category: 'Business Model',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-01',
    readTime: 12,
    featured: false,
    coverImage: {
      src: '/images/pexels/8386358.webp',
      alt: 'Minimalist robotic hand reaching on a white background — precision and repeatability, the defining traits of services that beat courses in the AI era',
      photographer: 'Tara Winstead',
      photographerUrl: 'https://www.pexels.com/@tara-winstead',
      pexelsUrl: 'https://www.pexels.com/photo/8386358/',
    },
  },
  {
    slug: 'how-to-train-ai-on-your-consulting-framework',
    title: 'How to Train AI on Your Consulting Framework',
    // 153 chars — keyword + documentation framing + who-not-for hook
    excerpt:
      'Training AI on your consulting framework starts with documentation, not a new AI subscription. Here\'s the five-step process and who should not start yet.',
    keywords:
      'how to train AI on your consulting framework, train AI on consulting methodology, encode consulting framework into AI, productize framework with AI, scale my methodology with AI, AI trained on proprietary knowledge, turn consulting IP into AI, custom AI knowledge base for consultant',
    category: 'Operations',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-14',
    readTime: 11,
    featured: false,
    coverImage: {
      src: '/images/pexels/17485741.webp',
      alt: 'Intricate AI wireframe and dynamic ribbons from Google DeepMind — the architecture of training AI on a consulting framework',
      photographer: 'Google DeepMind',
      photographerUrl: 'https://www.pexels.com/@googledeepmind',
      pexelsUrl: 'https://www.pexels.com/photo/17485741/',
    },
  },
  {
    slug: 'best-ai-tools-for-consultants-2026',
    title: 'Best AI Tools for Consultants in 2026',
    // 153 chars — primary keyword + core argument + framework promise
    excerpt:
      "The best AI tools for consultants in 2026 keep each client's data isolated and apply your methodology without starting from scratch. Here's the framework.",
    keywords:
      'best AI tools for consultants 2026, AI platform for consultants, AI tool that knows my clients, AI that keeps client data separate, alternatives to ChatGPT for client work, limitations of ChatGPT for agency work, AI workspace per client, best AI workspace for consultants 2026, AI tools for methodology-driven consultants, why generic AI doesn\'t work for client services',
    category: 'AI & Tools',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-02',
    readTime: 10,
    featured: false,
    coverImage: {
      src: '/images/pexels/8566464.webp',
      alt: 'Blue and white toy robot close-up — the AI tool built for repeatable precision across every client engagement',
      photographer: 'Kindel Media',
      photographerUrl: 'https://www.pexels.com/@kindelmedia',
      pexelsUrl: 'https://www.pexels.com/photo/8566464/',
    },
  },
  {
    slug: 'how-to-use-ai-safely-with-multiple-clients',
    title: 'How to Use AI Safely When Serving Multiple Clients',
    // 155 chars — keyword + core problem + architecture solution
    excerpt:
      'Using AI safely with multiple clients requires structural data isolation, not separate chat threads. Here\'s how to set up isolated workspaces and why prompting doesn\'t work.',
    keywords:
      'how to use AI safely when serving multiple clients, client data isolation AI, per-client AI memory, AI that does not mix client data, separate AI workspaces per client, keep client data private in AI, does ChatGPT mix client data, isolated client workspace AI, prevent AI from mixing client information, AI for consultants with multiple clients, AI with client confidentiality built in',
    category: 'Strategy',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-28',
    readTime: 12,
    featured: false,
    coverImage: {
      src: '/images/pexels/8566470.webp',
      alt: 'White and blue humanoid robot head with a glowing visor representing AI with structured per-client data isolation for service providers',
      photographer: 'Kindel Media',
      photographerUrl: 'https://www.pexels.com/@kindelmedia',
      pexelsUrl: 'https://www.pexels.com/photo/8566470/',
    },
  },
  {
    slug: 'ai-for-sales-consultants',
    title: 'AI for Sales Consultants: What Actually Works',
    // 156 chars — primary keyword + core argument + revenue framing
    excerpt:
      'AI for sales consultants works best when it runs your methodology across every client, not when it drafts one more email. Here is what actually moves revenue.',
    keywords:
      'AI for sales consultants, AI tools for sales consultants 2026, AI for sales training consultants, AI to scale sales methodology, AI for revenue strategists, AI for fractional CRO, best AI for revenue-focused consultants, AI that applies your sales methodology to every client, AI for high-ticket sales consulting',
    category: 'AI & Tools',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-06-03',
    readTime: 11,
    featured: false,
    coverImage: {
      src: '/images/pexels/17483868.webp',
      alt: 'Vibrant abstract 3D render of a digital brain, representing AI for sales consultants that holds one methodology and applies it to every client',
      photographer: 'Google DeepMind',
      photographerUrl: 'https://www.pexels.com/@googledeepmind',
      pexelsUrl: 'https://www.pexels.com/photo/17483868/',
    },
  },
  {
    slug: 'per-client-ai-memory',
    title: 'What Is Per-Client AI Memory?',
    // 152 chars — keyword + isolation benefit + who-it-is-for hook
    excerpt:
      'Per-client AI memory keeps each client in an isolated AI workspace, so their context never bleeds into another\'s. Here is how it works and who needs it.',
    keywords:
      'per-client AI memory, what is per-client AI memory, how per-client AI memory works, per-client AI context, AI that remembers each client separately, AI with separate memory per client, isolated client workspace AI, client memory AI workspace, protected AI memory per client',
    category: 'Strategy',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-06-03',
    readTime: 10,
    featured: false,
    coverImage: {
      src: '/images/pexels/25630344.webp',
      alt: 'Abstract grid of separate glowing cells, each holding a distinct symbol, representing per-client AI memory that keeps every client\'s data in its own isolated workspace',
      photographer: 'Google DeepMind',
      photographerUrl: 'https://www.pexels.com/@googledeepmind',
      pexelsUrl: 'https://www.pexels.com/photo/25630344/',
    },
  },
]

export const blogCategories = ['All', 'Business Model', 'Operations', 'AI & Tools', 'Strategy']
