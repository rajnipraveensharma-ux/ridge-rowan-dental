import { T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { C as CallbackBar } from "./CallbackBar-dFFxK-V1.js";
import { S as Star } from "./star-C4Uko4wv.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-B8TbBoqR.js";
const reviews = [{
  name: "Betty L.",
  location: "California, USA",
  text: "I can't believe it's my smile! My confidence is back. I saved around $20 grand on my smile makeover at Ridge & Rowan. This is the place to go."
}, {
  name: "Mark D.",
  location: "Toronto, Canada",
  text: "Got All on 4 implants for both arches. The team was incredibly professional, the clinic is spotless and the result is beyond what I imagined. And I had a beach vacation too!"
}, {
  name: "Susan R.",
  location: "Texas, USA",
  text: "Eight porcelain veneers and a whitening session — flew home with the smile of my 20s. The price was a third of what my U.S. dentist quoted."
}, {
  name: "Helen P.",
  location: "Vancouver, Canada",
  text: "From the first call to the last appointment everything was seamless. Dr. Laurent speaks fluent English and French and explained every step clearly."
}, {
  name: "Joe M.",
  location: "Arizona, USA",
  text: "Two implants and a crown. Pain-free, modern equipment and a gorgeous clinic. Ridge & Rowan exceeded every expectation I had."
}, {
  name: "Caroline B.",
  location: "Florida, USA",
  text: "I was nervous about going to Mexico for dental work but Ridge & Rowan exceeded every expectation. Top-tier care and warm hospitality throughout."
}];
function ReviewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Patient stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl leading-tight md:text-6xl", children: "Real Reviews. Real Smiles." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-2 text-gold", children: [
        Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-6 w-6 fill-current" }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-primary-foreground/85", children: "4.9 average from 500+ patients" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-6xl py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl border border-border bg-card p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 font-display text-xl italic leading-relaxed text-foreground", children: [
        "“",
        r.text,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm uppercase tracking-widest text-muted-foreground", children: [
        "— ",
        r.name,
        " · ",
        r.location
      ] })
    ] }, r.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallbackBar, {})
  ] });
}
export {
  ReviewsPage as component
};
