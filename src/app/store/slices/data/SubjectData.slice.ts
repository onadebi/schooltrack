import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { SubjectInfoType } from "../../../models/dto/SubjectInfoType";

export const SubjectDataSlice = createSlice({
    name: 'subjectDataSlice',
    initialState: await appServices.subjectsService.getAllSubjects(),
    reducers: {
        setAllSubjects: (state, action: PayloadAction<SubjectInfoType[]>) => {
            state = action.payload;
            return state;
        },
        removeSubject: (state, action: PayloadAction<number>) => {
            state = state.filter((subject) => subject.id !== action.payload);
            return state;
        },

    }
});


export const {setAllSubjects, removeSubject} = SubjectDataSlice.actions;