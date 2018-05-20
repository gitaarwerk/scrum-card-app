import { createAction as create } from "redux-actions";
import * as types from "./actionTypes";

export const selectCard = create(types.SELECT_CARD);
export const deselectCard = create(types.DESELECT_CARD);
export const turnCard = create(types.TURN_CARD);

export const toggleSettings = create(types.TOGGLE_SETTINGS);
