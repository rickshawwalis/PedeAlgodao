document.addEventListener('DOMContentLoaded', () => {
    const nomeModelo = sessionStorage.getItem('nomeProduto');
    const valorModelo = sessionStorage.getItem('valorProduto');
    const cor = sessionStorage.getItem('escolhaCor');
    // const tamanho = sessionStorage.getItem('escolhaTamanho');
    // const quantidade

    document.querySelector('#nomeproduto').innerHTML = `
        PRODUTO: ${nomeModelo}
       <br> VALOR: R$ ${valorModelo}
    `;

    document.querySelector('#cor').innerHTML = `
        COR: ${cor}
    `;
});
