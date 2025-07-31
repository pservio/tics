import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { perguntasLocais } from './perguntas-locais.js';

const firebaseConfig = {
  apiKey: "AIzaSyCVQ83EIzNpL5ppuxTH1TSUOd0T2G-9KcQ",
  authDomain: "desafioenade2.firebaseapp.com",
  projectId: "desafioenade2",
  storageBucket: "desafioenade2.appspot.com",
  messagingSenderId: "987973574127",
  appId: "1:987973574127:web:4041110632500dbd482a1a",
  measurementId: "G-FD8E45DWKR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function migrarPerguntas() {
  let count = 0;
  for (const pergunta of perguntasLocais) {
    // Remove o campo 'id' se existir, pois o Firestore gera um id único
    const { id, ...perguntaSemId } = pergunta;
    await addDoc(collection(db, "perguntas"), perguntaSemId);
    count++;
    console.log(`Pergunta migrada: ${pergunta.enunciado}`);
  }
  console.log(`Migração concluída! Total de perguntas migradas: ${count}`);
}

migrarPerguntas();