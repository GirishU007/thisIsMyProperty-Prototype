// Brand lock-up (logo mark + wordmark).
export function Brand() {
  return (
    <>
      <svg className="brand-mark">
        <use href="#i-logo" />
      </svg>
      <span className="brand-txt">
        <span className="brand-name">
          ThisIs<em>My</em>Property<span style={{ color: "var(--slate)" }}>.com</span>
        </span>
        <span className="brand-tag">Your home’s health at your fingertips.™</span>
      </span>
    </>
  );
}
