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

//FECHA
const cancelar = () => {
  let ocultar = document.querySelector(".cancelar");
  let mostrar = document.querySelector("#mostrarTudo");
  if (ocultar) {
    mostrar.style.display = 'none';
  }
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
      imagem.src = '/PedeAlgodao/img-Index/lilas.png';
      el.style.backgroundColor = "#A87AA9";
   }
    if (el.classList.contains("preto")) {
      imagem.src = '/PedeAlgodao/img-Index/preta.png';
      el.style.backgroundColor = "black";
    }
    if (el.classList.contains("amareloouro")) {
      imagem.src = '/PedeAlgodao/img-Index/amareloouro.png';
      el.style.backgroundColor = "#E0BA12";
    }
    if (el.classList.contains("laranja")) {
      imagem.src = '/PedeAlgodao/img-Index/laranja.png';
      el.style.backgroundColor = "#C84F22";
    }
    if (el.classList.contains("rosabebe")) {
      imagem.src = '/PedeAlgodao/img-Index/rosa.png';
      el.style.backgroundColor = "#E29EAD";
    }
    if (el.classList.contains("branco")) {
      imagem.src = '/PedeAlgodao/img-Index/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("azulmarinho")) {
      imagem.src = '/PedeAlgodao/img-Index/azulmarinho.png';
      el.style.backgroundColor = "#666F8C";
    }
    if (el.classList.contains("azulclaro")) {
      imagem.src = '/PedeAlgodao/img-Index/azulbebe.png';
      el.style.backgroundColor = "#61A2B0";
    }
    if (el.classList.contains("verdemilitar")) {
      imagem.src = '/PedeAlgodao/img-Index/verdemilitar.png';
      el.style.backgroundColor = "#6F735C";
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
