'use client'

import { Figure } from '@/components/Figure'
import { H2, H3, H4 } from '@/components/headings'
import React, { useState } from 'react'
import { listProject } from './ListDetailProfile'
import Image from 'next/image'

const Banner = () => {
  const [isHover, setIsHover] = useState(false);
  const [id, setId] = useState(0);

  const hoverEnter = (id:number) => {
    setIsHover(true)
    setId(id)
  }

  const hoverLeave = (id:number) => {
    setIsHover(false)
    setId(id)
  }

  return (
    <div 
      style={{
        paddingTop: '56px',
        paddingBottom: '56px',
        height: '79vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid red'
      }}
    >
      <Figure>
        <Image src="/profile.jpeg" alt="Rivai Fansuri Nasution" width={200} height={180} />
      </Figure>
      <H2
        style={{
          fontFamily: 'serif',
          fontStyle: 'normal',
          lineHeight: '130%',
          letterSpacing: '1px',
          color: '#5c5c5c',
          textAlign: 'center',
        }}
      >I&apos;m Rivai Fansuri Nasution</H2>
      <h3
        style={{
          margin: 0,
          fontFamily: 'serif',
          fontStyle: 'normal',
          lineHeight: '130%',
          color: '#808080',
        }}
      >Frontend Developer</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '20px'
        }}
      >
        {
          listProject?.map((item, idx)=>(
            <div
              onMouseEnter={()=>hoverEnter(idx)}
              onMouseLeave={()=>hoverLeave(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                minWidth: '100px',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'box-shadow 0.3s ease',
                boxShadow: isHover && idx === id ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
              key={idx}
            >
              <H3
                style={{
                  fontFamily: 'serif',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#333',
                }}
              >{item.count}</H3>
              <H4
                style={{
                  fontFamily: 'serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '130%',
                  color: '#333',
                }}
              >{item.desc}</H4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Banner
