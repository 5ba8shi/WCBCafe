function getHandValue(hand) {
  cards = [];

  for(i = 0; i < hand.length; i++) {
    cards[i] = faceValue.get(hand[i].substr(0, hand[i].length - 1));
  };

  aceCount = 0;
  total = 0;

  for(i = 0; i < cards.length; i++) {
    if(cards[i] == 1) {
      aceCount++;
    } else {
      total += cards[i];
    };
  };
}