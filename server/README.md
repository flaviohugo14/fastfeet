<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="../.github/logo.png" width="300px" />
</h1>

# FastFeet
Backend do app FastFeet, desenvolvido com Node.js, nos padrões REST API.

---
### Ferramentas utilizadas na aplicação:

- [Node.js](https://github.com/nodejs)
- [Express](https://github.com/expressjs/express)
- [Sequelize](https://github.com/sequelize/sequelize) - ORM para conversação com o banco de dados 
- [Yup](https://github.com/jquense/yup) - Schema validator(Validação de dadsos de entrada)
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON WEB TOKEN - Lib para autenticação via token.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Usado na criptografia de senhas.
- [DotEnv](https://github.com/motdotla/dotenv) - Para lidar com variáveis ambiente.
- [Nodemailer](https://github.com/nodemailer/nodemailer) - Lib para envio de emails com Node.js.
- [Handlebars](https://handlebarsjs.com/) - Template Engine para criar template dos emails.
- [Bee-Queue](https://github.com/bee-queue/bee-queue) - Lib para lidar com filas em background.(Ex: envio de emails)
- [Date-fns](https://github.com/date-fns/date-fns) - Lib completa para manipulação de datas no JavaScript.

- [Sentry](https://sentry.io/) - Para tratamento de exceções e controle de erros em produção.
- [Youch](https://github.com/poppinss/youch) - Tratamento de execeções em desenvolvimento.

### Bancos de dados da aplicacão
- [Postegres](https://github.com/postgres/postgres)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [Sucrase](https://sucrase.io/) - Para utilizar várias funções do ES6 (ECMAScript 6)
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros envolvendo padronização de códigos
- [Prettier](https://github.com/prettier/prettier) - Deixa o código muito mais bonito

---

## Como instalar?
```
$ git clone https://github.com/flaviohugo14/fastfeet.git
```
```
$ cd fastfeet/server
```
```
$ yarn install
```
## Inicie com:
```
$ yarn dev
```

configure as variáveis ambiente, seguindo o modelo do arquivo ```.env.example```.

---

By [Flávio Pangrácio](https://www.linkedin.com/in/flaviopangracio/)

---
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/flaviohugo14/fastfeet/blob/master/LICENSE) para mais detalhes.

---