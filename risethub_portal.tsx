import React, { useState, useEffect } from 'react';
import { 
  Globe, Search, Sparkles, MapPin, Users, BookOpen, Award,
  BarChart2, FileText, TrendingUp, Settings, LogIn,
  CheckCircle, Database, Shield, X, Mail, Lock,
  ChevronRight, ArrowRight, Building, Landmark, GraduationCap,
  PieChart, Activity, RefreshCw, Network
} from 'lucide-react';

const researchersData = [
  { name: "Kristianto, S.Kep., Ners.", nidn: "0011223344", asal: "D3 Keperawatan", kolab: 85, sources: ['SINTA', 'GS', 'Scopus'], pubs: 42, sitasi: 310 },
  { name: "Dr. Andi Pratama", nidn: "0099887766", asal: "D3 Keperawatan", kolab: 72, sources: ['SINTA', 'GS'], pubs: 38, sitasi: 285 },
  { name: "Siti Nurhaliza, M.Kes.", nidn: "0055443322", asal: "Kebidanan", kolab: 60, sources: ['SINTA', 'Scopus'], pubs: 31, sitasi: 150 },
];

const MenuPemetaan = () => {
  const [activeSubTab, setActiveSubTab] = useState('produktivitas');

  const menuItems = [
    { id: 'produktivitas', label: 'Produktivitas', icon: BarChart2 },
    { id: 'sitasi', label: 'Sitasi', icon: Award },
    { id: 'kata-kunci', label: 'Kata Kunci', icon: Search },
    { id: 'jurnal', label: 'Jurnal', icon: BookOpen },
    { id: 'penulis', label: 'Penulis', icon: User: Users },
    { id: 'tren', label: 'Tren Riset', icon: TrendingUp },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Pemetaan dan Analisis</h2>
      
      <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSubTab(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeSubTab === item.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <item.icon size={16} /> {item.label}
          </button>
        ))}
      </div>

      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[400px]">
        {activeSubTab === 'produktivitas' && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800">Analisis Produktivitas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-2">Penulis Paling Produktif (Top Authors)</h4>
                <div className="space-y-3">
                  {researchersData.map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1"><span className="font-semibold">{r.name}</span><span>{r.pubs} Pubs</span></div>
                      <div className="w-full bg-blue-200 rounded-full h-1.5"><div className="bg-blue-600 h-1.5 rounded-full" style={{width: `${(r.pubs/50)*100}%`}}></div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">Institusi/Jurusan Produktif</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="font-semibold">D3 Keperawatan</span><span>120 Pubs</span></div>
                    <div className="w-full bg-emerald-200 rounded-full h-1.5"><div className="bg-emerald-600 h-1.5 rounded-full" style={{width: '80%'}}></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="font-semibold">Kebidanan</span><span>85 Pubs</span></div>
                    <div className="w-full bg-emerald-200 rounded-full h-1.5"><div className="bg-emerald-600 h-1.5 rounded-full" style={{width: '60%'}}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSubTab === 'sitasi' && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800">Analisis Sitasi</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
               <div className="p-4 bg-slate-50 border rounded-lg text-center">
                 <p className="text-sm text-slate-500">Total Sitasi</p>
                 <p className="text-2xl font-bold text-slate-800">1,205</p>
               </div>
               <div className="p-4 bg-slate-50 border rounded-lg text-center">
                 <p className="text-sm text-slate-500">H-Index (Avg)</p>
                 <p className="text-2xl font-bold text-slate-800">4.5</p>
               </div>
               <div className="p-4 bg-slate-50 border rounded-lg text-center">
                 <p className="text-sm text-slate-500">Sitasi/Artikel</p>
                 <p className="text-2xl font-bold text-slate-800">3.5</p>
               </div>
            </div>
          </div>
        )}
        {/* Placeholder untuk tab lainnya agar tidak terlalu panjang */}
        {['kata-kunci', 'jurnal', 'penulis', 'tren'].includes(activeSubTab) && (
           <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <Activity size={48} className="mb-4 opacity-50" />
              <p>Visualisasi {activeSubTab.replace('-', ' ')} siap diintegrasikan dengan chart library (misal: Recharts).</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('beranda');
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginView, setLoginView] = useState('login'); // 'login' | 'register' | 'success'
  const [userRole, setUserRole] = useState('dosen'); // 'dosen' | 'admin'
  const [regEmail, setRegEmail] = useState('');

  // AI State
  const [searchQuery, setSearchQuery] = useState('');
  const [aiIdeas, setAiIdeas] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleAiBrainstorm = () => {
    if(!searchQuery) return;
    setIsAiLoading(true);
    // Simulasi delay API
    setTimeout(() => {
      setAiIdeas(`💡 Ide Riset AI untuk "${searchQuery}":\n\n1. Integrasi model prediktif berbasis IoT untuk intervensi dini pada pasien ${searchQuery}.\n2. Analisis komparatif efektivitas penanganan ${searchQuery} menggunakan protokol X vs Y di rumah sakit tipe B.\n3. Pengembangan instrumen skrining digital untuk mendeteksi risiko komplikasi ${searchQuery} secara mandiri oleh pasien.`);
      setIsAiLoading(false);
    }, 1500);
  };

  const handleSearch = () => {
    if(searchQuery) setShowSearchResult(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const passInput = e.target.password.value;

    if(emailInput === 'admin' && passInput === 'admin123') {
      setUserRole('admin');
    } else {
      setUserRole('dosen');
    }
    
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setCurrentPage('dashboard');
    setActiveTab('beranda');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegEmail(e.target.regEmail.value);
    setLoginView('success');
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Header Landing Page */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('landing')}>
            <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800">
              Riset<span className="text-blue-600">Hub</span>
            </span>
          </div>
          <div>
            {!isLoggedIn ? (
              <button 
                onClick={() => { setLoginView('login'); setShowLoginModal(true); }}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition-all"
              >
                <LogIn size={18} /> Login Portal
              </button>
            ) : (
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition-all"
                >
                  Ke Dashboard
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-600"
                >
                  <LogIn size={18} className="rotate-180" />
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Hero & Search Section */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Eksplorasi Jejak <br />
              <span className="text-blue-600">Riset & Inovasi Global</span>
            </h1>
            
            {/* Omnisearch */}
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-2 bg-white p-2 rounded-full shadow-xl border border-slate-200 mt-10">
              <div className="flex-1 flex items-center pl-4">
                <Search className="text-slate-400 mr-2" size={20}/>
                <input 
                  className="w-full py-3 outline-none text-lg bg-transparent" 
                  placeholder="Cari dosen, jurnal, topik, atau DOI..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleAiBrainstorm}
                  disabled={isAiLoading || !searchQuery}
                  className="px-6 py-3 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-100 disabled:opacity-50"
                >
                  {isAiLoading ? <RefreshCw className="animate-spin" size={18}/> : <Sparkles size={18} />} Ide AI
                </button>
                <button onClick={handleSearch} className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors">
                  Cari Data
                </button>
              </div>
            </div>

            {/* AI Results */}
            {aiIdeas && (
              <div className="max-w-3xl mx-auto mt-6 text-left bg-indigo-900 text-indigo-50 p-6 rounded-2xl shadow-lg border border-indigo-700 animate-in fade-in slide-in-from-top-4">
                <p className="whitespace-pre-line leading-relaxed">{aiIdeas}</p>
                <button onClick={() => setAiIdeas('')} className="mt-4 text-indigo-300 text-sm hover:text-white underline">Tutup Hasil AI</button>
              </div>
            )}
            
            {/* Mock Search Result */}
            {showSearchResult && !aiIdeas && (
              <div className="max-w-3xl mx-auto mt-6 text-left bg-white p-6 rounded-2xl shadow-lg border border-slate-200 animate-in zoom-in-95">
                <div className="flex justify-between items-start mb-4 pb-4 border-b">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Kristianto, S.Kep., Ners.</h3>
                    <p className="text-sm text-slate-500">D3 Keperawatan • NIDN: 0011223344</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">SINTA</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">Scopus</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="font-semibold text-slate-800">Penerapan AI-Decision Support System pada Triage IGD</p>
                    <p className="text-xs text-slate-500 mt-1">Jurnal Keperawatan Klinis • DOI: 10.1234/jkki.2026.01</p>
                    <p className="text-xs text-blue-600 mt-1 font-medium">Mitra: Univ. Sydney (Australia), Kemenkes RI</p>
                  </div>
                </div>
                <button onClick={() => setShowSearchResult(false)} className="w-full mt-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200">Sembunyikan</button>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'Total Publikasi', value: '1,250', icon: BookOpen },
              { label: 'Sitasi Global', value: '8,500', icon: Award },
              { label: 'Jaringan Negara', value: '24', icon: Globe },
              { label: 'Peneliti Aktif', value: '185', icon: Users },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <item.icon className="mx-auto text-blue-600 mb-3" size={28} />
                <div className="text-3xl font-extrabold text-slate-900">{item.value}</div>
                <div className="text-sm text-slate-500 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Peta Kolaborasi Global */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
              <MapPin className="text-blue-600" /> Peta Kolaborasi Global
            </h2>
            <div className="h-[400px] w-full bg-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-center border-4 border-slate-800 shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')]"></div>
              {/* Animasi Garis Kolaborasi (SVG Mock) */}
              <svg className="absolute inset-0 w-full h-full opacity-60">
                <path d="M 300 200 Q 500 50 700 150" stroke="#38bdf8" fill="none" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 300 200 Q 400 300 600 250" stroke="#facc15" fill="none" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                {/* Node Pusat (Indonesia) */}
                <circle cx="300" cy="200" r="6" fill="#ef4444" className="animate-pulse" />
                <circle cx="700" cy="150" r="4" fill="#38bdf8" />
                <circle cx="600" cy="250" r="4" fill="#facc15" />
              </svg>
              <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                 <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Live Network</p>
                 <p className="text-2xl font-bold">24 Negara Terhubung</p>
              </div>
            </div>
          </section>

          {/* Direktori Peneliti */}
          <section>
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
              <Users className="text-blue-600" /> Direktori Peneliti Utama
            </h2>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-bold">
                  <tr>
                    <th className="p-5">Nama Dosen & NIDN</th>
                    <th className="p-5">Asal / Prodi</th>
                    <th className="p-5 text-center">Sumber Data</th>
                    <th className="p-5">Volume Kolaborasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {researchersData.map((r, i) => (
                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-5">
                        <p className="font-bold text-slate-800">{r.name}</p>
                        <p className="text-xs text-slate-500">{r.nidn}</p>
                      </td>
                      <td className="p-5 text-slate-700">{r.asal}</td>
                      <td className="p-5 text-center">
                        <div className="flex gap-1 justify-center">
                          {r.sources.map(s => (
                            <span key={s} className="px-2 py-1 bg-slate-100 border border-slate-200 text-[10px] font-bold rounded text-slate-600">{s}</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-5">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${r.kolab}%` }}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dash { to { stroke-dashoffset: -1000; } }
        `}} />

        {/* --- MODAL LOGIN / REGISTER --- */}
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 rounded-full">
                <X size={20} />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-700 mx-auto rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Portal Akses</h2>
              </div>

              {loginView !== 'success' && (
                <div className="flex mb-6 border-b border-slate-200">
                  <button onClick={() => setLoginView('login')} className={`flex-1 py-2 text-sm font-bold border-b-2 ${loginView === 'login' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500'}`}>Masuk</button>
                  <button onClick={() => setLoginView('register')} className={`flex-1 py-2 text-sm font-bold border-b-2 ${loginView === 'register' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500'}`}>Daftar Baru</button>
                </div>
              )}

              {loginView === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Email / Username</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input name="email" type="text" required className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500" placeholder="admin atau email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Kata Sandi</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input name="password" type="password" required className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500" placeholder="••••••••" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all mt-4">Masuk ke Dashboard</button>
                  <p className="text-xs text-center text-slate-500 mt-4">Hint: Gunakan admin / admin123 untuk hak akses penuh.</p>
                </form>
              )}

              {loginView === 'register' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-4 animate-in slide-in-from-right-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Nama Lengkap</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500" placeholder="Gelar & Nama" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Email Institusi</label>
                    <input name="regEmail" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500" placeholder="dosen@univ.ac.id" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Kata Sandi Baru</label>
                    <input type="password" required className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:border-blue-500" placeholder="Min. 8 Karakter" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all mt-4">Daftar & Kirim Aktivasi</button>
                </form>
              )}

              {loginView === 'success' && (
                <div className="text-center animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-500" size={32}/>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cek Kotak Masuk!</h3>
                  <p className="text-sm text-slate-600 mb-6">Tautan aktivasi telah dikirim ke <strong className="text-blue-600">{regEmail}</strong>. Silakan verifikasi untuk login.</p>
                  <button onClick={() => setLoginView('login')} className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold">Kembali ke Login</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  const navMenus = [
    { id: 'beranda', label: 'Dashboard Utama', icon: BarChart2, section: 'Utama' },
    { id: 'luaran', label: 'Data Luaran', icon: BookOpen, section: 'Data' },
    { id: 'integrasi', label: 'Sinkronisasi', icon: RefreshCw, section: 'Data' },
    { id: 'profil', label: 'Profil Pengguna', icon: Users, section: 'Profil' },
    { id: 'pemetaan', label: 'Pemetaan & Analisis', icon: Map, section: 'Analitik' },
    { id: 'laporan', label: 'Laporan BKD', icon: FileText, section: 'Analitik' },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings, section: 'Admin', adminOnly: true },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      {/* Sidebar Dashboard */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed">
        <div className="p-4 border-b">
          <button onClick={() => setCurrentPage('landing')} className="flex items-center gap-2 hover:opacity-80 transition-opacity w-full group">
            <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Globe className="text-white" size={24} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-800 text-left">
              Riset<span className="text-blue-600">Hub</span>
            </span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {['Utama', 'Data', 'Profil', 'Analitik', 'Admin'].map(section => {
            const sectionMenus = navMenus.filter(m => m.section === section);
            // Sembunyikan section Admin jika bukan admin
            if (section === 'Admin' && userRole !== 'admin') return null;
            if (sectionMenus.length === 0) return null;

            return (
              <div key={section}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">{section}</p>
                <div className="space-y-1">
                  {sectionMenus.map(menu => (
                    <button
                      key={menu.id}
                      onClick={() => setActiveTab(menu.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === menu.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <menu.icon size={18} className={activeTab === menu.id ? 'text-blue-600' : 'text-slate-400'} />
                      {menu.label}
                      {menu.adminOnly && <Shield size={14} className="ml-auto text-amber-500" />}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t bg-slate-50">
          <button 
            onClick={() => { setIsLoggedIn(false); setCurrentPage('landing'); }}
            className="w-full flex items-center justify-center gap-2 py-2 text-red-600 font-bold hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogIn size={18} className="rotate-180" /> Logout
          </button>
        </div>
      </aside>

      {/* Area Konten Utama Dashboard */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Konten Dashboard */}
          <div className="flex justify-between items-center mb-8">
            <div>
               <h1 className="text-3xl font-extrabold text-slate-900 capitalize">
                 {activeTab.replace('-', ' ')}
               </h1>
               <p className="text-slate-500 text-sm">Update terakhir: Hari ini</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
               <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
                 {userRole === 'admin' ? 'A' : 'D'}
               </div>
               <span className="text-sm font-bold text-slate-700">{userRole === 'admin' ? 'Administrator' : 'Dr. Kristianto'}</span>
            </div>
          </div>

          {/* Render Komponen Sesuai Tab */}
          {activeTab === 'beranda' && (
            <div className="space-y-6 animate-in fade-in duration-500">
               {/* Hierarki Institusi */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                 <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                   <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Building size={24}/></div>
                   <div><p className="text-sm text-slate-500 font-medium">Institusi</p><p className="text-xl font-bold">1,250 <span className="text-xs text-slate-400 font-normal">Publikasi</span></p></div>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                   <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><Landmark size={24}/></div>
                   <div><p className="text-sm text-slate-500 font-medium">Fak. Kesehatan</p><p className="text-xl font-bold">420 <span className="text-xs text-slate-400 font-normal">Publikasi</span></p></div>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                   <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><GraduationCap size={24}/></div>
                   <div><p className="text-sm text-slate-500 font-medium">Keperawatan</p><p className="text-xl font-bold">185 <span className="text-xs text-slate-400 font-normal">Publikasi</span></p></div>
                 </div>
               </div>

               {/* Chart Placeholder (Tren 10 Tahun) */}
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Tren Publikasi (10 Tahun Terakhir)</h3>
                  <div className="h-48 flex items-end justify-between gap-2 mt-8">
                     {[20, 35, 40, 55, 60, 85, 110, 140, 165, 210].map((h, i) => (
                       <div key={i} className="w-full flex flex-col items-center group cursor-pointer">
                         <div className="opacity-0 group-hover:opacity-100 text-xs font-bold text-blue-600 mb-1 transition-opacity">{h}</div>
                         <div className={`w-full rounded-t-sm transition-all ${i === 9 ? 'bg-blue-600' : 'bg-blue-300 group-hover:bg-blue-400'}`} style={{height: `${(h/210)*100}%`}}></div>
                         <span className={`text-[10px] mt-2 ${i === 9 ? 'font-bold text-slate-800' : 'text-slate-500'}`}>{2017+i}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'pemetaan' && <MenuPemetaan />}
          
          {activeTab === 'luaran' && (
             <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
               <Database size={48} className="mx-auto text-slate-300 mb-4" />
               <h2 className="text-xl font-bold text-slate-800">Manajemen Data Publikasi</h2>
               <p className="text-slate-500 max-w-md mx-auto mt-2">Menarik data secara otomatis dari Google Scholar, SINTA, dan Scopus. Modul CRUD tersedia di sini.</p>
               <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">+ Tambah Manual</button>
             </div>
          )}

          {['profil', 'integrasi', 'laporan', 'pengaturan'].includes(activeTab) && (
             <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
                <Settings size={64} className="mb-4 opacity-30" />
                <h2 className="text-xl font-bold text-slate-600 capitalize">Modul {activeTab.replace('-', ' ')}</h2>
                <p className="text-sm mt-2">Struktur UI dan *State* telah disiapkan sesuai PRD.</p>
             </div>
          )}

        </div>
      </main>
    </div>
  );
}