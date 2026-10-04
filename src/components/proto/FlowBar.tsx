import Link from "next/link";
import { Brand } from "./Brand";

// Top bar of the sign-up and set-up screens: brand plus "Step n of 4".
export function FlowBar({ step, of = "4" }: { step?: string; of?: string }) {
  const n = step ? Number(step) : 0;
  const total = Number(of);
  return (
    <div className="ux-flowbar">
      <Link className="brand" href="/" aria-label="Back to the home page">
        <Brand />
      </Link>
      {n ? (
        <div className="ux-prog">
          <span>
            Step {n} of {total}
          </span>
          {Array.from({ length: total }, (_, i) => (
            <i key={i} className={i < n ? "on" : undefined}></i>
          ))}
        </div>
      ) : null}
    </div>
  );
}
