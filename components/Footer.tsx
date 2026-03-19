import Link from 'next/link';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </a>
              {personalInfo.phone && (
                <p className="flex items-center space-x-2">
                  <span>{personalInfo.phone}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block hover:text-blue-400 transition-colors"
              >
                Sobre mí
              </Link>
              <Link
                href="#projects"
                className="block hover:text-blue-400 transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="/notebooks"
                className="block hover:text-blue-400 transition-colors"
              >
                Jupyter Notebooks
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Desarrollado con Next.js, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
