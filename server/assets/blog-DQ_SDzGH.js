import { T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { L as Link } from "./router-B8TbBoqR.js";
import { a as allOn4Img, v as veneersImg, s as smileImg } from "./smile-patient-d3jzavr9.js";
import { c as clinicImg } from "./clinic-tech-D-AQybv2.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const posts = [{
  img: allOn4Img,
  tag: "Implants",
  title: "Is All on 4 right for you? A complete guide",
  excerpt: "Everything you need to know about full-arch restoration with just four implants — candidacy, recovery and what to expect at Ridge & Rowan.",
  date: "Apr 2026"
}, {
  img: veneersImg,
  tag: "Cosmetic",
  title: "Porcelain vs composite veneers: which to choose",
  excerpt: "Both deliver beautiful smiles. Here's how cost, longevity and aesthetics compare so you can pick what fits your goals.",
  date: "Mar 2026"
}, {
  img: smileImg,
  tag: "Travel",
  title: "Dental tourism in Los Cabos: a step-by-step plan",
  excerpt: "From booking your consultation to packing for recovery on the beach — your friendly guide to a smooth dental trip to Cabo.",
  date: "Feb 2026"
}, {
  img: clinicImg,
  tag: "Technology",
  title: "How digital smile design works",
  excerpt: "See your future smile before treatment begins. We walk you through our 3D scanning and design workflow at Ridge & Rowan.",
  date: "Jan 2026"
}];
function BlogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Insights & guides" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl leading-tight md:text-6xl", children: "From the Ridge & Rowan Blog" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-7xl py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-10 md:grid-cols-2", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-3xl bg-card shadow-md transition hover:shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 1024, height: 768, loading: "lazy", className: "aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1 text-gold", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl text-primary md:text-3xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-5 inline-flex text-sm font-medium text-gold hover:underline", children: "Read more →" })
      ] })
    ] }, p.title)) }) })
  ] });
}
export {
  BlogPage as component
};
