import { Locale } from '../../enums/Locale'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import { parseRichTextItem } from './parseRichTextItem'

type ResultItem = {
    title: LocalizedString,
    detail: LocalizedRichText,
}

export const parseMenuResponse = (response: any): ResultItem[] => {
    const result = response?.result

    if (!Array.isArray(result)) {
        console.warn('unexpected parser input')
        return []
    }

    return result.map((entry: any) => ({
        title: {
            [Locale.English]: entry.title?.en || '',
            [Locale.German]: entry.title?.de || '',
        },
        detail: {
            [Locale.English]: parseRichTextItem(entry.detail?.en),
            [Locale.German]: parseRichTextItem(entry.detail?.de),
        },
    }))
}