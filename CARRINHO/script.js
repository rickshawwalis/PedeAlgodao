document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.teste');

    for (let i = 0; i < sessionStorage.length; i++) {
        const chave = sessionStorage.key(i);
        const valor = sessionStorage.getItem(chave);
    
        let div = document.createElement('div');
        div.setAttribute("class", "mercadoria");
    
        // Exibir de forma diferente se a chave for relacionada a escolhaProduto
        if (chave.startsWith('escolhaProduto')) {
            const produtoInfo = JSON.parse(valor);
            div.textContent = `Produto: ${produtoInfo.produto}, Valor: ${produtoInfo.valor}`;
        } else {
            div.textContent = `Chave: ${chave}, Valor: ${valor}`;
        }
    
        container.appendChild(div);
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

