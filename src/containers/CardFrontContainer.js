import { connect } from "react-redux";

import CardFront from "../components/CardFront";

function mergeProps(stateProps) {
  const { cardFrontBackgroundColor, cardFrontFontColor } = stateProps;

  return {
    cardFrontBackgroundColor,
    cardFrontFontColor
  };
}
const mapStateToProps = state => ({
  cardFrontBackgroundColor: state.cardFrontBackgroundColor,
  cardFrontFontColor: state.cardFrontFontColor
});

export default connect(mapStateToProps, {})(CardFront);
