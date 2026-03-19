import { JupyterNotebook } from '@/lib/types';

export const jupyterNotebooks: JupyterNotebook[] = [
  {
    id: 'mejor-modelo',
    title: 'Pump it Up: Data Mining the Water Table',
    description: 'Modelo predictivo de Machine Learning desarrollado para la competencia de DrivenData. El objetivo es predecir qué bombas de agua están funcionales, necesitan reparación o no funcionan en Tanzania. El modelo Random Forest obtuvo un score de 0.7974, utilizando técnicas de feature engineering, oversampling (SMOTE) y análisis exploratorio de datos.',
    notebookUrl: 'https://github.com/luissinho1999/notebooks/blob/main/Mejor_Modelo_Entrega%20(1).ipynb',
    githubUrl: 'https://github.com/luisgimenezreal',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'XGBoost', 'SMOTE', 'Pandas', 'Matplotlib', 'Seaborn', 'PyCaret'],
    date: '2024-05-01',
    tags: ['Machine Learning', 'Random Forest', 'Clasificación', 'SMOTE', 'Feature Engineering', 'Competition', 'DrivenData'],
    featured: true
  },
  {
    id: 'ejercicio-1-2',
    title: 'Clasificación de Cyberbullying en Tweets',
    description: 'Proyecto de clasificación de texto para detectar contenido de odio en tweets. Incluye análisis exploratorio, preprocesado de texto (normalización, lematización, eliminación de stopwords), vectorización con TF-IDF y embeddings, y entrenamiento de múltiples modelos de clasificación.',
    notebookUrl: 'https://github.com/luissinho1999/notebooks/blob/main/Giménez_Real_Luis_Ejercicio1_2.ipynb',
    githubUrl: 'https://github.com/luisgimenezreal',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Word Embeddings', 'NLP', 'Clasificación de Texto'],
    date: '2024-03-01',
    tags: ['NLP', 'Clasificación de Texto', 'Cyberbullying', 'TF-IDF', 'Word Embeddings', 'Análisis de Sentimiento'],
    featured: true
  },
  {
    id: 'ejercicio-3',
    title: 'Análisis de Redes Sociales con NetworkX',
    description: 'Análisis completo de una red social de Twitter extraída de cuentas de salud. Incluye análisis topológico (nodos, aristas, usuarios más influyentes), análisis de conectividad, métricas de centralidad (cercanía, intermediación, PageRank) y visualización de la red.',
    notebookUrl: 'https://github.com/luissinho1999/notebooks/blob/main/Giménez_Real_Ejercicio_3.ipynb',
    githubUrl: 'https://github.com/luisgimenezreal',
    technologies: ['Python', 'NetworkX', 'Matplotlib', 'Pandas', 'Análisis de Redes', 'Grafos', 'PageRank', 'Centralidad'],
    date: '2024-04-01',
    tags: ['Análisis de Redes', 'NetworkX', 'Grafos', 'PageRank', 'Centralidad', 'Redes Sociales'],
    featured: true
  },
  {
    id: 'practica-mineria',
    title: 'Práctica de Minería de Datos',
    description: 'Práctica completa de Minería de Datos trabajando con el dataset FEV (Forced Expiratory Volume). Incluye análisis exploratorio, preprocesado de datos, análisis de asociación entre variables, y construcción de modelos predictivos.',
    notebookUrl: 'https://github.com/luissinho1999/notebooks/blob/main/PracticaMinería_LuísGiménez.ipynb',
    githubUrl: 'https://github.com/luisgimenezreal',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Scipy', 'Minería de Datos', 'Análisis Estadístico'],
    date: '2024-02-01',
    tags: ['Minería de Datos', 'Análisis Exploratorio', 'Modelado Predictivo', 'Análisis Estadístico', 'FEV'],
    featured: true
  }
];
