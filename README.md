# Playwright API Test Automation

Este repositório contém automação de testes de API utilizando **Playwright** e **GitHub Actions** para gerar e armazenar relatórios como artefatos.

## Requisitos

Certifique-se de ter o **Node.js** (versão 16 ou superior) instalado em sua máquina.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/eamaral/playwright-api-test-automation.git
   ```
   
2.	Entre no diretório do projeto:

    ```bash
   cd playwright-api-test-automation
   ```
3.	Instale as dependências necessárias:

    ```bash
   npm install
   ```
## Execução dos Testes

- Para executar os testes localmente, utilize o seguinte comando:

    ```bash
   npx playwright test
   ```
   
## Relatórios

Após a execução dos testes, um relatório HTML será gerado e armazenado no diretório playwright-report.

## Execução no GitHub Actions

O repositório está configurado com GitHub Actions para rodar os testes automaticamente em push ou pull request para a branch main.

### Como acessar o relatório no GitHub Actions:

1.	Vá para a aba Actions no repositório no GitHub.
2.	Selecione a execução do workflow mais recente.
3.	Baixe o relatório gerado na seção Artifacts com o nome playwright-report.

## Licença

Este projeto está licenciado sob a licença MIT.