import type { LocalizedRichText } from './LocalizedRichText'
import type { LocalizedString } from './LocalizedString'

export type MenuType = {
    title: LocalizedString,
    menu: LocalizedRichText,
    buttonText: LocalizedString | null
    buttonLink: string | null
}