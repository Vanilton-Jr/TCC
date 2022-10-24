var msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
var id_A = 0;
var id_Atual = id_A * 1;
var chave = 1;


function cores() {
    var test = document.getElementById("test_txt");
    var color = document.getElementById("color_pick");
    var msg = document.getElementsByClassName("cliente");
    test.innerText = color.value;
    color.value

    for (var i = 0; i < msg.length; i++) {
        msg[i].style.backgroundColor = hexToRgbA(color.value);
    }
}

function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.9)';
    }
    throw new Error('Bad Hex');
}

function renderMenssagemUsuario() {
    if (chave == 1) {
        var msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
        if (msg.value.length >= 1 && msg.value.length <= 199) {
            const msg_usuario = msg.value;
            adMens('cliente', `${msg_usuario}`);
            renderMenssagemEmpresa(msg_usuario);
        }

        if (msg.value.length >= 199) {
            alert('Execedeu o limite de Characteres')
        }

        chave = 0;
    }
    while (chave == 0) {
        setTimeout(() => { chave = 1 }, 2000);
    }
    console.log(chave)
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

//  ---------------------------------------RESPONDER-----------------------------------------------------4

const respostaObj = {
    olá: "Olá tudo bem?",
    hoje: new Date().toDateString(),
    "tud bien": "não marcelo eu não estou"
};

const pegarResposta = (msg) => {
    return respostaObj[msg] == undefined
        ? "Tente outra pergunta"
        : respostaObj[msg]
}