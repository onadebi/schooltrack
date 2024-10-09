import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { ClassesInfoType } from "../../../models/dto/ClassesInfoType";

export const fetchAllClasses = createAsyncThunk(
    'classes/fetchAll',
    async () => {
        const response = await appServices.classesService.getAllClasses();
        return response;
    }
);


export const ClassesDataSlice = createSlice({
    name: 'classesDataSlice',
    initialState: [] as ClassesInfoType[],
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
            return state.filter((x) => x.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllClasses.pending, (state) => {
            console.log('Loading classes...', state);
        })
        .addCase(fetchAllClasses.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllClasses.rejected, (_state, action) => {
            console.log(action.error);
        });
    },
});

export const {setAllClasses, removeClass} = ClassesDataSlice.actions;