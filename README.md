# Kuhikugu

Resumo
- Projeto frontend em React + Vite (TypeScript) com componentes de UI focados em exibição de produtos (Carousel, Mosaic, etc.).
- Objetivo: componente reutilizáveis que consomem feeds estáticos (cards.json) para testes mas com pretensão de uso de APIs para retorno dos dados, com boas práticas de tipagem, validação e performance.

Principais funcionalidades
- Carousel com wrap-around, clones para transição suave e suporte a navegação por botões.
- Mosaic responsivo com imagens centralizadas, efeito "hero" (zoom/rotate) e overflow oculto.
- Cards carregados por JSON (src/components/*/Feed/cards.json) e possibilidade de migrar para chamadas API.

Tecnologias
- React + TypeScript
- Vite
- Tailwind CSS (estilos utilitários)
- react-icons

Estrutura (resumo importante)
- src/
  - components/
    - Carousel/
      - Carousel.tsx
      - Feed/cards.json
      - Feed/Images/Produtos/...
      - Utils/CarouselCard.tsx
    - Mosaic/
      - Mosaic.tsx
      - Feed/cards.json
      - Feed/Images/...
    - SwiperButtons/SwipersButtons.tsx
  - features/ (opcional por feature)
  - services/
    - api.ts (cliente HTTP centralizado) — recomendado
  - types/ (tipos e interfaces)
  - style/

Instalação e execução
1. Instalar dependências
   npm install
2. Rodar em desenvolvimento
   npm run dev
3. Build de produção
   npm run build
4. Servir build
   npm run preview

Scripts úteis (sugestão)
- dev: vite
- build: vite build
- preview: vite preview
- lint: eslint .
- type-check: tsc --noEmit src/*.tsx

Licença
- MIT
