// PARTE PLUMA SALTINHO
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar5 = () => {
    let adquirir = document.querySelector(".adquirir5");
    let mostrar = document.querySelector("#mostrarTudo5");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes5 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores5");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos5");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato5 = document.querySelector("#imagemSapato5");
    imagemSapato5.innerHTML = "";
}

//FECHAR
const cancelar5 = () => {
    let tituloA6 = document.querySelector(".tituloA6")
    let ocultar1 = document.querySelector(".cancelar5");
    let mostrar1 = document.querySelector("#mostrarTudo5");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA6.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes5()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato5= document.querySelector("#imagemSapato5");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores5")) {
        const todosBotoes = document.querySelectorAll(".cores5");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato5.innerHTML = "";

        if (el.classList.contains("azulbebe5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/azulbebe.png';
            el.style.backgroundColor = "#77B8BA";
        }
        if (el.classList.contains("branco5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/branca.png';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("laranjaclaro5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/laranjaclaro.png';
            el.style.backgroundColor = "#FDD0B3";
        }
        if (el.classList.contains("neon5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/neon.png';
            el.style.backgroundColor = "#BCE14F";
        }
        if (el.classList.contains("preta5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/preta.png';
            el.style.backgroundColor = "black";
        }
        if (el.classList.contains("rosa5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/rosa.png';
            el.style.backgroundColor = "#E29EAD";
        }
        if (el.classList.contains("vermelho5")) {
            imagem.src = '/PedeAlgodao/img-Index/PLUMASALTINHO/vermelho.png';
            el.style.backgroundColor = "#E12E4E";
        }
        
        imagemSapato5.appendChild(imagem);
    }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
    const et = ev.target;
  
    if (et.classList.contains("tamanhos5")) {
      const todosBotoesTamanhos = document.querySelectorAll(".tamanhos5");
  
      todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
      // Define a cor apenas para o botão clicado
      et.style.backgroundColor = "#61A2B0";
    }
  });