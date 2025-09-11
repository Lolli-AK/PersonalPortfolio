import { motion } from "framer-motion";

const hobbies = [
  { title: "Insert Hobby", description: "Insert text here" },
  { title: "Running", description: "Insert text here" },
  { title: "Reading", description: "Insert text here" },
  { title: "Writing", description: "Insert text here" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
              About Me
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-xl">
                Insert text here. Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p>
                Insert text here. Ut enim ad minim veniam quis nostrud
                exercitation ullamco laboris, nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit.
              </p>
            </div>

            {/* Hobbies grid */}
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-semibold text-white mb-2">
                    {hobby.title}
                  </h4>
                  <p className="text-sm text-slate-300">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo gallery */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main travel photo */}
            <motion.div
              className="w-full h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl shadow-2xl flex items-center justify-center text-white/60 text-6xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🏔️
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {/* Urban photography */}
              <motion.div
                className="w-full h-32 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-xl flex items-center justify-center text-white/60 text-4xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🏙️
              </motion.div>

              {/* Nature close-up */}
              <motion.div
                className="w-full h-32 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-xl flex items-center justify-center text-white/60 text-4xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🌿
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
