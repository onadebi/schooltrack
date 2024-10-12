import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = { display: false, message : "" };
export type CommonState = typeof initState;

export const CommonSlice = createSlice({
    name: 'common',
    initialState: initState,
    reducers: {
        hideLoader: (state) => {
            state.display = false;
            state.message = "";
        },
        setLoading: (state, action: PayloadAction<CommonState>) => {
            console.info("Loader: ", action.payload);
            switch (action.payload.display) {
                case true:
                    state.display = true;
                    state.message = action.payload.message;
                    break;
                case false:
                    state.display = false;
                    state.message = "";
                    break;
                default:
                    return state;
            }
        }
    }
});

export const { hideLoader, setLoading } = CommonSlice.actions;