import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  images?: {
    main?: string
    secondary?: string[]
  }
  children?: React.ReactNode
  className?: string
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  images,
  children,
  className = '',
}) => {
  return (
    <section className={`hero-section ${className}`}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
      {images && (
        <div className="hero-images">
          {images.main && <img src={images.main} alt="Hero" className="hero-main-image" />}
          {images.secondary && (
            <div className="hero-secondary-images">
              {images.secondary.map((img, idx) => (
                <img key={idx} src={img} alt={`Secondary ${idx}`} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
