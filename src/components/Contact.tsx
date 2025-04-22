import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-violet-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-8"
        >
          <div className="flex items-center space-x-4 justify-center">
            <Mail className="w-6 h-6 text-violet-300" />
            <a 
              href="mailto:brandonlewis.10@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              brandonlewis.10@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <Phone className="w-6 h-6 text-violet-300" />
            <a 
              href="tel:+19165090306"
              className="text-gray-300 hover:text-white transition-colors"
            >
              +1 (916) 509-0306
            </a>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <MapPin className="w-6 h-6 text-violet-300" />
            <p className="text-gray-300">Sacramento, CA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}