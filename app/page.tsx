'use client';
import DockComp from '@/components/comps/DockComp';
import GlassyNav from '@/components/comps/GlassyNav';
import BlinkingDot from '@/components/comps/BlinkingDot';
import BorderGlow from '@/components/BorderGlow';
import image from "@/public/Test.jpg"
import Image from 'next/image';
import dynamic from 'next/dynamic'
import { MessageCircle } from 'lucide-react';
const DotField = dynamic(() => import('@/components/DotField'), { ssr: false })


export default function Home() {


  return (
    <>
      <GlassyNav />
      <DockComp />
      <div className='w-screen h-screen relative'>
        <div className='absolute inset-0'>
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="#120F17"
          />
        </div>
        <div className='relative z-10 flex items-center h-full w-full justify-around'>
          <div className='grid gap-7 w-[49%]'>
            <div className='flex justify-center gap-3 bg-[var(--accent-glow)] rounded-xl border-[var(--accent)] border w-50 items-center p-4'>
              <BlinkingDot width={10} height={10} />
              <p className='text-[var(--accent)]'>OPEN TO WORK</p>
            </div>
            <h1 className='overflow-hidden text-white'>Yazeed <br /> <span className='text-[var(--accent)]'>Alkalmi.</span></h1>
            <p className='text-white text-[1.15rem] w-[70%]'>Frontend developer building fast, beautiful, and purposeful web experiences with React, Next.js, and TypeScript.</p>
            <div className='w-[76%] flex flex-wrap gap-6'>
              <BorderGlow
                edgeSensitivity={0}
                glowColor="40 80 80"
                backgroundColor="#7069ff"
                borderRadius={22}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={20}
                animated
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className='w-[30%] transition-transform duration-300 cursor-pointer hover:-translate-y-2 h-[4rem] flex justify-center items-center'
              >
                <div className='flex justify-center items-center'>
                  <button className='cursor-pointer'>View my work →</button>
                </div>
              </BorderGlow>
              <div className='cursor-pointer flex w-[30%] rounded-lg h-[100%] bg-[var(--bg-surface)] 
  border-1 border-transparent 
  hover:border-[var(--accent-hover)] 
  transition-all duration-300 ease-in-out
  justify-center items-center hover:-translate-y-2'>
                <button className='flex gap-3 cursor-pointer'>Get in touch <MessageCircle height={20} width={20} /></button>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='h-[.1px] w-25 bg-[var(--accent)]'></div>
              <span className='text-[var(--text)]'>SCROLL DOWN</span>
            </div>
          </div>
          <div className='w-[20%] flex justify-center'>
            <Image className='border border-[var(--accent)] w-auto h-[23rem] rounded-full' src={image} alt='pfp' />
          </div>
        </div>
      </div>
      <div className="h-[200vh] flex items-start justify-center pt-40">
        <p className="text-white opacity-30 text-sm">scroll test</p>
      </div>
    </>
  );
}
