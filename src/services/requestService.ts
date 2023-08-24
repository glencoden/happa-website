import { parseAboutCarouselResponse } from './parser/parseAboutCarouselResponse'
import { parseArticleResponse } from './parser/parseArticleResponse'
import { parseLunchMenuResponse } from './parser/parseLunchMenuResponse'

const projectId = 'hwz0ma01'
const dataSet = 'production'

const sanityEndpoint = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataSet}`

class RequestService {
    _get(url: string) {
        return fetch(url)
            .then(response => response.json())
            .catch(console.error)
    }

    _createSanityUrl(query: string) {
        return `${sanityEndpoint}?query=${query}`
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
        return this._get(url).then(parseAboutCarouselResponse)
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
        return this._get(url).then(parseLunchMenuResponse)
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
}

export const requestService = new RequestService()