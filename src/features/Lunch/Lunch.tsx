import type { Component } from 'solid-js'
import ArticleDefault from '../../components/ArticleDefault/ArticleDefault'
import Menu from '../../components/Menu/Menu'
import type { BakedArticle } from '../../types/BakedArticle'
import type { MenuType } from '../../types/MenuType'

type Props = {
    menu: MenuType
    description: BakedArticle
}

const Lunch: Component<Props> = (props) => {
    return (
        <>
            <Menu
                title={props.menu.title}
                menu={props.menu.menu}
                buttonText={null}
                buttonLink={null}
            />

            <ArticleDefault
                image={props.description.image}
                title={props.description.title}
                content={props.description.content}
            />
        </>
    )
}

export default Lunch
