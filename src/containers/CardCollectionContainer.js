import { connect } from "react-redux";

import CardCollection from "../components/CardCollection";

function mergeProps(stateProps) {
  const {
    numberOfCards,
    showHalfyCard,
    showZeroCard,
    showInfinityCard,
    showTShirtSizingCards
  } = stateProps;

  return {
    numberOfCards,
    showZeroCard,
    showHalfyCard,
    showInfinityCard,
    showTShirtSizingCards
  };
}
const mapStateToProps = state => ({
  numberOfCards: state.numberOfCards,
  showZeroCard: state.showZeroCard,
  showHalfyCard: state.showHalfyCard,
  showInfinityCard: state.showInfinityCard,
  showTShirtSizingCards: state.showTShirtSizingCards
});
export default connect(mapStateToProps)(CardCollection);
