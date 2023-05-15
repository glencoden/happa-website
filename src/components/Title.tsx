import styles from './Title.module.css'

type Props = {
    text: string
    tilted?: boolean
}

function Title(props: Props) {
    return (
        <h2 classList={{ [styles.tilted]: props.tilted }}>
            {props.text}
        </h2>
    )
}

export default Title

// TODO
// i18n text
// make headline element dynamic