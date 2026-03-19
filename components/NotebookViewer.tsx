'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Code, FileText, BarChart3, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface NotebookCell {
  cell_type: 'markdown' | 'code';
  source: string | string[];
  outputs?: any[];
  execution_count?: number | null;
}

interface NotebookViewerProps {
  notebookPath: string;
  title: string;
}

export default function NotebookViewer({ notebookPath, title }: NotebookViewerProps) {
  const [notebook, setNotebook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCells, setExpandedCells] = useState<Set<number>>(new Set());
  const [showOutputs, setShowOutputs] = useState(true);

  useEffect(() => {
    const loadNotebook = async () => {
      try {
        const response = await fetch(notebookPath);
        if (!response.ok) {
          throw new Error('No se pudo cargar el notebook');
        }
        const data = await response.json();
        setNotebook(data);
        // Expandir todas las celdas por defecto
        setExpandedCells(new Set(data.cells.map((_: any, i: number) => i)));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el notebook');
      } finally {
        setLoading(false);
      }
    };

    loadNotebook();
  }, [notebookPath]);

  const toggleCell = (index: number) => {
    const newExpanded = new Set(expandedCells);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCells(newExpanded);
  };

  const getCellSource = (cell: NotebookCell): string => {
    if (Array.isArray(cell.source)) {
      return cell.source.join('');
    }
    return cell.source || '';
  };

  const renderOutput = (output: any, index: number) => {
    if (output.output_type === 'stream') {
      return (
        <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
          {output.text?.join('') || ''}
        </pre>
      );
    }
    if (output.output_type === 'display_data' || output.output_type === 'execute_result') {
      if (output.data?.['image/png']) {
        return (
          <div key={index} className="my-2">
            <img
              src={`data:image/png;base64,${output.data['image/png']}`}
              alt="Notebook output"
              className="max-w-full rounded"
            />
          </div>
        );
      }
      if (output.data?.['text/html']) {
        return (
          <div
            key={index}
            className="my-2 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: output.data['text/html'].join('') }}
          />
        );
      }
      if (output.data?.['text/plain']) {
        return (
          <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
            {output.data['text/plain'].join('')}
          </pre>
        );
      }
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <p className="text-red-800 dark:text-red-200">{error}</p>
      </div>
    );
  }

  if (!notebook || !notebook.cells) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <p className="text-yellow-800 dark:text-yellow-200">El notebook no tiene un formato válido</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <button
          onClick={() => setShowOutputs(!showOutputs)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          {showOutputs ? 'Ocultar' : 'Mostrar'} Salidas
        </button>
      </div>

      {notebook.cells.map((cell: NotebookCell, index: number) => {
        const isExpanded = expandedCells.has(index);
        const source = getCellSource(cell);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800"
          >
            {/* Header de la celda */}
            <div
              className={`flex items-center justify-between p-3 cursor-pointer ${
                cell.cell_type === 'code'
                  ? 'bg-blue-50 dark:bg-blue-900/20'
                  : 'bg-gray-50 dark:bg-gray-700/50'
              }`}
              onClick={() => toggleCell(index)}
            >
              <div className="flex items-center space-x-2">
                {cell.cell_type === 'code' ? (
                  <Code size={18} className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <FileText size={18} className="text-green-600 dark:text-green-400" />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {cell.cell_type === 'code' ? 'Código' : 'Markdown'}
                  {cell.cell_type === 'code' && cell.execution_count !== null && (
                    <span className="ml-2 text-gray-500">In [{cell.execution_count}]</span>
                  )}
                </span>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                {isExpanded ? '−' : '+'}
              </button>
            </div>

            {/* Contenido de la celda */}
            {isExpanded && (
              <div className="p-4">
                {cell.cell_type === 'markdown' ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {source}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{source}</code>
                    </pre>
                    {showOutputs && cell.outputs && cell.outputs.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <BarChart3 size={16} />
                          <span>Salidas:</span>
                        </div>
                        {cell.outputs.map((output, outputIndex) => renderOutput(output, outputIndex))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
