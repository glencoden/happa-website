import type { Component } from 'solid-js'
import Burger from '../Burger/Burger'
import Button, { ButtonSize } from '../Button/Button'
import Image from '../Image/Image'
import Link from '../Link/Link'
import LocaleToggle from '../LocaleToggle/LocaleToggle'
import Text from '../Text/Text'
import styles from './Navigation.module.css'
import { useStore } from '@nanostores/solid'
import { isMenuOpen } from '../../store'

type Props = {
    currentPathname: string
}

const Navigation: Component<Props> = ({ currentPathname }) => {
    const $isMenuOpen = useStore(isMenuOpen)

    return (
        <div class={styles.navigation}>
            <div classList={{
                [styles.overlay]: true,
                [styles.showOverlay]: $isMenuOpen(),
            }} />

            <div classList={{
                [styles.logoBox]: true,
                [styles.invertColor]: $isMenuOpen(),
            }}>
                <a href="/">
                    <Button size={ButtonSize.Regular}>
                        <Image
                            imageUrl={`${import.meta.env.PUBLIC_URL}/icons/logo.svg`}
                            className={styles.logo}
                        />
                    </Button>
                </a>
            </div>

            <div classList={{
                [styles.burgerBox]: true,
                [styles.invertColor]: $isMenuOpen(),
            }}>
                <Button
                    size={ButtonSize.Regular}
                    onClick={() => isMenuOpen.set(!$isMenuOpen())}
                >
                    <Burger isOpen={$isMenuOpen()} />
                </Button>
            </div>

            <div classList={{
                [styles.navItemsBox]: true,
                [styles.showNavItemsBox]: $isMenuOpen(),
                [styles.invertColor]: $isMenuOpen(),
            }}>
                <a href="/about">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/about' || currentPathname === '/about/'}
                    >
                        <Text
                            en="About"
                            de="Über uns"
                        />
                    </Button>
                </a>

                <a href="/lunch">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/lunch' || currentPathname === '/lunch/'}
                    >
                        <Text
                            en="Lunch"
                            de="Mittag"
                        />
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
                        <Text
                            en="Vouchers"
                            de="Gutscheine"
                        />
                    </Button>
                </a>

                <a href="/partner">
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === '/partner' || currentPathname === '/partner/'}
                    >
                        <Text
                            en="Partners"
                            de="Partner"
                        />
                    </Button>
                </a>
            </div>

            <div classList={{
                [styles.socialIconsBox]: true,
                [styles.showSocialIconsBox]: $isMenuOpen(),
                [styles.invertColor]: $isMenuOpen(),
            }}>
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