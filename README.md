# Amigo Secreto

Site de lista de presentes para amigo secreto. Cada participante entra com a conta Google e monta a sua lista com o que gostaria de ganhar e o link do produto (Mercado Livre, Amazon, Shopee ou Shein). Quem tirar a pessoa consulta a lista pelo mesmo link.

## Funcionalidades

- Login com Google: cada pessoa só edita a própria lista
- Lista pessoal com até 30 presentes, com link, loja e detalhes como tamanho e cor
- Grade com as listas de todos os participantes, atualizada em tempo real
- Detalhes do evento: data da revelação, valor sugerido, local e combinados (só o organizador edita)
- Códigos de afiliado por loja: os links de produto recebem automaticamente o código do organizador (links curtos de compartilhamento abrem sem código)

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro (HTML, CSS e JavaScript) |
| `firebase-config.js` | Chaves do seu projeto Firebase e e-mails dos organizadores |
| `firestore.rules` | Regras de segurança do banco de dados |

## Como colocar no ar

### 1. Criar o projeto no Firebase (gratuito)

1. Acesse https://console.firebase.google.com e clique em **Criar projeto**. O Google Analytics pode ficar desativado.
2. Na página do projeto, clique no ícone **`</>`** (Web) para adicionar um app. Dê um nome, sem marcar Firebase Hosting.
3. Copie o objeto `firebaseConfig` que aparece e cole no `firebase-config.js`, no lugar dos valores de exemplo.

### 2. Ativar o login com Google

1. Menu **Criação > Authentication > Vamos começar**.
2. Aba **Método de login > Google > Ativar**. Escolha o e-mail de suporte e salve.
3. Aba **Configurações > Domínios autorizados > Adicionar domínio**: `arleyneves.github.io`

### 3. Criar o banco de dados

1. Menu **Criação > Firestore Database > Criar banco de dados**.
2. Local: `southamerica-east1 (São Paulo)`. Modo: **produção**.
3. Aba **Regras**: apague o conteúdo, cole o do arquivo `firestore.rules` e clique em **Publicar**.

### 4. Definir quem organiza

O e-mail do organizador aparece em dois lugares, que precisam ser iguais:

- `ORGANIZADORES` em `firebase-config.js` (mostra os botões de organizador)
- função `isAdmin()` em `firestore.rules` (é o que de fato permite editar)

Depois de mudar o `firestore.rules`, publique as regras de novo no console.

### 5. Publicar no GitHub Pages

1. Faça commit e push dos arquivos.
2. No GitHub: **Settings > Pages > Build and deployment > Source: Deploy from a branch**, branch `main`, pasta `/ (root)`, **Save**.
3. Em um ou dois minutos o site fica em https://arleyneves.github.io/amigo-secreto/

GitHub Pages em repositório privado só funciona em planos pagos. No plano gratuito, deixe o repositório público (as chaves do `firebase-config.js` podem ser públicas; quem protege os dados são as regras).

## Testar no computador

Abrir o `index.html` com dois cliques não funciona, porque o navegador bloqueia módulos JavaScript em `file://`. Rode um servidor local na pasta:

```
python -m http.server 8000
```

E abra http://localhost:8000. O `localhost` já vem autorizado no Firebase.

## Limites e privacidade

- O plano gratuito do Firestore permite 50 mil leituras e 20 mil gravações por dia, muito mais do que um grupo de amigo secreto usa.
- Qualquer pessoa com o link vê as listas e os nomes. Para editar, é preciso entrar com Google.
- O e-mail de quem entra não é salvo no banco; só o nome digitado e a lista.
