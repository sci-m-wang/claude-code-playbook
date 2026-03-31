import type { FileRef } from '@/content/types'

export function FileList({ items }: { items: FileRef[] }) {
  return (
    <ul className="file-list">
      {items.map(item => (
        <li key={`${item.path}-${item.note ?? ''}`}>
          <code>{item.path}</code>
          {item.note ? <span className="file-note"> — {item.note}</span> : null}
        </li>
      ))}
    </ul>
  )
}
