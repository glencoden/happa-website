import type { LocalizedRichText } from './LocalizedRichText'
import type { LocalizedString } from './LocalizedString'

export type Article = {
    title: LocalizedString
    subtitle: LocalizedString | null

    date: string | null

    content: LocalizedRichText

    buttonText: LocalizedString | null
    buttonLink: string | null

    imageUrl: string
}