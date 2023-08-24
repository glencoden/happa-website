import { Locale } from '../../enums/Locale'
import type { AboutCarousel } from '../../types/AboutCarousel'
import { parseRichTextItem } from './parseRichTextItem'

export const parseAboutCarouselResponse = (response: any): AboutCarousel | null => {
    const result = response?.result

    if (!Array.isArray(result) || result.length === 0) {
        console.warn('unexpected parser input:', response)
        return null
    }

    return {
        description: {
            [Locale.English]: parseRichTextItem(result[0].description?.en),
            [Locale.German]: parseRichTextItem(result[0].description?.de),
        },
        imageUrls: Array.isArray(result[0].imageUrls) ? result[0].imageUrls : [],
    }
}