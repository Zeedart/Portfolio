import LogoLoop from '@/components/LogoLoop';
import StackIcon from 'tech-stack-icons';

const techLogos = [
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="nextjs2" /> , title: "Next.js", href: "https://nextjs.org" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="html5" />, title: "HTML5" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="css3" />, title: "CSS3" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="git" />, title: "Git", href: "https://git-scm.com/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="tailwindcss" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="js" />, title: "JavaScript"},
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="mysql" />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="python" />, title: "Python", href: "https://www.python.org/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="react" />, title: "React", href: "https://react.dev/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="typescript" />, title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="shadcnui" />, title: "Shadcn UI", href: "https://ui.shadcn.com/" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="supabase" />, title: "Supabase", href: "https://supabase.com/" },
];


export default function LogoLoopComp() {
  return (
    <div className="mt-20" style={{ position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#080c14"
        ariaLabel="Technology Stack"
      />
    </div>
  );
}