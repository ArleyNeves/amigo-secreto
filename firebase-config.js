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

// Códigos de afiliado padrão de cada loja (só os parâmetros, sem o endereço do produto).
// Todo link de produto colado no site recebe esses parâmetros no lugar dos que vieram junto.
// O que for salvo em "Editar detalhes" no site tem prioridade sobre estes.
export const AFILIADOS = {
  amazon: "tag=promosdatk03-20",
  mercadolivre: "matt_word=tk20260419103856&matt_tool=36990436",
  shopee: "mmp_pid=an_18395711048&utm_source=an_18395711048&utm_medium=affiliates&utm_campaign=id_84KnqIoS2qn",
  shein: "url_from=affiliate_koc_1236316901&campaign_id=20"
};

// Nome de quem recebe a comissão dos links de afiliado (aparece nos avisos do site).
export const NOME_AFILIADO = "Taissa";
