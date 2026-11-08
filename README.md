# Cypress API Testing — restful-api.dev

Projeto de automação de testes de API com Cypress, cobrindo consulta e criação de dispositivos na API pública [restful-api.dev](https://restful-api.dev/).

## Cenários
- GET de dispositivo existente: valida status HTTP e identificador.
- GET de identificador inexistente: valida resposta de não encontrado.
- POST de dispositivo: valida status e dados enviados.

## Tecnologias
Node.js 20 (recomendado), Cypress 14 e Mochawesome.

## Instalação e execução
```bash
npm install
npm test
npm run cy:open
```

## Relatórios
A execução headless usa Mochawesome e salva os resultados em `cypress/results`.

## Observações
Os testes dependem da disponibilidade da API pública e de seus dados de exemplo. O cenário POST cria um registro de teste no serviço externo. Não são necessárias credenciais.
