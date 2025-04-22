import { motion } from 'framer-motion';
import { Dumbbell, Target, Users, Tv2, Heart, Trophy } from 'lucide-react';

const personalDetails = [
  {
    icon: Dumbbell,
    title: "Former Athlete",
    description: "Played Division I football at the University of Washington while pursuing a Mathematics degree.",
    image: "/images/football.png",
    imageAlt: "UW Husky Stadium"
  },
  {
    icon: Target,
    title: "Sports Enthusiast",
    description: "Love to golf but I'm no good. I can talk sports all day long.",
    image: "/images/golf.png",
    imageAlt: "Golf course at sunset"
  },
  {
    icon: Users,
    title: "People Person",
    description: "Nothing I love more than connecting with people and building relationships. That's what life is all about.",
    image: "/images/friends.jpeg",
    imageAlt: "Friends enjoying time together"
  },
  {
    icon: Tv2,
    title: "Survivor Super Fan",
    description: "My life's dream is to compete on the show. You find out who you are and what you are made of. I'm all about progression and growth. I want to truly find out who I am and what I am capable of.",
    image: "/images/survivor.png",
    imageAlt: "Survivor Logo"
  },
  {
    icon: Heart,
    title: "Compassionate Spirit",
    description: "Deeply caring and empathetic, always prioritizing the well-being of others.",
    image: "/images/barret.jpeg",
    imageAlt: "Barret and I"
  },
  {
    icon: Trophy,
    title: "Life Philosophy",
    description: "Believe in living life to the fullest while making a positive impact on those around me.",
    image: "/images/family.png",
    imageAlt: "Family"
  }
];

export default function About() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-violet-950/10 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
            About Me
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed font-light">
            Proudly born and raised in Sacramento, CA. I'm a former Division I athlete, turned former medical student, turned software developer. 
            My journey has been anything but conventional, and that's what makes it special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {personalDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.05, 0.95]
              }}
              className="group"
            >
              <div className="relative pt-6 h-full">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.21, 0.45, 0.05, 0.95]
                  }}
                  className="relative will-change-transform h-full"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <div 
                    className="absolute -inset-x-3 -inset-y-4 bg-gradient-to-b from-violet-600/20 to-violet-950/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-400 ease-[cubic-bezier(0.21,0.45,0.05,0.95)]"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  
                  <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={detail.image}
                        alt={detail.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2.5 bg-white/[0.03] rounded-xl border border-white/[0.05] backdrop-blur-md">
                            <detail.icon className="w-6 h-6 text-violet-300" />
                          </div>
                          <h3 className="text-xl font-semibold text-white tracking-wide">
                            {detail.title}
                          </h3>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <p className="text-gray-300/90 leading-relaxed tracking-wide">
                        {detail.description}
                      </p>
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