import type { ParentComponent } from 'solid-js'
import styles from './Button.module.css'

export enum ButtonSize {
    Small = 'small',
    Regular = 'regular',
    Large = 'large'
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
            [styles.buttonSmall]: size === ButtonSize.Small,
            [styles.buttonRegular]: size === ButtonSize.Regular,
            [styles.buttonLarge]: size === ButtonSize.Large,
        }}>
            {children}
        </button>
    )
}

export default Button