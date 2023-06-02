/**
 * A simple function interpolate values inside curly braces.
 *
 * @example
 * interpolate('hello { username }', { username: 'virk' })
 */
export declare function interpolate(input: string, data: any, index: number): string;
