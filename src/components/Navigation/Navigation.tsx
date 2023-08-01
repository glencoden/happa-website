import type { Component } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'

const Navigation: Component<void> = () => {
    return (
        <div>
                <a href="/">
                    <Button
                        size={ButtonSize.REGULAR}
                        label="home"
                    />
                </a>

                <a href="/about">
                    <Button
                        size={ButtonSize.REGULAR}
                        label="about"
                    />
                </a>

                <a href="/lunch">
                    <Button
                        size={ButtonSize.REGULAR}
                        label="lunch"
                    />
                </a>
        </div>
    )
}

export default Navigation