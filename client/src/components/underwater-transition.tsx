import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function UnderwaterTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      {/* Water overlay effect */}
      <div className="absolute inset-0 water-overlay">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/50 to-slate-900"
          style={{ opacity }}
        />
      </div>

      {/* Background underwater scene */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="w-full h-full bg-gradient-to-b from-cyan-200 via-cyan-600 to-slate-900 relative">
          {/* Animated water patterns */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255,255,255,0.15) 0%, transparent 50%)
              `,
              backgroundSize: "200px 200px, 300px 300px, 250px 250px",
            }}
          />

          {/* Literary themed floating elements */}

          {/* Alice in Wonderland elements */}
          <motion.div
            className="absolute text-2xl opacity-60"
            aria-hidden="true"
            style={{ left: "15%", top: "20%" }}
            animate={{
              y: [-30, -90, -30],
              x: [-15, 15, -15],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🐰
          </motion.div>

          <motion.div
            className="absolute text-xl opacity-50"
            aria-hidden="true"
            style={{ left: "80%", top: "30%" }}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            🎩
          </motion.div>

          <motion.div
            className="absolute text-lg opacity-40"
            aria-hidden="true"
            style={{ left: "70%", top: "60%" }}
            animate={{
              y: [-25, -75, -25],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          >
            🃏
          </motion.div>

          {/* Black Beauty elements */}
          <motion.div
            className="absolute text-2xl opacity-50"
            style={{ left: "25%", top: "50%" }}
            animate={{
              y: [-35, -85, -35],
              x: [-20, 5, -20],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            aria-hidden="true"
          >
            🐎
          </motion.div>

          <motion.div
            className="absolute text-lg opacity-40"
            style={{ left: "60%", top: "40%" }}
            animate={{
              y: [-15, -65, -15],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            aria-hidden="true"
          >
            🐴
          </motion.div>

          {/* Secret Garden elements */}
          <motion.div
            className="absolute text-xl opacity-50"
            aria-hidden="true"
            style={{ left: "10%", top: "70%" }}
            animate={{
              y: [-40, -80, -40],
              x: [0, -15, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          >
            🌹
          </motion.div>

          <motion.div
            className="absolute text-lg opacity-40"
            aria-hidden="true"
            style={{ left: "85%", top: "50%" }}
            animate={{
              y: [-30, -70, -30],
              x: [-5, -25, -5],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          >
            🗝️
          </motion.div>

          <motion.div
            className="absolute text-2xl opacity-60"
            aria-hidden="true"
            style={{ left: "40%", top: "15%" }}
            animate={{
              y: [-20, -90, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
          >
            🌿
          </motion.div>

          <motion.div
            className="absolute text-lg opacity-40"
            aria-hidden="true"
            style={{ left: "50%", top: "80%" }}
            animate={{
              y: [-25, -55, -25],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          >
            🦋
          </motion.div>

          {/* Additional floating particles for depth */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/15 rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${25 + i * 15}%`,
              }}
              animate={{
                y: [-10, -40, -10],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center text-white space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-serif font-light opacity-90">
            Continue the tale
          </h2>
          <p className="text-xl opacity-70">
            I am sure there is Magic in everything, only we have not sense
            enough to get hold of it and make it do things for us.
            <span className="block mt-2">- Mary Lennox</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
