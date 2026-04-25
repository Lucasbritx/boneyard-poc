import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Header, Hero, Button, Section, Card, Grid } from './components'
import './App.css'
import './src/bones/registry'

function App() {
  const [count, setCount] = useState(0)

  const navItems = [
    { label: 'Documentation', href: '#docs' },
    { label: 'Community', href: '#social' },
    { label: 'About', href: '#about' },
  ]

  return (
    <>
      <Header
        logo={viteLogo}
        logoAlt="Vite Logo"
        navItems={navItems}
      >
        <Button id='sign-in' variant="outline" size="small">Sign In</Button>
      </Header>

      <Hero
        title="Get started with your project"
        subtitle="Scaffold your components and integrate with Boneyard for skeleton loading"
        images={{
          main: heroImg,
          secondary: [reactLogo, viteLogo],
        }}
      >
        <Button id='count' onClick={() => setCount((count) => count + 1)} size="large">
          Count is {count}
        </Button>
      </Hero>

      <div className="ticks"></div>

      <Section id="next-steps" title="Features" subtitle="Explore what you can build">
        <Grid columns={2} gap={24} responsive>
          <Card
            icon={
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
              </svg>
            }
            title="Documentation"
            description="Your questions, answered"
            variant="hover"
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </Card>

          <Card
            icon={
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
            }
            title="Connect with us"
            description="Join the Vite community"
            variant="hover"
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </Card>
        </Grid>
      </Section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
