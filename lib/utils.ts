/**
 * Shared utilities. Example: classnames, formatters, etc.
 */

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
