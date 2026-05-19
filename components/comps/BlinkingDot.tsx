export default function BlinkingDot({
  width,
  height
}: {
  width: number,
  height: number
}) {
  return (
    <div 
      className="border rounded-xl bg-[var(--accent3)] animate-blink"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}