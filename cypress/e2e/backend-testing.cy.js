/// <reference types="cypress" />

describe('BACK-END: APIs de cadastro, busca, edição e exclusão', () => {

    const { faker } = require('@faker-js/faker');

    let responseLog;
    let geradorDeNomeRepitido;
    let geradorDeEmailRepitido;
    let geradorDePasswordRepitido;
    let capturaIdDeUmNovoCadastro;

    beforeEach(() => {
        geradorDeNomeRepitido = faker.person.fullName();
        geradorDeEmailRepitido = faker.internet.email();
        geradorDePasswordRepitido = faker.internet.password();
    })

    afterEach(() => {
        cy.log('Response:', responseLog)
    });

    context('Cenários de sucesso', () => {

        it('CT01 - Metodo POST: Cadastrar usuário com campo “administrador” como “true”', () => {


            
            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', 'true',
                201, "Cadastro realizado com sucesso").then((response) => {
                    responseLog = response;

                });

        })

        it('CT02 - Metodo POST: Cadastrar usuário com campo “administrador” como “false”', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', 'false',
                201, "Cadastro realizado com sucesso").then((response) => {
                    responseLog = response;

                });

        })

        it('CT03 - Metodo GET: Buscar usuário com parâmetros “_ID”, “administrador”, “nome”, “email”, “password”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    '_id', id,
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "true",
                    id
                ).then((response) => {
                    responseLog = response.body;
                })
            })
        })

        it('CT04 - Metodo GET: Buscar usuário sem nenhum parâmetro', () => {

            cy.listaUsuarioCadastrado(
                'Validações de sucesso com dados genericos',
                'GET',
                '/usuarios/',
                '', '',
                '', '',
                '', '',
                '', '',
                '', '',
                200
            ).then((response) => {
                responseLog = response;
            })
        })

        it('CT05 - Metodo GET: Buscar usuário apenas com parâmetro “_ID” e “administrador” com valor true', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    '', '',
                    'administrador', 'true',
                    '_id', id,
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "true",
                    id
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT06 - Metodo GET: Buscar usuário apenas com parâmetro “_ID” e “administrador” com valor false', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    '', '',
                    'administrador', 'false',
                    '_id', id,
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "false",
                    id
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT07 - Metodo GET: Buscar usuário apenas com parâmetro “_ID”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    '', '',
                    '', '',
                    '_id', id,
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "false",
                    id
                ).then((response) => {
                    responseLog = response;
                })
            });
        })

        it('CT08 - Metodo GET: Buscar usuário apenas com parâmetro “nome”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then(() => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados genericos',
                    'GET',
                    '/usuarios/',
                    '', geradorDeNomeRepitido,
                    '', '',
                    '', '',
                    '', '',
                    '', '',
                    200
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT09 - Metodo GET: Buscar usuário apenas com parâmetro “email”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    'email', geradorDeEmailRepitido,
                    '', '',
                    '', '',
                    '', '',
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "false",
                    id
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT10 - Metodo GET: Buscar usuário apenas com parâmetro “password”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados especificos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    'password', geradorDePasswordRepitido,
                    '', '',
                    '', '',
                    200,
                    1,
                    geradorDeNomeRepitido,
                    geradorDeEmailRepitido,
                    geradorDePasswordRepitido,
                    "false",
                    id
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT11 - Metodo GET: Buscar usuário apenas com o parâmetro “administrador” com valor true', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then(() => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados genericos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    '', '',
                    'administrador', 'true',
                    '_id', '',
                    200
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT12 - Metodo GET: Buscar usuário apenas com o parâmetro “administrador” com valor false', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then(() => {
                cy.listaUsuarioCadastrado(
                    'Validações de sucesso com dados genericos',
                    'GET',
                    '/usuarios/',
                    '', '',
                    '', '',
                    '', '',
                    'administrador', 'false',
                    '_id', '',
                    200
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT13 - Metodo PUT: Editar usuário existente alterando “nome”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);


            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de sucesso',
                    'PUT',
                    '/usuarios/', id,
                    'nome', faker.person.fullName(),
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    200,
                    'Registro alterado com sucesso',
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT14 - Metodo PUT: Editar usuário existente alterando “email”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de sucesso',
                    'PUT',
                    '/usuarios/', id,
                    'nome', geradorDeNomeRepitido,
                    'email', faker.internet.email(),
                    'password', geradorDePasswordRepitido,
                    'administrador', 'true',
                    200,
                    'Registro alterado com sucesso',
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT15 - Metodo PUT: Editar usuário existente alterando “password”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de sucesso',
                    'PUT',
                    '/usuarios/', id,
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'false',
                    200,
                    'Registro alterado com sucesso',
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT16 - Metodo PUT: Editar usuário existente alterando “administrador”', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de sucesso',
                    'PUT',
                    '/usuarios/', id,
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    200,
                    'Registro alterado com sucesso',
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT17 - Metodo PUT: Enviar a mesma request sem alterar dados', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de sucesso',
                    'PUT',
                    '/usuarios/', id,
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    200,
                    'Registro alterado com sucesso',
                ).then(() => {
                })

                cy.alteraDadosCadastrais(
                    'TESTE',
                    'PUT',
                    '/usuarios/', id,
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    200,
                    'Registro alterado com sucesso',
                ).then((response) => {
                    responseLog = response;
                })
            })

            it('CT30 - Editar usuário existente alterando “administrador”', () => {

                cy.request({

                    method: 'PUT',
                    url: baseURL + '/usuarios' + '/ukKG3xMqJ2BFzSxP',
                    body: {
                        "nome": 'b',
                        "email": 'joaoteste12@teste.com.br',
                        "password": '13',
                        "administrador": 'false'
                    }

                }).then((response) => {

                    cy.log(response.body)
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
                })
            })

            it('CT31 - Enviar a mesma request sem alterar dados', () => {

                cy.request({

                    method: 'PUT',
                    url: baseURL + '/usuarios' + '/ukKG3xMqJ2BFzSxP',
                    body: {
                        "nome": 'b',
                        "email": 'joaoteste12@teste.com.br',
                        "password": '13',
                        "administrador": 'false'
                    }

                }).then((response) => {

                    cy.log(response.body)
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
                })
            })
        })

        it('CT18 - Metodo DELETE: Excluir usuário pelo ID', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.excluiDadosCadastrais(
                    'Validações de sucesso com dados especificos',
                    'DELETE',
                    '/usuarios/',
                    id,

                    200,
                    'Registro excluído com sucesso'
                ).then((response) => {
                    responseLog = response;
                })
            });
        })

        it('CT19 - Metodo DELETE: Excluir o mesmo registro mais de uma vez', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.excluiDadosCadastrais(
                    'Validações de sucesso com dados especificos',
                    'DELETE',
                    '/usuarios/',
                    id,

                    200,
                    'Registro excluído com sucesso'
                ).then(() => {
                })

                cy.excluiDadosCadastrais(
                    'Validações de sucesso com dados especificos',
                    'DELETE',
                    '/usuarios/',
                    id,

                    200,
                    'Nenhum registro excluído'
                ).then((response) => {
                    responseLog = response;
                })
            });
        })
    })

    context('Cenários de erros', () => {

        it('CT20 - Metodo POST: Cadastrar usuário sem preencher o campo “nome”', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                '', '',
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "nome é obrigatório"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT21 - Metodo POST: Cadastrar usuário com o campo “nome” em branco', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', '',
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "nome não pode ficar em branco"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT22 - Metodo POST: Cadastrar usuário sem preencher campo “email”', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                '', '',
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "email é obrigatório"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT23 - Metodo POST: Cadastrar usuário com o campo “email” inválido', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', 'teste5@@@teste.com.br',
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "email deve ser um email válido"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT24 - Metodo POST: Cadastrar usuário com campo “email” em branco', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', '',
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "email não pode ficar em branco"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT25 - Metodo POST: Cadastrar usuário com email repetido', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', geradorDeEmailRepitido,
                'password', faker.internet.password(),
                'administrador', 'false',
                201, "Cadastro realizado com sucesso").then(() => {
                });

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', geradorDeEmailRepitido,
                'password', faker.internet.password(),
                'administrador', 'false',
                400, "Este email já está sendo usado"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT26 - Metodo POST: Cadastrar usuário sem preencher campo “password”', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                '“password”', '',
                'administrador', 'false',
                400, "password é obrigatório"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT27 - Metodo POST: Cadastrar usuário com campo “password” em branco', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', '',
                'administrador', 'false',
                400, "password não pode ficar em branco"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT28 - Metodo POST: Cadastrar usuário sem preencher campo “administrador”', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                '', '',
                400, "administrador é obrigatório"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT29 - Metodo POST: Cadastrar usuário com campo “administrador” em branco', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', '',
                400, "administrador deve ser 'true' ou 'false'"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT30 - Metodo POST: Cadastrar usuário com o campo “administrador” inválido', () => {

            cy.cadastrarUsuario(
                'POST',
                '/usuarios',
                'nome', faker.person.fullName(),
                'email', faker.internet.email(),
                'password', faker.internet.password(),
                'administrador', 'teste',
                400, "administrador deve ser 'true' ou 'false'"
                ).then((response) => {
                    responseLog = response;
                });
        })

        it('CT31 - Metodo GET: Buscar usuário com valor vazio no parâmetro “email”', () => {

            cy.listaUsuarioCadastrado(

                'Validações de mensagens de erros (email vazio)',
                'GET',
                '/usuarios/',

                '', '',
                'email', '',
                '', '',
                '', '',
                '', '',

                400,
                'email deve ser uma string'
            ).then((response) => {
                responseLog = response;
            })

        })

        it('CT32 - Metodo GET: Buscar usuário aplicando um valor inválido no parâmetro “email”', () => {

            cy.listaUsuarioCadastrado(

                'Validações de mensagens de erros (email invalido)',
                'GET',
                '/usuarios/',

                '', '',
                'email', 'joao@@@teste.com',
                '', '',
                '', '',
                '', '',

                400,
                'email deve ser um email válido'
            ).then((response) => {
                responseLog = response;
            })
        })

        it('CT33 - Metodo GET: Buscar usuário aplicando um valor inválido no parâmetro “administrador”', () => {

            cy.listaUsuarioCadastrado(

                'Validações de mensagens de erros (administrador)',
                'GET',
                '/usuarios/',

                '', '',
                '', '',
                '', '',
                'administrador', 'TESTE',
                '', '',

                400,
                "administrador deve ser 'true' ou 'false'"
            ).then((response) => {
                responseLog = response;
            })
        })

        it('CT34 - Metodo GET: Buscar usuário com valor vazio no parâmetro “administrador”', () => {

            cy.listaUsuarioCadastrado(

                'Validações de mensagens de erros (administrador)',
                'GET',
                '/usuarios/',

                '', '',
                '', '',
                '', '',
                'administrador', '',
                '', '',

                400,
                "administrador deve ser 'true' ou 'false'"
            ).then((response) => {
                responseLog = response;
            })
        })

        it('CT35 - Metodo PUT: Editar usuário sem passar ID', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'TESTE',
                    'PUT',
                    '/usuarios/', '',

                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    405,
                    'Não é possível realizar PUT em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT36 - Metodo PUT: Editar usuário passando ID inválido', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'TESTE',
                    'PUT',
                    '/usuarios/', '#$%¨T¨%$',

                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    405,
                    'Não é possível realizar PUT em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT37 - Metodo PUT: Editar usuário com nome em branco', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (nome)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', '',
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    400,
                    'nome não pode ficar em branco'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT38 - Metodo PUT: Editar usuário com email inválido', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (email)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', geradorDeNomeRepitido,
                    'email', 'joaoteste12@@@teste.com.br',
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    400,
                    'email deve ser um email válido'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT39 - Metodo PUT: Editar usuário com email em branco', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (email)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', geradorDeNomeRepitido,
                    'email', '',
                    'password', faker.internet.password(),
                    'administrador', 'true',
                    400,
                    'email não pode ficar em branco'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT40 - Metodo PUT: Editar usuário com password em branco', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (password)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', '',
                    'administrador', 'true',
                    400,
                    'password não pode ficar em branco'
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT41 - Metodo PUT: Editar usuário com administrador inválido', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (administrador)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', 'teste com valor inválido',
                    400,
                    "administrador deve ser 'true' ou 'false'"
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT42 - Metodo PUT: Editar usuário com administrador em branco', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.alteraDadosCadastrais(
                    'Casos de falha (administrador)',
                    'PUT',
                    '/usuarios/', id,

                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', faker.internet.password(),
                    'administrador', '',
                    400,
                    "administrador deve ser 'true' ou 'false'"
                ).then((response) => {
                    responseLog = response;
                })
            })
        })

        it('CT43 - Metodo DELETE: Excluir um usuário sem passar um ID', () => {

            capturaIdDeUmNovoCadastro =
                cy.cadastrarUsuario(
                    'POST',
                    '/usuarios',
                    'nome', geradorDeNomeRepitido,
                    'email', geradorDeEmailRepitido,
                    'password', geradorDePasswordRepitido,
                    'administrador', 'false',
                    201,
                    "Cadastro realizado com sucesso"
                ).then((response) => response._id);

            capturaIdDeUmNovoCadastro.then((id) => {
                cy.excluiDadosCadastrais(
                    'Validações de sucesso com dados especificos',
                    'DELETE',
                    '/usuarios/',
                    '',

                    405,
                    'Não é possível realizar DELETE em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.'
                ).then((response) => {
                    responseLog = response;
                })
            });
        })
    })
})