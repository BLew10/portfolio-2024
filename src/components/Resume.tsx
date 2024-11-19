import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const experiences = {
  work: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2020 - Present",
      description: "Led frontend development for enterprise applications, implemented modern UI/UX practices, and mentored junior developers.",
      achievements: [
        "Reduced load time by 40% through performance optimizations",
        "Implemented component library used across 5 projects",
        "Led team of 4 frontend developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "2018 - 2020",
      description: "Developed responsive web applications using React and modern frontend technologies.",
      achievements: [
        "Built 3 major client projects from scratch",
        "Introduced TypeScript to the development workflow",
        "Improved accessibility across all projects"
      ]
    }
  ],
  education: [
    {
      title: "Master of Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Human-Computer Interaction and Web Technologies",
      achievements: [
        "4.0 GPA",
        "Published research on modern web frameworks",
        "Teaching Assistant for Web Development course"
      ]
    },
    {
      title: "Bachelor of Computer Science",
      institution: "State University",
      period: "2012 - 2016",
      description: "Focus on Software Engineering and Web Development",
      achievements: [
        "Dean's List all semesters",
        "Led Web Development Club",
        "Completed 3 internships"
      ]
    }
  ]
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Resume
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-violet-900/30 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('work')}
                className={`flex items-center px-6 py-3 rounded-md transition-colors ${
                  activeTab === 'work'
                    ? 'bg-violet-600 text-white'
                    : 'text-violet-300 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Work History
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center px-6 py-3 rounded-md transition-colors ${
                  activeTab === 'education'
                    ? 'bg-violet-600 text-white'
                    : 'text-violet-300 hover:text-white'
                }`}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Education
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {experiences[activeTab].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
              >
                <motion.button
                  onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                  className="w-full text-left p-6 flex items-start justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {activeTab === 'work' ? (
                        <Briefcase className="w-5 h-5 text-violet-400 mr-2" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-violet-400 mr-2" />
                      )}
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <div className="text-violet-300 mb-2">{item.company || item.institution}</div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedItem === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-violet-400" />
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedItem === index ? 'auto' : 0,
                    opacity: expandedItem === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-violet-300"
                        >
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}