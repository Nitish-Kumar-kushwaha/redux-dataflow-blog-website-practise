import { RootState } from "@/redux/store/store";
import { UserType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserType[] = [
    { id: '0', name: 'nitish kumar kushwaha' },
    { id: '1', name: 'pratyush prakash' },
    {id: '2',name:'Navneet Kushwaha'}
]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{}
})

export const selectAllUser = (state: RootState) => state.user;

export default userSlice.reducer;
