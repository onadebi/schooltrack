import { combineReducers } from "@reduxjs/toolkit";
import { CommonSlice } from "./slices/common/Common.slice";
import { TeacherDataSlice } from "./slices/data/TeacherData.slice"; // Adjust the path as necessary
import { StudentSlice } from "./slices/data/Studentdata.slice";
import { ParentDataSlice } from "./slices/data/ParentData.slice";
import { SubjectDataSlice } from "./slices/data/SubjectData.slice";

export const RootReducer = combineReducers({
    common: CommonSlice.reducer,
    teachers: TeacherDataSlice.reducer,
    students: StudentSlice.reducer,
    parents: ParentDataSlice.reducer,
    subjects: SubjectDataSlice.reducer,
});

export type RootState = ReturnType<typeof RootReducer>;