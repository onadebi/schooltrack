import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExamInfoType } from "../../../models/dto/ExamInfoType";
import { appServices } from "../../../services/appservices";

export const initialState: ExamInfoType[] = await appServices.examService.getAllExams();

export const ExamDataSlice = createSlice({
    name: 'examDataSlice',
    initialState,
    reducers: {
        setAllExams: (state, action: PayloadAction<ExamInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addExam: (state, action) => {
            state.push(action.payload);
        },
        updateExam: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeExam: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }
});

export const { setAllExams, removeExam } = ExamDataSlice.actions;