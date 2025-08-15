import { motion } from "framer-motion";
import SilhouetteSVG from "./silhouette-svg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-400/20 rounded-full"
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
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-300/30 rounded-full"
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
          className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-gray-500/15 rounded-full"
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
          
          {/* Left side - Floating Dumbledore quote words */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Creative
                <span className="text-cyan-400"> Developer</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Bringing ideas to life through code, design, and imagination. 
                Welcome to my digital canvas.
              </p>
            </div>
            
            {/* Floating quote words - arranged more freely */}
            <div className="relative w-full h-96">
              {/* Flowy geometric shapes */}
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-lg rotate-45 blur-sm"
                animate={{
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              {/* Dumbledore quote words floating */}
              <motion.div 
                className="absolute top-12 left-20 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Of course
              </motion.div>
              <motion.div 
                className="absolute top-24 left-8 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                it is all
              </motion.div>
              <motion.div 
                className="absolute top-32 left-32 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                happening
              </motion.div>
              <motion.div 
                className="absolute top-20 left-60 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                inside
              </motion.div>
              <motion.div 
                className="absolute top-48 left-12 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                your head,
              </motion.div>
              <motion.div 
                className="absolute top-56 left-44 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                Harry.
              </motion.div>
              <motion.div 
                className="absolute top-64 left-16 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                But why
              </motion.div>
              <motion.div 
                className="absolute top-72 left-36 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
              >
                on earth
              </motion.div>
              <motion.div 
                className="absolute top-80 left-8 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 }}
              >
                should
              </motion.div>
              <motion.div 
                className="absolute top-88 left-28 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 }}
              >
                that mean
              </motion.div>
              <motion.div 
                className="absolute top-96 left-52 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                it is not
              </motion.div>
              <motion.div 
                className="absolute top-104 left-16 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 }}
              >
                real?
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Boy silhouette looking at the words */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <SilhouetteSVG className="w-full h-full opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
