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

    getLunchMenuData() {
        const url = this._createSanityUrl(
            encodeURIComponent('*[_type == "lunchMenu"]'),
        )
        return this._get(url).then(parseLunchMenuResponse)
    }

    getLunchDescriptionData() {
        const url = this._createSanityUrl(
            encodeURIComponent(`
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