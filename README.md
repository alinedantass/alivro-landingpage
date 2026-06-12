# 📖 Alivro — Landing Page

> Landing page moderna e responsiva para a livraria com curadoria **Alivro**.


---

## ✨ Sobre o Projeto

A **Alivro** é uma livraria com curadoria literária localizada em Salvador, BA. Cada título do acervo é escolhido com intenção, não por algoritmo, não por tendência, mas por quem lê de verdade.

Esta landing page nasceu para traduzir essa identidade para o digital: apresentar a marca, exibir o catálogo por gênero e aproximar a livraria dos seus leitores.

O projeto foi construído com **HTML, CSS e JavaScript puros**, sem frameworks ou bibliotecas externas.

---

## 🖼️ Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação da marca com animações flutuantes em CSS puro |
| **Sobre** | Missão, valores e estatísticas da livraria |
| **Catálogo** | Grid de livros com filtro interativo por gênero |
| **Newsletter** | Captura de e-mails com feedback visual personalizado |
| **Contato** | Formulário + endereço, e-mail e WhatsApp |

---

## 🚀 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/alivro.git
cd alivro
```

### 2. Abra no navegador

Basta abrir o arquivo `index.html` diretamente no seu navegador:

```bash
# No terminal (macOS/Linux)
open index.html

# No Windows
start index.html
```

> Não é necessário servidor local — o projeto roda 100% no browser.

---

## 📁 Estrutura de Arquivos

```
alivro/
│
├── index.html      # Estrutura e conteúdo da página
├── style.css       # Estilos, layout e responsividade
├── script.js       # Interatividade e dados dos livros
└── README.md       # Este arquivo
```

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

## ✅ Funcionalidades implementadas

- [x] Navegação fixa com scroll effect e menu hamburguer mobile
- [x] Hero com animações flutuantes em CSS puro
- [x] Catálogo com 15 livros e filtro interativo por gênero
- [x] Animações de entrada com `IntersectionObserver`
- [x] Formulário de contato com feedback visual
- [x] Newsletter com confirmação personalizada
- [x] Rolagem suave para âncoras internas
- [x] Layout 100% responsivo — mobile, tablet e desktop

---

## 🔮 Próximas melhorias

- [ ] **Modo dark/light** — alternância de tema, usando variáveis CSS e `localStorage` para persistir a preferência do usuário
- [ ] **Capas reais dos livros** — integração com a [Open Library Covers API](https://covers.openlibrary.org) para exibir imagens reais a partir do ISBN de cada livro
- [ ] **Busca em tempo real** — campo de pesquisa que filtra o catálogo dinamicamente por título ou autor enquanto o usuário digita
- [ ] **Modal de detalhes do livro** — ao clicar no card, abrir um modal com sinopse, avaliação e botão de compra
- [ ] **Carrinho de compras** — adicionar livros ao carrinho com contador no header e resumo do pedido antes do checkout
- [ ] **Google Maps embed** — mapa interativo na seção de contato com a localização da loja em Salvador
- [ ] **Acessibilidade (a11y)** — revisão completa com foco em contraste, navegação por teclado e leitores de tela

---

## ✏️ Como adicionar livros

No `script.js`, insira um novo objeto no array `livros`:

```javascript
{
  titulo: "Nome do Livro",
  autor: "Nome do Autor",
  preco: "R$ 00,00",
  genero: "romance",   // romance | ficcao | policial | infantil | desenvolvimento
  emoji: "📖",
  cor: "#FFE0E0"
}
```
---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis, Grid, Flexbox, animações, media queries
- **JavaScript ES6** — DOM, eventos, IntersectionObserver
- **Google Fonts** — Playfair Display + DM Sans

---

## 📱 Responsividade

A página foi desenvolvida com abordagem **mobile-first** e possui breakpoints em:

- `480px` — Smartphones pequenos
- `768px` — Tablets e smartphones em landscape
- `1024px` — Notebooks e desktops
 
---

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Faça o commit: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um **Pull Request**

---

## 📄 Licença

MIT — livre para usar, estudar e modificar.

---

## 👩‍💻 Desenvolvido com 

código limpo e olhos de leitora.

---

> *"Um livro é um jardim que cabe no bolso."* — Charles-Augustin Sainte-Beuve
