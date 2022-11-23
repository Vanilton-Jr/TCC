
function abrirjanela(){
    var butt_fec = document.getElementById("navButton_fec");
    var butt = document.getElementById("navButton");
   var janela = document.getElementById("janela_config");
   butt.style.visibility = "hidden";
   butt_fec.style.visibility = "visible";
   janela.style.display = "block";
   janela.classList.remove("janeladAtt");
   janela.classList.add("janelaAtt");
}

function fecharjanela(){
   var butt_fec = document.getElementById("navButton_fec");
   var butt = document.getElementById("navButton");
   var janela = document.getElementById("janela_config");
   
   janela.classList.add("janeladAtt");
   janela.classList.remove("janelaAtt");
   butt.style.visibility = "visible";
   butt_fec.style.visibility = "hidden";
}
