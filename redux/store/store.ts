//@ts-check
'use client'
import { configureStore } from "@reduxjs/toolkit"
import postSlice from "../slice/postSlice/postSlice"
import userSlice from "../slice/user/userSlice"

export const store = configureStore({
    reducer: {
        post: postSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
