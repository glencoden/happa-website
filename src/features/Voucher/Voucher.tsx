import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'

const Voucher: Component = () => {
    const [banner, setBanner] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const banner = await requestService.getVoucherData()
            setBanner(banner)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>
            <Show when={banner() !== null && banner()!.subtitle !== null}>
                <ArticleBanner
                    title={banner()!.title}
                    subtitle={banner()!.subtitle!}
                    content={banner()!.content}
                    linkText={banner()!.buttonText!}
                    linkUrl={banner()!.buttonLink!}
                    imageUrl={banner()!.imageUrl}
                />
            </Show>
        </>
    )
}

export default Voucher