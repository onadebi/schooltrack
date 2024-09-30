import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsInfoType } from "../../../models/dto";
import { appServices } from "../../../services/appservices";

const initialState: EventsInfoType[] = await appServices.eventsService.getAllEvents();

const eventsDataSlice = createSlice({
    name: 'eventsDataSlice',
    initialState,
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
    }
});

export const EventsDataReducer = eventsDataSlice.reducer;
export const {getAllEvents, removeEvent, updateEvent} = eventsDataSlice.actions;