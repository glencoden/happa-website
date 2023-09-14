import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'

const Events: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [eventsPublic, setEventsPublic] = createSignal<(Article | null)[] | null>(null)
    const [eventsPrivate, setEventsPrivate] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getEventsBannerData()
            setBanner(banner)

            const eventsPublic = await requestService.getEventsPublicData()
            setEventsPublic(eventsPublic)

            const eventsPrivate = await requestService.getEventsPrivateData()
            setEventsPrivate(eventsPrivate)
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

            <Show when={eventsPublic() !== null}>
                <For each={eventsPublic()!}>
                    {(event, index) => (
                        <Show when={event !== null}>
                            <ArticleDefault
                                imageUrl={event!.imageUrl}
                                title={event!.title}
                                date={event!.date!}
                                content={event!.content}
                                linkText={event!.buttonText!}
                                linkUrl={event!.buttonLink!}
                                reverse={index() % 2 === 1}
                            />
                        </Show>
                    )}
                </For>
            </Show>

            <Show when={eventsPrivate() !== null && eventsPrivate()!.buttonText !== null && eventsPrivate()!.buttonLink !== null}>
                <ArticleDefault
                    imageUrl={eventsPrivate()!.imageUrl}
                    title={eventsPrivate()!.title}
                    content={eventsPrivate()!.content}
                    linkText={eventsPrivate()!.buttonText!}
                    linkUrl={eventsPrivate()!.buttonLink!}
                    reverse={Array.isArray(eventsPublic()) && eventsPublic()!.length % 2 === 1}
                />
            </Show>
        </>
    )
}

export default Events