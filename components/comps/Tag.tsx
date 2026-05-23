
export default function Tag( {techStack}: {techStack: string} ) {
    return (
        <div className="bg-[var(--accent-glow)] rounded-xl border-[var(--accent)] border-[0.1px] px-3">
            <p className="text-[var(--accent)] text-[14px]">{techStack}</p>
        </div>
    )
}