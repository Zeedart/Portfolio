'use client';
import GlassSurface from '@/components/GlassSurface';
import { FloatingDock } from '@/components/ui/floating-dock';
import { InfoIcon } from "@/components/ui/info-icon";
import { RocketIcon } from "@/components/ui/rocket-icon";
import { BrainIcon } from "@/components/ui/brain-icon";
import { SendIcon } from "@/components/ui/send-icon";
import { IconNewSection } from "@tabler/icons-react";
import Dock from '@/components/Dock';




export default function DockComp() {
const items = [
    { icon: <InfoIcon size={18} />, label: 'Home', onClick: () => alert('Home!'), className: 'bg-[var(--bg-card)]' },
    { icon: <RocketIcon size={18} />, label: 'Archive', onClick: () => alert('Archive!'), className: 'bg-[var(--bg-card)]' },
    { icon: <BrainIcon size={18} />, label: 'Profile', onClick: () => alert('Profile!'), className: 'bg-[var(--bg-card)]' },
    { icon: <SendIcon size={18} />, label: 'Settings', onClick: () => alert('Settings!'), className: 'bg-[var(--bg-card)]' },
];
  return (
    <div className="fixed bottom-0 left-0 right-0 max-h-[65px] flex justify-center pb-4 md:hidden">
    
    <div 
      className="w-[85%] rounded-xl backdrop-blur-sm"
      style={{ background: 'var(--bg-surface)' }}
    >
      <Dock 
        items={items}
        baseItemSize={60}
        panelHeight={61}
        dockHeight={33}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
        className="border-none w-full items-center justify-center"
      />
    </div>
  </div>
  );
}
