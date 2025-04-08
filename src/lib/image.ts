export function generateBlurPlaceholder(width: number, height: number): string {
  return `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/svg/2000" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="%23CBD5E1"/></svg>`;
}
