# Pokemon

Demonstração: [https://paulanader-pokemon.netlify.app/](https://paulanader-pokemon.netlify.app/)

## Tecnologias

- [ReactJS](https://reactjs.org) (Typescript)

## Instalação

Pré-requisitos:

-   [NodeJS](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/) (opcional)

Após clonar o projeto e instalar os pré-requisitos, execute a partir da pasta raiz:
```
npm install4
```
ou
```
yarn
```

Crie o arquivo `.env` a partir do `.env.example`:
```
cp .env.example .env
```

Após a instalação, para rodar o projeto, execute:
```
npm run start
```
ou
```
yarn start
```


### Problemas conhecidos
1- A página inicial fica carregando por muito tempo e não exibe a lista de Pokémons

Possíveis causas:
- O arquivo .env não foi criado corretamente a partir do .env.example
- A API está instável e não responde (verifique na aba "Network" do console do navegador se as requisições estão retornando ou se ficam pendentes indefinidamente)4
