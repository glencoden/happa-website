import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import RichText from '../../components/RichText/RichText'
import Text from '../../components/Text/Text'
import { Locale } from '../../enums/Locale'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import styles from './LunchMenu.module.css'

const LunchMenu: Component = () => {
    const [title, setTitle] = createSignal<LocalizedString | null>(null)
    const [menu, setMenu] = createSignal<LocalizedRichText | null>(null)
    const [description, setDescription] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const lunchMenu = await requestService.getLunchMenuData()

            setTitle(lunchMenu?.title ?? null)
            setMenu(lunchMenu?.menu ?? null)

            const lunchDescription = await requestService.getLunchDescriptionData()

            setDescription(lunchDescription)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>
            <Show when={title() !== null}>
                <h2 class={styles.title}>
                    <Text
                        en={title()![Locale.English]}
                        de={title()![Locale.German]}
                    />
                </h2>
            </Show>

            <Show when={menu() !== null}>
                <p class={styles.menu}>
                    <RichText
                        en={menu()![Locale.English]}
                        de={menu()![Locale.German]}
                    />
                </p>
            </Show>

            <Show when={description() !== null}>
                <ArticleDefault
                    imageUrl={description()!.imageUrl}
                    title={description()!.title}
                    content={description()!.content}
                />
            </Show>
        </>
    )
}

export default LunchMenu