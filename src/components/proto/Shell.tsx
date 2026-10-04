import type { ReactNode } from "react";
import { IconSprite } from "./IconSprite";
import { Modals } from "./Modals";
import { Guide } from "./Guide";
import { Behaviors } from "./Behaviors";

// Everything every screen shares: the .timp scope for prototype.css, the icon sprite,
// the dialogs, the toast, the phone-drawer scrim, the guide button and the click behaviour.
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="timp">
      <IconSprite />
      {children}
      <Modals />
      <div className="navscrim"></div>
      <div className="ux-toast" id="toast" role="status" hidden></div>
      <Guide />
      <Behaviors />
    </div>
  );
}
