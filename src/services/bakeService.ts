import { getImage } from 'astro:assets'
import type { Article } from '../types/Article'
import type { BakedArticle } from '../types/BakedArticle'
import type { BakedCarousel } from '../types/BakedCarousel'
import type { BakedImage } from '../types/BakedImage'
import type { CarouselType } from '../types/CarouselType'

const IMAGE_WIDTHS = [400, 800, 1200, 1600]

export async function bakeImage(imageUrl: string): Promise<BakedImage> {
    const image = await getImage({
        src: imageUrl,
        inferSize: true,
        format: 'webp',
        widths: IMAGE_WIDTHS,
    })

    return {
        src: image.src,
        srcSet: image.srcSet.attribute,
    }
}

export async function bakeArticle(article: Article): Promise<BakedArticle> {
    const { imageUrl, ...rest } = article

    return {
        ...rest,
        image: await bakeImage(imageUrl),
    }
}

export async function bakeCarousel(carousel: CarouselType): Promise<BakedCarousel> {
    return {
        description: carousel.description,
        images: await Promise.all(carousel.imageUrls.map(bakeImage)),
    }
}
