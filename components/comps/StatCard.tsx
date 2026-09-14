type StatCardProps = {
  value: string;
  label: string;
  icon: React.JSX.Element;
  className?: string;
};


export default function StatCard({ value, label, icon, className = "" }: StatCardProps) {
  return (
    <div
  className={`group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] ${className}`}
>
      {/* Background glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7167ff]/10 blur-3xl transition-all duration-500 group-hover:bg-[#7167ff]/20" />

      {/* Icon */}
      <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#7167ff]/15 text-xl text-[#7167ff] ring-1 ring-[#7167ff]/20">
        {icon}
      </div>

      {/* Content */}
      <div className="relative">
        <div className="text-4xl font-bold tracking-tight text-(--text)">
          {value}
        </div>

        <p className="mt-3 text-lg leading-6 text-(--text-muted)">
          {label}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7167ff] to-transparent transition-all duration-500 group-hover:w-full" />
    </div>
  );
}