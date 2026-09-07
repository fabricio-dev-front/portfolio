# Padrões de Animação com `motion` (Framer Motion v12)

Snippets e padrões para manter animações suaves, elegantes e naturais em projetos Next.js.

---

## 1. Entrada Escalonada (Staggered Children)

Ideal para listas de projetos, stacks técnicas e timelines:

```tsx
"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
    },
  },
};

export function ProjectList({ items }: { items: string[] }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={itemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

---

## 2. Card Interativo com Hover Suave

Elevação sutil sem causar quebra de layout:

```tsx
<motion.div
  whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
  whileTap={{ scale: 0.99 }}
  className="cursor-pointer rounded-xl border border-white/10 bg-zinc-900/40 p-5"
>
  Conteúdo do card
</motion.div>
```

---

## 3. Fade In com Visibilidade no Viewport

Carrega a seção de forma elegante quando o usuário rolar a página:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Conteúdo da seção */}
</motion.div>
```
