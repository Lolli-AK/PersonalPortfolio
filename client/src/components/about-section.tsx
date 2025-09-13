import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import your photos
import photo1 from "@assets/70477915848__DC15A1A6-60E9-42F6-957F-FD9541AACE06_1757724820701.jpeg";
import photo2 from "@assets/IMG_4889_1757724823056.jpeg";
import photo3 from "@assets/1C95CE14-F161-4B9C-ACBD-7341902FA7EC_1757724826468.jpeg";
import photo4 from "@assets/F1814244-FE48-414D-8E03-E9080E8C97D6_1757724828952.jpeg";

const hobbies = [
  { title: "Running", description: "Exploring trails and staying active" },
  { title: "Reading", description: "Diving into literature and learning" },
  { title: "Writing", description: "Expressing thoughts and creativity" },
];

const photos = [
  { src: photo1, alt: "Personal photo 1" },
  { src: photo2, alt: "Personal photo 2" },
  { src: photo3, alt: "Personal photo 3" },
  { src: photo4, alt: "Personal photo 4" },
];

function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Photo indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
                I'm a recent CS undergraduate. I'm also someone who likes
                meeting people, trying new things, thinking about how technology
                lives in our world, for better and for worse, and quoting
                people.
              </p>
              <p>
                As Bill Gates once said, "Technology is unlocking the innate
                compassion we have for our fellow human beings"
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

          {/* Photo slideshow */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main photo slideshow */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PhotoSlideshow />
            </motion.div>

            {/* Photo description */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-300 text-sm italic">
                Some moments from my journey
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
