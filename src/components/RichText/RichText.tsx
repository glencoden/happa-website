import { Match, Switch, For } from 'solid-js'
import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import { useStore } from '@nanostores/solid'
import { locale } from '../../store'

type RichTextItemChild = {
    text: string,
    marks: string[]
}

type RichTextItem = {
    children: RichTextItemChild[]
}

type Props = {
    en: RichTextItem[],
    de: RichTextItem[]
}

const RenderRichTextChildren: Component<{ children: RichTextItemChild[] }> = ({ children }) => {
    return (
        <>
            <For each={children} fallback={<span>Loading...</span>}>
                {(item) => {
                    const classNames: string[] = []
                    item.marks.forEach((mark: string) => {
                        switch (mark) {
                            case 'strong':
                                classNames.push('font-weight-bold')
                                break
                            default:
                                break
                        }
                    })
                    return (
                        classNames.length === 0
                            ? <>{item.text}</>
                            : <span class={classNames.join(' ')}>{item.text}</span>
                    )
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
                        <><RenderRichTextChildren children={item.children} /><br /></>
                    )}
                </For>
            </Match>

            <Match when={$locale() === Locale.German}>
                <For each={de} fallback={<div>Loading...</div>}>
                    {(item) => (
                        <><RenderRichTextChildren children={item.children} /><br /></>
                    )}
                </For>
            </Match>
        </Switch>
    )
}

export default RichText
