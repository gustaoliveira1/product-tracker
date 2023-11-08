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
npm run dev
```
ou 
```bash
yarn dev
```

## Endpoints

### GET /produtos?name='product name'
É o único endpoint da api, ele retorna um array de produtos, contendo nome, preço e links para o produto.

**Examplo de requisição com sucesso**
```json
[

    {
        "name": "Arquitetura limpa: o guia do artesão para estrutura e design de software",
        "price": "R$ 77,13",
        "link": "https://www.amazon.com.br/Arquitetura-Limpa-Artes%C3%A3o-Estrutura-Software/dp/8550804606/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PWHUQSSKSZFQ&keywords=clean+architecture&qid=1699445781&sprefix=%2Caps%2C668&sr=8-1"
    },
    {
        "name": "Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert C. Martin Series) (English Edition)",
        "price": "R$ 105,59",
        "link": "https://www.amazon.com.br/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PWHUQSSKSZFQ&keywords=clean+architecture&qid=1699445781&sprefix=%2Caps%2C668&sr=8-2"
    },
    {
        "name": "Get Your Hands Dirty on Clean Architecture: A hands-on guide to creating clean web applications with code examples in Java (English Edition)",
        "price": "R$ 80,89",
        "link": "https://www.amazon.com.br/Hands-Dirty-Clean-Architecture-hands-ebook/dp/B07YFS3DNF/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PWHUQSSKSZFQ&keywords=clean+architecture&qid=1699445781&sprefix=%2Caps%2C668&sr=8-3"
    },
]
```

**Exemplo de requisição com erro**
```json
{
    "error": "Product name was not given"
}
```
