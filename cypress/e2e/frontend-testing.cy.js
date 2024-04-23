/// <reference types="cypress" />

import RegistrationPage from '../pageObjects/registroPage';

describe('FRONT-END: Funcionalidade de registro', () => {

    const { faker } = require('@faker-js/faker');

   // let dispositivo;
    let geradorDeSenha;
    let geradorDeEmailRepitido;
    let geradorDeSenha5Caracteres;

    function geradorDeDia() {
        return Math.ceil(Math.random() * 31);
    }
    
    function geradorDeMes() {
        const meses = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
      
        const indice = Math.floor(Math.random() * 12);
        return meses[indice];
    }
    
    function geradorDeAno() {
        return Math.floor(Math.random() * (2024 - 1914 + 1)) + 1914;
    }

    beforeEach(() => {
      geradorDeSenha = faker.internet.password();
      geradorDeEmailRepitido = faker.internet.email();
      geradorDeSenha5Caracteres = faker.internet.password(5);
    })

    afterEach(() => {
        cy.screenshot();
    });

    context('DESKTOP', (dispositivo = 'desktop') => {

        context('Cenários de sucesso', () => {

            it('CT01 - Registro com gênero masculino', () => {

                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.selecionarGenero('male');
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT02 - Registro com gênero feminino', () => {
    
                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.selecionarGenero('female');
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT03 - Registro sem gênero', () => {
    
                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT04 - Registro com campo “options” checado', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
      
            })
    
            it('CT05 - Registro com campo “options” desmarcado', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('off');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT06 - Registro com campo “Company details” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT07 - Registro com campo “Company details” sem preenchimento', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
        })
    
        context('Cenários de erros', () => {
    
            it('CT08 - Não deve criar registro sem preencher as informações', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
          
            })
    
            it('CT09 - Não deve criar registro sem primeiro e segundo nome', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
              
            })
    
            it('CT10 - Não deve criar registro apenas com “first name” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
              
            })
    
            it('CT11 - Não deve criar registro apenas com “last name” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
                
            })
    
            it('CT12 - Não deve criar registro sem e-mail', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                  
            })
    
            it('CT13 - Não deve criar registro com e-mail repetido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(geradorDeEmailRepitido);
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
                registrationPage.acessarPaginaDeRegistro();
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(geradorDeEmailRepitido);
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroComRegistroRepetido();
                
            })
    
            it('CT14 - Não deve criar um registro com email invalido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail('teste@@#$teste.com.br');
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroEmailInvalido('Wrong email');
    
            })
        
            it('CT15 - Não deve criar registro sem senha', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.'); 
              
            })
    
            it('CT16 - Não deve criar registro apenas com “password” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
                      
            })      
            
            it('CT17 - Não deve criar registro apenas com “confirm password” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('The password and confirmation password do not match.');
              
            })
    
            it('CT18 - Não deve criar um registro com menos de 6 caractere no campo senha', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha5Caracteres);
                registrationPage.confirmarSenha(geradorDeSenha5Caracteres);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroComSenhaInferiorSeisCaractere('Password must meet the following rules: must have at least 6 characters');
    
                
                      
            })
    
            it('CT19 - Não deve criar registro com senha de confirmação diferente', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(faker.internet.password());
                registrationPage.confirmarSenha(faker.internet.password());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('The password and confirmation password do not match.');
    
                      
            })
    
        })

    })

    context('MOBILE', (dispositivo = 'mobile') => {

        context('Cenários de sucesso', () => {

            it('CT01 - Registro com gênero masculino', () => {
    
                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.selecionarGenero('male');
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT02 - Registro com gênero feminino', () => {
    
                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.selecionarGenero('female');
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT03 - Registro sem gênero', () => {
    
                const registrationPage = new RegistrationPage();
    
                    registrationPage.acessarPaginaDeRegistro(dispositivo);
                    registrationPage.preencherPrimeiroNome(faker.person.firstName());
                    registrationPage.preencherUltimoNome(faker.person.lastName());
                    registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                    registrationPage.preencherEmail(faker.internet.email());
                    registrationPage.preencherEmpresa(faker.company.name());
                    registrationPage.selecionarNewsletter('off');
                    registrationPage.preencherSenha(geradorDeSenha);
                    registrationPage.confirmarSenha(geradorDeSenha);
                    registrationPage.clicarBotaoRegistro();
                    registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT04 - Registro com campo “options” checado', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
      
            })
    
            it('CT05 - Registro com campo “options” desmarcado', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('off');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT06 - Registro com campo “Company details” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
            it('CT07 - Registro com campo “Company details” sem preenchimento', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
          
            })
    
        })
    
        context('Cenários de erros', () => {
    
            it('CT08 - Não deve criar registro sem preencher as informações', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
          
            })
    
            it('CT09 - Não deve criar registro sem primeiro e segundo nome', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
              
            })
    
            it('CT10 - Não deve criar registro apenas com “first name” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoSobrenome('Last name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
              
            })
    
            it('CT11 - Não deve criar registro apenas com “last name” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroDoNome('First name is required.');
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
                
            })
    
            it('CT12 - Não deve criar registro sem e-mail', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroEmail('Email is required.');
                  
            })
    
            it('CT13 - Não deve criar registro com e-mail repetido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(geradorDeEmailRepitido);
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarRegistroConcluido('Your registration completed');
                registrationPage.acessarPaginaDeRegistro();
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(geradorDeEmailRepitido);
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroComRegistroRepetido();
                
            })
    
            it('CT14 - Não deve criar um registro com email invalido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail('teste@@#$teste.com.br');
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroEmailInvalido('Wrong email');
    
            })
        
            it('CT15 - Não deve criar registro sem senha', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroPassword('Password is required.');
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.'); 
              
            })
    
            it('CT16 - Não deve criar registro apenas com “password” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('Password is required.');
                      
            })      
            
            it('CT17 - Não deve criar registro apenas com “confirm password” preenchido', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.confirmarSenha(geradorDeSenha);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('The password and confirmation password do not match.');
              
            })
    
            it('CT18 - Não deve criar um registro com menos de 6 caractere no campo senha', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(geradorDeSenha5Caracteres);
                registrationPage.confirmarSenha(geradorDeSenha5Caracteres);
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroComSenhaInferiorSeisCaractere('Password must meet the following rules: must have at least 6 characters');
    
                
                      
            })
    
            it('CT19 - Não deve criar registro com senha de confirmação diferente', () => {
    
                const registrationPage = new RegistrationPage();
    
                registrationPage.acessarPaginaDeRegistro(dispositivo);
                registrationPage.selecionarGenero('female');
                registrationPage.preencherPrimeiroNome(faker.person.firstName());
                registrationPage.preencherUltimoNome(faker.person.lastName());
                registrationPage.selecionarDataNascimento(geradorDeDia(),geradorDeMes(),geradorDeAno());
                registrationPage.preencherEmail(faker.internet.email());
                registrationPage.preencherEmpresa(faker.company.name());
                registrationPage.selecionarNewsletter('on');
                registrationPage.preencherSenha(faker.internet.password());
                registrationPage.confirmarSenha(faker.internet.password());
                registrationPage.clicarBotaoRegistro();
                registrationPage.verificarMensagemDeErroConfirmPassword('The password and confirmation password do not match.');
    
                      
            })
    
        })

    })

})