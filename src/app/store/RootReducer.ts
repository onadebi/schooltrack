import { combineReducers } from "@reduxjs/toolkit";
import { CommonSlice } from "./slices/common/Common.slice";
import { TeacherDataSlice } from "./slices/data/TeacherData.slice"; // Adjust the path as necessary

export const RootReducer = combineReducers({
    common: CommonSlice.reducer,
    teacher: TeacherDataSlice.reducer,
});

export type RootState = ReturnType<typeof RootReducer>;