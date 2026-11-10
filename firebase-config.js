// Configuração do Firebase.
// No console do Firebase: Configurações do projeto > Seus apps > App da Web > "Configuração do SDK".
// Copie o objeto firebaseConfig de lá e cole abaixo, substituindo os valores.
// Essas chaves podem ficar públicas: quem protege os dados são as regras do firestore.rules.

export const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// E-mails Google de quem organiza: podem editar data, valor, local, combinados,
// códigos de afiliado e remover pessoas da lista.
// Se mudar aqui, mude também a lista em firestore.rules (função isAdmin).
export const ORGANIZADORES = [
  "arleyneves.an@gmail.com"
];
