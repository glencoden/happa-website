import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import type { LocalizedString } from '../../types/LocalizedString'
import Button, { ButtonSize } from '../Button/Button'
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

                <Show when={props.date !== undefined}>
                    {/* TODO generate text below from date string prop */}
                    <time
                        class={styles.date}
                        datetime={props.date}
                    >
                        <Text
                            en="Fri, August 20, 2022, from 7:30 p.m"
                            de="Fr, 20.08.2022, ab 19:30 uhr"
                        />
                    </time>
                </Show>

                <Show when={props.content !== undefined}>
                    <p class={styles.content}>
                        <RichText en={props.content!.english} de={props.content!.german} />
                    </p>
                </Show>

                <Show when={props.linkText !== undefined && props.linkUrl !== undefined}>
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