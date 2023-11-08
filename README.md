# Product tracker
É uma API que procura por um produto específico na Amazon, porém, pode ser facilmente mudado para procurar em outros e-commerces.

- Fiz esse projeto com o intuito de aprender como usar a biblioteca do Node.js para web scrapping chamada [puppeteer](https://pptr.dev/).
- Meu desafio nesse projeto foi conseguir pegar tags que estavam ocultas.

## Tabela de conteúdos
- [Instalação](#instruções-de-instalação)
- [Endpoints](#endpoints)

## Instruções de instalação
1. Clone esse repositório para sua máquina e abra um terminal na posta do projeto.
```bash
git clone https://github.com/gustaoliveira1/product-tracker.git
cd product-tracker
```
2. Instale as dependências.
```bash
npm install
```
ou
```bash
yarn
```
3. Inicie o servidor HTTP.
```bash
npm run start
```
ou 
```bash
yarn start
```

## Endpoints

### GET /produtos?name='product name'
É o único endpoint da api, ele retorna um array de produtos, contendo nome, preço e links para o produto.

