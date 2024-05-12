import type { ParentComponent } from 'solid-js'
import type { LocalizedRichText } from '../../types/LocalizedRichText'
import styles from './Carousel.module.css'

type Props = {
    description?: LocalizedRichText
}

const Carousel: ParentComponent<Props> = ({ children }) => {
    return (
        <div class={styles.carousel}>
            <div class={styles.itemsBox}>
                {children}
            </div>

            {/*<Show when={description !== undefined}>*/}
            {/*    <p class={styles.description}>*/}
            {/*        <RichText*/}
            {/*            en={description![Locale.English]}*/}
            {/*            de={description![Locale.German]}*/}
            {/*        />*/}
            {/*    </p>*/}
            {/*</Show>*/}
        </div>
    )
}

export default Carousel