'use client';

import { InfoIcon } from "@/components/ui/info-icon";
import { RocketIcon } from "@/components/ui/rocket-icon";
import {HouseIcon} from "@/components/ui/house-icon";
import { SendIcon } from "@/components/ui/send-icon";
import Dock from '@/components/Dock';

export default function DockComp() {

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const items = [
        {
            icon: <HouseIcon size={18} />,
            label: 'Home',
            onClick: () => scrollToSection('home'),
            className: 'bg-[var(--bg-card)]',
        },
        {
            icon: <InfoIcon size={18} />,
            label: 'About',
            onClick: () => scrollToSection('about'),
            className: 'bg-[var(--bg-card)]',
        },
        {
            icon: <RocketIcon size={18} />,
            label: 'Projects',
            onClick: () => scrollToSection('projects'),
            className: 'bg-[var(--bg-card)]',
        },
        {
            icon: <SendIcon size={18} />,
            label: 'Contact',
            onClick: () => scrollToSection('contact'),
            className: 'bg-[var(--bg-card)]',
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 w-full flex justify-center md:hidden">

            <div
                className="w-[85%] rounded-t-xl backdrop-blur-sm"
                style={{ background: 'var(--bg-surface)' }}
            >
                <Dock
                    items={items}
                    baseItemSize={60}
                    panelHeight={61}
                    dockHeight={33}
                    spring={{
                        mass: 0,
                        stiffness: 150,
                        damping: 12,
                    }}
                    className="border-none w-full items-center justify-center"
                />
            </div>

        </div>
    );
}