import LogoLoop from '@/components/LogoLoop';
import StackIcon from 'tech-stack-icons';

const techLogos = [
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="nextjs2" /> , title: "React", href: "https://react.dev" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="html5" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="css3" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="git" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="tailwindcss" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="js" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="mysql" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="python" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="react" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="typescript" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <StackIcon variant='dark' style={{height: "70px", width: "70px"}} name="shadcnui" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function LogoLoopComp() {
  return (
    <div style={{ height: '300px', position: 'relative', overflow: 'hidden'}}>
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