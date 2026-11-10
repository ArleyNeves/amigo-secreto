// Configuração do Firebase.
// No console do Firebase: Configurações do projeto > Seus apps > App da Web > "Configuração do SDK".
// Copie o objeto firebaseConfig de lá e cole abaixo, substituindo os valores.
// Essas chaves podem ficar públicas: quem protege os dados são as regras do firestore.rules.

export const firebaseConfig = {
  apiKey: "AIzaSyDype6PZFD6ZX9rRQOLXjEBK5kxSmuoB9Q",
  authDomain: "amigo-secreto-c92ea.firebaseapp.com",
  projectId: "amigo-secreto-c92ea",
  storageBucket: "amigo-secreto-c92ea.firebasestorage.app",
  messagingSenderId: "693115078543",
  appId: "1:693115078543:web:c35791cf01306d326aadfa",
  measurementId: "G-C6BVFTRR8N"
};

// E-mails Google de quem organiza: podem editar data, valor, local, combinados,
// códigos de afiliado e remover pessoas da lista.
// Se mudar aqui, mude também a lista em firestore.rules (função isAdmin).
export const ORGANIZADORES = [
  "arleyneves.an@gmail.com"
];
