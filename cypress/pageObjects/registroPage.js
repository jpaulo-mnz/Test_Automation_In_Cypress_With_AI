let frontendBaseURL = 'https://demo.nopcommerce.com/';
         
class RegistrationPage {

    acessarPaginaDeRegistro(dipositivo) {

        if(dipositivo == 'desktop'){
            cy.viewport(1920, 1080); 
        }

        if(dipositivo == 'mobile'){
            cy.viewport(375, 667)
        }
         
        cy.visit(frontendBaseURL)
        cy.get('.ico-register').click()

    }


    selecionarGenero(genero) {

        if(genero =='male'){
            cy.get('#gender-male').click();
        }
        if(genero =='female'){
            cy.get('#gender-female').click();
        }
        
    }

    preencherPrimeiroNome(nome) {
        cy.get('#FirstName').type(nome);
    }

    preencherUltimoNome(sobrenome) {
        cy.get('#LastName').type(sobrenome);
    }

    selecionarDataNascimento(dia, mes, ano) {
        cy.get('[name="DateOfBirthDay"]').select(dia);
        cy.get('[name="DateOfBirthMonth"]').select(mes);
        cy.get('[name="DateOfBirthYear"]').select(ano.toString());
    }

    preencherEmail(email) {
        cy.get('#Email').type(email);
    }

    preencherEmpresa(empresa) {

        cy.get('#Company').type(empresa);

    }

    selecionarNewsletter(newsletter) {

        if(newsletter == 'on'){
            cy.get('[id="Newsletter"]').dblclick();
        }
        if(newsletter == 'off'){
            cy.get('[id="Newsletter"]').click();
        }
        
    }

    preencherSenha(senha) {
        cy.get('#Password').type(senha);
    }

    confirmarSenha(senha) {
        cy.get('#ConfirmPassword').type(senha);
    }

    clicarBotaoRegistro() {
        cy.get('#register-button').click();
    }

    verificarRegistroConcluido(mensagemDeSucesso) {
        cy.get('.result').should('have.text', mensagemDeSucesso);
    }

    verificarMensagemDeErroDoNome(mensagemDeErroDoNome) {
        cy.get('#FirstName-error').should('have.text', mensagemDeErroDoNome);
    }

    verificarMensagemDeErroDoSobrenome(mensagemDeErroDoSobrenome) {
        cy.get('#LastName-error').should('have.text', mensagemDeErroDoSobrenome);
    }

    verificarMensagemDeErroEmail(mensagemDeErroEmail) {
        cy.get('#Email-error').should('have.text', mensagemDeErroEmail);
    }

    verificarMensagemDeErroPassword(mensagemDeErroPassword) {
        cy.get('#Password-error').should('have.text', mensagemDeErroPassword);
    }

    verificarMensagemDeErroConfirmPassword(mensagemDeErroConfirmPassword) {
        cy.get('#ConfirmPassword-error').should('have.text', mensagemDeErroConfirmPassword);
    }

    verificarMensagemDeErroComRegistroRepetido() {
        cy.contains('The specified email already exists');
    }

    verificarMensagemDeErroEmailInvalido(mensagemDeErroEmailInvalido) {
        cy.get('[id="Email-error"]').should('have.text', mensagemDeErroEmailInvalido);
    }

    verificarMensagemDeErroComSenhaInferiorSeisCaractere(mensagemDeErroComSenhaInferiorSeisCaractere) {
        cy.get('[id="Password-error"]').should('have.text', mensagemDeErroComSenhaInferiorSeisCaractere);
    }
}

export default RegistrationPage;
