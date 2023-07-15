export type ProviderType = {
    children : React.ReactNode
}
export type PostType = {
    id: string,
    title: string,
    content: string,
    date: Date
    userId?: string,
    reactions: {
        thumbsUp: number,
        wow: number,
        heart: number,
        rocket: number,
        coffee: number
    }
}
export type UserType = {
    id: string,
    name: string
}

export type PostAuthorType = {
    userId: string
}
