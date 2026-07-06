import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import type { BakedArticle } from '../../types/BakedArticle'
import type { BakedCarousel } from '../../types/BakedCarousel'
import styles from '../About/About.module.css'

type Props = {
    banner: BakedArticle
    carousel: BakedCarousel
}

const Private: Component<Props> = (props) => {
    return (
        <>
            <Show when={props.banner.subtitle !== null}>
                <ArticleBanner
                    title={props.banner.title}
                    subtitle={props.banner.subtitle!}
                    content={props.banner.content}
                    linkText={props.banner.buttonText!}
                    linkUrl={props.banner.buttonLink!}
                    image={props.banner.image}
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

export default Private
