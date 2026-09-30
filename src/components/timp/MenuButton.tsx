// Hamburger for the app drawer (mobile / iPad portrait). The prototype injected it as the
// first child of every .appbar; the click is handled by PrototypeBehaviors.
export function MenuButton() {
  return (
    <button className="menubtn" aria-label="Open navigation menu">
      <svg width="20" height="20">
        <use href="#i-menu" />
      </svg>
    </button>
  );
}
