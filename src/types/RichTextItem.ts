type RichTextItemChild = {
    text: string,
    marks: string[],
}

export type RichTextItemMarkDef = {
    href: string,
    _key: string,
    _type: string,
}

export type RichTextItem = {
    children: RichTextItemChild[]
    markDefs: RichTextItemMarkDef[]
}