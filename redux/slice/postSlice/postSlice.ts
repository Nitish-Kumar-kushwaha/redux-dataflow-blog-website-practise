import { RootState } from "@/redux/store/store";
import { PostType } from "@/types";
import { PayloadAction, PrepareAction, createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from"date-fns"

const initialState :PostType[] = [
    {
        id: '1',
        title: 'Learning Redux toolKit',
        content: 'I`ve heard Good Things',
        date: sub(new Date(), { minutes: 10 }),
        reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee:0
    }
    },
    {
        id: '2',
        title: 'Slice....',
        content: 'The more I say slice the more I want pizza',
        date: sub(new Date(), { minutes: 10 }),
        reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee:0
    }
    }
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<any>) =>{
                state.push(action.payload)
            },
            prepare:(title: string, content: string, userId) =>{
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded: (state, action: PayloadAction<{ postId: string; reaction:keyof PostType['reactions']}>) =>{
            const { postId, reaction } = action.payload
            const existingPost : PostType | undefined = state.find(post => post.id === postId)
            if (existingPost !== undefined) {

                    existingPost.reactions[reaction]++


            }
        }
    }
})

export const selectAllPost = (state : RootState) => state.post
export const{postAdded, reactionAdded} = postSlice.actions
export default postSlice.reducer
