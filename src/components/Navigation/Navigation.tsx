import type { Component } from 'solid-js'
import Burger from '../Burger/Burger'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import LocaleToggle from '../LocaleToggle/LocaleToggle'
import styles from './Navigation.module.css'

type Props = {
    currentPathname: string
}

const Navigation: Component<Props> = ({ currentPathname }) => {
    return (
        <div class={styles.navigation}>
            <div class={styles.logoBox}>
                <a href="/">
                    <Button size={ButtonSize.Regular}>
                        <Image
                            imageUrl="/icons/logo.svg"
                            className={styles.logo}
                        />
                    </Button>
                </a>
            </div>

            <div class={styles.burgerBox}>
                <Burger isOpen={false} />
            </div>

            <div class={styles.navItemsBox}>
                <a href="/about">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/about' || currentPathname === '/about/'}
                    >
                        Über uns
                    </Button>
                </a>

                <a href="/lunch">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/lunch' || currentPathname === '/lunch/'}
                    >
                        Mittag
                    </Button>
                </a>

                <a href="/dinner">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/dinner' || currentPathname === '/dinner/'}
                    >
                        Dinner
                    </Button>
                </a>

                <a href="/events">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/events' || currentPathname === '/events/'}
                    >
                        Events
                    </Button>
                </a>

                <a href="/voucher">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/voucher' || currentPathname === '/voucher/'}
                    >
                        Gutscheine
                    </Button>
                </a>

                <a href="/partner">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/partner' || currentPathname === '/partner/'}
                    >
                        Partner
                    </Button>
                </a>
            </div>

            <div class={styles.socialIconsBox}>
                <Link linkUrl="https://www.instagram.com/happa_restaurant">
                    <Button size={ButtonSize.Small}>
                        <Image
                            imageUrl="/icons/insta.svg"
                            width={18}
                        />
                    </Button>
                </Link>

                <Link linkUrl="https://www.facebook.com/happaberlin">
                    <Button size={ButtonSize.Small}>
                        <Image
                            imageUrl="/icons/facebook.svg"
                            width={18}
                        />
                    </Button>
                </Link>

                <LocaleToggle />
            </div>
        </div>
    )
}

export default Navigation