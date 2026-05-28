export interface PersonaPage {
  slug: string
  label: string
  pain: string
  outcome: string
  metaDescription: string
  scenarios: { title: string; story: string; result: string }[]
  forYou: string[]
  notForYou: string[]
  faqs: { question: string; answer: string }[]
}

export const personas: PersonaPage[] = [
  {
    slug: 'fractional-cro',
    label: 'Fractional CROs',
    pain: 'applying your revenue methodology to every client without rebuilding it each time',
    outcome: 'Scale your CRO practice to 3x more clients using your own frameworks',
    metaDescription: 'Client Intelligence for Fractional CROs. Centralize your revenue methodology in the Brain and apply it to every client through isolated, per-client Workspaces.',
    scenarios: [
      {
        title: 'Running four revenue engagements at once',
        story: 'A fractional CRO managing four clients uses Client Intelligence to keep each company\'s pipeline data, call transcripts, and revenue frameworks completely isolated. The Brain holds the methodology once. Each Workspace applies it independently. Before a client call, the AI surfaces the last three sessions, open decisions, and framework gaps in under 60 seconds.',
        result: 'Four engagements. Zero context confusion.',
      },
      {
        title: 'Onboarding a new client in a day',
        story: 'Instead of rebuilding context from scratch, the CRO uses Brain Dump mode to encode their revenue methodology once. Every new client Workspace inherits that framework automatically. The AI applies it to the new client\'s specific pipeline, team, and market from day one.',
        result: 'New client onboarded in one day, not one week.',
      },
      {
        title: 'Removing yourself from every deliverable',
        story: 'The CRO trains Client Intelligence on their diagnostic framework using Brain Dump mode. Now the AI runs the initial revenue audit for each new client, surfaces gaps, and drafts the roadmap. The CRO reviews and adjusts. First drafts are no longer manual.',
        result: '50% less time per engagement. Same client outcome quality.',
      },
    ],
    forYou: [
      'You serve 2+ companies as a fractional CRO or revenue advisor',
      'You have a proprietary revenue methodology or diagnostic framework',
      'You need each client\'s data to stay completely isolated, not just in separate folders',
      'You want to scale your practice without hiring',
      'You already use AI but need it trained on YOUR process, not generic prompts',
    ],
    notForYou: [
      'You work with one client at a time and have no plans to scale',
      'You have no proprietary frameworks and work from scratch each time',
      'You need a CRM or pipeline management tool',
    ],
    faqs: [
      {
        question: 'What is the best AI tool for fractional CROs?',
        answer: 'Client Intelligence is purpose-built for fractional operators. It centralizes your revenue methodology in the Brain and applies it to every client through isolated Workspaces. Unlike ChatGPT or Claude Projects, it is designed for multi-client service delivery with true data isolation per engagement.',
      },
      {
        question: 'How do fractional CROs use AI without mixing client data?',
        answer: 'Client Intelligence gives every client their own isolated Workspace. Separate memory, documents, context, and Frameworks. Your methodology sits in a central Account Brain and is applied to each client independently. Data never crosses between Workspaces.',
      },
      {
        question: 'Can I train AI on my own revenue framework?',
        answer: 'Yes. Client Intelligence is designed to be trained on your proprietary Frameworks, not pre-built templates. Use Brain Dump mode to encode your methodology. The AI applies it intelligently to each client\'s unique context through their isolated Workspace.',
      },
      {
        question: 'What is Intelligence as a Service for fractional executives?',
        answer: 'Intelligence as a Service means your expert methodology is encoded into an AI system that delivers that intelligence to each client individually, at scale, without you being present for every interaction. It is the operating model for fractional executives who serve multiple companies.',
      },
    ],
  },
  {
    slug: 'revops-consultants',
    label: 'RevOps Consultants',
    pain: 'keeping each client\'s revenue stack isolated while applying consistent process',
    outcome: 'Run your RevOps methodology across all clients with isolated data per engagement',
    metaDescription: 'Client Intelligence for RevOps Consultants. Apply your revenue operations framework to every client through isolated Workspaces. No data contamination between engagements.',
    scenarios: [
      {
        title: 'Managing five RevOps engagements simultaneously',
        story: 'A RevOps consultant uses Client Intelligence to keep each client\'s CRM structure, ops framework, and decision history in a fully isolated Workspace. The Brain holds the methodology. Context switching between clients takes seconds, not an hour of re-reading notes.',
        result: 'Five engagements, one consultant, zero context bleed.',
      },
      {
        title: 'Applying a consistent RevOps diagnostic across all clients',
        story: 'The consultant encodes their RevOps diagnostic framework once in the Account Brain using Brain Dump mode. Every new client Workspace inherits the framework. The AI applies it to each client\'s specific tech stack and team structure automatically.',
        result: 'Consistent diagnostic quality across all engagements, automatically.',
      },
      {
        title: 'Delivering faster without compromising depth',
        story: 'Before each client session, the AI generates a pre-call brief from the client\'s isolated Workspace: last session outcomes, open action items, and framework recommendations specific to that client\'s stage. The consultant shows up prepared every time.',
        result: '30% faster delivery per engagement without sacrificing depth.',
      },
    ],
    forYou: [
      'You run RevOps or revenue operations for 2+ clients concurrently',
      'You have a proprietary RevOps methodology or diagnostic process',
      'Keeping each client\'s data and strategy completely isolated is non-negotiable',
      'You want to scale your consultancy without growing your team',
      'You are already using AI but it does not know your frameworks',
    ],
    notForYou: [
      'You are building an internal RevOps team, not a consulting practice',
      'You work with one company exclusively',
      'You need a CRM or revenue attribution platform',
    ],
    faqs: [
      {
        question: 'What AI tools should RevOps consultants use?',
        answer: 'Client Intelligence is designed for RevOps consultants running multiple client engagements. It centralizes your revenue operations methodology in the Brain and applies it to every client through isolated Workspaces. Generic AI tools like ChatGPT cannot do this safely across multiple clients.',
      },
      {
        question: 'How do I keep client data separate when using AI for RevOps work?',
        answer: 'Client Intelligence creates a fully isolated Workspace for each client. Their CRM data, process documents, transcripts, and context never interact with any other client\'s Workspace. Your methodology sits in a central Brain and is applied independently to each.',
      },
      {
        question: 'Can I scale my RevOps consulting practice with AI?',
        answer: 'Yes. Client Intelligence is built specifically for this. Train the AI on your RevOps framework once using Brain Dump mode, then deploy it across every client engagement. Per-client Workspaces handle the isolation. You handle the advisory.',
      },
      {
        question: 'What is per-client AI memory for consultants?',
        answer: 'Per-client memory means each client has their own isolated Workspace with Facts, conversation history, documents, and strategic context stored separately. The AI remembers everything about every client, with no cross-contamination between Workspaces.',
      },
    ],
  },
  {
    slug: 'sales-consultants',
    label: 'Sales Consultants',
    pain: 'delivering your sales methodology consistently across multiple client engagements',
    outcome: 'Apply your sales framework to every client automatically, with zero overlap',
    metaDescription: 'Client Intelligence for Sales Consultants. Encode your sales methodology once in the Brain and apply it to every client through isolated Workspaces. Scale without rebuilding context.',
    scenarios: [
      {
        title: 'Running a named sales methodology across six clients',
        story: 'A sales consultant with a proprietary qualification framework encodes it in the Account Brain using Brain Dump mode. Every new client engagement gets a Workspace that inherits that framework. The AI applies it to each client\'s specific sales team, deal size, and market.',
        result: 'Consistent methodology delivery. Zero manual rebuilding per client.',
      },
      {
        title: 'Preparing for client sales reviews in minutes',
        story: 'Before each weekly pipeline review, the AI surfaces the client\'s last session, current pipeline stage, framework gaps, and recommended focus areas, all from the client\'s isolated Workspace. The consultant arrives with insight, not notes.',
        result: 'Client reviews take 10 minutes to prep instead of 45.',
      },
      {
        title: 'Scaling from three clients to eight',
        story: 'With Brain Dump mode, the consultant encodes their full sales transformation methodology into the Account Brain. Taking on five additional clients requires no new infrastructure. Each gets their own Workspace running the same framework against their specific situation.',
        result: '8 clients, same time investment as 3.',
      },
    ],
    forYou: [
      'You have a proprietary sales methodology, framework, or qualification process',
      'You serve 2+ clients concurrently as a sales consultant or trainer',
      'You need per-client data isolation, strategies and data must never mix',
      'You want to scale your practice without becoming the bottleneck',
      'You are already AI-enabled but need the AI trained on your specific process',
    ],
    notForYou: [
      'You are an in-house sales manager, not an external consultant',
      'You have no proprietary frameworks and teach generic sales methods',
      'You need a sales CRM or pipeline tracking tool',
    ],
    faqs: [
      {
        question: 'What is the best AI for sales consultants?',
        answer: 'Client Intelligence is built for sales consultants running multiple client engagements. It trains on your specific sales methodology, whether that is MEDDIC, your own framework, or a custom qualification process, and applies it to every client through isolated Workspaces.',
      },
      {
        question: 'How do I train AI on my sales methodology?',
        answer: 'Client Intelligence uses Brain Dump mode to capture your methodology in whatever form it currently exists: notes, documents, or verbal description. It structures that IP into your Account Brain, which every client Workspace draws from while staying isolated from one another.',
      },
      {
        question: 'Can sales consultants use AI without risking client confidentiality?',
        answer: 'Yes, with Client Intelligence. Every client has a fully isolated Workspace. Their data, strategy, and context are never accessible from another client\'s Workspace. This is the core architecture, not an add-on feature.',
      },
      {
        question: 'How do I scale my sales consulting practice with AI?',
        answer: 'Encode your methodology once using Brain Dump mode, then deploy it to every new client engagement without rebuilding context. Client Intelligence handles the framework application. You focus on high-value advisory work only you can do.',
      },
    ],
  },
  {
    slug: 'growth-consultants',
    label: 'Growth Consultants',
    pain: 'scaling growth work across multiple clients without becoming the bottleneck',
    outcome: 'Deploy your growth methodology at scale with per-client isolation',
    metaDescription: 'Client Intelligence for Growth Consultants. Centralize your growth framework in the Brain and apply it to every client through isolated Workspaces. Scale without bottlenecks.',
    scenarios: [
      {
        title: 'Running growth sprints across four clients simultaneously',
        story: 'A growth consultant manages four active sprints at once, each in its own isolated Workspace. The AI tracks experiment history, framework application, and client-specific hypotheses, completely separate per client. The Brain holds the methodology. The Workspaces hold the context.',
        result: 'Four sprints. One consultant. No confusion.',
      },
      {
        title: 'Applying a growth diagnostic to every new engagement',
        story: 'The consultant\'s growth diagnostic framework is encoded once in the Account Brain using Brain Dump mode. Every new client Workspace inherits it. The AI maps the framework to the client\'s specific funnel, metrics, and market automatically.',
        result: 'Onboarding a new growth client now takes half a day.',
      },
      {
        title: 'Removing yourself from initial analysis',
        story: 'The AI runs the initial growth audit, pulling from the encoded Brain and the client\'s uploaded data, and drafts a gap analysis in the client\'s Workspace. The consultant reviews, adjusts, and delivers. First drafts are no longer manual.',
        result: '60% reduction in time spent on initial client analysis.',
      },
    ],
    forYou: [
      'You run growth strategy or experimentation for 2+ clients',
      'You have a proprietary growth framework or diagnostic process',
      'You need each client\'s data and experiments completely isolated',
      'You want to scale your growth practice without hiring analysts',
    ],
    notForYou: [
      'You are an in-house growth manager',
      'You do not have a proprietary framework and rely on generic growth tactics',
      'You need analytics or attribution tooling',
    ],
    faqs: [
      {
        question: 'What AI tools do growth consultants use?',
        answer: 'Client Intelligence is purpose-built for growth consultants managing multiple client engagements. It trains on your proprietary growth framework and applies it to every client through isolated Workspaces, preventing strategy and data cross-contamination.',
      },
      {
        question: 'How do I scale a growth consulting practice with AI?',
        answer: 'Encode your growth methodology in the Account Brain using Brain Dump mode. Every new client engagement inherits your framework automatically through their isolated Workspace. You stop rebuilding context and start delivering faster from day one.',
      },
      {
        question: 'Can AI run growth experiments for consulting clients?',
        answer: 'Client Intelligence does not run experiments directly. It applies your growth framework intelligently to each client\'s specific context, surfacing recommendations, tracking experiment history via Facts, and maintaining strategic context between sessions.',
      },
      {
        question: 'How do growth consultants keep client strategies separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Their experiment logs, strategic decisions, funnel data, and framework adaptations never interact with any other client\'s Workspace.',
      },
    ],
  },
  {
    slug: 'marketing-consultants',
    label: 'Marketing Consultants',
    pain: 'delivering consistent methodology across multiple retainer clients',
    outcome: 'Systematize your marketing IP and apply it to every client intelligently',
    metaDescription: 'Client Intelligence for Marketing Consultants. Encode your marketing methodology in the Brain and apply it across every client retainer through isolated Workspaces.',
    scenarios: [
      {
        title: 'Managing six marketing retainers with one Brain',
        story: 'A marketing consultant runs six retainers simultaneously. Each client has a fully isolated Workspace. Strategy, assets, briefs, and session history never mix. Before each client call, the AI surfaces the last three interactions and open strategic items from the client\'s Workspace.',
        result: 'Six retainers managed with the clarity of one.',
      },
      {
        title: 'Applying a named marketing methodology to every engagement',
        story: 'The consultant\'s proprietary positioning and messaging framework is encoded in the Account Brain using Brain Dump mode. Each new retainer client gets a Workspace that automatically inherits and applies that framework to their specific market and audience.',
        result: 'Consistent strategic quality across all clients.',
      },
      {
        title: 'Eliminating the first-90-days rebuild',
        story: 'Instead of spending the first month rebuilding client context, the consultant runs a structured Brain Dump intake. The AI structures the client\'s existing assets, history, and goals into their Workspace and auto-extracts Facts, ready to reference from day one.',
        result: 'First 90-day ramp eliminated for every new client.',
      },
    ],
    forYou: [
      'You manage 2+ marketing retainers or client engagements',
      'You have a proprietary marketing or positioning framework',
      'Keeping each client\'s strategy completely isolated is important to you',
      'You want to grow your retainer base without growing your team',
    ],
    notForYou: [
      'You are an in-house marketer',
      'You work with one client only',
      'You need a social media scheduler or content calendar tool',
    ],
    faqs: [
      {
        question: 'What is the best AI for marketing consultants?',
        answer: 'Client Intelligence is designed for marketing consultants managing multiple retainer clients. It centralizes your marketing methodology in the Brain and applies it to every client through isolated Workspaces. Not a generic AI assistant, but a system trained on your specific Frameworks.',
      },
      {
        question: 'How do marketing consultants use AI without client data leaking?',
        answer: 'Client Intelligence creates a fully isolated Workspace for each client. Their strategy, assets, briefs, and session history never interact with any other client\'s Workspace. Isolation is the core architecture.',
      },
      {
        question: 'Can I encode my marketing methodology into an AI?',
        answer: 'Yes. Client Intelligence is built specifically for this. Use Brain Dump mode to capture your methodology in any form, then it structures it into your Account Brain, available to every client Workspace independently.',
      },
      {
        question: 'How do I scale a marketing consultancy without hiring?',
        answer: 'Client Intelligence applies your methodology to every client automatically, reducing the time you spend rebuilding context, running diagnostics, and preparing deliverables. Per-client Workspaces handle the context. The Brain handles the consistency.',
      },
    ],
  },
  {
    slug: 'funnel-agencies',
    label: 'Funnel Agencies',
    pain: 'applying your funnel-building process to client after client without repeating yourself',
    outcome: 'Turn your funnel methodology into an AI system that works for every client',
    metaDescription: 'Client Intelligence for Funnel Agencies. Encode your funnel-building methodology in the Brain and apply it to every client through isolated Workspaces. Scale without repeating yourself.',
    scenarios: [
      {
        title: 'Building funnels for ten clients with one system',
        story: 'A funnel agency encodes their entire build methodology, from market research to launch sequence, in the Account Brain using Brain Dump mode. Each client gets an isolated Workspace that runs the same framework against their specific offer and market.',
        result: 'Ten active builds. One methodology. Zero rebuilding.',
      },
      {
        title: 'Onboarding new funnel clients in hours',
        story: 'The agency\'s intake and diagnostic process is encoded once in the Brain. When a new client joins, the AI runs the diagnostic framework against their uploaded materials and surfaces a funnel gap analysis within the day, directly in the client\'s isolated Workspace.',
        result: 'Client onboarding reduced from a week to a day.',
      },
      {
        title: 'Keeping client strategies completely separate',
        story: 'Two clients in competitive niches are both active at the same time. Their strategies, copy angles, and funnel structures are in completely isolated Workspaces. The Brain powers both. The outputs never bleed into each other.',
        result: 'Confidential client strategy, guaranteed.',
      },
    ],
    forYou: [
      'You build funnels for 2+ clients simultaneously',
      'You have a proprietary funnel-building methodology or process',
      'Keeping client strategies and data completely isolated is critical',
      'You want to scale your funnel agency without proportionally growing your team',
    ],
    notForYou: [
      'You build one funnel for your own business',
      'You have no systematic methodology and every funnel is built from scratch differently',
      'You need a funnel builder or page builder tool',
    ],
    faqs: [
      {
        question: 'What AI tools do funnel agencies use?',
        answer: 'Client Intelligence is built for funnel agencies running multiple client builds simultaneously. It centralizes your funnel methodology in the Brain and applies it to every client through isolated Workspaces, preventing strategy bleed and enabling scale.',
      },
      {
        question: 'How do funnel agencies keep client strategies separate in AI?',
        answer: 'Every client in Client Intelligence has their own isolated Workspace. Funnel strategies, copy angles, audience research, and build documentation never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can I train AI on my funnel-building process?',
        answer: 'Yes. Client Intelligence is designed for exactly this. Encode your funnel methodology, from research to launch, using Brain Dump mode. The AI applies it to every new client engagement automatically through their isolated Workspace.',
      },
      {
        question: 'How do funnel agencies scale without hiring?',
        answer: 'By encoding your methodology in the Account Brain, the AI handles diagnostic, planning, and documentation work for each new client. You scale the agency\'s output without scaling the team headcount.',
      },
    ],
  },
  {
    slug: 'performance-marketing-agencies',
    label: 'Performance Marketing Agencies',
    pain: 'scaling client delivery while keeping strategies and data completely separate',
    outcome: 'Scale performance work across clients with isolated Workspaces per account',
    metaDescription: 'Client Intelligence for Performance Marketing Agencies. Per-client isolated Workspaces for ad strategy, creative briefs, and campaign intelligence. Scale without data bleed.',
    scenarios: [
      {
        title: 'Managing twelve ad accounts with zero data bleed',
        story: 'A performance agency runs twelve active accounts. Each has an isolated Workspace in Client Intelligence. Campaign history, creative strategy, audience learnings, and briefs are completely separate per client. The Brain holds the agency methodology. The Workspaces hold the client context.',
        result: 'Twelve accounts, one system, zero cross-contamination.',
      },
      {
        title: 'Applying an ad framework to every new client',
        story: 'The agency\'s paid media diagnostic and scaling framework is encoded once in the Account Brain using Brain Dump mode. Every new client Workspace inherits it. The AI applies the framework to their specific offer, market, and budget from day one.',
        result: 'New client onboarding accelerated by 70%.',
      },
      {
        title: 'Removing account managers from routine prep',
        story: 'Before each client review, the AI generates a performance brief from the client\'s isolated Workspace: last period results, framework gaps, creative hypothesis log, and next-step recommendations based on the encoded methodology.',
        result: 'Account managers freed from 3 hours of weekly prep per client.',
      },
    ],
    forYou: [
      'You manage paid media for 3+ clients simultaneously',
      'You have a proprietary performance methodology or ad framework',
      'Keeping each client\'s ad strategy and data completely isolated is non-negotiable',
      'You want to scale client capacity without proportionally scaling your team',
    ],
    notForYou: [
      'You manage one brand\'s paid media in-house',
      'You have no systematic methodology and wing each account differently',
      'You need an ad platform, reporting tool, or attribution software',
    ],
    faqs: [
      {
        question: 'What AI tools do performance marketing agencies use?',
        answer: 'Client Intelligence is purpose-built for performance agencies managing multiple client accounts. It centralizes your paid media methodology in the Brain and gives each client a fully isolated Workspace. Strategy, creative briefs, and campaign history never bleed between accounts.',
      },
      {
        question: 'How do performance agencies keep client ad data separate in AI?',
        answer: 'Client Intelligence creates a fully isolated Workspace per client. Their campaign history, creative strategy, audience insights, and performance data are stored separately and never accessible from another client\'s Workspace.',
      },
      {
        question: 'Can I scale a performance marketing agency with AI?',
        answer: 'Yes. Encode your performance methodology in the Account Brain using Brain Dump mode and deploy it across every client engagement automatically. Per-client Workspaces ensure the context stays separate. The Brain ensures the methodology stays consistent.',
      },
      {
        question: 'What is the best AI for agencies managing multiple ad accounts?',
        answer: 'Client Intelligence is the only platform built specifically for multi-client service delivery with true per-client isolation. Unlike ChatGPT or generic AI tools, it keeps every client\'s data and strategy completely separate while applying your methodology consistently.',
      },
    ],
  },
  {
    slug: 'ai-consultants',
    label: 'AI Consultants',
    pain: 'building client-specific AI systems while managing your own proprietary implementation methodology',
    outcome: 'Use your AI consulting frameworks to deliver better systems to every client, faster',
    metaDescription: 'Client Intelligence for AI Consultants. Centralize your AI implementation methodology in the Brain and apply it to every client through isolated Workspaces. Built for the people who build AI for others.',
    scenarios: [
      {
        title: 'Running five AI implementation projects simultaneously',
        story: 'An AI consultant managing five client implementations uses Client Intelligence to keep each project\'s architecture decisions, vendor evaluations, and implementation notes completely isolated in separate Workspaces, while applying a consistent methodology from the Account Brain across all five.',
        result: 'Five projects. One methodology. Zero overlap.',
      },
      {
        title: 'Encoding an AI readiness framework',
        story: 'The consultant\'s AI readiness assessment framework is encoded in the Account Brain using Brain Dump mode. Every new client engagement starts with that framework applied to their specific tech stack, team, and business model, automatically, through their isolated Workspace.',
        result: 'Assessment delivery time cut from 2 weeks to 2 days.',
      },
      {
        title: 'Building AI systems faster using AI',
        story: 'The consultant uses Client Intelligence to maintain implementation documentation, decision logs, and architecture notes per client in isolated Workspaces. The AI generates first drafts of client-specific documentation from the encoded methodology in the Brain.',
        result: 'Documentation overhead reduced by 60%.',
      },
    ],
    forYou: [
      'You implement or advise on AI systems for client businesses',
      'You have a proprietary AI readiness, implementation, or workflow methodology',
      'Keeping each client\'s architecture and strategy completely confidential is critical',
      'You want to scale your AI consulting practice without rebuilding context per client',
    ],
    notForYou: [
      'You are building AI for your own company, not for clients',
      'You have no proprietary implementation methodology',
      'You need a development environment, model API, or AI infrastructure tool',
    ],
    faqs: [
      {
        question: 'What AI tools do AI consultants use for their own practice?',
        answer: 'Client Intelligence is built for AI consultants who implement AI for client businesses. It centralizes your implementation methodology in the Brain and gives every client project a fully isolated Workspace. Your Frameworks stay consistent. Client data stays confidential.',
      },
      {
        question: 'How do AI consultants manage multiple client AI implementations?',
        answer: 'Client Intelligence creates isolated Workspaces per client engagement. Architecture decisions, vendor evaluations, implementation notes, and project history are kept completely separate, while your methodology applies consistently across all projects via the Account Brain.',
      },
      {
        question: 'Can an AI consultant train AI on their own implementation framework?',
        answer: 'Yes, and this is the core use case. Client Intelligence is designed to be trained on your proprietary AI implementation methodology. Encode your assessment framework, deployment process, and best practices using Brain Dump mode. The AI applies them to every new client engagement.',
      },
      {
        question: 'What is the best platform for scaling an AI consulting practice?',
        answer: 'Client Intelligence is purpose-built for this. It is the only platform that gives AI consultants a centralized methodology Brain plus fully isolated Workspaces. That is the exact architecture needed to scale implementation work without risk or context rebuilding.',
      },
    ],
  },
  {
    slug: 'online-business-coaches',
    label: 'Online Business Coaches',
    pain: 'delivering bespoke coaching that feels personal even at scale',
    outcome: 'Apply your coaching methodology to every client with per-client memory',
    metaDescription: 'Client Intelligence for Online Business Coaches. Per-client Workspaces and isolated memory so every client gets personalized coaching powered by your methodology.',
    scenarios: [
      {
        title: 'Coaching 30 clients with individual attention',
        story: 'An online business coach uses Client Intelligence to maintain a complete memory of every client\'s goals, progress, blockers, and breakthroughs in isolated Workspaces. Facts are auto-extracted from session transcripts. Before each session, the AI surfaces what matters most for that client right now.',
        result: '30 clients, all feeling like the only one.',
      },
      {
        title: 'Applying a coaching methodology consistently at scale',
        story: 'The coach\'s signature business framework is encoded in the Account Brain using Brain Dump mode. Every client Workspace inherits it. The AI applies the methodology to each client\'s unique situation, stage, and goals.',
        result: 'Consistent methodology. Personalized application.',
      },
      {
        title: 'Ending the note-taking grind',
        story: 'After each coaching session, the coach uploads the transcript. The AI extracts key decisions, action items, and framework applications as Facts into the client\'s isolated Workspace, ready for the next session automatically.',
        result: 'Zero note-taking. Complete continuity between sessions.',
      },
    ],
    forYou: [
      'You coach 5+ clients and want each to feel fully individualized',
      'You have a proprietary business framework or coaching methodology',
      'You want to scale your coaching practice without burning out',
      'You are already using AI but it does not remember your clients',
    ],
    notForYou: [
      'You run a group program where all participants share the same content',
      'You have no proprietary coaching methodology',
      'You are looking for a course platform or LMS',
    ],
    faqs: [
      {
        question: 'What AI tools should online business coaches use?',
        answer: 'Client Intelligence is built for coaches who need per-client memory and methodology application at scale. Unlike generic AI tools, it remembers every client individually in an isolated Workspace, auto-extracts Facts from sessions, and applies your coaching framework to their specific situation.',
      },
      {
        question: 'How do online coaches use AI without losing the personal touch?',
        answer: 'Client Intelligence gives every client their own isolated Workspace with persistent memory, goals, history, breakthroughs, blockers, and context stored as Facts. The AI uses that memory to surface what matters for each client in every session, making scale feel personal.',
      },
      {
        question: 'Can I encode my coaching methodology into an AI?',
        answer: 'Yes. Client Intelligence is designed to be trained on your proprietary coaching framework. Encode your methodology once using Brain Dump mode. It applies to every client engagement automatically through their isolated Workspace.',
      },
      {
        question: 'What is the best AI platform for scaling a coaching business?',
        answer: 'Client Intelligence is the only platform built specifically for coaches who want to scale personalized delivery. Per-client memory, methodology training via the Account Brain, and isolated Workspaces are the core architecture, not add-ons.',
      },
    ],
  },
  {
    slug: 'methodology-driven-coaches',
    label: 'Coaches with Named Methodologies',
    pain: 'getting your proprietary framework out of your head and into every client engagement',
    outcome: 'Encode your methodology once and apply it intelligently to every client',
    metaDescription: 'Client Intelligence for coaches with named methodologies. Move your proprietary framework from your head into the Brain so it applies to every client automatically.',
    scenarios: [
      {
        title: 'Encoding a named methodology in a day',
        story: 'A coach with a proprietary 5-stage transformation framework uses Brain Dump mode to capture it completely, from the raw concepts in their head to a structured, AI-ready methodology in the Account Brain. Voice or text, however the thinking currently exists.',
        result: 'Named methodology encoded and live in one day.',
      },
      {
        title: 'Applying the framework to every client situation',
        story: 'Every new client Workspace inherits the methodology from the Brain automatically. The AI applies it to each client\'s specific circumstances, surfacing which stage they are at, what the next step is, and what blockers are relevant.',
        result: 'Framework applied consistently to every client, every session.',
      },
      {
        title: 'Scaling to a team without methodology drift',
        story: 'The coach brings on a junior coach. Client Intelligence ensures the junior uses the same methodology. The Account Brain enforces consistency across all Workspaces. The methodology is a firm asset, not in the founder\'s head.',
        result: 'Team scaled without methodology dilution.',
      },
    ],
    forYou: [
      'You have a named or proprietary coaching methodology',
      'Your framework currently lives mostly in your head',
      'You serve multiple clients and want the framework applied consistently to each',
      'You want to scale beyond your own time without losing methodology quality',
    ],
    notForYou: [
      'You teach generic productivity or life advice without a proprietary system',
      'You only work one-to-one with one client at a time and have no plans to scale',
      'You need a course builder or membership site platform',
    ],
    faqs: [
      {
        question: 'How do I turn my coaching framework into an AI system?',
        answer: 'Client Intelligence uses Brain Dump mode to capture your methodology in any form, notes, documents, or verbal description. It structures that IP into your Account Brain, which then applies your framework to every client engagement automatically through isolated Workspaces.',
      },
      {
        question: 'What is the best way to productize a coaching methodology with AI?',
        answer: 'Encode it in Client Intelligence. Your methodology becomes the Brain that powers every client engagement, applied intelligently to each client\'s unique situation through their isolated Workspace.',
      },
      {
        question: 'How do coaches with named methodologies use AI without losing the framework?',
        answer: 'Client Intelligence is trained on your framework, not generic best practices. Your methodology is the foundation. The AI applies it consistently to every client, at every stage, in every session.',
      },
      {
        question: 'Can I scale my coaching methodology without hiring coaches?',
        answer: 'Yes. Client Intelligence applies your methodology to every client engagement automatically. You can serve significantly more clients without additional hires because the AI handles framework application, context memory via Facts, and between-session continuity.',
      },
    ],
  },
  {
    slug: 'executive-coaches',
    label: 'Executive Coaches',
    pain: 'maintaining client confidentiality while delivering a consistent coaching framework',
    outcome: 'Isolated client memory, consistent methodology. The executive coaching AI platform.',
    metaDescription: 'Client Intelligence for Executive Coaches. Per-client isolated Workspaces and confidential memory for every engagement. Your methodology applied consistently, in complete privacy.',
    scenarios: [
      {
        title: 'Complete confidentiality across a full executive coaching roster',
        story: 'An executive coach with 15 C-suite clients uses Client Intelligence to maintain every client\'s goals, leadership challenges, and development history in a fully isolated Workspace. No client\'s context is ever accessible from another\'s Workspace. This is structural, not a setting.',
        result: '15 C-suite engagements. Complete confidentiality. Zero breach risk.',
      },
      {
        title: 'Applying an executive development framework consistently',
        story: 'The coach\'s proprietary leadership development framework is encoded in the Account Brain. Each executive gets a Workspace where the AI applies that framework to their specific leadership challenges, team dynamics, and development stage.',
        result: 'Framework-driven coaching delivered consistently at scale.',
      },
      {
        title: 'Pre-session briefs in 5 minutes',
        story: 'Before each coaching session, the AI generates a brief from the client\'s isolated Workspace: last session outcomes, development progress, open items, and framework recommendations specific to that executive.',
        result: 'Fully prepared for every session in 5 minutes, not 45.',
      },
    ],
    forYou: [
      'You coach senior leaders or executives and confidentiality is paramount',
      'You have a proprietary leadership or executive development framework',
      'You manage 5+ coaching relationships simultaneously',
      'You want to scale your practice without sacrificing the depth executives expect',
    ],
    notForYou: [
      'You run group leadership programs, not individual coaching',
      'You have no proprietary framework and work from generic coaching models',
      'You need a video platform or scheduling tool',
    ],
    faqs: [
      {
        question: 'What AI tools do executive coaches use?',
        answer: 'Client Intelligence is purpose-built for executive coaches who need complete client confidentiality and a consistent coaching framework. Every client has an isolated Workspace. Their development history, session notes, and strategic context are never accessible from another client\'s Workspace.',
      },
      {
        question: 'How do executive coaches maintain client confidentiality when using AI?',
        answer: 'Client Intelligence creates a fully isolated Workspace per client. Not just a different chat thread, but true data isolation at the architecture level. One client\'s data cannot be accessed, surfaced, or referenced in any other Workspace.',
      },
      {
        question: 'Can I apply my executive coaching framework at scale with AI?',
        answer: 'Yes. Encode your framework in Client Intelligence using Brain Dump mode and it applies consistently to every executive engagement, surfacing the right development questions, tracking progress against your model, and maintaining context between sessions.',
      },
      {
        question: 'What is the best AI platform for executive coaches?',
        answer: 'Client Intelligence is the only platform built for executive coaches who need both confidentiality and methodology consistency. Per-client isolation at the architecture level, not just a privacy setting, and your framework trained into the Brain.',
      },
    ],
  },
  {
    slug: 'solopreneur-consultants',
    label: 'Solopreneur Consultants',
    pain: 'being the bottleneck in every client engagement when you are the only person',
    outcome: 'Scale your solo practice without hiring. Your AI does the heavy lifting.',
    metaDescription: 'Client Intelligence for Solopreneur Consultants. Remove yourself as the bottleneck and scale your solo practice using AI trained on your own methodology.',
    scenarios: [
      {
        title: 'Running eight clients solo',
        story: 'A solopreneur consultant runs eight active client engagements simultaneously. Client Intelligence maintains the full context of every engagement in isolated Workspaces. Facts are auto-extracted from every session. The consultant shows up to each client fully prepared without spending hours reviewing notes.',
        result: 'Eight clients, one person, zero overwhelm.',
      },
      {
        title: 'Breaking the time-for-money ceiling',
        story: 'By encoding their consulting methodology in the Account Brain using Brain Dump mode, the solopreneur removes themselves from routine analysis and documentation work. The AI handles first drafts, diagnostics, and between-session continuity in each client\'s Workspace.',
        result: 'Revenue doubled without additional hours worked.',
      },
      {
        title: 'Cloning your best thinking',
        story: 'Everything the consultant knows, Frameworks, heuristics, diagnostic questions, decision trees, is encoded using Brain Dump mode. The AI applies it to every client engagement through isolated Workspaces, as if the consultant themselves were present.',
        result: 'Your best thinking, applied to every client automatically.',
      },
    ],
    forYou: [
      'You are a solo consultant serving 2+ clients and you are the bottleneck',
      'You have proprietary frameworks that currently live mostly in your head',
      'You want to serve more clients without working more hours',
      'You are already using AI but it does not know your process or your clients',
    ],
    notForYou: [
      'You have a team and are looking for team collaboration tools',
      'You have no proprietary methodology and provide generic advice',
      'You need project management or client portal software',
    ],
    faqs: [
      {
        question: 'How do solopreneur consultants scale without hiring?',
        answer: 'Client Intelligence is the apply tool for solo practitioners. Encode your methodology in the Brain once, maintain full context for every client in isolated Workspaces, and let the AI handle diagnostic, documentation, and prep work. You focus on high-value advisory only you can deliver.',
      },
      {
        question: 'What is the best AI for solo consultants managing multiple clients?',
        answer: 'Client Intelligence is purpose-built for this. It gives every client an isolated Workspace with full memory via Facts, applies your methodology consistently via the Account Brain, and removes you from the repetitive work that creates bottlenecks in a solo practice.',
      },
      {
        question: 'How do I stop being the bottleneck in my consulting business?',
        answer: 'The bottleneck exists because your expertise only delivers at the speed you can personally apply it. Client Intelligence encodes that expertise in the Brain and applies it to every client engagement simultaneously through isolated Workspaces, removing the time constraint on your methodology.',
      },
      {
        question: 'Can AI replace the need to hire in a solo consulting practice?',
        answer: 'For most solopreneur consultants, Client Intelligence extends their effective capacity significantly before hiring becomes necessary. It handles the framework application, context maintenance via Facts, and documentation work that typically requires additional staff.',
      },
    ],
  },
  {
    slug: 'boutique-consulting-firms',
    label: 'Boutique Consulting Firms',
    pain: 'maintaining IP consistency across a small team serving multiple clients',
    outcome: 'Centralize your firm\'s IP and apply it intelligently to every engagement',
    metaDescription: 'Client Intelligence for Boutique Consulting Firms. Centralize your firm\'s proprietary IP in the Brain and ensure consistent methodology delivery across every team member and every client.',
    scenarios: [
      {
        title: 'Ensuring every team member applies the firm\'s methodology',
        story: 'A boutique firm with three consultants uses Client Intelligence as the central IP layer. Every team member accesses the same Account Brain. The firm\'s methodology is applied consistently across all client engagements, regardless of who is leading. No dilution. No drift.',
        result: 'Consistent methodology across all consultants. No dilution.',
      },
      {
        title: 'Scaling client capacity without growing the team',
        story: 'The firm takes on four additional clients without hiring. Client Intelligence gives each new client an isolated Workspace that inherits the firm\'s methodology from the Brain. Team members access client context instantly without rebuilding.',
        result: 'Four new clients, no new hires.',
      },
      {
        title: 'Protecting IP when team members leave',
        story: 'Client Intelligence is the firm\'s central IP store. When a senior consultant departs, the methodology, Frameworks, and client work history remain in the Account Brain, accessible to the remaining team, not locked in someone\'s personal notes.',
        result: 'IP stays with the firm, not with individual consultants.',
      },
    ],
    forYou: [
      'You run a boutique consulting firm with 2-10 team members',
      'You have proprietary methodologies that define your firm\'s differentiation',
      'Consistent methodology delivery across all consultants is critical',
      'You want to scale client capacity without proportionally growing headcount',
    ],
    notForYou: [
      'You are a solo practitioner (see the solopreneur page)',
      'You are an enterprise firm with 50+ consultants',
      'You need HR, billing, or client portal software',
    ],
    faqs: [
      {
        question: 'How do boutique consulting firms use AI for client delivery?',
        answer: 'Client Intelligence acts as the firm\'s central methodology layer. All proprietary Frameworks and IP stored in one Account Brain. Each client has a fully isolated Workspace. Every team member applies the same methodology consistently, regardless of who is leading the engagement.',
      },
      {
        question: 'How do consulting firms protect their IP when scaling?',
        answer: 'Client Intelligence centralizes IP in the Account Brain, not in individual consultants\' heads or personal documents. Methodology, Frameworks, and client work history are firm assets, accessible to authorized team members and protected when staff changes occur.',
      },
      {
        question: 'What is the best AI platform for boutique consulting firms?',
        answer: 'Client Intelligence is built for service businesses in the $500K to $3M range. It gives boutique firms a centralized IP and methodology layer with per-client isolated Workspaces, the architecture large firms pay enterprise prices for, at operator pricing.',
      },
      {
        question: 'Can AI help a small consulting firm compete with larger firms?',
        answer: 'Yes. Client Intelligence gives boutique firms the same methodology consistency, per-client intelligence, and delivery apply that large firms get from institutional knowledge systems, centralized IP, consistent delivery, and per-client intelligence, without the enterprise budget.',
      },
    ],
  },
  {
    slug: 'demand-generation-consultants',
    label: 'Demand Generation Consultants',
    pain: 'scaling demand gen work across multiple clients with distinct strategies',
    outcome: 'Your demand gen methodology, applied to every client with full context isolation',
    metaDescription: 'Client Intelligence for Demand Generation Consultants. Apply your demand gen framework across every client with isolated Workspaces and zero strategy bleed.',
    scenarios: [
      {
        title: 'Running seven demand gen programs simultaneously',
        story: 'A demand gen consultant manages seven active programs. Client Intelligence isolates each client\'s ICP definitions, campaign history, and funnel architecture in separate Workspaces. Strategies never bleed between clients, even in competitive markets. The Brain holds the methodology.',
        result: 'Seven programs. Zero strategy contamination.',
      },
      {
        title: 'Applying a demand gen framework to every new client',
        story: 'The consultant\'s proprietary demand generation framework, from ICP development to dark funnel activation, is encoded in the Account Brain using Brain Dump mode. Every new client engagement inherits it and applies it to their specific market through their isolated Workspace.',
        result: 'Faster client starts, consistent strategic quality.',
      },
      {
        title: 'Pre-campaign briefs generated automatically',
        story: 'Before each quarterly planning session, the AI generates a demand gen brief from the client\'s isolated Workspace: prior campaign performance, framework gaps, ICP evolution, and channel recommendations. Planning sessions start with insight.',
        result: 'Planning sessions now start with insight, not setup.',
      },
    ],
    forYou: [
      'You run demand generation programs for 2+ B2B clients',
      'You have a proprietary demand gen methodology or ICP framework',
      'Keeping each client\'s go-to-market strategy completely separate is non-negotiable',
      'You want to scale your practice without growing your analyst or strategist headcount',
    ],
    notForYou: [
      'You manage demand gen in-house for one company',
      'You have no systematic methodology and run different strategies for every client without a framework',
      'You need a marketing automation platform or CRM',
    ],
    faqs: [
      {
        question: 'What AI tools do demand generation consultants use?',
        answer: 'Client Intelligence is purpose-built for demand gen consultants managing multiple client programs. It centralizes your demand generation methodology in the Brain and applies it to every client through isolated Workspaces. ICP definitions, campaign histories, and strategies never bleed between accounts.',
      },
      {
        question: 'How do demand gen consultants keep client strategies separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. ICP definitions, campaign data, dark funnel insights, and go-to-market strategy are stored separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can I encode my demand generation framework into an AI system?',
        answer: 'Yes. Client Intelligence is designed for this. Encode your ICP development process, demand activation framework, and campaign methodology using Brain Dump mode. The AI applies it to every client engagement automatically through their isolated Workspace.',
      },
      {
        question: 'How do demand gen consultants scale without hiring analysts?',
        answer: 'By encoding your diagnostic and planning methodology in the Account Brain, the AI handles initial analysis, brief generation, and between-session context maintenance in each client\'s Workspace. You scale client capacity without scaling your analyst headcount.',
      },
    ],
  },
  {
    slug: 'fractional-cmo',
    label: 'Fractional CMOs',
    pain: 'context-switching between multiple companies while staying strategic for each',
    outcome: 'Separate AI Workspace per client so you never mix context or strategy',
    metaDescription: 'Client Intelligence for Fractional CMOs. Per-client isolated Workspaces so you context-switch instantly and stay fully strategic for every company you serve.',
    scenarios: [
      {
        title: 'Serving five companies as a fractional CMO',
        story: 'A fractional CMO serves five companies. Each has a fully isolated Workspace in Client Intelligence. Marketing strategy, brand positioning, campaign history, and team context are completely separate. Context-switching between companies takes seconds because the Facts and history are already there.',
        result: 'Five companies. One CMO. Zero confusion.',
      },
      {
        title: 'Arriving fully prepared for every leadership meeting',
        story: 'Before each board or marketing review, the AI surfaces the company\'s last quarter outcomes, open strategic decisions, and marketing framework gaps from the isolated Workspace. The CMO arrives with strategic insight every time, without an hour of note review.',
        result: 'Board-ready in 10 minutes for every company.',
      },
      {
        title: 'Applying a marketing strategy framework consistently',
        story: 'The fractional CMO\'s proprietary marketing strategy framework is encoded in the Account Brain using Brain Dump mode. Every company Workspace inherits it, applied to their specific market, stage, and competitive position automatically.',
        result: 'Strategic consistency across all companies served.',
      },
    ],
    forYou: [
      'You serve 2+ companies as a fractional CMO or marketing advisor',
      'You have a proprietary marketing strategy or brand framework',
      'Keeping each company\'s strategy completely confidential and separate is critical',
      'You want to scale your fractional practice beyond your current time constraints',
    ],
    notForYou: [
      'You are an in-house CMO at one company',
      'You have no proprietary strategic framework',
      'You need a marketing analytics or attribution platform',
    ],
    faqs: [
      {
        question: 'What AI tools do fractional CMOs use?',
        answer: 'Client Intelligence is designed for fractional CMOs managing multiple companies simultaneously. It gives every company a fully isolated Workspace. Strategy, brand positioning, and campaign history never bleed between clients.',
      },
      {
        question: 'How do fractional executives manage multiple companies with AI?',
        answer: 'Client Intelligence eliminates context-switching friction. Each company has an isolated Workspace with complete memory via Facts. The AI surfaces what matters for each company before every interaction, so you arrive prepared without spending an hour reviewing notes.',
      },
      {
        question: 'Can fractional CMOs use AI without risking client confidentiality?',
        answer: 'Yes, with Client Intelligence. Per-client isolation is the core architecture. Every company\'s strategy, data, and context is completely inaccessible from any other company\'s Workspace.',
      },
      {
        question: 'What is Intelligence as a Service for fractional CMOs?',
        answer: 'Intelligence as a Service means your marketing strategy framework is encoded into an AI that delivers that intelligence to each company you serve, individually and at scale. You can serve more companies with the same strategic depth because the Brain holds the methodology.',
      },
    ],
  },
  {
    slug: 'conversion-rate-optimization-consultants',
    label: 'CRO Consultants',
    pain: 'applying CRO frameworks consistently while keeping client data isolated',
    outcome: 'Your CRO methodology across every client, with zero data contamination',
    metaDescription: 'Client Intelligence for CRO Consultants. Apply your conversion rate optimization framework to every client through isolated Workspaces. No data bleed between engagements.',
    scenarios: [
      {
        title: 'Running eight CRO engagements in parallel',
        story: 'A CRO consultant manages eight active clients. Each client\'s test history, hypotheses, conversion framework applications, and analytics context are in a fully isolated Workspace. No test data or strategy ever crosses between clients. The Brain holds the methodology.',
        result: 'Eight CRO clients. Complete data isolation. Consistent methodology.',
      },
      {
        title: 'Applying a CRO diagnostic framework to every new client',
        story: 'The consultant\'s proprietary CRO audit framework is encoded in the Account Brain using Brain Dump mode. Every new client engagement starts with that framework applied to their specific funnel, traffic, and conversion data in their isolated Workspace.',
        result: 'CRO audit delivered in days, not weeks.',
      },
      {
        title: 'Generating test roadmaps automatically',
        story: 'From each client\'s isolated Workspace, including uploaded analytics data, session recordings, and previous test results, the AI drafts a prioritized test roadmap using the consultant\'s framework from the Brain.',
        result: 'Test roadmap generation reduced from 3 days to 3 hours.',
      },
    ],
    forYou: [
      'You run CRO programs for 2+ clients simultaneously',
      'You have a proprietary CRO audit or testing methodology',
      'Keeping each client\'s analytics and test data completely isolated is essential',
      'You want to scale CRO delivery without proportionally increasing your time',
    ],
    notForYou: [
      'You are an in-house CRO manager at one company',
      'You have no systematic testing or audit methodology',
      'You need an A/B testing platform or analytics tool',
    ],
    faqs: [
      {
        question: 'What AI tools do CRO consultants use?',
        answer: 'Client Intelligence is built for CRO consultants managing multiple client engagements. It centralizes your conversion optimization methodology in the Brain and gives every client a fully isolated Workspace. Test histories, analytics context, and conversion strategies never bleed between clients.',
      },
      {
        question: 'How do CRO consultants keep client test data separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Test hypotheses, experiment logs, analytics data, and conversion frameworks are stored completely separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can I encode my CRO audit methodology into an AI?',
        answer: 'Yes. Client Intelligence is designed for this exact use case. Encode your audit framework and prioritization methodology using Brain Dump mode. The AI applies it to every new client\'s funnel data, surfaces gaps, and drafts roadmaps automatically.',
      },
      {
        question: 'How do CRO consultants scale their practice with AI?',
        answer: 'By encoding your diagnostic and roadmapping methodology in the Account Brain, Client Intelligence handles the analytical groundwork for each new client engagement. You scale the number of active CRO programs without scaling your personal time investment proportionally.',
      },
    ],
  },
  {
    slug: 'revenue-strategists',
    label: 'Revenue Strategists',
    pain: 'losing context between client meetings and rebuilding it every session',
    outcome: 'Client Intelligence remembers everything. You show up with insights every time.',
    metaDescription: 'Client Intelligence for Revenue Strategists. Per-client memory means you never lose context between sessions. Show up prepared with insights, every time.',
    scenarios: [
      {
        title: 'Never losing context between client strategy sessions',
        story: 'A revenue strategist with six active advisory clients uses Client Intelligence to store every session\'s outcomes, open decisions, and strategic hypotheses in isolated per-client Workspaces. Facts are auto-extracted automatically. Before each session, the AI surfaces a complete context brief.',
        result: 'Walks into every session fully briefed. Every time.',
      },
      {
        title: 'Applying a revenue strategy framework across all clients',
        story: 'The strategist\'s proprietary revenue framework is encoded in the Account Brain using Brain Dump mode. Every client Workspace applies it, identifying which revenue levers are most relevant to each client\'s specific stage, model, and constraints.',
        result: 'Framework-driven strategy for every client, automatically.',
      },
      {
        title: 'Preparing strategic recommendations between sessions',
        story: 'Between client sessions, the AI analyzes updates from the client\'s Workspace, new documents, transcripts, or context, and drafts strategic recommendations using the encoded framework from the Brain.',
        result: 'Between-session strategic work done without the strategist\'s manual effort.',
      },
    ],
    forYou: [
      'You provide revenue strategy or advisory to 2+ clients',
      'You have a proprietary revenue framework or growth model',
      'You lose time rebuilding context before every client meeting',
      'You want to show up more prepared for every client with less prep time',
    ],
    notForYou: [
      'You are an in-house revenue leader at one company',
      'You provide generic business advice without a systematic framework',
      'You need a forecasting or financial modeling tool',
    ],
    faqs: [
      {
        question: 'How do revenue strategists use AI for client advisory work?',
        answer: 'Client Intelligence maintains complete per-client memory via Facts in isolated Workspaces. Every session outcome, open decision, and strategic hypothesis stored separately per client. The AI surfaces what matters before every client interaction so you arrive prepared with insight, not just notes.',
      },
      {
        question: 'What is the best AI for revenue advisors managing multiple clients?',
        answer: 'Client Intelligence is purpose-built for multi-client advisory. It gives every client an isolated Workspace with full memory, applies your revenue framework consistently via the Account Brain, and eliminates the context rebuilding that slows down advisory practices.',
      },
      {
        question: 'How do revenue strategists stop losing context between client meetings?',
        answer: 'Client Intelligence stores every session\'s context in isolated per-client Workspaces automatically via Facts. Before each meeting, the AI generates a brief from that memory, open items, strategic progress, and framework-based recommendations, so context is never lost.',
      },
      {
        question: 'Can I apply my revenue framework to every client automatically?',
        answer: 'Yes. Encode your framework in Client Intelligence using Brain Dump mode and it applies to every client engagement through their isolated Workspace, surfacing which levers are relevant to each client\'s specific stage and model, automatically.',
      },
    ],
  },
  {
    slug: 'agency-owners',
    label: 'Agency Owners',
    pain: 'removing yourself from delivery while maintaining the quality clients hired you for',
    outcome: 'Scale your agency\'s delivery without growing your team',
    metaDescription: 'Client Intelligence for Agency Owners. Remove yourself from delivery while maintaining quality. One methodology Brain, applied to every client through isolated Workspaces.',
    scenarios: [
      {
        title: 'Removing the founder from day-to-day delivery',
        story: 'An agency owner encodes their entire service delivery methodology in the Account Brain using Brain Dump mode. The team accesses the Brain for every client engagement. Methodology is applied consistently without the founder\'s direct involvement. Quality does not depend on the founder being present.',
        result: 'Founder removed from daily delivery. Quality maintained.',
      },
      {
        title: 'Onboarding new clients without touching the founder\'s calendar',
        story: 'New client onboarding is powered by the encoded intake and diagnostic framework in the Brain. The AI runs the initial analysis, generates the strategy brief, and populates the client Workspace. The founder reviews and approves, not builds from scratch.',
        result: 'New clients onboarded without founder bottleneck.',
      },
      {
        title: 'Scaling from 10 to 20 clients without new hires',
        story: 'The agency\'s delivery capacity doubles because Client Intelligence handles the framework-application work that previously required the founder or a senior team member to be present for every engagement.',
        result: '2x clients. Same team. Same quality.',
      },
    ],
    forYou: [
      'You own an agency and are currently the bottleneck in delivery',
      'You have a proprietary service delivery methodology',
      'You want to scale client capacity without proportionally growing your team',
      'You want to remove yourself from daily delivery without losing quality',
    ],
    notForYou: [
      'You are a freelancer without a team (see solopreneur page)',
      'You have no systematic delivery methodology and every engagement is built differently',
      'You need a project management or client communication tool',
    ],
    faqs: [
      {
        question: 'How do agency owners remove themselves from client delivery?',
        answer: 'Client Intelligence encodes your delivery methodology into an Account Brain that every team member and every client Workspace can draw from. Consistent framework application means quality does not depend on your personal presence in every engagement.',
      },
      {
        question: 'What AI tools do agency owners use to scale delivery?',
        answer: 'Client Intelligence is the apply layer for agency owners. It centralizes your methodology in the Brain, gives every client an isolated Workspace, and applies your Frameworks consistently. Delivery quality scales without adding headcount.',
      },
      {
        question: 'How do agencies maintain quality while scaling?',
        answer: 'Quality at scale requires a system, not a person. Client Intelligence makes your methodology the system. Encoded in the Brain, accessible to every team member, and applied consistently to every client engagement through isolated Workspaces.',
      },
      {
        question: 'Can an agency owner use AI to scale without hiring?',
        answer: 'Yes. Client Intelligence extends effective delivery capacity for most agency owners before additional hiring becomes necessary. The AI handles diagnostic, documentation, and framework application work, freeing your team for high-value execution.',
      },
    ],
  },
  {
    slug: 'one-person-agencies',
    label: 'One-Person Agencies',
    pain: 'doing everything alone, strategy, delivery, and operations for multiple clients',
    outcome: 'Build a one-person agency that runs like a team using AI',
    metaDescription: 'Client Intelligence for One-Person Agencies. The AI system that makes a solo operator run like a full agency. Your methodology applied to every client automatically.',
    scenarios: [
      {
        title: 'Running a six-figure agency solo',
        story: 'A one-person agency owner uses Client Intelligence to maintain full context for every client in isolated Workspaces, apply their service methodology consistently via the Account Brain, and generate deliverable first drafts. All without a team.',
        result: 'Six-figure revenue. Zero team.',
      },
      {
        title: 'Taking on premium clients without premium overhead',
        story: 'By encoding their methodology in Client Intelligence, the operator delivers the same strategic depth as a full-service agency. The Brain holds the IP. The Workspaces hold the client context. The operator focuses on the high-value work only they can do.',
        result: 'Premium positioning. Solo overhead.',
      },
      {
        title: 'Working four hours a day, serving six clients',
        story: 'The AI handles initial analysis, framework application, and documentation prep across all client Workspaces. The operator focuses exclusively on the high-value advisory and creative work that requires their direct judgment.',
        result: '4-hour workday. 6 active clients.',
      },
    ],
    forYou: [
      'You run a one-person agency serving 2+ clients',
      'You have a proprietary service methodology',
      'You want to scale revenue without the complexity of building a team',
      'You are at the ceiling of what you can personally deliver and need leverage',
    ],
    notForYou: [
      'You already have a team and are looking for team management tools',
      'You have no systematic methodology and each client gets a completely different approach',
      'You need a project management, invoicing, or client communication tool',
    ],
    faqs: [
      {
        question: 'How do one-person agencies scale without hiring?',
        answer: 'Client Intelligence is the apply system for solo operators. Encode your methodology in the Brain, maintain per-client memory in isolated Workspaces, and let the AI handle framework application and documentation. You focus on the work only you can do.',
      },
      {
        question: 'What AI tools do one-person agencies use?',
        answer: 'Client Intelligence is purpose-built for one-person agencies. It gives every client an isolated Workspace, applies your methodology consistently via the Account Brain, and handles the analytical and documentation work that typically requires a team.',
      },
      {
        question: 'Can a one-person agency compete with larger agencies using AI?',
        answer: 'Yes. Client Intelligence gives solo operators the same methodology consistency, per-client intelligence, and delivery apply that larger agencies get from teams and systems, at a fraction of the overhead.',
      },
      {
        question: 'What is Intelligence as a Service for one-person agencies?',
        answer: 'It means your expert methodology is delivered to every client through an AI system, not manually repeated by you. The intelligence scales. You do not have to.',
      },
    ],
  },
  {
    slug: 'high-ticket-service-providers',
    label: 'High-Ticket Service Providers',
    pain: 'justifying premium prices while staying scalable',
    outcome: 'Deliver elite, framework-driven service to every client with AI',
    metaDescription: 'Client Intelligence for High-Ticket Service Providers. Deliver premium, framework-driven service to every client at scale with per-client AI memory and isolated Workspaces.',
    scenarios: [
      {
        title: 'Charging $10K+ per client and scaling beyond 5',
        story: 'A high-ticket consultant uses Client Intelligence to maintain the depth of attention that justifies premium pricing. Full per-client memory via Facts, methodology applied to each unique situation from the Brain, while serving 10 clients instead of 5.',
        result: '2x clients. Premium positioning maintained.',
      },
      {
        title: 'Demonstrating methodology depth in proposals',
        story: 'The consultant\'s proprietary framework is fully encoded and documented in the Account Brain. During proposals, they can show exactly how the AI applies their methodology to the prospect\'s specific situation. In real time.',
        result: 'Proposal close rate increases because the methodology is tangible.',
      },
      {
        title: 'Delivering between sessions without billing for it',
        story: 'Between client sessions, the AI monitors the client Workspace for new inputs, documents, updates, transcripts, and prepares framework-based recommendations using the encoded Brain. The client receives strategic value continuously, not just in sessions.',
        result: 'Continuous value delivery. Premium retention justified.',
      },
    ],
    forYou: [
      'You charge premium prices for your service or advisory',
      'Your value proposition is the depth and quality of your proprietary methodology',
      'You want to scale client capacity without diluting the premium experience',
      'You want to deliver more between sessions without working more hours',
    ],
    notForYou: [
      'You compete on price rather than methodology depth',
      'You have no proprietary framework and deliver generic advice',
      'You need a payment processor or contract management tool',
    ],
    faqs: [
      {
        question: 'How do high-ticket consultants scale without losing premium quality?',
        answer: 'Client Intelligence encodes your methodology as the quality standard in the Account Brain. Every client receives that same depth of framework-driven intelligence, applied individually to their unique situation through their isolated Workspace, regardless of how many clients you serve.',
      },
      {
        question: 'What AI tools do high-ticket service providers use?',
        answer: 'Client Intelligence is the apply platform for high-ticket operators. It maintains the per-client depth that justifies premium pricing while enabling you to serve significantly more clients than you could manually.',
      },
      {
        question: 'How do premium service businesses use AI without losing personalization?',
        answer: 'Per-client isolation is the key. Client Intelligence gives every client their own Workspace with individual memory and context via Facts. Your framework applied to their specific situation, not a generic output. Premium experience at scale.',
      },
      {
        question: 'Can AI help me deliver more value between client sessions?',
        answer: 'Yes. Client Intelligence monitors each client\'s isolated Workspace for new inputs and prepares framework-based recommendations between sessions using the Account Brain. Clients receive continuous strategic value, which justifies premium retainer prices.',
      },
    ],
  },
  {
    slug: 'direct-response-consultants',
    label: 'Direct Response Consultants',
    pain: 'consistently applying your DR frameworks to each unique client business',
    outcome: 'Your direct response methodology, applied intelligently to every client',
    metaDescription: 'Client Intelligence for Direct Response Consultants. Train the Brain on your DR frameworks and apply them to every client through isolated Workspaces.',
    scenarios: [
      {
        title: 'Applying a DR framework to six client offers simultaneously',
        story: 'A direct response consultant manages six active offer-building engagements. Their DR framework, from market research to copy angle development, is encoded in the Account Brain using Brain Dump mode and applied to each client\'s unique offer, audience, and funnel through isolated Workspaces.',
        result: 'Six engagements. One DR Brain. Consistent framework application.',
      },
      {
        title: 'Generating first-draft copy briefs automatically',
        story: 'The consultant\'s DR copy framework is encoded in Client Intelligence. For each new client, the AI generates a structured copy brief from the encoded Brain and the client\'s uploaded market research, directly in the client\'s isolated Workspace.',
        result: 'Copy briefs generated in hours, not days.',
      },
      {
        title: 'Keeping client offers and audiences completely separate',
        story: 'Two clients operate in adjacent niches. Their offer research, copy angles, and funnel strategies are in completely isolated Workspaces. The AI applies the same DR framework from the Brain to each, but the outputs never bleed together.',
        result: 'Adjacent niches. Zero strategy contamination.',
      },
    ],
    forYou: [
      'You apply direct response principles to 2+ client businesses',
      'You have a proprietary DR methodology, copy framework, or offer-building process',
      'Keeping each client\'s offer strategy completely separate is essential',
      'You want to scale your DR practice without rebuilding context per client',
    ],
    notForYou: [
      'You write copy for your own business only',
      'You have no systematic DR methodology and approach each engagement from scratch',
      'You need a copywriting tool or landing page builder',
    ],
    faqs: [
      {
        question: 'What AI tools do direct response consultants use?',
        answer: 'Client Intelligence is built for DR consultants applying their frameworks to multiple client businesses. It encodes your direct response methodology in the Brain and applies it to every client through isolated Workspaces. Offer strategy, copy angles, and market research never bleed between clients.',
      },
      {
        question: 'Can I train AI on my direct response framework?',
        answer: 'Yes. Client Intelligence is designed to be trained on your specific DR methodology, not generic copywriting best practices. Your framework becomes the Brain\'s operating foundation for every client engagement.',
      },
      {
        question: 'How do direct response consultants keep client strategies separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Offer research, copy angles, funnel architecture, and audience insights are stored completely separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'How do DR consultants scale their practice with AI?',
        answer: 'By encoding your methodology in the Account Brain, Client Intelligence handles initial market research structuring, copy brief generation, and framework application for every new client. You scale the number of active engagements without scaling your manual workload proportionally.',
      },
    ],
  },
  {
    slug: 'business-strategy-consultants',
    label: 'Business Strategy Consultants',
    pain: 'applying your strategic frameworks consistently without starting from scratch per client',
    outcome: 'One strategic Brain, applied intelligently to every engagement',
    metaDescription: 'Client Intelligence for Business Strategy Consultants. Centralize your strategic frameworks in the Brain and apply them consistently to every client through isolated Workspaces.',
    scenarios: [
      {
        title: 'Running five strategy engagements without losing depth',
        story: 'A business strategy consultant manages five active engagements. Each client\'s competitive landscape, strategic hypotheses, and decision history sit in a fully isolated Workspace with auto-extracted Facts. Before every client meeting, the AI delivers a context brief with current strategic priorities and open questions.',
        result: 'Five strategy engagements. Zero context rebuilding.',
      },
      {
        title: 'Encoding a proprietary diagnostic framework',
        story: 'The consultant\'s business diagnostic process, from market sizing to organizational readiness, is encoded in the Account Brain using Brain Dump mode. Every new client Workspace inherits it automatically, applying the framework to their industry, size, and stage.',
        result: 'Strategy diagnostic delivered in days instead of weeks.',
      },
      {
        title: 'Maintaining strategic continuity between sessions',
        story: 'Between quarterly strategy sessions, the AI tracks new information in each client\'s Workspace and updates the strategic picture via Facts. The consultant arrives for the next session with a complete view of what changed and what it means.',
        result: 'Continuous strategic intelligence between sessions, with no manual tracking.',
      },
    ],
    forYou: [
      'You serve 2+ companies as a strategy consultant or advisor',
      'You have a proprietary diagnostic, framework, or strategic methodology',
      'Keeping each client\'s strategic context completely isolated is critical',
      'You want to scale your advisory capacity without sacrificing strategic depth',
    ],
    notForYou: [
      'You are an in-house strategy leader at one company',
      'You have no proprietary framework and each engagement starts entirely fresh',
      'You need a financial modeling or forecasting tool',
    ],
    faqs: [
      {
        question: 'What AI tools do business strategy consultants use?',
        answer: 'Client Intelligence is built for strategy consultants running multiple concurrent engagements. It centralizes your strategic methodology in the Brain and applies it to every client through isolated Workspaces. Each company gets your full framework without context from other clients leaking in.',
      },
      {
        question: 'How do I keep each client\'s strategy confidential when using AI?',
        answer: 'Client Intelligence creates a fully isolated Workspace per client. Their competitive intelligence, strategic hypotheses, and decision logs never interact with any other client\'s Workspace. This is architecture-level isolation, not a privacy setting.',
      },
      {
        question: 'Can AI help me apply a strategy framework to multiple clients at once?',
        answer: 'Yes. Encode your strategic diagnostic and framework in Client Intelligence once using Brain Dump mode. The AI applies it to every new client engagement automatically, mapping it to their specific industry, competitive position, and organizational constraints.',
      },
      {
        question: 'How do strategy consultants maintain deep engagement quality at scale?',
        answer: 'Client Intelligence maintains full context per client in isolated Workspaces via Facts, strategic hypotheses, prior decisions, and open questions. The AI surfaces what matters before every client interaction, so depth never requires more of your time.',
      },
    ],
  },
  {
    slug: 'fractional-cso',
    label: 'Fractional CSOs',
    pain: 'keeping each client\'s sales process and data completely separate',
    outcome: 'Per-client sales Workspace with your methodology applied to every engagement',
    metaDescription: 'Client Intelligence for Fractional CSOs. Isolated Workspaces per company so your sales methodology is applied consistently while client data stays completely separate.',
    scenarios: [
      {
        title: 'Running four sales transformations simultaneously',
        story: 'A fractional CSO serving four companies uses Client Intelligence to maintain each company\'s sales process documentation, rep performance notes, and strategic decisions in a fully isolated Workspace. Facts are auto-extracted from every call transcript. Before each leadership call, the AI surfaces the current sales health picture.',
        result: 'Four companies. One CSO. Complete separation.',
      },
      {
        title: 'Deploying a sales methodology to every new company',
        story: 'The fractional CSO\'s proprietary sales transformation methodology, from pipeline architecture to rep coaching frameworks, is encoded in the Account Brain using Brain Dump mode. Every new company Workspace inherits it and applies it to their specific team and market.',
        result: 'Sales methodology deployed to a new company in 48 hours, not 3 weeks.',
      },
      {
        title: 'Coaching sales teams without cross-contaminating data',
        story: 'The CSO uploads rep call transcripts and pipeline data for each company into isolated Workspaces. The AI analyzes each company\'s data independently and surfaces coaching recommendations specific to that team, using the framework from the Brain.',
        result: 'Company-specific coaching insights, with zero cross-company data risk.',
      },
    ],
    forYou: [
      'You serve 2+ companies as a fractional CSO or VP of Sales',
      'You have a proprietary sales methodology or transformation process',
      'Keeping each company\'s sales data and strategy completely isolated is non-negotiable',
      'You want to scale your fractional practice without time becoming the constraint',
    ],
    notForYou: [
      'You are a full-time VP of Sales at one company',
      'You have no systematic sales methodology and each engagement is improvised',
      'You need a CRM, sales engagement platform, or quota management tool',
    ],
    faqs: [
      {
        question: 'What AI tools do fractional CSOs use?',
        answer: 'Client Intelligence is built for fractional sales leaders serving multiple companies. It centralizes your sales methodology in the Brain and gives every company a fully isolated Workspace. Pipeline data, rep notes, and strategic decisions never cross between companies.',
      },
      {
        question: 'How do fractional CSOs keep each company\'s sales data private in AI?',
        answer: 'Client Intelligence creates a fully isolated Workspace per company. All sales data, call transcripts, rep performance notes, and strategic context are stored separately. One company\'s data is never accessible from another\'s Workspace.',
      },
      {
        question: 'Can a fractional CSO apply their sales methodology to every company with AI?',
        answer: 'Yes. Encode your sales transformation methodology in Client Intelligence once using Brain Dump mode. Every new company Workspace inherits it automatically. The AI applies your framework to their specific team size, market, and pipeline stage.',
      },
      {
        question: 'What is Intelligence as a Service for fractional sales leaders?',
        answer: 'Intelligence as a Service means your sales methodology is encoded into an AI system that applies it to each company you serve individually. Consistent strategic depth without you being physically present for every decision.',
      },
    ],
  },
  {
    slug: 'growth-hacking-agencies',
    label: 'Growth Agencies',
    pain: 'running experiments and frameworks across multiple clients without blurring lines',
    outcome: 'Isolated Workspaces for every growth engagement',
    metaDescription: 'Client Intelligence for Growth Agencies. Run your growth frameworks across multiple clients with fully isolated Workspaces per account. No strategy bleed, ever.',
    scenarios: [
      {
        title: 'Running growth sprints for eight clients with one methodology',
        story: 'A growth agency manages eight active client sprints. Each client\'s experiment log, channel data, and growth hypotheses are in a fully isolated Workspace. The agency\'s growth framework, encoded in the Account Brain, is applied to each client\'s specific funnel and metrics independently.',
        result: 'Eight sprints. One framework. Zero cross-contamination.',
      },
      {
        title: 'Onboarding a new growth client in one day',
        story: 'The agency\'s growth diagnostic and prioritization framework is encoded in the Brain using Brain Dump mode. When a new client is signed, the AI runs the diagnostic against their uploaded data and returns a prioritized growth roadmap within hours in the client\'s isolated Workspace.',
        result: 'New growth client fully onboarded in one day, not one month.',
      },
      {
        title: 'Keeping competitor clients completely isolated',
        story: 'Two clients compete directly in the same market. Their channel strategies, creative angles, and growth playbooks are in completely separate Workspaces. The same Brain powers both, but the outputs never mix.',
        result: 'Competing clients served simultaneously, with zero ethical risk.',
      },
    ],
    forYou: [
      'You run growth strategy or experimentation for 2+ clients simultaneously',
      'You have a proprietary growth methodology or experiment prioritization framework',
      'Keeping each client\'s growth data and strategy completely isolated is essential',
      'You want to scale your growth agency without scaling your team proportionally',
    ],
    notForYou: [
      'You do growth work for your own business only',
      'You have no systematic methodology and each client gets a completely different approach',
      'You need an analytics platform, attribution tool, or A/B testing software',
    ],
    faqs: [
      {
        question: 'What AI tools do growth agencies use?',
        answer: 'Client Intelligence is purpose-built for growth agencies managing multiple client engagements. It centralizes your growth methodology in the Brain and applies it to every client through isolated Workspaces. Experiment logs, channel data, and strategic decisions never bleed between accounts.',
      },
      {
        question: 'How do growth agencies keep each client\'s experiments isolated in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Experiment hypotheses, test results, channel strategies, and growth frameworks are stored separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can a growth agency use AI to serve more clients without more team members?',
        answer: 'Yes. Client Intelligence handles diagnostic, roadmap generation, and between-session context maintenance for each client automatically. The Brain holds the methodology. The Workspaces hold the context. You hold the strategy.',
      },
      {
        question: 'How do growth agencies maintain client confidentiality in AI?',
        answer: 'Client Intelligence creates architecture-level isolation per client, not just separate chat threads. One client\'s data, strategies, and context cannot be accessed from any other client\'s Workspace by design.',
      },
    ],
  },
  {
    slug: 'paid-ads-agencies',
    label: 'Paid Ads Agencies',
    pain: 'keeping client ad strategy and data completely isolated',
    outcome: 'Separate AI memory per client. No strategy bleed-through, ever.',
    metaDescription: 'Client Intelligence for Paid Ads Agencies. Per-client isolated Workspaces for ad strategy, creative briefs, and audience data. Serve more accounts without data risk.',
    scenarios: [
      {
        title: 'Managing fifteen ad accounts without strategy contamination',
        story: 'A paid ads agency runs fifteen active accounts across Google, Meta, and TikTok. Each client\'s creative strategy, audience learnings, and campaign history are in a fully isolated Workspace. Account managers switch between clients instantly with full context, drawn from Facts stored per client.',
        result: 'Fifteen accounts. Zero cross-account data risk.',
      },
      {
        title: 'Deploying a paid media framework to every new account',
        story: 'The agency\'s paid media diagnostic and scaling playbook is encoded in the Account Brain using Brain Dump mode. Every new client Workspace inherits it. The AI applies the framework to their specific offer, budget, and market from day one.',
        result: 'New account onboarding reduced from 3 weeks to 3 days.',
      },
      {
        title: 'Generating weekly performance briefs automatically',
        story: 'Before each client review call, the AI generates a performance brief from the client\'s isolated Workspace: last week\'s results, creative hypotheses, audience insights, and scaling recommendations based on the agency\'s framework encoded in the Brain.',
        result: 'Account managers arrive to every call prepared, not building the deck.',
      },
    ],
    forYou: [
      'You manage paid media for 3+ clients simultaneously',
      'You have a proprietary paid media methodology or campaign framework',
      'Keeping each client\'s creative strategy and audience data completely isolated is critical',
      'You want to scale your account capacity without adding account managers',
    ],
    notForYou: [
      'You manage paid ads for your own business only',
      'You have no systematic methodology and each account is run differently',
      'You need an ad management platform, bidding tool, or creative production tool',
    ],
    faqs: [
      {
        question: 'What AI tools do paid ads agencies use?',
        answer: 'Client Intelligence is built for paid ads agencies managing multiple client accounts. It centralizes your paid media methodology in the Brain and gives every client a fully isolated Workspace. Creative strategies, audience learnings, and campaign history never bleed between accounts.',
      },
      {
        question: 'How do paid ads agencies keep client ad data separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Creative briefs, audience research, campaign history, and bidding strategies are stored completely separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can a paid ads agency scale without hiring more account managers?',
        answer: 'Yes. Client Intelligence handles diagnostic, brief generation, and performance analysis for each client automatically. Most paid ads agencies using the platform increase their account capacity significantly before additional hires become necessary.',
      },
      {
        question: 'What is the best AI for agencies running multiple Google and Meta ad accounts?',
        answer: 'Client Intelligence is the only platform with true per-client isolation for multi-account agencies. Unlike generic AI tools, each client\'s ad strategy, creative learning, and audience insights are kept completely separate while your methodology is applied consistently via the Brain.',
      },
    ],
  },
  {
    slug: 'seo-agencies',
    label: 'SEO Agencies',
    pain: 'applying your SEO process consistently while keeping client strategies distinct',
    outcome: 'Your SEO methodology applied automatically to every client',
    metaDescription: 'Client Intelligence for SEO Agencies. Apply your SEO process to every client through isolated Workspaces. No strategy bleed between accounts, ever.',
    scenarios: [
      {
        title: 'Running SEO campaigns for twenty clients with one system',
        story: 'An SEO agency manages twenty active client campaigns. Each client\'s keyword strategy, content calendar, link profile, and technical audit history are in a fully isolated Workspace. The agency\'s SEO methodology, encoded in the Account Brain, powers every account. The context is always client-specific.',
        result: 'Twenty clients. One SEO Brain. Zero cross-account contamination.',
      },
      {
        title: 'Onboarding a new SEO client with an automated diagnostic',
        story: 'The agency\'s SEO diagnostic framework is encoded in the Brain using Brain Dump mode. When a new client uploads their site data and competitor list, the AI runs the diagnostic and returns a prioritized opportunity map using the agency\'s specific methodology in the client\'s Workspace.',
        result: 'SEO diagnostic delivered in hours instead of a week.',
      },
      {
        title: 'Keeping competing local clients completely separate',
        story: 'Two clients compete for the same keywords in the same market. Their strategies, content angles, and link-building targets are in completely isolated Workspaces. The agency serves both without any ethical or data risk.',
        result: 'Competing clients served simultaneously, with complete strategy isolation.',
      },
    ],
    forYou: [
      'You run SEO campaigns for 3+ clients simultaneously',
      'You have a proprietary SEO audit, content, or link-building methodology',
      'Keeping each client\'s keyword strategy and competitive data isolated is critical',
      'You want to scale your agency\'s client capacity without adding more SEO strategists',
    ],
    notForYou: [
      'You do SEO for your own business only',
      'You have no systematic SEO methodology and each campaign is built differently',
      'You need an SEO platform, rank tracker, or keyword research tool',
    ],
    faqs: [
      {
        question: 'What AI tools do SEO agencies use?',
        answer: 'Client Intelligence is built for SEO agencies managing multiple client campaigns. It centralizes your SEO methodology in the Brain and gives every client a fully isolated Workspace. Keyword strategies, content plans, and competitive data never bleed between accounts.',
      },
      {
        question: 'How do SEO agencies keep client strategies separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Keyword targets, content strategy, link-building plans, and technical audit history are stored completely separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can an SEO agency use AI to serve competing clients safely?',
        answer: 'Yes. Client Intelligence uses architecture-level isolation, not just separate chat threads. Competing clients\' strategies and data never interact. The same SEO methodology powers both accounts via the Brain, but outputs are always client-specific.',
      },
      {
        question: 'How do SEO agencies scale without proportionally growing their team?',
        answer: 'Client Intelligence handles diagnostic, content brief generation, and between-session context for every client automatically via isolated Workspaces. Strategists spend time on high-value work, not rebuilding context or running repetitive audits from scratch.',
      },
    ],
  },
  {
    slug: 'content-strategy-consultants',
    label: 'Content Strategy Consultants',
    pain: 'delivering strategic content guidance to multiple clients without cross-contamination',
    outcome: 'Per-client content strategy Workspace with your frameworks built in',
    metaDescription: 'Client Intelligence for Content Strategy Consultants. Apply your content frameworks to every client through isolated Workspaces. Serve more clients without strategy bleed.',
    scenarios: [
      {
        title: 'Managing eight content strategy retainers simultaneously',
        story: 'A content strategy consultant manages eight active retainers. Each client\'s content pillars, audience personas, editorial calendar, and strategic decisions are in a fully isolated Workspace with Facts auto-extracted from every session. Before each client call, the AI surfaces the current content health and open priorities.',
        result: 'Eight retainers. Complete strategic clarity for each.',
      },
      {
        title: 'Applying a content methodology to every new client',
        story: 'The consultant\'s proprietary content strategy framework, from audience mapping to distribution strategy, is encoded in the Account Brain using Brain Dump mode. Every new client Workspace inherits it and applies it to their specific industry, audience, and goals.',
        result: 'New client content strategy delivered in days, not weeks.',
      },
      {
        title: 'Generating editorial briefs from the encoded framework',
        story: 'Using the client\'s isolated Workspace, their brand voice, audience data, and content pillars, the AI generates editorial briefs for each content piece, structured against the consultant\'s framework from the Brain.',
        result: 'Brief generation time reduced by 70% per client.',
      },
    ],
    forYou: [
      'You develop content strategy for 2+ clients simultaneously',
      'You have a proprietary content framework or editorial methodology',
      'Keeping each client\'s strategy, voice, and audience data completely isolated matters to you',
      'You want to grow your retainer base without growing your team',
    ],
    notForYou: [
      'You are an in-house content strategist at one company',
      'You have no systematic methodology and each client gets a completely different approach',
      'You need a content management system, scheduling tool, or SEO platform',
    ],
    faqs: [
      {
        question: 'What AI tools do content strategy consultants use?',
        answer: 'Client Intelligence is purpose-built for content strategy consultants managing multiple retainer clients. It centralizes your content methodology in the Brain and applies it to every client through isolated Workspaces. Brand voice, editorial strategy, and audience data never bleed between accounts.',
      },
      {
        question: 'How do content strategists keep client work separate in AI?',
        answer: 'Every client in Client Intelligence has a fully isolated Workspace. Brand voice, content pillars, audience personas, and editorial decisions are stored completely separately and never interact with any other client\'s Workspace.',
      },
      {
        question: 'Can I encode my content strategy framework into an AI system?',
        answer: 'Yes. Client Intelligence is designed for this. Encode your content methodology, from audience mapping to distribution, using Brain Dump mode. The AI applies it to every client engagement automatically through their isolated Workspace.',
      },
      {
        question: 'How do content strategy consultants scale without losing strategic quality?',
        answer: 'Client Intelligence applies your methodology to every client engagement automatically via the Account Brain, handling brief generation, editorial planning, and between-session context in isolated Workspaces. You scale the quality of your strategic output without scaling your personal time.',
      },
    ],
  },
  {
    slug: 'leadership-coaches',
    label: 'Leadership Coaches',
    pain: 'maintaining confidentiality and delivering tailored coaching at scale',
    outcome: 'Confidential, isolated client memory for every coaching engagement',
    metaDescription: 'Client Intelligence for Leadership Coaches. Per-client isolated Workspaces and complete confidentiality for every engagement. Your leadership framework applied consistently at scale.',
    scenarios: [
      {
        title: 'Coaching twenty leaders with complete individual focus',
        story: 'A leadership coach with twenty active clients uses Client Intelligence to maintain each leader\'s development history, 360 feedback themes, and coaching goals in a fully isolated Workspace. Facts are auto-extracted from session transcripts. Before each session, the AI surfaces a brief with current development priorities and open coaching threads.',
        result: 'Twenty leaders coached individually, with no context confusion.',
      },
      {
        title: 'Applying a leadership development model to every client',
        story: 'The coach\'s proprietary leadership development model, from self-awareness to team effectiveness, is encoded in the Account Brain using Brain Dump mode. Every new client Workspace inherits it, applying the model to the leader\'s specific context, industry, and development stage.',
        result: 'Consistent leadership development quality across every engagement.',
      },
      {
        title: 'Maintaining absolute client confidentiality',
        story: 'Two leaders from the same company are both in coaching. Client Intelligence keeps their conversations, development goals, and 360 data in completely isolated Workspaces. Neither can ever surface in the other\'s session. This is structural isolation, not a setting.',
        result: 'Simultaneous coaching within one organization, with zero risk.',
      },
    ],
    forYou: [
      'You coach leaders or executives and confidentiality is a foundational requirement',
      'You have a proprietary leadership framework or development model',
      'You manage 5+ coaching relationships and want each to feel fully individualized',
      'You want to scale your practice without losing the depth that makes your coaching effective',
    ],
    notForYou: [
      'You run group leadership training programs, not individual coaching',
      'You have no proprietary framework and work from generic coaching models',
      'You need a video conferencing or session scheduling tool',
    ],
    faqs: [
      {
        question: 'What AI tools do leadership coaches use?',
        answer: 'Client Intelligence is purpose-built for leadership coaches managing multiple confidential client relationships. It gives every leader their own isolated Workspace. Development history, session notes, and 360 data are never accessible from another client\'s Workspace.',
      },
      {
        question: 'How do leadership coaches maintain confidentiality when using AI?',
        answer: 'Client Intelligence creates architecture-level isolation per client. One leader\'s data, goals, and coaching context cannot be accessed or surfaced in any other client\'s Workspace. Not just a setting, but a structural guarantee.',
      },
      {
        question: 'Can I apply my leadership development model consistently across all clients with AI?',
        answer: 'Yes. Encode your leadership framework in Client Intelligence using Brain Dump mode and it applies to every client engagement, surfacing relevant development questions, tracking progress against your model, and maintaining context between sessions via Facts.',
      },
      {
        question: 'How do leadership coaches scale without sacrificing coaching depth?',
        answer: 'Per-client memory is the key. Client Intelligence maintains a complete record of every leader\'s development journey in their isolated Workspace via Facts. The AI surfaces what matters before every session, so depth does not require additional preparation time.',
      },
    ],
  },
  {
    slug: 'business-coaches-with-frameworks',
    label: 'Business Coaches with Frameworks',
    pain: 'teaching your framework and applying it uniquely to each client situation',
    outcome: 'Your coaching framework, intelligently applied to every client\'s unique context',
    metaDescription: 'Client Intelligence for Business Coaches with Frameworks. Encode your coaching methodology in the Brain and apply it intelligently to every client\'s unique situation through isolated Workspaces.',
    scenarios: [
      {
        title: 'Applying a business framework to fifteen unique client situations',
        story: 'A business coach with a proprietary 7-step growth framework coaches fifteen clients. Each client\'s Workspace applies the same framework to their specific business model, revenue stage, team constraints, and market. The AI maps framework steps from the Brain to each client\'s actual reality.',
        result: 'One framework, fifteen unique applications. No cookie-cutter outputs.',
      },
      {
        title: 'Encoding a complex framework in a single session',
        story: 'The coach\'s business growth methodology, built over ten years, is captured in Brain Dump mode in one session. The AI structures it into a working Account Brain, ready to apply intelligently to every new client engagement through their isolated Workspace.',
        result: 'Ten years of IP encoded and deployed in one day.',
      },
      {
        title: 'Preparing for client sessions with AI-generated context briefs',
        story: 'Before each coaching session, the AI generates a context brief from the client\'s isolated Workspace: current framework stage from the Brain, recent wins and blockers captured as Facts, open coaching threads, and recommended focus areas for this session.',
        result: 'Every coaching session starts with a clear, client-specific focus.',
      },
    ],
    forYou: [
      'You have a proprietary business coaching framework or methodology',
      'You apply your framework to multiple clients simultaneously',
      'You want the framework consistently applied to each client\'s unique situation, not generically',
      'You want to scale your coaching practice without losing what makes your framework effective',
    ],
    notForYou: [
      'You deliver generic business advice without a proprietary system',
      'You only work with one client at a time with no plans to scale',
      'You need a course platform, group program tool, or LMS',
    ],
    faqs: [
      {
        question: 'What is the best AI for business coaches with proprietary frameworks?',
        answer: 'Client Intelligence is designed specifically for coaches whose value is their framework. It encodes your methodology in the Brain and applies it intelligently to every client\'s unique situation through isolated Workspaces. Not a generic AI assistant, but a system that runs your framework.',
      },
      {
        question: 'How do I make sure my coaching framework is applied consistently across clients?',
        answer: 'Encode your framework in Client Intelligence once using Brain Dump mode. Every client Workspace then draws from that Brain and applies it to their specific context. Consistent methodology, individualized application, automatically.',
      },
      {
        question: 'Can AI apply a complex coaching framework to different client situations?',
        answer: 'Yes. Client Intelligence is built for this. The encoded Brain becomes the operating foundation for each client Workspace, mapping framework stages to the client\'s actual business model, constraints, and goals.',
      },
      {
        question: 'How do business coaches with frameworks scale their practice with AI?',
        answer: 'Client Intelligence removes you from the repetitive application work. The AI applies your framework to each client engagement automatically from the Brain, maintains context between sessions via Facts, and surfaces what matters before every call. You scale without rebuilding.',
      },
    ],
  },
  {
    slug: 'online-service-business-owners',
    label: 'Online Service Business Owners',
    pain: 'scaling personalized service delivery past your own time limits',
    outcome: 'Serve more clients with the same quality, powered by your own IP',
    metaDescription: 'Client Intelligence for Online Service Business Owners. Scale your personalized service delivery beyond your own time limits using AI trained on your methodology.',
    scenarios: [
      {
        title: 'Serving 15 clients with a one-person operation',
        story: 'An online service business owner runs 15 active client engagements completely solo. Client Intelligence maintains full context for every client in isolated Workspaces via Facts and applies the owner\'s service methodology from the Account Brain automatically, without the owner rebuilding context for every interaction.',
        result: '15 clients. One person. Full service quality.',
      },
      {
        title: 'Breaking through the revenue ceiling without hiring',
        story: 'The owner\'s revenue has plateaued because they are out of hours. By encoding their service methodology in Client Intelligence using Brain Dump mode, the AI handles the repetitive delivery work, diagnostics, briefs, updates, freeing the owner for high-value client interaction.',
        result: 'Revenue ceiling broken without a single new hire.',
      },
      {
        title: 'Delivering a premium service experience at scale',
        story: 'Every client receives a personalized experience because Client Intelligence maintains their individual memory, context, and goals in an isolated Workspace via Facts. The owner\'s methodology is applied to each client\'s unique situation. It never feels like a template.',
        result: 'Premium service experience delivered to every client, at scale.',
      },
    ],
    forYou: [
      'You run an online service business and are hitting a time-based revenue ceiling',
      'You have a proprietary service methodology or delivery process',
      'You want to serve significantly more clients without the complexity of a team',
      'You want each client to receive personalized, high-quality service, not templated delivery',
    ],
    notForYou: [
      'You sell digital products or courses, not services',
      'You have no systematic methodology and each client gets a different approach',
      'You need a client portal, invoicing, or project management tool',
    ],
    faqs: [
      {
        question: 'How do online service business owners scale beyond their time limits?',
        answer: 'Client Intelligence encodes your service methodology in the Brain and applies it to every client through isolated Workspaces. Diagnostic work, context maintenance via Facts, and deliverable prep are handled by the AI. You focus on the high-value interactions that require your direct judgment.',
      },
      {
        question: 'What AI tools do online service businesses use to scale delivery?',
        answer: 'Client Intelligence is purpose-built for service businesses that need to scale personalized delivery. It gives every client their own isolated Workspace with full memory, and applies your methodology consistently via the Account Brain, without you being the bottleneck.',
      },
      {
        question: 'Can I deliver personalized service at scale using AI?',
        answer: 'Yes. Per-client isolation means each client\'s memory, context, and goals are stored individually as Facts. The AI applies your methodology to their unique situation, making scale feel personal, not templated.',
      },
      {
        question: 'How do I stop being the bottleneck in my online service business?',
        answer: 'The bottleneck is your expertise being delivered manually every time. Client Intelligence automates the application of your expertise by encoding your methodology in the Brain and applying it to every client engagement through isolated Workspaces. Your capacity is no longer limited by your hours.',
      },
    ],
  },
]
