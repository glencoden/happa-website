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
                <a href={`${import.meta.env.PUBLIC_URL}/`}>
                    <Button size={ButtonSize.Regular}>
                        <Image
                            imageUrl={`${import.meta.env.PUBLIC_URL}/logo.svg`}
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
                <a href={`${import.meta.env.PUBLIC_URL}/about`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/about` || currentPathname === `${import.meta.env.PUBLIC_URL}/about/`}
                    >
                        <Text
                            en="About"
                            de="Über uns"
                        />
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/lunch`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/lunch` || currentPathname === `${import.meta.env.PUBLIC_URL}/lunch/`}
                    >
                        <Text
                            en="Lunch"
                            de="Mittag"
                        />
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/dinner`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/dinner` || currentPathname === `${import.meta.env.PUBLIC_URL}/dinner/`}
                    >
                        Dinner
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/events`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/events` || currentPathname === `${import.meta.env.PUBLIC_URL}/events/`}
                    >
                        Events
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/voucher`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/voucher` || currentPathname === `${import.meta.env.PUBLIC_URL}/voucher/`}
                    >
                        <Text
                            en="Vouchers"
                            de="Gutscheine"
                        />
                    </Button>
                </a>

                <a href={`${import.meta.env.PUBLIC_URL}/partner`}>
                    <Button
                        size={ButtonSize.Regular}
                        active={currentPathname === `${import.meta.env.PUBLIC_URL}/partner` || currentPathname === `${import.meta.env.PUBLIC_URL}/partner/`}
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
                            imageUrl={`${import.meta.env.PUBLIC_URL}/insta.svg`}
                            width={18}
                        />
                    </Button>
                </Link>

                <Link linkUrl="https://www.facebook.com/happaberlin">
                    <Button size={ButtonSize.Small}>
                        <Image
                            imageUrl={`${import.meta.env.PUBLIC_URL}/facebook.svg`}
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