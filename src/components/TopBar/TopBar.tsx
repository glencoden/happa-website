import type { Component } from 'solid-js'
import Text from '../Text/Text'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    return (
        <div class={styles.topBar}>
            <p>Schlesische Str. 35A, 10997 Berlin</p>
            <p>
                <Text
                    en="Monday to Thursday, 12-15 h"
                    de="Montag bis Donnerstag, 12-15 Uhr"
                />
            </p>
        </div>
    )
}

export default TopBar