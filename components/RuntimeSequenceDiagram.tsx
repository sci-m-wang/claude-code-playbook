'use client'

import { pickText, t } from '@/content/site'
import { usePreferences } from '@/components/PreferencesProvider'

const seq = {
  repl: t('REPL', 'REPL'),
  input: t('Input Processing', '输入处理'),
  query: t('Query Loop', 'Query 循环'),
  tools: t('Tool Runtime', '工具运行时'),
  storage: t('Session Storage', '会话存储'),
  user: t('User prompt', '用户输入'),
  normalize: t('normalize prompt / commands / attachments', '标准化提示词 / 命令 / 附件'),
  stream: t('stream model output', '流式处理模型输出'),
  call: t('dispatch tool calls', '分发工具调用'),
  persist: t('persist transcript + artifacts', '持久化对话与产物'),
  render: t('render updates back to UI', '回写并渲染到 UI'),
}

export function RuntimeSequenceDiagram() {
  const { locale } = usePreferences()
  const cols = [170, 350, 530, 710, 890]
  const heads = [seq.repl, seq.input, seq.query, seq.tools, seq.storage]
  return (
    <div className="card diagram-card">
      <svg viewBox="0 0 1040 420" className="diagram-svg" role="img" aria-label="Runtime sequence diagram">
        {heads.map((head, index) => (
          <g key={head.en}>
            <rect x={cols[index] - 70} y="28" width="140" height="48" rx="16" className="diagram-node" />
            <text x={cols[index]} y="58" textAnchor="middle" className="diagram-text small">{pickText(head, locale)}</text>
            <line x1={cols[index]} y1="88" x2={cols[index]} y2="380" className="diagram-dash" />
          </g>
        ))}

        <SequenceArrow x1={60} x2={170} y={110} label={pickText(seq.user, locale)} />
        <SequenceArrow x1={170} x2={350} y={150} label={pickText(seq.normalize, locale)} />
        <SequenceArrow x1={350} x2={530} y={190} label={pickText(seq.stream, locale)} />
        <SequenceArrow x1={530} x2={710} y={230} label={pickText(seq.call, locale)} />
        <SequenceArrow x1={710} x2={890} y={270} label={pickText(seq.persist, locale)} />
        <SequenceArrow x1={530} x2={170} y={320} label={pickText(seq.render, locale)} reverse />
      </svg>
    </div>
  )
}

function SequenceArrow({ x1, x2, y, label, reverse = false }: { x1: number; x2: number; y: number; label: string; reverse?: boolean }) {
  return (
    <g>
      <line x1={x1} x2={x2} y1={y} y2={y} className="diagram-line" />
      <polygon points={reverse ? `${x2},${y} ${x2 + 10},${y - 6} ${x2 + 10},${y + 6}` : `${x2},${y} ${x2 - 10},${y - 6} ${x2 - 10},${y + 6}`} className="diagram-arrow" />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" className="diagram-text small">{label}</text>
    </g>
  )
}
