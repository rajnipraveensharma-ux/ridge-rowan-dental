import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-C0wzGyr4.js";
import { c as createLucideIcon, L as Link } from "./router-B8TbBoqR.js";
import { S as Sparkles } from "./sparkles-DjU8Uolj.js";
import { C as CircleCheck } from "./circle-check-BbPYbHbY.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$2);
const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
const SERVICES = ["General Consultation", "Dental Implants", "All on 4 Implants", "Porcelain Veneers", "Composite Veneers", "Teeth Whitening / Zoom", "Crowns & Bridges", "Snap-on Dentures", "Root Canal", "Orthodontics / Aligners"];
const DENTISTS = ["No preference", "Dr. James Rowan — General & Cosmetic", "Dr. Marco Reyes — Implants & Prosthetics", "Dr. Elena Vega — Dental Surgery", "Dr. Isabelle Laurent — Orthodontics", "Dr. Sophia Chen — Endodontics"];
function BookPage() {
  const [aiService, setAiService] = reactExports.useState(SERVICES[0]);
  const [aiPreference, setAiPreference] = reactExports.useState("");
  const [aiLoading, setAiLoading] = reactExports.useState(false);
  const [aiSlot, setAiSlot] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    service: SERVICES[0],
    dentist: DENTISTS[0],
    name: "",
    email: "",
    phone: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleAiSubmit = async (e) => {
    e.preventDefault();
    setAiLoading(true);
    setAiSlot(null);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service: aiService,
          preference: aiPreference
        })
      });
      if (res.ok) {
        const data = await res.json();
        setAiSlot({
          ...data,
          service: aiService
        });
      } else {
        setAiSlot(localFallback(aiService, aiPreference));
      }
    } catch {
      setAiSlot(localFallback(aiService, aiPreference));
    } finally {
      setAiLoading(false);
    }
  };
  const reserveSlot = () => {
    if (!aiSlot) return;
    setForm((f) => ({
      ...f,
      service: aiSlot.service
    }));
    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " AI-Powered"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl leading-tight md:text-6xl", children: "Your Smart Booking Concierge" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: "Tell us your treatment and timing preferences — our AI finds the best available slot for you." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-6xl py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-gold/30 bg-card p-8 shadow-md md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-gold/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-primary", children: "AI Concierge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Smart slot recommendation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAiSubmit, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Treatment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: aiService, onChange: (e) => setAiService(e.target.value), className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Timing preference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: aiPreference, onChange: (e) => setAiPreference(e.target.value), rows: 3, placeholder: "e.g. morning next week, urgent pain, any weekend, arriving Tuesday…", className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: aiLoading, className: "flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary transition hover:brightness-95 disabled:opacity-60", children: aiLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
              "Finding best slot…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
              "Get AI Recommendation"
            ] }) })
          ] }),
          aiSlot && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-gold/30 bg-secondary p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-widest text-gold", children: "Recommended slot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mt-0.5 h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-primary", children: aiSlot.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-primary", children: aiSlot.time })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm italic text-muted-foreground", children: aiSlot.note }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reserveSlot, className: "mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-dark", children: [
              "Reserve this slot ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-secondary p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-primary", children: "How it works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: ["Tell the AI your treatment and timing preference", "It analyses current availability and recommends the best slot", "Click Reserve to pre-fill the booking form", "Submit — our team confirms within 2 hours"].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-gold", children: i + 1 }),
            step
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "booking-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-md md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-primary", children: "Confirm your appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Fill in your details and we’ll confirm your slot within 2 hours." }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary", children: "Booking received!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Our team will confirm your appointment within 2 hours via email or phone." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-4 rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition hover:bg-primary-dark", children: "Back to home" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleBookingSubmit, className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
              "Treatment ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.service, onChange: (e) => setForm((f) => ({
              ...f,
              service: e.target.value
            })), required: true, className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Preferred clinician" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.dentist, onChange: (e) => setForm((f) => ({
              ...f,
              dentist: e.target.value
            })), className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", children: DENTISTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: d }, d)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
              "Full name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.name, onChange: (e) => setForm((f) => ({
              ...f,
              name: e.target.value
            })), className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
                "Email ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => setForm((f) => ({
                ...f,
                email: e.target.value
              })), className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
                "Phone ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, value: form.phone, onChange: (e) => setForm((f) => ({
                ...f,
                phone: e.target.value
              })), className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
            ] })
          ] }),
          aiSlot && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gold/30 bg-secondary px-5 py-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-gold mb-1", children: "AI recommended slot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-primary", children: [
              aiSlot.date,
              " · ",
              aiSlot.time
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", required: true, className: "h-4 w-4 accent-primary" }),
            "I accept the privacy policy and consent to be contacted by Ridge & Rowan Dental."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 w-full rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition hover:bg-primary-dark", children: "Confirm Booking Request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
            "Our team confirms within 2 hours during clinic hours.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-gold hover:underline", children: "Prefer to call?" })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
function localFallback(service, preference) {
  const slots = {
    weekday: ["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM"],
    weekend: ["09:30 AM", "11:00 AM", "01:00 PM", "03:00 PM"]
  };
  const text = preference.toLowerCase();
  const urgent = /urgent|emergency|pain|asap/.test(text);
  const weekend = /weekend|saturday|sunday/.test(text);
  const offset = urgent ? 1 : weekend ? 3 : 2;
  const date = /* @__PURE__ */ new Date();
  date.setDate(date.getDate() + offset);
  const day = date.getDay();
  const available = day === 0 || day === 6 ? slots.weekend : slots.weekday;
  const time = /morning/.test(text) ? available[0] : /afternoon|pm/.test(text) ? available[available.length - 1] : available[1];
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  return {
    service,
    date: formattedDate,
    time,
    note: urgent ? "AI recommendation: earliest available clinic slot for urgent care." : "AI recommendation based on current availability and your timing preference."
  };
}
export {
  BookPage as component
};
