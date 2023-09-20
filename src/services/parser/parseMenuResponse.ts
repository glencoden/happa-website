import { Locale } from '../../enums/Locale'
import type { MenuType } from '../../types/MenuType'
import { parseRichTextItem } from './parseRichTextItem'

export const parseMenuResponse = (response: any): MenuType | null => {
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
        buttonText: result[0].buttonText
            ? {
                [Locale.English]: result[0].buttonText.en || '',
                [Locale.German]: result[0].buttonText.de || '',
            }
            : null,
        buttonLink: result[0].buttonLink || null,
    }
}