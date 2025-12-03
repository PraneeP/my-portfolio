import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 relative overflow-hidden flex items-center justify-center py-12 md:py-20">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl w-full px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ========================================== */}
          {/* 📝 LEFT SIDE: Typography                  */}
          {/* ========================================== */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Open for Opportunities</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-medium text-teal-600">
                Building Modern Web Experiences
              </h3>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                I’m <span className="text-slate-900">Pranee Prajunpon</span>, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                  a Frontend Developer.
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A Junior Frontend Developer passionate about crafting accessible, pixel-perfect interfaces. I focus on writing clean code and creating seamless user interactions with modern technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link to="/contact" className="group relative px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium shadow-lg hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2">
                <span>Hire me now</span>
                {/* Linear Arrow Icon */}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </Link>
              
              <Link to="/portfolio" className="px-6 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">
                View Projects
              </Link>
            </div>
          </div>


          {/* ========================================== */}
          {/* 🖼️ RIGHT SIDE: Technical Bento Grid       */}
          {/* ========================================== */}
          <div className="lg:col-span-4 w-full max-w-md mx-auto lg:max-w-none">
            <div className="grid grid-cols-1 gap-4">
              
              {/* ⭐ CARD 1: The Dark Code Editor (Updated & Fixed) ⭐ */}
              <div className="relative h-60 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl shadow-slate-200/50 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-3 gap-1.5 z-20 border-b border-slate-700">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="ml-auto text-[10px] text-slate-500 font-mono">App.jsx</span>
                </div>

                {/* ✨ เนื้อหาโค้ดใหม่: ขายของแบบ Developer ✨ */}
                <div className="absolute inset-0 pt-12 px-5 font-mono text-[11px] sm:text-xs text-slate-300 overflow-hidden leading-relaxed">
                  <div className="opacity-100">
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">Pranee</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> <span className="text-blue-300">value</span> = {'{'}</p>
                    <p className="pl-8">code: <span className="text-green-300">"Clean & Scalable"</span>,</p>
                    <p className="pl-8">design: <span className="text-green-300">"Modern UI/UX"</span>,</p>
                    <p className="pl-8">passion: <span className="text-orange-400">100%</span></p>
                    <p className="pl-4">{'}'};</p>
                    <p>&nbsp;</p>
                    {/* Return HireMe Component */}
                    <p className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-teal-300">HireMe</span> {'{...'} <span className="text-blue-300">value</span> {'}'} /&gt;;</p>
                    <p>{'}'}</p>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500/20 blur-[60px] rounded-full group-hover:bg-teal-500/30 transition-all"></div>
              </div>

              {/* CARD 2 & 3: Skills Stack (เหมือนเดิม) */}
              <div className="grid grid-cols-2 gap-3">
                {/* Frontend */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <h3 className="font-bold text-slate-800 text-xs mb-2 uppercase tracking-wide">Frontend</h3>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Tailwind', 'Vite', 'Responsive'].map(skill => (
                      <span key={skill} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-[9px] text-slate-600 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mb-3 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                  </div>
                  <h3 className="font-bold text-slate-800 text-xs mb-2 uppercase tracking-wide">Backend</h3>
                  <div className="flex flex-wrap gap-1">
                    {['PHP', 'Python', 'MySQL'].map(skill => (
                      <span key={skill} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-[9px] text-slate-600 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;