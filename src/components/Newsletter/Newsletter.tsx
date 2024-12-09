import type { Component } from 'solid-js'
import Text from '../Text/Text'
import styles from './Newsletter.module.css'

export enum NewsletterColorScheme {
    LIGHT = 'light',
    DARK = 'dark',
}

type Props = {
    colorScheme: NewsletterColorScheme
}

const Newsletter: Component<Props> = ({ colorScheme }) => {
    return (
        <div>
            <p class={styles.infoText}>
                <Text
                    en='Sign up for our monthly newsletter so we can keep you updated on our events.'
                    de='Melde dich für unseren monatlichen Newsletter an, damit wir dich über unsere Veranstaltungen am Laufenden halten können.'
                />
            </p>

            <a
                class={styles.submitButton}
                href={`${window.location.pathname}?ft-subscribe`}
            >
                <Text en='Sign up' de='Anmelden' />
            </a>
        </div>
    )
}

export default Newsletter
