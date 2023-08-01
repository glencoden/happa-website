import type { Component } from 'solid-js'
import styles from './Image.module.css'

type Props = {
    imageUrl: string,
    width?: number,
    height?: number
}

const Image: Component<Props> = ({
    imageUrl,
    width,
    height,
}) => {
    let imageStyle: { [key: string]: string | number } = {}

    if (typeof width === 'number') {
        imageStyle.width = `${width}px`
    }

    if (typeof height === 'number') {
        imageStyle.height = `${height}px`
    }

    return (
        <img
            class={styles.image}
            style={imageStyle}
            src={imageUrl}
            alt={imageUrl}
        />
    )
}

export default Image
