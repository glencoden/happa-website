import type { Component } from 'solid-js'
import type { BakedImage } from '../../types/BakedImage'
import styles from './Image.module.css'

type Props = {
    image: BakedImage
    width?: number
    height?: number
    className?: string
}

const Image: Component<Props> = ({ image, width, height, className }) => {
    const imageStyle: { [key: string]: string } = {}

    if (typeof width === 'number') {
        imageStyle.width = `${width}px`
    }

    if (typeof height === 'number') {
        imageStyle.height = `${height}px`
    }

    return (
        <img
            class={className ? `${styles.image} ${className}` : styles.image}
            style={imageStyle}
            src={image.src}
            srcset={image.srcSet}
            sizes="100vw"
            loading="lazy"
            alt=""
        />
    )
}

export default Image
