import type { RichTextItem } from '../../types/RichTextItem'

export const parseRichTextItem = (blockList: any): RichTextItem[] => {
    if (!Array.isArray(blockList)) {
        console.warn('unexpected parser input:', blockList)
        return []
    }

    return blockList.map((block: any) => {
        if (!Array.isArray(block.children)) {
            console.warn('unexpected parser input:', block.children)
            return { children: [] }
        }

        return {
            children: block.children
        }
    })
}