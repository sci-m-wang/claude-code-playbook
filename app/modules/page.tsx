import { AccordionList } from '@/components/AccordionList'
import { SectionHeader } from '@/components/SectionHeader'
import { moduleCards } from '@/content/site'

export default function ModulesPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Core Modules"
        title="Clickable module breakdown"
        intro="Each module below is grounded in real source files and framed for learning: role, inputs, outputs, key files, and where to start reading."
      />
      <AccordionList items={moduleCards} />
    </>
  )
}
