import type { ComponentType } from 'react'

export type PostImage = {
  src: string
  alt: string
  width: number
  height: number
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}

export type PostEntry = {
  images: { hero: PostImage }
  toc: Array<{ id: string; label: string }>
  faq: Array<{ q: string; a: string }>
  howToSteps?: Array<{ name: string; text: string }>
  Body: ComponentType
}

import { post as intelligenceAsAService } from './intelligence-as-a-service'
import { post as howToScaleConsultingWithoutHiring } from './how-to-scale-consulting-without-hiring'
import { post as whyServicesBeatCourses } from './why-services-beat-courses-in-the-ai-era'
import { post as bestAiToolsForConsultants2026 } from './best-ai-tools-for-consultants-2026'
import { post as howToTrainAiOnYourConsultingFramework } from './how-to-train-ai-on-your-consulting-framework'

export const postRegistry: Record<string, PostEntry> = {
  'intelligence-as-a-service': intelligenceAsAService,
  'how-to-scale-consulting-without-hiring': howToScaleConsultingWithoutHiring,
  'why-services-beat-courses-in-the-ai-era': whyServicesBeatCourses,
  'best-ai-tools-for-consultants-2026': bestAiToolsForConsultants2026,
  'how-to-train-ai-on-your-consulting-framework': howToTrainAiOnYourConsultingFramework,
}
