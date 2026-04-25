import React from 'react'

interface GridProps {
  children: React.ReactNode
  columns?: number
  gap?: number
  className?: string
  responsive?: boolean
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 16,
  className = '',
  responsive = true,
}) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  }

  const gridClass = `grid ${responsive ? 'grid--responsive' : ''} ${className}`

  return (
    <div className={gridClass} style={gridStyle}>
      {children}
    </div>
  )
}
