"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-lime-500/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-green-400/10 blur-[120px] animate-float-slow" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => (
          <path key={i} d={`M ${50 + i * 150} 100 Q ${80 + i * 150} 50 ${50 + i * 150} 0`} fill="none" stroke="#84CC16" strokeWidth="1" className="leaf-sway" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
      </svg>
    </div>
  );
}