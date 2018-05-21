import fibonacci from "./fibonacci";

const isZero = value => value === 0;
const isHalfy = value => value === 0.5;

export default (
  cards,
  showZeroCard,
  showHalfyCard,
  showInfinityCard,
  showTShirtSizingCards
) => {
  const unFilteredCardAmount = cards + !showZeroCard + !showHalfyCard;
  const maxCards = showTShirtSizingCards
    ? showInfinityCard
      ? cards + 6
      : cards + 5
    : cards;
  const newSetOfCards = fibonacci(unFilteredCardAmount)
    .filter(
      (result, index) =>
        fibonacci(unFilteredCardAmount).indexOf(result) === index
    )
    .filter(result => !(showZeroCard === false && isZero(result)));

  if (showHalfyCard) newSetOfCards.push(0.5); // Add halfy
  newSetOfCards.sort((a, b) => a - b); // Sort numeric

  if (showTShirtSizingCards) {
    newSetOfCards.push("XS");
    newSetOfCards.push("S");
    newSetOfCards.push("M");
    newSetOfCards.push("L");
    newSetOfCards.push("XL");
  }
  if (showInfinityCard) newSetOfCards.push("∞");

  return newSetOfCards.filter((result, index) => index < maxCards);
};
