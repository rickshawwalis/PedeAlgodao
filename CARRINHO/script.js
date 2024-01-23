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
    const escolhaCores = JSON.parse(sessionStorage.getItem(chaveCores));
    const escolhaTamanho = JSON.parse(sessionStorage.getItem(chaveTamanho));
    const escolhaQuantidade = JSON.parse(sessionStorage.getItem(chaveQuantidade));


    // Exibir ACOMPANHAMENTOS---------------------------------------------------
  function formatarObjetoParaString(objeto) {
    return Array.isArray(objeto) ? formatarEscolhas(objeto) : JSON.stringify(objeto, null, 2);
  }

  function formatarEscolha(escolha) {
    return `${escolha.texto}: ${parseFloat(escolha.valor).toFixed(2)}`;
  }

  function formatarEscolhas(escolhas) {
    return escolhas.map(formatarEscolha).join('<br>');
  }

   // if (
    //    escolhaProduto &&
    //    escolhaQuantidade &&
    //    escolhaCores &&
    //    escolhaTamanho &&
    //    !isNaN(escolhaValor)
   //) {
        let div = document.createElement('div');
        div.setAttribute("class", "mercadoria");
        div.innerHTML =
            `
            <br> PRODUTO: ${formatarObjetoParaString(escolhaProduto)}
            <br> VALOR: ${formatarObjetoParaString(escolhaValor)}
            <br> CORES: ${formatarObjetoParaString(escolhaCores)}
            <br> TAMANHOS: ${formatarObjetoParaString(escolhaTamanho)}
            <br> QUANTIDADE: ${formatarObjetoParaString(escolhaQuantidade)}
            `;
        container.appendChild(div);
   // }
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

