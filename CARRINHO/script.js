document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.conteudo');
  let somaTotal = 0;

  const Apagar = (ev) => {
    let excluir = document.createElement('button');
    excluir.setAttribute("class", "excluirItem");
    excluir.innerHTML = "REMOVER";
    ev.appendChild(excluir);
    
  };

  for (let i = 0; i < sessionStorage.length; i++) {
    const chaveProduto = `escolhaProduto_${i}`;
    const chaveValor = `escolhaProdutoValor_${i}`;
    const chaveCores = `cores_${i}`;
    const chaveTamanho = `tamanhos_${i}`;
    const chaveQuantidade = `opcoes_${i}`;

    const escolhaProduto = sessionStorage.getItem(chaveProduto);
    const escolhaValor = parseFloat(sessionStorage.getItem(chaveValor));
    const escolhaCores = sessionStorage.getItem(chaveCores);
    const escolhaTamanho = sessionStorage.getItem(chaveTamanho);
    const escolhaQuantidade = parseFloat(sessionStorage.getItem(chaveQuantidade));

    if (escolhaProduto && escolhaQuantidade && escolhaCores && escolhaTamanho && !isNaN(escolhaValor)) {
      somaTotal += escolhaValor * escolhaQuantidade;

      let div = document.createElement('div');
      div.setAttribute("class", "mercadoria");

      Apagar(container);
      div.innerHTML =
        `
            <br> <span style="font-weight: bold;">PRODUTO:</span> ${escolhaProduto}
            <br> <span style="font-weight: bold;">VALOR:</span> R$ ${escolhaValor.toFixed(2)}
            <br> <span style="font-weight: bold;">COR:</span> ${escolhaCores}
            <br> <span style="font-weight: bold;">TAMANHO:</span> ${escolhaTamanho}
            <br> <span style="font-weight: bold;">QUANTIDADE (PAR):</span> ${escolhaQuantidade}
                     `;

      container.appendChild(div);
    }
  }

  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('excluirItem')) {
      el.parentElement.remove();
    }
  });

  // Atualiza o valor total no documento
  document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR TOTAL:</span> R$ ${somaTotal.toFixed(2)}`;

















  //     function enviarZap() {
  //         const textoParaEnviar = `
  //     *PRODUTO:* ${nomeModelo}
  //     *VALOR:* R$ ${valorModelo}
  //     *COR:* ${cor}
  //     *TAMANHO:* ${tamanho}
  //     *QUANTIDADE:* ${quantidade}
  //     `
  //         const codigoPais = '55';
  //         const numeroTelefone = '87991614277';

  //         const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
  //         window.open(linkWhatsApp, '_blank');
  //     }

  //     let botaoFinalizar = document.querySelector("#finalizar") //ativa o botão de enviar os dados via zap
  //     botaoFinalizar.addEventListener("click", enviarZap)
});

