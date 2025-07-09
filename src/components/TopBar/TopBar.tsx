import type { Component } from 'solid-js'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    return (
        <div class={styles.topBar}>
            <p>
                Schlesische Str. 35A, 10997 Berlin &nbsp;|&nbsp;
                <a href='tel:+493075438944'>&#9742; 030 75438944</a>
                &nbsp;|&nbsp;
                <a href='mailto:info@happa-berlin.com'>info@happa-berlin.com</a>
            </p>
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
