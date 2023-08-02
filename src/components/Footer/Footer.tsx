import type { Component } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'
import Certificate from '../Certificate/Certificate'
import Image from '../Image/Image'
import Newsletter, { NewsletterColorScheme } from '../Newsletter/Newsletter'
import styles from './Footer.module.css'

type Props = {
    currentPathname: string
}

const Footer: Component<Props> = ({ currentPathname }) => {
    return (
        <footer class={styles.footer}>
            <Image
                imageUrl="/icons/smiley.svg"
                className={styles.smiley}
            />

            <div class={styles.footerNavigation}>
                <a href="/press">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/press' || currentPathname === '/press/'}
                    >
                        Presse
                    </Button>
                </a>

                <a href="/imprint">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/imprint' || currentPathname === '/imprint/'}
                    >
                        Impressum
                    </Button>
                </a>

                <a href="/data">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/data' || currentPathname === '/data/'}
                    >
                        Datenschutz
                    </Button>
                </a>
            </div>

            <Newsletter colorScheme={NewsletterColorScheme.LIGHT} />

            <Certificate />
        </footer>
    )
}

export default Footer