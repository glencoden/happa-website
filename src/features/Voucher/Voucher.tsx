import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import type { BakedArticle } from '../../types/BakedArticle'

type Props = {
    banner: BakedArticle
}

const Voucher: Component<Props> = (props) => {
    return (
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
    )
}

export default Voucher
