'use client';

import Link from 'next/link';
import { GithubIcon } from '../ui/github-icon';
import { MailIcon } from '../ui/mail-icon';
import { ArrowUp } from 'lucide-react';
import { DownloadIcon } from '../ui/download-icon';

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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

            {/* CTA Section */}
            <div className="flex flex-col items-center text-center px-6 sm:px-9 pt-16 sm:pt-20 pb-12 sm:pb-14 gap-5">

                <span className="text-[var(--accent)] text-[0.8rem] font-semibold tracking-[0.15em] uppercase">
                    Open to work
                </span>

                <h2 className="leading-tight">
                    Let&apos;s build something<br />
                    <span className="text-[var(--accent)]">together.</span>
                </h2>

                <p className="text-[var(--text-muted)] max-w-md text-[1rem]">
                    I&apos;m actively looking for my first frontend role.
                    If you&apos;re hiring or want to collaborate — reach out.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center w-full gap-3 sm:gap-4 mt-5">

                    {/* Send Email */}
                    <Link
                        href="mailto:yazeedkuantan@gmail.com"
                        className="bg-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(112,105,255,1)] rounded-md h-[50px] w-full sm:w-fit px-6 flex items-center justify-center font-bold transition-all duration-300"
                    >
                        Send me an email
                        <MailIcon className="ml-2 w-6 h-6" />
                    </Link>

                    {/* Download CV */}
                    <a
                        href="/YAZEED_ALKALMI_CV.pdf"
                        download
                        className="cursor-pointer w-full sm:w-fit rounded-md h-[50px] flex items-center justify-center px-6 font-bold bg-[var(--bg-card)] border border-transparent hover:border-[var(--accent-hover)] transition-all duration-300 ease-in-out hover:-translate-y-1"
                    >
                        Download CV
                        <DownloadIcon className="ml-2 w-6 h-6" />
                    </a>

                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[var(--border)]" />

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-6 sm:px-9 py-6">

                {/* Logo */}
                <span className="p">
                    YZ<span className="text-[var(--accent)]">.</span>
                </span>

                {/* Socials */}
                <div className="flex items-center justify-center gap-5">

                    <Link
                        href="https://github.com/Zeedart"
                        target="_blank"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                    >
                        <GithubIcon size={20} />
                    </Link>

                    <Link
                        href="mailto:yazeedkuantan@gmail.com"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                    >
                        <MailIcon size={20} />
                    </Link>

                </div>

                {/* Back to top */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-[0.8rem] tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                >
                    Back to top
                    <ArrowUp size={14} />
                </button>

            </div>

            {/* Copyright */}
            <div className="text-center text-[var(--text-muted)] text-[0.75rem] px-6 pb-6">
                © {new Date().getFullYear()} Yazeed Alkalmi — Built with Next.js & Tailwind CSS
            </div>

        </footer>
    );
}