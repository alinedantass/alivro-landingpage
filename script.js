let livros = [];

async function carregarLivros() {
  try {
    const resposta = await fetch("livros.json");
    livros = await resposta.json();
    renderizarLivros("todos");
  } catch (erro) {
    const grid = document.getElementById("livrosGrid");
    grid.innerHTML = "<p>Não foi possível carregar o catálogo. Tente novamente mais tarde.</p>";
  }
};

const generoLabel = {
  romance: "Romance",
  ficcao: "Ficção Científica",
  policial: "Policial",
  infantil: "Infantil",
  desenvolvimento: "Autoajuda"
};

function renderizarLivros(filtro) {
  const grid = document.getElementById("livrosGrid");
  grid.innerHTML = "";

  const listaFiltrada = filtro === "todos"
    ? livros
    : livros.filter((livro) => livro.genero === filtro);

  listaFiltrada.forEach((livro, index) => {
    const card = document.createElement("div");
    card.className = "livro-card";
    card.style.animationDelay = `${index * 0.05}s`;

 card.innerHTML = `
  <img
    class="livro-card__capa"
    src="https://covers.openlibrary.org/b/isbn/${livro.isbn}-M.jpg"
    alt="Capa do livro ${livro.titulo}"
    onerror="this.style.background='linear-gradient(135deg, ${livro.cor} 0%, #fff 100%)'; this.src=''; this.alt='Capa indisponível';"
  />
  <div class="livro-card__body">
        <span class="livro-card__genero genre-tag--${livro.genero}">
          ${generoLabel[livro.genero]}
        </span>
        <h3 class="livro-card__titulo">${livro.titulo}</h3>
        <p class="livro-card__autor">${livro.autor}</p>
        <p class="livro-card__preco">${livro.preco}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

function inicializarFiltros() {
  const botoes = document.querySelectorAll(".filtro-btn");

  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const genero = btn.getAttribute("data-genre");
      renderizarLivros(genero);
    });
  });
}

function inicializarNav() {
  const nav = document.getElementById("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

function inicializarMenuMobile() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  const links = document.querySelectorAll(".mobile-menu__link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function inicializarFadeIn() {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach((el) => observer.observe(el));
}

function inicializarFormContato() {
  const form = document.getElementById("contatoForm");
  const sucesso = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const botao = form.querySelector("button[type='submit']");
    botao.textContent = "Enviando...";
    botao.disabled = true;

    setTimeout(() => {
      form.reset();
      botao.textContent = "Enviar mensagem ✉️";
      botao.disabled = false;
      sucesso.classList.add("show");

      setTimeout(() => {
        sucesso.classList.remove("show");
      }, 5000);
    }, 1200);
  });
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function inicializarNewsletter() {
  const form = document.getElementById("newsletterForm");

  if (!form) return;

  const input = form.querySelector(".newsletter-input");
  const botao = form.querySelector(".btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = input.value.trim();

    if (!validarEmail(email)) {
      input.style.borderColor = "#E24B4A";
      input.placeholder = "Digite um e-mail válido";
      input.value = "";
      return;
    }

    input.style.borderColor = "";
    botao.textContent = "✅ Inscrito!";
    botao.disabled = true;
    input.value = "";
    input.placeholder = `Obrigado, ${email.split("@")[0]}! 🎉`;

    setTimeout(() => {
      botao.textContent = "Quero receber";
      botao.disabled = false;
      input.placeholder = "seu@email.com";
    }, 4000);
  });
}

function inicializarRolagemSuave() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      const destino = document.querySelector(id);

      if (destino) {
        event.preventDefault();
        const topo = destino.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topo, behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarLivros();
  inicializarFiltros();
  inicializarNav();
  inicializarMenuMobile();
  inicializarFadeIn();
  inicializarFormContato();
  inicializarNewsletter();
  inicializarRolagemSuave();
});