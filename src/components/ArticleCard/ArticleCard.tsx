import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import Image from '../Image/Image'
import Link from '../Link/Link'
import RichText from '../RichText/RichText'
import Text from '../Text/Text'
import styles from './ArticleCard.module.css'

type Props = {
    imageUrl: string
    title: LocalizedString
    content?: LocalizedRichText
    linkUrl?: string
}

const ArticleCard: Component<Props> = (props) => {
    const mainContent = (
        <>
            <Image
                className={styles.image}
                imageUrl={props.imageUrl}
            />

            <div class={styles.textBox}>
                <h4 class={styles.title}>
                    <Text en={props.title.english} de={props.title.german} />
                </h4>

                <Show when={props.content !== undefined}>
                    <p class={styles.content}>
                        <RichText en={props.content!.english} de={props.content!.german} />
                    </p>
                </Show>
            </div>
        </>
    )

    if (Boolean(props.linkUrl)) {
        return (
            <Link linkUrl={props.linkUrl!}>
                <div
                    classList={{
                        [styles.article]: true,
                        [styles.isLink]: true,
                    }}
                >
                    {mainContent}
                </div>
            </Link>
        )
    }

    return (
        <div class={styles.article}>
            {mainContent}
        </div>
    )
}

export default ArticleCard