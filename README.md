# AUTOMAÇÃO DE TESTES EM CYPRESS COM IA
Este projeto tem como objetivo principal mostrar de que forma a utilização de Inteligências Artificiais Generativas (IAs) pode impulsionar a eficiência dos procedimentos inerentes aos testes de software e à garantia de qualidade. Por meio de uma abordagem prática e demonstrativa, destacamos como as atividades fundamentais, como a modelagem de casos de teste, a automação de testes e o desenvolvimento contínuo de scripts de automação, podem ser otimizados com o suporte das IAs. Ao longo do projeto, exploramos casos de uso específicos, ilustrando como essas tecnologias podem ser integradas de forma sinérgica ao ciclo de vida do desenvolvimento de software, resultando em processos mais eficientes, maior confiabilidade e uma redução significativa no tempo e esforço dedicados aos testes de software.

## ✨ IAs usadas no projeto

**Open AI Chat GPT**
<br>
O ChatGPT4, desenvolvido pela OpenAI, representa a vanguarda da inteligência artificial no campo dos modelos de linguagem. Ele é construído com base em técnicas de machine learning de ponta e foi treinado em vastos conjuntos de dados, permitindo-lhe compreender e gerar texto com uma precisão e nuance sem precedentes. Além de ser uma maravilha tecnológica por si só, o ChatGPT4 pode ser transformado em uma ferramenta inestimável para uma variedade de profissionais, em especial aqueles que trabalham na área de teste de software. 
<br>

**GitHub Copilot**
<br>
GitHub Copilot é um programador de pares de IA que ajuda você a escrever código com mais rapidez e menos trabalho. Ele extrai contexto de comentários e código para sugerir linhas individuais e funções inteiras instantaneamente. GitHub Copilot é alimentado por um modelo generativo de IA desenvolvido por GitHub, OpenAI e Microsoft. Ele está disponível como uma extensão para Visual Studio Code, Visual Studio, Neovim e o conjunto JetBrains de ambientes de desenvolvimento integrados (IDEs).

## 🎯Projeto Front-End (Website nopCommerce)

**Sobre:** É um simples sistema de e-commerce que deve ter sua tela de registro automatizada com validações de cenários de sucesso e validação de mensagens de erros.
**Acesso:** https://demo.nopcommerce.com/

## 🎯Projeto Back-End (APIs serverest)

**Sobre:** É um simples sistema de APIs que deve ter um cenário de automação para cada método HTTP, sendo eles POST, GET, PUT e DELETE.
**Acesso:** https://serverest.dev/

## 📚Embasamento técnico

Nesse projeto, foi usado como embasamento técnico os materiais do ISTQB, “Conselho Internacional de Qualificações em Testes de Software”, sendo usado especificamente materiais de fundamentos e de automação de testes.

## 🔍Abordagem de testes

O BDD, “Desenvolvimento Orientado a Comportamento” foi usado nesse projeto através da adoção de uma linguagem de fácil entendimento, no caso o Gherkin, dessa forma os cenários de testes foram todos escritos Gherkin para facilitar a compreensão dos testes.

## 🤖Estratégia da automação

A automação de testes foi desenvolvida conforme as boas práticas de clean code usando um alto nível de manutenibilidade, reuso e simplicidade de código. pensando nisso foi adotada 2 estratégias diferentes na automação de testes, sendo elas:

1.  **📌PageObjects ➞ Automação Front-End:** Foi empregado dessa forma para melhorar a abstração da interface do usuário, reusabilidade, manutenção simplificada e separação de responsabilidades.
    
2.  **📌Custom Commands ➞ Automação Back-End:** Foi empregado dessa forma para melhorar a abstração de ações repetitivas, facilidade de uso, padronização de funcionalidades, legibilidade e reutilização de lógica de teste.

## 📈Cobertura de testes

Os testes foram projetados pensando garantir que o software funciona como esperado em 2 tipos de dispositivos, cada um com sua resolução específica, sendo elas:

**💻Desktop:** Testes com resolução de 1920x1080.

**📱Mobile:** Testes com resolução de 375x667.

## 📊Resumo dos testes

A automação de testes está dividida em casos de sucesso e casos de falhas, cada teste é independente e pode ser executado de maneira isolada ou em conjunto, os dados apresentados abaixo são referentes a execução em conjunto.

**💡Front-End:** 14 cenários de sucesso e 24 cenários de falhas.

**🔌Back-End:** 19 cenários de sucesso e 24 cenários de falhas.

## ⚙️Tecnologias usadas

- **Node** - Ambiente de execução JavaScript

- **NPM** - Gerenciador de pacotes do Node

- **Cypress** - Framework de automação de testes

- **Gherkin** - Linguagem para descrição dos cenários

- **Faker.js** - Ferramenta de geração de dados falsos

- **Allure Report** - Ferramenta de relatórios e dashboard de testes

- **Java JDK 11** - Kit de Desenvolvimento Java 11

## 📋Pré-requisitos

- Node instalado na versão v20.12.0 ou superior
- NPM instalado na versão 10.5.0 ou superior
- Java JDK 11 (Apenas se quiser ter acesso aos dashboard de testes)

## 🚩Processos de instalação 
Faça o clone do projeto em sua máquina ou caso prefira, baixe os arquivos do projeto em sua máquina e extraia eles e depois, com o terminal aberto na pasta raiz do projeto, execute os comandos abaixo:

`npm install cypress`
`npm install --save-dev allure-commandline`
`npm install --save-dev @faker-js/faker`

## 🚀Passos para executar

Se você quiser executar o projeto com o ambiente visual, execute o comando abaixo e depois escolha a opção E2E Testing, clique em Chrome e em seguida clique em *frontend-testing.cy.js* para executar o projeto de front-end ou clique em *backend-testing.cy.js* para executar o projeto de back-end.

`npx cypress open`

Se você deseja executar o projeto sem o ambiente visual, execute o seguinte comando:

`npx cypress run`

Agora, caso queira acessar relatórios completos com gráficos e mais detalhes, você pode fazer isso através do Allure Report, para isso é necessário ter o Java JDK 11 ou superior e as variáveis ​​de ambiente JAVA_HOME já configuradas.

Execute os comandos:

`npx cypress run`

e depois

`npx allure serve`

Seu navegador padrão irá abrir já com os resultados dos testes e caso queira limpar o histórico do teste anterior você deve executar o seguinte comando:

`npm run clear`

Exemplos dos relatórios de testes:

![image](https://github.com/Emily-Lima/QualityMap-Challenge/assets/111673766/678cabb5-22e8-4a07-98c2-d722c8fa9232)

![image](https://github.com/Emily-Lima/QualityMap-Challenge/assets/111673766/ab711ffe-ab83-40f5-9336-ca1c4fdbdcd8)

![image](https://github.com/Emily-Lima/QualityMap-Challenge/assets/111673766/b4cb0886-e87c-464c-a312-1570648873b8)
