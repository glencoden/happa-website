import type { Component } from 'solid-js'
import { Match, Show, Switch } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import styles from './Article.module.css'

export enum ArticleType {
    Default = 'default',
    DefaultReverse = 'default-reverse',
    Banner = 'banner',
    Card = 'card',
}

type Props = {
    type: ArticleType
} & Partial<{
    title: string
    date: string
    subtitle: string
    content: string
    linkText: string
    linkUrl: string
    imageUrl: string
}>

const Article: Component<Props> = ({
    type,
    title,
    date,
    subtitle,
    content,
    linkText,
    linkUrl,
    imageUrl,
}) => {
    return (
        <div
            classList={{
                [styles.article]: true,
                [styles.articleDefault]: type === ArticleType.Default,
                [styles.articleDefaultReverse]: type === ArticleType.DefaultReverse,
                [styles.articleBanner]: type === ArticleType.Banner,
                [styles.articleCard]: type === ArticleType.Card,
            }}
        >
            <Show when={imageUrl !== undefined}>
                <div class={styles.imageBox}>
                    <Image imageUrl={imageUrl!} />
                </div>
            </Show>

            <div classList={{
                [styles.titleBox]: true,
                [styles.titleBoxBanner]: type === ArticleType.Banner,
            }}>
                <Show when={title !== undefined}>
                    <Switch fallback={null}>
                        <Match when={type === ArticleType.Default}>
                            <h3 class={styles.title}>
                                {title}
                            </h3>
                        </Match>

                        <Match when={type === ArticleType.DefaultReverse}>
                            <h3 class={styles.title}>
                                {title}
                            </h3>
                        </Match>

                        <Match when={type === ArticleType.Banner}>
                            <h1 class={styles.title}>
                                {title}
                            </h1>
                        </Match>

                        <Match when={type === ArticleType.Card}>
                            <h4 class={styles.title}>
                                {title}
                            </h4>
                        </Match>
                    </Switch>
                </Show>

                <Show when={date !== undefined}>
                    <time datetime={date}>
                        {date}
                    </time>
                </Show>

                <Show when={subtitle !== undefined}>
                    <Switch fallback={null}>
                        <Match when={type === ArticleType.Default}>
                            <h4 class={styles.subtitle}>
                                {subtitle}
                            </h4>
                        </Match>

                        <Match when={type === ArticleType.DefaultReverse}>
                            <h4 class={styles.subtitle}>
                                {subtitle}
                            </h4>
                        </Match>

                        <Match when={type === ArticleType.Banner}>
                            <h2 class={styles.subtitle}>
                                {subtitle}
                            </h2>
                        </Match>

                        <Match when={type === ArticleType.Card}>
                            <p class={styles.subtitle}>
                                {subtitle}
                            </p>
                        </Match>
                    </Switch>
                </Show>
            </div>

            <div classList={{
                [styles.contentBox]: true,
                [styles.contentBoxBanner]: type === ArticleType.Banner,
            }}>
                <Show when={content !== undefined}>
                    <p>
                        {content}
                    </p>
                </Show>

                <Show when={linkText !== undefined && linkUrl !== undefined}>
                    <Link linkUrl={linkUrl!}>
                        <Button size={ButtonSize.Large}>
                            {linkText!}
                        </Button>
                    </Link>
                </Show>
            </div>
        </div>
    )
}

export default Article