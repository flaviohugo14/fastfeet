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
  <a href="#memo-licença">Licença</a>
</p>

---

<p align="center">
  <img src=".github/reactnative.svg" alt="React Native" />&nbsp;&nbsp;&nbsp;&nbsp;<img src=".github/hooks.svg" alt="React Hooks"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src=".github/flux.svg" alt="Arquitetura Flux"/>
</a>

---

<p align="center">
  <img alt="Login iPhone" src=".github/loginIOS.png" height="400px">
  <img alt="Dashboard" src=".github/dashboard.png" height="400px"/>
  <img alt="Profile" src=".github/profile.png" height="400px">
</p>

<br />

<p align="center">
  <img alt="Details" src=".github/details.png" height="400px">
  <img alt="Info Problem" src=".github/infoproblem.png" height="400px"/>
  <img alt="Receive Problem" src=".github/receiveproblem.png" height="400px">
</p>

<br />

<p align="center">
  <img alt="Camera" src=".github/camera.jpeg" height="300px">
</p>

---
### Ferramentas utilizadas na aplicação:

- [React Redux](https://github.com/reduxjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [Axios](https://github.com/axios/axios)
- [Unform](https://github.com/rocketseat/unform)
- [Date-fns](https://date-fns.org/)
- [Immer](https://github.com/immerjs/immer)
- [Styled-components](https://github.com/styled-components/styled-components)

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros em tempo de desenvolvimento.
- [Prettier](https://github.com/prettier/prettier) - Padroniza e melhora a visualização do código.

### Ferramentas extras que ajudaram no desenvolvimento:
- [Reactotron](https://github.com/infinitered/reactotron) - App para debugar e controlar estado da aplicação.
- [DevDocs](https://devdocs.egoist.moe/) - App Desktop para consultar documentação.
---

## Como instalar?

Antes de tudo, instale o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/).

1. Clone o repositório e entre na pasta ```mobile```:
```
$ git clone https://github.com/flaviohugo14/fastfeet.git
```
```
$ cd fastfeet/mobile
```

2. Instale todas as dependências:
```
$ yarn install

# Se está tentando rodar no iOS, também faça:
$ cd ios && pod install && cd ..
```
3. Abra seu emulador Android ou iOS e instale o app:
```
# Android
$ react-native run-android

# iOS
$ react-native run-ios
```
4. Se o _Metro Bundler_ não se iniciar, rode `$ yarn start`

5. Configure o arquivo `./src/services/api.js` com o endereço de sua API.

 #### OBS: Este aplicativo foi feito utilizando o emulador do iPhone 11 Pro Max e seu design está melhor adaptado com telas de mesma proporção (**19,5:9**) e tamanho.

 #### OBS: A funcionalidade de câmera não pode ser testada.


---
By [Flávio Pangrácio](https://www.linkedin.com/in/flaviopangracio/)

---
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/flaviohugo14/fastfeet/blob/master/LICENSE) para mais detalhes.

---
