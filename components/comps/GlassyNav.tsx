"use client"
import { useEffect, useState } from 'react';
import GlassSurface from '@/components/GlassSurface';
import BlinkingDot from '@/components/comps/BlinkingDot'
import ToggleTheme from '@/components/comps/ToggleTheme';
import type { NavItem } from '@/data_types/types';


const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];


export default function GlassyNav() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('[id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // 0.5 = 50% of section visible to trigger

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);


  return (
    <div className="fixed flex justify-center top-4 left-0 right-0 z-50">
      <GlassSurface
        width={800}
        height={50}
        borderRadius={50}
        backgroundOpacity={0.92}
        saturation={1}
        borderWidth={0.07}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
        brightness={50}
        blur={11}
        opacity={0.81}
        mixBlendMode="screen"
        className='border-x-2 border-[var(--accent)] '
      >
        <div className="grid grid-cols-3 items-center w-full px-6">
          <h4 className='font-extrabold'>YZ<span className='text-[var(--accent)]'>.</span></h4>
          <ul className='flex gap-4 justify-center'>
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2 justify-center text-[16px] px-4 py-2 text-[var(--text)] font-bold cursor-pointer hover:text-[var(--accent)] rounded-full transition-colors duration-300">
                {activeSection === item.href.replace('#', '') && (
                  <BlinkingDot width={10} height={10} />
                )}
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ToggleTheme />
        </div>
      </GlassSurface>
    </div>
  )
}