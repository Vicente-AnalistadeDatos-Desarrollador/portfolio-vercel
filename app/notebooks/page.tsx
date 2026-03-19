'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { jupyterNotebooks } from '@/data/jupyter-notebooks';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotebooksPage() {
  const featuredNotebooks = jupyterNotebooks.filter((nb) => nb.featured);
  const otherNotebooks = jupyterNotebooks.filter((nb) => !nb.featured);

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jupyter Notebooks
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
              Colección de análisis de datos, experimentos de machine learning y proyectos de ciencia de datos desarrollados en Jupyter Notebooks. Cada notebook incluye código, visualizaciones y explicaciones detalladas.
            </p>

            {featuredNotebooks.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Proyectos Destacados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredNotebooks.map((notebook, index) => (
                    <motion.div
                      key={notebook.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {notebook.title}
                        </h3>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-medium">
                          Destacado
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {notebook.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                        <Calendar size={16} className="mr-2" />
                        {new Date(notebook.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {notebook.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {notebook.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Link
                          href={`/notebooks/${notebook.id}`}
                          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>Ver Notebook Interactivo</span>
                        </Link>
                        <a
                          href={notebook.notebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span>GitHub</span>
                        </a>
                        {notebook.githubUrl && (
                          <a
                            href={notebook.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <Github size={18} />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {otherNotebooks.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Todos los Notebooks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherNotebooks.map((notebook, index) => (
                    <motion.div
                      key={notebook.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        {notebook.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {notebook.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {notebook.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Link
                          href={`/notebooks/${notebook.id}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          Ver interactivo →
                        </Link>
                        <a
                          href={notebook.notebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
                        >
                          GitHub →
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {jupyterNotebooks.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Aún no hay notebooks publicados. Los notebooks se mostrarán aquí cuando los agregues.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Puedes agregar tus notebooks editando el archivo{' '}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    data/jupyter-notebooks.ts
                  </code>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
