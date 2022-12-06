var questContador = -1;

let tipos =`
     Tipo de Serviço (digite o número)

     1 - Banho e Tosa

     2 - Assistência Veterinária

     3 - Cancelar Atendimento
    `;

const questionario = [`${tipos}`, "Nome do Tutor", "Nome do Animal", "Porte", "Raça"]

const questionarioRes = []

function avancarQuest() {
    var msg = document.getElementById('barra_menssagem');
    questContador++
    var preco = '';


    if (questionarioRes[1] == 1 && questionarioRes[4] == 'grande') {
        preco = 'muito'
    }

    questionarioRes.push(msg.value)
    
    console.log(questionarioRes[0])

    if (questContador <= questionario.length) {
        return questionario[questContador]
    }
    else {
        return `
        ${questionarioRes[1]}<br>
        ${questionarioRes[2]}<br>
        ${questionarioRes[3]}<br>
        ${questionarioRes[4]}<br>
        ${questionarioRes[5]}<br>
        Preço: ${preco}
        `;
    }

   
}