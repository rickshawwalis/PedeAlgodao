document.addEventListener('DOMContentLoaded', () => {
    const nomeModelo = sessionStorage.getItem('nomeProduto');
    const valorModelo = sessionStorage.getItem('valorProduto');
    const cor = sessionStorage.getItem('escolhaCor');
    const tamanho = sessionStorage.getItem('escolhaTamanho');
    const quantidade = sessionStorage.getItem('opcaoQuantidade')
    // const quantidade

    document.querySelector('#nomeproduto').innerHTML = `
    <strong> PRODUTO:</strong> ${nomeModelo}
    <br><strong>VALOR:</strong> R$ ${valorModelo}
    `;

    document.querySelector('#cor').innerHTML = `
    <strong> COR:</strong> ${cor}
    `;

    document.querySelector('#tamanho').innerHTML = `
    <strong>TAMANHO:</strong> ${tamanho}
    `;

    document.querySelector('#quantidade').innerHTML = `
    <strong> QUANTIDADE:</strong> ${quantidade}
    `
});
