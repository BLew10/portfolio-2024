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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-violet-300" />
              <p className="text-gray-300">brandonlewis.10@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-violet-300" />
              <p className="text-gray-300">+1 (916) 509-0306</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-violet-300" />
              <p className="text-gray-300">Sacramento, CA</p>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-violet-400/30 rounded-lg focus:outline-none focus:border-violet-400 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-violet-400/30 rounded-lg focus:outline-none focus:border-violet-400 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-violet-400/30 rounded-lg focus:outline-none focus:border-violet-400 text-white placeholder-gray-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}