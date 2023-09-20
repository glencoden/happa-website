import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import TextPage from '../../components/TextPage/TextPage'
import { requestService } from '../../services/requestService'
import type { TextPageType } from '../../types/TextPageType'

const DataProtection: Component = () => {
    const [ data, setData ] = createSignal<TextPageType | null>(null)

    onMount(async () => {
        try {
            const data = await requestService.getDataProtectionData()
            setData(data)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <Show when={data() !== null}>
            <TextPage
                title={data()!.title}
                text={data()!.text}
            />
        </Show>
    )
}

export default DataProtection