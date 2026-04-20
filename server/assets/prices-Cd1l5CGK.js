import { T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { L as Link } from "./router-B8TbBoqR.js";
import { C as CallbackBar } from "./CallbackBar-dFFxK-V1.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const tables = [{
  title: "Cosmetic Dentistry",
  rows: [["Porcelain Veneer", "$450 USD", "Per Veneer"], ["Composite Veneer", "$250 USD", "Per Veneer"], ["Porcelain Crown", "$450 USD", "Per Crown"], ["Emax Porcelain Crown", "$450 USD", "Per Crown"], ["Zirconia Crown", "$450 USD", "Per Crown"], ["Teeth Whitening", "$150 USD", "Per Session"], ["Zoom Whitening", "$250 USD", "Per Session"], ["Teeth Bonding", "$250 USD", "Per Restoration"]]
}, {
  title: "Restorative Dentistry",
  rows: [["Regular Dental Implant", "$900 USD", "Per Implant"], ["Zirconia Dental Implant", "$1,950 USD", "Per Implant"], ["Mini Dental Implant", "$450 USD", "Per Implant"], ["Short Dental Implant", "$1,200 USD", "Per Implant"], ["All On 4 Implants", "$10,400 USD", "Per Arch"], ["3 On 6 Implants", "$13,000 USD", "Per Arch"], ["Snap On Dentures", "$6,760 USD", "Per Arch"], ["Root Canal", "$350 USD", "Per Tooth"], ["Amalgam Filling", "$60 USD", "Per CC"]]
}, {
  title: "All On 4 Variants",
  rows: [["All On 4 Fixed Hybrid", "$10,400 USD", "Per Arch"], ["Zirconia All On 4", "$11,000 USD", "Per Arch"], ["Nano Ceramic All On 4", "$12,400 USD", "Per Arch"]]
}];
function PricesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Treatment price list" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl leading-tight md:text-6xl", children: "Dental Prices in Puerto Vallarta" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: "Transparent, all-inclusive pricing. Save up to 50% compared to U.S. and Canadian rates." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-6xl py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: tables.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-2xl uppercase tracking-wide text-cream", children: t.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: t.rows.map(([name, price, unit]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-3 items-center gap-2 px-6 py-5 text-sm md:text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-1 font-medium text-foreground", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-display text-xl text-primary md:text-2xl", children: price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-xs uppercase tracking-widest text-muted-foreground", children: unit })
        ] }, name)) })
      ] }, t.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl bg-secondary p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-primary md:text-4xl", children: "Need a personalized treatment plan?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Send us your information for a free, no-obligation dental quote." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-primary-foreground transition hover:bg-primary-dark", children: "Get Your Free Quote" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallbackBar, {})
  ] });
}
export {
  PricesPage as component
};
