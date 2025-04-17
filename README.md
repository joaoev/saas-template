
# ☁️ Template SaaS - Dasafio na prática

![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js_15-000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwindcss](https://img.shields.io/badge/tailwind_css-030712?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8e)
![Firebase](https://img.shields.io/badge/firebase-ff9100?style=for-the-badge&logo=firebase&logoColor=dd2c00)
![Stripe](https://img.shields.io/badge/stripe-5167FC?style=for-the-badge&logo=stripe&logoColor=ffffff)
![Auth.js](https://img.shields.io/badge/auth.js-5167FC?style=for-the-badge&logo=nextauth&logoColor=ffffff)

## Descrição do Projeto

O **Desafio Micro SaaS na prática** é um evento online e intensivo de 3 aulas, focado em ensinar desenvolvedores e empreendedores a criar negócios digitais escaláveis usando o modelo de **Micro SaaS**.

O objetivo é instruir como construir um SaaS simples e rentável, explorando conceitos como **autenticação de usuários**, **integração com gateways de pagamento** e **gerenciamento de dados**, além de aplicar esses conhecimentos na prática com um template adaptável para diferentes modelos de negócios.

Ao final do desafio, você terá um conhecimento sólido sobre como criar e escalar um negócio digital no modelo Micro SaaS e um **certificado de participação** para adicionar ao seu portfólio.

## Tecnologias Utilizadas

- TypeScript
- Next.js
- Tailwind CSS
- Firebase Firestore
- Stripe

## Funcionalidades

Algumas funcionalidades prontas:

- [x] Login social com o Google usando NextAuth e Firebase
- [x] Integração com gateways de pagamento como Stripe e Mercado Pago
- [x] Tratamento de Webhooks para monitorar pagamentos e assinaturas
- [x]  Armazenamento de dados com Firestore, para organizar informações de usuários e planos
  
## Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do Node.js
- Você instalou a versão mais recente do npm
- Uma conta na Stripe
- Uma conta no Firebase

## Instalando o projeto

Para instalar siga estas etapas:

Clone o repositório:
  
``` bash
git clone https://github.com/joaoev/saas-template.git
```

Instalando

1. Navegue até a pasta backend e instale as dependências:

    ```bash
    cd saas-template
    npm install
    ```

2. Crie um arquivo `.env` para configurar as variáveis de ambiente:

    ```bash
    AUTH_SECRET=

    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=

    FIREBASE_PROJECT_ID=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_PRIVATE_KEY_BASE64=

    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_STRIPE_PUB_KEY=
    STRIPE_PRODUCT_PRICE_ID=
    STRIPE_SUBSCRIPTION_PRICE_ID=
    ```

    Esses valores são exemplos de como você pode configurar suas variáveis de ambiente para a aplicação:

> [!WARNING]
> Projeto ainda não finalizado, em breve termino a integração com o Mercado Pago e finalizo a documentação