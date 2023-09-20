import { createSignal, onMount } from 'solid-js'
import type { Component } from 'solid-js'
import styles from './Image.module.css'

type Props = {
    imageUrl: string,
    width?: number,
    height?: number
    className?: string
}

const Image: Component<Props> = ({
    imageUrl,
    width,
    height,
    className,
}) => {
    const isImageFromCDN = imageUrl.startsWith('https://cdn.sanity.io/images/')

    let imageStyle: { [key: string]: string | number } = {}

    if (typeof width === 'number') {
        imageStyle.width = `${width}px`
    }

    if (typeof height === 'number') {
        imageStyle.height = `${height}px`
    }

    const [src, setSrc] = createSignal<string | undefined>(isImageFromCDN ? undefined : imageUrl)

    let imageRef: HTMLImageElement | undefined

    onMount(() => {
        if (isImageFromCDN) {
            const maxPollCount = 100
            const safetyPollCount = 10

            let pollCount = 0
            let timeoutId = 0
            let imageWidth = 0

            const pollImageWidth = () => {
                if (pollCount > maxPollCount) return

                if (!imageRef) throw new Error('image element expected')

                pollCount++

                imageWidth = imageRef.clientWidth

                if (imageWidth > 0) {
                    setSrc(`${imageUrl}?w=${imageWidth}&dpr=${devicePixelRatio}`)

                    if (pollCount > safetyPollCount) return
                }

                clearTimeout(timeoutId)

                timeoutId = setTimeout(pollImageWidth, 20)
            }

            pollImageWidth()
        }
    })

    return (
        <img
            ref={imageRef}
            class={className ? `${styles.image} ${className}` : styles.image}
            style={imageStyle}
            src={src()}
            alt={imageUrl}
        />
    )
}

export default Image
