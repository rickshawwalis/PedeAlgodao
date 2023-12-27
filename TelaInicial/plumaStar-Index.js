// PARTE PLUMA STAR
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar1 = () => {
  let adquirir = document.querySelector(".adquirir1");
  let mostrar = document.querySelector("#mostrarTudo1");

  if (adquirir) {
    mostrar.style.display = 'block';
  }
  mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes1 = () => {
  const todosBotoesCores = document.querySelectorAll(".cores1");
  todosBotoesCores.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos1");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  let imagemSapato1 = document.querySelector("#imagemSapato1");
  imagemSapato1.innerHTML = "";
}

//FECHAR
const cancelar1 = () => {
  let tituloA2 = document.querySelector(".tituloA2")
  let ocultar1 = document.querySelector(".cancelar1");
  let mostrar1 = document.querySelector("#mostrarTudo1");
  if (ocultar1) {
    mostrar1.style.display = 'none';
  }
  tituloA2.scrollIntoView({ behavior: 'smooth' })
  limparSelecoes1()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
  const el = e.target;
  let imagem = document.createElement('img');
  imagem.setAttribute("id", "fotosImagem");
  let imagemSapato1 = document.querySelector("#imagemSapato1");

  // Verifica se o elemento clicado é um botão de cor
  if (el.classList.contains("cores1")) {
    const todosBotoes = document.querySelectorAll(".cores1");
    todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });

    imagemSapato1.innerHTML = "";

    if (el.classList.contains("azul1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/lilas.png';
      imagem.src = '/img-Index/PLUMASTAR/azul.png';
      el.style.backgroundColor = "#1845A2";
    }
    if (el.classList.contains("azulmarinho1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/preta.png';
      imagem.src = '/img-Index/PLUMASTAR/azulmarinho.png';
      el.style.backgroundColor = "#313549";
    }
    if (el.classList.contains("bege1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/amareloouro.png';
      imagem.src = '/img-Index/PLUMASTAR/bege.png';
      el.style.backgroundColor = "#AF79CF";
    }
    if (el.classList.contains("branca1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/laranja.png';
      imagem.src = '/img-Index/PLUMASTAR/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("laranja1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/rosa.png';
      imagem.src = '/img-Index/PLUMASTAR/laranja.png';
      el.style.backgroundColor = "#FC9F5B";
    }
    if (el.classList.contains("marrom1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/branca.png';
      imagem.src = '/img-Index/PLUMASTAR/marrom.png';
      el.style.backgroundColor = "#888063";
    }
    if (el.classList.contains("marromclaro1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulmarinho.png';
      imagem.src = '/img-Index/PLUMASTAR/marromclaro.png';
      el.style.backgroundColor = "#B7A285";
    }
    if (el.classList.contains("neon1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulbebe.png';
      imagem.src = '/img-Index/PLUMASTAR/neon.png';
      el.style.backgroundColor = "#EFFB75";
    }
    if (el.classList.contains("preta1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMASTAR/preta.png';
      el.style.backgroundColor = "black";
    }

    if (el.classList.contains("roxa1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMASTAR/roxa.png';
      el.style.backgroundColor = "#A973C9";
    }

    if (el.classList.contains("verdemilitar1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMASTAR/verdemilitar.png';
      el.style.backgroundColor = "#505141";
    }
    imagemSapato1.appendChild(imagem);
  }
});

document.addEventListener('click', (ev) => {
  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos1");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const et = ev.target;
  if (et.classList.contains("tamanhos1")) {
    et.style.backgroundColor = "#61A2B0";
  }

});
