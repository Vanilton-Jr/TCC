var questContador = -1;

var contadorQues = 1;
var email='';
var chaveEmail = 0;

const questionario = ["Nome do Tutor", "Nome do Animal", "Porte", "Raça"]
 
const questionarioRes = []

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
        // Email.send({
        //     SecureToken : "65951555-a557-42d4-9f52-cce0c6925cf8",
        //     To : email,
        //     From : email,
        //     Subject : "Novo Pedido",
        //     Body : tudo 
        // }).then();

        chaveEmail = 1;

        const tudo = [`
        ${servico};
        ${menssagemFinal};
        Preço:${preco}
        `];
    
        for (let i = contadorQues; i < questionarioRes.length -1; i++) { 
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