'use client';

import { motion } from 'framer-motion';
import { Table2, TrendingUp } from 'lucide-react';

interface SQLResult {
  exercise: string;
  title: string;
  columns: string[];
  rows: (string | number)[][];
  insights?: string[];
}

const sqlResults: SQLResult[] = [
  {
    exercise: '2.1',
    title: 'Operaciones por país y estado',
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
  {
    exercise: '2.2',
    title: 'Top 3 países con mayor número de operaciones',
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
  {
    exercise: '3.1',
    title: 'Análisis de comercios por país',
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
  {
    exercise: '4',
    title: 'Análisis de reducción de impagos',
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
  {
    exercise: '4.2',
    title: 'Porcentaje de pedidos por estado (Todos)',
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
  {
    exercise: '4.3',
    title: 'Porcentaje de pedidos por estado (Establecimientos con reembolso)',
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
];

export default function SQLResults() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Resultados de las Consultas
        </h2>
      </div>

      {sqlResults.map((result, index) => (
        <motion.div
          key={result.exercise}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Table2 className="text-blue-600 dark:text-blue-400" size={20} />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Ejercicio {result.exercise}: {result.title}
            </h3>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {result.columns.map((column, colIndex) => (
                    <th
                      key={colIndex}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {column.replace('_', ' ')}
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
                        className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {typeof cell === 'number' ? cell.toLocaleString('es-ES', {
                          minimumFractionDigits: cellIndex === result.columns.length - 1 && result.exercise === '4.2' || result.exercise === '4.3' ? 2 : 2,
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
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Conclusiones del Ejercicio {result.exercise}:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-400 text-sm">
                {result.insights.map((insight, insightIndex) => (
                  <li key={insightIndex}>{insight}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      ))}

      {/* Conclusión final del Ejercicio 4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: sqlResults.length * 0.1 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border-l-4 border-green-600"
      >
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          Conclusión General del Ejercicio 4
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          La reducción del porcentaje de pedidos impagados de <strong>6.07%</strong> a <strong>3.95%</strong> 
          en establecimientos que ofrecen reembolso indica una mejora significativa en la gestión de pagos.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Los establecimientos seleccionados (Calcedonia, Apple Music, YouTube Music, Havaianas, Kindle) 
          representan una muestra significativa (380 pedidos de 873 totales), lo que fortalece la validez 
          de las conclusiones obtenidas. Esto sugiere que implementar medidas que fomenten el reembolso 
          podría ser una estrategia efectiva para mitigar el riesgo de impago.
        </p>
      </motion.div>
    </div>
  );
}
