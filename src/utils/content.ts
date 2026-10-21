export const CONTENT_PLACEHOLDER = "CONTENT_PLACEHOLDER";

export function hasText(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function displayText(value: string, fallback = CONTENT_PLACEHOLDER): string {
  return hasText(value) ? value : fallback;
}

export function hasItems<T>(items: T[] | undefined | null): items is T[] {
  return Array.isArray(items) && items.length > 0;
}
