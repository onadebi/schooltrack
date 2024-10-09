import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { SubjectInfoType } from "../../../models/dto/SubjectInfoType";

export const fetchAllSubjects = createAsyncThunk(
    'subjects/fetchAll',
    async () => {
        const response = await appServices.subjectsService.getAllSubjects();
        return response;
    }
);


export const SubjectDataSlice = createSlice({
    name: 'subjectDataSlice',
    initialState: [] as SubjectInfoType[],
    reducers: {
        setAllSubjects: (state, action: PayloadAction<SubjectInfoType[]>) => {
            state = action.payload;
            return state;
        },
        removeSubject: (state, action: PayloadAction<number>) => {
            state = state.filter((subject) => subject.id !== action.payload);
            return state;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllSubjects.pending, (state) => {
            console.log('Loading subjects...', state);
        })
        .addCase(fetchAllSubjects.fulfilled, (state, action: PayloadAction<SubjectInfoType[]>) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllSubjects.rejected, (_state, action) => {
            console.log(action.error);
        });
    },
});


export const {setAllSubjects, removeSubject} = SubjectDataSlice.actions;