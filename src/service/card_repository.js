import firebase from "./firebase";

class CardRepository {
  saveCard(userId, card) {
    firebase.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebase.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
