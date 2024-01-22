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
  let select = document.getElementById("opcoes7");
  select.value = "---";
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
      imagem.src = '/PedeAlgodao/img-Index/PARAHOMENS/branca.png';
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

//PARTE QUE ARMAZENA NO SESSIONSTORAGE E MANDA
document.addEventListener('DOMContentLoaded', () => {
  let CorArray = [];
  let TamanhoArray = [];
  let QuantidadeArray = [];

  let indiceCores = sessionStorage.length;
  let indiceTamanhos = sessionStorage.length;
  let indiceOpcao = sessionStorage.length;
  // Lógica para definir valores no sessionStorage
  const definirValoresSessionStorage7 = () => {

    //COR
    const EscolhaCor = `cores_${indiceCores}`
    indiceCores++;
    sessionStorage.setItem(EscolhaCor, CorArray);

    //TAMANHO
    const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
    indiceTamanhos++;
    sessionStorage.setItem(EscolhaTamanho, TamanhoArray);

    //QUANTIDADE
    const EscolhaOpcao = `opcoes_${indiceOpcao}`;
    indiceOpcao++;
    sessionStorage.setItem(EscolhaOpcao, QuantidadeArray);


    //CORES
    const botaoModelos = document.querySelectorAll(".cores7");
    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        CorArray.push(corModelo)
      })
    })

    //TAMANHOS
    const botaoTamanhos = document.querySelectorAll(".tamanhos7");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        TamanhoArray.push(valorTamanho)
      })
    })

    //QUANTIDADE
    document.getElementById('opcoes7').addEventListener('change', function () {
      const opcaoEscolhida = this.value;
      QuantidadeArray.push(opcaoEscolhida)
    })
  }


  //----------------------------------------------------------------------------------------------------
  // Declare os índices fora da função para que eles não sejam redefinidos a cada chamada da função
  let indiceProduto = sessionStorage.length;
  let indiceValor = sessionStorage.length;
  const NomeValorProduto = () => {

    // Obtenha a referência do botão usando um seletor mais específico
    const botaoEnviar7 = document.querySelector(".concluir7");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar7) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar7.getAttribute('data-text8');
      const valor = parseFloat(botaoEnviar7.getAttribute('data-value8'));

      // Use o índice atual para criar chaves únicas no sessionStorage
      const TipoProduto = `escolhaProduto_${indiceProduto}`;
      const TipoProdutoValor = `escolhaProdutoValor_${indiceValor}`;

      // Incremente os índices para a próxima chamada da função
      indiceProduto++;
      indiceValor++;

      // Armazene os novos itens no sessionStorage
      sessionStorage.setItem(TipoProduto, produto);
      sessionStorage.setItem(TipoProdutoValor, valor);
    }
  };




  //-------------------------------------------------------------



  const concluirCompra7 = () => {
    //estrutura para usar a condição de obrigar escolher cor, tamanho e opção
    const coresSelecionadas = document.querySelector('.cores7:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos7:active');
    const opcaoSelecionada = document.getElementById('opcoes7').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/CARRINHO/comprasFeitas.html';

  }

  document.querySelector(".concluir7").addEventListener("click", () => {
    concluirCompra7();
    NomeValorProduto();
    definirValoresSessionStorage7();
  })
});

