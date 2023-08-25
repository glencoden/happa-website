import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import Carousel from '../../components/Carousel/Carousel'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import styles from './Partner.module.css'

const Partner: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [partners, setPartners] = createSignal<(Article | null)[] | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getPartnerBannerData()
            setBanner(banner)

            const partners = await requestService.getPartnersData()
            setPartners(partners)
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
                    linkText={banner()!.buttonText!}
                    linkUrl={banner()!.buttonLink!}
                    imageUrl={banner()!.imageUrl}
                />
            </Show>

            <Show when={partners() !== null}>
                <Carousel>
                    <For each={partners()!}>
                        {(partner) => (
                            <Show when={partner !== null}>
                                <div class={styles.carouselItemBox}>
                                    <ArticleCard
                                        title={partner!.title}
                                        content={partner!.content}
                                        imageUrl={partner!.imageUrl}
                                        linkUrl={partner!.buttonLink!}
                                    />
                                </div>
                            </Show>
                        )}
                    </For>
                </Carousel>
            </Show>
        </>
    )
}

export default Partner