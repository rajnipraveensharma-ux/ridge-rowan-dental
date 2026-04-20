import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { C as CircleCheck } from "./circle-check-BbPYbHbY.js";
import { P as Phone, M as Mail, a as MapPin } from "./router-B8TbBoqR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Contact us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl leading-tight md:text-6xl", children: "Start your dental treatment today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: "You’re just a click away from changing your smile and your life." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-6xl py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-md md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-primary", children: "Request a free quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Tell us about your goals and we’ll respond within 24 hours." }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary", children: "Message sent!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Thank you. Our team will be in touch shortly." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 grid gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Name", name: "firstName", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Last Name", name: "lastName", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", name: "phone", type: "tel", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Treatment interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "treatment", className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a treatment…" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Dental Implants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All on 4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Porcelain Veneers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Composite Veneers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Teeth Whitening" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Crowns & Bridges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General Consultation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "How can we help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", required: true, className: "h-4 w-4 accent-primary" }),
            "I accept the privacy policy and consent to be contacted."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition hover:bg-primary-dark", children: "Send Message" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-secondary p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-primary", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Whether you’re flying in for a week or planning a longer stay — Ridge & Rowan makes your dental journey seamless from first contact to recovery." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, label: "Local", value: "+52 624 123 4567", href: "tel:+526241234567" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, label: "Toll-Free USA", value: "+1 877 555 4367", href: "tel:+18775554367" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, label: "Toll-Free Canada", value: "+1 844 555 4367", href: "tel:+18445554367" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, label: "Email", value: "hello@ridgeandrowandental.com", href: "mailto:hello@ridgeandrowandental.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MapPin, label: "Location", value: "Los Cabos, Baja California Sur, Mexico" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-card p-5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-primary", children: "Prefer to book online?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: "Use our AI booking concierge to find the perfect appointment slot based on your timing and treatment needs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/book", className: "mt-3 inline-flex rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary-dark", children: "Open AI Concierge →" })
        ] })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
  ] });
}
function ContactItem({
  icon: Icon,
  label,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: value })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "hover:text-primary", children: inner }) : inner });
}
export {
  ContactPage as component
};
