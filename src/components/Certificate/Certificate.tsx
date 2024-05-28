import type { Component } from 'solid-js'
import Image from '../Image/Image'
import Text from '../Text/Text'
import styles from './Certificate.module.css'

const Certificate: Component = () => {
    return (
        <form
            method="get"
            action={`${import.meta.env.PUBLIC_URL}/download/HAPPA_Restaurant_Zertifikat_2024-05.pdf`}
            target='_blank'
            title="Download"
        >
            <button
                type="submit"
                class={styles.downloadButton}
            >
                <Image
                    imageUrl={`${import.meta.env.PUBLIC_URL}/bio-certificate.svg`}
                    className={styles.certificateIcon}
                />

                <Text
                    en="We are certified organic!"
                    de="Wir sind bio-zertifiziert!"
                />

                <p class={styles.certificateNumber}>
                    DE-ÖKO-070
                    <br />
                    Ktr.-Nr. DE-BE-707-58022
                </p>
            </button>
        </form>
    )
}

export default Certificate