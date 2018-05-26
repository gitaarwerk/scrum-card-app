import { createAction as create } from "redux-actions";
import * as types from "./actionTypes";

export const selectCard = create(types.SELECT_CARD);
export const deselectCard = create(types.DESELECT_CARD);
export const turnCard = create(types.TURN_CARD);

export const toggleSettings = create(types.TOGGLE_SETTINGS);

export const updateAmountOfCards = create(types.UPDATE_AMOUNT_OF_CARDS);
export const toggleZeroCard = create(types.TOGGLE_ZERO_CARD);
export const toggleHalfyCard = create(types.TOGGLE_HALFY_CARD);
export const toggleInfinityCard = create(types.TOGGLE_INFINITY_CARD);
export const toggleTShirtSizingCards = create(
  types.TOGGLE_T_SHIRT_SIZING_CARDS
);

export const updateBackgroundColor = create(types.UPDATE_BACKGROUND_COLOR);
export const updateCardBackBackgroundColor = create(
  types.UPDATE_CARD_BACK_BACKGROUND_COLOR
);
export const updateCardFrontBackgroundColor = create(
  types.UPDATE_CARD_FRONT_BACKGROUND_COLOR
);
export const updateCardFrontFontBackgroundColor = create(
  types.UPDATE_CARD_FRONT_FONT_COLOR
);

export const uploadBackgroundImage = create(types.UPLOAD_BACKGROUND_IMAGE);
export const uploadBackgroundImageFailure = create(
  types.UPLOAD_BACKGROUND_IMAGE_FAILURE
);
export const removeBackgroundImage = create(types.REMOVE_BACKGROUND_IMAGE);
