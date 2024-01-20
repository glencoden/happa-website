import type { Component } from 'solid-js'
import Text from '../Text/Text'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    let textEn = "Monday to Thursday, 12-15 h"
    let textDe = "Montag bis Donnerstag, 12-15 Uhr"

    if (window.innerWidth < 768) {
        textEn = "Mon-Thu, 12-15 h"
        textDe = "Mo-Do, 12-15 Uhr"
    }

    return (
        <div class={styles.topBar}>
            <p>Schlesische Str. 35A, 10997 Berlin | &#9742; 030 75438944</p>
            <p>
                <Text
                    en={textEn}
                    de={textDe}
                />
            </p>
        </div>
    )
}

export default TopBar