import type { Component } from 'solid-js'
import Image from '../Image/Image'
import styles from './Certificate.module.css'

const Certificate: Component = () => {
    return (
        <form
            method="get"
            action="/download/HAPPA_Restaurant_Zertifikat_2023-01.pdf"
            target='_blank'
            title="Zertifikat herunterladen"
        >
            <button
                type="submit"
                class={styles.downloadButton}
            >
                <Image
                    imageUrl="/icons/bio-certificate.svg"
                    className={styles.certificateIcon}
                />

                Wir sind bio-zertifiziert!

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