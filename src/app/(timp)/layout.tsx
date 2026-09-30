// Layout for the TIMP prototype screens (ported 1:1 from design-reference/).
// Everything TIMP renders inside .timp so its CSS stays scoped away from the
// shadcn/Tailwind pages (dashboard, properties, vault, forecast, settings, auth).
import "./timp.css";
import { IconSprite } from "@/components/timp/IconSprite";
import { PrototypeBehaviors } from "@/components/timp/PrototypeBehaviors";
import { ScreenIndex } from "@/components/timp/ScreenIndex";

export default function TimpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="timp">
      <IconSprite />
      {children}
      <ScreenIndex />
      <PrototypeBehaviors />
    </div>
  );
}
