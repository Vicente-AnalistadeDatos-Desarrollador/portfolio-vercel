# Portfolio Profesional - Analista de Datos

Portfolio web profesional desarrollado con Next.js, TypeScript y Tailwind CSS. Diseñado para mostrar proyectos, experiencia y habilidades de un Analista/Científico de Datos.

## 🚀 Características

- **Diseño Moderno y Profesional**: Interfaz visual e interactiva con animaciones suaves
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Dark Mode**: Soporte para modo oscuro automático
- **Arquitectura Escalable**: Estructura de código organizada y mantenible
- **Sección de Jupyter Notebooks**: Página dedicada para mostrar proyectos de análisis de datos
- **TypeScript**: Tipado fuerte para mayor seguridad y mantenibilidad

## 📁 Estructura del Proyecto

```
luis_web/
├── app/                    # Páginas y rutas (App Router)
│   ├── page.tsx           # Página principal
│   ├── notebooks/         # Página de Jupyter Notebooks
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── Header.tsx         # Navegación principal
│   ├── Footer.tsx         # Pie de página
│   └── sections/         # Secciones del portfolio
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── data/                  # Datos del portfolio
│   ├── personal.ts       # Información personal
│   ├── experience.ts     # Experiencia laboral
│   ├── education.ts      # Formación académica
│   ├── skills.ts         # Habilidades técnicas
│   ├── projects.ts       # Proyectos
│   └── jupyter-notebooks.ts  # Jupyter Notebooks
└── lib/                   # Utilidades y tipos
    └── types.ts          # Definiciones TypeScript
```

## 🛠️ Tecnologías

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS 4**: Estilos utility-first
- **Framer Motion**: Animaciones fluidas
- **Lucide React**: Iconos modernos

## 📝 Personalización

### 1. Información Personal

Edita el archivo `data/personal.ts` con tu información:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Tu Nombre',
  title: 'Tu Título',
  // ... más campos
};
```

### 2. Experiencia Laboral

Añade tus experiencias en `data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Nombre de la Empresa',
    position: 'Tu Posición',
    // ... más campos
  }
];
```

### 3. Proyectos

Añade tus proyectos en `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto',
    // ... más campos
  }
];
```

### 4. Jupyter Notebooks

Para añadir notebooks de Jupyter, edita `data/jupyter-notebooks.ts`:

```typescript
export const jupyterNotebooks: JupyterNotebook[] = [
  {
    id: '1',
    title: 'Análisis de Datos',
    description: 'Descripción del análisis',
    notebookUrl: 'https://github.com/usuario/repo/blob/main/notebook.ipynb',
    // ... más campos
  }
];
```

**Nota**: Puedes subir tus notebooks a GitHub y usar el enlace directo al archivo `.ipynb`. GitHub renderiza automáticamente los notebooks.

## 🚀 Desarrollo

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción

```bash
npm run build
npm start
```

## 📦 Despliegue

El proyecto está listo para desplegar en plataformas como:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

Para Vercel:

```bash
npm install -g vercel
vercel
```

## 🎨 Personalización de Estilos

Los colores principales se pueden modificar en los componentes usando las clases de Tailwind. Los gradientes principales son:

- Azul a Púrpura: `from-blue-600 to-purple-600`
- Puedes cambiarlos en los componentes según tus preferencias

## 📄 Secciones Incluidas

1. **Hero**: Presentación principal con animaciones
2. **Sobre mí**: Biografía y resumen profesional
3. **Experiencia**: Historial laboral detallado
4. **Proyectos**: Portfolio de proyectos destacados
5. **Habilidades**: Tecnologías y herramientas
6. **Educación**: Formación académica
7. **Contacto**: Información de contacto y redes sociales
8. **Jupyter Notebooks**: Página dedicada para análisis de datos

## 🔧 Próximos Pasos

1. Completa la información en los archivos de `data/`
2. Añade tus proyectos y notebooks
3. Personaliza los colores si lo deseas
4. Añade imágenes a tus proyectos (opcional)
5. Despliega tu portfolio

## 📝 Notas

- Todos los textos están preparados para ser personalizados
- La estructura es escalable y fácil de mantener
- Los componentes son reutilizables y modulares
- El diseño es responsive y funciona en todos los dispositivos

## 🤝 Contribuciones

Este es un proyecto personal, pero siéntete libre de usarlo como base para tu propio portfolio.

## 📄 Licencia

Este proyecto es de uso libre para portfolios personales.

---

¡Buena suerte con tu búsqueda de empleo! 🚀
