import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { LessonsInfoType } from "../../../models/dto/LessonsInfoType";

export const LessonsDataSlice = createSlice({
    name: 'lessonsDataSlice',
    initialState: await appServices.lessonsService.getAllLessons(),
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
    }
});


export const {setAllLessons, removeLesson} = LessonsDataSlice.actions;