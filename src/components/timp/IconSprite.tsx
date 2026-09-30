import { SPRITE_DEFS } from "./sprite";

// Renders the prototype's SVG sprite once so every <use href="#i-..."> resolves.
export function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SPRITE_DEFS }}
    />
  );
}
