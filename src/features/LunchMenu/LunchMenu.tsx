import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import RichText from '../../components/RichText/RichText'
import Text from '../../components/Text/Text'
import { Locale } from '../../enums/Locale'
import { requestService } from '../../services/requestService'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'

const LunchMenu: Component = () => {
    const [title, setTitle] = createSignal<LocalizedString | null>(null)
    const [menu, setMenu] = createSignal<LocalizedRichText | null>(null)

    onMount(async () => {
        try {
            const lunchMenu = await requestService.getLunchMenuData()

            const title = lunchMenu[0]?.title
            const menu = lunchMenu[0]?.menu

            if (!title || !menu) {
                console.warn('unexpected lunch menu data', lunchMenu)
                return
            }

            setTitle(title)
            setMenu(menu)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>
            <Show when={title() !== null}>
                <Text
                    en={title()![Locale.English]}
                    de={title()![Locale.German]}
                />
            </Show>

            <Show when={menu() !== null}>
                <RichText
                    en={menu()![Locale.English]}
                    de={menu()![Locale.German]}
                />
            </Show>
        </>
    )
}

export default LunchMenu