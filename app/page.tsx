'use client';
import DockComp from '@/components/comps/DockComp';
import GlassyNav from '@/components/comps/GlassyNav';
import BlinkingDot from '@/components/comps/BlinkingDot';
import BorderGlow from '@/components/BorderGlow';
import dynamic from 'next/dynamic'
import { BowArrowIcon } from 'lucide-react';
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
        <div className='relative z-10 flex justify-around items-center h-full w-full'>
          <div className='grid gap-6'>
            <div className='flex ml-[16px] justify-center gap-3 bg-[var(--accent-glow)] rounded-xl border-[var(--accent)] border w-50 items-center p-4'>
              <BlinkingDot width={10} height={10} />
              <p className='text-[var(--accent)]'>OPEN TO WORK</p>
            </div>
            <h1 className='text-white'>Yazeed <br /> <span className='text-[var(--accent)]'>Alkalmi.</span></h1>
            <p className='text-white text-[1.15rem] w-[70%]'>Frontend developer building fast, beautiful, and purposeful web experiences with React, Next.js, and TypeScript.</p>
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
              className='w-[20%] h-[3rem] flex justify-center items-center'
            >
              <div className='flex justify-center items-center'>
                <button>View my work →</button>
              </div>
            </BorderGlow>
          </div>
          <div>
            <h2 className='text-white'>PFP</h2>
          </div>
        </div>
      </div>


      <div className="h-[200vh] flex items-start justify-center pt-40">
        <p className="text-white opacity-30 text-sm">scroll test</p>
      </div>
    </>
  );
}
