import { Container } from '@/components/Container'
import { InlineCode } from '@/components/InlineCode'
import { Section } from '@/components/Section'
import { Subtitle } from '@/components/Subtitle'
import { H1 } from '@/components/headings'
import React from 'react'

const About = () => {
  return (
    <Section 
      style={{
        paddingTop: '56px',
        border: '1px solid red'
      }}
    >
      <Container center>
        <H1>
          <span>This about</span>{" "}
        </H1>
        <Subtitle>
          Get started by editing <InlineCode>pages/index.tsx</InlineCode>
        </Subtitle>
      </Container>
    </Section>
  )
}

export default About
