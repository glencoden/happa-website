import type { Component } from 'solid-js'
import { Locale } from '../../enums/Locale'
import type { TextPageType } from '../../types/TextPageType'
import RichText from '../RichText/RichText'
import Text from '../Text/Text'
import styles from './TextPage.module.css'

const TextPage: Component<TextPageType> = ({ title, text }) => {
    return (
        <>
            <h3 class={styles.title}>
                <Text
                    en={title[Locale.English]}
                    de={title[Locale.German]}
                />
            </h3>

            <p class={styles.text}>
                <RichText
                    en={text[Locale.English]}
                    de={text[Locale.German]}
                />
            </p>
        </>
    )
}

export default TextPage