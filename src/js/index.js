const abas = document.querySelectorAll(".aba");

abas.forEach((aba => {
    aba.addEventListener("click", function(){

        if(
            aba.classList.contains("selecionado")){
                return;
            }
            selecionarAba(aba)
            mostrarinformacoesDaAba(aba)
    })
}))

function selecionarAba(aba){
        const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado");
}

function mostrarinformacoesDaAba(aba){
        const infoSelecionada = document.querySelector(".informacao.selecionado");
    infoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInfoAba = `informacao-${aba.id}`

        const infoASerMostrada = document.getElementById(idDoElementoDeInfoAba)
    infoASerMostrada.classList.add("selecionado")
}