'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, FileCode } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { jupyterNotebooks } from '@/data/jupyter-notebooks';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SQLViewer from '@/components/SQLViewer';
import SQLResults from '@/components/SQLResults';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Proyecto no encontrado
              </h1>
              <Link
                href="/#projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Volver a proyectos
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
              href="/#projects"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver a proyectos</span>
            </Link>

            {/* Información del proyecto */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.longDescription}
                    </p>
                  )}
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Destacado
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Ver proyecto</span>
                  </a>
                )}
                {project.notebookIds && project.notebookIds.length > 0 && (
                  <div className="flex flex-col space-y-2">
                    {project.notebookIds.map((notebookId) => {
                      const notebook = jupyterNotebooks.find((nb) => nb.id === notebookId);
                      return notebook ? (
                        <Link
                          key={notebookId}
                          href={`/notebooks/${notebookId}`}
                          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <FileCode size={18} />
                          <span>{notebook.title}</span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                )}
                {project.notebookId && !project.notebookIds && (
                  <Link
                    href={`/notebooks/${project.notebookId}`}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <FileCode size={18} />
                    <span>Ver Notebook</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Visualizador SQL si tiene archivo SQL */}
            {project.sqlFileUrl && (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                  <SQLViewer sqlFileUrl={project.sqlFileUrl} title="Código SQL Completo" />
                </div>
                
                {/* Resultados de las consultas */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <SQLResults />
                </div>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
