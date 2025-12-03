import DeviceMockup from '../components/DeviceMockup';
import { projects } from '../data';

// ✨ Component กราฟิกวิบวับ (เก็บไว้ใช้ตรงหัวข้อ)
const Sparkle = ({ className }) => (
  <svg 
    className={`absolute pointer-events-none ${className}`} 
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
  </svg>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-32">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
           {/* ⭐ แก้ไขตรงนี้: เปลี่ยน text-slate-900 เป็น Gradient Class ⭐ */}
           <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 relative inline-block">
             Featured Projects
             <Sparkle className="text-teal-400 w-8 h-8 -top-6 -right-8 animate-bounce" />
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
             A showcase of my technical skills and creative solutions. <br className="hidden md:block"/> Each project is crafted with attention to detail.
           </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            
            <div 
              key={project.id} 
              className="group relative bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* 🖼️ Image Side */}
                <div className="w-full lg:w-3/5 relative bg-slate-50/50 p-10 md:p-16 flex items-center justify-center overflow-hidden min-h-[400px]">
                  
                  {/* Grid Pattern จางๆ ในกล่องรูป */}
                  <div className="absolute inset-0 bg-[linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

                  <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <DeviceMockup desktopImg={project.desktopImg} mobileImg={project.mobileImg} />
                  </div>
                </div>

                {/* 📝 Content Side */}
                <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 space-y-8 relative overflow-hidden">
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg mt-4">
                      {project.description}
                    </p>

                    {/* Tech Stack + Animation */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((techItem, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 border rounded-md text-xs font-semibold shadow-sm ${techItem.color} animate-breathe`}
                          style={{ animationDelay: `${i * 0.3}s` }}
                        >
                          {techItem.name}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="pt-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                        <span>View Project</span>
                        <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;