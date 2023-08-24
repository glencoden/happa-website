import { Locale } from '../../enums/Locale'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import { parseRichTextItem } from './parseRichTextItem'

type ResultItem = {
    title: LocalizedString,
    menu: LocalizedRichText,
}

export const parseLunchMenuResponse = (response: any): ResultItem | null => {
    const result = response?.result

    if (!Array.isArray(result) || result.length === 0) {
        console.warn('unexpected parser input:', result)
        return null
    }

    return {
        title: {
            [Locale.English]: result[0].title?.en || '',
            [Locale.German]: result[0].title?.de || '',
        },
        menu: {
            [Locale.English]: parseRichTextItem(result[0].menu?.en),
            [Locale.German]: parseRichTextItem(result[0].menu?.de),
        },
    }
}