import type { Component } from 'solid-js'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import styles from './Navigation.module.css'

type Props = {
    currentPathname: string
}

const Navigation: Component<Props> = ({ currentPathname }) => {
    return (
        <div class={styles.navigation}>
            <a href="/">
                <Button size={ButtonSize.REGULAR}>
                    <Image
                        imageUrl="/icons/logo.svg"
                        width={180}
                    />
                </Button>
            </a>

            <div class={styles.navItemsBox}>
                <a href="/about">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/about' || currentPathname === '/about/'}
                    >
                        Über uns
                    </Button>
                </a>

                <a href="/lunch">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/lunch' || currentPathname === '/lunch/'}
                    >
                        Mittag
                    </Button>
                </a>

                <a href="/dinner">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/dinner' || currentPathname === '/dinner/'}
                    >
                        Dinner
                    </Button>
                </a>

                <a href="/events">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/events' || currentPathname === '/events/'}
                    >
                        Events
                    </Button>
                </a>

                <a href="/booking">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/booking' || currentPathname === '/booking/'}
                    >
                        Private Booking
                    </Button>
                </a>

                <a href="/partner">
                    <Button
                        size={ButtonSize.REGULAR}
                        active={currentPathname === '/partner' || currentPathname === '/partner/'}
                    >
                        Partner
                    </Button>
                </a>

                <Button size={ButtonSize.REGULAR}>
                    English
                </Button>
            </div>

            <div class={styles.socialIconsBox}>
                <Link linkUrl="https://www.instagram.com/happa_restaurant">
                    <Button size={ButtonSize.REGULAR}>
                        <Image
                            imageUrl="/icons/insta.svg"
                            width={18}
                        />
                    </Button>
                </Link>

                <Link linkUrl="https://www.facebook.com/happaberlin">
                    <Button size={ButtonSize.REGULAR}>
                        <Image
                            imageUrl="/icons/facebook.svg"
                            width={18}
                        />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation