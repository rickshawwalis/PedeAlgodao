// PARTE PLUMA NUVEM
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar = () => {
  let adquirir = document.querySelector(".adquirir");
  let mostrar = document.querySelector("#mostrarTudo");

  if (adquirir) {
    mostrar.style.display = 'block';
  }
  mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes = () => {
  const todosBotoesCores = document.querySelectorAll(".cores");
  todosBotoesCores.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  let imagemSapato = document.querySelector("#imagemSapato");
  imagemSapato.innerHTML = "";
}

//FECHAR
const cancelar = () => {
  let tituloA = document.querySelector(".tituloA")
  let ocultar = document.querySelector(".cancelar");
  let mostrar = document.querySelector("#mostrarTudo");
  if (ocultar) {
    mostrar.style.display = 'none';
  }
  tituloA.scrollIntoView({ behavior: 'smooth' })
  limparSelecoes()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
  const el = e.target;
  let imagem = document.createElement('img');
  imagem.setAttribute("id", "fotosImagem");
  let imagemSapato = document.querySelector("#imagemSapato");

  // Verifica se o elemento clicado é um botão de cor
  if (el.classList.contains("cores")) {
    const todosBotoes = document.querySelectorAll(".cores");
    todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });

    imagemSapato.innerHTML = "";

    if (el.classList.contains("bege")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/lilas.png';
      imagem.src = '/img-Index/PLUMANUVEM/lilas.png';
      el.style.backgroundColor = "#A87AA9";
    }
    if (el.classList.contains("preto")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/preta.png';
      imagem.src = '/img-Index/PLUMANUVEM/preta.png';
      el.style.backgroundColor = "black";
    }
    if (el.classList.contains("amareloouro")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/amareloouro.png';
      imagem.src = '/img-Index/PLUMANUVEM/amareloouro.png';
      el.style.backgroundColor = "#E0BA12";
    }
    if (el.classList.contains("laranja")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/laranja.png';
      imagem.src = '/img-Index/PLUMANUVEM/laranja.png';
      el.style.backgroundColor = "#C84F22";
    }
    if (el.classList.contains("rosabebe")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/rosa.png';
      imagem.src = '/img-Index/PLUMANUVEM/rosa.png';
      el.style.backgroundColor = "#E29EAD";
    }
    if (el.classList.contains("branco")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/branca.png';
      imagem.src = '/img-Index/PLUMANUVEM/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("azulmarinho")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulmarinho.png';
      imagem.src = '/img-Index/PLUMANUVEM/azulmarinho.png';
      el.style.backgroundColor = "#666F8C";
    }
    if (el.classList.contains("azulclaro")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulbebe.png';
      imagem.src = '/img-Index/PLUMANUVEM/azulbebe.png';
      el.style.backgroundColor = "#61A2B0";
    }
    if (el.classList.contains("verdemilitar")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMANUVEM/verdemilitar.png';
      el.style.backgroundColor = "#6F735C";
    }

    if (el.classList.contains("nude")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMANUVEM/nude.png';
      el.style.backgroundColor = "#E3C9B9";
    }

    if (el.classList.contains("neon")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/img-Index/PLUMANUVEM/neon.png';
      el.style.backgroundColor = "#BCE14F";
    }
    imagemSapato.appendChild(imagem);
    imagemSapato.scrollIntoView({ behavior: 'smooth' })
  }
});

document.addEventListener('click', (ev) => {
  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const et = ev.target;
  if (et.classList.contains("tamanhos")) {
    et.style.backgroundColor = "#61A2B0";
  }

});
