import { T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { L as Link } from "./router-B8TbBoqR.js";
import { i as implantImg, S as SectionHeading } from "./implant-BTLw3fXj.js";
import { C as CallbackBar } from "./CallbackBar-dFFxK-V1.js";
import { a as allOn4Img, v as veneersImg, s as smileImg } from "./smile-patient-d3jzavr9.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const treatments = [{
  img: allOn4Img,
  title: "All on 4 Implants",
  desc: "Replace a full arch of teeth with just four titanium implants. Stable, natural-looking and life-changing — from $10,400 USD per arch."
}, {
  img: implantImg,
  title: "Dental Implants",
  desc: "Titanium, zirconia, mini and short implants performed by experienced surgeons. Lifetime smile restoration from $450 USD."
}, {
  img: veneersImg,
  title: "Porcelain Veneers",
  desc: "Hand-crafted porcelain veneers and lumineers for a natural, brilliant smile transformation — from $250 USD per tooth."
}, {
  img: smileImg,
  title: "Crowns & Bridges",
  desc: "Emax, porcelain and zirconia crowns. Strong, biocompatible and indistinguishable from natural teeth — $450 USD each."
}, {
  img: veneersImg,
  title: "Teeth Whitening",
  desc: "Professional in-office whitening and Zoom! treatments to brighten your smile by several shades in a single visit."
}, {
  img: implantImg,
  title: "Snap-on Dentures",
  desc: "Implant-supported dentures that snap securely in place — $6,760 USD per arch. Speak, eat and smile with confidence."
}];
function TreatmentsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Our services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl leading-tight md:text-6xl", children: "Dental Treatments in Puerto Vallarta" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: "From routine cleanings to full smile makeovers — performed by board-certified specialists using state-of-the-art technology." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-7xl py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: treatments.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-3xl bg-card shadow-md transition hover:shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.title, width: 1024, height: 1024, loading: "lazy", className: "aspect-[4/3] w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: t.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-5 inline-flex text-sm font-medium text-gold underline-offset-4 hover:underline", children: "Request a quote →" })
      ] })
    ] }, t.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What's included", title: "Every treatment, the Ridge & Rowan Dental way" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mx-auto mt-10 grid max-w-2xl gap-3 text-left", children: ["Free initial consultation and treatment plan", "Digital smile design preview", "All-inclusive pricing — no hidden costs", "English-speaking specialists and concierge", "Sterilization and safety protocols", "Travel and lodging recommendations"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-2xl bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-gold", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallbackBar, {})
  ] });
}
export {
  TreatmentsPage as component
};
