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
      src: '/images/pexels/4604607.webp',
      alt: 'Typewriter printing the words Artificial Intelligence — the intelligence layer that defines the next era of service business',
      photographer: 'Markus Winkler',
      photographerUrl: 'https://www.pexels.com/@markus-winkler-1430818',
      pexelsUrl: 'https://www.pexels.com/photo/4604607/',
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
      src: '/images/pexels/4578660.webp',
      alt: 'Machine learning concept visualization — the AI infrastructure that lets consultants scale without adding headcount',
      photographer: 'Markus Winkler',
      photographerUrl: 'https://www.pexels.com/@markus-winkler-1430818',
      pexelsUrl: 'https://www.pexels.com/photo/4578660/',
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
      src: '/images/pexels/17483871.webp',
      alt: 'Abstract AI visualization from the Google DeepMind Visualising AI project — the case for services in an era when information is free',
      photographer: 'Google DeepMind',
      photographerUrl: 'https://www.pexels.com/@googledeepmind',
      pexelsUrl: 'https://www.pexels.com/photo/17483871/',
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
      src: '/images/pexels/14314638.webp',
      alt: 'Digital spheres interconnected by glowing lines — the network of frameworks and client contexts that form a trained AI consulting system',
      photographer: 'Merlin Lightpainting',
      photographerUrl: 'https://www.pexels.com/@merlin/',
      pexelsUrl: 'https://www.pexels.com/photo/14314638/',
    },
  },
  {
    slug: 'best-ai-tools-for-consultants-2025',
    title: 'Best AI Tools for Consultants in 2026',
    // 153 chars — primary keyword + core argument + framework promise
    excerpt:
      "The best AI tools for consultants in 2026 keep each client's data isolated and apply your methodology without starting from scratch. Here's the framework.",
    keywords:
      'best AI tools for consultants 2025, AI platform for consultants, AI tool that knows my clients, AI that keeps client data separate, alternatives to ChatGPT for client work, limitations of ChatGPT for agency work, AI workspace per client, best AI workspace for consultants 2026, AI tools for methodology-driven consultants, why generic AI doesn\'t work for client services',
    category: 'AI & Tools',
    author: 'Josh Forti',
    authorRole: 'Founder, Client Intelligence',
    authorBio:
      'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
    publishDate: '2026-05-02',
    readTime: 10,
    featured: false,
    coverImage: {
      src: '/images/pexels/16380905.webp',
      alt: 'Smartphone AI interface over open AI literature — the tools redefining how consulting expertise reaches clients',
      photographer: 'Sanket Mishra',
      photographerUrl: 'https://www.pexels.com/@sanketgraphy',
      pexelsUrl: 'https://www.pexels.com/photo/16380905/',
    },
  },
]

export const blogCategories = ['All', 'Business Model', 'Operations', 'AI & Tools', 'Strategy']
