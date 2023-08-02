import type { Component } from 'solid-js'
import { Show } from 'solid-js'
import type { LocalizedString } from '../../types/LocalizedString'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import Text from '../Text/Text'
import styles from './ArticleDefault.module.css'

type Props = {
    imageUrl: string
    title: LocalizedString
    date?: string
    content?: LocalizedString
    linkText?: LocalizedString
    linkUrl?: string
    reverse?: boolean
}

const ArticleDefault: Component<Props> = (props) => {
    return (
        <div class={styles.article}>
            <Image
                className={styles.image}
                imageUrl={props.imageUrl}
            />

            <div class={styles.textBox}>
                <h3 class={styles.title}>
                    <Text en={props.title.english} de={props.title.german} />
                </h3>

                <Show when={props.date !== undefined}>
                    {/* TODO generate text below from date string prop */}
                    <time
                        class={styles.subtitle}
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
                        <Text en={props.content!.english} de={props.content!.german} />
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