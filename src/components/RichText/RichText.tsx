import { useStore } from '@nanostores/solid'
import type { Component } from 'solid-js'
import { For, Match, Switch } from 'solid-js'
import { Locale } from '../../enums/Locale'
import { locale } from '../../store'
import type { RichTextItem } from '../../types/RichTextItem'
import Button, { ButtonSize } from '../Button/Button'
import Link from '../Link/Link'
import styles from './RichText.module.css'

type Props = {
    en: RichTextItem[],
    de: RichTextItem[]
}

const RenderRichTextChildren: Component<{ item: RichTextItem }> = ({ item }) => {
    return (
        <>
            <For each={item.children} fallback={<span>Loading...</span>}>
                {(child, index) => {
                    const classNames: string[] = []

                    child.marks.forEach((mark: string) => {
                        switch (mark) {
                            case 'strong':
                                classNames.push(styles.bold)
                                break
                            default:
                                break
                        }
                    })

                    const element = classNames.length === 0
                        ? <>{child.text}</>
                        : <span class={classNames.join(' ')}>{child.text}</span>

                    const markDef = item.markDefs[index()]

                    switch (markDef?._type) {
                        case 'link':
                            return (
                                <Link linkUrl={markDef.href}>
                                    <Button size={ButtonSize.Regular}>
                                        {element}
                                    </Button>
                                </Link>
                            )
                        default:
                            return element
                    }
                }}
            </For>
        </>
    )
}

const RichText: Component<Props> = ({ en, de }) => {
    const $locale = useStore(locale)

    return (
        <Switch>
            <Match when={$locale() === Locale.English}>
                <For each={en} fallback={<div>Loading...</div>}>
                    {(item) => (
                        <><RenderRichTextChildren item={item} /><br /></>
                    )}
                </For>
            </Match>

            <Match when={$locale() === Locale.German}>
                <For each={de} fallback={<div>Loading...</div>}>
                    {(item) => (
                        <><RenderRichTextChildren item={item} /><br /></>
                    )}
                </For>
            </Match>
        </Switch>
    )
}

export default RichText
