import type { Locale } from '../enums/Locale'

type LocalizedStringEntry = {
    [key in Locale]: string
}

export type LocalizedString = LocalizedStringEntry & { [key in Exclude<Locale, keyof LocalizedStringEntry>]?: string }