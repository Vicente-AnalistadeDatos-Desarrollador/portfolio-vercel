import { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tragsatec',
    position: 'Técnico',
    location: 'España',
    startDate: '2025-11',
    current: true,
    description: [
      'Desarrollo de funciones técnicas especializadas',
      'Análisis y procesamiento de información',
      'Colaboración en proyectos técnicos'
    ],
    technologies: ['Python', 'SQL', 'Análisis de Datos']
  },
  {
    id: '2',
    company: 'Ayuntamiento de Binissalem',
    position: 'Técnico-Económico en el Departamento de Servicios Económicos',
    location: 'Binissalem, España',
    startDate: '2024-12',
    endDate: '2025-11',
    current: false,
    description: [
      'Seguimiento de normativas fiscales y presupuestarias',
      'Análisis económico para la toma de decisiones',
      'Elaboración de informes financieros'
    ],
    technologies: ['Análisis Económico', 'Normativas Fiscales', 'Informes Financieros']
  },
  {
    id: '3',
    company: 'Proyecto TFM - Universidad Complutense de Madrid',
    position: 'Proyecto Predictivo de Machine Learning con Visualización de Datos',
    location: 'Madrid, España',
    startDate: '2024-05',
    endDate: '2024-09',
    current: false,
    description: [
      'Desarrollo de modelo predictivo utilizando técnicas de machine learning',
      'Creación de visualizaciones interactivas de datos',
      'Análisis exhaustivo de datasets complejos',
      'Implementación de algoritmos de aprendizaje automático'
    ],
    technologies: ['Python', 'Machine Learning', 'Visualización de Datos', 'Pandas', 'Scikit-learn', 'Tableau']
  },
  {
    id: '4',
    company: 'Proyecto Universitario',
    position: 'Proyecto Predictivo de Machine Learning',
    location: 'España',
    startDate: '2024-02',
    endDate: '2024-04',
    current: false,
    description: [
      'Desarrollo de modelo predictivo de machine learning',
      'Procesamiento y análisis de datos',
      'Implementación de algoritmos de aprendizaje automático'
    ],
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn']
  },
  {
    id: '5',
    company: 'Parc BIT',
    position: 'Prácticas como Economista',
    location: 'Palma, España',
    startDate: '2023-01', // Fecha aproximada, ajusta si conoces la fecha exacta
    endDate: '2023-06', // Fecha aproximada
    current: false,
    description: [
      'Análisis del mercado en empresa tecnológica de Internet of Things',
      'Determinación de mercado potencial',
      'Plan de industrialización',
      'Estudio del arte acerca del producto'
    ],
    technologies: ['Análisis de Mercado', 'Economía', 'IoT']
  }
];
