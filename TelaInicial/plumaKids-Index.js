// PARTE PLUMA KIDS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar3 = () => {
    let adquirir = document.querySelector(".adquirir3");
    let mostrar = document.querySelector("#mostrarTudo3");
  
    if (adquirir) {
      mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });
  
  }
  //LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
  const limparSelecoes3 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores3");
    todosBotoesCores.forEach(botao => {
      botao.style.backgroundColor = "";
    });
  
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos3");
    todosBotoesTamanhos.forEach(botao => {
      botao.style.backgroundColor = "";
    });
  
    let imagemSapato3 = document.querySelector("#imagemSapato3");
    imagemSapato3.innerHTML = "";
  }
  
  //FECHAR
  const cancelar3 = () => {
    let tituloA4 = document.querySelector(".tituloA4")
    let ocultar1 = document.querySelector(".cancelar3");
    let mostrar1 = document.querySelector("#mostrarTudo3");
    if (ocultar1) {
      mostrar1.style.display = 'none';
    }
    tituloA4.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes3()
  }
  
  
  //FAZ AS IMAGENS SURGIR
  document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato3 = document.querySelector("#imagemSapato3");
  
    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores3")) {
      const todosBotoes = document.querySelectorAll(".cores3");
      todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
  
      imagemSapato3.innerHTML = "";
  
      if (el.classList.contains("neon3")) {
        imagem.src = '/img-Index/PLUMAKIDS/neon.jpeg';
        el.style.backgroundColor = "#E0BA12";
      }
      if (el.classList.contains("rosa3")) {
        imagem.src = '/img-Index/PLUMAKIDS/rosa.jpeg';
        el.style.backgroundColor = "#13C5FF";
      }
      if (el.classList.contains("roxa3")) {
        imagem.src = '/img-Index/PLUMAKIDS/roxa.jpeg';
        el.style.backgroundColor = "#666F8C";
      }
      if (el.classList.contains("vermelhaclara3")) {
        imagem.src = '/img-Index/PLUMAKIDS/vermelhoclaro.jpeg';
        el.style.backgroundColor = "white";
      }
     
      imagemSapato3.appendChild(imagem);
    }
  });
  
  document.addEventListener('click', (ev) => {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos3");
    todosBotoesTamanhos.forEach(botao => {
      botao.style.backgroundColor = "";
    });
  
    const et = ev.target;
    if (et.classList.contains("tamanhos3")) {
      et.style.backgroundColor = "#61A2B0";
    }
  
  });
  