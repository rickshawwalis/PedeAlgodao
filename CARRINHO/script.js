document.addEventListener('DOMContentLoaded', () => {
 
    const container = document.querySelector('.secao'); // Substitua 'seuContainer' pelo ID real do seu contêiner
    // Loop para criar uma div para cada conjunto de dados armazenados
    for (let i = 0; i < 15; i++) {
      let chaveProduto = `Produto${i}`;
      let chaveValor = `Valor${i}`;
    
      let texto = sessionStorage.getItem(chaveProduto);
      let valor = sessionStorage.getItem(chaveValor);
    
      let div = document.createElement('div');
      div.setAttribute("class","mercadoria")
      div.textContent = `Produto: ${texto}, Valor: ${valor}`;
    
      container.appendChild(div);
    }

    function enviarZap() {
        const textoParaEnviar = `
    *PRODUTO:* ${nomeModelo}
    *VALOR:* R$ ${valorModelo}
    *COR:* ${cor}
    *TAMANHO:* ${tamanho}
    *QUANTIDADE:* ${quantidade}
    `
        const codigoPais = '55';
        const numeroTelefone = '87991614277';

        const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
        window.open(linkWhatsApp, '_blank');
    }

    let botaoFinalizar = document.querySelector("#finalizar") //ativa o botão de enviar os dados via zap
    botaoFinalizar.addEventListener("click", enviarZap)
});

