import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import Menu from '../../components/Menu/Menu'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import type { CarouselType } from '../../types/CarouselType'
import type { MenuType } from '../../types/MenuType'
import styles from '../About/About.module.css'

const Dinner: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [carousel, setCarousel] = createSignal<CarouselType | null>(null)
    const [dinnerEvents, setDinnerEvents] = createSignal<(MenuType | null)[] | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getDinnerBannerData()
            setBanner(banner)

            const carousel = await requestService.getDinnerCarouselData()
            setCarousel(carousel)

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

            <Show when={carousel() !== null}>
                <Carousel
                    description={carousel()!.description}
                >
                    <For each={carousel()!.imageUrls}>
                        {(imageUrl) => (
                            <Image
                                imageUrl={imageUrl}
                                className={styles.aboutCarouselImage}
                            />
                        )}
                    </For>
                </Carousel>
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