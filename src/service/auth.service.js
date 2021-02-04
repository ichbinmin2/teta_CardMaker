import firebase from "firebase";
import firebaseApp from "./firebase";

// 인증만을 관리하는 class 생성
class AuthService {
  login(providerName) {
    // 어떤 provider를 쓸 것인지 전달만 해주면 그에 따른
    // AuthProvier()를 실행할 수 있게끔 만들 것임
    // var provider = new firebase.auth.{providerName}AuthProvider();
    // 이 식이 중복되기 때문에 {providerName}만 바꿔서 받아올 수 있도록 식을 작성!!!
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
