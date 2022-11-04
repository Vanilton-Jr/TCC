var msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
var id_A = 0;
var id_Atual = id_A * 1;
var chave = 1;


function cores() {
    var test = document.getElementById("test_txt");
    var color = document.getElementById("color_pick");
    var msg = document.getElementsByClassName("cliente");

    for (var i = 0; i < msg.length; i++) {
        msg[i].style.backgroundColor = color.value;
    }
}

function renderMenssagemUsuario() {
    var msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
    if (msg.value.length >= 1 && msg.value.length <= 199) {
        const msg_usuario = msg.value;
        adMens('cliente', `${msg_usuario}`);
        renderMenssagemEmpresa(msg_usuario);
    }

    if (msg.value.length >= 199) {
        alert('Execedeu o limite de Characteres')
    }

}

function renderMenssagemEmpresa(msg_usuario) {
    const res = pegarResposta(msg_usuario);
    adMens('empresa', `${res}`);
}

function adMens(remetente, conteudo) {// Create element:
    id_Atual++;

    const corpo = document.getElementById('corpo');
    const msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
    const mensagem_Cli = document.createElement("div");//Cria o div

    mensagem_Cli.classList.add("mensagem"); mensagem_Cli.classList.add(remetente);// adiciona a class remetente
    mensagem_Cli.setAttribute("id", `cliente${id_Atual}`);// adiciona o id cliente

    const area_tempo = document.createElement("div");//Cria o div
    const tempo = document.createElement("p");//Cria o div

    var date = new Date;
    area_tempo.classList.add("area_tempo");// adiciona a class remetente
    tempo.innerText = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

    const Conteudo_Txt = document.createTextNode(conteudo);
    mensagem_Cli.append(Conteudo_Txt);

    mensagem_Cli.appendChild(area_tempo);
    area_tempo.appendChild(tempo);

    window.scroll({ top: 10000000, left: 0, behavior: 'smooth' })

    msg.value = "";
    corpo.appendChild(mensagem_Cli);
    cores()// aciona a função cores
}

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}


document.onkeydown = function (e) {// permite acionar a função através da tecla enter
    switch (e.keyCode) {
        case 13:
            renderMenssagemUsuario()
            break;
    }
};

//  ---------------------------------------RESPONDER-----------------------------------------------------

function criarPergunta(i) {
    let fnew = document.createElement('var');
    console.log
}

let hoje = "hoje tem"
let teste = "test"

const respostas = ["oshi", "testado bão", "palhaçada"]
const perguntas = ["hoje tem", "test", "palhaçada"]



function NovoQuest() {
    let pergunta = document.getElementById("pergunta").value;
    let resposta = document.getElementById("resposta").value;
    perguntas.push(pergunta);
    respostas.push(resposta);
    console.log(perguntas);
    console.log(respostas);
}


function perguntaNreconhecida() {
    var chave = Math.floor((Math.random() * 5) + 1);
    var res = "";
    switch (chave) {
        case 1: res = "Tente outra pergunta"
            break;
        case 2: res = "Desculpe não entendi"
            break;
        case 3: res = "Sabe escrever não oh"
            break;
        case 4: res = "burro?"
            break;
            case 5: res = "Não entendi a pergunta"
            break;
        }
        return res;
}
function pegarResposta(msg) {
    var Resposta;
    let i = -1;
    while (i < respostas.length - 1) {
        i++;
        if (perguntas[i].toUpperCase() == msg.toUpperCase()) {
                    Resposta = respostas[i];
        }
        if (typeof Resposta === "undefined") {
            Resposta = perguntaNreconhecida();
        }
    }
    return Resposta;
}