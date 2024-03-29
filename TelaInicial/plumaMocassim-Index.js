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
     select.value = "---";
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
    const botaoModelos = document.querySelectorAll(".cores6");

    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        const EscolhaCor = `cores_${indiceCores}`;
        sessionStorage.setItem(EscolhaCor, corModelo);
         });
    });

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos6");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
        sessionStorage.setItem(EscolhaTamanho, valorTamanho);
      });
    });

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes6').addEventListener('change', function () {
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
    const botaoEnviar = document.querySelector(".concluir6");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar.getAttribute('data-text7');
      const valor = parseFloat(botaoEnviar.getAttribute('data-value7'));

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
    const coresSelecionadas = document.querySelector('.cores6:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos6:active');
    const opcaoSelecionada = document.getElementById('opcoes6').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/PedeAlgodao/compras/comprasFeitas.html';

  }
  definirValoresSessionStorage();
  document.querySelector(".concluir6").addEventListener("click", () => {
    concluirCompra();
    NomeValorProduto();

  })
});
