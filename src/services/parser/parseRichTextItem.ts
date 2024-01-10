import type { RichTextItem, RichTextItemMarkDef } from '../../types/RichTextItem'

export const parseRichTextItem = (blockList: any): RichTextItem[] => {
    if (!Array.isArray(blockList)) {
        console.warn('unexpected parser input:', blockList)
        return []
    }

    return blockList.map((block: any) => {
        if (!Array.isArray(block.children) || !Array.isArray(block.markDefs)) {
            console.warn('unexpected parser input:', block)
            return {
                children: [],
                markDefs: [],
            }
        }

        return {
            children: block.children,
            markDefs: block.markDefs.map((markDef: Partial<RichTextItemMarkDef>) => ({
                href: markDef.href ?? '',
                _key: markDef._key ?? '',
                _type: markDef._type ?? '',
            })),
        }
    })
}