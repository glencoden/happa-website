type RichTextItemChild = {
    text: string,
    marks: string[],
}

export type RichTextItem = {
    children: RichTextItemChild[]
}