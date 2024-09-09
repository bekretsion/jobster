import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

export const registerUser = createAsyncThunk( 
    'user/registerUser', 
    async (user, thunkApi) => {
        try {
            const response = await customFetch.post('/auth/register', user);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.msg);
        }
    }
); 
  
export const loginUser = createAsyncThunk( 
    'user/loginUser',  // Updated to have a unique action type
    async(user, thunkApi) => {
        try {
            const response = await customFetch.post('/auth/login', user);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.msg);
        }
    }
); 

const initialState = {
    isLoading: false, 
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                toast.success(`Hello there, ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                toast.success(`welcome back ${user}`);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
    },
});

export default userSlice.reducer;
