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
              <SilhouetteSVG className="w-full h-full opacity-80" />
              
              {/* Swirl text around the silhouette */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm text-slate-600 font-light whitespace-nowrap">
                  Of course this is all inside of your head, Harry.
                </div>
                <div className="absolute top-32 right-4 transform rotate-45 text-sm text-slate-600 font-light whitespace-nowrap origin-left">
                  But why on Earth should
                </div>
                <div className="absolute bottom-32 right-4 transform rotate-90 text-sm text-slate-600 font-light whitespace-nowrap origin-left">
                  that mean it is not real?
                </div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 rotate-180 text-sm text-slate-600 font-light whitespace-nowrap">
                  — Albus Dumbledore
                </div>
              </motion.div>
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
