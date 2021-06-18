# App news

CRUD básico de notícias contendo `titúlo`, `body` e também dados do autor como `email` e `nome`.

## Tecnologias utilizadas

- Node v16.3
- GraphQL
- Javascript
- Knex (Query builder)
- Postgres

## Começando o projeto

1. git clone  <a>https://github.com/Wesley-Arizio/app-news.git` </a>
2. cd backend
3. `yarn install` ou `npm install`
4. Criar um arquivo `.env` e setar as mesmas variáveis que estão no `.env.sample`
5. Configurando banco de dados postgres, para isso é necessário docker.

        docker --run --name image-name -e POSTGRES_USER=db_user -e POSTGRES_PASSWORD=db_password -e POSTGRES_DB=db_name -p 5432:5432 -d postgres
 Nota: Os dados passado nessa flag precisam ser os mesmos setados no arquivo .env

6. `yarn dev` ou `npm run dev`