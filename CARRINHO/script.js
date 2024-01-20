document.addEventListener('DOMContentLoaded', () => {

        const container = document.querySelector('.teste');
      
        for (let i = 0; i < sessionStorage.length; i++) {
            const chaveProduto = `escolhaProduto_${i}`;
            const chaveValor = `escolhaProdutoValor_${i}`;
            const chaveCores = `cores_${i}`;
            const chaveTamanho = `tamanhos_${i}`;
            const chaveQuantidade = `opcoes_${i}`;
    
            console.log("Chave do produto:", chaveProduto);
    
            const produto = sessionStorage.getItem(chaveProduto);
            const valor = parseFloat(sessionStorage.getItem(chaveValor));
            const cores = sessionStorage.getItem(chaveCores);
            const tamanhos = sessionStorage.getItem(chaveTamanho);
            const quantidade = sessionStorage.getItem(chaveQuantidade);
        
            if (produto !== null && !isNaN(valor)) {
                let div = document.createElement('div');
                div.setAttribute("class", "mercadoria");
                div.innerHTML =
                    `
                <br> PRODUTO: ${produto}
                <br> VALOR: ${valor.toFixed(2)}
                <br> CORES: ${cores}
                <br> TAMANHOS: ${tamanhos}
                <br> QUANTIDADE: ${quantidade}
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

