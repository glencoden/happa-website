import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import Button, { ButtonSize } from '../Button/Button'
import DateComponent from '../Date/Date'
import Image from '../Image/Image'
import Link from '../Link/Link'
import RichText from '../RichText/RichText'
import Text from '../Text/Text'
import styles from './ArticleDefault.module.css'

type Props = {
    imageUrl: string
    title: LocalizedString
    date?: string
    content?: LocalizedRichText
    linkText?: LocalizedString
    linkUrl?: string
    reverse?: boolean
}

// TODO replace eg english with [Locale.English] in all Article components

const ArticleDefault: Component<Props> = (props) => {
    return (
        <div classList={{
            [styles.article]: true,
            [styles.articleReverse]: Boolean(props.reverse),
        }}>
            <Image
                className={styles.image}
                imageUrl={props.imageUrl}
            />

            <div classList={{
                [styles.textBox]: true,
                [styles.textBoxReverse]: Boolean(props.reverse),
            }}>
                <h3 class={styles.title}>
                    <Text en={props.title.english} de={props.title.german} />
                </h3>

                <Show when={Boolean(props.date)}>
                    <time
                        class={styles.date}
                        datetime={props.date}
                    >
                        <DateComponent dateString={props.date!} />
                    </time>
                </Show>

                <Show when={props.content !== undefined}>
                    <p class={styles.content}>
                        <RichText en={props.content!.english} de={props.content!.german} />
                    </p>
                </Show>

                <Show when={Boolean(props.linkText) && Boolean(props.linkUrl)}>
                    <Link linkUrl={props.linkUrl!}>
                        <Button size={ButtonSize.Large}>
                            <Text en={props.linkText!.english} de={props.linkText!.german} />
                        </Button>
                    </Link>
                </Show>
            </div>
        </div>
    )
}

export default ArticleDefault