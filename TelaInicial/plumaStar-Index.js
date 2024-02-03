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

  //limpar opção de quantidade escolhida
  let select = document.getElementById("opcoes1");
  select.value = "---";
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
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/azul.png';
      el.style.backgroundColor = "#1845A2";
    }
    if (el.classList.contains("azulmarinho1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/preta.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/azulmarinho.png';
      el.style.backgroundColor = "#313549";
    }
    if (el.classList.contains("branca1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/laranja.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("laranja1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/rosa.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/laranja.png';
      el.style.backgroundColor = "#FC9F5B";
    }
    if (el.classList.contains("marrom1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/branca.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/marrom.png';
      el.style.backgroundColor = "#888063";
    }
    if (el.classList.contains("marromclaro1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulmarinho.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/marromclaro.png';
      el.style.backgroundColor = "#B7A285";
    }
    if (el.classList.contains("neon1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulbebe.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/neon.png';
      el.style.backgroundColor = "#EFFB75";
    }
    if (el.classList.contains("preta1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/preta.png';
      el.style.backgroundColor = "black";
    }

    if (el.classList.contains("lanvada1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/lavanda.png';
      el.style.backgroundColor = "#A973C9";
    }

    if (el.classList.contains("verdemilitar1")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMASTAR/verdemilitar.png';
      el.style.backgroundColor = "#505141";
    }
    imagemSapato1.appendChild(imagem);
  }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
  const et = ev.target;

  if (et.classList.contains("tamanhos1")) {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos1");

    todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });
    // Define a cor apenas para o botão clicado
    et.style.backgroundColor = "#61A2B0";
  }
});

 //-------------------------------------------------------------
//PARTE QUE ARMAZENA NO SESSIONSTORAGE E MANDA
document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de índices fora da função
  let indiceCores = sessionStorage.length;
  let indiceTamanhos = sessionStorage.length;
  let indiceOpcao = sessionStorage.length;

  // Lógica para definir valores no sessionStorage
  const definirValoresSessionStorage = () => {
    // Ouvinte de evento para os botões de modelos (cores)
    const botaoModelos = document.querySelectorAll(".cores1");

    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        const EscolhaCor = `cores_${indiceCores}`;
        sessionStorage.setItem(EscolhaCor, corModelo);
         });
    });

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos1");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
        sessionStorage.setItem(EscolhaTamanho, valorTamanho);
      });
    });

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes1').addEventListener('change', function () {
      const opcaoEscolhida = this.value;
      const EscolhaOpcao = `opcoes_${indiceOpcao}`;
      sessionStorage.setItem(EscolhaOpcao, opcaoEscolhida);
    });
  };

  //----------------------------------------------------------------------------------------------------
  // Declare os índices fora da função para que eles não sejam redefinidos a cada chamada da função
  let indiceProduto = sessionStorage.length;
  let indiceValor = sessionStorage.length;
  const NomeValorProduto = () => {

    // Obtenha a referência do botão usando um seletor mais específico
    const botaoEnviar = document.querySelector(".concluir1");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar.getAttribute('data-text2');
      const valor = parseFloat(botaoEnviar.getAttribute('data-value2'));

      // Use o índice atual para criar chaves únicas no sessionStorage
      const TipoProduto = `escolhaProduto_${indiceProduto}`;
      const TipoProdutoValor = `escolhaProdutoValor_${indiceValor}`;

      // Armazene os novos itens no sessionStorage
      sessionStorage.setItem(TipoProduto, produto);
      sessionStorage.setItem(TipoProdutoValor, valor);
    }
  };




  //-------------------------------------------------------------



  const concluirCompra = () => {
    //estrutura para usar a condição de obrigar escolher cor, tamanho e opção
    const coresSelecionadas = document.querySelector('.cores1:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos1:active');
    const opcaoSelecionada = document.getElementById('opcoes1').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/lancamentos/compras/comprasFeitas.html';

  }
  definirValoresSessionStorage();
  document.querySelector(".concluir1").addEventListener("click", () => {
    concluirCompra();
    NomeValorProduto();

  })
});
