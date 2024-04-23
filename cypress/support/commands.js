let backendBaseURL = 'https://serverest.dev';

Cypress.Commands.add('cadastrarUsuario', (metodoHTTP, endpoint, campoNome, nome, campoEmail, email, campoPassword, password, campoAdministrador, administrador, statusCode, mensagemResponse) => {
    
  return cy.request({

      method: metodoHTTP,
      url: backendBaseURL + endpoint,

      failOnStatusCode: false,

      body: {
        
        [campoNome] : nome,
        [campoEmail] : email,
        [campoPassword] : password,
        [campoAdministrador] : administrador

      }
    }).then((response) => {


      if (mensagemResponse === 'Cadastro realizado com sucesso') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.message).to.equal(mensagemResponse);  

      }
      
      if (mensagemResponse === 'nome é obrigatório') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.nome).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'email é obrigatório') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.email).to.equal(mensagemResponse);  

      }
      
      if (mensagemResponse === 'nome não pode ficar em branco') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.nome).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'email deve ser um email válido') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.email).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'email não pode ficar em branco') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.email).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'Este email já está sendo usado') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.message).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'password é obrigatório') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.password).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'password não pode ficar em branco') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.password).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === 'administrador é obrigatório') {

        expect(response.status).to.equal(statusCode);
        expect(response.body.administrador).to.equal(mensagemResponse);  

      }

      if (mensagemResponse === "administrador deve ser 'true' ou 'false'") {

        expect(response.status).to.equal(statusCode);
        expect(response.body.administrador).to.equal(mensagemResponse);  

      }

      return  response.body;
      
    });
});

Cypress.Commands.add('listaUsuarioCadastrado', (cenarioDoTeste, metodoHTTP, endpoint, campo_id, id, campoNome, nome, campoEmail, email, campoPassword, password, campoAdministrador, administrador, statusCode, responseBody, responseNome, responseEmail, responsePassword, responseAdministrador, responseId) => {
    
  cy.request({

      method: metodoHTTP,
      url: backendBaseURL + endpoint,
      failOnStatusCode: false, 
      qs: {
        [campo_id] : id,
        [campoNome] : nome,
        [campoEmail] : email,
        [campoPassword] : password,
        [campoAdministrador] : administrador,

      }

      }).then((response) => {

        if (cenarioDoTeste == 'Validações de sucesso com dados especificos') {

          expect(response.status).to.equal(statusCode);
          expect(response.body.quantidade).to.be.at.least(responseBody)

          expect(response.body.usuarios[0].nome).to.equal(responseNome)
          expect(response.body.usuarios[0].email).to.equal(responseEmail)
          expect(response.body.usuarios[0].password).to.equal(responsePassword)
          expect(response.body.usuarios[0].administrador).to.equal(responseAdministrador)
          expect(response.body.usuarios[0]._id).to.equal(responseId)
    
        }

        if (cenarioDoTeste == 'Validações de sucesso com dados genericos') {

          expect(response.status).to.equal(statusCode);
          expect(response.body.quantidade).to.not.be.null;

          expect(response.body.usuarios[0].nome).to.not.be.null;
          expect(response.body.usuarios[0].email).to.not.be.null;
          expect(response.body.usuarios[0].password).to.not.be.null;
          expect(response.body.usuarios[0].administrador).to.not.be.null;
          expect(response.body.usuarios[0]._id).to.not.be.null;          
    
        }

        if (cenarioDoTeste == 'Validações de mensagens de erros (administrador)') {

          expect(response.status).to.equal(statusCode);
          expect(response.body.administrador).to.equal(responseBody)

        }

        if (cenarioDoTeste == 'Validações de mensagens de erros (email invalido)') {

          expect(response.status).to.equal(statusCode);
          expect(response.body.email).to.equal(responseBody)

        }

        if (cenarioDoTeste == 'Validações de mensagens de erros (email vazio)') {

          expect(response.status).to.equal(statusCode);
          expect(response.body.email).to.equal(responseBody)

        }

    });

});

Cypress.Commands.add('alteraDadosCadastrais', (cenarioDoTeste, metodoHTTP, endpoint, idDoUsuario, campoNome, nome, campoEmail, email, campoPassword, password, campoAdministrador, administrador, statusCode, mensagemResponse) => {
    
  return cy.request({
    
    method: metodoHTTP,
    url: backendBaseURL + endpoint + idDoUsuario,
    
    failOnStatusCode: false,
    
    body: {
            
      [campoNome] : nome,
      [campoEmail] : email,
      [campoPassword] : password,
      [campoAdministrador] : administrador
    
      }

    }).then((response) => {
    
    
      if (cenarioDoTeste == 'Casos de sucesso') {
    
        expect(response.status).to.equal(statusCode);
        expect(response.body.message).to.equal(mensagemResponse);  
    
      } 
      
      if(cenarioDoTeste == 'Casos de falha (email)') {
        expect(response.status).to.equal(statusCode);
        expect(response.body.email).to.equal(mensagemResponse);  
      }

      if(cenarioDoTeste == 'Casos de falha (nome)') {
        expect(response.status).to.equal(statusCode);
        expect(response.body.nome).to.equal(mensagemResponse); 
      }

      if(cenarioDoTeste == 'Casos de falha (password)') {
        expect(response.status).to.equal(statusCode);
        expect(response.body.password).to.equal(mensagemResponse); 
      }

      if(cenarioDoTeste == 'Casos de falha (administrador)') {
        expect(response.status).to.equal(statusCode);
        expect(response.body.administrador).to.equal(mensagemResponse); 
      }

      return  response.body;
     
    });

});

Cypress.Commands.add('excluiDadosCadastrais', (cenarioDoTeste, metodoHTTP, endpoint, idDoUsuario, statusCode, reponseMessage ) => {
    
  cy.request({

      cenarioDoTeste,
      method: metodoHTTP,
      url: backendBaseURL + endpoint + idDoUsuario,
      failOnStatusCode: false, 

    }).then((response) => {

      expect(response.status).to.equal(statusCode);
      expect(response.body.message).to.equal(reponseMessage)

    });

});