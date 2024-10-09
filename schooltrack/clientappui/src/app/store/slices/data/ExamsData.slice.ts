import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExamInfoType } from "../../../models/dto/ExamInfoType";
import { appServices } from "../../../services/appservices";

export const fetchAllExams = createAsyncThunk(
    'exams/fetchAll',
    async () => {
        const response = await appServices.examService.getAllExams();
        return response;
    }
);

export const ExamDataSlice = createSlice({
    name: 'examDataSlice',
    initialState: [] as ExamInfoType[],
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllExams.pending, (state) => {
            console.log('Loading exams...', state);
        })
        .addCase(fetchAllExams.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllExams.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});

export const { setAllExams, removeExam } = ExamDataSlice.actions;