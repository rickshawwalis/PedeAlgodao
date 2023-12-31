// PARTE PLUMA KIDS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar6 = () => {
    let adquirir = document.querySelector(".adquirir6");
    let mostrar = document.querySelector("#mostrarTudo6");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes6 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores6");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos6");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato3 = document.querySelector("#imagemSapato6");
    imagemSapato3.innerHTML = "";

     //limpar opção de quantidade escolhida
     let select = document.getElementById("opcoes6");
     select.value = "";
}

//FECHAR
const cancelar6 = () => {
    let tituloA7 = document.querySelector(".tituloA7")
    let ocultar1 = document.querySelector(".cancelar6");
    let mostrar1 = document.querySelector("#mostrarTudo6");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA7.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes6()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato6 = document.querySelector("#imagemSapato6");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores6")) {
        const todosBotoes = document.querySelectorAll(".cores6");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato6.innerHTML = "";

        if (el.classList.contains("azulmarinho6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM/azulmarinho.jpeg';
            el.style.backgroundColor = "#666F8C";
        }
        if (el.classList.contains("azulpiscina6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM/azulpiscina.jpeg';
            el.style.backgroundColor = "#3FB3CA";
        }
        if (el.classList.contains("verdepiscina6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM/verdepiscina.png';
            el.style.backgroundColor = "#8AECEF";
        }
        if (el.classList.contains("branca6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM/branca.jpeg';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("preto6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM/preto.jpeg';
            el.style.backgroundColor = "black";
        }
        
        if (el.classList.contains("rosa6")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMAMOCASSIM//rosa.jpeg';
            el.style.backgroundColor = "#E29EAD";
        }
        
                    imagemSapato6.appendChild(imagem);
    }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
    const et = ev.target;
  
    if (et.classList.contains("tamanhos6")) {
      const todosBotoesTamanhos = document.querySelectorAll(".tamanhos6");
  
      todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
      // Define a cor apenas para o botão clicado
      et.style.backgroundColor = "#61A2B0";
    }
  });