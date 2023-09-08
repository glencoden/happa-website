import { Match, Switch } from 'solid-js'
import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import { useStore } from '@nanostores/solid'
import { locale } from '../../store'

const days = {
    [Locale.English]: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    [Locale.German]: ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'],
}

type Props = {
    dateString: string
}

const DateComponent: Component<Props> = ({ dateString }) => {
    const $locale = useStore(locale)

    const [datePart, timePart] = dateString.split('T')

    if (!datePart || !timePart) {
        console.warn('date string expected')
        return null
    }

    const [year, month, day] = datePart.split('-')
    const time = timePart.slice(0, 5)

    const dayAbbreviation = days[$locale()][new Date(dateString).getDay()]

    return (
        <Switch>
            <Match when={$locale() === Locale.English}>
                {`${dayAbbreviation}, ${month}/${day}/${year}, from ${time}`}
            </Match>

            <Match when={$locale() === Locale.German}>
                {`${dayAbbreviation}, ${day}.${month}.${year}, ab ${time} Uhr`}
            </Match>
        </Switch>
    )
}

export default DateComponent