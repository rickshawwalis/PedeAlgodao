// PARTE PLUMA CONFORT
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar2 = () => {
    let adquirir = document.querySelector(".adquirir2");
    let mostrar = document.querySelector("#mostrarTudo2");
  
    if (adquirir) {
      mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });
  
  }
  //LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
  const limparSelecoes2 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores2");
    todosBotoesCores.forEach(botao => {
      botao.style.backgroundColor = "";
    });
  
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos2");
    todosBotoesTamanhos.forEach(botao => {
      botao.style.backgroundColor = "";
    });
  
    let imagemSapato1 = document.querySelector("#imagemSapato2");
    imagemSapato1.innerHTML = "";
  }
  
  //FECHAR
  const cancelar2 = () => {
    let tituloA3 = document.querySelector(".tituloA3")
    let ocultar1 = document.querySelector(".cancelar2");
    let mostrar1 = document.querySelector("#mostrarTudo2");
    if (ocultar1) {
      mostrar1.style.display = 'none';
    }
    tituloA3.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes2()
  }
  
  
  //FAZ AS IMAGENS SURGIR
  document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato2 = document.querySelector("#imagemSapato2");
  
    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores2")) {
      const todosBotoes = document.querySelectorAll(".cores2");
      todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
  
      imagemSapato2.innerHTML = "";
  
      if (el.classList.contains("amareloouro2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/amarela.jpeg';
        el.style.backgroundColor = "#E0BA12";
      }
      if (el.classList.contains("azul2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/azulbebe.jpeg';
        el.style.backgroundColor = "#13C5FF";
      }
      if (el.classList.contains("azulmarinho2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/azulmarinho.jpeg';
        el.style.backgroundColor = "#666F8C";
      }
      if (el.classList.contains("branco2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/branca.jpeg';
        el.style.backgroundColor = "white";
      }
      if (el.classList.contains("marromclaro2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/marromclaro.jpeg';
        el.style.backgroundColor = "#B8B5AE";
      }
      if (el.classList.contains("neon2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/neon.jpeg';
        el.style.backgroundColor = "#BCE14F";
      }
      if (el.classList.contains("nude2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/nude.jpeg';
        el.style.backgroundColor = "#E3C9B9";
      }
      if (el.classList.contains("preto2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/preta.jpeg';
        el.style.backgroundColor = "black";
      }
      if (el.classList.contains("rosa2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/rosa.jpeg';
        el.style.backgroundColor = "#E29EAD";
      }
      if (el.classList.contains("verdemilitar2")) {
        imagem.src = '/PedeAlgodao/img-Index/PLUMACONFORT/verdemilitar.jpeg';
        el.style.backgroundColor = "#6F735C";
      }





      imagemSapato2.appendChild(imagem);
    }
  });
  
//TAMANHOS
document.addEventListener('click', (ev) => {
  const et = ev.target;

  if (et.classList.contains("tamanhos2")) {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos2");

    todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });
    // Define a cor apenas para o botão clicado
    et.style.backgroundColor = "#61A2B0";
  }
});