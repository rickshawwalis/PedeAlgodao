// PARTE PARA HOMENS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar7 = () => {
    let adquirir = document.querySelector(".adquirir7");
    let mostrar = document.querySelector("#mostrarTudo7");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes7 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores7");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos7");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato7 = document.querySelector("#imagemSapato7");
    imagemSapato7.innerHTML = "";

     //limpar opção de quantidade escolhida
     let select = document.getElementById("opcoes");
     select.value = "";
}

//FECHAR
const cancelar7 = () => {
    let tituloA3 = document.querySelector(".tituloA8")
    let ocultar1 = document.querySelector(".cancelar7");
    let mostrar1 = document.querySelector("#mostrarTudo7");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA3.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes7()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato7 = document.querySelector("#imagemSapato7");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores7")) {
        const todosBotoes = document.querySelectorAll(".cores7");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato7.innerHTML = "";

        if (el.classList.contains("azulbebe7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/azulbebe.png';
            el.style.backgroundColor = "#77B8BA";
        }
        if (el.classList.contains("azulmarinho7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/azulmarinho.png';
            el.style.backgroundColor = "#666F8C";
        }
        if (el.classList.contains("branca7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/azulmarinho.png';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("neon7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/neon.png';
            el.style.backgroundColor = "#BCE14F";
        }
        if (el.classList.contains("preta7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/preta.png';
            el.style.backgroundColor = "black";
        }
        if (el.classList.contains("verdemilitar7")) {
            imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/verdemilitar.png';
            el.style.backgroundColor = "#6F735C";
        }
        imagemSapato7.appendChild(imagem);
    }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
    const et = ev.target;
  
    if (et.classList.contains("tamanhos7")) {
      const todosBotoesTamanhos = document.querySelectorAll(".tamanhos7");
  
      todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
      // Define a cor apenas para o botão clicado
      et.style.backgroundColor = "#61A2B0";
    }
  });
