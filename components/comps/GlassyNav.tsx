"use client"
import GlassSurface from '@/components/GlassSurface';
import { SendIcon } from '../ui/send-icon';
import { BrainIcon } from '../ui/brain-icon';
import { RocketIcon } from '../ui/rocket-icon';
import { InfoIcon } from '../ui/info-icon';
import type { NavItem } from '@/data_types/types';


const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
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
  greenOffset={10}
  blueOffset={20}
  brightness={50}
  blur={11}
  opacity={0.81}
  mixBlendMode="screen"
  className=''
>
  <div className="grid grid-cols-3 items-center w-full px-6">
  <h4 className='font-extrabold'>YZ<span className='text-[var(--accent)]'>.</span></h4>
  <ul className='flex gap-4 justify-center'>
    {navItems.map((item, index) => (
      <li key={index} className="flex items-center justify-center text-[16px] px-4 py-2 text-white cursor-pointer hover:text-[var(--accent)] rounded-full transition-colors duration-300">
        {item.label}
      </li>
    ))}
  </ul>
  <div/> {/* empty right column to balance */}
</div>
</GlassSurface>
        </div>
    )
}