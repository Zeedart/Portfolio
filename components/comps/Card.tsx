import Image from 'next/image';
import Tag from './Tag';
import type { StaticImageData } from 'next/image';
import {SquareArrowOutUpRightIcon} from "@/components/ui/square-arrow-out-up-right-icon"
import {GithubIcon} from "@/components/ui/github-icon"
import Link from 'next/link';


export default function Card({image: image, ProjectName: ProjectName, ProjectDescription: ProjectDescription, LiveUrl: LiveUrl, githubUrl: githubUrl, TechStack: TechStack}: {
    image: StaticImageData, ProjectName: string, ProjectDescription: string, LiveUrl: string, githubUrl: string, TechStack: string[]
}) {
    return (
        <div className="bg-[var(--bg-surface)] h-[500px] border border-transparent hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)] hover:shadow-[0_0_40px_rgba(112,105,255,0.4)] transition duration-300 pb-13 w-[450px] rounded-2xl shadow-card">
            <div className="relative w-full h-[45%] rounded-t-2xl overflow-hidden">
                <Image src={image} alt="card" fill sizes="100%" className="object-cover" />
            </div>
            <div className="p-8 flex flex-col gap-4">
                <h4>{ProjectName}</h4>
                <p className="text-[var(--text-muted)]">{ProjectDescription}</p>
                <div className="flex gap-2">
                    {TechStack.map((techStack, index) => (
                        <Tag key={index} techStack={techStack} />
                    ))}
                </div>
                <div className="flex gap-5">
                    <div>
                        <Link href={LiveUrl} target="_blank" className="flex gap-2 items-center">
                            <SquareArrowOutUpRightIcon className="w-4 h-4 text-[var(--text-muted)]" />
                            <span className="text-[var(--text-muted)]">Live Demo</span>
                        </Link>
                    </div>
                    <div>
                        <Link href={githubUrl} target="_blank" className="flex gap-2 items-center">
                            <GithubIcon className="w-4 h-4 text-[var(--text-muted)]" />
                            <span className="text-[var(--text-muted)]">Github</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}