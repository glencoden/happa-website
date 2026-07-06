import type { Article } from './Article'
import type { BakedImage } from './BakedImage'

export type BakedArticle = Omit<Article, 'imageUrl'> & { image: BakedImage }
