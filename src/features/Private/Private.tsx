import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import type { CarouselType } from '../../types/CarouselType'
import styles from '../About/About.module.css'

const Private: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [carousel, setCarousel] = createSignal<CarouselType | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getPrivateBookingBannerData()
            setBanner(banner)

            const carousel = await requestService.getPrivateBookingCarouselData()
            setCarousel(carousel)
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
        </>
    )
}

export default Private