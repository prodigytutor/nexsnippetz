type Snippet = [{
    id: string
    userId: string
    name: string
    content: string

}]
export type Collection = {
    id: string
    userId: string
    name: string
    snippets: Snippet
}
