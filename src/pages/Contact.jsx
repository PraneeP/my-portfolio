import React from 'react';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 py-24 md:py-32 text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 mb-6">
          Get In Touch
        </h2>
        
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-16">
          I'm currently looking for new opportunities as a Frontend Developer. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* 1. Email Card */}
          <a href={`mailto:${personalInfo.email}`} className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition hover:-translate-y-1 flex flex-col items-center justify-center gap-4 group h-full">
             <span className="p-3 bg-teal-50 rounded-full text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
             </span>
             <div>
               <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Email</p>
               {/* break-all*/}
               <p className="text-xl md:text-2xl font-bold text-slate-700 group-hover:text-teal-600 transition break-all">
                 {personalInfo.email}
               </p>
             </div>
          </a>

          {/* 2. Phone Card */}
          <a href={`tel:${personalInfo.phone}`} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition hover:-translate-y-1 flex flex-col items-center justify-center gap-4 group h-full">
            <span className="p-3 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Phone</p>
              <p className="text-lg font-bold text-slate-700 group-hover:text-emerald-600 transition">
                {personalInfo.phone}
              </p>
            </div>
          </a>

          {/* 3. GitHub Card */}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition hover:-translate-y-1 flex flex-col items-center justify-center gap-4 group h-full">
            <span className="p-3 bg-slate-100 rounded-full text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </span>
            <div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">GitHub</p>
              <p className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition">
                View Profile
              </p>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
};

export default Contact;