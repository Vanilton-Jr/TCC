var questContador = -1;
var email='vaniltonc.coelhojr@gmail.com';
var chaveEmail = 0;

document.writeln("<script type='text/javascript' src='https://smtpjs.com/v3/smtp.js'></script>");

const questionario = ["Nome do Tutor", "Nome do Animal", "Porte", "Raça"]
 
const questionarioRes = [];

function iniciarBot() {
    adMens('empresa', `Selecione um tipo de serviço (digite o número correspondente)`)
    adMens('empresa', `1 - Banho e Tosa`)
    adMens('empresa', `2 - Assistência Veterinaria`)
    adMens('empresa', `3 - Cancelar`)
}

function avancarQuest() {
    var msg = document.getElementById('barra_menssagem');
    questContador++
    var preco = '';
    var servico = '';

    
    if (questionarioRes[0] == 1 ) {
        servico = 'Banho e Tosa'
    }
    if (questionarioRes[0] == 2) {
        servico = 'Assistência Veterinaria'
    }

    if (questionarioRes[0] == 1 && questionarioRes[3] == 'grande') {
        preco = 'R$60,00'
    }
     if (questionarioRes[0] == 1 && questionarioRes[3] == 'médio') {
        preco = 'R$50,00'
    }
     if (questionarioRes[0] == 1 && questionarioRes[3] == 'pequeno') {
        preco = 'R$40,00'
    }
     if (questionarioRes[0] == 2 && questionarioRes[3] == 'grande') {
        preco = 'R$100,00'
    }
     if (questionarioRes[0] == 2 && questionarioRes[3] == 'médio') {
        preco = 'R$90,00'
    }
     if (questionarioRes[0] == 2 && questionarioRes[3] == 'pequeno') {
        preco = 'R$80,00'
    }
    

    console.log(questionarioRes[questContador - 1])

    var menssagemFinal = []
    
    if (questContador <= questionario.length) {
        return questionario[questContador]
    }
    
    else if (questContador == questionario.length + 1){
        chaveEmail = 1;
        
        const tudo = [`
        ${servico};
        ${menssagemFinal};
        Preço:${preco}
        `];
        
        // Email.send({
        //     SecureToken : "18c023ec-c010-4e2c-b612-cd2f7538fd55",
        //     To : 'vaniltonc.ccoelhojr@gmail.com',
        //     From : 'vaniltonc.coelhojr@gmail.com',
        //     Subject : "Novo Pedido",
        //     Body : tudo 
        //     }).then(
        //        message => alert(message)
        //     ); 
        
        for (let i = 1; i < questionarioRes.length -1; i++) { 
            menssagemFinal.push(`${questionario[i-1]}:${questionarioRes[i]}`);    
        }

        console.log(questionarioRes)
        return `
        ${servico};
        ${menssagemFinal};
        Preço:${preco}
        `;
    }
    else{
        return perguntaNreconhecida();
    }
}