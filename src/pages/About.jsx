import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      
      {/* Fixed Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 py-24 md:py-32">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-teal-600">
            About Me
          </h2>
          <p className="text-slate-500 text-lg">
            Developer / Learner / Creator
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          {/* 🚀 Section 1: My Journey */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-teal-50 rounded-lg text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </span>
              <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Hello! I'm <strong>Pranee</strong>. My journey into tech started with solving complex problems during my Computer Engineering studies. I enjoyed transforming logic into functional software, but my true passion sparked when I discovered <strong>Frontend Development</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              I realized that good software isn't just about code that works. It's about the <strong>experience</strong> it delivers. This led me to dive deep into React and Tailwind CSS. I love the challenge of bridging the gap between design and technology, ensuring that every pixel serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 🎓 Section 2: Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </span>
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="pl-2 border-l-2 border-slate-100">
                <h4 className="text-base font-bold text-slate-700">
                  Bachelor of Technology in Information and Communication Technology
                </h4>
                <p className="text-sm text-slate-500 mb-2">
                  Phranakhon Rajabhat University • 2022 - 2024
                </p>
                <div className="text-sm text-slate-600 mt-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-700 block mb-1">Relevant Coursework:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-500">
                    <li>Advanced Computer Programming</li>
                    <li>Software Engineering</li>
                    <li>Data Warehousing & Data Mining</li>
                    <li>Network Security</li>
                    <li>Mobile Application Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 💡 Section 3: Soft Skills & Certifications */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">Soft Skills</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 border-b border-slate-100 pb-4">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Team Collaboration</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Problem Solving</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Fast Learner</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>Adaptability</li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 bg-purple-50 rounded-lg text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                    </span>
                    <h3 className="text-xl font-bold text-slate-800">Certifications</h3>
                </div>
                <div className="pl-2 border-l-2 border-purple-200">
                  <h4 className="text-base font-bold text-slate-700">Basic Prompt Engineering</h4>
                  <p className="text-sm text-slate-500">
                    Mahidol University (CBTU) • Completed: Oct 2025
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    *Focus: Advanced AI interaction and command structuring.*
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CTA Button */}
          <div className="pt-8 border-t border-slate-100 flex justify-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition">
              Let's build something together 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;