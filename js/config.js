function abrirjanela() {
    var butt_fec = document.getElementById("navButton_fec");
    var butt = document.getElementById("navButton");
    var janela = document.getElementById("janela_config");
    butt.style.visibility = "hidden";
    butt_fec.style.visibility = "visible";
    janela.style.display = "block";
    janela.classList.remove("janeladAtt");
    janela.classList.add("janelaAtt");
}

// function fecharjanela() {
//     var butt_fec = document.getElementById("navButton_fec");
//     var butt = document.getElementById("navButton");
//     var janela = document.getElementById("janela_config");
//     janela.style.display = "none";
//     janela.classList.add("janeladAtt");
//     janela.classList.remove("janelaAtt");
//     butt.style.visibility = "visible";
//     butt_fec.style.visibility = "hidden";
// }


// CORES--------------------------------------------
function cores() {
    var colorCli = document.getElementById("msgCliente");
    var fundo = document.getElementsByClassName("fundos");
    var msgCli = document.getElementsByClassName("cliente");

    var header = document.getElementById("header");
    var colorHeader = document.getElementById("headerColor");

    var body = document.querySelector("body");
    var colorBack = document.getElementById("bgColor");


    header.style.backgroundColor = colorHeader.value;
    body.style.backgroundColor = colorBack.value;

    cores2()

    for (var i = 0; i < fundo.length; i++) {
        fundo[i].style.backgroundColor = colorCli.value;
        fundo[i].classList.add("fundos_ativado");
    };

    setTimeout(() => {
        for (var i = 0; i < msgCli.length; i++) {
            msgCli[i].style.backgroundColor = colorCli.value;
        }
    }, 900);


    setTimeout(() => {
        for (var i = 0; i < fundo.length; i++) {
            fundo[i].classList.remove("fundos_ativado");
        }
    }, 900);

}

function cores2() {
    var msgEmp = document.getElementsByClassName("empresa");
    var colorEmp = document.getElementById("msgEmpresa");

    for (var i = 0; i < msgEmp.length; i++) {
        msgEmp[i].style.backgroundColor = colorEmp.value;
    }
}

//-----------------------Novo Questionário------------------------------------
function NovoQuest() {
    let pergunta = document.getElementById("pergunta_input");
    let resposta = document.getElementById("resposta_input");
    perguntas.push(pergunta.value);
    respostas.push(resposta.value);
    // console.log(perguntas);
    // console.log(respostas);
    pergunta.value = " ";
    resposta.value = " ";
    console.log(perguntas.length)
    showQuest()
}


const respostas = ["oshi", "testado bão", "palhaçada",]
const perguntas = ["hoje tem", "test", "palhaçada",]


function showQuest() {

    var corpo_per = document.getElementById('pergunta_show')
    

    for(var i = 0; i < perguntas.length;i++) {
        const vetor_per = document.createElement("div");
        vetor_per.classList.add("vetor")

        const vtr_per_conteudo = document.createElement('p');
        vtr_per_conteudo.innerHTML = perguntas[i];
        
        vetor_per.append(vtr_per_conteudo);
        
        corpo_per.append(vetor_per);
        console.log(perguntas[i])
        
    }
}