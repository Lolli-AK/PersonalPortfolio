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
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-3xl p-8 border ${project.border} transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]`}
            >
              {/* Icon placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-4xl text-white/60">
                  {index === 0 && "🔬"}
                  {index === 1 && "📊"}
                  {index === 2 && "🎮"}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
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

                {/* GitHub Link */}
                {project.githubUrl && (
                  <div className="pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                      data-testid={`link-github-${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">View on GitHub</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>

              {/* Static decorative dot */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}