import type { ParentComponent } from 'solid-js'

export enum ButtonSize {
    REGULAR = 'regular',
    LARGE = 'large'
}

type Props = {
    size: ButtonSize
    active?: boolean
}

const Button: ParentComponent<Props> = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Button