import { connect } from "react-redux";
import * as actions from "../actionCreators";
import SettingsPane from "../components/SettingsPane";

function mergeProps(stateProps, dispatchProps, ownProps) {
  const {
    toggleSettings,
    updateAmountOfCards,
    toggleZeroCard,
    toggleHalfyCard,
    toggleInfinityCard,
    toggleTShirtSizingCards,
    updateBackgroundColor,
    updateCardBackBackgroundColor,
    updateCardFrontBackgroundColor,
    updateCardFrontFontBackgroundColor
  } = dispatchProps;
  const {
    numberOfCards,
    showZeroCard,
    showHalfyCard,
    showInfinityCard,
    showTShirtSizingCards,
    settingsPanelOpen,
    backgroundColor,
    cardFrontBackgroundColor,
    cardFrontFontColor,
    cardBackgroundImage,
    cardBackgroundColor
  } = stateProps;

  return {
    isOpen: settingsPanelOpen,
    onClickToggleSettings: toggleSettings,
    onChangeAmountOfCards: event =>
      updateAmountOfCards(event.currentTarget.value),
    onChangeZeroCard: toggleZeroCard,
    onChangeHalfyCard: toggleHalfyCard,
    onChangeInfinityCard: toggleInfinityCard,
    onChangeTShirtSizingCards: toggleTShirtSizingCards,
    numberOfCards,
    showZeroCard,
    showHalfyCard,
    showInfinityCard,
    showTShirtSizingCards,
    backgroundColor,
    onChangeBackgroundColor: updateBackgroundColor,
    onChangeUpdateCardBackBackgroundColor: updateCardBackBackgroundColor,
    onChangeUpdateCardFrontBackgroundColor: updateCardFrontBackgroundColor,
    onChangeUpdateCardFrontFontBackgroundColor: updateCardFrontFontBackgroundColor,
    cardFrontBackgroundColor,
    cardFrontFontColor,
    cardBackgroundImage,
    cardBackgroundColor
  };
}

const mapStateToProps = state => ({
  settingsPanelOpen: state.settingsPanelOpen,
  numberOfCards: state.numberOfCards,
  showZeroCard: state.showZeroCard,
  showHalfyCard: state.showHalfyCard,
  showInfinityCard: state.showInfinityCard,
  showTShirtSizingCards: state.showTShirtSizingCards,
  backgroundColor: state.backgroundColor,
  cardFrontBackgroundColor: state.cardFrontBackgroundColor,
  cardFrontFontColor: state.cardFrontFontColor,
  cardBackgroundImage: state.cardBackgroundImage,
  cardBackgroundColor: state.cardBackgroundColor
});

export default connect(mapStateToProps, actions, mergeProps)(SettingsPane);
