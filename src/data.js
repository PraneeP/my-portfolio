// src/data.js

// =========================================
// 1. ส่วนนำเข้ารูปภาพ (IMPORT IMAGES)
// =========================================
import p1Desktop from './assets/images/project1-desktop.jpg'; 
import p2Desktop from './assets/images/project2-desktop.png';
import p2Mobile from './assets/images/project2-mobile.png';

// =========================================
// 2. ข้อมูลโปรเจกต์ (PROJECTS DATA)
// =========================================
export const projects = [
    {
      id: 1,
      title: "Web Application for Meeting Room Reservation Management System",
      description: "A Smart Meeting Room Booking System designed to eliminate scheduling conflicts. Key features include a logic-based recommendation engine that automatically suggests the optimal room based on attendee hierarchy (e.g., prioritizing VIP rooms for executives). The system also features a robust Admin dashboard for seamless management and instant PDF report generation.",
      // Tech เป็นแบบมีสี (แต่ละอันสีไม่เหมือนกัน)
      tech: [
        { name: "PHP", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
        { name: "MySQL", color: "bg-blue-50 text-blue-600 border-blue-100" },
        { name: "Bootstrap", color: "bg-purple-50 text-purple-600 border-purple-100" },
        { name: "jQuery", color: "bg-orange-50 text-orange-600 border-orange-100" },
        { name: "Algorithm", color: "bg-red-50 text-red-600 border-red-100" },
        { name: "PDF Gen", color: "bg-slate-50 text-slate-600 border-slate-100" }
      ],
      desktopImg: p1Desktop,
      mobileImg: null, 
      link: "https://github.com/yourusername/project1" 
    },
    {
      id: 2,
      title: "Mini E-Commerce Frontend", 
      description: "A modern and responsive frontend interface for an IT e-commerce platform. Designed with a focus on User Experience (UX) and clean UI architecture. The application ensures seamless navigation and optimal performance across all devices, from desktop screens to mobile phones.",
      // Tech เป็นแบบมีสี
      tech: [
        { name: "React", color: "bg-blue-50 text-blue-600 border-blue-100" },
        { name: "Tailwind CSS", color: "bg-sky-50 text-sky-600 border-sky-100" },
        { name: "Vite", color: "bg-purple-50 text-purple-600 border-purple-100" },
        { name: "Responsive Design", color: "bg-teal-50 text-teal-600 border-teal-100" }
      ],
      desktopImg: p2Desktop,
      mobileImg: p2Mobile, 
      link: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "AI Art Gallery (Coming Soon)",
      description: "An AI-powered art gallery showcasing stunning visuals generated via Prompt Engineering. Features a dynamic Masonry layout for image organization and interactive display effects for an immersive viewing experience.",
      // Tech เป็นแบบมีสี
      tech: [
        { name: "React", color: "bg-blue-50 text-blue-600 border-blue-100" },
        { name: "Masonry Layout", color: "bg-pink-50 text-pink-600 border-pink-100" },
        { name: "Prompt Engineering", color: "bg-yellow-50 text-yellow-600 border-yellow-100" }
      ],
      desktopImg: "https://placehold.co/1920x1080/1f2937/9ca3af?text=Coming+Soon",
      mobileImg: "https://placehold.co/375x812/1f2937/9ca3af?text=WIP",
      link: "#"
    }
];

// =========================================
// 3. ข้อมูลส่วนตัว (PERSONAL INFO)
// =========================================
export const personalInfo = {
    name: "Pranee Prajunpon",
    title: "Frontend Developer",
    tagline: "เปลี่ยนไอเดียให้เป็นหน้าเว็บที่สวยงามและใช้งานได้จริง",
    email: "pranee.prajunpon1@gmail.com",
    phone: "099-090-1515",
    github: "https://github.com/PraneeP"
    
};