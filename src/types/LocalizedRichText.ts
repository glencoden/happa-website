import type { Locale } from '../enums/Locale'

type RichTextItem = {
    children: {
        text: string,
        marks: string[],
    }[]
}

type LocalizedRichTextEntry = {
    [key in Locale]: RichTextItem[]
}

export type LocalizedRichText = LocalizedRichTextEntry & { [key in Exclude<Locale, keyof LocalizedRichTextEntry>]?: string }