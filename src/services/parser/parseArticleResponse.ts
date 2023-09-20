import { Locale } from '../../enums/Locale'
import type { Article } from '../../types/Article'
import { parseRichTextItem } from './parseRichTextItem'

export const parseArticleResponse = (response: any): Article | null => {
    const result = response?.result

    if (!Array.isArray(result)) {
        console.warn('unexpected parser input:', response)
        return null
    }

    if (result.length === 0) {
        return {
            title: {
                [Locale.English]: '',
                [Locale.German]: '',
            },
            subtitle: null,
            date: null,
            content: {
                [Locale.English]: [],
                [Locale.German]: [],
            },
            buttonText: null,
            buttonLink: null,
            imageUrl: '',
        }
    }

    return {
        title: {
            [Locale.English]: result[0].title?.en || '',
            [Locale.German]: result[0].title?.de || '',
        },
        subtitle: result[0].subtitle
            ? {
                [Locale.English]: result[0].subtitle.en || '',
                [Locale.German]: result[0].subtitle.de || '',
            }
            : null,
        date: result[0].date || null,
        content: {
            [Locale.English]: parseRichTextItem(result[0].description?.en),
            [Locale.German]: parseRichTextItem(result[0].description?.de),
        },
        buttonText: result[0].buttonText
            ? {
                [Locale.English]: result[0].buttonText.en || '',
                [Locale.German]: result[0].buttonText.de || '',
            }
            : null,
        buttonLink: result[0].buttonLink || null,
        imageUrl: result[0].imageUrl || '',
    }
}