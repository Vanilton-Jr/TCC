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

function fecharjanela() {
    var butt_fec = document.getElementById("navButton_fec");
    var butt = document.getElementById("navButton");
    var janela = document.getElementById("janela_config");
    janela.style.display = "none";
    janela.classList.add("janeladAtt");
    janela.classList.remove("janelaAtt");
    butt.style.visibility = "visible";
    butt_fec.style.visibility = "hidden";
}


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
    console.log(perguntas);
    console.log(respostas);
    // pergunta.value = " ";
    // resposta.value = " ";

    addRecente()
}

function showQuest() {
    var corpo_per = document.getElementById('pergunta_show')
    var corpo_res = document.getElementById('resposta_show')


    for (var i = 0; i < perguntas.length; i++) {
        const vetor_per = document.createElement("div");
        vetor_per.classList.add("vetor")
        vetor_per.setAttribute('id', `pergunta${i}`)

        const vtr_per_conteudo = document.createElement('p');
        vtr_per_conteudo.innerHTML = perguntas[i];

        vetor_per.append(vtr_per_conteudo);

        corpo_per.append(vetor_per);

        const del = document.createElement("div");
        del.classList.add("del")
        del.setAttribute('id', `del${i}`)
        del.innerHTML = "Remover"

        del.setAttribute('onclick', `removeQuest(${i})`)
        del.setAttribute('onmouseenter', `selecDel(${i})`)
        del.setAttribute('onmouseleave', `deselecDel(${i})`)

        corpo_per.append(del)
    }

    for (var i = 0; i < perguntas.length; i++) {
        const vetor_res = document.createElement("div");
        vetor_res.classList.add("vetor")
        vetor_res.setAttribute('id', `resposta${i}`)

        const vtr_res_conteudo = document.createElement('p');
        vtr_res_conteudo.innerHTML = respostas[i];

        vetor_res.append(vtr_res_conteudo);

        corpo_res.append(vetor_res);
    }
}

function addRecente() {
    var corpo_res = document.getElementById('resposta_show')

    var ip = respostas.length - 1;

    const vetor_res = document.createElement("div");
    vetor_res.setAttribute('id', `resposta${ip}`)
    vetor_res.classList.add("vetor");

    const vtr_res_conteudo = document.createElement('p');
    vtr_res_conteudo.innerHTML = respostas[ip];

    vetor_res.append(vtr_res_conteudo);

    corpo_res.append(vetor_res);


    // H------------------
    var corpo_per = document.getElementById('pergunta_show')

    var ib = (perguntas.length - 1);

    const vetor_per = document.createElement("div");
    vetor_per.setAttribute('id', `pergunta${ib}`)
    vetor_per.classList.add("vetor");

    const vtr_per_conteudo = document.createElement('p');
    vtr_per_conteudo.innerHTML = `${perguntas[ib]}`;

    vetor_per.append(vtr_per_conteudo);

    corpo_per.append(vetor_per);


    const del = document.createElement("div");
    del.classList.add("del")
    del.setAttribute('id', `del${ib}`)
    del.innerHTML = "Remover"


    del.setAttribute('onclick', `removeQuest(${ib})`)
    del.setAttribute('onmouseenter', `selecDel(${ib})`)
    del.setAttribute('onmouseleave', `deselecDel(${ib})`)

    corpo_per.append(del)


    for (var ic = 0; ic < perguntas.length; ic++) {
        const vetor_rese = document.getElementById(`resposta${ic}`);
        const vetor_pere = document.getElementById(`pergunta${ic}`);
        var perH = vetor_pere.offsetHeight;
        var resH = vetor_rese.offsetHeight;


        if (perH > resH) {
            vetor_rese.style.height = `${resH}px`;
        }

        else if (perH < resH) {
            vetor_pere.style.height = `${resH}px`;
        }

        console.log(perH + 'px')
        console.log(resH + 'hm')
    }
}

function removeQuest(i) {
    var res = document.getElementById(`resposta${i}`)
    var per = document.getElementById(`pergunta${i}`)
    var but = document.getElementById(`del${i}`)

    res.remove();
    per.remove();
    but.remove();

    const index1 = respostas.indexOf(respostas[i]);
    if (index1 > -1) { // only splice array when item is found
        respostas.splice(index1, 1); // 2nd parameter means remove one item only
    }
    const index2 = perguntas.indexOf(perguntas[i]);
    if (index2 > -1) { // only splice array when item is found
        perguntas.splice(index2, 1); // 2nd parameter means remove one item only
    }

}

function selecDel(i) {
    var res = document.getElementById(`resposta${i}`)
    var per = document.getElementById(`pergunta${i}`)

    res.style.backgroundColor = "rgb(255, 32, 69)";
    per.style.backgroundColor = "rgb(255, 32, 69)";
}

function deselecDel(i) {
    var res = document.getElementById(`resposta${i}`)
    var per = document.getElementById(`pergunta${i}`)

    res.style.backgroundColor = "rgb(70, 70, 228)";
    per.style.backgroundColor = "rgb(70, 70, 228)";
}

function txtCor(n, objeto) {
    var text = document.getElementById(`txtCor${n}`);
    var msg = document.getElementsByClassName(`${objeto}`);

    if (text.checked == true) {
        for (var i = 0; i < msg.length; i++) {
            msg[i].style.color = "white"
        };
    }
    else if (text.checked == false) {
        for (var i = 0; i < msg.length; i++) {
            msg[i].style.color = "black"
        };
    }
}

function mudarFoto(id,i){
    var obj = document.getElementById(id);
    var src = document.getElementById(`text${i}`).value;
    var img = document.getElementById(`img${i}`);


    obj.classList.add("fotinha");

    obj.style.backgroundImage = `url(${src})` 
    img.src = `${src}` 
}