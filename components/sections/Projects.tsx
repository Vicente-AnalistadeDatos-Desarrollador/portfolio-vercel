'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, BookOpen, FileCode } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </h2>
            <Link
              href="/notebooks"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
            >
              <span>Ver Notebooks</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {featuredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                  {(project.notebookId || project.notebookIds || project.sqlFileUrl) ? (
                    <div className="p-6">
                      <Link 
                        href={project.notebookIds ? `/notebooks/${project.notebookIds[0]}` : project.notebookId ? `/notebooks/${project.notebookId}` : `/projects/${project.id}`} 
                        className="block"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.description}
                        </p>
                        {project.longDescription && (
                          <p className="text-gray-500 dark:text-gray-500 mb-4 text-sm">
                            {project.longDescription}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors mb-4">
                          {project.notebookIds ? (
                            <>
                              <BookOpen size={20} />
                              <span>Ver Notebooks Interactivos ({project.notebookIds.length})</span>
                            </>
                          ) : project.notebookId ? (
                            <>
                              <BookOpen size={20} />
                              <span>Ver Notebook Interactivo</span>
                            </>
                          ) : (
                            <>
                              <FileCode size={20} />
                              <span>Ver Código SQL</span>
                            </>
                          )}
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                      <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-gray-200 dark:border-gray-700">
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
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      {project.longDescription && (
                        <p className="text-gray-500 dark:text-gray-500 mb-4 text-sm">
                          {project.longDescription}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
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
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {otherProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all ${
                    project.notebookId ? 'cursor-pointer group' : ''
                  }`}
                >
                  {(project.notebookId || project.notebookIds || project.sqlFileUrl) ? (
                    <>
                      <Link 
                        href={project.notebookIds ? `/notebooks/${project.notebookIds[0]}` : project.notebookId ? `/notebooks/${project.notebookId}` : `/projects/${project.id}`} 
                        className="block group"
                      >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                          {project.notebookIds ? (
                            <>
                              <BookOpen size={16} />
                              <span>Ver Notebooks ({project.notebookIds.length})</span>
                            </>
                          ) : project.notebookId ? (
                            <>
                              <BookOpen size={16} />
                              <span>Ver Notebook Interactivo</span>
                            </>
                          ) : (
                            <>
                              <FileCode size={16} />
                              <span>Ver Código SQL</span>
                            </>
                          )}
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          Ver código →
                        </a>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
