import type { Component } from 'solid-js'
import styles from './Image.module.css'

type Props = {
    imageUrl: string
    width: number
    height: number
}

const Image: Component<Props> = ({ imageUrl, width, height }) => {
    return (
        <img
            class={styles.image}
            src={imageUrl}
            alt="Pic of New York"
        />
    )
}

export default Image