import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar, ChevronRight, GraduationCap, Code2 } from 'lucide-react';
import { useState } from 'react';

type WorkExperience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

type EducationExperience = {
  title: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
};

type ProjectExperience = {
  title: string;
  technologies: string;
  period: string;
  description: string;
  achievements: string[];
};

const experiences = {
  work: [
    {
      title: "Lead Frontend Developer",
      company: "Alliance Innovations, Nexus",
      period: "October 2023 - Present",
      description: "Digital consultancy specializing in modern web solutions for enterprise clients, with a strong focus in healthcare.",
      achievements: [
        "Led and/or assisted in frontend architecture and development for multiple enterprise-grade healthcare projects",
        "Sole FE developer in implementing automated patient signup system for WellSpan Health",
        "Delivered high-impact enhancements to Nexus, a HIPAA-compliant analytics platform",
        "Served as client-facing engineer, presenting technical solutions to stakeholders",
        "Owned Vercel CI/CD pipeline and preview environment management across projects"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Adora POS",
      period: "January 2023 - October 2023",
      description: "Cloud-based restaurant POS platform serving multi-location pizzerias.",
      achievements: [
        "Developed critical features in web-based POS system and online ordering platform",
        "Built CSV-to-database customer migration tool with dynamic field mapping",
        "Enabled tablet deployment by optimizing POS web app for mobile devices",
        "Owned reporting module, ensuring accuracy and data integrity",
        "Contributed to online ordering platform and TypeScript migration"
      ]
    }
  ] as WorkExperience[],
  education: [
    {
      title: "Software Development Bootcamp",
      institution: "Coding Dojo",
      period: "September 2022 - December 2022",
      description: "Intensive full-stack development program",
      achievements: [
        "Completed full-stack web development curriculum",
        "Built multiple full-stack applications",
        "Learned multiple programming languages and frameworks"
      ]
    },
    {
      title: "Medical Student",
      institution: "Kaiser Permanente Bernard J. Tyson School of Medicine",
      period: "July 2021 - July 2022",
      description: "Full Scholarship Recipient",
      achievements: [
        "Medical College Admissions Test (MCAT): 514 - 90th Percentile",
        "Completed first year of medical education",
        "Transitioned to software development career"
      ]
    },
    {
      title: "Bachelor of Arts: Mathematics",
      institution: "University of Washington",
      period: "2015 - 2019",
      description: "Student-Athlete: Football – Full Scholarship",
      achievements: [
        "Pacific-12 All Academic First Team – 2015",
        "Balanced rigorous academic schedule with Division I athletics",
        "Developed strong analytical and problem-solving skills"
      ]
    }
  ] as EducationExperience[],
  projects: [
    {
      title: "Community Calendar Planner",
      technologies: "NextJS, Tailwinds, Framer Motion, React, Prisma, Supabase",
      period: "2023",
      description: "A comprehensive web application for managing advertising sales, payment tracking, and content scheduling for custom calendar publications.",
      achievements: [
        "Built sophisticated calendar slot reservation system",
        "Implemented advertisement and financial tracking modules",
        "Developed automated invoicing with dynamic PDF generation"
      ]
    }
  ] as ProjectExperience[]
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'projects'>('work');
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
            <div className="inline-flex flex-col sm:flex-row bg-violet-900/30 rounded-lg p-1 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('work')}
                className={`flex items-center justify-center px-4 sm:px-6 py-3 rounded-md transition-colors w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === 'work'
                    ? 'bg-violet-600 text-white'
                    : 'text-violet-300 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                <span className="whitespace-nowrap">Work History</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center justify-center px-4 sm:px-6 py-3 rounded-md transition-colors w-full sm:w-auto mb-1 sm:mb-0 ${
                  activeTab === 'education'
                    ? 'bg-violet-600 text-white'
                    : 'text-violet-300 hover:text-white'
                }`}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                <span className="whitespace-nowrap">Education</span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center justify-center px-4 sm:px-6 py-3 rounded-md transition-colors w-full sm:w-auto ${
                  activeTab === 'projects'
                    ? 'bg-violet-600 text-white'
                    : 'text-violet-300 hover:text-white'
                }`}
              >
                <Code2 className="w-5 h-5 mr-2" />
                <span className="whitespace-nowrap">Projects</span>
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
                      ) : activeTab === 'education' ? (
                        <BookOpen className="w-5 h-5 text-violet-400 mr-2" />
                      ) : (
                        <Code2 className="w-5 h-5 text-violet-400 mr-2" />
                      )}
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <div className="text-violet-300 mb-2">
                      {activeTab === 'work' ? (item as WorkExperience).company :
                       activeTab === 'education' ? (item as EducationExperience).institution :
                       (item as ProjectExperience).technologies}
                    </div>
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