import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'
import { Locale } from './enums/Locale'

export const locale = persistentAtom<Locale>('locale', Locale.German)

export const isMenuOpen = atom(false)