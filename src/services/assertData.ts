export function assertData<T>(value: T | null | undefined, label: string): T {
    if (value === null || value === undefined) {
        throw new Error(`Missing Sanity data: ${label}`)
    }

    return value
}
