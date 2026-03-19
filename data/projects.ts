import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'pump-it-up',
    title: 'Pump it Up: Data Mining the Water Table',
    description: 'Modelo predictivo de Machine Learning desarrollado para la competencia de DrivenData. Predicción del estado de bombas de agua en Tanzania con un score de 0.7974.',
    longDescription: 'Proyecto desarrollado para la competencia de DrivenData "Pump it Up: Data Mining the Water Table". El objetivo es predecir qué bombas de agua están funcionales, necesitan reparación o no funcionan en Tanzania. El modelo Random Forest obtuvo un score de 0.7974, utilizando técnicas de feature engineering, oversampling (SMOTE) y análisis exploratorio de datos.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'XGBoost', 'SMOTE', 'Pandas', 'Matplotlib', 'Seaborn', 'PyCaret'],
    githubUrl: 'https://github.com/luisgimenezreal',
    featured: true,
    category: 'machine-learning',
    notebookId: 'mejor-modelo' // Vincula con el notebook interactivo
  },
  {
    id: 'sql-bases-datos',
    title: 'Bases de Datos SQL - Tarea Final',
    description: 'Proyecto completo de SQL del Máster en Data Science. Incluye modelado de bases de datos (ER, Lógico, Físico) y consultas complejas para análisis de pedidos, establecimientos y devoluciones.',
    longDescription: 'Proyecto final de la asignatura SQL del Máster Data Science, Big Data & Business Analytics. El proyecto incluye: diseño de modelo Entidad-Relación, modelo lógico y modelo físico; consultas SQL complejas con JOINs, agregaciones y subconsultas; análisis de datos de pedidos, establecimientos y devoluciones; y un análisis final sobre la reducción de impagos mediante el estudio de establecimientos que ofrecen reembolsos. El análisis demuestra que los establecimientos con política de reembolsos tienen un porcentaje de impagos significativamente menor (3.95% vs 6.07%).',
    technologies: ['SQL', 'MySQL', 'Modelado de Datos', 'JOINs', 'Agregaciones', 'Vistas', 'Subconsultas'],
    githubUrl: 'https://github.com/luisgimenezreal',
    featured: false,
    category: 'data-science',
    sqlFileUrl: '/projects/sql-tarea-final.sql'
  },
  {
    id: 'ejercicios-nlp-redes',
    title: 'Ejercicios de NLP y Análisis de Redes',
    description: 'Conjunto de ejercicios del Máster en Data Science: clasificación de cyberbullying en tweets usando NLP y análisis de redes sociales con NetworkX.',
    longDescription: 'Proyecto compuesto por dos ejercicios del Máster Data Science, Big Data & Business Analytics: (1) Clasificación de cyberbullying en tweets mediante técnicas de NLP (TF-IDF, embeddings, análisis de sentimiento) y entrenamiento de múltiples modelos de clasificación; (2) Análisis completo de una red social de Twitter con NetworkX, incluyendo análisis topológico, métricas de centralidad (PageRank, cercanía, intermediación) y visualización de grafos.',
    technologies: ['Python', 'NLP', 'NetworkX', 'Scikit-learn', 'TF-IDF', 'Word Embeddings', 'Análisis de Redes', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/luisgimenezreal',
    featured: false,
    category: 'data-science',
    notebookIds: ['ejercicio-1-2', 'ejercicio-3'] // Múltiples notebooks relacionados
  },
  {
    id: 'practica-mineria',
    title: 'Práctica de Minería de Datos',
    description: 'Práctica completa de Minería de Datos trabajando con el dataset FEV (Forced Expiratory Volume). Incluye análisis exploratorio, preprocesado de datos, análisis de asociación entre variables y construcción de modelos predictivos.',
    longDescription: 'Práctica de evaluación del módulo de Minería de Datos del Máster Data Science, Big Data & Business Analytics. El proyecto trabaja con el dataset FEV (Forced Expiratory Volume) que contiene información sobre capacidad pulmonar en niños. Incluye: análisis exploratorio de datos, preprocesado y normalización de variables, análisis de asociación entre predictores y variable objetivo, y construcción de modelos predictivos para predecir la capacidad pulmonar basándose en variables como edad, altura, sexo y hábitos de fumar.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Scipy', 'Minería de Datos', 'Análisis Estadístico'],
    githubUrl: 'https://github.com/luisgimenezreal',
    featured: false,
    category: 'data-science',
    notebookId: 'practica-mineria'
  }
  // Añade más proyectos aquí
];
