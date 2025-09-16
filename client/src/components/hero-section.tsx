import { motion } from "framer-motion";
import SilhouetteSVG from "./silhouette-svg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 scroll-mt-28"
    >
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
            ease: "easeInOut",
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
            delay: 3,
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
            delay: 7,
          }}
        />
      </div>

      {/* The Alcove — pinned to top of the section */}
      <div className="absolute z-20 left-1/2 top-24 md:top-20 -translate-x-1/2">
        <motion.h1
          className="text-4xl lg:text-6xl font-serif font-bold text-gray-300 text-center"
          style={{
            textShadow: "0 0 30px rgba(16, 185, 129, 0.6)",
            fontFamily: "Playfair Display, serif",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The Alcove
        </motion.h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Main content area with quote words and boy side by side */}
        <div className="flex justify-center items-start min-h-[240px] md:min-h-[300px] mb-4">
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
                  ease: "easeInOut",
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
                  delay: 2,
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
                  delay: 4,
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

              {/* Attribution */}
              <motion.div
                className="absolute top-[13rem] left-20 text-sm text-gray-300 font-light italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0 }}
              >
                - Albus Dumbledore
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
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              Aamuktha's Personal Website :)
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Recent CS Undergraduate From UW-Madison | Aspiring Software
              Engineer | Aspiring Product Manager | Avid Reader
            </p>
          </div>

          <motion.div
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <blockquote className="text-lg bold text-gray-200 font-serif">
              "The half is a mere moment of inability but you are able for you
              are not half a being. You are a whole that exists to live a life
              not half a life."
            </blockquote>
            <cite className="block text-right text-gray-400 mt-3">
              — Gibran Khalil Gibran
            </cite>
          </motion.div>
        </motion.div>
      </div>

      {/* Quill pen scroll indicator - bottom right corner */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        {/* Quill pen container with subtle glow */}
        <motion.div
          className="relative"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.4))",
          }}
        >
          {/* Quill pen body */}
          <div className="relative w-8 h-16">
            {/* Feather part */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-full"
              style={{
                clipPath: "polygon(50% 0%, 20% 30%, 30% 80%, 50% 100%, 70% 80%, 80% 30%)"
              }}
            />
            
            {/* Feather details/texture lines */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-6">
              <div className="absolute top-1 left-1/2 w-px h-3 bg-gray-500/60 transform -translate-x-1/2 rotate-12"></div>
              <div className="absolute top-2 left-1/2 w-px h-2 bg-gray-500/60 transform -translate-x-1/2 -rotate-12"></div>
              <div className="absolute top-3 left-1/2 w-px h-2 bg-gray-500/60 transform -translate-x-1/2 rotate-12"></div>
            </div>
            
            {/* Quill tip/nib */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-900 rounded-b-full"></div>
          </div>
          
          {/* Animated ink drops */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeOut",
              times: [0, 0.1, 0.7, 1]
            }}
          >
            <motion.div
              className="w-1 h-1 bg-gray-600 rounded-full"
              animate={{ 
                y: [0, 40], 
                scale: [1, 0.8, 0.6] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeIn" 
              }}
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: 0.8,
              times: [0, 0.1, 0.7, 1]
            }}
          >
            <motion.div
              className="w-0.5 h-0.5 bg-gray-700 rounded-full"
              animate={{ 
                y: [0, 35], 
                x: [-2, 1],
                scale: [1, 0.7, 0.4] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeIn",
                delay: 0.8 
              }}
            />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: 1.6,
              times: [0, 0.1, 0.7, 1]
            }}
          >
            <motion.div
              className="w-0.5 h-0.5 bg-gray-600 rounded-full"
              animate={{ 
                y: [0, 42], 
                x: [2, -1],
                scale: [1, 0.8, 0.3] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeIn",
                delay: 1.6 
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Subtle hint text */}
        <motion.div
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 font-light opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
        >
          scroll down
        </motion.div>
      </motion.div>
    </section>
  );
}
