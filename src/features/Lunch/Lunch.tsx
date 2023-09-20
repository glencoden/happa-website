import { createSignal, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import Menu from '../../components/Menu/Menu'
import { requestService } from '../../services/requestService'
import type { Article } from '../../types/Article'
import type { MenuType } from '../../types/MenuType'

const Lunch: Component = () => {
    const [menu, setMenu] = createSignal<MenuType | null>(null)
    const [description, setDescription] = createSignal<Article | null>(null)

    onMount(async () => {
        try {
            const lunchMenu = await requestService.getLunchMenuData()
            setMenu(lunchMenu)

            const lunchDescription = await requestService.getLunchDescriptionData()
            setDescription(lunchDescription)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>
            <Show when={menu() !== null}>
                <Menu
                    title={menu()!.title}
                    menu={menu()!.menu}
                    buttonText={null}
                    buttonLink={null}
                />
            </Show>

            <Show when={description() !== null}>
                <ArticleDefault
                    imageUrl={description()!.imageUrl}
                    title={description()!.title}
                    content={description()!.content}
                />
            </Show>
        </>
    )
}

export default Lunch