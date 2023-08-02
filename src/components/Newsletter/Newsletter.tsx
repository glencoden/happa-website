import type { Component } from 'solid-js'
import styles from './Newsletter.module.css'

export enum NewsletterColorScheme {
    LIGHT = 'light',
    DARK = 'dark'
}

type Props = {
    colorScheme: NewsletterColorScheme
}

const Newsletter: Component<Props> = (props) => {
    return (
        <div
            class={styles.newsletter}
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
                        type="email"
                        value=""
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                        placeholder="Email Address"
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
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Newsletter