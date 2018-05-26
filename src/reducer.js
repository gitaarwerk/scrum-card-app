import { handleActions } from "redux-actions";
import { defineState, getState } from "redux-localstore";

import * as types from "./actionTypes";

const defaultState = {
  selectedCard: undefined,
  turned: false,
  title: "Test title",
  backgroundColor: "#666",
  cardFrontBackgroundColor: "#fff",
  cardFrontFontColor: "#000",
  cardBackgroundImage: undefined,
  cardBackgroundColor: "#000",
  numberOfCards: 9,
  showZeroCard: true,
  showHalfyCard: true,
  showInfinityCard: false,
  showTShirtSizingCards: false,
  settingsPanelOpen: false,
  ...getState()
};

const initialState = defineState(defaultState)();

export default handleActions(
  {
    [types.SELECT_CARD]: (state, { payload: selectedCard }) => ({
      ...state,
      selectedCard: selectedCard
    }),

    [types.DESELECT_CARD]: state => ({
      ...state,
      selectedCard: undefined,
      turned: false
    }),

    [types.TURN_CARD]: state => ({
      ...state,
      turned: true
    }),

    [types.TOGGLE_SETTINGS]: state => ({
      ...state,
      settingsPanelOpen: !state.settingsPanelOpen
    }),

    [types.TOGGLE_ZERO_CARD]: state => ({
      ...state,
      showZeroCard: !state.showZeroCard
    }),

    [types.TOGGLE_INFINITY_CARD]: state => ({
      ...state,
      showInfinityCard: !state.showInfinityCard
    }),

    [types.TOGGLE_T_SHIRT_SIZING_CARDS]: state => ({
      ...state,
      showTShirtSizingCards: !state.showTShirtSizingCards
    }),

    [types.TOGGLE_HALFY_CARD]: state => ({
      ...state,
      showHalfyCard: !state.showHalfyCard
    }),

    [types.UPDATE_AMOUNT_OF_CARDS]: (state, { payload: numberOfCards }) => ({
      ...state,
      numberOfCards: Number(numberOfCards) < 15 ? Number(numberOfCards) : 15
    }),

    [types.UPDATE_BACKGROUND_COLOR]: (state, { payload: backgroundColor }) => ({
      ...state,
      backgroundColor: backgroundColor.hex
    }),

    [types.UPDATE_CARD_BACK_BACKGROUND_COLOR]: (
      state,
      { payload: backgroundColor }
    ) => ({
      ...state,
      cardBackgroundColor: backgroundColor.hex
    }),

    [types.UPDATE_CARD_FRONT_BACKGROUND_COLOR]: (
      state,
      { payload: backgroundColor }
    ) => ({
      ...state,
      cardFrontBackgroundColor: backgroundColor.hex
    }),

    [types.UPDATE_CARD_FRONT_FONT_COLOR]: (
      state,
      { payload: backgroundColor }
    ) => ({
      ...state,
      cardFrontFontColor: backgroundColor.hex
    }),

    [types.UPLOAD_BACKGROUND_IMAGE]: (state, { payload }) => ({
      ...state,
      cardBackgroundImage: payload
    }),

    [types.REMOVE_BACKGROUND_IMAGE]: state => ({
      ...state,
      cardBackgroundImage: undefined
    })
  },

  initialState
);
