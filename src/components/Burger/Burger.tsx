import type { Component } from 'solid-js'
import styles from './Burger.module.css'

type Props = {
    isOpen: boolean
}

const Burger: Component<Props> = (props) => {
    return (
        <div
            classList={{
                [styles.burger]: true,
                [styles.isOpen]: props.isOpen,
            }}
        >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
    )
}

export default Burger