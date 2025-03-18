# Automação de Testes - Dispositivos API

Este repositório contém automações de testes utilizando **Cypress** para testar a API de dispositivos. O objetivo é validar os cenários de busca e cadastro de dispositivos, utilizando métodos como GET e POST.

## Funcionalidades Testadas

1. **Buscar dispositivos específicos**: Verifica se a API retorna as informações de um dispositivo específico quando um ID válido é fornecido.
2. **Buscar dispositivo inexistente**: Testa o comportamento da API ao tentar buscar um dispositivo com um ID inexistente.
3. **Cadastro de dispositivos**: Verifica o cadastro de um novo dispositivo através de um pedido POST para a API, garantindo que as informações sejam salvas corretamente.

## Requisitos

- **Node.js**: 14.x ou superior
- **Cypress**: 10.x ou superior

## Instalação e Configuração

### 1. Clone o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/QA-Cypress-API-Automation.git
cd QA-Cypress-API-Automation


Estrutura de Testes

Os testes estão organizados em dois grupos principais:

    Buscar Dispositivos:
        Buscar dispositivo específicos: Verifica se a API retorna as informações de um dispositivo específico.
        Buscar dispositivo inexistente: Testa a resposta da API ao tentar buscar um dispositivo que não existe.

    Cadastrar Dispositivos:
        Cadastro de dispositivo: Verifica se um novo dispositivo pode ser cadastrado corretamente.

Exemplo de Teste de Buscar Dispositivo Específico

it("Buscar dispositivo específicos", () => {
    cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects/7',
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal('7');
    });
});

Exemplo de Teste de Buscar Dispositivo Inexistente

it("Buscar dispositivo inexistente", () => {
    cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects/NÃOEXISTE',
        failOnStatusCode: false 
    }).then((response) => {
        expect(response.status).to.equal(404);
        expect(response.body.error).to.equal('Object with id=NÃOEXISTE was not found.');
    });
});

Exemplo de Teste de Cadastro de Dispositivo

it("Cadastro de dispositivo", () => {
    cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: {
            name: "Apple MacBook Pro 16",
            data: {
                "year": 2025,
                "price": 18849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            },
        },
        failOnStatusCode: false 
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Apple MacBook Pro 16');
    });
});

Personalizando os Testes

Caso precise personalizar os testes para outro ambiente ou API, basta alterar as URLs e os dados de entrada nos arquivos de teste. As variáveis podem ser facilmente modificadas no código de cada teste.
Contribuindo

Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma melhoria em mente, sinta-se à vontade para abrir uma issue ou enviar um pull request.

    Faça um fork do repositório
    Crie uma branch para sua feature (git checkout -b feature/nova-feature)
    Faça commit das suas mudanças (git commit -am 'Adiciona nova feature')
    Envie para o repositório remoto (git push origin feature/nova-feature)
    Abra um pull request

Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.


Este `README.md` fornece uma explicação clara sobre como rodar os testes, a estrutura do projeto, exemplos de código e como personalizar e contribuir com o projeto.

