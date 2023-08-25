import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import type { MenuType } from '../../types/MenuType'
import Button, { ButtonSize } from '../Button/Button'
import Link from '../Link/Link'
import RichText from '../RichText/RichText'
import Text from '../Text/Text'
import styles from './Menu.module.css'

const Menu: Component<MenuType> = ({ title, menu, buttonText, buttonLink }) => {
    return (
        <>
            <h2 class={styles.title}>
                <Text
                    en={title[Locale.English]}
                    de={title[Locale.German]}
                />
            </h2>

            <p class={styles.menu}>
                <RichText
                    en={menu[Locale.English]}
                    de={menu[Locale.German]}
                />
            </p>

            <div class={styles.buttonBox}>
                <Show when={buttonText !== null && buttonLink !== null}>
                    <Link linkUrl={buttonLink!}>
                        <Button size={ButtonSize.Large}>
                            <Text
                                en={buttonText![Locale.English]}
                                de={buttonText![Locale.German]}
                            />
                        </Button>
                    </Link>
                </Show>
            </div>
        </>
    )
}

export default Menu