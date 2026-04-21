import React from 'react'

interface CardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'hover' | 'elevated'
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  children,
  className = '',
  onClick,
  variant = 'default',
}) => {
  const cardClass = `card card--${variant}`

  return (
    <div className={`${cardClass} ${className}`} onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children && <div className="card-content">{children}</div>}
    </div>
  )
}
