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

// 1: {
//     id: "1",
//     name: "Teta Min",
//     company: "Kakao Company",
//     theme: "light",
//     title: "Software Engineer",
//     email: "teta1dev@gmail.com",
//     message: "Go for it",
//     fileName: "teta",
//     fileURL: null,
//   },
//   2: {
//     id: "2",
//     name: "Teta Min",
//     company: "Kakao Company",
//     theme: "dark",
//     title: "Software Engineer",
//     email: "teta1dev@gmail.com",
//     message: "Go for it",
//     fileName: "teta",
//     fileURL: "teta.png",
//   },
//   3: {
//     id: "3",
//     name: "Teta Min",
//     company: "Kakao Company",
//     theme: "colorful",
//     title: "Software Engineer",
//     email: "teta1dev@gmail.com",
//     message: "Go for it",
//     fileName: "teta",
//     fileURL: null,
//   },
