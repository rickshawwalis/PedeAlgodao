document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.teste');

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



    if (
      escolhaProduto &&
      escolhaQuantidade &&
      escolhaCores &&
      escolhaTamanho &&
      !isNaN(escolhaValor)
    ) {
      let div = document.createElement('div');
      div.setAttribute("class", "mercadoria");
      div.innerHTML =
        `
            <br> PRODUTO: ${escolhaProduto}
            <br> VALOR: ${escolhaValor}
            <br> COR: ${escolhaCores}
            <br> TAMANHO: ${escolhaTamanho}
            <br> QUANTIDADE (PAR): ${escolhaQuantidade}
            `;
      container.appendChild(div);
    }
  }



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

