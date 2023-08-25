import { Locale } from '../../enums/Locale'
import type { TextPageType } from '../../types/TextPageType'
import { parseRichTextItem } from './parseRichTextItem'

export const parseTextPageResponse = (response: any): TextPageType | null => {
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
        text: {
            [Locale.English]: parseRichTextItem(result[0].text?.en),
            [Locale.German]: parseRichTextItem(result[0].text?.de),
        },
    }
}