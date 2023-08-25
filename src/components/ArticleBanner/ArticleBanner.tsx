import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import RichText from '../RichText/RichText'
import Text from '../Text/Text'
import styles from './ArticleBanner.module.css'

type Props = {
    title: LocalizedString
    subtitle: LocalizedString
    content?: LocalizedRichText
    linkText?: LocalizedString
    linkUrl?: string
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
                    <RichText en={props.content!.english} de={props.content!.german} />

                    <Show when={props.linkText !== undefined && props.linkUrl !== undefined}>
                        <div class={styles.buttonBox}>
                            <Link linkUrl={props.linkUrl!}>
                                <Button size={ButtonSize.Large}>
                                    <Text en={props.linkText!.english} de={props.linkText!.german} />
                                </Button>
                            </Link>
                        </div>
                    </Show>
                </p>
            </Show>
        </div>
    )
}

export default ArticleBanner