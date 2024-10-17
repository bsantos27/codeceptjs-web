Feature('login');

Scenario('login com sucesso', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')    
    I.click('Login');
    I.fillField('#user', 'rluanafreitas@gmail.com');
    I.fillField('#password', '123456');
    I.click('#btnLogin'); 
    I.waitForText('Login realizado',3)   

}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login');
    I.fillField('#user', 'rluanafreitas@gmail.com');    
    I.click('#btnLogin'); 
    I.see('Senha inválida.');    

});

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login');       
    I.click('#btnLogin'); 
    I.see('E-mail inválido.');

});

Scenario('Tentando Logar digitando apenas a senha', ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')    
    I.click('Login');
    I.fillField('#password', '123456');
    I.click('#btnLogin'); 

});

