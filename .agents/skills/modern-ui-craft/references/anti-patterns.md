# Catálogo: Vícios Comuns de "Interface de IA" vs Soluções Humanas

Este guia contrasta padrões saturados e clichês de UI gerados por IA com alternativas elegantes, contemporâneas e profissionais.

---

## 1. O Título "Hero" Genérico

* **Vício de IA**:
  ```tsx
  // Evitar: Título com gradiente roxo-para-azul genérico, centralizado, sem variação de peso
  <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    Build the Future of Everything
  </h1>
  ```
* **Solução Profissional**:
  ```tsx
  // Recomendado: Tipografia precisa, tracking ajustado, contraste refinado
  <div className="space-y-4 text-left md:text-left">
    <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono tracking-wide rounded-full border border-white/10 bg-white/5 text-zinc-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      Disponível para novos projetos
    </div>
    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter text-zinc-100 max-w-2xl leading-[1.1]">
      Criando interfaces fluidas & sistemas robustos para a web.
    </h1>
  </div>
  ```

---

## 2. Cards e Efeitos de Superfície

* **Vício de IA**:
  - Cards com cantos excessivamente arredondados (`rounded-3xl`), sombra escura pesada (`shadow-2xl shadow-black`) e borda cinza opaca sem hierarquia.
* **Solução Profissional**:
  - Bordas semi-transparentes de 1px (`border border-white/10`), cantos balanceados (`rounded-xl` ou `rounded-2xl`), gradiente de superfície sutil e efeito de luz interna:
  ```tsx
  <div className="group relative rounded-xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60">
    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
      <span>01 / ARQUITETURA</span>
      <span className="group-hover:text-zinc-200 transition-colors">↗</span>
    </div>
    <h3 className="text-lg font-medium text-zinc-100 mb-2">Engenharia de Performance</h3>
    <p className="text-sm text-zinc-400 leading-relaxed">
      Estrutura pensada para Core Web Vitals impecáveis, transições aceleradas por hardware e zero gargalos de renderização.
    </p>
  </div>
  ```

---

## 3. Botões de Ação (CTA)

* **Vício de IA**:
  - Botão pill (`rounded-full`) com gradiente saturado `from-blue-600 to-indigo-600` e sombra colorida difusa.
* **Solução Profissional**:
  - Botão com peso sólido, microinteração de escala, contraste limpo e bordas refinadas:
  ```tsx
  <button className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-900 transition-all duration-200 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
    <span>Explorar Projetos</span>
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
  ```
