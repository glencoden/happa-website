import type { ParentComponent } from 'solid-js'

type Props = {
    linkUrl: string
}

const Link: ParentComponent<Props> = ({ children, linkUrl }) => {
    if (linkUrl.startsWith('/')) {
        return (
            <a href={`${import.meta.env.PUBLIC_URL}${linkUrl}`}>
                {children}
            </a>
        )
    }

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