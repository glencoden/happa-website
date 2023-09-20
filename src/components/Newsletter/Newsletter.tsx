import type { Component } from 'solid-js'
import Text from '../Text/Text'
import styles from './Newsletter.module.css'

export enum NewsletterColorScheme {
    LIGHT = 'light',
    DARK = 'dark'
}

type Props = {
    colorScheme: NewsletterColorScheme
}

const Newsletter: Component<Props> = ({ colorScheme }) => {
    return (
        <div class={styles.newsletter}>
            <p class={styles.infoText}>
                <Text
                    en="Sign up for our monthly newsletter so we can keep you updated on our events."
                    de="Melde dich für unseren monatlichen Newsletter an, damit wir dich über unsere Veranstaltungen am Laufenden halten können."
                />
            </p>

            <div
                class={styles.form}
                id="mc_embed_signup"
            >
                <form
                    action="https://instagram.us14.list-manage.com/subscribe/post?u=497cccd8ba1dbecabfde59671&amp;id=28ebbb706d"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate"
                    target="_blank"
                    novalidate
                >
                    <div class="mc-field-group">
                        <input
                            class={`required email ${styles.emailInput}`}
                            type="email"
                            value=""
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Email"
                        />
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_497cccd8ba1dbecabfde59671_28ebbb706d" tabindex="-1" value="" />
                    </div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input
                                class={`button ${styles.submitButton}`}
                                type="submit"
                                value="Senden"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter