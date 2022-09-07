export function padStartZero(value: number, maxLength: number): string {
    return String(value).padStart(maxLength, '0');
}
