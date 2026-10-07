# Atividade Mongoose + Express

Servidor Node.js com Express e Mongoose implementando o CRUD de contatos.

## Como rodar

1. `npm install`
2. Preencher a `MONGO_URL` no arquivo `.env` (modelo em `.env.example`, sem aspas)
3. `npm run dev`

## Como rodar com Docker

```bash
docker build -t atividade-web2 .
docker run --env-file .env -e PORT=8080 -p 8080:8080 atividade-web2
```

## Deploy

A aplicação é publicada no Render como Web Service usando o `Dockerfile` do repositório.
A variável `MONGO_URL` é configurada no painel do Render, e a porta é definida pela própria plataforma através da variável `PORT`.

## Rotas

| Método | Rota               | Descrição                |
| ------ | ------------------ | ------------------------ |
| GET    | /                  | Status da aplicação      |
| POST   | /api/contact       | Cria um contato          |
| GET    | /api/contact       | Lista todos os contatos  |
| GET    | /api/contact/:id   | Busca um contato pelo id |
| PUT    | /api/contact/:id   | Substitui um contato (todos os campos obrigatórios) |
| PATCH  | /api/contact/:id   | Atualiza parcialmente um contato |
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
