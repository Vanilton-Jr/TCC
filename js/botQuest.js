var questContador = -1;

let tipos =['Tipo de Serviço (digite o número)',
     '1 - Banho e Tosa',
     '2 - Assistência Veterinária',
     '3 - Ajuda',
     '4 - Cancelar Atendimento'];

     ['<div id="someId">',
     'some content<br />',
     '<a href="#someRef">someRefTxt</a>',
     '</div>'
    ].join('\n');
    
    const questionario = ["Nome do Tutor", "Nome do Animal", "Porte", "Raça"]
    
    const questionarioRes = []
    
    function iniciarBot(){
        adMens('empresa',`${tipos}`)
    }
    
function avancarQuest() {
    var msg = document.getElementById('barra_menssagem');
    questContador++
    var preco = '';
    var servico = '';

    if (questionarioRes[0] == 1){
        servico = 'Banho e Tosa'
    }

    else if (questionarioRes[0] == 2){
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