import { Match, Switch } from 'solid-js'
import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import { useStore } from '@nanostores/solid'
import { locale } from '../../store'

type Props = {
    en: string,
    de: string
}

const Text: Component<Props> = ({ en, de }) => {
    const $locale = useStore(locale)

    return (
        <Switch>
            <Match when={$locale() === Locale.English}>
                {en}
            </Match>

            <Match when={$locale() === Locale.German}>
                {de}
            </Match>
        </Switch>
    )
}

export default Text