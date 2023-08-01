import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import styles from './Burger.module.css'

type Props = {
    isOpen: boolean
}

const Burger: Component<Props> = ({ isOpen }) => {
    const [isOpenTest, setIsOpenTest] = createSignal(false)

    return (
        <div
            classList={{
                [styles.burger]: true,
                [styles.burgerOpen]: isOpen || isOpenTest(),
            }}
            onClick={() => {
                console.log('this happens')
                setIsOpenTest(!isOpenTest())
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