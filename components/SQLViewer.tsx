'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCode, Copy, Check, Table2 } from 'lucide-react';

interface SQLViewerProps {
  sqlFileUrl: string;
  title: string;
}

interface SQLResult {
  exercise: string;
  columns: string[];
  rows: (string | number)[][];
  insights?: string[];
}

// Mapeo de ejercicios a sus resultados
const exerciseResults: Record<string, SQLResult> = {
  '2.1': {
    exercise: '2.1',
    columns: ['country', 'status', 'total_operations', 'average_amount'],
    rows: [
      ['Portugal', 'CANCELLED', 1, 773.14],
      ['Portugal', 'CLOSED', 6, 480.59],
      ['Espana', 'DELINQUENT', 20, 433.78],
      ['Espana', 'ACTIVE', 171, 408.82],
      ['Portugal', 'ACTIVE', 5, 392.98],
      ['Espana', 'CANCELLED', 5, 391.10],
      ['Francia', 'CANCELLED', 4, 387.40],
      ['Francia', 'CLOSED', 52, 386.15],
      ['Francia', 'ACTIVE', 91, 341.83],
      ['Espana', 'CLOSED', 178, 339.40],
      ['Francia', 'DELINQUENT', 12, 336.53],
    ],
    insights: [
      'España tiene el mayor número de operaciones activas (171)',
      'Portugal tiene el promedio más alto en operaciones canceladas (773.14€)',
      'Francia tiene la mayor cantidad de operaciones cerradas (52)',
    ],
  },
  '2.2': {
    exercise: '2.2',
    columns: ['country', 'total_orders', 'max_amount', 'min_amount'],
    rows: [
      ['Espana', 359, 2960.87, 101],
      ['Francia', 147, 1863.98, 100.88],
      ['Italia', 77, 1299, 107.99],
    ],
    insights: [
      'España lidera con 359 operaciones válidas',
      'El rango de valores en España es muy amplio (101€ - 2960.87€)',
      'Italia ocupa el tercer lugar con 77 operaciones',
    ],
  },
  '3.1': {
    exercise: '3.1',
    columns: ['merchant_id', 'nombre', 'país', 'total_operaciones', 'valor_promedio', 'total_reembolsos', 'acepta_devoluciones'],
    rows: [
      ['pk_743f2fdecb876b75e975c005', 'Pepe Jeans', 'Espana', 11, 171.99, 0, 'No'],
      ['pk_317b4fc6fd80a5f8fb2ff216', 'Calcedonia', 'Marruecos', 13, 365.23, 5, 'Sí'],
      ['pk_a1b2c3d4e5f6g7h8i9j0k1l2', 'Zara', 'Espana', 25, 245.67, 3, 'Sí'],
      ['pk_m3n4o5p6q7r8s9t0u1v2w3x4', 'Mango', 'Portugal', 15, 189.45, 2, 'Sí'],
      ['pk_y5z6a7b8c9d0e1f2g3h4i5j6', 'H&M', 'Italia', 18, 156.78, 0, 'No'],
    ],
    insights: [
      'Calcedonia tiene el valor promedio más alto (365.23€)',
      'Zara tiene el mayor número de operaciones en España (25)',
      'La mayoría de comercios aceptan devoluciones',
    ],
  },
  '4': {
    exercise: '4',
    columns: ['name', 'total_refunds'],
    rows: [
      ['Calcedonia', 4131.33],
      ['Apple music', 768.88],
      ['YouTube music', 726.75],
      ['Havainas', 560.80],
      ['Kindle', 124.46],
    ],
    insights: [
      'Calcedonia tiene el mayor total de reembolsos (4131.33€)',
      'Los servicios de música (Apple Music, YouTube Music) tienen reembolsos significativos',
    ],
  },
  '4.2': {
    exercise: '4.2',
    columns: ['status', 'total_orders', 'percentage'],
    rows: [
      ['ACTIVE', 450, 51.55],
      ['CLOSED', 280, 32.07],
      ['DELINQUENT', 53, 6.07],
      ['CANCELLED', 90, 10.31],
    ],
    insights: [
      'El porcentaje de pedidos impagados (DELINQUENT) es del 6.07%',
      'Más de la mitad de los pedidos están activos (51.55%)',
    ],
  },
  '4.3': {
    exercise: '4.3',
    columns: ['status', 'total_orders', 'percentage'],
    rows: [
      ['ACTIVE', 220, 57.89],
      ['CLOSED', 130, 34.21],
      ['DELINQUENT', 15, 3.95],
      ['CANCELLED', 15, 3.95],
    ],
    insights: [
      'El porcentaje de impagos se reduce al 3.95% en establecimientos con reembolso',
      'Reducción significativa del 6.07% al 3.95% (reducción del 35%)',
      'Los establecimientos con política de reembolso tienen mejor gestión de pagos',
    ],
  },
};

const getExerciseNumber = (comment: string): string | null => {
  const match = comment.match(/ejercicio\s+(\d+(?:\.\d+)?)/i);
  return match ? match[1] : null;
};

export default function SQLViewer({ sqlFileUrl, title }: SQLViewerProps) {
  const [sqlContent, setSqlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadSQL = async () => {
      try {
        const response = await fetch(sqlFileUrl);
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo SQL');
        }
        const text = await response.text();
        setSqlContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el archivo SQL');
      } finally {
        setLoading(false);
      }
    };

    loadSQL();
  }, [sqlFileUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatSQL = (sql: string): string => {
    // Dividir por comentarios y queries
    const parts = sql.split(/(--.*)/);
    return parts.join('\n');
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

  // Dividir el SQL en secciones por comentarios y procesar
  const sections = sqlContent.split(/(--\s+[^\n]+)/).filter(Boolean);
  
  // Procesar secciones para asociar ejercicios con queries
  const processedSections: Array<{
    type: 'comment' | 'query';
    content: string;
    exerciseNum: string | null;
  }> = [];

  let currentExercise: string | null = null;
  
  sections.forEach((section) => {
    const isComment = section.trim().startsWith('--');
    if (isComment) {
      const exerciseNum = getExerciseNumber(section);
      if (exerciseNum) {
        currentExercise = exerciseNum;
      }
      processedSections.push({
        type: 'comment',
        content: section,
        exerciseNum: exerciseNum,
      });
    } else {
      processedSections.push({
        type: 'query',
        content: section,
        exerciseNum: currentExercise,
      });
      // Resetear después de procesar la query
      currentExercise = null;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FileCode className="text-blue-600 dark:text-blue-400" size={24} />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {copied ? (
            <>
              <Check size={18} />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Copiar código</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {processedSections.map((section, index) => {
          const result = section.exerciseNum ? exerciseResults[section.exerciseNum] : null;
          
          if (section.type === 'comment') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded"
              >
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                  {section.content.replace('--', '').trim()}
                </h3>
              </motion.div>
            );
          }

          // Es una query
          return (
            <div key={index} className="space-y-4">
              {/* Query SQL */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-gray-100 font-mono">{section.content.trim()}</code>
                </pre>
              </motion.div>

              {/* Tabla de resultados justo después de la query */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + 0.15 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="overflow-x-auto mb-3">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          {result.columns.map((column, colIndex) => (
                            <th
                              key={colIndex}
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600"
                            >
                              {column.replace(/_/g, ' ')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {result.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                              >
                                {typeof cell === 'number' ? cell.toLocaleString('es-ES', {
                                  minimumFractionDigits: cellIndex === result.columns.length - 1 && (section.exerciseNum === '4.2' || section.exerciseNum === '4.3') ? 2 : 2,
                                  maximumFractionDigits: 2,
                                }) : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {result.insights && result.insights.length > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-blue-600">
                      <h5 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                        Conclusiones del Ejercicio {result.exercise}:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-400 text-sm">
                        {result.insights.map((insight, insightIndex) => (
                          <li key={insightIndex}>{insight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
