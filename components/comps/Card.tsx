"use client";

import Image from "next/image";
import Tag from "./Tag";
import type { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { SquareArrowOutUpRightIcon } from "@/components/ui/square-arrow-out-up-right-icon";
import { GithubIcon } from "@/components/ui/github-icon";
import Link from "next/link";

export default function Card({
    image,
    ProjectName,
    ProjectDescription,
    LiveUrl,
    githubUrl,
    TechStack,
}: {
    image: StaticImageData;
    ProjectName: string;
    ProjectDescription: string;
    LiveUrl: string;
    githubUrl: string;
    TechStack: string[];
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 },
            }}
            className="bg-(--bg-surface) min-h-125 w-full border border-transparent rounded-2xl shadow-card transition-colors duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)] hover:shadow-[0_0_40px_rgba(112,105,255,0.4)] flex flex-col"
        >
            {/* Image */}
            <div className="relative w-full h-[45%] rounded-t-2xl overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src={image}
                        alt={ProjectName}
                        fill
                        sizes="100%"
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-4">

                <h4>{ProjectName}</h4>

                <p className="text-(--text-muted)">
                    {ProjectDescription}
                </p>

                {/* Tech stack */}
                <div className="flex gap-2 flex-wrap">
                    {TechStack.map((techStack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.07,
                                duration: 0.4,
                            }}
                        >
                            <Tag techStack={techStack} />
                        </motion.div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-5">
                    <Link
                        href={LiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center group"
                    >
                        <SquareArrowOutUpRightIcon className="w-4 h-4 text-(--text-muted) transition-colors group-hover:text-[var(--accent)]" />
                        <span className="text-(--text-muted) transition-colors group-hover:text-[var(--accent)]">
                            Live Demo
                        </span>
                    </Link>

                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center group"
                    >
                        <GithubIcon className="w-4 h-4 text-(--text-muted) transition-colors group-hover:text-[var(--accent)]" />
                        <span className="text-(--text-muted) transition-colors group-hover:text-[var(--accent)]">
                            Github
                        </span>
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}