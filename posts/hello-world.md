---
title: Examples of markup
---

Link to a post: [Agency in Markov Chains](/posts/res-agency) (normal MD link)

$$
S(\omega) 
= \frac{\alpha g^2}{\omega^5} e^{[ -0.74\bigl\{\frac{\omega U_\omega 19.5}{g}\bigr\}^{\!-4}\,]}
= \frac{\alpha g^2}{\omega^5} \exp\Bigl[ -0.74\Bigl\{\frac{\omega U_\omega 19.5}{g}\Bigr\}^{\!-4}\,\Bigr] 
$$

The formula

$$F[Q,y]\equiv D_x(Q(x)||P(y,x))=\mathbb{E}_{x\sim Q}(\ln Q(x)-\ln P(y,x))$$

defines the *free energy* $F[Q,y]$.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.

``` typescript
import rehypeHighlight from "rehype-highlight/lib";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkBehead from "remark-behead";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export function markdownToHtml(md: string, minDepth: number = 2): string {
  return unified()
    .use(remarkParse)
    .use(remarkBehead, { minDepth: minDepth } as any)
    .use(remarkMath)
    .use(remarkDirective)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(md)
    .toString();
}
```