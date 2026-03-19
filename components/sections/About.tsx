'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
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
            Sobre mí
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-30"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src="/profle.jpeg"
                    alt={personalInfo.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <div className="prose prose-lg dark:prose-invert max-w-none flex-1">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Análisis de Datos
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transformación de datos complejos en insights accionables
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desarrollo de modelos predictivos y algoritmos de ML
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                Big Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manejo de grandes volúmenes de datos con tecnologías escalables
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
