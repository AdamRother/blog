export interface IndustryPage {
  slug: string
  label: string
  h1: string
  metaDescription: string
  pain: string
  scenarios: { title: string; story: string; result: string }[]
  forYou: string[]
  notForYou: string[]
  faqs: { question: string; answer: string }[]
}

export const industries: IndustryPage[] = [
  {
    slug: 'marketing-agencies',
    label: 'Marketing Agencies',
    h1: 'Client Intelligence for Marketing Agencies',
    metaDescription: 'Marketing agencies with multiple clients need isolated Workspaces, consistent methodology, and scalable delivery. Client Intelligence is built for multi-client marketing work.',
    pain: 'Marketing agencies face a specific structural problem. Clients demand brand-specific work. Every account has different guidelines, audiences, and competitive context. Generic AI tools produce generic outputs. And when client data is not isolated, brand voice, campaign strategy, and confidential competitive intelligence can mix across accounts. The risk grows with every new client you take on.',
    scenarios: [
      {
        title: 'The Brand Voice Consistency Problem',
        story: 'A 12-client marketing agency struggled with brand voice consistency. Different writers applied different interpretations of each client\'s guidelines. First drafts often required full rewrites. Client complaints were increasing and retainer renewals were at risk.',
        result: 'Each client\'s brand guidelines were loaded into their isolated Workspace. The agency\'s content methodology was encoded in the Account Brain. Writers produced on-brand first drafts consistently. Client complaints stopped within the first month.'
      },
      {
        title: 'The Capacity Ceiling',
        story: 'A boutique marketing agency was capped at eight clients. Every campaign required senior strategist time from the start. Taking on a ninth client would have meant degrading quality on the existing eight. They were turning away qualified business.',
        result: 'After encoding their campaign strategy framework in Client Intelligence, junior team members ran initial campaign development within each client Workspace. Senior strategists reviewed rather than built. They added four new clients in three months without adding headcount.'
      },
      {
        title: 'The Competing Clients Data Risk',
        story: 'Two competing brands were clients of the same agency. A team member accidentally included competitive intelligence from one client in a briefing for the other. The fallout cost the agency both accounts.',
        result: 'After moving to Client Intelligence with isolated Workspaces, competitive intelligence from Client A cannot appear in Client B\'s Workspace. The structural separation is part of how the product works. The agency now markets this as a feature when pitching clients in the same industry.'
      },
    ],
    forYou: [
      'You serve multiple clients across different brands and need isolated, consistent delivery per account',
      'Your agency has a defined campaign or content methodology worth encoding in the Account Brain',
      'You want to scale client capacity without proportionally increasing headcount',
      'You need guaranteed data isolation between clients, especially competing brands',
    ],
    notForYou: [
      'You work exclusively with one client or brand on a long-term retainer',
      'Your work is purely creative production with no repeatable strategy methodology',
      'Data isolation between clients is not a concern in your current client mix',
    ],
    faqs: [
      {
        question: 'How does Client Intelligence handle brand-specific guidelines per client?',
        answer: 'Each client Workspace holds their brand guidelines, tone of voice documents, and campaign history. When Intelligence works within that Workspace, it applies that client\'s guidelines automatically. Not generic brand best practices. The client\'s specific standards.'
      },
      {
        question: 'Can my entire team access client Workspaces?',
        answer: 'Yes. All account users can access Workspaces assigned to them. Isolation is between clients, not between team members within your account. Your whole team works from the same client context.'
      },
      {
        question: 'How do I handle clients who are direct competitors?',
        answer: 'Structural data isolation means competitive intelligence, campaign strategy, and brand information for each client stays within their Workspace. It cannot cross to a competitor\'s Workspace. The separation is architectural, not procedural.'
      },
      {
        question: 'Is this useful for performance marketing agencies specifically?',
        answer: 'Yes. Campaign frameworks, optimization playbooks, and testing methodologies live in the Account Brain. Client-specific performance data, creative history, and campaign context live in each client Workspace. Intelligence applies your frameworks to each client\'s specific numbers.'
      },
    ],
  },
  {
    slug: 'consulting-firms',
    label: 'Consulting Firms',
    h1: 'Client Intelligence for Consulting Firms',
    metaDescription: 'Consulting firms need consistent methodology delivery, institutional knowledge retention, and scalable client work. Client Intelligence provides the AI infrastructure for multi-client consulting practices.',
    pain: 'Consulting firms are built on methodology. But methodology only creates value if it is applied consistently. When it lives in individual consultants\' heads rather than organizational systems, quality varies by who leads the engagement. Knowledge walks out with departing employees. New hires take twelve months or longer to perform at standard. The intellectual capital that defines the firm\'s reputation is also its most fragile asset.',
    scenarios: [
      {
        title: 'The Methodology Inconsistency Problem',
        story: 'A 15-person consulting firm noticed their deliverables varied significantly depending on which consultant led the engagement. Client feedback was inconsistent. Two clients referenced the quality gap directly. The firm\'s reputation for consistent methodology was not reflected in actual delivery.',
        result: 'After encoding their core methodology in the Account Brain, all 15 consultants produced from the same framework foundation. Deliverable consistency increased across the board. Client satisfaction scores improved within the first quarter.'
      },
      {
        title: 'The Senior Partner Departure',
        story: 'When a founding partner retired, 30% of the firm\'s practical methodology left with her. The remaining partners spent 18 months reconstructing it from deliverables and memory. Client engagements in her practice area suffered during the transition.',
        result: 'A firm that learned from this proactively encoded all senior partner knowledge in the Account Brain via Brain Dump mode. When a second partner later retired, knowledge transfer took three weeks. Not 18 months.'
      },
      {
        title: 'The Junior Consultant Ramp Time',
        story: 'New consultants at a mid-sized strategy firm required 9 to 12 months of supervised work before leading client engagements independently. The cost of this ramp was significant. Senior time spent on supervision was time not spent on business development.',
        result: 'With the firm\'s methodology in Client Intelligence, new consultants produced on-framework deliverables within their first month. Ramp time to independent engagement leadership dropped to 10 weeks.'
      },
    ],
    forYou: [
      'You have a defined consulting methodology that should be applied consistently across all engagements',
      'You serve multiple clients and need per-client context isolation to protect confidentiality',
      'You want to preserve institutional knowledge even as team members change',
      'You want junior consultants delivering at senior-level methodology within weeks, not months',
    ],
    notForYou: [
      'Your firm deliberately operates with no shared methodology and all engagements are fully bespoke',
      'You serve one long-term client and multi-client isolation is not relevant',
      'You prefer methodology to live with individual consultants rather than organizational systems',
    ],
    faqs: [
      {
        question: 'How do we handle client confidentiality across engagements?',
        answer: 'Each client gets an isolated Workspace. Data from one engagement cannot appear in another. The separation is structural. This satisfies the information barriers required by most professional services NDAs without relying on procedural controls.'
      },
      {
        question: 'Can we build firm-wide methodology while preserving practice area specialization?',
        answer: 'Yes. Your Account Brain holds both firm-wide methodology and practice-area-specific frameworks. Intelligence applies the relevant layer based on the engagement type in each client Workspace.'
      },
      {
        question: 'How do we keep the Account Brain from becoming outdated?',
        answer: 'Assign ownership of Account Brain maintenance to a practice lead or knowledge management role. Quarterly reviews to update, refine, and archive outdated content keep it accurate. Treat it as a living system, not a one-time setup.'
      },
      {
        question: 'Can Client Intelligence handle complex, multi-team engagements?',
        answer: 'Yes. Large engagement Workspaces hold the full project context, methodology, documents, and work product for all teams involved in the engagement. Everything unified in one isolated client environment.'
      },
    ],
  },
  {
    slug: 'coaching-businesses',
    label: 'Coaching Businesses',
    h1: 'Client Intelligence for Coaching Businesses',
    metaDescription: 'Coaches serving multiple clients need per-client memory, consistent framework application, and scalable delivery. Client Intelligence gives coaching businesses the AI infrastructure for multi-client work.',
    pain: 'Coaching is personal work. Each client deserves your full attention and accurate memory of their journey. But the mechanics of coaching, session preparation, reviewing notes, tracking progress, following up on commitments, consume enormous time that could go into the coaching itself. When you serve 15 or more clients, maintaining that depth of attention manually becomes impossible.',
    scenarios: [
      {
        title: 'The Memory Failure That Damaged Trust',
        story: 'A business coach forgot a major breakthrough her client had shared in session three. The client noticed. The trust eroded. It was a relationship she never fully recovered. The failure was not inattention. It was the impossibility of holding 15 full client histories in her head simultaneously.',
        result: 'After logging all sessions in client Workspaces, the coach reviews a brief Intelligence summary before each session. She references the client\'s full journey accurately in every conversation. The failure mode no longer exists.'
      },
      {
        title: 'The Group Program Scale',
        story: 'A leadership coach launched a group program with 25 participants. Maintaining individual context for each person while running group sessions and tracking individual progress was not possible manually. Individual attention was the first thing to go.',
        result: 'Each participant got their own Workspace. The coach maintains individual context without the overhead. She now runs two simultaneous cohorts, 50 individual clients, with the same depth of attention she previously gave to 12.'
      },
      {
        title: 'The Preparation Time Problem',
        story: 'A high-performance coach spent 45 minutes preparing for each client session. Reviewing past notes. Identifying patterns. Designing the session structure. With 18 clients, that was over 13 hours of prep per week. The preparation was consuming the practice.',
        result: 'After logging all sessions in Client Intelligence, pre-session prep dropped to 10 minutes. Intelligence surfaces what matters most about each client. The coach reclaimed 10 hours per week without losing any session quality.'
      },
    ],
    forYou: [
      'You serve multiple coaching clients simultaneously and want to maintain depth with each one',
      'Your coaching methodology is defined enough to encode in the Account Brain and apply consistently',
      'You want to scale your coaching practice without burning out on preparation and administration',
      'You need per-client memory that grows throughout the coaching relationship',
    ],
    notForYou: [
      'You serve one or two clients and manual context management is practical at that volume',
      'Your coaching is purely intuitive with no repeatable framework to encode',
      'You prefer not to use AI in any part of your coaching practice',
    ],
    faqs: [
      {
        question: 'Can I use Client Intelligence for executive coaching?',
        answer: 'Yes. The platform handles any coaching methodology. Each client\'s Workspace holds their specific goals, history, commitments, and progress. All completely separate from other clients.'
      },
      {
        question: 'How do I handle session note privacy for coaching clients?',
        answer: 'You control what goes into each Workspace. For sensitive clients, you can limit uploads to goal tracking and framework application without detailed session notes. The Workspace is your internal tool. Clients do not access it.'
      },
      {
        question: 'Is this appropriate for trauma-informed or mental health coaching?',
        answer: 'Client Intelligence is designed for business and professional coaching contexts. For mental health-adjacent coaching, consult your professional guidelines about AI tools for clinical work before using any AI platform.'
      },
      {
        question: 'Can I track homework and commitments per client?',
        answer: 'Yes. Log homework assigned, commitments made, and completion status in each client Workspace. Intelligence surfaces outstanding commitments before each session so nothing falls through the cracks.'
      },
    ],
  },
  {
    slug: 'sales-consulting',
    label: 'Sales Consulting',
    h1: 'Client Intelligence for Sales Consulting Practices',
    metaDescription: 'Sales consultants need per-client context, consistent frameworks, and scalable delivery across their book of business. Client Intelligence provides the infrastructure for multi-client sales consulting.',
    pain: 'Sales consulting requires deep client-specific context. Every client has a different sales process, team, competitive environment, and pipeline situation. Generic advice fails quickly in sales. Buyers notice when the recommendations do not account for their specific reality. But delivering genuinely contextual advice to ten clients simultaneously, while maintaining the depth that makes sales consulting worth paying for, requires infrastructure most consultants do not have.',
    scenarios: [
      {
        title: 'The Context Depth Problem at Scale',
        story: 'A sales consultant serving eight clients found her advice becoming more generic as she scaled. Each client felt she did not understand their sales situation deeply enough. Two did not renew. The problem was not the methodology. It was the inability to maintain deep context for eight clients simultaneously.',
        result: 'After encoding her sales frameworks in the Account Brain and building detailed context for each client in isolated Workspaces, her advice became more contextual, not less. No renewals were lost in the following year.'
      },
      {
        title: 'The Playbook Inconsistency',
        story: 'A sales training firm had a proven playbook. When delivered by different consultants, results varied dramatically. Some clients succeeded. Others did not. The methodology was sound. The delivery was inconsistent.',
        result: 'After encoding the playbook in the Account Brain and using it as the foundation for every engagement, outcomes became more consistent. The firm could now build reliable case study data and predict client results with more confidence.'
      },
      {
        title: 'The Win/Loss Analysis Bottleneck',
        story: 'A sales consultant analyzed win/loss patterns for clients. Each analysis was thorough but took two days per client. At six clients, twelve days per quarter went to analysis alone. The bottleneck was preventing her from taking on new clients.',
        result: 'After building a win/loss analysis framework in the Account Brain and applying it within each client Workspace, analysis time dropped to half a day per client. Quality improved because the framework ran completely every time.'
      },
    ],
    forYou: [
      'You serve multiple sales consulting clients with distinct sales processes, teams, and competitive contexts',
      'You have a sales methodology or playbook worth encoding in the Account Brain',
      'You want to scale your client base without losing the contextual depth that clients pay for',
      'You need per-client data isolation for companies that may be competitors in the same market',
    ],
    notForYou: [
      'You serve one company exclusively on a retained embedded basis',
      'Your sales consulting is entirely intuitive with no repeatable framework',
      'Your clients are in unrelated industries with no competitive overlap',
    ],
    faqs: [
      {
        question: 'Can I encode different sales methodologies for different client types?',
        answer: 'Yes. Your Account Brain holds multiple sales frameworks: MEDDIC, Challenger, Sandler, or your proprietary playbook. Direct Intelligence to apply the relevant methodology for each client engagement in their Workspace.'
      },
      {
        question: 'How do I use Client Intelligence for client-specific pipeline analysis?',
        answer: 'Export pipeline snapshots or CRM data and upload to the client Workspace. Intelligence analyzes pipeline health, opportunity patterns, and sales performance against your frameworks within that client\'s isolated context.'
      },
      {
        question: 'Can I serve competing companies as sales consulting clients?',
        answer: 'Yes. Isolated Workspaces ensure competitive intelligence, sales strategies, and win/loss data for each company never crosses to a competitor\'s Workspace. Many sales consultants use this to serve competing companies without NDA risk.'
      },
      {
        question: 'Is this useful for building sales training content per client?',
        answer: 'Yes. Within each client Workspace, develop training content, role-play scenarios, and coaching frameworks tailored to their specific sales context. Grounded in your methodology and their data.'
      },
    ],
  },
  {
    slug: 'revenue-operations',
    label: 'Revenue Operations',
    h1: 'Client Intelligence for Revenue Operations Consultants',
    metaDescription: 'RevOps consultants manage complex multi-client environments with different tech stacks and data models. Client Intelligence provides per-client isolation and framework consistency for revenue operations practices.',
    pain: 'Revenue operations consulting is among the most context-dependent work in professional services. Each client has a different CRM, different team structure, different sales process, and different set of data problems. Keeping all of this context accurate and separate across multiple clients, while applying consistent RevOps frameworks, is cognitively demanding and prone to error. One missed detail can produce a bad recommendation that damages a CRM configuration.',
    scenarios: [
      {
        title: 'The Multi-CRM Complexity',
        story: 'A RevOps consultant served eight clients across HubSpot, Salesforce, and Pipedrive. Each system had different data models, configurations, and reporting logic. Context mixing between clients was a constant risk. Working from the wrong CRM logic for a client was a real and costly failure mode.',
        result: 'Each client\'s CRM documentation, process maps, and data models live in their isolated Workspace. The consultant switches between client contexts cleanly. Applying Client A\'s CRM logic to Client B\'s implementation is no longer possible by accident.'
      },
      {
        title: 'The Audit Framework Application',
        story: 'A RevOps consultant had a 40-point audit framework applied to every new client. Running each audit manually took three days. At four new clients per quarter, audit season consumed most of her capacity. She could not take on more clients because onboarding each one was too time-intensive.',
        result: 'After building her audit framework in the Account Brain, running the initial audit in each client Workspace took half a day. She reviewed and refined rather than building from scratch. New client onboarding became manageable.'
      },
      {
        title: 'The Conflicting Recommendations Problem',
        story: 'Two consultants at a RevOps firm served the same clients differently. Their individual interpretations of the firm\'s methodology produced conflicting recommendations. Clients received inconsistent guidance and questioned the firm\'s process.',
        result: 'With the firm\'s RevOps methodology encoded in the Account Brain, all consultants work from the same analytical foundation. Recommendations align with a consistent framework. Conflicting guidance to the same client is no longer possible.'
      },
    ],
    forYou: [
      'You serve multiple RevOps clients with distinct tech stacks, data environments, and process configurations',
      'You have a RevOps audit or optimization methodology worth encoding in the Account Brain',
      'You want to scale your client base without the cognitive overhead of managing complex contexts manually',
      'You need guaranteed data isolation between clients who may operate in competitive markets',
    ],
    notForYou: [
      'You work exclusively with one company on a long-term embedded basis',
      'Your RevOps work is purely technical implementation with no advisory or analytical component',
      'All your clients are in completely different verticals with no competitive overlap',
    ],
    faqs: [
      {
        question: 'Can I use Client Intelligence alongside my clients\' CRM and analytics tools?',
        answer: 'Yes. Export data from your clients\' CRM and analytics platforms and upload to their Workspace. Intelligence analyzes the data within that client\'s isolated context against your RevOps frameworks. Each client\'s data stays in their Workspace.'
      },
      {
        question: 'How do I handle clients who compete in the same market?',
        answer: 'Isolated Workspaces provide structural data separation. Revenue data, pipeline analytics, and process documentation for each company stays within their Workspace. It cannot cross to a competitor\'s environment. The separation is architectural.'
      },
      {
        question: 'Can I build reporting frameworks within client Workspaces?',
        answer: 'Yes. Build reporting structures, dashboard specifications, and analysis templates within each client Workspace. Export or share these as client-facing deliverables.'
      },
      {
        question: 'How does Client Intelligence handle the documentation-heavy nature of RevOps consulting?',
        answer: 'Upload all process documentation, CRM configuration specs, and data dictionaries to the client Workspace. Intelligence references this documentation when generating analysis and recommendations specific to that client\'s environment.'
      },
    ],
  },
  {
    slug: 'growth-agencies',
    label: 'Growth Agencies',
    h1: 'Client Intelligence for Growth Agencies',
    metaDescription: 'Growth agencies need frameworks that apply consistently across clients, isolated client contexts, and scalable delivery. Client Intelligence provides the infrastructure for multi-client growth work.',
    pain: 'Growth agencies live on repeatable, proven frameworks. But every client demands work that feels specific to their business. The tension between systematic growth methodology and client-specific application is where most growth agencies lose both efficiency and quality. Apply frameworks too generically and results become unpredictable. Customize everything manually and you cannot scale.',
    scenarios: [
      {
        title: 'The Growth Framework Drift',
        story: 'A growth agency had developed a proven 90-day growth sprint framework. As they scaled to 12 clients, each account manager adapted the framework differently based on their own judgment. Results became inconsistent. The agency could no longer confidently predict client outcomes.',
        result: 'After encoding the 90-day growth sprint in the Account Brain, all account managers ran the same framework from the same starting point. Results became more predictable. Case study data strengthened because outcomes were consistent enough to compare.'
      },
      {
        title: 'The Client Context Depth at Scale',
        story: 'A growth agency\'s biggest differentiator was deep client understanding. Account managers knew each client\'s business, market, and past performance in detail. As they scaled, that depth suffered. Clients noticed the shift from specific to generic.',
        result: 'Per-client Workspaces hold each client\'s full business context, growth history, and experiment log. Intelligence surfaces client-specific context for every growth decision. Depth improved as they scaled, not declined.'
      },
      {
        title: 'The Competing Client Incident',
        story: 'Two competing SaaS companies were both growth agency clients. A junior team member referenced competitive insights from one company in a meeting with the other. The client learned about it. The agency lost the account and the trust took years to rebuild.',
        result: 'With isolated Workspaces, competitive intelligence from each client stays within their environment. Cross-client contamination is structural, not just procedural. The agency now serves five pairs of competitors without incident.'
      },
    ],
    forYou: [
      'You have proven growth frameworks you want applied consistently across all client engagements',
      'You serve multiple clients and need both deep per-client context and consistent methodology delivery',
      'You want to scale your agency without the quality dilution that usually accompanies growth',
      'You serve clients in competitive industries who need guaranteed data isolation between accounts',
    ],
    notForYou: [
      'Your growth work is entirely bespoke with no repeatable methodology to encode',
      'You serve only one or two clients on long-term retainers',
      'Cross-client data isolation is not a concern in your current client mix',
    ],
    faqs: [
      {
        question: 'Can I log growth experiments and results per client?',
        answer: 'Yes. Log experiments, outcomes, and learnings in each client Workspace. Intelligence references this history when designing new experiments. Each new recommendation builds on the client\'s accumulated results rather than starting from generic best practices.'
      },
      {
        question: 'How does this handle multi-channel growth strategies?',
        answer: 'Channel-specific frameworks, performance data, and optimization playbooks are stored in each client Workspace. Intelligence applies your growth methodology to each client\'s specific channel mix and performance history.'
      },
      {
        question: 'Is this useful for growth analytics work?',
        answer: 'Yes. Upload analytics exports, funnel data, and conversion reports to each client Workspace. Intelligence analyzes the data against your growth frameworks to generate insight specific to that client\'s situation.'
      },
      {
        question: 'Can I run the same growth experiment across multiple clients simultaneously?',
        answer: 'Yes, and each client\'s data stays isolated. You apply the same experimental framework in multiple Workspaces. Each client\'s results are separate and do not influence the analysis for other clients.'
      },
    ],
  },
  {
    slug: 'performance-marketing',
    label: 'Performance Marketing',
    h1: 'Client Intelligence for Performance Marketing Businesses',
    metaDescription: 'Performance marketing requires client-specific context, proven frameworks, and fast iteration. Client Intelligence provides isolated Workspaces and systematic methodology for performance marketers serving multiple clients.',
    pain: 'Performance marketing is data-intensive and entirely client-specific. Different audiences. Different creative angles. Different conversion benchmarks. Different attribution models. Managing this complexity across fifteen or more accounts while maintaining optimized performance requires more than spreadsheets and memory. Context mistakes in performance marketing are expensive.',
    scenarios: [
      {
        title: 'The Account Context Mix-Up',
        story: 'A performance marketing agency managed 15 accounts. During a busy campaign season, a team member applied targeting parameters and creative direction from one e-commerce client to a different client\'s campaign. It launched with the wrong audience. The budget was mostly spent before the error was caught.',
        result: 'After isolating each account in its own Workspace, account context cannot mix. Creative direction, audience segments, and performance benchmarks for each account are structurally separated. The failure mode no longer exists.'
      },
      {
        title: 'The Framework Application Efficiency',
        story: 'The agency had a 12-step testing methodology for every new campaign. Running it manually across 15 accounts took three weeks per testing cycle. Testing season was consuming all strategic capacity.',
        result: 'After encoding the testing methodology in the Account Brain, the 12-step process runs within each client Workspace against that client\'s context. A testing cycle that took three weeks now runs in four days with more consistent methodology application.'
      },
      {
        title: 'The Monthly Reporting Bottleneck',
        story: 'Monthly performance reporting required synthesizing platform data, interpreting trends, and writing contextual narratives for each client. Fifteen reports took three full days every month. This was not a task that could be delegated without quality loss.',
        result: 'After uploading performance data to each client Workspace, Intelligence generates contextual narrative reports grounded in that client\'s history and benchmarks. Fifteen reports now take half a day.'
      },
    ],
    forYou: [
      'You manage performance marketing for multiple clients and need isolated account contexts',
      'You have optimization frameworks and testing methodologies worth encoding in the Account Brain',
      'You want to scale your client base without proportionally increasing manual reporting time',
      'You serve clients in competitive verticals who need data isolation guarantees',
    ],
    notForYou: [
      'You manage performance marketing for only one brand in an in-house capacity',
      'Your optimization is entirely reactive with no systematic framework',
      'Client data isolation is not a concern in your practice',
    ],
    faqs: [
      {
        question: 'How do I work with platform data from Google Ads, Meta, and similar tools?',
        answer: 'Export platform reports and upload to the client Workspace. Intelligence analyzes the data against your optimization frameworks within that client\'s isolated context. Each client\'s performance data stays in their Workspace.'
      },
      {
        question: 'Can I store creative performance history per client?',
        answer: 'Yes. Upload creative assets, copy variations, and performance notes to each client\'s Workspace. Intelligence references past creative performance when informing new campaign recommendations for that client.'
      },
      {
        question: 'How does this handle clients targeting the same competitors?',
        answer: 'Competitive intelligence for each client stays in their Workspace. When multiple clients target the same competitors, each client\'s strategy is developed in an isolated context. No cross-contamination of competitive approach.'
      },
      {
        question: 'Is this useful for media planning as well as campaign optimization?',
        answer: 'Yes. Upload media plans, audience segment definitions, and channel allocation frameworks to each client Workspace. Intelligence applies your media planning methodology to that client\'s specific budget, objectives, and market context.'
      },
    ],
  },
  {
    slug: 'fractional-executive-services',
    label: 'Fractional Executive Services',
    h1: 'Client Intelligence for Fractional Executives',
    metaDescription: 'Fractional executives serve multiple companies simultaneously. Client Intelligence provides per-company isolation, persistent context, and consistent leadership frameworks across all engagements.',
    pain: 'Fractional executives face a unique structural challenge. They must be deeply embedded in multiple organizations simultaneously while keeping information strictly separated between them. Board meetings, strategy sessions, team dynamics, financial decisions all happening across four to eight companies at once. NDAs and fiduciary obligations require those contexts to never mix. Most tools were not designed for this.',
    scenarios: [
      {
        title: 'The Context Switch Cognitive Cost',
        story: 'A fractional CFO serving six companies spent the first 30 minutes of every working session just re-orienting. Which company was he working with. Where had they left off. What decisions were open. The mental overhead was consuming hours per week that should have gone into actual work.',
        result: 'With each company in an isolated Workspace, he opens the relevant environment before each session. Intelligence provides a brief on recent decisions, open questions, and upcoming obligations. He is operational immediately. The re-orientation time is gone.'
      },
      {
        title: 'The Competing Portfolio Companies',
        story: 'Two of a fractional CMO\'s clients operated in the same market segment. Her NDAs required strict information separation. She was cautious about any shared AI tool used across both engagements. Compliance risk was real.',
        result: 'Client Intelligence\'s structural isolation satisfied her NDA requirements. Both clients approved the architecture after reviewing the documentation. She now uses Intelligence freely in both engagements without compliance anxiety.'
      },
      {
        title: 'The Long-Term Context Value',
        story: 'A fractional CRO had worked with one portfolio company for two years. The accumulated strategic context was enormous. Two years of decisions, experiments, and recommendations that informed current choices. Most of it lived only in scattered notes and his memory.',
        result: 'After uploading two years of engagement history to the company Workspace, Intelligence surfaces any past decision, recommendation, or strategic conversation on demand. The context that lived only in his head became searchable and usable.'
      },
    ],
    forYou: [
      'You serve three or more companies simultaneously as a fractional executive',
      'Your engagements require strict information separation due to NDAs or competitive conflicts',
      'You want persistent context management across companies without the cognitive overhead of manual switching',
      'You have executive frameworks and leadership playbooks worth encoding in the Account Brain',
    ],
    notForYou: [
      'You serve only one company fractionally and context isolation between multiple clients is not relevant',
      'Your fractional role is purely implementation with no strategic or advisory component',
      'You do not have concerns about data separation between your portfolio companies',
    ],
    faqs: [
      {
        question: 'How many company Workspaces can I maintain simultaneously?',
        answer: 'The platform supports unlimited Workspaces. Most fractional executives find six to ten active companies is the practical limit based on engagement depth, not tool constraints.'
      },
      {
        question: 'Can I use Client Intelligence for board-level strategy documentation?',
        answer: 'Yes. Board materials, strategic decisions, and governance documentation can be stored in the company Workspace. All materials remain within the isolated Workspace. They are never accessible from other company contexts.'
      },
      {
        question: 'How does this help when starting a new fractional engagement?',
        answer: 'Create a Workspace immediately upon engagement start. Use Brain Dump mode to capture your onboarding learnings during the first weeks. Build context from day one so you have a complete picture within weeks rather than months of mental accumulation.'
      },
      {
        question: 'Can I share a Workspace with other fractional executives serving the same company?',
        answer: 'Yes, if they have account access. Multiple fractional executives serving the same company can share a Workspace and work from aligned context. Each company\'s Workspace is still isolated from all others.'
      },
    ],
  },
  {
    slug: 'business-coaching',
    label: 'Business Coaching',
    h1: 'Client Intelligence for Business Coaching Practices',
    metaDescription: 'Business coaches serving multiple clients need per-client memory, consistent framework application, and scalable delivery. Client Intelligence provides the AI infrastructure for multi-client business coaching.',
    pain: 'Business coaches hold two things simultaneously: the full context of each client\'s unique business situation and journey, and a coaching methodology that applies across all clients. As client volume grows, the first becomes impossible to maintain manually. The second begins to drift without systems to enforce it. Both problems grow together.',
    scenarios: [
      {
        title: 'The Client History Recall Problem',
        story: 'A business coach with 22 clients regularly arrived to sessions only partially prepared. Clients who referenced past conversations found she remembered some details and not others. Trust eroded gradually across multiple relationships. Not because she was inattentive but because manual recall across 22 clients is not possible.',
        result: 'After logging every session in client Workspaces, the coach opens each Workspace before a session and asks Intelligence to surface the most relevant recent history. She is always fully prepared. Multiple clients have commented on the improvement.'
      },
      {
        title: 'The Methodology Application Consistency',
        story: 'A business coach had developed a six-phase business growth methodology. Under time pressure and cognitive load, she often skipped phases for certain clients. Some clients moved through all six. Others only reached four. Outcomes varied in ways she could not explain or defend.',
        result: 'With the six-phase methodology encoded in the Account Brain, all phases are applied to every client engagement. The framework is the structural starting point. Skipping steps by accident is no longer possible.'
      },
      {
        title: 'The Scale Without Burnout Problem',
        story: 'A highly sought-after business coach was turning away eight to ten qualified prospects per month. She was at capacity with 15 clients. Session preparation was consuming too much time to serve more. The demand was there. The bandwidth was not.',
        result: 'By systematizing session prep with Client Intelligence, preparation time per client dropped from 45 minutes to 10 minutes. She added five clients without extending her working hours. The additional revenue came directly from time she had already been spending on prep.'
      },
    ],
    forYou: [
      'You serve multiple business coaching clients and want to maintain depth with each one as you scale',
      'You have a coaching methodology or framework worth encoding in the Account Brain and applying consistently',
      'You want to scale your practice without burning out on session preparation and administration',
      'You want persistent per-client memory that grows throughout the coaching relationship',
    ],
    notForYou: [
      'You serve only two or three clients in deep long-term relationships where manual context management is practical',
      'Your coaching is purely conversational with no framework to encode',
      'You are opposed to using AI in any aspect of your coaching practice',
    ],
    faqs: [
      {
        question: 'What kinds of business coaching content works well in Client Intelligence?',
        answer: 'Session summaries, business metrics and financials, goal tracking, strategy decisions, action items, commitments, and progress notes. Anything you would reference in a future session belongs in the client Workspace.'
      },
      {
        question: 'Can I use this for group business coaching as well?',
        answer: 'Yes. Create a Workspace for the group program itself and individual Workspaces for each participant who has individual coaching alongside the group. Group context and individual context stay separate.'
      },
      {
        question: 'How do I handle clients who do not want their sessions recorded?',
        answer: 'Recording is not required. Manual session summaries, even five-minute written summaries of key points, are effective when added to the client Workspace. Full transcription is one option. Not the only one.'
      },
      {
        question: 'Can I build business diagnostic frameworks for different client types?',
        answer: 'Yes. Encode separate diagnostic frameworks for different client categories in the Account Brain: service businesses, product companies, early-stage founders. Apply the relevant framework to each client\'s Workspace.'
      },
    ],
  },
  {
    slug: 'digital-agencies',
    label: 'Digital Agencies',
    h1: 'Client Intelligence for Digital Agencies',
    metaDescription: 'Digital agencies managing multiple client accounts need isolated contexts, consistent methodology, and scalable delivery. Client Intelligence provides the infrastructure for multi-client digital work.',
    pain: 'Digital agencies face constant tension between scale and quality. Every client deserves focused attention, deep context, and methodology applied specifically to their situation. But the economics of agency work require serving many clients simultaneously. Generic AI tools help with individual tasks. They do not solve the core challenge: maintaining strategic depth across a large, growing book of business.',
    scenarios: [
      {
        title: 'The Account Context Problem at Scale',
        story: 'A 20-client digital agency found account managers producing generic strategies. They could not maintain deep context for every account while managing day-to-day delivery. Strategy briefs had become increasingly templated. Clients were noticing.',
        result: 'Per-client Workspaces let account managers maintain deep context without the overhead of manual review before every meeting. Strategies became specific and contextual. Three long-term clients extended their retainers immediately after the quality shift.'
      },
      {
        title: 'The Methodology Consistency Across the Team',
        story: 'A digital agency\'s delivery quality varied significantly by team member. Some clients received exceptional strategic thinking. Others received process-driven execution. The difference depended on who was assigned to the account, not on any client characteristic.',
        result: 'After encoding their digital strategy methodology in the Account Brain, all team members work from the same foundation. Delivery consistency improved across all accounts. Client satisfaction became predictably positive rather than variable.'
      },
      {
        title: 'The New Client Onboarding Compression',
        story: 'Onboarding new digital clients took three to four weeks of context gathering, briefings, and strategy development before meaningful work began. New clients were frustrated by the wait. The agency was losing deals to agencies who could start faster.',
        result: 'Client Intelligence Workspaces and Brain Dump mode compressed onboarding to one intensive session. Meaningful strategic work began in week one. New clients receive their first substantive strategy brief within 10 days of signing.'
      },
    ],
    forYou: [
      'You serve multiple digital clients and need consistent, deep context management per account',
      'Your agency has a methodology for digital strategy, SEO, content, or web work worth encoding in the Account Brain',
      'You want to grow your book of business without proportionally increasing your team size',
      'You need data isolation between clients who may be competing brands',
    ],
    notForYou: [
      'You work exclusively with one client in an embedded long-term arrangement',
      'Your digital work is entirely execution-based with no strategic methodology to encode',
      'Cross-client data isolation is not a concern in your current client mix',
    ],
    faqs: [
      {
        question: 'How does Client Intelligence handle digital strategy work specifically?',
        answer: 'Your digital strategy frameworks, competitive analysis approaches, and channel-specific playbooks live in the Account Brain. Each client Workspace holds their specific context: audit history, strategy decisions, performance data. Intelligence applies your frameworks to each client\'s situation.'
      },
      {
        question: 'Can I upload website audits and SEO analysis to Workspaces?',
        answer: 'Yes. Technical audits, content analysis, SEO reports, and analytics exports can all be uploaded to the relevant client Workspace. Intelligence references this analysis when generating recommendations for that client.'
      },
      {
        question: 'Is this useful for creative agencies as well as performance-focused agencies?',
        answer: 'Yes. Creative briefs, brand guidelines, campaign history, and client feedback can all be stored in isolated Workspaces. Account teams maintain deep creative context for each brand without manual review before every project.'
      },
      {
        question: 'How do we handle clients who have internal digital teams we need to align with?',
        answer: 'Document the client\'s internal team structure, preferences, and working agreements in their Workspace. Intelligence references these constraints when generating strategy recommendations. Alignment context lives where the work happens.'
      },
    ],
  },
  {
    slug: 'freelance-consultants',
    label: 'Freelance Consultants',
    h1: 'Client Intelligence for Independent Consultants and Freelancers',
    metaDescription: 'Independent consultants serve multiple clients with limited time and no team. Client Intelligence gives freelancers per-client memory, methodology encoding, and delivery capacity to serve more clients without more hours.',
    pain: 'Freelance consultants do everything themselves. Strategy, delivery, account management, and business development, all without team support. Every hour spent on delivery overhead is an hour not spent on revenue-generating work or client relationships. And every new client adds another context to manage manually with no one to delegate to.',
    scenarios: [
      {
        title: 'The Freelancer\'s Capacity Ceiling',
        story: 'A freelance strategy consultant was at capacity with five clients. Adding a sixth would have meant evenings and weekends. She was turning away warm referrals. The ceiling was not her methodology. It was the time required to apply it manually to each client.',
        result: 'After encoding her strategy framework in Client Intelligence, she served eight clients with the same working hours. Three additional clients\' revenue with no additional hours. The ceiling moved.'
      },
      {
        title: 'The Proposal-to-Execution Gap',
        story: 'A freelance consultant\'s proposals were detailed and compelling. Once a client signed, the quality of execution did not always match the sophistication of what was sold. Delivery was manual. The framework that lived in the proposal did not always drive the actual work.',
        result: 'By encoding her methodology in the Account Brain, delivery now matches the approach described in proposals. Clients comment that they got exactly what they were promised. Referrals from satisfied clients increased.'
      },
      {
        title: 'The Annual Client Context Refresh',
        story: 'A freelance consultant served 12 annual retainer clients. At the start of each year, reviewing twelve months of history per client to re-orient for the new engagement period took two full weeks. That was two weeks of non-billable time every January.',
        result: 'With all client history in Client Intelligence Workspaces, the year-end review took one day total. She enters each new year\'s conversations more prepared, with more specific strategic continuity per client.'
      },
    ],
    forYou: [
      'You are a solo consultant or freelancer serving multiple clients simultaneously',
      'You have a methodology worth encoding in the Account Brain, not just raw expertise',
      'You want to serve more clients without working more hours',
      'You need per-client isolation to maintain professional standards and NDA compliance',
    ],
    notForYou: [
      'You serve one client at a time on dedicated long-term projects',
      'Your freelance work is purely execution-based with no repeatable strategy component',
      'You are satisfied with your current client volume and not looking to grow',
    ],
    faqs: [
      {
        question: 'Is Client Intelligence worth it for a solo freelancer?',
        answer: 'Especially for solo freelancers. You have no team to absorb capacity. No support staff. Every hour matters. The per-client memory, methodology encoding, and delivery efficiency have the most impact when you are the only person in the business.'
      },
      {
        question: 'How does Client Intelligence help with new client proposals?',
        answer: 'Your methodology in the Account Brain informs proposal development. Pull from encoded frameworks when outlining your approach. For long-term clients, surface their Workspace history to write renewal proposals with specific, contextual language that reflects the full engagement.'
      },
      {
        question: 'Can I use this to support premium pricing as a freelancer?',
        answer: 'Yes. When you can demonstrate systematic methodology application, per-client data isolation, and consistent delivery quality, premium positioning is tangible. Many freelancers use Client Intelligence as a sales differentiator as well as a delivery tool.'
      },
      {
        question: 'Is there a steep learning curve for a solo operator?',
        answer: 'No. The initial setup, Account Brain and first client Workspace, typically takes two to four hours. Most freelancers are fully operational within a week. The time investment returns within the first month.'
      },
    ],
  },
  {
    slug: 'demand-generation',
    label: 'Demand Generation',
    h1: 'Client Intelligence for Demand Generation Consultants',
    metaDescription: 'Demand generation consultants need client-specific ICP context, consistent DG frameworks, and scalable delivery. Client Intelligence provides per-client isolation and framework consistency for demand gen practices.',
    pain: 'Demand generation consulting requires precise understanding of each client\'s market, ICP, buyer journey, and current pipeline state. This context is highly specific and changes frequently as campaigns run and pipeline evolves. Managing it accurately across multiple clients while applying consistent DG methodology is where most demand generation consultants hit their capacity limit.',
    scenarios: [
      {
        title: 'The ICP Context Depth Problem',
        story: 'A demand generation consultant served seven clients with different ICPs, buying journeys, and pipeline stages. Keeping each client\'s prospect context accurate while coordinating campaigns across all seven was cognitively taxing. Context slipping between clients was affecting campaign quality.',
        result: 'Each client\'s ICP documentation, pipeline context, and campaign history lives in their isolated Workspace. Intelligence applies the relevant context for each client without the consultant manually re-establishing it before every session.'
      },
      {
        title: 'The Campaign Framework Inconsistency',
        story: 'A DG consulting firm applied their demand generation framework differently across clients based on each consultant\'s interpretation. Campaign outcomes varied in ways that could not be attributed to market differences alone. The framework existed but was not being applied consistently.',
        result: 'After encoding their DG framework in the Account Brain and applying it across all Workspaces, campaign structure became consistent. Outcome predictability improved. They could finally build reliable case study data.'
      },
      {
        title: 'The Monthly Reporting Time Drain',
        story: 'Monthly pipeline and demand generation reports for six clients required significant synthesis and narrative development per account. Six reports took six days of work every month. Reporting season was preventing new business development.',
        result: 'After uploading performance data to each client Workspace, Intelligence generates contextual DG reports grounded in that client\'s history and benchmarks. Six reports now take less than a day combined.'
      },
    ],
    forYou: [
      'You serve multiple demand generation clients with distinct ICPs, markets, and pipeline contexts',
      'You have a DG framework or methodology worth encoding in the Account Brain and applying consistently',
      'You want to scale your client base without losing the contextual depth DG work requires',
      'You need per-client data isolation for clients who may compete for the same market',
    ],
    notForYou: [
      'You work exclusively with one company on a long-term embedded basis',
      'Your demand generation work is purely tactical execution with no strategic framework',
      'Cross-client data isolation is not a concern in your practice',
    ],
    faqs: [
      {
        question: 'How do I handle different attribution models across clients?',
        answer: 'Document each client\'s attribution model and reporting definitions in their Workspace. Intelligence applies that client\'s specific model when generating analysis and recommendations. Not a generic attribution approach applied uniformly.'
      },
      {
        question: 'Can I use Client Intelligence for ABM campaign management?',
        answer: 'Yes. Upload target account lists, buying committee maps, and engagement history to each client Workspace. Intelligence informs account prioritization and message sequencing based on that client\'s specific context.'
      },
      {
        question: 'How does this work with demand gen tools like 6sense or Bombora?',
        answer: 'Export intent data and engagement reports from these tools and upload to each client Workspace. Intelligence analyzes the data within that client\'s isolated context. Each client\'s intent data stays in their environment.'
      },
      {
        question: 'Is this useful for DG reporting to client leadership or boards?',
        answer: 'Yes. Intelligence generates executive-level DG narratives from Workspace data. These can be refined and presented directly to client leadership, grounded in that client\'s specific metrics and benchmarks rather than generic industry numbers.'
      },
    ],
  },
  {
    slug: 'funnel-building',
    label: 'Funnel Building',
    h1: 'Client Intelligence for Funnel Builders and Funnel Agencies',
    metaDescription: 'Funnel builders need client-specific offer context, proven conversion frameworks, and efficient delivery. Client Intelligence provides per-client isolation and systematic methodology for multi-client funnel agencies.',
    pain: 'Funnel building requires deep client-specific understanding: the offer, the market, the buyer psychology, the existing funnel data, and the brand voice. Generic funnels do not convert. But building genuinely customized funnels for multiple clients while applying consistent conversion and copy frameworks is time-intensive and hard to scale without losing the specificity that drives results.',
    scenarios: [
      {
        title: 'The Offer Context Confusion',
        story: 'A funnel agency built funnels for eight clients with different offers in similar markets. Working across multiple clients without isolation caused copy angles and offer positioning to bleed between accounts. A value proposition from one client appeared in a brief for another. The client noticed.',
        result: 'With isolated Workspaces, each client\'s offer specifics, brand voice, avatar research, and funnel history are completely separate. Cross-client copy mixing became structurally impossible.'
      },
      {
        title: 'The Conversion Copywriting Framework',
        story: 'A funnel builder had a proprietary conversion copywriting framework that consistently outperformed generic copy. Getting team members to apply it correctly took months of training and frequent correction. The framework was strong. The consistent delivery of it was not.',
        result: 'After encoding the framework in the Account Brain, team members apply it within every client Workspace from day one. Funnel copy consistency and conversion performance improved across all new client builds.'
      },
      {
        title: 'The Funnel Audit Efficiency',
        story: 'Running a comprehensive funnel audit for each new client took two to three days of manual review, analytics analysis, and audit report writing. The audit was valuable. The time cost prevented taking on as many new clients as the agency could serve.',
        result: 'After building a funnel audit framework in the Account Brain, the initial audit generates within a client Workspace in one day. The consultant reviews and refines rather than building from scratch for every new engagement.'
      },
    ],
    forYou: [
      'You build funnels for multiple clients and need isolated contexts for each offer, audience, and brand',
      'You have conversion frameworks and copy methodologies worth encoding consistently in the Account Brain',
      'You want to scale your funnel delivery capacity without losing the customization that drives results',
      'You serve clients whose funnel data and offer details must be kept strictly separate',
    ],
    notForYou: [
      'You build funnels exclusively for your own offers or one client\'s business',
      'Your funnel work is entirely template-based with no bespoke strategy component',
      'Cross-client data isolation is not a concern in your practice',
    ],
    faqs: [
      {
        question: 'How do I store funnel assets and copy history in Workspaces?',
        answer: 'Upload copy documents, funnel maps, split test results, and analytics exports to the client Workspace. Intelligence references these assets when generating new copy angles and funnel recommendations for that client.'
      },
      {
        question: 'Can I encode avatar research and buyer psychology frameworks?',
        answer: 'Yes. Your buyer psychology frameworks and avatar research methodology live in the Account Brain. Client-specific avatar research and ICP data lives in each client\'s Workspace. Both inform Intelligence when working in that client\'s environment.'
      },
      {
        question: 'How does this help with split testing?',
        answer: 'Encode your A/B testing framework in the Account Brain. Log each client\'s test history and results in their Workspace. Intelligence recommends new test variants based on your framework applied to their specific performance history.'
      },
      {
        question: 'Can I manage the funnel build project within the Workspace?',
        answer: 'Yes. Task tracking, milestone management, and build phase documentation can all live inside the client\'s isolated Workspace. The entire funnel build project stays in one environment, separate from every other client.'
      },
    ],
  },
  {
    slug: 'seo-agencies-vertical',
    label: 'SEO Agencies',
    h1: 'Client Intelligence for SEO Agencies',
    metaDescription: 'SEO agencies serve multiple clients with different websites, industries, and competitive landscapes. Client Intelligence provides per-client isolation and consistent SEO methodology for multi-client agencies.',
    pain: 'SEO agencies face a specific challenge: every client operates in a different market, with a different site structure, different competitive landscape, and different keyword opportunity set. Generic SEO frameworks apply to everything and optimize for nothing. Client-specific strategy is essential. But maintaining genuinely deep strategic context across fifteen or more clients manually is not sustainable.',
    scenarios: [
      {
        title: 'The Generic Recommendation Problem',
        story: 'An SEO agency serving 18 clients found account managers producing templated keyword recommendations. They could not maintain deep client-specific context while managing delivery. Clients whose businesses were genuinely different were getting similar strategies.',
        result: 'Per-client Workspaces hold each site\'s audit history, keyword strategy, competitive landscape, and performance data. Account managers produce genuinely specific recommendations. Client satisfaction and renewal rates improved in the following two quarters.'
      },
      {
        title: 'The Technical SEO Audit Bottleneck',
        story: 'Running comprehensive technical SEO audits took eight hours per client. At 12 clients per quarter, audit season consumed most of the team\'s strategic capacity. Auditing was preventing strategy.',
        result: 'After building a technical audit framework in the Account Brain, initial audits generate within three hours per client Workspace. Team time goes to analysis and strategy rather than documentation and structure.'
      },
      {
        title: 'The Competing Local Clients Problem',
        story: 'Two competing local businesses were both SEO clients of the same agency. Keyword strategies and competitive intelligence for one client could not be allowed to inform work for the other. Using any shared AI tool across both accounts was a liability.',
        result: 'With isolated Workspaces, each client\'s keyword strategy, competitive intelligence, and local SEO data stays within their environment. The agency now explicitly markets this structural isolation when pitching clients in competitive local markets.'
      },
    ],
    forYou: [
      'You serve multiple SEO clients with different industries, sites, and competitive landscapes',
      'You have an SEO audit or strategy methodology worth encoding in the Account Brain and applying consistently',
      'You want to scale your client capacity without losing the site-specific depth SEO work requires',
      'You serve clients in competitive markets who need guaranteed strategy isolation between accounts',
    ],
    notForYou: [
      'You manage SEO exclusively for one website on a long-term basis',
      'Your SEO work is entirely technical implementation with no strategic advisory component',
      'Competitive intelligence isolation between clients is not a concern',
    ],
    faqs: [
      {
        question: 'How do I work with site-specific data in Workspaces?',
        answer: 'Export Google Analytics, Search Console data, and crawl reports and upload to the client Workspace. Intelligence analyzes the data against your SEO frameworks within that client\'s isolated context. Each client\'s site data stays in their environment.'
      },
      {
        question: 'Can I build SEO content strategies within Workspaces?',
        answer: 'Yes. Keyword clusters, content gap analyses, and editorial calendars can all be developed and stored within each client Workspace, grounded in that client\'s specific keyword opportunity and competitive context.'
      },
      {
        question: 'How does this help with monthly SEO reporting?',
        answer: 'Upload monthly performance data to the Workspace and ask Intelligence to generate a contextual SEO performance narrative. It references that client\'s history and targets rather than generic industry benchmarks.'
      },
      {
        question: 'Can I encode industry-specific SEO knowledge for different client verticals?',
        answer: 'Yes. Your Account Brain holds industry-specific SEO frameworks and considerations. Direct Intelligence to apply the relevant industry knowledge alongside your core SEO methodology when working in each client Workspace.'
      },
    ],
  },
  {
    slug: 'content-strategy',
    label: 'Content Strategy',
    h1: 'Client Intelligence for Content Strategy Consultants',
    metaDescription: 'Content strategists need deep client context, consistent strategic frameworks, and scalable delivery. Client Intelligence provides per-client isolation and methodology encoding for content strategy practices.',
    pain: 'Content strategy consulting requires understanding not just content best practices but the specific voice, audience, business context, and existing content ecosystem of each client. Generic content strategy helps no one specifically. Maintaining that depth of client-specific context across a full book of business while applying consistent strategic frameworks is the central challenge of scaling a content strategy practice.',
    scenarios: [
      {
        title: 'The Voice and Context Depth Problem',
        story: 'A content strategy consultant served 10 clients across different industries. Maintaining each client\'s brand voice, audience context, and content history while producing genuinely differentiated strategies became impossible as the practice grew. Strategies were starting to feel like variations of the same template.',
        result: 'Per-client Workspaces hold brand guidelines, audience research, content audit findings, and engagement history. Intelligence generates recommendations that feel specific to each client rather than generic content strategy advice.'
      },
      {
        title: 'The Content Audit Time Cost',
        story: 'Comprehensive content audits took two weeks per client. Running them for eight clients per year consumed four months of annual capacity for initial audits alone. The auditing work prevented the agency from taking on new clients at the pace the market was offering.',
        result: 'After building a content audit framework in the Account Brain, initial audit generation dropped to three days per client. Quality improved because the framework ran completely every time rather than under time pressure.'
      },
      {
        title: 'The Editorial Calendar Generation',
        story: 'Monthly editorial calendar development for each client took three to four hours per client. At 10 clients, editorial planning consumed 40 hours every month. This was a significant portion of capacity going to planning rather than strategy.',
        result: 'Intelligence generates initial editorial calendars within each client Workspace based on that client\'s content strategy, audience context, and past performance. Planning time dropped to one hour per client for review and refinement.'
      },
    ],
    forYou: [
      'You serve multiple content strategy clients with distinct voices, audiences, and business contexts',
      'You have a content strategy framework worth encoding in the Account Brain and applying consistently',
      'You want to scale your client capacity without losing the brand-specific depth content strategy requires',
      'You need per-client content and brand data isolation between competing or adjacent clients',
    ],
    notForYou: [
      'You work exclusively with one brand on a long-term embedded basis',
      'Your content work is purely execution with no strategic framework to encode',
      'Brand context isolation between clients is not a concern in your practice',
    ],
    faqs: [
      {
        question: 'How do I store brand guidelines and voice documentation in Workspaces?',
        answer: 'Upload brand guideline documents, voice and tone guides, example content pieces, and style guides directly to the client Workspace. Intelligence references these when generating strategic recommendations and content direction for that client.'
      },
      {
        question: 'Can I use Client Intelligence for content performance analysis?',
        answer: 'Yes. Upload analytics exports and content performance reports to each client Workspace. Intelligence analyzes performance against that client\'s strategic objectives and your content framework within their isolated context.'
      },
      {
        question: 'How does this help with audience research and persona development?',
        answer: 'Your audience research framework lives in the Account Brain. Client-specific research, persona documents, and ICP definitions live in each client\'s Workspace. Intelligence applies your research framework to each client\'s specific audience context.'
      },
      {
        question: 'Can I manage editorial calendars and publishing schedules within Workspaces?',
        answer: 'Yes. Use the project layer within each client Workspace to manage editorial calendars, publication schedules, and content approval workflows. All within that client\'s isolated context.'
      },
    ],
  },
]
