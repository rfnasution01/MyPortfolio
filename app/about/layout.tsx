import { Container } from "@/components/Container"
import AboutAside from "./aboutComponent/Aside"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Container
            style={{
              marginTop: '70px',
              display: 'grid',
              gridTemplateAreas: '"aside article article article article article article article article article article article"',
              gap: '10px',
              padding: '20px 30px'
            }}
        >
            <aside
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    textAlign: 'center',
                    gridArea: 'aside',
                    border: '1px solid blue'
                }}
            >
                <AboutAside />
            </aside>
            <article
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    textAlign: 'center',
                    gridArea: 'article',
                    border: '1px solid blue'
                }}
            >
                {children}
            </article>
        </Container>        
    )
}