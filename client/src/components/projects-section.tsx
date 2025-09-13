import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Research Paper Summarizer",
    description:
      "AI-powered tool that distills complex academic papers into digestible summaries, making research more accessible and efficient.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API"],
    gradient: "from-cyan-500/10 to-blue-600/20",
    border: "border-cyan-400/20 hover:border-cyan-400/40",
    tags: "bg-cyan-500/20 text-cyan-300",
    githubUrl: "https://github.com/Lolli-AK/ResearchPaperSummarizer",
  },
  {
    title: "BadgerBurrows",
    description:
      "Website created to assuage the needs of students in a growing campus, bridging the gap between campus’s hidden study spots, and the emerging need for new places to study.",
    tech: ["React", "Flask", "Google Maps", "SQLite"],
    gradient: "from-amber-500/10 to-orange-600/20",
    border: "border-amber-400/20 hover:border-amber-400/40",
    tags: "bg-amber-500/20 text-amber-300",
    githubUrl: "https://github.com/Lolli-AK/studyspots",
  },
  // {
  //   title: "Project",
  //   description:
  //     "Insert project description here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  //   tech: ["Node.js", "Gamification", "API"],
  //   gradient: "from-emerald-500/10 to-teal-600/20",
  //   border: "border-emerald-400/20 hover:border-emerald-400/40",
  //   tags: "bg-emerald-500/20 text-emerald-300",
  // },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insert text here about projects and work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-3xl p-8 border ${project.border} transition-all duration-500 hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Project icon/image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-4xl text-white/60">
                  {index === 0 && "🔬"}
                  {index === 1 && "📊"}
                  {index === 2 && "🎮"}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 ${project.tags} rounded-full text-sm font-mono`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub link */}
                {project.githubUrl && (
                  <div className="pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                      data-testid={`link-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">View on GitHub</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>

              {/* Floating animation */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full"
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
