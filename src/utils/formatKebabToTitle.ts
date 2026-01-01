/**
 * Converts a kebab-case slug string to a title case string.
 *
 * @param str - The kebab-case slug string to convert (e.g., "adora-hou-van-appel")
 * @returns The formatted title case string (e.g., "Adora Hou Van Appel")
 *
 * @example
 * ```ts
 * formatSlugToTitle("hello-world") // Returns "Hello World"
 * formatSlugToTitle("my-awesome-title") // Returns "My Awesome Title"
 * ```
 */
export function formatKebabToTitle(str: string): string {
  return str
    .replace(/(\w)(\w*)/g, (_, first, rest) => {
      return first.toUpperCase() + rest.toLowerCase();
    })
    .replace(/-+/g, " ");
}
