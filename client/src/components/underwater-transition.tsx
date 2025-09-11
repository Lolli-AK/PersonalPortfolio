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
    <section ref={ref} className="relative h-screen overflow-hidden">
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

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, -80, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
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
            Dive Deeper
          </h2>
          <p className="text-xl opacity-70">
            Text about what they are diving into
          </p>
        </motion.div>
      </div>
    </section>
  );
}
