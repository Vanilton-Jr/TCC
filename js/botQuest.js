var questContador = -1;

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
        console.log(questionarioRes)
        return `
        ${servico}
        ${questionarioRes[1]}<br>
        ${questionarioRes[2]}<br>
        ${questionarioRes[3]}<br>
        ${questionarioRes[4]}<br>
        Preço: ${preco}
        `;
    }
}