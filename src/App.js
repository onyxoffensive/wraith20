import React, { useState, useEffect } from 'react';

const WraithDashboard = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([
    { id: 1, text: "INITIALIZING WRAITH-20 CORE...", type: "gold" },
    { id: 2, text: "BYPASSING LEGACY GATEKEEPER...", type: "teal" },
    { id: 3, text: "ROSE GOLD ENCRYPTION HANDSHAKE: SUCCESS", type: "rose" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 font-mono uppercase overflow-hidden">
      
      {/* 1. MASSIVE BACKGROUND LOGO (Watermark Effect) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img 
          src="/logo.png" 
          alt="Large Logo Watermark" 
          className="w-[80%] h-auto rotate-[-12deg]"
        />
      </div>

      {/* 2. MAIN CONTAINER (Thick Rose Gold Border) */}
      <div className="relative z-10 max-w-7xl mx-auto border-[6px] border-[#b76e79] h-[85vh] bg-black/60 backdrop-blur-sm flex flex-col shadow-[0_0_50px_rgba(183,110,121,0.2)]">
        
        {/* SCANLINE EFFECT */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(45,212,191,0.1)_50%,transparent_50%)] bg-[length:100%_8px] animate-[pulse_3s_infinite]"></div>

        {/* HEADER: MASSIVE BRAND BLOCK */}
        <div className="flex justify-between items-center px-10 py-8 border-b-[3px] border-[#d4af37]">
          <div className="flex items-center gap-8">
             {/* THE LOGO - SIZED UP */}
            <img src="/logo.png" alt="Onyx Logo" className="h-24 w-24 object-contain shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter text-[#2dd4bf] glow-teal">WRAITH-20</h1>
              <p className="text-sm text-[#b76e79] tracking-[0.5em] font-bold">OFFENSIVE SYSTEMS DIVISION</p>
            </div>
          </div>
          <div className="text-right">
            <div className="px-4 py-2 border-[2px] border-[#d4af37] text-[#d4af37] font-black text-xl">
              SECURE_LINK: ACTIVE
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden">
          
          {/* TERMINAL: THICK LEFT MARGIN */}
          <div className="col-span-8 p-10 border-r-[2px] border-white/10 bg-black/40 overflow-y-auto">
            {logs.map(log => (
              <div key={log.id} className="mb-4 text-lg font-bold tracking-tight">
                <span className="text-[#2dd4bf] mr-4">▶</span>
                <span className={
                  log.type === 'gold' ? 'text-[#d4af37]' : 
                  log.type === 'rose' ? 'text-[#b76e79]' : 'text-white/80'
                }>
                  {log.text}
                </span>
              </div>
            ))}
            <div className="w-4 h-6 bg-[#2dd4bf] animate-ping mt-4"></div>
          </div>

          {/* SIDEBAR: DATA VISUALS */}
          <div className="col-span-4 p-8 flex flex-col gap-8 bg-black/20">
            <div className="space-y-2">
              <h3 className="text-xs text-[#b76e79] font-black">CORE_PENETRATION_PROTOCOL</h3>
              <div className="h-8 w-full border-[2px] border-white/20 p-1">
                <div 
                  className="h-full bg-[#2dd4bf] shadow-[0_0_20px_#2dd4bf] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between font-black text-[#2dd4bf]">
                <span>LVL_04</span>
                <span>{progress}%</span>
              </div>
            </div>

            <div className="border-[3px] border-[#d4af37]/20 p-6 flex-1">
              <h3 className="text-xs text-white/40 mb-6">TARGET_VULNERABILITIES</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-[#b76e79] font-bold">COBOL_LOGIC_BYPASS</span>
                  <span className="text-xs text-white/40 italic">DETECTED</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-[#d4af37] font-bold">MIPS_OVERFLOW</span>
                  <span className="text-xs text-white/40 italic">READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="h-12 bg-[#b76e79] flex items-center px-10 justify-between">
          <span className="text-black font-black italic tracking-widest text-sm">CONFIDENTIAL PRECISE OFFENSIVE</span>
          <div className="flex gap-10">
            <span className="text-black/60 font-bold text-xs">ONYX_OFFENSIVE_UNIT_20</span>
            <span className="text-black font-black text-xs">SYS_TIME: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WraithDashboard;
