'use client';
import DockComp from '@/components/comps/DockComp';
import GlassyNav from '@/components/comps/GlassyNav';
import BlinkingDot from '@/components/comps/BlinkingDot';
import BorderGlow from '@/components/BorderGlow';
import Link from 'next/link';
import { CodeXmlIcon } from '@/components/ui/code-xml-icon';
import dynamic from 'next/dynamic'
import SpotlightCard from '@/components/SpotlightCard';
import { Infinity } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import LogoLoopComp from '@/components/comps/LogoLoopComp';
import ProfileCard from '@/components/ProfileCard';
import Footer from '@/components/comps/Footer';
import Card from '@/components/comps/Card';
import TASKORA from '@/public/Taskora.png'
import StackIcon from 'tech-stack-icons';
import { useTheme } from '@/context/Theme';
import Portfolio from '@/public/Portfolio.png';
import SmartStudyDashboard from "@/public/iFOCUSFLOW.png";
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

  const { theme } = useTheme();

  return (
    <>
      <GlassyNav />
      <DockComp />

      <section id='home' className='relative w-full min-h-screen'>
        <div className='absolute inset-0'>
          <DotField
            dotRadius={2}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={true}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="var(--accent-glow)"
          />
        </div>
        <div className='relative z-10 flex flex-col md:flex-row items-center justify-around gap-10 px-6 md:px-16 pt-28 pb-16 min-h-screen'>
          <div className='grid gap-6 w-full md:w-[49%]'>
            <div className='flex justify-center gap-3 bg-[var(--accent-glow)] rounded-xl border border-[var(--accent)] w-fit px-4 py-2 items-center'>
              <BlinkingDot width={10} height={10} />
              <p className='text-[var(--accent)] text-sm'>OPEN TO WORK</p>
            </div>
            <h1 className='overflow-hidden'>Yazeed <br /> <span className='text-[var(--accent)]'>Alkalmi.</span></h1>
            <p className='text-[var(--text)] text-[1.05rem] max-w-md'>Frontend developer building fast, beautiful, and purposeful web experiences with React, Next.js, and TypeScript.</p>
            <div className='flex flex-wrap gap-4'>
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
                className='transition-transform duration-300 cursor-pointer hover:-translate-y-2 h-[3.5rem] px-6 flex justify-center items-center'
              >
                <Link href="https://github.com/Zeedart" target='_blank' className='cursor-pointer text-[var(--text)]'>View my work →</Link>
              </BorderGlow>
              <div className='cursor-pointer flex rounded-lg px-6 h-[3.5rem] bg-[var(--bg-surface)] border border-transparent hover:border-[var(--accent-hover)] transition-all duration-300 justify-center items-center hover:-translate-y-2'>
                <Link href="mailto:yazeedkuantan@gmail.com" className='flex gap-3 text-[var(--text)] cursor-pointer'>Get in touch <MessageCircle height={20} width={20} /></Link>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='h-[.1px] w-16 bg-[var(--accent)]'></div>
              <span className='text-[var(--text)] text-sm tracking-widest'>SCROLL DOWN</span>
            </div>
          </div>

          <div className='flex justify-center'>
            <ProfileCard
              name="Yazeed Alkalmi"
              title=""
              handle="Zeedart"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/Yazeed_Alkalmi.png"
              showUserInfo={false}
              enableTilt={true}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, #523E5E8c 0%, #60A7D944 100%)"
            />
          </div>
        </div>
      </section>

      <section id="about" className='w-full px-6 md:px-16 py-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-around'>

        <div className='w-full lg:w-[45%] flex flex-col gap-6'>
          <div className='flex gap-4 items-center'>
            <span className='text-[var(--accent)] text-[0.9rem] font-semibold tracking-widest'>ABOUT ME</span>
            <div className='h-[.1px] w-16 bg-[var(--accent)]'></div>
          </div>
          <h2>Who I am</h2>
          <div className='flex flex-col gap-5'>
            <p className='text-[1.05rem] text-[var(--text-muted)] font-semibold'>
              I am a <span className='text-[var(--text)]'>frontend developer</span> who graduated in 2025 and immediately got to work, building applications that solve real problems.
            </p>
            <p className='text-[1.05rem] text-[var(--text-muted)] font-semibold'>
              My biggest project, <span className='text-[var(--text)]'>Taskora</span>, is a team task manager with real-time features, Kanban boards and workspace management. Built with Next.js and Supabase.
            </p>
            <p className='text-[1.05rem] text-[var(--text-muted)] font-semibold'>
              I'm driven by a love for <span className='text-[var(--text)]'>clean design, great UX, and writing code that actually works.</span> Looking for my first role where I can grow fast and contribute from day one.
            </p>
          </div>
        </div>
        {/* Stats */}
        <div className='grid grid-cols-2 gap-4 w-full lg:w-auto'>
          <SpotlightCard className='h-48 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] flex justify-center items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex flex-col items-center gap-3'>
              <h2 className='text-[var(--accent)]!'>3+</h2>
              <p className='text-[0.9rem] font-bold text-[var(--text-muted)] text-center'>Full stack projects deployed</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-48 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] flex justify-center items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex flex-col items-center gap-3'>
              <h2 className='text-[var(--accent)]!'>8+</h2>
              <p className='text-[0.9rem] font-bold text-[var(--text-muted)] text-center'>Months of building</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-48 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] flex justify-center items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex flex-col items-center gap-3'>
              <h2 className='text-[var(--accent)]!'>100%</h2>
              <p className='text-[0.9rem] font-bold text-[var(--text-muted)] text-center'>Self-Motivated</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className='h-48 border border-transparent transition-all duration-300 ease-in-out hover:border-[var(--accent-hover)] flex justify-center items-center' spotlightColor="rgba(143, 138, 255, .5)">
            <div className='flex flex-col items-center gap-3'>
              <Infinity height={55} width={55} className='text-[var(--accent)]' />
              <p className='text-[0.9rem] font-bold text-[var(--text-muted)] text-center'>Drive to keep learning</p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <div className='bg-[var(--bg-card)] w-[92%] my-10 mx-auto h-[.9px]' />

      <section id='projects' className='w-full px-6 md:px-16 py-10'>
        <div className='flex gap-4 items-center mb-4'>
          <span className='text-[var(--accent)] text-[0.9rem] font-semibold tracking-widest'>WORK</span>
          <div className='h-[.1px] w-16 bg-[var(--accent)]'></div>
        </div>
        <h2 className='mb-12'>Projects I've built</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Projects.map(project => (
            <Card key={project.id} image={project.image} ProjectName={project.ProjectName} ProjectDescription={project.ProjectDescription} LiveUrl={project.LiveUrl} githubUrl={project.githubUrl} TechStack={project.TechStack} />
          ))}
        </div>
        <Link href="https://github.com/Zeedart" target="_blank" className="w-full md:w-[60%] mx-auto font-semibold mt-10 flex items-center justify-center gap-2 text-[var(--accent)] transition duration-300 ease-in-out border border-[var(--border)] p-3 rounded-full bg-[var(--bg-transparent)] hover:bg-[var(--bg-card)] hover:scale-105">
          More projects on <StackIcon name="github" className="w-5 h-5" variant={theme} />
        </Link>
      </section>

      <div className='bg-[var(--bg-card)] w-[92%] my-10 mx-auto h-[.9px]' />

      <section id='skills' className='w-full px-6 md:px-16 py-10'>
        <div className='flex gap-4 items-center mb-4'>
          <span className='text-[var(--accent)] text-[0.9rem] font-semibold tracking-widest'>STACK</span>
          <div className='h-[.1px] w-16 bg-[var(--accent)]'></div>
        </div>
        <h2 className='mb-12'>What I work with</h2>
        <LogoLoopComp />
      </section>

      <Footer />
    </>
  );
}