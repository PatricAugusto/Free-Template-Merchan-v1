# 🏺 Agência.M - Merchandising & Design SPA

Uma Single Page Application (SPA) moderna, minimalista e sofisticada, desenvolvida para uma agência de merchandising. O projeto utiliza o conceito de **Glassmorphism** (Efeito Vidro) para criar uma interface profunda e futurista.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com o ecossistema mais moderno do React:

* **React (Vite):** Ambiente de desenvolvimento ultra-rápido.
* **Styled Components:** Estilização baseada em CSS-in-JS para componentes dinâmicos e isolados.
* **Framer Motion:** Biblioteca robusta para animações de entrada e transições suaves.
* **CSS Moderno:** Uso de Grid Layout, Flexbox e `clamp()` para responsividade total.

## ✨ Funcionalidades Principais

* **Design Glassmorphism:** Temas de transparência e desfoque (`backdrop-filter`) aplicados em toda a interface.
* **Carrossel de Portfólio Infinito:** Galeria automática de projetos que roda continuamente via animações CSS.
* **Seções Animadas:** Efeitos de fade-in e escalonamento disparados conforme o scroll do usuário (Viewport Trigger).
* **Navegação Inteligente:** Header fixo com Scroll Suave (Smooth Scroll) e ajuste de offset para âncoras.
* **Responsividade Total:** Layout adaptável para dispositivos móveis, tablets e desktop.

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/agencia-m.git](https://github.com/seu-usuario/agencia-m.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Para gerar o build de produção:**
    ```bash
    npm run build
    ```

## 📂 Estrutura de Pastas

```text
src/
├── components/         # Componentes reutilizáveis (Hero, Portfolio, etc.)
├── styles/             # GlobalStyles e definições de tema Glass
├── assets/             # Imagens e recursos visuais
└── App.jsx             # Orquestrador das seções da SPA
```

### 🎨 Conceito Visual
O projeto foca na experiência do usuário através do minimalismo:

- Tipografia: Contraste entre pesos leves (200) e extra-negritos (800).

- Profundidade: Uso de esferas de vidro flutuantes no fundo da seção Hero.

- Interatividade: Botões e cards que reagem ao toque/hover com brilhos e elevações suaves.