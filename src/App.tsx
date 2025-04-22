import { motion, useScroll, useTransform } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-black min-h-screen">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2426')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}