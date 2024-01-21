document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.teste');

    const escolhaProduto = [];
    const escolhaValor = [];
    const escolhaCores = [];
    const escolhaTamanho = [];
    const escolhaQuantidade = [];
    
    for (let i = 0; i < sessionStorage.length; i++) {
        const chaveProduto = `escolhaProduto_${i}`;
        const chaveValor = `escolhaProdutoValor_${i}`;
        const chaveCores = `cores_${i}`;
        const chaveTamanho = `tamanhos_${i}`;
        const chaveQuantidade = `opcoes_${i}`;
    
        escolhaProduto.push(sessionStorage.getItem(chaveProduto));
        escolhaValor.push(parseFloat(sessionStorage.getItem(chaveValor)));
        escolhaCores.push(sessionStorage.getItem(chaveCores));
        escolhaTamanho.push(sessionStorage.getItem(chaveTamanho));
        escolhaQuantidade.push(sessionStorage.getItem(chaveQuantidade));
    }
    
    // Inverter os arrays após o loop
    let Produto = escolhaProduto.reverse();
    let Valor = escolhaValor.reverse();
    let Cores = escolhaCores.reverse();
    let Tamanhos = escolhaTamanho.reverse();
    let Quantidade = escolhaQuantidade.reverse();
    
    // Verificar se há itens antes de exibir
    for (let i = 0; i < escolhaProduto.length; i++) {
        if (
            Produto[i] &&
            Cores[i] &&
            Tamanhos[i] &&
            Quantidade[i] &&
            !isNaN(Valor[i])
        ) {
            let div = document.createElement('div');
            div.setAttribute("class", "mercadoria");
            div.innerHTML =
                `
                <br> PRODUTO: ${Produto[i]}
                <br> VALOR: ${Valor[i]}
                <br> CORES: ${Cores[i]}
                <br> TAMANHOS: ${Tamanhos[i]}
                <br> QUANTIDADE: ${Quantidade[i]}
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

