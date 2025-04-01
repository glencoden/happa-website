import type { Component } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Newsletter, { NewsletterColorScheme } from '../Newsletter/Newsletter'
import Text from '../Text/Text'
import styles from './Footer.module.css'

type Props = {
    currentPathname: string
}

const Footer: Component<Props> = ({ currentPathname }) => {
    return (
        <footer class={styles.footer}>
            <Image
                imageUrl={`${import.meta.env.PUBLIC_URL}/smiley.svg`}
                className={styles.smiley}
            />

            <div class={styles.footerNavigation}>
                <a href={`${import.meta.env.PUBLIC_URL}/press`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/press` ||
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/press/`
                        }
                    >
                        <Text en='Press' de='Presse' />
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/imprint`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/imprint` ||
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/imprint/`
                        }
                    >
                        <Text en='Imprint' de='Impressum' />
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/data`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/data` ||
                            currentPathname ===
                                `${import.meta.env.PUBLIC_URL}/data/`
                        }
                    >
                        <Text en='Data&nbsp;protection' de='Datenschutz' />
                    </Button>
                </a>
            </div>

            <div class={styles.newsletterBox}>
                <Newsletter colorScheme={NewsletterColorScheme.LIGHT} />
            </div>

            {/* <div class={styles.certificateBox}>
                <Certificate />
            </div> */}
        </footer>
    )
}

export default Footer
