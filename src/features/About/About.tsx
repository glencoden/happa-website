import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import type { BakedArticle } from '../../types/BakedArticle'
import type { BakedCarousel } from '../../types/BakedCarousel'
import styles from './About.module.css'

type Props = {
    banner: BakedArticle
    aboutNina: BakedArticle
    aboutSophia: BakedArticle
    carousel: BakedCarousel
    happaForHome: BakedArticle
}

const About: Component<Props> = (props) => {
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

            <div class={styles.aboutCards}>
                <ArticleCard
                    image={props.aboutNina.image}
                    title={props.aboutNina.title}
                    content={props.aboutNina.content}
                />
                <ArticleCard
                    image={props.aboutSophia.image}
                    title={props.aboutSophia.title}
                    content={props.aboutSophia.content}
                />
            </div>

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

            <Show when={props.happaForHome.buttonText !== null && props.happaForHome.buttonLink !== null}>
                <ArticleDefault
                    image={props.happaForHome.image}
                    title={props.happaForHome.title}
                    content={props.happaForHome.content}
                    linkText={props.happaForHome.buttonText!}
                    linkUrl={props.happaForHome.buttonLink!}
                />
            </Show>
        </>
    )
}

export default About