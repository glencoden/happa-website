import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import Carousel from '../../components/Carousel/Carousel'
import Image from '../../components/Image/Image'
import Menu from '../../components/Menu/Menu'
import type { BakedArticle } from '../../types/BakedArticle'
import type { BakedCarousel } from '../../types/BakedCarousel'
import type { MenuType } from '../../types/MenuType'
import styles from '../About/About.module.css'

type Props = {
    banner: BakedArticle
    carousel: BakedCarousel
    dinnerEvents: MenuType[]
}

const Dinner: Component<Props> = (props) => {
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

            <For each={props.dinnerEvents}>
                {(dinnerEvent) => (
                    <Menu
                        title={dinnerEvent.title}
                        menu={dinnerEvent.menu}
                        buttonText={dinnerEvent.buttonText}
                        buttonLink={dinnerEvent.buttonLink}
                    />
                )}
            </For>
        </>
    )
}

export default Dinner