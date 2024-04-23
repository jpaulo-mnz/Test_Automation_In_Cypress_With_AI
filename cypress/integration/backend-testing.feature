Feature: APIs de cadastro, busca, edição e exclusão

# Método POST
	
#Contexto: Cadastrar usuário - Cenário de sucesso

Cenario: Cadastrar usuário com campo "administrador" como "true" 

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários para cadastrar um novo usuário
Quando envio uma requisição POST com  "administrador" como "true"
Então o usuário deve ser cadastrado como administrador

Cenario: Cadastrar usuário com campo “administrador” como “false” 

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários para cadastrar um novo usuário
Quando envio uma requisição POST com  "administrador" como "false"
Então o usuário não deve ser cadastrado como administrador

#Contexto: Cadastrar usuário - Cenários de erros

Cenario: Cadastrar usuário sem preencher o campo "nome"

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, exceto o campo "nome"
Quando envio uma requisição POST sem preencher o campo "nome"
Então deve retornar um erro informando que o campo "nome" é obrigatório

Cenario: Cadastrar usuário com o campo "nome" em branco

Dado que tenho acesso à API de cadastro de usuário
E possuo os dados necessários, com o campo "nome" em branco
Quando envio uma requisição POST com o campo "nome" em branco
Então a API deve retornar um erro informando que o campo "nome" é obrigatório

Cenario: Cadastrar usuário sem preencher campo “email”

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, exceto o campo “email”
Quando envio uma requisição POST sem preencher o campo “email”
Então a API deve retornar um erro informando que o campo “email” é obrigatório

Cenario: Cadastrar usuário com o campo “email” inválido 

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, com um email inválido
Quando envio uma requisição POST com um email inválido
Então a API deve retornar um erro informando que o email é inválido

Cenario: Cadastrar usuário com campo “email” em branco 

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, com o campo “email” em branco
Quando envio uma requisição POST com o campo “email” em branco
Então a API deve retornar um erro informando que o campo “email” é obrigatório

Cenario: Cadastrar usuário com email repetido  

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados de um usuário já cadastrado
Quando envio uma requisição POST com o mesmo email
Então a API deve retornar um erro informando que o email já está em uso

Cenario: Cadastrar usuário sem preencher campo “password”

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, exceto o campo “password”
Quando envio uma requisição POST sem preencher o campo “password”
Então a API deve retornar um erro informando que o campo “password” é obrigatório

Cenario: Cadastrar usuário com campo “password” em branco

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, com o campo “password” em branco
Quando envio uma requisição POST com o campo “password” em branco
Então a API deve retornar um erro informando que o campo “password” é obrigatório

Cenario: Cadastrar usuário sem preencher campo “administrador”

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, exceto o campo “administrador”
Quando envio uma requisição POST sem preencher o campo “administrador”
Então deve retornar um erro informando que o campo “administrador” é obrigatório

Cenario: Cadastrar usuário com campo “administrador” em branco

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, com o campo “administrador” em branco
Quando envio uma requisição POST com o campo “administrador” em branco
Então deve retornar um erro informando que o campo “administrador” é obrigatório

Cenario: Cadastrar usuário com o campo “administrador” inválido 

Dado que tenho acesso à API de cadastro de usuários
E possuo os dados necessários, com o campo “administrador” inválido
Quando envio uma requisição POST com o campo “administrador” inválido
Então deve retornar um erro informando que o campo “administrador” é obrigatório


# Método: GET

#Contexto: Buscar usuários - Cenários de sucesso

Cenario: Buscar usuário com parâmetros “_ID”, “administrador”, “nome”, “email”, “password” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com todos os parâmetros preenchidos
Quando envio uma requisição GET com os parâmetros “_ID”, “administrador”, “nome”, “email” e “password”
Então a API deve retornar o usuário com os dados correspondentes

Cenario: Buscar usuário sem nenhum parâmetro  

Dado que tenho acesso à API de busca de usuários
Quando envio uma requisição GET sem nenhum parâmetro
Então a API deve retornar uma lista com todos os usuários cadastrados

Cenario: Buscar usuário apenas com parâmetro “_ID” e “administrador” como true

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “_ID” e “administrador” como true
Quando envio uma requisição GET com os parâmetros “_ID” e “administrador” como true
Então a API deve retornar o usuário com o ID especificado e que seja administrador

Cenario: Buscar usuário apenas com parâmetro “_ID” e “administrador” como false 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “_ID” e “administrador” como false
Quando envio uma requisição GET com os parâmetros “_ID” e “administrador” como false
Então a API deve retornar o usuário com o ID especificado e que tenha administrador false

Cenario: Buscar usuário apenas com parâmetro “_ID” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “_ID”
Quando envio uma requisição GET com o parâmetro “_ID” 
Então a API deve retornar o usuário com o ID especificado

Cenario: Buscar usuário apenas com parâmetro “nome”
 
Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “nome”
Quando envio uma requisição GET com o parâmetro “nome” 
Então a API deve retornar o usuário com o nome especificado

Cenario: Buscar usuário apenas com parâmetro “email”

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “email”
Quando envio uma requisição GET com o parâmetro “email” 
Então a API deve retornar o usuário com o email especificado 

Cenario: Buscar usuário apenas com parâmetro “password” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “password”
Quando envio uma requisição GET com o parâmetro “password” 
Então a API deve retornar o usuário com o password especificado

Cenario: Buscar usuário apenas com o parâmetro “administrador” com valor “true”

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “administrador” com valor “true”
Quando envio uma requisição GET com o parâmetro “administrador” com valor “true” 
Então a API deve retornar os usuários com o “administrador” true especificado

Cenario: Buscar usuário apenas com o parâmetro “administrador” com valor “false”

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com o parâmetro “administrador” com valor “false”
Quando envio uma requisição GET com o parâmetro “administrador” com valor “false”
Então a API deve retornar os usuários com o “administrador” false especificado 

#Contexto: Buscar usuários - Cenário com erros 

Cenario: Buscar usuário com valor vazio no parâmetro “email” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com um email válido
Quando envio uma requisição GET com o parâmetro “email” vazio
Então deve retornar um erro informando que o parâmetro “email” é obrigatório

Cenario: Buscar usuário aplicando um valor inválido no parâmetro “email” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com um email válido
Quando envio uma requisição GET com um valor inválido no parâmetro “email”
Então deve retornar um erro informando que o parâmetro “email” é obrigatório

Cenario: Buscar usuário aplicando um valor inválido no parâmetro “administrador”
 
Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com um valor válido no parâmetro “administrador”
Quando envio uma requisição GET com um valor inválido no parâmetro “administrador”
Então deve retornar um erro informando que o parâmetro “administrador” é obrigatório

Cenario: Buscar usuário com valor vazio no parâmetro “administrador” 

Dado que tenho acesso à API de busca de usuários
E possuo um usuário cadastrado com um valor válido no parâmetro “administrador”
Quando envio uma requisição GET com o parâmetro “administrador” vazio
Então deve retornar um erro informando que o parâmetro “administrador” é obrigatório

# Método: PUT

#Contexto: Editar usuários - Cenários de sucesso 

Cenario: Editar usuário existente alterando “nome” 

Dado que tenho acesso à API de edição de usuários
E possuo um usuário cadastrado
Quando envio uma requisição PUT para editar o usuário alterando o “nome”
Então a API deve retornar sucesso e o usuário deve ter seu “nome” alterado conforme especificado

Cenario: Editar usuário existente alterando “email” 

Dado que tenho acesso à API de edição de usuários
E possuo um usuário cadastrado
Quando envio uma requisição PUT para editar o usuário alterando o “email”
Então a API deve retornar sucesso e o usuário deve ter seu “email” alterado conforme especificado

Cenario: Editar usuário existente alterando “password” 

Dado que tenho acesso à API de edição de usuários
E possuo um usuário cadastrado
Quando envio uma requisição PUT para editar o usuário alterando a “password”
Então a API deve retornar sucesso e o usuário deve ter sua “password” alterada conforme especificado

Cenario: Editar usuário existente alterando “administrador” 

Dado que tenho acesso à API de edição de usuários
E possuo um usuário cadastrado
Quando envio uma requisição PUT para editar o usuário alterando o “administrador”
Então a API deve retornar sucesso e o usuário deve ter seu status de “administrador” alterado conforme especificado

Cenario: Enviar a mesma request sem alterar dados 

Dado que tenho acesso à API de edição de usuários
E possuo um usuário cadastrado
Quando envio a mesma requisição PUT sem alterar nenhum dado
Então a API deve retornar sucesso e o usuário deve permanecer com os mesmos dados

#Contexto: Editar usuários - Cenários com erros

Cenario: Editar usuário sem passar ID 

Dado que tenho acesso à API de edição de usuários
E não passo um ID válido para edição
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o ID é obrigatório

Cenario: Editar usuário passando ID inválido 

Dado que tenho acesso à API de edição de usuários
E passo um ID inválido para edição
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o ID é inválido

Cenario: Editar usuário com nome em branco 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo o campo “nome” em branco
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o campo “nome” é obrigatório

Cenario: Editar usuário com email inválido 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo um email inválido
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o email é inválido

Cenario: Editar usuário com email em branco 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo o campo “email” em branco
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o campo “email” é obrigatório

Cenario: Editar usuário com password em branco 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo o campo “password” em branco
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o campo “password” é obrigatório

Cenario: Editar usuário com administrador inválido 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo um valor inválido para o campo “administrador”
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o campo “administrador” é inválido

Cenario: Editar usuário com administrador em branco 

Dado que tenho acesso à API de edição de usuários
E passo um ID válido para edição
E passo o campo “administrador” em branco
Quando envio uma requisição PUT para editar o usuário
Então a API deve retornar um erro informando que o campo “administrador” é obrigatório

# Método: DELETE

#Contexto: Remover usuários - Cenários de sucesso 

Cenario: Excluir usuário pelo ID 

Dado que tenho acesso à API de exclusão de usuários
E possuo um usuário cadastrado com um ID específico
Quando envio uma requisição DELETE com o ID do usuário
Então a API deve retornar sucesso e o usuário deve ser removido do sistema

Cenario: Excluir o mesmo registro mais de uma vez 

Dado que tenho acesso à API de exclusão de usuários
E possuo um usuário cadastrado com um ID específico
Quando envio uma requisição DELETE com o ID do usuário duas vezes
Então a API deve retornar sucesso na primeira vez e um erro na segunda vez indicando que o usuário não foi registrado

#Contexto: Remover usuários - Cenários de erros

Cenario: Excluir um usuário sem passar um ID

Dado que tenho acesso à API de exclusão de usuários
Quando envio uma requisição DELETE sem passar um ID
Então a API deve retornar um erro informando que o ID é obrigatório