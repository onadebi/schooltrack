import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { ClassesInfoType } from "../../../models/dto/ClassesInfoType";

export const ClassesDataSlice = createSlice({
    name: 'classesDataSlice',
    initialState: await appServices.classesService.getAllClasses(),
    reducers: {
        setAllClasses: (state, action: PayloadAction<ClassesInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addClass: (state, action) => {
            state.push(action.payload);
        },
        updateClass: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeClass: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }

});

export const {setAllClasses, removeClass} = ClassesDataSlice.actions;