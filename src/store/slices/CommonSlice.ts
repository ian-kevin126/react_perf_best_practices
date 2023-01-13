import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store";

export const name: string = "common";

export const initialState: CommonState = {
  isLoading: false,
  notification: null,
  //   mode: "light",
};

export const commonSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setter: (state, action: PayloadAction<object>) => {
      state = Object.assign(state, action.payload);
    },
    openLoading: (state) => {
      state.isLoading = true;
    },
    closeLoading: (state) => {
      state.isLoading = false;
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notification = action.payload;
    },
    removeNotification: (state) => {
      state.notification = null;
    },
    // changeThemeMode: (state, action: PayloadAction<ThemeMode>) => {
    //   state.mode = action.payload;
    // },
  },
});

export const commonActions = commonSlice.actions;

export const commonAsyncActions = {
  // https://redux-toolkit.js.org/usage/usage-guide#defining-async-logic-in-slices
  asyncAddNotification: (timeout: number) => async (dispatch: AppDispatch) => {
    dispatch(commonActions.openLoading());
    setTimeout(() => {
      dispatch(
        commonActions.addNotification({
          message: "Open async notification successfully",
          type: "info",
        })
      );
      dispatch(commonActions.closeLoading());
    }, timeout);
  },
};

export default commonSlice.reducer;

export type NotificationType = "info" | "success" | "error" | "warning";

export interface Notification {
  type: NotificationType;
  message: string;
}

export interface CommonState {
  isLoading: boolean;
  notification: Notification | null;
  //   mode: ThemeMode;
}
