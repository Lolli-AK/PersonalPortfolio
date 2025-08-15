import { motion } from "framer-motion";
import SilhouetteSVG from "./silhouette-svg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-cyan-100 to-slate-200"></div>
      
      {/* Animated water bubbles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-300/30 rounded-full"
          animate={{
            y: [-20, -70, -20],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full"
          animate={{
            y: [-10, -60, -10],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-cyan-200/25 rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Silhouette and swirl text */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <SilhouetteSVG className="w-full h-full opacity-90" />
              
              {/* Stationary swirl text around the silhouette */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top arc of text - starting from left going right */}
                <div className="absolute top-8 left-16 text-xs text-slate-600 font-light transform -rotate-12 origin-left">
                  Of course
                </div>
                <div className="absolute top-4 left-28 text-xs text-slate-600 font-light transform -rotate-6 origin-left">
                  this is all
                </div>
                <div className="absolute top-6 left-44 text-xs text-slate-600 font-light transform rotate-0 origin-left">
                  inside
                </div>
                <div className="absolute top-12 left-60 text-xs text-slate-600 font-light transform rotate-6 origin-left">
                  of your
                </div>
                
                {/* Right side text - moving down */}
                <div className="absolute top-20 right-12 text-xs text-slate-600 font-light transform rotate-15 origin-center">
                  head,
                </div>
                <div className="absolute top-32 right-8 text-xs text-slate-600 font-light transform rotate-25 origin-center">
                  Harry.
                </div>
                <div className="absolute top-48 right-6 text-xs text-slate-600 font-light transform rotate-35 origin-center">
                  But
                </div>
                <div className="absolute top-64 right-10 text-xs text-slate-600 font-light transform rotate-45 origin-center">
                  why
                </div>
                
                {/* Bottom arc text - moving from right to left */}
                <div className="absolute bottom-20 right-16 text-xs text-slate-600 font-light transform rotate-55 origin-center">
                  on Earth
                </div>
                <div className="absolute bottom-16 right-32 text-xs text-slate-600 font-light transform rotate-65 origin-center">
                  should
                </div>
                <div className="absolute bottom-14 left-52 text-xs text-slate-600 font-light transform rotate-75 origin-center">
                  that
                </div>
                <div className="absolute bottom-16 left-36 text-xs text-slate-600 font-light transform rotate-85 origin-center">
                  mean
                </div>
                
                {/* Left side completion - moving up */}
                <div className="absolute bottom-24 left-20 text-xs text-slate-600 font-light transform rotate-95 origin-center">
                  it is
                </div>
                <div className="absolute bottom-32 left-12 text-xs text-slate-600 font-light transform rotate-105 origin-center">
                  not
                </div>
                <div className="absolute bottom-44 left-8 text-xs text-slate-600 font-light transform rotate-115 origin-center">
                  real?
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Hero content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-800 leading-tight">
                Creative
                <span className="text-cyan-600"> Developer</span>
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Bringing ideas to life through code, design, and imagination. 
                Welcome to my digital canvas.
              </p>
            </div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="text-lg italic text-slate-700 font-serif">
                "The half is a mere moment of inability but you are able for you are not half a being. 
                You are a whole that exists to live a life not half a life."
              </blockquote>
              <cite className="block text-right text-slate-500 mt-3">— Gibran Khalil Gibran</cite>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
