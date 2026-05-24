'use client';
import DockComp from '@/components/comps/DockComp';
import GlassyNav from '@/components/comps/GlassyNav';
import BlinkingDot from '@/components/comps/BlinkingDot';
import BorderGlow from '@/components/BorderGlow';
import image from "@/public/Test.jpg"
import Image from 'next/image';
import dynamic from 'next/dynamic'
import SpotlightCard from '@/components/SpotlightCard';
import { Infinity } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import LogoLoopComp from '@/components/comps/LogoLoopComp';
import Footer from '@/components/comps/Footer';
import Card from '@/components/comps/Card';
import TASKORA from '@/public/Taskora.png'
import StackIcon from 'tech-stack-icons';
import Portfolio from '@/public/Portfolio.png';
import SmartStudyDashboard from "@/public/iFOCUSFLOW.png";
import {MailIcon} from '@/components/ui/mail-icon';
import { GithubIcon } from '@/components/ui/github-icon';
const DotField = dynamic(() => import('@/components/DotField'), { ssr: false })


export default function Home() {

  const Projects = [
    {
      id: 1,
      image: Portfolio,
      ProjectName: "Portfolio",
      ProjectDescription: "A design-forward personal portfolio with dark/light mode, smooth animations, and a focus on visual polish and performance.",
      LiveUrl: "https://portfolio-ten.vercel.app/",
      githubUrl: "https://github.com/Zeedart/Portfolio",
      TechStack: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      id: 2,
      image: TASKORA,
      ProjectName: "Taskora",
      ProjectDescription: "Taskora helps teams organize their work into projects and tasks — with a clean kanban board, real-time activity logs, and workspace-based collaboration.",
      LiveUrl: "https://team-task-manager-steel-seven.vercel.app/",
      githubUrl: "https://github.com/Zeedart/Team-Task-Manager",
      TechStack: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      id: 3,
      image: SmartStudyDashboard,
      ProjectName: "FocusFlow",
      ProjectDescription: "A personalized, interactive dashboard designed to help students organize their academic life, manage tasks, track progress, and maintain a balanced study schedule.",
      LiveUrl: "https://i-focus-flow.netlify.app/",
      githubUrl: "https://github.com/Zeedart/Smart-Study-Dashboard",
      TechStack: ["React", "VanilaJS", "Bootstrap"]
    }
  ]


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
            <div className='flex justify-center gap-3 bg-[var(--accent-glow)] rounded-xl border-[var(--accent)] border w-50 items-center'>
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
      <div className='h-[80vh] w-screen justify-around flex items-center'>
        <div className='w-[50%] h-[65%] grid'>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-4 items-center'>
              <span className='text-[var(--accent)] text-[1rem] font-semibold'>ABOUT ME</span>
              <div className='h-[.1px] w-25 bg-[var(--accent)]'></div>
            </div>
            <h2>Who I am</h2>
          </div>
          <div className='grid grid-cols-1 w-full items-center'>

            <p className='text-[1.10rem] text-[var(--text-muted)] font-semibold'>I am a <span className='text-white font-semibold'>frontend developer</span> who graduated in 2025 and immediately got to work, building applications that solve real problems.</p>

            <p className='text-[1.10rem] text-[var(--text-muted)] font-semibold'>My biggest project, <span className='text-white font-semibold'>Taskora</span> is a team task manager that people can use together it has real-time features, Kanban boards and workspace management. I built it with Next.js and Supabase.</p>

            <p className='text-[1.10rem] text-[var(--text-muted)] font-semibold'>I'm driven by a love for <span className='text-white font-semibold'>clean design, great UX, and writing code that actually works.</span> I'm looking for my first professional role where I can grow fast and contribute from day one.</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 h-[70%] w-150'>
          <SpotlightCard className='h-55 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] justify-center flex items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex w-full flex-col items-center gap-5 justify-start'>
              <h2 className='text-[var(--accent)]!'>3+</h2>
              <p className='text-[1rem] font-bold text-[var(--text-muted)]'>Full stack projects deployed</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-55 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] justify-center flex items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex w-full flex-col items-center gap-5 justify-start'>
              <h2 className='text-[var(--accent)]!'>8+</h2>
              <p className='text-[1rem] font-bold text-[var(--text-muted)]'>Months of building projects</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-55 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] justify-center flex items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex w-full flex-col items-center gap-5 justify-start'>
              <h2 className='text-[var(--accent)]!'>100%</h2>
              <p className='text-[1rem] font-bold text-[var(--text-muted)]'>Self-Motivated</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-55 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] justify-center flex items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex w-full flex-col items-center gap-2 justify-start'>
              <h2 className='text-[var(--accent)]!'><Infinity height={70} width={70} /></h2>
              <p className='text-[1rem] font-bold text-[var(--text-muted)]'>Drive to keep learning</p>
            </div>
          </SpotlightCard>
        </div>
      </div>



      <div className='bg-[var(--bg-card)] w-[96%] my-10  mx-auto h-[.9px]' />



      <div className='min-h-[80vh] w-full p-9 overflow-visible'>
        <div className='flex gap-4 items-center mb-5'>
          <span className='text-[var(--accent)] text-[1rem] font-semibold'>WORK</span>
          <div className='h-[.1px] w-25 bg-[var(--accent)]'></div>
        </div>
        <h2>Projects I've built</h2>
        <div className='grid grid-cols-3 w-full gap-5 mt-20'>
          {Projects.map(project => (
            <Card key={project.id} image={project.image} ProjectName={project.ProjectName} ProjectDescription={project.ProjectDescription} LiveUrl={project.LiveUrl} githubUrl={project.githubUrl} TechStack={project.TechStack} />
          ))}
        </div>
        <button className="w-[80%] mx-auto block flex items-center justify-center gap-2 mt-9 text-[var(--accent)] transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] hover:scale-105">
          More projects on <StackIcon name="github" className="ml-1 w-6 h-6 pt-1" variant='dark' />
        </button>
      </div>

      <div className='bg-[var(--bg-card)] w-[96%] my-10  mx-auto h-[.9px]' />

      <div className='w-full p-9 overflow-visible'>
        <div className='flex gap-4 items-center mb-5'>
          <span className='text-[var(--accent)] text-[1rem] font-semibold'>STACK</span>
          <div className='h-[.1px] w-25 bg-[var(--accent)]'></div>
        </div>
        <h2>What I work with</h2>
        <LogoLoopComp />
      </div>

      <Footer />
    </>
  );
}
