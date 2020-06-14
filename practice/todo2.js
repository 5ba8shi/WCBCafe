let faceValue = new Map();
  faceValue.set("a", 1);

  let getHandValue = (hand) => {
    let cards = [];

    for(i = 0; i < hand.length; i++) {
      cards[i] = faceValue.get(hand[i].slice(0, hand[i].length - 1));
    }
  }