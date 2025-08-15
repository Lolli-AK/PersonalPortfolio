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
          
          {/* Left side - Silhouette and swirl text */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <SilhouetteSVG className="w-full h-full opacity-90" />
              
              {/* Flowy geometric shapes overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Floating geometric shapes with motion */}
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
                
                <motion.div
                  className="absolute bottom-20 left-16 w-20 h-6 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-full blur-sm"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -10, 0],
                    scaleX: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                />
                
                <motion.div
                  className="absolute bottom-10 right-12 w-8 h-24 bg-gradient-to-t from-orange-400/12 to-yellow-500/12 rounded-full blur-sm"
                  animate={{
                    x: [0, -15, 0],
                    y: [0, -25, 0],
                    scaleY: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6
                  }}
                />
                
                <motion.div
                  className="absolute top-1/2 left-8 w-10 h-10 bg-gradient-to-br from-indigo-400/18 to-violet-500/18 rounded-sm rotate-12 blur-sm"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -30, 0],
                    rotate: [12, 60, 12],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 8
                  }}
                />
              </div>
              
              {/* Swirling quote text around the silhouette */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top arc of text - starting from left going right */}
                <motion.div 
                  className="absolute top-8 left-16 text-sm text-gray-300 font-light transform -rotate-12 origin-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Of course
                </motion.div>
                <motion.div 
                  className="absolute top-4 left-28 text-sm text-gray-300 font-light transform -rotate-6 origin-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  it is all
                </motion.div>
                <motion.div 
                  className="absolute top-6 left-44 text-sm text-gray-300 font-light transform rotate-0 origin-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  happening
                </motion.div>
                <motion.div 
                  className="absolute top-12 left-60 text-sm text-gray-300 font-light transform rotate-6 origin-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  inside
                </motion.div>
                
                {/* Right side text - moving down */}
                <motion.div 
                  className="absolute top-20 right-12 text-sm text-gray-300 font-light transform rotate-15 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  your head,
                </motion.div>
                <motion.div 
                  className="absolute top-32 right-8 text-sm text-gray-300 font-light transform rotate-25 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Harry.
                </motion.div>
                <motion.div 
                  className="absolute top-48 right-6 text-sm text-gray-300 font-light transform rotate-35 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  But why
                </motion.div>
                <motion.div 
                  className="absolute top-64 right-10 text-sm text-gray-300 font-light transform rotate-45 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  on earth
                </motion.div>
                
                {/* Bottom arc text - moving from right to left */}
                <motion.div 
                  className="absolute bottom-20 right-16 text-sm text-gray-300 font-light transform rotate-55 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                >
                  should
                </motion.div>
                <motion.div 
                  className="absolute bottom-16 right-32 text-sm text-gray-300 font-light transform rotate-65 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                >
                  that
                </motion.div>
                <motion.div 
                  className="absolute bottom-14 left-52 text-sm text-gray-300 font-light transform rotate-75 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  mean
                </motion.div>
                <motion.div 
                  className="absolute bottom-16 left-36 text-sm text-gray-300 font-light transform rotate-85 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                >
                  it is
                </motion.div>
                
                {/* Left side completion - moving up */}
                <motion.div 
                  className="absolute bottom-24 left-20 text-sm text-gray-300 font-light transform rotate-95 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.9 }}
                >
                  not
                </motion.div>
                <motion.div 
                  className="absolute bottom-32 left-12 text-sm text-gray-300 font-light transform rotate-105 origin-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.1 }}
                >
                  real?
                </motion.div>
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
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Creative
                <span className="text-cyan-400"> Developer</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Bringing ideas to life through code, design, and imagination. 
                Welcome to my digital canvas.
              </p>
            </div>
            
            <motion.div 
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="text-lg italic text-gray-200 font-serif">
                "The half is a mere moment of inability but you are able for you are not half a being. 
                You are a whole that exists to live a life not half a life."
              </blockquote>
              <cite className="block text-right text-gray-400 mt-3">— Gibran Khalil Gibran</cite>
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
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
