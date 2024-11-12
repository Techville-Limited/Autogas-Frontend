// utils.ts
export function getSnippet(text: string, wordLimit: number): string {
  const words = text.split(" ");
  return words.slice(0, wordLimit).join(" ") + "...";
}
