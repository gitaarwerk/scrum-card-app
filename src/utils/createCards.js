import fibonacci from "./fibonacci";

const isZero = value => value === 0;
const isHalfy = value => value === 0.5;

export default (
  cards,
  noZero,
  noHalfy,
  showInfinityCard,
  showTShirtSizingCards
) => {
  const newSetOfCards = fibonacci(cards).filter(
    (result, index) => fibonacci(cards).indexOf(result) === index
  );

  newSetOfCards.push(0.5); // Add halfy
  newSetOfCards.sort((a, b) => a - b); // Sort numeric

  if (showTShirtSizingCards) {
    newSetOfCards.push("XS");
    newSetOfCards.push("S");
    newSetOfCards.push("M");
    newSetOfCards.push("L");
    newSetOfCards.push("XL");
  }
  if (showInfinityCard) newSetOfCards.push("∞");

  newSetOfCards
    .filter(result => noZero && isZero(result))
    .filter(result => noHalfy && isHalfy(result));

  return newSetOfCards;
};
