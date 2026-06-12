// =============================================
//  A LIVRO — script.js
//  Funcionalidades: nav scroll, filtros, catálogo, formulários, fade-in
// =============================================

// ---- DADOS DOS LIVROS ----
// Cada livro tem: titulo, autor, preco, genero, emoji (substitui foto)
var livros = [
  // Romance
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    preco: "R$ 39,90",
    genero: "romance",
    emoji: "💌",
    cor: "#FFE0E0"
  },
  {
    titulo: "A Culpa é das Estrelas",
    autor: "John Green",
    preco: "R$ 44,90",
    genero: "romance",
    emoji: "⭐",
    cor: "#FFD6E0"
  },
  {
    titulo: "Me Chame pelo Seu Nome",
    autor: "André Aciman",
    preco: "R$ 48,00",
    genero: "romance",
    emoji: "🌸",
    cor: "#FFDDE0"
  },

  // Ficção Científica
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    preco: "R$ 59,90",
    genero: "ficcao",
    emoji: "🪐",
    cor: "#E0EAFF"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    preco: "R$ 34,90",
    genero: "ficcao",
    emoji: "👁️",
    cor: "#D6E0FF"
  },
  {
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    preco: "R$ 42,00",
    genero: "ficcao",
    emoji: "🚀",
    cor: "#E0E8FF"
  },

  // Policial
  {
    titulo: "O Código da Vinci",
    autor: "Dan Brown",
    preco: "R$ 45,00",
    genero: "policial",
    emoji: "🔍",
    cor: "#E8E0FF"
  },
  {
    titulo: "Garota Exemplar",
    autor: "Gillian Flynn",
    preco: "R$ 46,90",
    genero: "policial",
    emoji: "🔪",
    cor: "#F0E0FF"
  },
  {
    titulo: "Os Dez Negrinhos",
    autor: "Agatha Christie",
    preco: "R$ 38,00",
    genero: "policial",
    emoji: "🕵️",
    cor: "#E8D6FF"
  },

  // Infantil
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    preco: "R$ 29,90",
    genero: "infantil",
    emoji: "🌹",
    cor: "#E0FFE4"
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    preco: "R$ 54,90",
    genero: "infantil",
    emoji: "🧙",
    cor: "#D6FFE0"
  },
  {
    titulo: "Matilda",
    autor: "Roald Dahl",
    preco: "R$ 36,90",
    genero: "infantil",
    emoji: "📚",
    cor: "#E0FFE8"
  },

  // Autoajuda / Desenvolvimento
  {
    titulo: "O Poder do Hábito",
    autor: "Charles Duhigg",
    preco: "R$ 49,90",
    genero: "desenvolvimento",
    emoji: "💪",
    cor: "#FFF3CD"
  },
  {
    titulo: "Mindset",
    autor: "Carol S. Dweck",
    preco: "R$ 44,00",
    genero: "desenvolvimento",
    emoji: "🧠",
    cor: "#FFF0C0"
  },
  {
    titulo: "Essencialismo",
    autor: "Greg McKeown",
    preco: "R$ 47,90",
    genero: "desenvolvimento",
    emoji: "✨",
    cor: "#FFF5D0"
  }
];

// Mapeamento de rótulos dos gêneros
var generoLabel = {
  romance:        "Romance",
  ficcao:         "Ficção Científica",
  policial:       "Policial",
  infantil:       "Infantil",
  desenvolvimento:"Autoajuda"
};

// ---- RENDERIZAR LIVROS ----
function renderizarLivros(filtro) {
  var grid = document.getElementById("livrosGrid");
  grid.innerHTML = ""; // Limpa o grid

  // Filtra a lista
  var listaFiltrada = filtro === "todos"
    ? livros
    : livros.filter(function(livro) { return livro.genero === filtro; });

  // Cria o card de cada livro
  listaFiltrada.forEach(function(livro, index) {
    var card = document.createElement("div");
    card.className = "livro-card";
    card.style.animationDelay = (index * 0.05) + "s";

    // Monta o HTML do card
    card.innerHTML =
      '<div class="livro-card__capa-placeholder" style="background: linear-gradient(135deg, ' + livro.cor + ' 0%, #fff 100%);">' +
        '<span style="font-size: 5rem;">' + livro.emoji + '</span>' +
      '</div>' +
      '<div class="livro-card__body">' +
        '<span class="livro-card__genero genre-tag--' + livro.genero + '">' +
          generoLabel[livro.genero] +
        '</span>' +
        '<h3 class="livro-card__titulo">' + livro.titulo + '</h3>' +
        '<p class="livro-card__autor">' + livro.autor + '</p>' +
        '<p class="livro-card__preco">' + livro.preco + '</p>' +
      '</div>';

    grid.appendChild(card);
  });
}

// ---- FILTROS ----
function inicializarFiltros() {
  var botoes = document.querySelectorAll(".filtro-btn");

  botoes.forEach(function(btn) {
    btn.addEventListener("click", function() {
      // Remove a classe "active" de todos
      botoes.forEach(function(b) { b.classList.remove("active"); });

      // Adiciona "active" no botão clicado
      btn.classList.add("active");

      // Renderiza com o filtro selecionado
      var genero = btn.getAttribute("data-genre");
      renderizarLivros(genero);
    });
  });
}

// ---- NAVEGAÇÃO: SCROLL EFFECT ----
function inicializarNav() {
  var nav = document.getElementById("nav");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// ---- MENU MOBILE ----
function inicializarMenuMobile() {
  var toggle = document.getElementById("navToggle");
  var menu   = document.getElementById("mobileMenu");

  toggle.addEventListener("click", function() {
    menu.classList.toggle("open");
  });

  // Fecha o menu ao clicar em um link
  var links = document.querySelectorAll(".mobile-menu__link");
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      menu.classList.remove("open");
    });
  });
}

// ---- FADE-IN NO SCROLL ----
function inicializarFadeIn() {
  var elementos = document.querySelectorAll(".fade-in");

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Para de observar depois de aparecer
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(function(el) { observer.observe(el); });
}

// ---- FORMULÁRIO DE CONTATO ----
function inicializarFormContato() {
  var form = document.getElementById("contatoForm");
  var sucesso = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio real

    // Simula envio com delay
    var botao = form.querySelector("button[type='submit']");
    botao.textContent = "Enviando...";
    botao.disabled = true;

    setTimeout(function() {
      form.reset();
      botao.textContent = "Enviar mensagem ✉️";
      botao.disabled = false;
      sucesso.classList.add("show");

      // Esconde a mensagem de sucesso após 5s
      setTimeout(function() {
        sucesso.classList.remove("show");
      }, 5000);
    }, 1200);
  });
}

// ---- NEWSLETTER ----
function inicializarNewsletter() {
  var form = document.getElementById("newsletterForm");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var input  = form.querySelector(".newsletter-input");
    var botao  = form.querySelector(".btn");
    var emailDigitado = input.value;

    botao.textContent = "✅ Inscrito!";
    botao.disabled = true;
    input.value = "";
    input.placeholder = "Obrigado, " + emailDigitado.split("@")[0] + "! 🎉";

    setTimeout(function() {
      botao.textContent = "Quero receber";
      botao.disabled = false;
      input.placeholder = "seu@email.com";
    }, 4000);
  });
}

// ---- ROLAGEM SUAVE PARA LINKS INTERNOS ----
function inicializarRolagemSuave() {
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      var id = link.getAttribute("href");
      var destino = document.querySelector(id);

      if (destino) {
        event.preventDefault();
        var topo = destino.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topo, behavior: "smooth" });
      }
    });
  });
}

// ---- INICIALIZAR TUDO ----
document.addEventListener("DOMContentLoaded", function() {
  renderizarLivros("todos");     // Exibe todos os livros ao carregar
  inicializarFiltros();          // Botões de gênero
  inicializarNav();              // Efeito de scroll na nav
  inicializarMenuMobile();       // Menu hamburguer
  inicializarFadeIn();           // Animações de entrada
  inicializarFormContato();      // Formulário de contato
  inicializarNewsletter();       // Newsletter
  inicializarRolagemSuave();     // Links suaves
});
