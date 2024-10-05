import type { Component } from 'solid-js'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    return (
        <div class={styles.topBar}>
            <p>Schlesische Str. 35A, 10997 Berlin | &#9742; 030 75438944</p>
            {/*<a href="#ft-openSubscribe">*/}
            {/*    <Text*/}
            {/*        en="Newsletter"*/}
            {/*        de="Newsletter"*/}
            {/*    />*/}
            {/*</a>*/}
        </div>
    )
}

export default TopBar