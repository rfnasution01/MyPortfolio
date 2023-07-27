import { Section } from "@/components/Section";
import Banner from "./homeSegment/Banner";
import Project from "./homeSegment/Project";
import Experience from "./homeSegment/Experience";

export default function Page() {
  return (
    <div 
      style={{
        padding: 0
      }}
    >
      {/* --- Section Banner --- */}
      <Section
        style={{
          backgroundImage: 'linear-gradient(to top, rgba(81, 177, 92, 0.2), rgba(81, 177, 92, 0.2)), url("/background.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          padding: '0px',
          minHeight: '99vh',
          display: 'block',
        }}
      >
        <Banner />
      </Section>

      <Section
        style={{
          padding: '10vh 0px 10vh 0px',
        }}
      >
        <Experience />
      </Section>
      {/* --- Banner Project --- */}
      <Section
        style={{
          padding: '0px',
          alignItems: 'start',          
        }}
      >
       <Project />
      </Section>
    </div>
  )
}