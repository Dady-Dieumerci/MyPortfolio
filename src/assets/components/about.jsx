import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaBullseye,
} from "react-icons/fa";

import profile from "../profile.jpg";

export  const About=()=> {
  return (
    <section id="About" className="min-h-screen bg-black text-white px-6 md:px-20 py-10">
       <div className="text-center mb-10">
        <p className="flex items-center justify-center gap-2 text-orange-400 uppercase tracking-widest text-sm ">
           <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Frontend Developer
          </h1>

          <p className="text-gray-400 text-lg">
            I build modern, fast, and accessible web experiences <br></br> that make{" "}
            <span className="text-orange-400">impact.</span>
          </p>
       </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <img src={profile} alt="" className="w-full object-cover" />
          </div>

          {/* glow */}
          <div className="absolute inset-0 rounded-3xl border border-orange-500/20 pointer-events-none"></div>

          {/* badge */}
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10">
            <p className="text-green-400 text-sm">● Open to work</p>
            <p className="text-gray-300 text-xs">
              Let’s build something <br></br>{''} 
              <span className="text-orange-400"> Amazing </span>
              together
            </p>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
         
           <h2 className="text-orange-400 text-lg m-0">Hello, I'm</h2>
          <h2 className="text-4xl md:text-6xl font-bold">
            Nkusi Dady <br></br>Dieumerci
          </h2>

          <p className="text-gray-400 leading-relaxed border-l-2 pl-5 border-orange-400">
            A passionate Frontend Developer who loves turning ideas into
            beautiful, functional, and interactive web experiences. I focus on
            writing clean code, building reusable components, and optimizing
            performance.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            
            <div className="flex gap-3 items-start bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
              <FaGraduationCap className="text-orange-400 mt-1" />
              <div>
                <p className="text-xs text-orange-400">School</p>
                <p className="font-medium ">Mount Kigali University</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <div>
                <p className="text-xs text-orange-400">Location</p>
                <p className="font-medium">Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
              <FaCode className="text-orange-400 mt-1" />
              <div>
                <p className="text-xs text-orange-400">Role</p>
                <p className="font-medium">Frontend Developer</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
              <FaBullseye className="text-orange-400 mt-1" />
              <div>
                <p className="text-xs text-orange-400">Focus</p>
                <p className="font-medium">
                  UI/UX, Performance & Accessibility
                </p>
              </div>
            </div>

          </div>

          {/* TECH */}
          <div>
            <p className="text-sm text-gray-400 mb-3">
              TECH I WORK WITH
            </p>

            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-orange-400 transition"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-medium transition shadow-lg shadow-orange-500/30">
              Download CV
            </button>

           
          </div>
        </motion.div>
      </div>
    </section>
  );
}