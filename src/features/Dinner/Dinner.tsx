import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import Menu from '../../components/Menu/Menu'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import type { MenuType } from '../../types/MenuType'

const Dinner: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [dinnerEvents, setDinnerEvents] = createSignal<(MenuType | null)[] | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getDinnerBannerData()
            setBanner(banner)

            const dinnerEvents = await requestService.getDinnerEventsData()
            setDinnerEvents(dinnerEvents)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>
            <Show when={banner() !== null && banner()!.subtitle !== null}>
                <ArticleBanner
                    title={banner()!.title}
                    subtitle={banner()!.subtitle!}
                    content={banner()!.content}
                    imageUrl={banner()!.imageUrl}
                />
            </Show>

            <Show when={dinnerEvents() !== null}>
                <For each={dinnerEvents()!}>
                    {(dinnerEvent) => (
                        <Show when={dinnerEvent !== null}>
                            <Menu
                                title={dinnerEvent!.title}
                                menu={dinnerEvent!.menu}
                                buttonText={dinnerEvent!.buttonText}
                                buttonLink={dinnerEvent!.buttonLink}
                            />
                        </Show>
                    )}
                </For>
            </Show>
        </>
    )
}

export default Dinner