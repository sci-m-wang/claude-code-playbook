import { ReadingTracks } from '@/components/ReadingTracks'
import { SectionHeader } from '@/components/SectionHeader'
import { readingTracks } from '@/content/site'

export default function ReadingPathsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Reading Paths"
        title="Choose a source-reading route"
        intro="These tracks are tuned for different goals: orientation, runtime internals, and platform-level extensibility."
      />
      <ReadingTracks tracks={readingTracks} />
    </>
  )
}
