import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import Carousel from '../../components/Carousel/Carousel'
import type { BakedArticle } from '../../types/BakedArticle'
import styles from './Partner.module.css'

type Props = {
    banner: BakedArticle
    partners: BakedArticle[]
}

const Partner: Component<Props> = (props) => {
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

            <Carousel>
                <For each={props.partners}>
                    {(partner) => (
                        <div class={styles.carouselItemBox}>
                            <ArticleCard
                                title={partner.title}
                                content={partner.content}
                                image={partner.image}
                                linkUrl={partner.buttonLink!}
                            />
                        </div>
                    )}
                </For>
            </Carousel>
        </>
    )
}

export default Partner