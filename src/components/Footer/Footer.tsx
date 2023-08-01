import type { Component } from 'solid-js'
import Image from '../Image/Image'
import Newsletter, { NewsletterColorScheme } from '../Newsletter/Newsletter'
import styles from './Footer.module.css'

const Footer: Component = () => {
    return (
        <footer class={styles.footer}>
            <Image
                imageUrl="/icons/smiley.png"
                width={110}
            />

            <p>NAV</p>

            <Newsletter colorScheme={NewsletterColorScheme.LIGHT} />

            <p>BIO</p>
        </footer>
    )
}

export default Footer