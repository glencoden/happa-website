import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import type { BakedArticle } from '../../types/BakedArticle'

type Props = {
    banner: BakedArticle
    eventsPublic: BakedArticle[]
    eventsPrivate: BakedArticle
}

const Events: Component<Props> = (props) => {
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

            <For each={props.eventsPublic}>
                {(event, index) => (
                    <ArticleDefault
                        image={event.image}
                        title={event.title}
                        date={event.date!}
                        content={event.content}
                        linkText={event.buttonText!}
                        linkUrl={event.buttonLink!}
                        reverse={index() % 2 === 1}
                    />
                )}
            </For>

            <Show when={props.eventsPrivate.buttonText !== null && props.eventsPrivate.buttonLink !== null}>
                <ArticleDefault
                    image={props.eventsPrivate.image}
                    title={props.eventsPrivate.title}
                    content={props.eventsPrivate.content}
                    linkText={props.eventsPrivate.buttonText!}
                    linkUrl={props.eventsPrivate.buttonLink!}
                    reverse={props.eventsPublic.length % 2 === 1}
                />
            </Show>
        </>
    )
}

export default Events