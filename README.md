# Atividade Mongoose + Express

Servidor Node.js com Express e Mongoose implementando o CRUD de contatos.

## Como rodar

1. `npm install`
2. Preencher a `MONGO_URL` no arquivo `.env` (modelo em `.env.example`)
3. `npm run dev`

## Rotas

| Método | Rota               | Descrição                |
| ------ | ------------------ | ------------------------ |
| POST   | /api/contact       | Cria um contato          |
| GET    | /api/contact       | Lista todos os contatos  |
| GET    | /api/contact/:id   | Busca um contato pelo id |
| PUT    | /api/contact/:id   | Atualiza um contato      |
| DELETE | /api/contact/:id   | Remove um contato        |

Exemplo de body:

```json
{
  "firstName": "Caio",
  "lastName": "Sousa",
  "numberPhone": 88999999999,
  "email": "caio@email.com"
}
```
