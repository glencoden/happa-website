import { createSignal, For, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import { requestService } from '../../services/requestService'
import type { AboutCarousel } from '../../types/AboutCarousel'
import type { Article } from '../../types/Article'
import styles from './About.module.css'

const About: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)
    const [aboutNina, setAboutNina] = createSignal<Article | null>(null)
    const [aboutSophia, setAboutSophia] = createSignal<Article | null>(null)
    const [carousel, setCarousel] = createSignal<AboutCarousel | null>(null)
    const [happaForHome, setHappaForHome] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getAboutBannerData()
            setBanner(banner)

            const aboutNina = await requestService.getAboutNinaData()
            setAboutNina(aboutNina)

            const aboutSophia = await requestService.getAboutSophiaData()
            setAboutSophia(aboutSophia)

            const carousel = await requestService.getAboutCarouselData()
            setCarousel(carousel)

            const happaForHome = await requestService.getAboutHappaForHomeData()
            setHappaForHome(happaForHome)
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

            <Show when={aboutNina() !== null && aboutSophia() !== null}>
                <div class={styles.aboutCards}>
                    <ArticleCard
                        imageUrl={aboutNina()!.imageUrl}
                        title={aboutNina()!.title}
                        content={aboutNina()!.content}
                    />
                    <ArticleCard
                        imageUrl={aboutSophia()!.imageUrl}
                        title={aboutSophia()!.title}
                        content={aboutSophia()!.content}
                    />
                </div>
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

            <Show when={happaForHome() !== null && happaForHome()!.buttonText !== null && happaForHome()!.buttonLink !== null}>
                <ArticleDefault
                    imageUrl={happaForHome()!.imageUrl}
                    title={happaForHome()!.title}
                    content={happaForHome()!.content}
                    linkText={happaForHome()!.buttonText!}
                    linkUrl={happaForHome()!.buttonLink!}
                />
            </Show>
        </>
    )
}

export default About