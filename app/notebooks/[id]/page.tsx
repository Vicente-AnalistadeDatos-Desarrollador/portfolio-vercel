'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { jupyterNotebooks } from '@/data/jupyter-notebooks';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotebookViewer from '@/components/NotebookViewer';

export default function NotebookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const notebook = jupyterNotebooks.find((nb) => nb.id === id);

  if (!notebook) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Notebook no encontrado
              </h1>
              <Link
                href="/notebooks"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Volver a notebooks
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Convertir URL de GitHub a path local si es necesario
  const getNotebookPath = (id: string): string => {
    // Mapear IDs a paths locales
    const pathMap: Record<string, string> = {
      'mejor-modelo': '/notebooks/mejor-modelo.ipynb',
      'ejercicio-1-2': '/notebooks/ejercicio-1-2.ipynb',
      'ejercicio-3': '/notebooks/ejercicio-3.ipynb',
      'practica-mineria': '/notebooks/practica-mineria.ipynb',
    };
    return pathMap[id] || `/notebooks/${id}.ipynb`;
  };

  const notebookPath = getNotebookPath(notebook.id);

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
              href="/notebooks"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver a notebooks</span>
            </Link>

            {/* Información del notebook */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {notebook.title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {notebook.description}
                  </p>
                </div>
                {notebook.featured && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Destacado
                  </span>
                )}
              </div>

              {/* Información de la competencia */}
              {notebook.id === 'mejor-modelo' && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                        <Target size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                        Competencia: DrivenData - Pump it Up
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Este proyecto fue desarrollado para la competencia de <strong>DrivenData</strong> "Pump it Up: Data Mining the Water Table", 
                        una competencia de nivel intermedio para predecir el estado de las bombas de agua en Tanzania. 
                        El objetivo es ayudar a mejorar las operaciones de mantenimiento y garantizar el acceso a agua potable 
                        limpia para las comunidades.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Objetivo:</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Predecir si una bomba de agua es funcional, necesita reparación o no funciona
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Score obtenido:</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-bold text-blue-600 dark:text-blue-400">
                            0.7974
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Usuario en competencia:</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            luissinho1999
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Nivel:</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Intermedio - Práctica
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://www.drivendata.org/competitions/7/pump-it-up-data-mining-the-water-table/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        <span>Ver competencia en DrivenData</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {new Date(notebook.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex flex-wrap gap-2">
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
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {notebook.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={notebook.notebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Ver en GitHub</span>
                </a>
                {notebook.githubUrl && (
                  <a
                    href={notebook.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Repositorio</span>
                  </a>
                )}
              </div>
            </div>

            {/* Visualizador del notebook */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <NotebookViewer notebookPath={notebookPath} title={notebook.title} />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
