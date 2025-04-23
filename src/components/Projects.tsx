import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Online Ordering Pizza Platform",
    role: "Full Stack Developer",
    description:
      "A modern, responsive, and user-friendly online ordering platform for a any and all pizza restaurants that is fully integrated admin dashboard.",
    image: "/images/marcos.png",
    needsBackground: false,
    live: "https://order.marcos.com/?id=LPBHTQ",
    tags: ["C#", "Typescript", "HTML", "CSS"],
  },
  {
    title: "Nexus Digital Analytics",
    role: "Frontend Developer",
    description:
      "HIPAA-Compliant, AI-Powered Digital Analytics for Healthcare.",
    image: "/images/nexus.png",
    needsBackground: true,
    live: "https://analytics.nexus/",
    tags: ["TypeScript", "Next.js", "Chakra UI", "Charts.js"],
  },
  {
    title: "Wellspan - Prove",
    role: "Lead Frontend Developer",
    description:
      "A seamless account creation site for WellSpan Healthcare using PROVE's phone-centric identity verification to ensure quick, secure, and frictionless user onboarding.",
    image: "/images/wellspan.png",
    needsBackground: false,
    live: "https://signup.wellspan.org/",
    tags: ["Next.js", "Sass", "Typescript"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative pt-6 h-full">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.21, 0.45, 0.05, 0.95]
                  }}
                  className="relative will-change-transform bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col"
                  style={{ transform: 'translateZ(0)' }}
                >
                  {/* Shadow */}
                  <div 
                    className="absolute -inset-x-3 -inset-y-4 bg-gradient-to-b from-violet-600/20 to-violet-950/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-400 ease-[cubic-bezier(0.21,0.45,0.05,0.95)]"
                    style={{ transform: 'translateZ(0)' }}
                  />

                  <div className="relative aspect-video">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-center
                          ${project.needsBackground ? 'bg-white p-20 object-contain' : 'object-cover'}`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <ExternalLink className="w-6 h-6 text-white group-hover:text-violet-400 transition-colors" />
                      </div>
                    </a>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-violet-400 mb-2">{project.role}</p>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-violet-500/20 text-violet-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
