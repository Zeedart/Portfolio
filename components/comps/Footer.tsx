'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { GithubIcon } from '../ui/github-icon';
import { MailIcon } from '../ui/mail-icon';
import { ArrowUp } from 'lucide-react';
import { DownloadIcon } from '../ui/download-icon';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            id="contact"
            className="relative w-full min-h-[80vh] border-t mt-30 border-[var(--border)] bg-[var(--bg)]"
        >

            {/* Top glow line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent origin-center"
            />

            {/* CTA Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="flex flex-col items-center text-center px-6 sm:px-9 pt-16 sm:pt-20 pb-12 sm:pb-14 gap-5"
            >

                {/* Label */}
                <motion.span
                    variants={itemVariants}
                    className="text-[var(--accent)] text-[0.8rem] font-semibold tracking-[0.15em] uppercase"
                >
                    Open to work
                </motion.span>

                {/* Heading */}
                <motion.h2
                    variants={containerVariants}
                    className="leading-tight"
                >
                    <motion.span variants={itemVariants} className="block">
                        Let&apos;s build something
                    </motion.span>

                    <motion.span
                        variants={itemVariants}
                        className="block text-[var(--accent)]"
                    >
                        together.
                    </motion.span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-[var(--text-muted)] max-w-md text-[1rem]"
                >
                    I&apos;m actively looking for my first frontend role.
                    If you&apos;re hiring or want to collaborate — reach out.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col sm:flex-row justify-center w-full gap-3 sm:gap-4 mt-5"
                >

                    {/* Send Email */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="mailto:yazeedkuantan@gmail.com"
                            className="bg-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(112,105,255,1)] rounded-md h-[50px] w-full sm:w-fit px-6 flex items-center justify-center font-bold transition-all duration-300"
                        >
                            Send me an email
                            <MailIcon className="ml-2 w-6 h-6" />
                        </Link>
                    </motion.div>

                    {/* Download CV */}
                    <motion.div variants={itemVariants}>
                        <a
                            href="/YAZEED_ALKALMI_CV.pdf"
                            download
                            className="cursor-pointer w-full sm:w-fit rounded-md h-[50px] flex items-center justify-center px-6 font-bold bg-[var(--bg-card)] border border-transparent hover:border-[var(--accent-hover)] transition-all duration-300 ease-in-out hover:-translate-y-1"
                        >
                            Download CV
                            <DownloadIcon className="ml-2 w-6 h-6" />
                        </a>
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-[1px] bg-[var(--border)] origin-left"
            />

            {/* Bottom bar */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
                className="flex flex-col sm:flex-row items-center justify-between gap-5 px-6 sm:px-9 py-6"
            >

                {/* Logo */}
                <motion.span variants={itemVariants} className="p">
                    YZ<span className="text-[var(--accent)]">.</span>
                </motion.span>

                {/* Socials */}
                <motion.div
                    variants={containerVariants}
                    className="flex items-center justify-center gap-5"
                >
                    <motion.div variants={itemVariants} whileHover={{ y: -4, scale: 1.1 }}>
                        <Link
                            href="https://github.com/Zeedart"
                            target="_blank"
                            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                        >
                            <GithubIcon size={20} />
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ y: -4, scale: 1.1 }}>
                        <Link
                            href="mailto:yazeedkuantan@gmail.com"
                            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                        >
                            <MailIcon size={20} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Back to top */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-[0.8rem] tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                >
                    Back to top
                    <ArrowUp size={14} />
                </motion.button>

            </motion.div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center text-[var(--text-muted)] text-[0.75rem] px-6 pb-6"
            >
                © {new Date().getFullYear()} Yazeed Alkalmi — Built with Next.js & Tailwind CSS
            </motion.div>

        </footer>
    );
}