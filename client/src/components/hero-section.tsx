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
        {/* Main content area - responsive flex layout */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-4 min-h-[240px] md:min-h-[300px] mb-4">
          
          {/* Title and description - order-1 on mobile (first), no specific order on desktop */}
          <motion.div
            className="order-1 md:order-none text-center space-y-4 w-full md:hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className="text-3xl font-serif font-bold text-white leading-tight">
              Aamuktha's Personal Website :)
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Recent CS Undergraduate From UW-Madison | Aspiring Software
              Engineer | Aspiring Product Manager | Avid Reader
            </p>
          </motion.div>

          {/* Floating quote words - order-3 on mobile (under silhouette), left side on desktop */}
          <div className="order-3 md:order-none relative w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-auto md:h-auto">
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
                className="absolute top-10 right-10 md:right-20 w-12 h-12 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-lg rotate-45 blur-sm"
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
                className="absolute top-[0rem] left-16 md:left-20 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Of course
              </motion.div>
              <motion.div
                className="absolute top-[2rem] left-4 md:left-8 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                it is all
              </motion.div>
              <motion.div
                className="absolute top-[2rem] left-24 md:left-32 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                happening
              </motion.div>
              <motion.div
                className="absolute top-[3.5rem] left-8 md:left-12 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                inside
              </motion.div>
              <motion.div
                className="absolute top-[3.5rem] left-20 md:left-28 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                your head,
              </motion.div>
              <motion.div
                className="absolute top-[5rem] left-18 md:left-25 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                Harry.
              </motion.div>
              <motion.div
                className="absolute top-[7rem] left-12 md:left-16 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                But why
              </motion.div>
              <motion.div
                className="absolute top-[7rem] left-28 md:left-36 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
              >
                on earth
              </motion.div>
              <motion.div
                className="absolute top-[8.5rem] left-18 md:left-25 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 }}
              >
                should
              </motion.div>
              <motion.div
                className="absolute top-[8.5rem] left-24 md:left-28 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 }}
              >
                that mean
              </motion.div>
              <motion.div
                className="absolute top-[10rem] left-16 md:left-20 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                it is not
              </motion.div>
              <motion.div
                className="absolute top-[11.5rem] left-12 md:left-16 text-base md:text-lg text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 }}
              >
                real?
              </motion.div>

              {/* Attribution */}
              <motion.div
                className="absolute top-[13rem] left-16 md:left-20 text-sm text-gray-300 font-light italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0 }}
              >
                - Albus Dumbledore
              </motion.div>
            </div>
          </div>

          {/* Boy silhouette - order-2 on mobile (after title), right side on desktop */}
          <div className="order-2 md:order-none w-48 h-48 md:w-[300px] md:h-[300px] md:mt-[-7rem]">
            <SilhouetteSVG className="w-full h-full opacity-90" />
          </div>
        </div>

        {/* Title and description - hidden on mobile (shown above), visible on desktop */}
        <motion.div
          className="hidden md:block text-center space-y-8"
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
        </motion.div>

        {/* Gibran quote box - order-4 on mobile (last), always at bottom */}
        <motion.div
          className="order-4 md:order-none bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.02 }}
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
      </div>

    </section>
  );
}
