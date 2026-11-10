# Amigo Secreto

Site de lista de presentes para amigo secreto. Cada participante monta a sua lista com o que gostaria de ganhar e o link do produto (Mercado Livre, Amazon, Shopee ou Shein). Quem tirar a pessoa consulta a lista pelo mesmo link.

## Funcionalidades

- Lista pessoal editável (até 30 presentes, com link, loja e detalhes como tamanho e cor)
- Grade com as listas de todos os participantes
- Detalhes do evento: data da revelação, valor sugerido, local e combinados
- Códigos de afiliado por loja: os links de produto recebem automaticamente o código do organizador (links curtos de compartilhamento abrem sem código)

## Observação técnica

O `index.html` foi criado como um Artifact do Claude e usa o runtime `window.claude` (login do usuário e banco de dados compartilhado). Aberto fora do claude.ai, por exemplo no GitHub Pages, a página carrega mas mostra "Não foi possível abrir as listas", porque não há backend. Para rodar de forma independente, é preciso trocar essas chamadas por um backend próprio (ex.: Firebase Auth + Firestore, cuja API de `doc/collection/onSnapshot` é praticamente a mesma).
