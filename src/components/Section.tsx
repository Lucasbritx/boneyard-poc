import React from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  layout?: 'default' | 'grid' | 'flex'
  fullWidth?: boolean
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  layout = 'default',
  fullWidth = false,
}) => {
  const sectionClass = `section section--${layout} ${fullWidth ? 'section--full-width' : ''}`

  return (
    <section id={id} className={`${sectionClass} ${className}`}>
      {title && (
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section-content">{children}</div>
    </section>
  )
}
