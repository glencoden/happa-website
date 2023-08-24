import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'

const Home: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [lunchSection, setLunchSection] = createSignal<Article | null>(null)
    const [dinnerSection, setDinnerSection] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getHomeBannerData()
            setBanner(banner)

            const lunchSection = await requestService.getHomeLunchSectionData()
            setLunchSection(lunchSection)

            const dinnerSection = await requestService.getHomeDinnerSectionData()
            setDinnerSection(dinnerSection)
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

            <Show when={lunchSection() !== null && lunchSection()!.buttonText !== null && lunchSection()!.buttonLink !== null}>
                <ArticleDefault
                    imageUrl={lunchSection()!.imageUrl}
                    title={lunchSection()!.title}
                    content={lunchSection()!.content}
                    linkText={lunchSection()!.buttonText!}
                    linkUrl={lunchSection()!.buttonLink!}
                />
            </Show>

            <Show when={dinnerSection() !== null && dinnerSection()!.buttonText !== null && dinnerSection()!.buttonLink !== null}>
                <ArticleDefault
                    imageUrl={dinnerSection()!.imageUrl}
                    title={dinnerSection()!.title}
                    content={dinnerSection()!.content}
                    linkText={dinnerSection()!.buttonText!}
                    linkUrl={dinnerSection()!.buttonLink!}
                    reverse={true}
                />
            </Show>
        </>
    )
}

export default Home