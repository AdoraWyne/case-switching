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
  const test = str.split("-");
  const newStr = test.map((e) => {
    return e.charAt(0).toUpperCase() + e.substring(1);
  });
  return newStr.join(" ");
}
