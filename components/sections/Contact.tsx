'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contacto
          </h2>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
              ¿Interesado en trabajar juntos? ¡No dudes en contactarme!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
                </div>
              </motion.a>

              {personalInfo.phone && (
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
                  </div>
                </motion.a>
              )}

              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-400">Conectar</p>
                  </div>
                </motion.a>
              )}

              {personalInfo.github && (
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-800 dark:bg-gray-600 p-3 rounded-lg">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-400">Ver repositorios</p>
                  </div>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
