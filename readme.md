# CoinPulse

Dashboard moderno para acompanhamento de moedas em tempo real, desenvolvido com **HTML5, CSS3 e JavaScript Vanilla**, consumindo dados da API AwesomeAPI.

O projeto permite visualizar cotações atualizadas, pesquisar moedas, converter valores para Real (BRL), alternar entre tema claro e escuro e acompanhar tendências através de mini gráficos.

---

## Preview

Adicione aqui uma captura de tela do projeto:

```text
/images/preview.png
```

---

## Funcionalidades

### Cotação em tempo real

Exibe informações atualizadas das principais moedas:

* Dólar Americano (USD)
* Euro (EUR)
* Bitcoin (BTC)
* Libra Esterlina (GBP)
* Peso Argentino (ARS)
* Dólar Canadense (CAD)
* Dólar Australiano (AUD)
* Iene Japonês (JPY)
* Franco Suíço (CHF)
* Yuan Chinês (CNY)

---

### Busca dinâmica

Filtra moedas instantaneamente enquanto o usuário digita.

---

### Conversor de moedas

Permite converter qualquer valor da moeda selecionada para Real (BRL) utilizando a cotação atual da API.

---

### Tema Claro e Escuro

Alternância de tema com persistência utilizando Local Storage.

---

### Sistema de Toast

Feedback visual elegante para:

* Conversões realizadas
* Mudança de tema
* Erros de carregamento
* Atualizações

---

### Mini gráficos de tendência

Representação visual da tendência de valorização ou desvalorização da moeda.

---

### Atualização automática

As cotações são atualizadas automaticamente a cada 30 segundos.

---

## 🛠 Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript (ES6+)

### API

* AwesomeAPI

API utilizada:

https://docs.awesomeapi.com.br/api-de-moedas

---

## Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos importantes para aplicações front-end modernas:

* Fetch API
* Async / Await
* Tratamento de erros
* Manipulação de DOM
* Local Storage
* Template Literals
* Event Listeners
* Responsividade
* Mobile First
* CSS Variables
* Modularização JavaScript
* Arquitetura por responsabilidade única

---

## Arquitetura do Projeto

```text
src/
├── css/
│
├── reset.css
├── variables.css
├── global.css
├── components.css
├── themes.css
└── responsive.css

├── js/
│
├── api.js
├── charts.js
├── converter.js
├── render.js
├── search.js
├── theme.js
├── toast.js
└── script.js
```

### Responsabilidade dos módulos

| Arquivo      | Responsabilidade           |
| ------------ | -------------------------- |
| api.js       | Comunicação com API        |
| render.js    | Renderização dos cards     |
| charts.js    | Geração dos mini gráficos  |
| search.js    | Busca de moedas            |
| converter.js | Conversão monetária        |
| theme.js     | Tema claro e escuro        |
| toast.js     | Sistema de notificações    |
| script.js    | Inicialização da aplicação |

---

## Responsividade

O projeto foi desenvolvido seguindo a abordagem:

```text
Mobile First
```

Adaptando-se para:

* Smartphones
* Tablets
* Notebooks
* Monitores Desktop

---

## ▶ Como Executar

Clone o repositório:

```bash
git clone https://github.com/Fadecio/coinpulse.git
```

Entre na pasta:

```bash
cd coinpulse
```

Abra o arquivo:

```text
index.html
```

Ou utilize uma extensão como:

```text
Live Server
```

---

## Testes Manuais

### API

* [ ] Carregar moedas
* [ ] Atualizar manualmente
* [ ] Atualização automática

### Busca

* [ ] Pesquisar USD
* [ ] Pesquisar Euro
* [ ] Limpar busca

### Conversor

* [ ] Converter valor válido
* [ ] Validar campo vazio
* [ ] Validar valor negativo

### Tema

* [ ] Alternar tema
* [ ] Persistir após atualizar página

### Toast

* [ ] Toast de sucesso
* [ ] Toast de erro
* [ ] Toast informativo

### Responsividade

* [ ] Mobile
* [ ] Tablet
* [ ] Desktop

---

## Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Prática de JavaScript moderno
* Consumo de APIs REST
* Arquitetura Front-end
* Organização de código
* Construção de portfólio profissional

---

## Autor

**Fadécio Lemos**

GitHub:
https://github.com/Fadecio

LinkedIn:
https://www.linkedin.com/in/fadécio-lemos/

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.
