import React, { useState } from 'react';
import { Play, Download, Eye, AlertCircle, CheckCircle, Clock, Zap, Target, Shield, Code, Database, Lock, Activity } from 'lucide-react';

export default function Wraith20Scanner() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('automated');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [results, setResults] = useState(null);

  const phases = [
    { id: 1, name: 'Passive OSINT', icon: '🔍', time: '5s' },
    { id: 2, name: 'Subdomain Enumeration', icon: '🌐', time: '3s' },
    { id: 3, name: 'IP Space Mapping', icon: '🗺️', time: '8s' },
    { id: 4, name: 'Service Fingerprinting', icon: '🔬', time: '6s' },
    { id: 5, name: 'DNS Security Audit', icon: '📡', time: '4s' },
    { id: 6, name: 'Web Surface Crawling', icon: '🕸️', time: '7s' },
    { id: 7, name: 'Cloud Perimeter Discovery', icon: '☁️', time: '5s' },
    { id: 8, name: 'Leaked Source Recon', icon: '💻', time: '4s' },
    { id: 9, name: 'Credential Exposure', icon: '🔐', time: '3s' },
    { id: 10, name: 'Initial Attack Vector', icon: '📊', time: '2s' },
    { id: 11, name: 'Automated Fuzzing', icon: '🎯', time: '10s' },
    { id: 12, name: 'API Endpoint Analysis', icon: '🔌', time: '8s' },
    { id: 13, name: 'Auth Logic Testing', icon: '🔑', time: '5s' },
    { id: 14, name: 'Session Token Audit', icon: '🍪', time: '4s' },
    { id: 15, name: 'CORS Configuration', icon: '🔀', time: '3s' },
    { id: 16, name: 'Shadow IT Identification', icon: '🕵️', time: '6s' },
    { id: 17, name: 'SSL/TLS Cipher Suite', icon: '🔒', time: '5s' },
    { id: 18, name: 'Lateral Path Mapping', icon: '📈', time: '7s' },
    { id: 19, name: 'Data Exfil Simulation', icon: '📤', time: '4s' },
    { id: 20, name: 'Executive Risk Report', icon: '📋', time: '3s' }
  ];

  const mockResults = {
    exposureScore: "8.4/10",
    findings: [
      { severity: 'CRITICAL', title: 'Unauthorized API Access via Orphaned Endpoint', phase: 12 },
      { severity: 'CRITICAL', title: 'Exposed S3 Bucket containing PII', phase: 7 },
      { severity: 'HIGH', title: 'Broken Access Control in Auth Logic', phase: 13 },
      { severity: 'HIGH', title: 'Shadow IT: Unmonitored Staging Server', phase: 16 }
    ]
  };

  const startScan = () => {
    setIsScanning(true);
    setProgress(0);
    setResults(null);
    let prog = 0;
    const timer = setInterval(() => {
      prog += 1;
      setProgress(prog);
      setCurrentPhase(Math.floor((prog / 100) * 19));
      if (prog >= 100) {
        clearInterval(timer);
        setIsScanning(false);
        setResults(mockResults);
      }
    }, 120); 
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white p-6 font-serif">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-10 border-b border-[#D4AF37]/20 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative p-1 bg-gradient-to-b from-[#D4AF37] to-[#8C6239] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.2)]">
               <div className="bg-black p-2 rounded-md">
                <Shield className="w-12 h-12 text-[#E2A76F]" /> {/* Rose Gold icon color */}
               </div>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-[0.2em] uppercase text-[#D4AF37]">
                Wraith-20
              </h1>
              <p className="text-[#E2A76F] font-mono text-xs tracking-widest uppercase mt-1">
                Institutional Reconnaissance Engine // Onyx Offensive
              </p>
            </div>
          </div>
          <div className="text-right border-l border-white/10 pl-8">
            <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-1">Risk Exposure Index</div>
            <div className="text-4xl font-light text-[#D4AF37]">{results ? results.exposureScore : '--/--'}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* CONFIGURATION SIDEBAR */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#111111] border border-[#D4AF37]/30 p-6 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/5 rotate-45 translate-x-8 -translate-y-8"></div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#E2A76F]">Targeting Parameters</h3>
            
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="DOMAIN ENTRY..."
              className="w-full bg-black border border-[#D4AF37]/40 rounded-sm px-4 py-3 font-mono text-sm text-[#D4AF37] focus:outline-none focus:border-[#D4AF37] mb-6 transition-all"
            />
            
            <div className="space-y-4 mb-8">
               <button onClick={() => setScanType('automated')} className={`w-full text-left p-4 border transition-all ${scanType === 'automated' ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/5 bg-white/5 opacity-40'}`}>
                 <div className="text-[10px] font-bold uppercase tracking-widest">Automated Scan</div>
                 <div className="text-[9px] text-gray-400 mt-1 italic">Tactical Surface Validation</div>
               </button>
               <button onClick={() => setScanType('manual')} className={`w-full text-left p-4 border transition-all ${scanType === 'manual' ? 'border-[#E2A76F] bg-[#E2A76F]/10' : 'border-white/5 bg-white/5 opacity-40'}`}>
                 <div className="text-[10px] font-bold uppercase tracking-widest">Strategic Deep Dive</div>
                 <div className="text-[9px] text-gray-400 mt-1 italic">Human-Led Infiltration</div>
               </button>
            </div>

            <button
              onClick={startScan}
              disabled={!target || isScanning}
              className="w-full bg-[#D4AF37] text-black font-bold py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-all disabled:opacity-10"
            >
              {isScanning ? 'System Executing...' : 'Begin Reconnaissance'}
            </button>
          </div>
        </div>

        {/* DATA VISUALIZATION */}
        <div className="lg:col-span-3 space-y-6">
          {/* PROGRESS BAR */}
          <div className={`h-1 w-full bg-white/5 rounded-full overflow-hidden mb-6 ${!isScanning && 'opacity-0'}`}>
             <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E2A76F] shadow-[0_0_10px_#D4AF37] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* PHASES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {phases.map((p, i) => (
              <div key={p.id} className={`p-4 border transition-all duration-500 ${
                  currentPhase >= i && isScanning ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 
                  currentPhase > i ? 'border-[#E2A76F]/20 opacity-40' : 'border-white/5 bg-black'
                }`}>
                <div className="text-xl mb-2 opacity-80">{p.icon}</div>
                <div className="text-[9px] font-bold uppercase tracking-tighter text-gray-400">{p.name}</div>
              </div>
            ))}
          </div>

          {/* RESULTS VIEW */}
          {results && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-4">
                <h3 className="text-[#FF4D4D] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <AlertCircle className="w-3 h-3" /> Critical Vulnerabilities
                </h3>
                {results.findings.map((f, i) => (
                  <div key={i} className="bg-white/5 border-l-2 border-[#FF4D4D] p-4">
                    <div className="text-[8px] text-[#FF4D4D] font-bold">PHASE {f.phase} // {f.severity}</div>
                    <div className="text-sm tracking-tight mt-1">{f.title}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#111111] border border-[#D4AF37]/20 p-6 rounded-sm">
                <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Summary Briefing</h3>
                <div className="grid grid-cols-2 gap-6 font-mono mb-6">
                  <div>
                    <div className="text-gray-600 text-[8px] uppercase">Unique Hosts</div>
                    <div className="text-2xl text-white">31</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-[8px] uppercase">Shadow Nodes</div>
                    <div className="text-2xl text-white">114</div>
                  </div>
                </div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
                  Request Full Disclosure Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
