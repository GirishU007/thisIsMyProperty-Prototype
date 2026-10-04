// Screen markup only. Styles are in src/app/prototype.css, click behaviour in
// src/components/proto/Behaviors.tsx.
import type { Metadata } from "next";
import { AppShell } from "@/components/proto/AppShell";

export const metadata: Metadata = { title: "To do" };

export default function Page() {
  return (
    <AppShell active="todo" title="To do" sub="Everything that needs you, most urgent first.">
      <div className="ux-sech">
        <h2>Overdue</h2>
        <span className="ct red" id="ct-over">1</span>
      </div>
      <div className="ux-card ux-tasks" id="grp-over">
        <div className="ux-task over" data-task="hvac">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-gear" />
            </svg>
          </span>
          <div className="tx">
            <b>HVAC service</b>
            <span>Yearly tune-up. Was due Aug 15, 2026.</span>
          </div>
          <span className="ux-tag red">28 days overdue</span>
          <button className="ux-btn pri sm" data-act="schedule" data-job="HVAC service">Schedule</button>
        </div>
      </div>
      <div className="ux-sech">
        <h2>Due soon</h2>
        <span className="ct">2</span>
      </div>
      <div className="ux-card ux-tasks">
        <div className="ux-task" data-task="roof">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-roof" />
            </svg>
          </span>
          <div className="tx">
            <b>Roof inspection</b>
            <span>It has been 11 months since the last one. Due Oct 1, 2026.</span>
          </div>
          <span className="ux-tag amber">Due in 19 days</span>
          <button className="ux-btn sec sm" data-act="schedule" data-job="Roof inspection">Schedule</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-recall" />
            </svg>
          </span>
          <div className="tx">
            <b>Water heater recall notice</b>
            <span>Rheem issued a recall for some models. Check if yours is affected.</span>
          </div>
          <span className="ux-tag amber">Recall</span>
          <button className="ux-btn sec sm" data-toast="Opens the recall notice with your model and serial number already matched.">View details</button>
        </div>
      </div>
      <div className="ux-sech">
        <h2>Later</h2>
        <span className="ct">2</span>
      </div>
      <div className="ux-card ux-tasks">
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-appliance" />
            </svg>
          </span>
          <div className="tx">
            <b>Plan for appliance replacement</b>
            <span>2 appliances are nearing the end of their typical life.</span>
          </div>
          <span className="ux-tag grey">No date</span>
          <button className="ux-btn sec sm" data-go="/app/health">Review</button>
        </div>
        <div className="ux-task">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-snow" />
            </svg>
          </span>
          <div className="tx">
            <b>Air filter replacement</b>
            <span>Due Dec 20, 2026.</span>
          </div>
          <span className="ux-tag grey">In 99 days</span>
          <button className="ux-btn sec sm" data-act="done-task">Mark done</button>
        </div>
      </div>
      <div className="ux-sech">
        <h2>Done</h2>
        <span className="ct" id="ct-done">1</span>
      </div>
      <div className="ux-card ux-tasks" id="grp-done">
        <div className="ux-task done">
          <span className="ic">
            <svg width="20" height="20">
              <use href="#i-check" />
            </svg>
          </span>
          <div className="tx">
            <b>Plumbing service</b>
            <span>Completed May 12, 2026. Receipt saved to the Vault.</span>
          </div>
          <span className="ux-tag green">Done</span>
        </div>
      </div>
      <div className="ux-note">
        <svg width="17" height="17">
          <use href="#i-bell" />
        </svg>
        {" "}
        <span>Reminders arrive by email and in the app.{" "}
          <a className="ux-link" data-toast="Notification settings: email, text message and in-app.">Change how you’re notified</a>
        </span>
      </div>
    </AppShell>
  );
}
