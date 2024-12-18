import { parseCarouselResponse } from './parser/parseCarouselResponse'
import { parseArticleResponse } from './parser/parseArticleResponse'
import { parseList } from './parser/parseList'
import { parseMenuResponse } from './parser/parseMenuResponse'
import { parseTextPageResponse } from './parser/parseTextPageResponse'

const PROJECT_ID = 'hwz0ma01'
const DATA_SET = 'production'

const SANITY_ENDPOINT = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATA_SET}`

class RequestService {
    _get(url: string) {
        return fetch(url)
            .then(response => response.json())
            .catch(console.error)
    }

    _createSanityUrl(query: string) {
        return `${SANITY_ENDPOINT}?query=${query}`
    }

    getHomeBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "homeBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getHomeLunchSectionData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "homeLunchSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getHomeDinnerSectionData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "homeDinnerSection"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getHomeCarouselData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "homeCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `),
        )
        return this._get(url).then(parseCarouselResponse)
    }

    getAboutBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "aboutBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getAboutNinaData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "aboutNina"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getAboutSophiaData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "aboutSophia"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getAboutCarouselData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "aboutCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `),
        )
        return this._get(url).then(parseCarouselResponse)
    }

    getAboutHappaForHomeData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "aboutHappaForHome"]{
                    title,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getLunchMenuData() {
        const url = this._createSanityUrl(
            encodeURI('*[_type == "lunchMenu"]'),
        )
        return this._get(url).then(parseMenuResponse)
    }

    getLunchDescriptionData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "lunchDescription"]{
                    title,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getDinnerBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "dinnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getDinnerCarouselData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "dinnerCarousel"]{
                    description,
                    "imageUrls": images[].asset->url
                }
            `),
        )
        return this._get(url).then(parseCarouselResponse)
    }

    getDinnerEventsData() {
        const url = this._createSanityUrl(
            encodeURI('*[_type == "dinnerEvents"]'),
        )
        return this._get(url).then((response) => parseList(response, parseMenuResponse))
    }

    getEventsBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "eventsBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getEventsPublicData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "eventsPublic"]{
                    title,
                    date,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then((response) => parseList(response, parseArticleResponse))
    }

    getEventsPrivateData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "eventsPrivate"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getPrivateBookingBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "privateBookingBanner"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getPrivateBookingCarouselData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "privateBookingCarousel"]{
                    "imageUrls": images[].asset->url
                }
            `),
        )
        return this._get(url).then(parseCarouselResponse)
    }

    getVoucherData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "voucher"]{
                    title,
                    subtitle,
                    description,
                    buttonText,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getPartnerBannerData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "partnerBanner"]{
                    title,
                    subtitle,
                    description,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then(parseArticleResponse)
    }

    getPartnersData() {
        const url = this._createSanityUrl(
            encodeURI(`
                *[_type == "partners"]{
                    title,
                    description,
                    buttonLink,
                    "imageUrl": image.asset->url
                }
            `),
        )
        return this._get(url).then((response) => parseList(response, parseArticleResponse))
    }

    getPressData() {
        const url = this._createSanityUrl(
            encodeURI('*[_type == "press"]'),
        )
        return this._get(url).then(parseTextPageResponse)
    }

    getImprintData() {
        const url = this._createSanityUrl(
            encodeURI('*[_type == "imprint"]'),
        )
        return this._get(url).then(parseTextPageResponse)
    }

    getDataProtectionData() {
        const url = this._createSanityUrl(
            encodeURI('*[_type == "dataProtection"]'),
        )
        return this._get(url).then(parseTextPageResponse)
    }
}

export const requestService = new RequestService()