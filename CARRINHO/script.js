document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.teste');

    for (let i = 0; i < sessionStorage.length; i++) {
        const TipoProduto = `escolhaProduto_${i}`;
        const TipoProdutoValor = `escolhaProdutoValor_${i}`;
    
        // Obter os valores associados a essas chaves
        const produto = sessionStorage.getItem(TipoProduto);
        const valor = parseFloat(sessionStorage.getItem(TipoProdutoValor));
    
        // Verificar se produto e valor são válidos
        if (produto !== null && !isNaN(valor)) {
            // Criar uma div para cada produto e valor
            let div = document.createElement('div');
            div.setAttribute("class", "mercadoria");
            // Adicionar o conteúdo da div
            div.innerHTML = 
            `<br> Produto: ${produto}
            <br> Valor: ${valor.toFixed(2)}`;
            // Adicionar a div ao container
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

