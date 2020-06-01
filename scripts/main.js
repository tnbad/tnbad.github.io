let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}

// 
let meuBotao = document.querySelector('button'); // Criando variavel associada ao b"button" e definindo um valor pra mesma
let meuCabecalho = document.querySelector('h1'); // Criando variavel associada ao "h1"e definindo um valor pra mesma

// function defineNomeUsuario() { //criando uma função..
//     let meuNome = prompt('Por favor, digite seu nome.'); // variavel com valor definido pela função "prompt()" que cria uma caixa de dialogo para que o usuario entre com o dado.
//     localStorage.setItem('nome', meuNome);
//     meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
//   }

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }

