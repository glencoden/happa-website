import { Locale } from '../../enums/Locale'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import { parseRichTextItem } from './parseRichTextItem'

type ResultItem = {
    title: LocalizedString,
    menu: LocalizedRichText,
}

export const parseLunchMenuResponse = (response: any): ResultItem[] => {
    const result = response?.result

    if (!Array.isArray(result)) {
        console.warn('unexpected parser input:', result)
        return []
    }

    return result.map((entry: any) => ({
        title: {
            [Locale.English]: entry.title?.en || '',
            [Locale.German]: entry.title?.de || '',
        },
        menu: {
            [Locale.English]: parseRichTextItem(entry.menu?.en),
            [Locale.German]: parseRichTextItem(entry.menu?.de),
        },
    }))
}