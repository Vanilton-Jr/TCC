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

function criarPergunta(i){
   let fnew = document.createElement('var');
   console.log

}

let hoje = "hoje tem"
function pegarResposta(msg) {
    var Resposta;
    switch(msg) {
        case hoje:
             Resposta = new Date().toDateString();
             break;
        case ontem:
            Resposta = new Date().toDateString();
            break;
            default: Resposta = "Tente outra pergunta";
    }
    return Resposta;
}