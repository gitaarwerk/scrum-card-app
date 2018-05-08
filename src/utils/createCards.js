import fibonacci from './fibonacci';

const isZero = value => value === 0;
const isHalfy = value => value === 0.5;

export default (cards, noZero, noHalfy) => {
  const newSetOfCards = fibonacci(cards).filter(
    (result, index) => fibonacci(cards).indexOf(result) === index
  );

  newSetOfCards.push(0.5); // Add halfy
  newSetOfCards.sort((a, b) => a - b); // Sort numeric

  newSetOfCards
    .filter(result => noZero && isZero(result))
    .filter(result => noHalfy && isHalfy(result));

  return newSetOfCards;
};
