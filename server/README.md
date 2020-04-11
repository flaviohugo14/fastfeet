<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="../.github/logo.png" width="300px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/flaviohugo14/fastfeet?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/flaviohugo14/fastfeet/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/flaviohugo14/fastfeet?style=social">
  </a>
</p>

<p align="center">
  <a href="#como-instalar">Como instalar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentação-das-rotas">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

Backend do app FastFeet, desenvolvido com [Express](https://github.com/expressjs/express), nos padrões REST API.
---
### Ferramentas utilizadas na aplicação:

- [Sequelize](https://github.com/sequelize/sequelize) - ORM para conversação com o banco de dados
- [Yup](https://github.com/jquense/yup) - _Schema validator_(Validação de dadsos de entrada)
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON WEB TOKEN - Lib para autenticação via token.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Usado na criptografia de senhas.
- [DotEnv](https://github.com/motdotla/dotenv) - Para lidar com variáveis ambiente.
- [Nodemailer](https://github.com/nodemailer/nodemailer) - Lib para envio de emails com Node.js.
- [Handlebars](https://handlebarsjs.com/) - Template Engine para criar template dos emails.
- [Bee-Queue](https://github.com/bee-queue/bee-queue) - Para lidar com filas em background.(Ex: envio de emails)
- [Date-fns](https://github.com/date-fns/date-fns) - Manipulação de datas no JavaScript.
- [Sentry](https://sentry.io/) - Para tratamento de exceções e controle de erros em produção.
- [Youch](https://github.com/poppinss/youch) - Tratamento de exceções no desenvolvimento.

### Bancos de dados da aplicacão
- [Postegres](https://github.com/postgres/postgres)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [Sucrase](https://sucrase.io/) - Para utilizar o ES6 (ECMAScript 6)
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros em tempo de desenvolvimento.
- [Prettier](https://github.com/prettier/prettier) - Padroniza e melhora a visualização do código.

### Ferramentas extras que ajudaram no desenvolvimento:
- [Docker](https://www.docker.com/) - Usado para conteineização dos bancos de dados.
- [Insomnia](https://insomnia.rest/) - Utilizado para debugar e testar as rotas da API.
- [MailTrap](https://mailtrap.io/) - Serviço de envios de email fake para testes e desenvolvimento.
- [Postbird](https://www.electronjs.org/apps/postbird) - Utilizado para vizualizar e manipular bancos de dados Postgres.
- [DevDocs](https://devdocs.egoist.moe/) - App Desktop para consultar documentação.
---

## Como instalar?

1. Instale o [Docker](https://www.docker.com/).
2. Inicie as imagens dos bancos de dados:
```
$ docker run --name "nome" -p 6379:6379 -d -t redis:alpine
```
```
$ docker run --name "nome" -p 27017:27017 -d -t mongo
```
```
$ docker run --name "nome" -p 5432:5432 -d -t postgres
```
3. Clone o repositório e entre na pasta ```server```:
```
$ git clone https://github.com/flaviohugo14/fastfeet.git
```
```
$ cd fastfeet/server
```
4. Instale as dependências com:
```
$ yarn install
```
5. Configure as váriaveis ambiente criando um arquivo ```.env```, seguindo o modelo do arquivo ```.env.example```
6. Inicie o processo principal da aplicação:
```
$ yarn dev
```
7. Inicie o processo que gerencia as filas em _background_:
```
$ yarn queue
```
---

## Documentação das rotas
`POST /sessions` - Recebe email e senha pelo corpo da requisão e autentica o usuário via JWT.

`GET /deliveryman/deliveries` - Recebe o `id` do entregador pelo corpo da requisão e retorna todas as encomendas que ainda não foram entregues ou canceladas.

`GET /deliveryman/:id/deliveries` - Recebe o `id` do entregador pelos parâmentros da requisão e retorna todas as encomendas entregues por ele.

`PUT /deliveryman/:deliveryman_id/deliveries/:delivery_id` - Recebe os `id` do entregador e da encomenda, e permite que o entregador altere as datas de retirada e entrega desta encomenda.

`POST /files/signature` - Permite que o entregador faça _upload_ de uma foto da assinatura do destinatário.

`POST /deliveries/:id/problems` - Recebe o `id` da encomenda e permite que o entregador envie a descrição de um problema na entrega pelo corpo da requisição.

**OBS:** o uso das rotas abaixo requer autenticação. (_Bearer token_)

`GET /recipients` - Retorna todos os destinatários.

```GET /recipients/:id``` - Retorna o destinatário cujo ```id``` é igual ao passado pelos parâmetros da requisão.

```POST /recipients``` - Recebe todos os dados do destinatário pelo corpo da requisição e salva no banco de dados.

```PUT /recipients/:id``` - Permite atualizar os dados do destinatário de acordo com ```id``` passado na requisição.

```DELETE /recipients/:id``` - Deleta o destinatário cujo ```id``` é igual ao passado nos parâmetros da requisição.

```GET /deliverymen``` - Retorna todos os entregadores.

```GET /deliverymen/:id``` - Retorna o entregador cujo ```id``` é igual ao passado pelos parâmetros da requisão.

```POST /deliverymen``` - Recebe todos os dados do entregador pelo corpo da requisição e salva no banco de dados.

```PUT /deliverymen/:id``` - Permite atualizar os dados do entregador de acordo com ```id``` passado na requisição.

```DELETE /deliverymen/:id``` - Deleta o entregador cujo ```id``` é igual ao passado nos parâmetros da requisição.

```GET /deliveries``` - Retorna todas as entregas.

```GET /deliveries/:id``` - Retorna a entrega cujo ```id``` é igual ao passado pelos parâmetros da requisão.

```POST /deliveries``` - Recebe todos os dados do entrega pelo corpo da requisição e salva no banco de dados.

```PUT /deliveries/:id``` - Permite atualizar os dados do entrega de acordo com ```id``` passado na requisição.

```DELETE /deliveries/:id``` - Deleta a entrega cujo ```id``` é igual ao passado nos parâmetros da requisição.

```GET /deliveries/:id/problems``` - Retorna os problemas de uma determinada entrega.

```GET /problems``` - Retorna todos os problemas, de todas as entregas.

```DELETE /problem/:id/cancel-delivery``` - Permite que um admnistrador cancele uma entrega através de um problema registrado pelo entregador.

By [Flávio Pangrácio](https://www.linkedin.com/in/flaviopangracio/)

---
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/flaviohugo14/fastfeet/blob/master/LICENSE) para mais detalhes.

---
