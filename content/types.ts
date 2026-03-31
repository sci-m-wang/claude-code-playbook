export type FileRef = {
  path: string
  note?: string
}

export type ModuleCard = {
  slug: string
  title: string
  summary: string
  role: string
  inputs: string[]
  outputs: string[]
  learningValue: string[]
  firstRead: FileRef[]
  keyFiles: FileRef[]
}

export type FlowStep = {
  title: string
  summary: string
  files: FileRef[]
}

export type FlowCard = {
  slug: string
  title: string
  summary: string
  whyItMatters: string
  steps: FlowStep[]
}

export type FeatureCard = {
  title: string
  summary: string
  whyDifferent: string
  tradeoffs: string[]
  evidence: FileRef[]
}

export type ReadingTrack = {
  slug: string
  title: string
  audience: string
  goal: string
  steps: Array<{
    title: string
    files: FileRef[]
    reason: string
  }>
}

export type GlossaryTerm = {
  term: string
  definition: string
  whyItMatters: string
  files: FileRef[]
}
