---
name: modern-ui-craft
description: >-
  Use esta skill sempre que for criar, prototipar, refatorar ou revisar interfaces de usuário (UI/UX),
  layouts, componentes e animações no frontend. Garante um design moderno, autoral, com acabamento
  premium e sem vícios genéricos de "interface gerada por IA".
---

# Modern UI Craft: Diretrizes de Design & Frontend Diferenciado

Esta skill define princípios, técnicas e padrões práticos para construir interfaces web que transmitam excelência de design, refinamento e personalidade autoral, evitando atalhos genéricos comuns em código gerado por IA.

---

## 1. O Manifesto "Anti-AI Look"

A maioria dos designs gerados por inteligência artificial sofre de repetição de clichês visuais:
- **EVITE**: Títulos centralizados obrigatórios com gradiente roxo/azul sobre fundo preto chapado.
- **EVITE**: Bento grids genéricos idênticos onde cada card tem exatamente o mesmo visual e um ícone flutuante sem contexto.
- **EVITE**: Overdose de borrões de luz colorida (`blur-[120px]`) sem função estrutural.
- **EVITE**: Bordas exageradas e arredondamentos genéricos (`rounded-3xl` em tudo sem hierarquia).

### Em vez disso, aplique:
1. **Tipografia com Personalidade Editorial**:
   - Ajuste o tracking em títulos com `tracking-tight` ou `tracking-tighter`.
   - Crie contraste evidente de escala: títulos expressivos e textos auxiliares refinados (`text-xs` ou `text-sm` com `text-muted-foreground`/cinza calibrado).
   - Use fontes monoespaçadas com propósito (ex: tags de versão, contadores, datas, detalhes técnicos).

2. **Hierarquia de Superfícies e Profundidade**:
   - Elevação sutil através de bordas com opacidade controlada (`border-white/10` no escuro, `border-black/5` no claro) em vez de sombras pesadas e difusas.
   - Texturas discretas: ruído sutil (grain), grid de pontos finos (`radial-gradient`), ou linhas de corte sutis de 1px.
   - Camadas com `backdrop-blur-md` e transparências calibradas para dar sensação física de vidro polido.

3. **Cores e Acentos com Propósito**:
   - Mantenha a base monocromática rica (tons de cinza com temperatura neutra, ardósia ou grafite).
   - Escolha **um único tom de destaque memorável** ou paleta de alto contraste (ex: âmbar/cobre elétrico, verde menta néon sutil, esmeralda, ciano profundo ou prateado luminoso).

---

## 2. Microinterações e Animações (Motion / Framer Motion)

Em projetos com Next.js e biblioteca `motion`, o movimento deve ser elegante e nunca distrativo:

1. **Física de Molas (Springs)**:
   - Evite animações lineares duras. Prefira transições baseadas em `type: "spring"`, `stiffness: 260`, `damping: 20`.
2. **Entradas Escalonadas (Staggering)**:
   - Itens de listas ou grids não devem brotar ao mesmo tempo. Use atrasos progressivos (`staggerChildren: 0.08`).
3. **Feedback Tátil ao Interagir**:
   - Botões e cards devem reagir com suavidade: `whileHover={{ y: -2 }}`, `whileTap={{ scale: 0.98 }}`.
   - Transições de foco e hover claras e acessíveis (`transition-colors duration-200`).

Consulte [motion-patterns.md](./references/motion-patterns.md) para snippets reutilizáveis.

---

## 3. Checklist de Excelência para Componentes

Antes de concluir qualquer componente de interface:
- [ ] **Responsividade**: Funciona perfeitamente de 320px a 1440px+ sem quebras de layout ou overflow horizontal.
- [ ] **Dark Mode & Contraste**: O contraste de texto atende às normas WCAG AA em ambos os temas.
- [ ] **Estados Interativos**: Possui estados visíveis para `:hover`, `:focus-visible`, `:active` e `disabled`.
- [ ] **Semântica HTML**: Usa tags semânticas corretas (`<main>`, `<article>`, `<section>`, `<nav>`, `<button>`).
- [ ] **Performance**: Não causa layout shifts (CLS) e utiliza propriedades aceleradas por GPU (`transform`, `opacity`).

Consulte [anti-patterns.md](./references/anti-patterns.md) para o catálogo completo de vícios a evitar e alternativas recomendadas.
