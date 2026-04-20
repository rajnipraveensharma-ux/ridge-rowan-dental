import { T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: `mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-[3.5rem] ${light ? "text-primary-foreground" : "text-primary"}`,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-4 text-base leading-relaxed md:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`,
        children: subtitle
      }
    )
  ] });
}
const implantImg = "/assets/implant-WddLTIJt.jpg";
export {
  SectionHeading as S,
  implantImg as i
};
