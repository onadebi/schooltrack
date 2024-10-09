import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { LessonsInfoType } from "../../../models/dto/LessonsInfoType";

export const fetchAllLessons = createAsyncThunk(
    'lessons/fetchAll',
    async () => {
        const response = await appServices.lessonsService.getAllLessons();
        return response;
    }
);

export const LessonsDataSlice = createSlice({
    name: 'lessonsDataSlice',
    initialState: [] as LessonsInfoType[],
    reducers:{
        setAllLessons: (state, action: PayloadAction<LessonsInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addLesson: (state, action) => {
            state.push(action.payload);
        },
        updateLesson: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeLesson: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllLessons.pending, (state) => {
            console.log('Loading lessons...', state);
        })
        .addCase(fetchAllLessons.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllLessons.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const {setAllLessons, removeLesson} = LessonsDataSlice.actions;