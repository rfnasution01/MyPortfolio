'use client'

import React, { useState } from 'react'
import { listExperience } from './ListExperience'
import { H4 } from '@/components/headings'

const Experience = () => {
    const [isHover, setIsHover] = useState(false);
    const [id, setId] = useState(0);

    const hoverEnter = (id:any) => {
        setIsHover(true)
        setId(id)
    }

    const hoverLeave = (id:any) => {
        setIsHover(false)
        setId(id)
    }

    return (
        <article
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '20px',
            }}
        >
        {
            listExperience?.map((item, idx)=>(
                <div
                    onMouseEnter={()=>hoverEnter(idx)}
                    onMouseLeave={()=>hoverLeave(idx)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: isHover && id === idx ? 'scale(1.2)': 'scale(1)'
                    }}
                    key={idx}
                >
                    <img 
                        src={item.picture}
                        alt={item.title}
                        width={52}

                    />
                    <div
                        style={{
                            
                        }}
                    >
                        <H4
                            style={{
                                fontFamily: 'serif',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '20px',
                                lineHeight: '130%',
                                letterSpacing: '1px',
                                color: '#5c5c5c'
                            }}
                        >{item.title}</H4>
                        <H4
                            style={{
                                fontFamily: 'serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '130%',
                                letterSpacing: '1px',
                                color: '#5c5c5c'
                            }}
                        >{item.position}</H4>
                    </div>
                </div>
            ))
        }
        </article>
    )
}

export default Experience
