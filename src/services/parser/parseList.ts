export const parseList = <T>(response: any, parser: T): ReturnType<T>[] | null => {
    const list = response?.result

    if (!Array.isArray(list)) {
        console.warn('unexpected parser input:', response)
        return null
    }

    return list.map((item) => parser({ result: [ item ] }))
}