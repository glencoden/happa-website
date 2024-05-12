import { Locale } from '../../enums/Locale'
import type { CarouselType } from '../../types/CarouselType'
import { parseRichTextItem } from './parseRichTextItem'

export const parseCarouselResponse = (response: any): CarouselType | null => {
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