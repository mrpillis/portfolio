// ── Node attribute explorer ──
// Definitions come from the talk. The node below is an illustrative example,
// not a record from the dataset: replace it with a real one when ready.
const ATTRS = {
  affective:  { def: "How positive or intense the memory attached to it is.", line: 2 },
  provenance: { def: "Who owned or used it, and during which period.", line: 3 },
  value:      { def: "Fragility and worth. Separates look-alike objects that aren't interchangeable.", line: 4 },
  habit:      { def: "Routines: where people sat, which door was really used.", line: 5 },
  temporal:   { def: "Which era of the room a memory refers to.", line: 6 },
};
const NODE = [
  'node: armchair_living_room',
  '  class:       "chair"',
  '  affective:   positive, high intensity',
  '  provenance:  "Grandma\'s chair"',
  '  value:       fragile',
  '  habitual:    "we don\'t use it anymore"',
  '  temporal:    earlier era of the room',
];
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
function showAttr(k) {
  document.getElementById("attr-def").textContent = ATTRS[k].def;
  document.getElementById("attr-node").innerHTML = NODE
    .map((l, i) => (i === ATTRS[k].line ? `<span class="on">${esc(l)}</span>` : esc(l)))
    .join("\n");
}

// ── Replay viewer ──
const CAPS = {
  walk:  "Eye level: an avatar re-executes a remembered path through the living room.",
  doll:  "Cutaway: the same replay seen from above the first floor.",
  floor: "An autonomous agent moving through the reconstructed first floor.",
  nav:   "Editor views of the agent with navigation overlays.",
};
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function showView(v) {
  document.querySelectorAll(".viewer-stage > *").forEach(el => {
    const on = el.dataset.v === v;
    el.hidden = !on;
    if (el.tagName === "VIDEO") on && !reduce ? el.play().catch(() => {}) : el.pause();
  });
  document.getElementById("viewer-cap").textContent = CAPS[v];
}

function wireTabs(list, key, fn) {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const pick = t => {
    tabs.forEach(b => b.setAttribute("aria-selected", b === t));
    fn(t.dataset[key]);
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => pick(t));
    t.addEventListener("keydown", e => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); pick(n);
    });
  });
}
wireTabs(document.querySelector(".attr-tabs"), "k", showAttr);
wireTabs(document.querySelector(".viewer-tabs"), "v", showView);
showAttr("affective");
showView("walk");

// Respect reduced motion: show posters with controls instead of autoplaying.
if (reduce) document.querySelectorAll("video").forEach(v => { v.pause(); v.removeAttribute("autoplay"); v.controls = true; });
