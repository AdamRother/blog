// Keyword cluster this post targets:
// Primary:   why services beat courses in the AI era
// Secondary: are info products dead | services vs info products AI era
//            future of coaching businesses with AI | will AI replace coaches
// LSI:       AI replacing courses coaching | why online courses are dying 2025
//            is the course model broken | selling expertise in AI age
//            scaling impact without scaling time AI | new business models with AI 2025
//            should I pivot from courses to services AI | AI makes courses obsolete

import type { PostEntry } from './index'
import DefinitionBox from '@/components/DefinitionBox'

const heroSrc = '/images/pexels/8386358.webp'
const img1Src = '/images/pexels/18548425.webp'
const img2Src = '/images/pexels/16461434.webp'
const img3Src = '/images/pexels/8439174.webp'
const img4Src = '/images/pexels/17483867.webp'

function PexelsImage({
  src,
  alt,
  photographer,
  photographerUrl,
  pexelsUrl,
}: {
  src: string
  alt: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div className="overflow-hidden rounded-xl aspect-video">
        <img
          src={src}
          alt={alt}
          width={940}
          height={627}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted text-right">
        Photo by{' '}
        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink transition-colors"
        >
          {photographer}
        </a>{' '}
        on{' '}
        <a
          href={pexelsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink transition-colors"
        >
          Pexels
        </a>
      </figcaption>
    </figure>
  )
}

function PostBody() {
  return (
    <div className="prose-content">

      {/* Featured snippet — direct answer, primary keyword in first 2 sentences */}
      <p>
        AI isn&rsquo;t replacing consultants. It&rsquo;s replacing course creators. Those are very
        different businesses. Most people haven&rsquo;t noticed the difference yet.
      </p>
      <p>
        Services beat courses in the AI era because AI delivers the information. It cannot apply it.
        The value of a practitioner has never been what they know. It has always been what they do
        with what they know, in a specific context, for a specific client, in real time.
      </p>
      <p>
        AI closes the gap on the first part. It does not touch the second. That&rsquo;s the whole
        argument. Everything else is context.
      </p>

      <h2 id="what-ai-changed">What did AI actually change about information delivery?</h2>
      <p>
        Everyone told you to build passive income. Create once, sell forever. The information
        products industry built an entire identity around that promise. What nobody said is that
        AI just destroyed the &ldquo;create once&rdquo; moat.
      </p>
      <p>
        Here&rsquo;s what nobody tells you: AI did not invent zero-cost information. It extended it.
        Once something exists digitally, copying it costs nothing. That has been true for decades.
        The course model was built on this structure. Real innovation at the time. Information was
        hard to reach, harder to produce. Real expertise meant real production time. That gap was
        the moat.
      </p>
      <p>
        This is the core economics of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Information_good"
          target="_blank"
          rel="noopener noreferrer"
        >
          information goods
        </a>
        : very high fixed cost to produce the first unit, effectively zero cost for every unit after.
        A blog post, a PDF, a recorded video course. Produce once, sell forever. The model made sense
        when the production itself required years of accumulated expertise to get right.
      </p>
      <p>
        What AI changed is not the principle. What it changed is the production side. Creating
        that first unit, the frameworks, the guides, the step-by-step systems, used to require
        years of expertise to build credibly. That expertise was the moat. The course model had
        one thing going for it: production was hard. AI absorbed it. A well-prompted AI can produce
        credible information content in a fraction of the time, across almost any domain where
        practitioners have historically sold courses.
      </p>
      <p>
        The scarcity that gave courses their value was never the distribution. It was the production
        of the content. AI eliminates that scarcity. You cannot compete on information delivery
        when the best available information is free to anyone who asks.
      </p>

      <PexelsImage
        src={img1Src}
        alt="Scrabble tiles spelling AI on a wooden surface — the shift from selling information to selling intelligence applied in context"
        photographer="Markus Winkler"
        photographerUrl="https://www.pexels.com/@markus-winkler-1430818"
        pexelsUrl="https://www.pexels.com/photo/18548425/"
      />

      <h2 id="why-courses-are-losing-ground">Why the course model is losing ground</h2>
      <p>
        Courses sell a promise: learn this, do this, get this result. The delivery mechanism was
        information transfer. Buy the course, absorb the content, apply it to your situation, get
        the outcome.
      </p>
      <p>
        There was always a missing step. And the industry knew it. Completion rates for online
        courses have historically stayed below 10%. Not because the information was wrong. Because
        applying a general framework to a specific situation requires something a recorded module
        cannot provide: judgment in context. The gap between &ldquo;I understand the framework&rdquo;
        and &ldquo;I actually implemented it correctly for my situation&rdquo; is the entire service
        business. That gap never closed.
      </p>
      <p>
        The 5-step proprietary system. The exclusive acronym. The bonus live Q&amp;A that happened
        twice in 2023. AI absorbed all of it. Turns out there wasn&rsquo;t that much moat there.
        The system was information. AI is better at delivering information. And AI is available at
        11pm on a Sunday, never has an off day, and costs $20 a month.
      </p>
      <p>
        If you&rsquo;re selling a course right now, you&rsquo;re competing with a tool that works
        at 11pm, never has off days, and costs $20 a month. That is not a pricing competition you
        win. Not this decade. Probably not ever.
      </p>
      <p>
        The completion rate problem was never a bug. It was telling you something. Information alone
        does not produce transformation. It never did. We all knew that. We just kept selling
        information. Courses built a business on the information layer while the transformation
        layer, the actual mechanism of change, stayed with the practitioner. AI has taken the
        information layer entirely. What remains is the work that always actually mattered.
      </p>

      <h2 id="what-ai-cannot-replace">Can AI replace an experienced consultant or coach?</h2>
      <p>
        Most arguments about AI either overreach or understate here. Let me be honest with you:
        AI will not replace experienced practitioners. Not because AI is limited in some general
        sense. Experienced practitioners are not primarily delivering information. They are applying
        judgment to context. Those are different products.
      </p>
      <p>
        <a
          href="https://www.nber.org/papers/w31161"
          target="_blank"
          rel="noopener noreferrer"
        >
          Research by Brynjolfsson, Li, and Raymond published through the National Bureau of
          Economic Research
        </a>{' '}
        examined how AI-based assistants affected workers across skill levels. The results were
        specific: AI produced a 34% productivity gain for novice and low-skilled workers. For
        experienced and highly skilled workers, the impact was minimal.
      </p>
      <p>
        This is what practitioners already know intuitively. The NBER research just confirmed it
        with numbers.
      </p>
      <p>
        AI raises the floor. It does not raise the ceiling. Those are different things. AI functions
        as a knowledge-sharing mechanism. It distributes best practices from top performers to lower
        performers. Novice output gets better. The gap between a novice and an expert narrows. But
        the ceiling doesn&rsquo;t move.
      </p>
      <p>
        Think about it. AI can bring a novice&rsquo;s output closer to a trained baseline. It
        cannot replicate what an experienced practitioner does with a specific client&rsquo;s
        specific situation: the accumulated pattern recognition, the calibrated judgment about
        which path to take when several look viable, the read on what the client actually needs
        versus what they say they want. That is not information. It is intelligence applied in
        relationship. AI does not have a client. You do.
      </p>

      <PexelsImage
        src={img2Src}
        alt="ChatGPT app on a smartphone over an open AI textbook — the information tools that cannot replace contextual expertise"
        photographer="Sanket Mishra"
        photographerUrl="https://www.pexels.com/@sanketgraphy"
        pexelsUrl="https://www.pexels.com/photo/16461434/"
      />

      <h2 id="the-services-advantage">What applied expertise offers that AI cannot replicate</h2>
      <p>
        You&rsquo;ve spent years building something AI cannot replicate. That&rsquo;s not a
        consolation prize. That&rsquo;s a structural advantage. The question is whether you
        understand it clearly enough to price and position it correctly.
      </p>
      <p>
        What does a client actually pay for when they hire a consultant or coach? Not information.
        The internet has always had that. They pay for application. The practitioner takes their
        specific situation, its constraints, its history, its relationships, its competing
        priorities, and produces a result tailored to that exact context.
      </p>
      <p>
        A course teaches someone what questions to ask. A practitioner knows which answers matter
        for this client, right now, given what has happened in the last three sessions. That
        accumulated context, held by a person and applied with judgment, is not information. It is
        intelligence. The distinction matters because it determines which business model survives
        an economy where the information layer has been commoditised.
      </p>
      <p>
        If you have a real methodology with real results, you are not the one who got replaced.
        You are the one getting stronger. The more specific and complex the situation, the less
        AI can substitute for it. That is a defensible position. Selling information when AI gives
        it away is a pricing competition no human wins. Building a practice around applied
        intelligence in context is a market the practitioner owns by definition.
      </p>
      <p>
        This is what{' '}
        <a
          href="/blog/intelligence-as-a-service"
          className="underline underline-offset-2 hover:text-gold transition-colors"
        >
          Intelligence as a Service
        </a>{' '}
        means in practice: the methodology is the product, the AI is the delivery mechanism, and
        the practitioner&rsquo;s judgment is the layer no system replaces.
      </p>

      <DefinitionBox
        term="Intelligence as a Service (IaaS)"
        definition="A delivery model where a practitioner's methodology is loaded into a platform once and applied to each client in an isolated workspace. The practitioner's expertise is the product. The AI is the delivery mechanism. Applied expertise at scale, without losing the specificity that makes services valuable."
      />

      <h2 id="the-new-economics">How do the economics of services change in an AI era?</h2>
      <p>
        The course model at its best: one-to-many information delivery at high margin. The structural
        weakness: completion rates below 10%, commoditisation risk, and constant pressure to create
        new content to justify the next renewal. Its defensibility came from the practitioner&rsquo;s
        time to build it. AI eliminates that defensibility.
      </p>
      <p>
        The service model had the opposite problem. High value per client. Hard ceiling on how many
        clients you could actually serve. Your presence was required for every unit of delivery.
        You could not scale without hiring a team, which just moved the bottleneck. AI changes
        that constraint.
      </p>
      <blockquote>
        <p>
          &ldquo;Scaling services and client-based businesses used to be hard or nearly impossible
          without a big team and lots of complexity. For the first time ever, that&rsquo;s not the
          case. AI has changed that. We now have Intelligence as a Service.&rdquo;
        </p>
        <footer>Josh Forti, Founder, Client Intelligence</footer>
      </blockquote>
      <p>
        Here&rsquo;s the shift. Courses: information delivery faces zero-cost competition. That
        is permanent. Services: the practitioner had to be present for every unit of delivery.
        That is now solvable. Load your methodology into a platform once. Apply it to each client
        in their own isolated workspace. Deliver at volume without rebuilding context from scratch
        for every engagement.
      </p>
      <p>
        The practitioners who see this clearly are not choosing between scale and quality. They are
        building a structure where both exist at once. That was not possible before AI-native service
        delivery existed. It is now.{' '}
        <a
          href="/blog/how-to-scale-consulting-without-hiring"
          className="underline underline-offset-2 hover:text-gold transition-colors"
        >
          What that looks like in implementation
        </a>{' '}
        is a separate question. The economics are the starting point.
      </p>

      <h2 id="how-to-position-for-this">How to build a service practice AI makes stronger</h2>
      <p>
        Three shifts. Each one is a frame change, not a tactic.
      </p>
      <p>
        <strong>From teaching to applying.</strong> The deliverable is not the framework. The
        deliverable is the framework applied to the client&rsquo;s situation. That is a different
        product entirely. It cannot be pre-recorded, replaced by a chatbot, or undercut by a
        competitor with better production values. It requires your methodology meeting a specific
        client&rsquo;s specific context. Anything you can teach in a module, AI can deliver in
        a prompt. What AI cannot deliver is the application in context. That is the product.
        Stop selling the map. Start selling the navigation.
      </p>
      <p>
        <strong>From broad to specific.</strong> Courses survive at scale by appealing to the widest
        possible audience: broad topics, general frameworks, results that technically apply to everyone
        and therefore fit no one precisely. Services survive by serving a narrowly defined client at
        a level of specificity no course can match. Specialisation is the structural defence against
        AI substitution. The more specific and contextual the expertise, the less any general tool
        can substitute for it. Niching down used to feel like leaving money on the table. In an AI
        economy, it is the only position that holds.
      </p>
      <p>
        <strong>From information to outcomes.</strong> Clients who buy courses are buying information
        and hoping it leads to outcomes. Clients who hire practitioners are buying outcomes directly.
        Pricing based on outcomes, not hours and not modules, is the most defensible position in an
        AI economy. It makes the result the product, not the content that gestures toward it. It also
        changes the conversation from &ldquo;how much does this cost&rdquo; to &ldquo;what is the
        result worth.&rdquo; That is a better conversation to be in.
      </p>

      <PexelsImage
        src={img3Src}
        alt="Robotic arm extending coffee to a man reviewing documents — AI assisting the human expert, not replacing their judgment"
        photographer="Pavel Danilyuk"
        photographerUrl="https://www.pexels.com/@pavel-danilyuk"
        pexelsUrl="https://www.pexels.com/photo/8439174/"
      />

      <h2 id="who-this-applies-to">Who this applies to and who should not pivot yet</h2>
      <p>
        Most people want to skip this section. That is exactly why it is here.
      </p>
      <p>
        This argument works for practitioners with a documented, proven methodology. If you are a
        consultant, coach, or agency owner with a framework that has produced consistent results
        across multiple clients, you are already in the position the market is moving toward. AI
        makes your defensibility clearer and your delivery more scalable. The shift is in your favour.
      </p>
      <p>
        You should not pivot to services if:
      </p>
      <p>
        <strong>You do not yet have a proven methodology.</strong> Services built on untested
        frameworks produce worse outcomes than courses, not better. Courses can be padded with
        volume and production value. A consulting engagement either delivers results or it does
        not. If you cannot point to consistent outcomes across several clients, the methodology is
        not ready. Do not pivot until it is.
      </p>
      <p>
        <strong>Your expertise is primarily in domains where AI already performs well.</strong>{' '}
        General productivity frameworks, broad business advice, generic marketing playbooks: these
        are areas where AI produces material of comparable quality at zero cost. The services
        advantage holds where application requires accumulated judgment that general tools cannot
        replicate. If the work is primarily procedural and information-dense, the service model
        faces the same commodity pressure courses do.
      </p>
      <p>
        <strong>You are switching to escape a struggling course business.</strong> Services require
        client acquisition, delivery infrastructure, and consistent results. Pivoting because course
        sales have slowed does not resolve the underlying problem if that problem is the offer, the
        positioning, or the methodology itself. Services amplify a strong offer. They do not rescue
        a weak one.
      </p>
      <p>
        <strong>You primarily want scale without client relationships.</strong> Services are
        relationship-intensive by design. A practitioner who wants arms-length, asynchronous delivery
        to a large audience may find that the course model, even under pressure, is still the better
        fit. The AI era does not make every business model worse. It makes the information-only model
        harder to defend. That is not the same thing.
      </p>
      <p>
        The practitioners who benefit from this shift are those who are already good at what they do.
        AI gives them a structural advantage they did not have before. It does not create a path for
        practitioners who are not yet good enough to compete. The market rewards expertise. You have
        to have it first. Everything else is noise.
      </p>

      <PexelsImage
        src={img4Src}
        alt="Neural network light visualization from Google DeepMind — the AI architecture separating services that scale from courses that stagnate"
        photographer="Google DeepMind"
        photographerUrl="https://www.pexels.com/@googledeepmind"
        pexelsUrl="https://www.pexels.com/photo/17483867/"
      />

      <p>
        <a href="/" className="underline underline-offset-2 hover:text-gold transition-colors">
          Client Intelligence
        </a>{' '}
        is the applied intelligence platform built for practitioners who are ready to structure
        their methodology as a scalable delivery system.
      </p>
      <p>
        For more on how service practices are being built in an AI economy, see the{' '}
        <a href="/blog" className="underline underline-offset-2 hover:text-gold transition-colors">
          Client Intelligence blog
        </a>
        .
      </p>

    </div>
  )
}

export const post: PostEntry = {
  images: {
    hero: {
      src: heroSrc,
      alt: 'Minimalist robotic hand reaching on a white background — precision and repeatability, the defining traits of services that beat courses in the AI era',
      width: 940,
      height: 627,
      photographer: 'Tara Winstead',
      photographerUrl: 'https://www.pexels.com/@tara-winstead',
      pexelsUrl: 'https://www.pexels.com/photo/8386358/',
    },
  },
  toc: [
    { id: 'what-ai-changed', label: 'What did AI actually change about information delivery?' },
    { id: 'why-courses-are-losing-ground', label: 'Why the course model is losing ground' },
    { id: 'what-ai-cannot-replace', label: 'Can AI replace an experienced consultant or coach?' },
    { id: 'the-services-advantage', label: 'What applied expertise offers that AI cannot replicate' },
    { id: 'the-new-economics', label: 'How do the economics of services change in an AI era?' },
    { id: 'how-to-position-for-this', label: 'How to build a service practice AI makes stronger' },
    { id: 'who-this-applies-to', label: 'Who this applies to and who should not pivot yet' },
    { id: 'faq', label: 'Frequently asked questions' },
  ],
  faq: [
    {
      q: 'Why do services beat courses in the AI era?',
      a: 'Because AI delivers information cheaply and reliably. Courses are built on information delivery. The structural advantage courses had, low marginal cost per additional buyer, now belongs to AI, which has a lower cost floor than any course subscription. Services are built on applied expertise in context. That is the one thing AI cannot substitute for, which means the market is moving toward the stronger model.',
    },
    {
      q: 'Are online courses becoming obsolete because of AI?',
      a: 'Not obsolete, but structurally disadvantaged. AI can now produce and deliver information at near-zero cost across most domains. Courses that sold primarily on information delivery, frameworks, step-by-step systems, general principles, face direct competition from tools that do the same thing faster and cheaper. Courses with strong community components, live application, or genuine practitioner involvement are in a different category, but even those face pressure from services that deliver applied expertise directly.',
    },
    {
      q: 'Can AI replace an experienced consultant or coach?',
      a: 'Research from the National Bureau of Economic Research found that AI-based tools produce significant productivity gains for novice workers (around 34%) while having minimal impact on experienced practitioners. AI raises the floor. It does not raise the ceiling. The reason is structural: experienced practitioners are applying accumulated judgment to context, not delivering information. Those are different products. AI can substitute for the first. It cannot substitute for the second.',
    },
    {
      q: 'What types of services survive AI disruption?',
      a: 'Services built around applied methodology in specific client contexts. The more the work requires accumulated judgment: reading a specific situation, knowing which of several viable paths actually fits this client, recognising patterns from prior engagements. The less AI can substitute for it. General, information-dense, or procedural services face the same commoditisation pressure as courses. Specific, judgment-intensive, outcome-focused services do not.',
    },
    {
      q: 'Should I pivot from selling courses to selling services?',
      a: 'Only if you have a proven methodology. The pivot makes sense when your framework has produced consistent results across multiple clients and your current bottleneck is delivery capacity, not demand or methodology gaps. If the reason your courses are struggling is the offer or the market, pivoting to services does not fix that. It changes the format while leaving the underlying problem unchanged.',
    },
    {
      q: 'How does Intelligence as a Service fit into this?',
      a: 'Intelligence as a Service is the delivery model that resolves the historical trade-off in services: applied expertise at volume without losing the specificity that makes services valuable. Your methodology is loaded into a platform once and applied to each client in an isolated workspace. The scale advantage courses had, one methodology and many buyers, now belongs to service practitioners with a systematised delivery layer.',
    },
    {
      q: 'Who should not pivot from courses to services?',
      a: 'Practitioners without a proven methodology: services amplify results, not intentions. Practitioners in domains where AI already performs well on the core tasks: if your expertise is primarily in information-dense, procedural work, the services model faces the same commodity pressure courses do. And practitioners who are pivoting because courses are underperforming rather than because services represent a genuine step up in what they offer.',
    },
  ],
  Body: PostBody,
}
