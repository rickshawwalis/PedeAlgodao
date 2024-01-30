document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.conteudo');
  let somaTotal = 0;
  
  const Apagar = (div, chaveProduto, chaveValor, chaveCores, chaveTamanho,chaveQuantidade) => {
    let excluir = document.createElement('button');
    excluir.setAttribute("class", "excluirItem");
    excluir.innerHTML = "REMOVER";
    div.appendChild(excluir);
  
    excluir.addEventListener('click', function () {
      container.removeChild(div); // Remove a div que contém o botão
      removerSessionStorage(chaveProduto, chaveValor, chaveCores, chaveTamanho,chaveQuantidade); // Chama a função para remover do sessionStorage
    });
  };
  
  const removerSessionStorage = (chaveProduto, chaveValor, chaveCores, chaveTamanho,chaveQuantidade) => {
    sessionStorage.removeItem(chaveProduto);
    sessionStorage.removeItem(chaveValor);
    sessionStorage.removeItem(chaveCores);
    sessionStorage.removeItem(chaveTamanho);
    sessionStorage.removeItem(chaveQuantidade);
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
  
      const soma = escolhaValor * escolhaQuantidade
  
      div.innerHTML =
        `
          <br><br> <span style="font-weight: bold;">PRODUTO:</span> ${escolhaProduto}
          <br> <span style="font-weight: bold;">VALOR UNITÁRIO:</span> R$ ${escolhaValor.toFixed(2)}
          <br> <span style="font-weight: bold;">COR:</span> ${escolhaCores}
          <br> <span style="font-weight: bold;">TAMANHO:</span> ${escolhaTamanho}
          <br> <span style="font-weight: bold;">QUANTIDADE (PAR):</span> ${escolhaQuantidade}
          <br><br> <span style="font-weight: bold;">VALOR TOTAL: R$ </span> ${soma.toFixed(2)}
        `;
  
      container.appendChild(div);
  
      Apagar(div, chaveProduto, chaveValor, chaveCores, chaveTamanho,chaveQuantidade); // Passa a chave correspondente ao item do sessionStorage para a função Apagar
    }
  }
  

  // Atualiza o valor total no documento
  document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR TOTAL GERAL:</span> R$ ${somaTotal.toFixed(2)}`;
















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

