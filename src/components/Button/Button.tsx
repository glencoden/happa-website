import type { Component } from 'solid-js'

export enum ButtonSize {
    REGULAR = 'regular',
    LARGE = 'large'
}

type Props = {
    size: ButtonSize
    label: string
    active?: boolean
}

const Button: Component<Props> = ({ size, label, active }) => {
    return (
        <button>
            {label}
        </button>
    )
}

export default Button