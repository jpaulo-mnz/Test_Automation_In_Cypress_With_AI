#encoding: utf-8
#language: pt

Funcionalidade:  Funcionalidade de registro

Background:
	
Dado que o usuário está na tela de registro
Quando executar todas as ações no desktop com a resolução 1920, 1080
Então o usuário também pode executar as ações no mobile com resolução 375, 667
	
#Contexto: Registrar usuário - Cenários de sucesso

Cenario:  Registro com gênero masculino

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e selecione o gênero "masculino"
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada com o gênero "masculino"

Cenario: Registro com gênero feminino 

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e selecione o gênero "feminino"
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada com o gênero "feminino"

Cenario: Registro sem gênero 

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e sem selecionar nenhum gênero
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada

Cenario: Registro com campo “options” checado 

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e seleciono a opção "checado" para o campo "options"
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada com o campo "options" checado

Cenario: Registro com campo “options” desmarcado 

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e seleciono a opção "desmarcado" para o campo "options"
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada com o campo "options" desmarcado

Cenario: Registro com campo “Company details” preenchido 

  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e preencho os detalhes da empresa
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada com os detalhes da empresa preenchidos

Cenario: Registro com campo “Company details” sem preenchimento


  Dado que estou na página de registro
  Quando preencho o formulário com um nome, email, senha e deixo os detalhes da empresa em branco
  E clico no botão de registro
  Então devo ver uma mensagem de sucesso
  E minha conta deve ser criada sem os detalhes da empresa


#Contexto: Registrar usuário - Cenários de erros

Cenario: Não deve criar registro sem preencher as informações 

  Dado que estou na página de registro
  Quando tento me registrar sem preencher nenhuma informação no formulário
  Então devo ver mensagens de erro indicando que todos os campos são obrigatórios
  E minha conta não deve ser criada

Cenario: Não deve criar registro sem primeiro e segundo nome

   Dado que estou na página de registro
  Quando preencho o formulário sem informar o primeiro e o segundo nome
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o primeiro e o segundo nome são obrigatórios
  E minha conta não deve ser criada

Cenario: Não deve criar registro apenas com “first name” preenchido


  Dado que estou na página de registro
  Quando preencho o formulário apenas com o "first name" preenchido
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o "last name" é obrigatório
  E minha conta não deve ser criada

Cenario: Não deve criar registro apenas com “last name” preenchido 


  Dado que estou na página de registro
  Quando preencho o formulário apenas com o "last name" preenchido
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o "first name" é obrigatório
  E minha conta não deve ser criada

Cenario: Não deve criar registro sem e-mail 


  Dado que estou na página de registro
  Quando preencho o formulário sem informar o e-mail
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o e-mail é obrigatório
  E minha conta não deve ser criada

Cenario: Não deve criar registro com e-mail repetido 


  Dado que estou na página de registro
  E já existe um usuário registrado com o mesmo e-mail
  Quando preencho o formulário com esse e-mail
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o e-mail já está em uso
  E minha conta não deve ser criada

Cenario: Não deve criar um registro com email invalido 


  Dado que estou na página de registro
  Quando preencho o formulário com um e-mail inválido
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o e-mail é inválido
  E minha conta não deve ser criada

Cenario: Não deve criar registro sem senha 


  Dado que estou na página de registro
  Quando preencho o formulário sem informar a senha
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que a senha é obrigatória
  E minha conta não deve ser criada

Cenario: Não deve criar registro apenas com “password” preenchido 


  Dado que estou na página de registro
  Quando preencho o formulário apenas com a "password" preenchida
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que o "confirm password" é obrigatório
  E minha conta não deve ser criada

Cenario: Não deve criar registro apenas com “confirm password” preenchido


  Dado que estou na página de registro
  Quando preencho o formulário apenas com o "confirm password" preenchido
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que a "password" é obrigatória
  E minha conta não deve ser criada

Cenario: Não deve criar um registro com menos de 6 caractere no campo senha 


  Dado que estou na página de registro
  Quando preencho o formulário com uma senha que tem menos de 6 caracteres
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que a senha deve ter no mínimo 6 caracteres
  E minha conta não deve ser criada

Cenario: Não deve criar registro com senha de confirmação diferente 

  Dado que estou na página de registro
  Quando preencho o formulário com uma senha e uma senha de confirmação diferentes
  E clico no botão de registro
  Então devo ver uma mensagem de erro indicando que as senhas não coincidem
  E minha conta não deve ser criada