import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ede55b815743e25b8d9fe0aff3bacafba6f8f737",
  authDomain: "firebase-adminsdk-fbsvc@trampofacil-55706.iam.gserviceaccount.com",
  projectId: "trampofacil-55706",
  storageBucket: "SEU_STORAGE",
  messagingSenderId: "SEU_MENSAGEM_ID",
  appId: "SEU_APP_ID"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
