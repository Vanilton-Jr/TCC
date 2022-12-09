var msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
var id_A = 0;
var id_Atual = id_A * 1;
var chave = 1;

function onload(){
    iniciarBot();
    showNQuest();
    showQuest();
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
    msg.value = "";
    var body = document.querySelector("body")
    
    window.scroll({ top:body.offsetHeight + 10, left: 0, behavior: 'smooth' })
}

function renderMenssagemEmpresa(msg_usuario) {
    const res = pegarResposta(msg_usuario);
    adMens('empresa', `${res}`);
}

var perguntas = ["exemplo1", "test", "Loren",]
var respostas = ["exemplificação1", "testado", "Ipsum",]

function adMens(remetente, conteudo) {// Create element:
    id_Atual++;
    const menArea = document.createElement("div");
    menArea.classList.add("menarea");
    
    var color = document.getElementById("msgCliente");
    const corpo = document.getElementById('corpo');
    const msg = document.getElementById('barra_menssagem'); //le oque está escrito na barra
    const mensagem_Cli = document.createElement("div");//Cria o div
    mensagem_Cli.style.backgroundColor = color.value;
    
    mensagem_Cli.classList.add("mensagem"); mensagem_Cli.classList.add(remetente);// adiciona a class remetente
    mensagem_Cli.setAttribute("id", `cliente${id_Atual}`);// adiciona o id cliente
    
    const area_tempo = document.createElement("div");//Cria o div
    area_tempo.classList.add("texto")
    const tempo = document.createElement("p");//Cria o div
    
    var date = new Date;
    area_tempo.classList.add("area_tempo");// adiciona a class remetente
    tempo.innerText = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

    const area_txt = document.createElement("div");//Cria o div
    area_txt.classList.add("texto")
    mensagem_Cli.append(area_txt);

    const Conteudo_Txt = document.createTextNode(conteudo);
    area_txt.append(Conteudo_Txt);
    
    mensagem_Cli.appendChild(area_tempo);
    area_tempo.appendChild(tempo);
    
    if (remetente == "cliente") {
        const fundo = document.createElement("div");
        fundo.classList.add("fundos")
        fundo.classList.add("cliente")
        mensagem_Cli.append(fundo)
    }
    
    var body = document.querySelector("body")
    window.scroll({ top:body.offsetHeight, left: 0, behavior: 'smooth' })
    
    corpo.appendChild(menArea)
    menArea.appendChild(mensagem_Cli);
    area_tempo
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


function perguntaNreconhecida() {
    var chave = Math.floor((Math.random() * 5) + 1);
    var res = "";
    switch (chave) {
        case 1: res = "Tente outra pergunta"
            break;
        case 2: res = "Desculpe não entendi"
            break;
        case 3: res = "Confira se escreveu corretamente"
            break;
        case 4: res = "???"
            break;
        case 5: res = "Não entendi a pergunta"
            break;
    }
    return res;
}

function pegarResposta(msg) {
    var Resposta;
    let i = -1;
    if (msg == "cancelar") {
        Resposta = 'Pedido Cancelado';
    }
    if (msg == "remarcar") {
        questionarioRes.length = 0;
        contadorQues = 1;
    }
    if (msg == "cancelar" && chaveEmail == 1) {
        Resposta = 'Pedido Cancelad';
        // Email.send({
        //     SecureToken : "65951555-a557-42d4-9f52-cce0c6925cf8",
        //     To : email,
        //     From : email,
        //     Subject : "Pedido Cancelado",
        //     Body : `${questionario[0]} cancelou o ${servico} do ${questionario[1]}`
        // }).then();
    }
    while (i < respostas.length - 1) {
        i++;
        if (perguntas[i].toUpperCase() == msg.toUpperCase()) {
            Resposta = respostas[i];
        }
        if (typeof Resposta === "undefined") {
            var msgwm = document.getElementById('barra_menssagem');
            var msgwm = document.getElementById('barra_menssagem');
            questionarioRes.push(`${msgwm.value}`)
            if (questionarioRes[0] == 1 || questionarioRes[0] == 2 ){
                Resposta = avancarQuest();
            }
            else{
                Resposta = perguntaNreconhecida();
            }
        }
    }

    return Resposta;
}