import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CardCollection from "../components/CardCollection";

function mergeProps(stateProps) {
  const {
    numberOfCards,
    noHalfy,
    noZero,
    showInfinityCard,
    showTShirtSizingCards
  } = stateProps;

  return {
    numberOfCards,
    noZero,
    noHalfy,
    showInfinityCard,
    showTShirtSizingCards
  };
}
const mapStateToProps = state => ({
  numberOfCards: state.numberOfCards,
  noZero: state.noZero,
  noHalfy: state.noHalfy,
  showInfinityCard: state.showInfinityCard,
  showTShirtSizingCards: state.showTShirtSizingCards
});
export default connect(mapStateToProps)(CardCollection);
