import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import type { LocalizedString } from '../../types/LocalizedString'
import Image from '../Image/Image'
import Text from '../Text/Text'
import styles from './ArticleBanner.module.css'

type Props = {
    title: LocalizedString
    subtitle: LocalizedString
    content?: LocalizedString
    imageUrl: string
}

const ArticleBanner: Component<Props> = (props) => {
    return (
        <div class={styles.article}>
            <div class={styles.titleBox}>
                <h1 class={styles.title}>
                    <Text en={props.title.english} de={props.title.german} />
                </h1>

                <h2 class={styles.subtitle}>
                    <Text en={props.subtitle.english} de={props.subtitle.german} />
                </h2>
            </div>

            <Image
                className={styles.image}
                imageUrl={props.imageUrl}
            />

            <Show when={props.content !== undefined}>
                <p class={styles.content}>
                    <Text en={props.content!.english} de={props.content!.german} />
                </p>
            </Show>
        </div>
    )
}

export default ArticleBanner