import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import type { BakedArticle } from '../../types/BakedArticle'
import type { BakedCarousel } from '../../types/BakedCarousel'
import styles from '../About/About.module.css'

type Props = {
    banner: BakedArticle
    lunchSection: BakedArticle
    dinnerSection: BakedArticle
    carousel: BakedCarousel
}

const Home: Component<Props> = (props) => {
    return (
        <>
            <Show when={props.banner.subtitle !== null}>
                <ArticleBanner
                    title={props.banner.title}
                    subtitle={props.banner.subtitle!}
                    content={props.banner.content}
                    image={props.banner.image}
                />
            </Show>

            <Show when={props.lunchSection.buttonText !== null && props.lunchSection.buttonLink !== null}>
                <ArticleDefault
                    image={props.lunchSection.image}
                    title={props.lunchSection.title}
                    content={props.lunchSection.content}
                    linkText={props.lunchSection.buttonText!}
                    linkUrl={props.lunchSection.buttonLink!}
                />
            </Show>

            <Show when={props.dinnerSection.buttonText !== null && props.dinnerSection.buttonLink !== null}>
                <ArticleDefault
                    image={props.dinnerSection.image}
                    title={props.dinnerSection.title}
                    content={props.dinnerSection.content}
                    linkText={props.dinnerSection.buttonText!}
                    linkUrl={props.dinnerSection.buttonLink!}
                    reverse={true}
                />
            </Show>

            <Carousel description={props.carousel.description}>
                <For each={props.carousel.images}>
                    {(image) => (
                        <Image
                            image={image}
                            className={styles.aboutCarouselImage}
                        />
                    )}
                </For>
            </Carousel>
        </>
    )
}

export default Home
