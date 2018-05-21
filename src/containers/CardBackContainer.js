import { connect } from "react-redux";

import CardBack from "../components/CardBack";

function mergeProps(stateProps) {
  const { cardBackgroundImage, cardBackgroundColor } = stateProps;

  return {
    cardBackgroundImage,
    cardBackgroundColor
  };
}
const mapStateToProps = state => ({
  cardBackgroundImage: state.cardBackgroundImage,
  cardBackgroundColor: state.cardBackgroundColor
});

export default connect(mapStateToProps, {})(CardBack);
