import type { Component } from 'solid-js'
import Image from '../Image/Image'
import styles from './Certificate.module.css'

const Certificate: Component = () => {
    return (
        <div class={styles.certificate}>
            <Image
                imageUrl="/icons/bio-certificate.svg"
                width={80}
            />

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
                    Wir sind bio-zertifiziert!<br />
                    DE-ÖKO-070<br />
                    Ktr.-Nr. DE-BE-707-58022
                </button>
            </form>
        </div>
    )
}

export default Certificate