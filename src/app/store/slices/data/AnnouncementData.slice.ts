import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnnouncementsInfoType } from "../../../models/dto";
import { appServices } from "../../../services/appservices";

export const fetchAllAnnouncements = createAsyncThunk(
    'announcements/fetchAll',
    async () => {
        const response = await appServices.announcementService.fetchAllAnnouncement();
        return response;
    }
);

const AnnouncementDataSlice = createSlice({
    name: 'announcementDataSlice',
    initialState: [] as AnnouncementsInfoType[],
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllAnnouncements.pending, (state) => {
            console.log('Loading announcements...', state);
        })
        .addCase(fetchAllAnnouncements.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllAnnouncements.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const AnnouncementDataReducer = AnnouncementDataSlice.reducer;

export const {setAnnouncements, removeAnnouncement, updateAnnouncement} = AnnouncementDataSlice.actions;