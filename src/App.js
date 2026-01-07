import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, FileText, Gem, Globe, Activity, Search, Cpu, Shield, Database, Lock, AlertCircle } from 'lucide-react';

const App = () => {
  const [target, setTarget] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [showReport, setShowReport] = useState(false);

  const reconSteps = [
    { name: "Subdomain Discovery", icon: "🌐" }, { name: "Live Host Verification", icon: "🎯" },
    { name: "Port Scanning", icon: "🔓" }, { name: "Service Detection", icon: "🔬" },
    { name: "DNS Infrastructure", icon: "📡" }, { name: "Web App Mapping", icon: "🕸️" },
    { name: "Cloud Asset Discovery", icon: "☁️" }, { name: "Source Code Recon", icon: "💻" },
    { name: "Credential Breach", icon: "🔐" }, { name: "Initial Assessment", icon: "📊" },
    { name: "Vuln Scanning", icon: "🚨" }, { name: "Parameter Injection", icon: "💉" },
    { name: "Auth Assessment", icon: "🔑" }, { name: "Session Analysis", icon: "🍪" },
    { name: "Cross-Origin Testing", icon: "🔀" }, { name: "Service Exploitation", icon: "⚙️" },
    { name: "Encryption Analysis", icon: "🔒" }, { name: "Post-Exploitation", icon: "📈" },
    { name: "Data Exfiltration", icon: "📤" }, { name: "Executive Report", icon: "🏁" }
  ];

  useEffect(() => {
    let interval;
    if (isScanning && currentPhase < 19) {
      interval = setInterval(() => {
        setCurrentPhase(prev => prev + 1);
      }, 700);
    } else if (currentPhase === 19) {
      setTimeout(() => setShowReport(true), 1000);
    }
    return () => clearInterval(interval);
  }, [isScanning, currentPhase]);

  const handleStart = (e) => {
    e.preventDefault();
    if (!target) return;
    setIsScanning(true);
    setCurrentPhase(0);
    setShowReport(false);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#E7AC9A] font-sans selection:bg-[#E7AC9A] selection:text-black">
      <style>{`
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .shimmer-sweep {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-25deg);
          animation: sweep 4s infinite;
        }
        .logo-display {
          box-shadow: 0 0 40px rgba(231,172,154,0.3);
          border: 2px solid #E7AC9A;
        }
      `}</style>

      {/* GIANT LOGO HEADER */}
      <header className="bg-black border-b-2 border-[#E7AC9A] p-10 flex flex-col items-center justify-center gap-8 relative z-50">
        <div className="relative group">
          <div className="logo-display relative w-[500px] h-[180px] bg-white rounded-xl flex items-center justify-center p-8 overflow-hidden shadow-2xl">
             <img 
               src="/logo.png" 
               alt="ONYX" 
               className="max-w-full max-h-full object-contain relative z-20" 
               onError={(e) => { e.target.src = "https://www.onyxoffensive.com/favicon.ico"; }} 
             />
             <div className="shimmer-sweep z-30" />
             <Gem size={16} className="absolute top-3 left-3 text-[#E7AC9A]" />
             <Gem size={16} className="absolute top-3 right-3 text-[#E7AC9A]" />
             <Gem size={16} className="absolute bottom-3 left-3 text-[#E7AC9A]" />
             <Gem size={16} className="absolute bottom-3 right-3 text-[#E7AC9A]" />
          </div>
        </div>

        <div className="text-center">
            <h1 className="text-6xl font-light tracking-[0.5em] uppercase text-white leading-none">Wraith <span className="font-bold text-[#E7AC9A]">20</span></h1>
            <p className="text-[10px] tracking-[1em] text-[#E7AC9A] mt-4 uppercase font-black opacity-80 underline decoration-1 underline-offset-8">Offensive Intelligence Platform</p>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto p-12">
        {/* REFINED TARGET INPUT - SCALED DOWN */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0a0a0a] border-2 border-[#E7AC9A] rounded-xl p-6 flex items-center gap-6 shadow-2xl w-full max-w-2xl transition-all hover:border-white">
            <input 
              type="text" placeholder="ENTER TARGET DOMAIN..." value={target} onChange={(e) => setTarget(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-bold text-white outline-none placeholder:text-[#E7AC9A]/10 tracking-widest uppercase"
            />
            <button onClick={handleStart} className="bg-white text-black px-10 py-3 rounded font-black uppercase tracking-[0.3em] text-lg hover:bg-[#E7AC9A] transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Engage
            </button>
          </div>
        </div>

        {/* THE 20-PHASE GRID - FULL SCALE VISIBILITY */}
        {!showReport ? (
          <div className="grid grid-cols-5 gap-8">
            {reconSteps.map((step, i) => {
              const isActive = i === currentPhase;
              const isComplete = i < currentPhase;
              return (
                <div key={i} className={`
                  relative h-44 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden
                  bg-[url('https://www.transparenttextures.com/patterns/black-diamond.png')]
                  ${isActive ? 'bg-[#1a1a1a] border-white scale-110 z-20 shadow-[0_0_60px_#E7AC9A]' : 
                    isComplete ? 'bg-[#0a0a0a] border-[#E7AC9A] opacity-100 shadow-[inset_0_0_20px_black]' : 
                    'bg-black border-[#E7AC9A]/20 opacity-100'}
                `}>
                  <Gem size={14} className={`absolute top-3 left-3 ${isActive ? 'text-white' : 'text-[#E7AC9A] opacity-40'}`} />
                  <Gem size={14} className={`absolute bottom-3 right-3 ${isActive ? 'text-white' : 'text-[#E7AC9A] opacity-40'}`} />
                  
                  <span className="text-6xl mb-3 drop-shadow-[0_0_15px_rgba(231,172,154,0.5)]">{step.icon}</span>
                  <p className={`text-[11px] font-black uppercase tracking-widest text-center px-4 ${isActive ? 'text-white' : 'text-[#E7AC9A]'}`}>
                    {step.name}
                  </p>

                  {isActive && <div className="shimmer-sweep opacity-40" />}
                  {isComplete && <div className="absolute top-3 right-3"><CheckCircle2 size={18} className="text-white shadow-lg" /></div>}
                </div>
              );
            })}
          </div>
        ) : (
          /* FINAL EXECUTIVE REPORT */
          <div className="bg-black border-[8px] border-[#E7AC9A] rounded-[50px] p-20 shadow-[0_0_150px_rgba(231,172,154,0.3)] max-w-5xl mx-auto animate-in zoom-in-95 duration-700">
             <div className="flex justify-between border-b-4 border-[#E7AC9A] pb-12 mb-12">
                <div>
                  <h2 className="text-9xl font-black italic text-white uppercase tracking-tighter leading-none">INTEL</h2>
                  <p className="text-2xl font-bold tracking-[1em] text-[#E7AC9A] mt-4 opacity-80 uppercase">Full Chain Compromise</p>
                </div>
                <div className="bg-[#E7AC9A] text-black px-12 py-8 rounded-[30px] text-center shadow-2xl">
                    <p className="text-xs font-black uppercase mb-2 tracking-widest">RISK INDEX</p>
                    <p className="text-[10rem] font-black italic leading-none">9.8</p>
                </div>
             </div>
             <button onClick={() => window.print()} className="w-full bg-white text-black py-10 rounded-2xl font-black text-5xl uppercase tracking-[0.5em] shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:bg-[#E7AC9A] transition-all active:scale-95">
                DOWNLOAD PDF
             </button>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t-2 border-[#E7AC9A]/20 bg-black p-12 text-center opacity-40">
        <p className="text-xs font-black text-[#E7AC9A] tracking-[2em] uppercase">Wraith-20 // Onyx Offensive Private Asset</p>
      </footer>
    </div>
  );
};

export default App;