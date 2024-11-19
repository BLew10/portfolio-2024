import { motion } from 'framer-motion';
import { Code2, Layout, Palette, Sparkles, Terminal, Wand2 } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: "Core Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    icon: Sparkles,
    title: "Frontend Frameworks",
    skills: ["React", "Next.js", "Vue", "Remix"]
  },
  {
    icon: Palette,
    title: "Styling",
    skills: ["Tailwind CSS", "Sass", "CSS-in-JS", "Framer Motion"]
  },
  {
    icon: Layout,
    title: "UI Development",
    skills: ["Responsive Design", "CSS Grid", "Flexbox", "Animations"]
  },
  {
    icon: Terminal,
    title: "Development Tools",
    skills: ["Git", "Vite", "webpack", "npm/yarn"]
  },
  {
    icon: Wand2,
    title: "Best Practices",
    skills: ["Performance", "Accessibility", "SEO", "Clean Code"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-violet-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <skill.icon className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-violet-500/20 text-violet-300 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}