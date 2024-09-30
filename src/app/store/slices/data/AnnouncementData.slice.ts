import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnnouncementsInfoType } from "../../../models/dto";
import { appServices } from "../../../services/appservices";

const initialState: AnnouncementsInfoType[] = await appServices.announcementService.fetchAllAnnouncement();

const AnnouncementDataSlice = createSlice({
    name: 'announcementDataSlice',
    initialState,
    reducers:{
        setAnnouncements: (state, action: PayloadAction<AnnouncementsInfoType[]>) => {
            state = action.payload;
            return state;
        },
        removeAnnouncement: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateAnnouncement: (state, action: PayloadAction<AnnouncementsInfoType>) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});


export const AnnouncementDataReducer = AnnouncementDataSlice.reducer;

export const {setAnnouncements, removeAnnouncement, updateAnnouncement} = AnnouncementDataSlice.actions;