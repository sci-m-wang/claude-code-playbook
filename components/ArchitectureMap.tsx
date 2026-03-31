import { architectureLayers } from '@/content/site'

export function ArchitectureMap() {
  return (
    <div className="architecture-map">
      {architectureLayers.map((layer, index) => (
        <div className="architecture-card card" key={layer.title}>
          <div className="architecture-index">0{index + 1}</div>
          <div>
            <h3>{layer.title}</h3>
            <p>{layer.summary}</p>
            <div className="chip-row">
              {layer.files.map(file => (
                <span className="chip" key={file}>
                  {file}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
