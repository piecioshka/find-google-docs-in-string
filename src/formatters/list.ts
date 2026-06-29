export function format(array: string[] = []): string {
    return array.map((i) => `- ${i}`).join('\n');
}
