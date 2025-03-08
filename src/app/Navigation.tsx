'use client';

import Link from 'next/link';
import { Zap, Users, Target, Award, Globe } from 'lucide-react';
import styles from './page.module.css';
import { useRef } from 'react';

export default function Navigation() {
    const navRef = useRef<HTMLUListElement>(null);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = navRef.current?.offsetHeight;
            if (!headerOffset) return;

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset * 2;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav ref={navRef}>
            <ul className={styles.nav}>
                <li><Link href="#home" onClick={(e) => handleNavClick(e, 'home')}><Zap size={18} /> Home</Link></li>
                <li><Link href="#about" onClick={(e) => handleNavClick(e, 'about')}><Users size={18} /> About</Link></li>
                <li><Link href="#services" onClick={(e) => handleNavClick(e, 'services')}><Target size={18} /> Services</Link></li>
                <li><Link href="#success" onClick={(e) => handleNavClick(e, 'success')}><Award size={18} /> Success Stories</Link></li>
                <li><Link href="#contact" onClick={(e) => handleNavClick(e, 'contact')}><Globe size={18} /> Contact</Link></li>
            </ul>
        </nav>
    );
} 