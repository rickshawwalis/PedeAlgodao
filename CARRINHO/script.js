document.addEventListener('DOMContentLoaded', () => {
    const nomeModelo = sessionStorage.getItem('nomeProduto');
    const valorModelo = sessionStorage.getItem('valorProduto');
    const cor = sessionStorage.getItem('escolhaCor');
    const tamanho = sessionStorage.getItem('escolhaTamanho');
    const quantidade = sessionStorage.getItem('opcaoQuantidade')
    // const quantidade

    document.querySelector('#nomeproduto').innerHTML = `
<span style="font-weight: bold;">PRODUTO: </span> ${nomeModelo} - <span style="font-weight: bold;"> VALOR R$</span> ${valorModelo}
    `;

    document.querySelector('#cor').innerHTML = `
    <span style="font-weight: bold;"> COR: </span> ${cor}
    `;

    document.querySelector('#tamanho').innerHTML = `
    <span style="font-weight: bold;">TAMANHO: </span> ${tamanho}
    `;

    document.querySelector('#quantidade').innerHTML = `
    <span style="font-weight: bold;"> QUANTIDADE: </span> ${quantidade}
    `
});
