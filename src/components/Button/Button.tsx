import type { ParentComponent } from 'solid-js'
import styles from './Button.module.css'

export enum ButtonSize {
    REGULAR = 'regular',
    LARGE = 'large'
}

type Props = {
    size: ButtonSize
    active?: boolean
}

const Button: ParentComponent<Props> = ({ children, size, active }) => {
    return (
        <button classList={{
            [styles.button]: true,
            [styles.buttonActive]: Boolean(active),
            [styles.buttonRegular]: size === ButtonSize.REGULAR,
            [styles.buttonLarge]: size === ButtonSize.LARGE,
        }}>
            {children}
        </button>
    )
}

export default Button