// The three dialogs of the prototype. They stay in the page, hidden; Behaviors.tsx opens and resets them.
export function Modals() {
  return (
    <>
      <div hidden data-modal="schedule">
        <div className="ux-modal" role="dialog" aria-modal="true">
          <div className="ux-sheet ux">
            <button className="x" data-act="close-modal" aria-label="Close">
              <svg width="20" height="20">
                <use href="#i-x" />
              </svg>
            </button>
            <div id="sch-1">
              <h2>Schedule:{" "}
                <span data-jobname>HVAC service</span>
              </h2>
              <p className="sub">Pick a recommended pro and a time that suits you.</p>
              <div style={{ marginTop: "14px" }} id="sch-pros">
                <button className="ux-pro pick is-on">
                  <span className="av hpav0"></span>
                  <div>
                    <b>Cool Air Solutions</b>
                    <span>4.9 · serviced this home in May · from $185</span>
                  </div>
                  <span className="rad"></span>
                </button>
                <button className="ux-pro pick">
                  <span className="av hpav1"></span>
                  <div>
                    <b>Gulf Coast Comfort</b>
                    <span>4.8 · 147 jobs nearby · from $170</span>
                  </div>
                  <span className="rad"></span>
                </button>
                <button className="ux-pro pick">
                  <span className="av hpav2"></span>
                  <div>
                    <b>Sunline Home Services</b>
                    <span>4.7 · 96 jobs nearby · from $160</span>
                  </div>
                  <span className="rad"></span>
                </button>
              </div>
              <div className="ux-eyebrow" style={{ color: "var(--slate)", marginTop: "14px" }}>When</div>
              <div className="ux-times" id="sch-times">
                <button className="ux-chip is-on">Tue, Oct 6 · morning</button>
                <button className="ux-chip">Wed, Oct 7 · afternoon</button>
                <button className="ux-chip">Fri, Oct 9 · morning</button>
              </div>
              <div className="foot">
                <button className="ux-btn sec" data-act="close-modal">Cancel</button>
                <button className="ux-btn pri" data-act="sch-send">Send request</button>
              </div>
            </div>
            <div id="sch-2" hidden>
              <div className="ux-ok">
                <div className="tick">
                  <svg width="30" height="30">
                    <use href="#i-check" />
                  </svg>
                </div>
                <h2>Request sent</h2>
                <p className="sub">
                  <span data-proname>Cool Air Solutions</span>{" "}will confirm{" "}
                  <span data-timename>Tue, Oct 6, morning</span>. We’ll remind you the day before and file the receipt in your Vault afterwards.</p>
              </div>
              <div className="foot">
                <button className="ux-btn pri" data-act="close-modal">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div hidden data-modal="add">
        <div className="ux-modal" role="dialog" aria-modal="true">
          <div className="ux-sheet ux">
            <button className="x" data-act="close-modal" aria-label="Close">
              <svg width="20" height="20">
                <use href="#i-x" />
              </svg>
            </button>
            <div id="add-1">
              <h2>Add to your home’s record</h2>
              <p className="sub">Upload anything. We work out what it is.</p>
              <div className="ux-drop">
                <svg width="34" height="34">
                  <use href="#i-cloud" />
                </svg>
                <b>Drop a file here, or take a photo</b>
                <span>Receipts, warranties, manuals, permits, inspections</span>
                <button className="ux-btn pri" data-act="add-upload">Choose a file</button>
              </div>
              <a className="ux-link ux-skip" data-toast="Opens a short form: type, system, date, amount.">No document? Enter the details by hand</a>
            </div>
            <div id="add-2" hidden>
              <h2>Is this right?</h2>
              <p className="sub">We read your document. Change anything that’s off.</p>
              <div className="ux-read">
                <div className="h">
                  <svg width="18" height="18">
                    <use href="#i-doc" />
                  </svg>{" "}gutter-cleaning-receipt.jpg</div>
                <dl>
                  <dt>Type</dt>
                  <dd>Maintenance receipt</dd>
                  <dt>System</dt>
                  <dd>Exterior</dd>
                  <dt>Vendor</dt>
                  <dd>ClearFlow Gutters</dd>
                  <dt>Date</dt>
                  <dd>Sep 28, 2026</dd>
                  <dt>Amount</dt>
                  <dd className="num">$140.00</dd>
                </dl>
              </div>
              <div className="foot">
                <button className="ux-btn sec" data-toast="Each field becomes editable here.">Edit</button>
                <button className="ux-btn pri" data-act="add-save">Save to Vault</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div hidden data-modal="quotes">
        <div className="ux-modal" role="dialog" aria-modal="true">
          <div className="ux-sheet ux">
            <div className="ux-ok">
              <div className="tick">
                <svg width="30" height="30">
                  <use href="#i-check" />
                </svg>
              </div>
              <h2 id="q-title">Quotes requested</h2>
              <p className="sub" id="q-sub">Three pros have the job details. Quotes usually arrive within two days and will appear in To do, next to the fair price range.</p>
            </div>
            <div className="foot">
              <button className="ux-btn sec" data-act="close-modal">Stay here</button>
              <button className="ux-btn pri" data-act="quotes-todo">Go to To do</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
