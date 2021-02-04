import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_CARD_MAKER_API_KEY,
  authDomain: "teta-business-card-maker.firebaseapp.com",
  projectId: "teta-business-card-maker",
  storageBucket: "teta-business-card-maker.appspot.com",
  messagingSenderId: "574430185315",
  appId: "1:574430185315:web:2075a210cb016c1aa0b556",
  measurementId: "G-7BKXP6X4QH",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 구글 로그인
const googleProvider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
googleProvider.setCustomParameters({ prompt: "select_account" });
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

// 깃허브 로그인
const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.setCustomParameters({ prompt: "select_account" });
export const signInGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.
