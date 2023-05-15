import type { Component } from 'solid-js'
import styles from './Image.module.css'

const Image: Component<void> = () => {
    return (
        <div>
            <img
                class={styles.image}
                src="https://cdn.sanity.io/images/hwz0ma01/production/63bbc068102b139782e8d83b08903acca4871318-1600x1200.jpg"
                alt="Pic of New York"
            />
        </div>
    )
}

export default Image