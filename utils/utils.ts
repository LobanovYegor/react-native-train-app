export function TimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

export function HtmlTagsRemover(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
}
