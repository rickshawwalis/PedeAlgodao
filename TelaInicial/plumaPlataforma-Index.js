// PARTE PLUMA KIDS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar4 = () => {
    let adquirir = document.querySelector(".adquirir4");
    let mostrar = document.querySelector("#mostrarTudo4");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes4 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores4");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos4");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato3 = document.querySelector("#imagemSapato4");
    imagemSapato3.innerHTML = "";
}

//FECHAR
const cancelar4 = () => {
    let tituloA5 = document.querySelector(".tituloA5")
    let ocultar1 = document.querySelector(".cancelar4");
    let mostrar1 = document.querySelector("#mostrarTudo4");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA5.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes4()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato4 = document.querySelector("#imagemSapato4");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores4")) {
        const todosBotoes = document.querySelectorAll(".cores4");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato4.innerHTML = "";

        if (el.classList.contains("azulbebe4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/azulbebe.jpeg';
            el.style.backgroundColor = "#C5DFE0";
        }
        if (el.classList.contains("branca4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/branca.jpeg';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("neon4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/neon.jpeg';
            el.style.backgroundColor = "#DBEC46";
        }
        if (el.classList.contains("nude4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/nude.jpeg';
            el.style.backgroundColor = "#EACBB7";
        }
        if (el.classList.contains("preta4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/preta.jpeg';
            el.style.backgroundColor = "black";
        }
        if (el.classList.contains("rosa4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/rosa.jpeg';
            el.style.backgroundColor = "#F487B1";
        }
        if (el.classList.contains("rosaescuro4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/rosaescuro.jpeg';
            el.style.backgroundColor = "#FC789D";
        }
        if (el.classList.contains("roxo4")) {
            imagem.src = '/img-Index/PLUMAPLATAFORMA/roxo.jpeg';
            el.style.backgroundColor = "#C473DC";
        }

        imagemSapato4.appendChild(imagem);
    }
});

document.addEventListener('click', (ev) => {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos4");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const et = ev.target;
    if (et.classList.contains("tamanhos4")) {
        et.style.backgroundColor = "#61A2B0";
    }

});
