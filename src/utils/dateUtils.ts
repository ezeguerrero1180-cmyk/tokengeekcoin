/**
 * Utility functions for date formatting and grouping with emphasis on "Hoy" (Today).
 */

export function isToday(dateInput: string | Date): boolean {
  const d = new Date(dateInput);
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

export function isYesterday(dateInput: string | Date): boolean {
  const d = new Date(dateInput);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    d.getDate() === yesterday.getDate() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getFullYear() === yesterday.getFullYear()
  );
}

export function formatHeaderDate(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const str = now.toLocaleDateString('es-ES', options);
  // Capitalize first letter
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatTimeOnly(dateInput: string | Date): string {
  const d = new Date(dateInput);
  return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

export function formatArticleDate(dateInput: string | Date): string {
  const d = new Date(dateInput);
  if (isToday(d)) {
    return `Hoy a las ${formatTimeOnly(d)}`;
  }
  if (isYesterday(d)) {
    return `Ayer a las ${formatTimeOnly(d)}`;
  }
  return d.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getRelativeTime(dateInput: string | Date): string {
  const d = new Date(dateInput);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return 'Hace instantes';
  if (diffMinutes < 60) return `Hace ${diffMinutes} min`;
  if (diffHours < 24 && isToday(d)) return `Hace ${diffHours} h (Hoy)`;
  if (isYesterday(d)) return `Ayer a las ${formatTimeOnly(d)}`;
  if (diffDays === 1) return 'Hace 1 día';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}
