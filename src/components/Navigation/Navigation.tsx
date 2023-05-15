import type { Component } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'

const Navigation: Component<void> = () => {
    return (
        <div>
            <Button size={ButtonSize.REGULAR}>
                <a href="/">
                    home
                </a>
            </Button>

            <Button size={ButtonSize.REGULAR}>
                <a href="/about">
                    about
                </a>
            </Button>

            <Button size={ButtonSize.REGULAR}>
                <a href="/lunch">
                    lunch
                </a>
            </Button>
        </div>
    )
}

export default Navigation