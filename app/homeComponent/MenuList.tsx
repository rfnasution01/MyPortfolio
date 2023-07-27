'use client'

import React, { useState } from 'react'
import { menuNavbar } from './MenuNavbar'
import { H4 } from '@/components/headings'
import { Link } from '@/components/Link'
import { usePathname } from 'next/navigation'

interface IsMobileProps {
    isMobile: boolean;
}

const MenuList : React.FC<IsMobileProps> = ({isMobile}) => {
    const [isHover, setIsHover] = useState(false);
    const [id, setId] = useState(null);
    const pathname = usePathname();

    const pathArray = pathname?.split('/') ?? [];
    const path = pathArray[1] ?? null;

    const handleMouseEnter = (item: any) => {
        setId(item);
        setIsHover(true);
    };

    const handleMouseLeave = (item: any) => {
        setId(item);
        setIsHover(false);
    };

    return (
        <nav 
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >   
            {menuNavbar.map((menu, idx) => (
                <Link
                    key={idx}
                    href={menu.links}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(id)}
                    style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    margin: '8px',
                    color:
                        `/${path}` === menu.links
                        ? isMobile ? '#fff': '#5c5c5c'
                        : idx === id && isHover
                        ? isMobile ? '#fff': '#5c5c5c'
                        : isMobile ? '#bfbfbf': '#bfbfbf',
                    }}
                >
                    <H4>{menu.name}</H4>
                </Link>
            ))}
        </nav>
    )
}

export default MenuList
