import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TeacherInfoType } from "../../../models/dto/TeacherInfoType";
import { appServices } from "../../../services/appservices";

// Create an async thunk for fetching the initial teacher data
export const fetchAllTeachers = createAsyncThunk(
    'teachers/fetchAll',
    async () => {
        const response = await appServices.teacherService.getAllTeachers();
        return response;
    }
);

export const TeacherDataSlice = createSlice({
    name: 'dataslice',
    initialState: [] as TeacherInfoType[],
    reducers: {
        setAllTeachers: (state, action: PayloadAction<TeacherInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addTeacher: (state, action) => {
            state.push(action.payload);
        },
        updateTeacher: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteTeacher: (state, action: PayloadAction<number>) => {
            const newState = state.filter((x) => x.id !== action.payload);
            console.log('New state:', newState);
            state = newState;
            console.log('Modified state:', newState);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTeachers.pending, (state) => {
                // Optionally handle loading state
                console.log('Loading teachers...', state);
            })
            .addCase(fetchAllTeachers.fulfilled, (state, action: PayloadAction<TeacherInfoType[]>) => {
                state = action.payload;
                return state;
            })
            .addCase(fetchAllTeachers.rejected, (_state, action) => {
                // Optionally handle error state
                console.log(action.error);
            });
    }
});

export const { setAllTeachers, deleteTeacher } = TeacherDataSlice.actions;