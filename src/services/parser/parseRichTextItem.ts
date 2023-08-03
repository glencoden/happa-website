import type { RichTextItem } from '../../types/RichTextItem'

export const parseRichTextItem = (blockList: any): RichTextItem[] => {
    if (!Array.isArray(blockList)) {
        console.warn('unexpected parser input')
        return []
    }

    return blockList.map((block: any) => {
        if (!Array.isArray(block.children)) {
            console.warn('unexpected parser input')
            return { children: [] }
        }

        return {
            children: block.children
        }
    })
}