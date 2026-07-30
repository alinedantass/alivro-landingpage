# 📖 Alivro — Landing Page

> Landing page moderna e responsiva para a livraria com curadoria **Alivro** — onde *Ali* (de Aline) encontra *livro*.

---

## ✨ Sobre o Projeto

**Alivro** é uma livraria com curadoria literária fundada por Aline. O nome é um trocadilho inteligente: **Ali** (apelido da fundadora) + **livro** = Alivro. Onde Aline está, um livro sempre estará.

Esta landing page foi desenvolvida para apresentar a marca, exibir o catálogo por gênero e facilitar o contato com os leitores.

O projeto foi construído com **HTML, CSS e JavaScript puros**, sem nenhuma dependência de frameworks ou bibliotecas externas,ideal para quem está aprendendo desenvolvimento web.

---

## 🖼️ Demonstração

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação da marca com animações flutuantes |
| **Sobre** | História, missão e estatísticas da livraria |
| **Catálogo** | Grid de livros com filtro por gênero |
| **Newsletter** | Captura de e-mails com feedback visual |
| **Contato** | Formulário + informações de localização |

---

## 🚀 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/alivro.git
cd alivro
```

### 2. Rode com um servidor local

O projeto usa `fetch()` para carregar o catálogo de livros, então **precisa de um servidor local** — não funciona abrindo o arquivo direto no navegador.

No VS Code, instale a extensão **Live Server**. Depois, clique com o botão direito em `index.html` → **Open with Live Server**.
---

alivro/
│
├── index.html      # Estrutura HTML da página
├── style.css       # Todos os estilos e responsividade
├── script.js       # Interatividade e lógica do catálogo
├── livros.json     # Dados dos livros (título, autor, preço, ISBN)
└── README.md       # Este arquivo

---

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Coral | `#FF6B6B` | Destaque principal, botões, CTAs |
| Amarelo Quente | `#FFD93D` | Tags, acentos, destaques |
| Verde Sálvia | `#6BCB77` | Sucesso, badges, cards |
| Creme | `#FFF8F0` | Background principal |
| Marrom | `#3D1F0D` | Textos, footer |

---

## 🧩 Funcionalidades

- [x] **Navegação fixa** com efeito de scroll e menu hamburguer mobile
- [x] **Hero animado** com formas flutuantes em CSS puro
- [x] **Catálogo com filtros** por gênero (15 livros cadastrados)
- [x] **Animações de entrada** com `IntersectionObserver`
- [x] **Formulário de contato** com feedback visual de envio
- [x] **Newsletter** com confirmação personalizada
- [x] **Rolagem suave** para todas as âncoras internas
- [x] **100% responsivo** — mobile, tablet e desktop

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis CSS, Grid, Flexbox, animações, media queries
- **JavaScript (ES5/ES6)** — DOM manipulation, eventos, IntersectionObserver
- **Google Fonts** — Playfair Display + DM Sans

---

## 📱 Responsividade

A página foi desenvolvida com abordagem **mobile-first** e possui breakpoints em:

- `480px` — Smartphones pequenos
- `768px` — Tablets e smartphones em landscape
- `1024px` — Tablets grandes e notebooks

---

## ✏️ Como Adicionar Livros

Abra o arquivo `livros.json` e adicione um novo objeto na lista:

```json
{
  "titulo": "Nome do Livro",
  "autor": "Nome do Autor",
  "preco": "R$ 00,00",
  "genero": "romance",
  "isbn": "0000000000000",
  "cor": "#FFE0E0"
}
```

> O `isbn` é usado para buscar a capa real do livro via [Open Library](https://openlibrary.org/). O gênero aceita: `romance`, `ficcao`, `policial`, `infantil`, `desenvolvimento`.
---

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Faça o commit: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um **Pull Request**

---

## 👩‍💻 Desenvolvido por 

Aline Dantas

---

> *"Um livro é um jardim que cabe no bolso."* — Charles-Augustin Sainte-Beuve
