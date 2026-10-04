// One icon from the sprite in IconSprite.tsx.
export function Icon({ n, s = 18 }: { n: string; s?: number }) {
  return (
    <svg width={s} height={s}>
      <use href={`#i-${n}`} />
    </svg>
  );
}
