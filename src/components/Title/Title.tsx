import type { Component } from 'solid-js'
import styles from './Title.module.css'

type Props = {
    text: string
    tilted?: boolean
}

const Title: Component<Props> = (props) => {
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