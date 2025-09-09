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
        {/* Main content area with quote words and boy side by side */}
        <div className="flex justify-center items-center min-h-[600px] mb-16">
          <div className="relative w-full max-w-6xl">
            
            {/* Floating quote words - left side */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
              {/* Flowy geometric shapes */}
              <motion.div
                className="absolute top-0 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm"
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
                className="absolute top-10 right-20 w-12 h-12 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-lg rotate-45 blur-sm"
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
                className="absolute bottom-15 left-16 w-20 h-6 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-full blur-sm"
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
              
              {/* Dumbledore quote words floating */}
              <motion.div 
                className="absolute top-[0rem] left-20 text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Of course
              </motion.div>
              <motion.div 
              className="absolute top-[2rem] left-8 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              it is all
            </motion.div>
            <motion.div 
              className="absolute top-[2rem] left-32 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              happening
            </motion.div>
            <motion.div 
              className="absolute top-[3.5rem] left-12 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              inside
            </motion.div>
            <motion.div 
              className="absolute top-[3.5rem] left-28 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              your head,
            </motion.div>
            <motion.div 
              className="absolute top-[5rem] left-25 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Harry.
            </motion.div>
            <motion.div 
              className="absolute top-[7rem] left-16 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
            >
              But why
            </motion.div>
            <motion.div 
              className="absolute top-[7rem] left-36 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
            >
              on earth
            </motion.div>
            <motion.div 
              className="absolute top-[8.5rem] left-25 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              should
            </motion.div>
            <motion.div 
              className="absolute top-[8.5rem] left-28 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
            >
              that mean
            </motion.div>
            <motion.div 
              className="absolute top-[10rem] left-20 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              it is not
            </motion.div>
            <motion.div 
              className="absolute top-[11.5rem] left-16 text-lg text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
            >
              real?
            </motion.div>
            </div>

            {/* Boy silhouette - right side */}
            <div className="absolute right-20 top-[-7rem] w-[300px]">
              <div className="relative w-96 h-96 mx-auto">
                <SilhouetteSVG className="w-full h-full opacity-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Title and description below */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
              Creative
              <span className="text-cyan-400"> Developer</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Insert text here about what you do. 
              Welcome to my digital space.
            </p>
          </div>
          
          <motion.div 
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <blockquote className="text-lg italic text-gray-200 font-serif">
              "Insert inspirational quote here. This is where you would put a meaningful quote 
              that represents your philosophy or approach to work and life."
            </blockquote>
            <cite className="block text-right text-gray-400 mt-3">— Insert Author Name</cite>
          </motion.div>
        </motion.div>
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
