import { Match, Switch } from 'solid-js'
import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import Button, { ButtonSize } from '../Button/Button'
import { useStore } from '@nanostores/solid'
import { locale } from '../../store'

// const getLocaleFromWindow = (): Locale => {
//     const simpleCurrentLanguage = window.navigator.language?.slice(0, 2).toLowerCase()
//
//     switch (simpleCurrentLanguage) {
//         case Locale.German:
//             return Locale.German
//         case Locale.English:
//             return Locale.English
//         default:
//             return Locale.English
//     }
// }

const LocaleToggle: Component = () => {
    const $locale = useStore(locale)

    const toggleLocale = () => {
        switch ($locale()) {
            case Locale.English:
                locale.set(Locale.German)
                break
            case Locale.German:
                locale.set(Locale.English)
                break
        }
    }

    return (
        <Button
            size={ButtonSize.Small}
            onClick={toggleLocale}
        >
            <Switch>
                <Match when={$locale() === Locale.English}>
                    DE
                </Match>

                <Match when={$locale() === Locale.German}>
                    EN
                </Match>
            </Switch>
        </Button>
    )
}

export default LocaleToggle