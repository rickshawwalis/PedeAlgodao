document.addEventListener('DOMContentLoaded', () => {

        const container = document.querySelector('.teste');
    
        console.log("Total de itens no sessionStorage:", sessionStorage.length);
    
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
    
            console.log("Produto:", produto);
            console.log("Valor:", valor);
            console.log("Cores:", cores);
            console.log("Tamanhos:", tamanhos);
            console.log("Quantidade:", quantidade);
    
            if (produto !== null && !isNaN(valor)) {
                let div = document.createElement('div');
                div.setAttribute("class", "mercadoria");
                div.innerHTML =
                    `
                <br> PRODUTO: ${produto}
                <br> VALOR: ${valor.toFixed(2)}
                <br> CORES: ${cores !== null ? cores : 'N/A'}
                <br> TAMANHOS: ${tamanhos !== null ? tamanhos : 'N/A'}
                <br> QUANTIDADE: ${quantidade !== null ? quantidade : 'N/A'}
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

