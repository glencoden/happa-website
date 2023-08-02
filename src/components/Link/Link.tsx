import type { ParentComponent } from 'solid-js'
import styles from './Link.module.css'

type Props = {
    linkUrl: string
}

const Link: ParentComponent<Props> = ({ children, linkUrl }) => {
    return (
        <a
            href={linkUrl}
            rel="noopener noreferrer"
            target="_blank"
        >
            {children}
        </a>
    )
}

export default Link