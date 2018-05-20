import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actionCreators';
import Card from '../components/Card';

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { selectCard, deselectCard, turnCard } = dispatchProps;
  const { selectedCard, turned, cardBackgroundColor, cardBackgroundImage } = stateProps;

  return {
    onClickCard: selectCard,
    onClickDeselectCard: deselectCard,
    onClickTurnCard: turnCard,
    turned,
    selected: ownProps.children === selectedCard,
    ...ownProps,
    cardBackgroundColor,
    cardBackgroundImage
  };
}
const mapStateToProps = state => ({
  selectedCard: state.selectedCard,
  turned: state.turned,
  cardBackgroundImage: state.cardBackgroundImage,
  cardBackgroundColor: state.cardBackgroundColor
});
export default connect(mapStateToProps, actions, mergeProps)(Card);
