import type { Component } from 'solid-js'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    return (
        <div class={styles.topBar}>
            <p>Schlesische Str. 35A, 10997 Berlin</p>
            <p>Montag bis Donnerstag, 12-15 Uhr</p>
        </div>
    )
}

export default TopBar