import React from 'react'

interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  logo?: string
  logoAlt?: string
  navItems?: NavItem[]
  children?: React.ReactNode
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoAlt = 'Logo',
  navItems = [],
  children,
  className = '',
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        {logo && (
          <div className="header-logo">
            <img src={logo} alt={logoAlt} />
          </div>
        )}
        {navItems.length > 0 && (
          <nav className="header-nav">
            <ul className="nav-list">
              {navItems.map((item, idx) => (
                <li key={idx} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {children && <div className="header-actions">{children}</div>}
      </div>
    </header>
  )
}
