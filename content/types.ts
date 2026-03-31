export type Locale = 'en' | 'zh'

export type LocalizedText = {
  en: string
  zh: string
}

export type FileRef = {
  path: string
  note?: LocalizedText
}

export type ModuleCard = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  role: LocalizedText
  inputs: LocalizedText[]
  outputs: LocalizedText[]
  learningValue: LocalizedText[]
  firstRead: FileRef[]
  keyFiles: FileRef[]
}

export type FlowStep = {
  title: LocalizedText
  summary: LocalizedText
  files: FileRef[]
}

export type FlowCard = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  whyItMatters: LocalizedText
  steps: FlowStep[]
}

export type FeatureCard = {
  title: LocalizedText
  summary: LocalizedText
  whyDifferent: LocalizedText
  tradeoffs: LocalizedText[]
  evidence: FileRef[]
}

export type ReadingTrack = {
  slug: string
  title: LocalizedText
  audience: LocalizedText
  goal: LocalizedText
  steps: Array<{
    title: LocalizedText
    files: FileRef[]
    reason: LocalizedText
  }>
}

export type GlossaryTerm = {
  term: LocalizedText
  definition: LocalizedText
  whyItMatters: LocalizedText
  files: FileRef[]
}

export type TopFile = {
  path: string
  title: LocalizedText
  why: LocalizedText
  layer: LocalizedText
  tracks: Array<'starter' | 'runtime' | 'platform'>
  order: number
  readingTime: LocalizedText
}

export type DiagramAnchor = {
  title: LocalizedText
  summary: LocalizedText
  files: FileRef[]
}

export type DiagramView = {
  slug: string
  title: LocalizedText
  description: LocalizedText
  imageSrc: string
  anchors: DiagramAnchor[]
}
