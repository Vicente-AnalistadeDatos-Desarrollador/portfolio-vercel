/**
 * Utilidades generales para el portfolio
 */

/**
 * Formatea una fecha en formato ISO (YYYY-MM) a un formato legible
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  });
}

/**
 * Formatea una fecha completa (YYYY-MM-DD) a un formato legible
 */
export function formatFullDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calcula la duración entre dos fechas
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  let totalMonths = years * 12 + months;
  const yearsResult = Math.floor(totalMonths / 12);
  const monthsResult = totalMonths % 12;
  
  if (yearsResult === 0) {
    return `${monthsResult} ${monthsResult === 1 ? 'mes' : 'meses'}`;
  } else if (monthsResult === 0) {
    return `${yearsResult} ${yearsResult === 1 ? 'año' : 'años'}`;
  } else {
    return `${yearsResult} ${yearsResult === 1 ? 'año' : 'años'} ${monthsResult} ${monthsResult === 1 ? 'mes' : 'meses'}`;
  }
}
