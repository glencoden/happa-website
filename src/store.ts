import { atom } from 'nanostores'
import { Locale } from './enums/Locale'

export const locale = atom(Locale.German)