import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsInfoType } from "../../../models/dto";
import { appServices } from "../../../services/appservices";

export const fetchAllEvents = createAsyncThunk(
    'events/fetchAll',
    async () => {
        const response = await appServices.eventsService.getAllEvents();
        return response;
    }
);


const eventsDataSlice = createSlice({
    name: 'eventsDataSlice',
    initialState: [] as EventsInfoType[],
    reducers:{
        getAllEvents: (state, action: PayloadAction<EventsInfoType[]>) => {
            state = action.payload;
            return state;
        },
        removeEvent: (state, action: PayloadAction<number>) => {
            return state.filter((event) => event.id !== action.payload);
        },
        updateEvent: (state, action:PayloadAction<EventsInfoType>) => {
            const index = state.findIndex((event) => event.id === action.payload.id);
            state[index] = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllEvents.pending, (state) => {
            console.log('Loading events...', state);
        })
        .addCase(fetchAllEvents.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllEvents.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});

export const EventsDataReducer = eventsDataSlice.reducer;
export const {getAllEvents, removeEvent, updateEvent} = eventsDataSlice.actions;