var questContador = -1;
var email='';
let tipos = `

2 - Assistência Veterinaria
`;

const questionario = ["Nome do Tutor", "Nome do Animal", "Porte", "Raça"]

const questionarioRes = []

function iniciarBot() {
    adMens('empresa', `Selecione um tipo de serviço (digite o número correspondente)`)
    adMens('empresa', `1 - Banho e Tosa`)
    adMens('empresa', `2 - Assistência Veterinaria`)
    adMens('empresa', `3 - Cancela`)
}

function avancarQuest() {
    var msg = document.getElementById('barra_menssagem');
    questContador++
    var preco = '';
    var servico = '';

    const tudo = [`${servico}    a ${questionarioRes[1]},    ${questionarioRes[2]},    ${questionarioRes[3]},    ${questionarioRes[4]},    Preço: ${preco}`];

    if (questionarioRes[0] == 1) {
        servico = 'Banho e Tosa'
    }

    else if (questionarioRes[0] == 2) {
        servico = 'Assistência Veterinaria'
    }

    if (questionarioRes[0] == 1 && questionarioRes[3] == 'grande') {
        preco = 'muito'
    }
    console.log(questionarioRes[questContador - 1])

    if (questContador <= questionario.length) {
        return questionario[questContador]
    }

    else {
        Email.send({
            SecureToken : "65951555-a557-42d4-9f52-cce0c6925cf8",
            To : email,
            From : email,
            Subject : "Novo Pedido",
            Body : tudo 
        }).then();

        console.log(questionarioRes)
        return `
        ${servico}
        ${questionarioRes[1]}
        ${questionarioRes[2]}
        ${questionarioRes[3]}
        ${questionarioRes[4]}
        Preço: ${preco}
        `;
    }
}