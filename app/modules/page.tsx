 'use client'

import { AccordionList } from '@/components/AccordionList'
import { SectionHeader } from '@/components/SectionHeader'
import { usePreferences } from '@/components/PreferencesProvider'
import { moduleCards, t } from '@/content/site'

export default function ModulesPage() {
  const { locale } = usePreferences()

  return (
    <>
      <SectionHeader
        eyebrow={t('Core Modules', '核心模块')}
        title={t('Clickable module breakdown', '可点击的模块拆解')}
        intro={t(
          'Each module below is grounded in real source files and framed for learning: role, inputs, outputs, key files, and where to start reading.',
          '下面每个模块都直接对应真实源码文件，并按学习视角组织：职责、输入输出、关键文件与起步阅读顺序。',
        )}
      />
      <div className="three-up">
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Best starting point' : '最佳起点'}</p>
          <h3>{locale === 'en' ? 'Bootstrap + Query' : 'Bootstrap + Query'}</h3>
          <p>{locale === 'en' ? 'If you only open two areas first, read bootstrap-runtime and query-engine.' : '如果只能先读两个区域，优先看启动路由与 query 引擎。'}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Best differentiator' : '最大差异点'}</p>
          <h3>{locale === 'en' ? 'Tool runtime + permissions' : '工具运行时 + 权限体系'}</h3>
          <p>{locale === 'en' ? 'Together they explain why Claude Code feels production-grade.' : '这两者结合起来，最能解释 Claude Code 为什么有产品级工程感。'}</p>
        </article>
        <article className="card">
          <p className="card-kicker">{locale === 'en' ? 'Advanced route' : '进阶路线'}</p>
          <h3>{locale === 'en' ? 'MCP + plugins + remote' : 'MCP + 插件 + 远程能力'}</h3>
          <p>{locale === 'en' ? 'These modules show the platform ambition of the project.' : '这几个模块最能体现项目的平台化野心。'}</p>
        </article>
      </div>
      <AccordionList items={moduleCards} />
    </>
  )
}
