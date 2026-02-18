import type { GoToFn } from '../types';

export function getReferenceContent(goTo: GoToFn, toggleModule: (modId: string) => void, progress: { modules: Record<string, boolean> }): Record<string, React.JSX.Element> {
  return {

    /* ═══════════ MODULE 7 — Telecommunications & Control Systems ═══════════ */
    'm7': (
      <div className="page-inner page-enter">
        <div className="module-header">
          <div className="module-number">Module 7</div>
          <h2>Telecommunications &amp; Control Systems</h2>
          <div className="discipline">The communications infrastructure that ties everything together.</div>
          <div className="role"><strong>What these engineers do:</strong> Design and maintain lineside/station communication networks, radio systems (GSM-R, FRMCS), fibre optic networks, control centre systems (SCADA, CTC), CCTV, and passenger information systems.</div>
        </div>

        <h3>The Railway's Nervous System</h3>

        <div className="callout analogy">
          <div className="callout-label">Developer Analogy</div>
          <p style={{margin:0}}>Think of telecom as the <strong>middleware layer</strong>. It doesn't move trains or control signals directly, but without it, modern operations are impossible.</p>
        </div>

        <h4>Operational Communications</h4>
        <p>Radio between drivers and signallers. Historically analogue, now <strong>GSM-R</strong> (a railway-specific GSM variant), being replaced by <strong>FRMCS</strong> (Future Railway Mobile Communication System, based on 4G/5G). Critical for ETCS, which depends on continuous radio communication.</p>

        <h4>Fibre Optic Network</h4>
        <p>The backbone. Runs along the railway carrying data for signalling, telecom, CCTV, and operations. Often leased to commercial telecom companies as a revenue source.</p>

        <h4>SCADA</h4>
        <p>Supervisory Control and Data Acquisition — monitors and controls infrastructure remotely: point heaters, pumps, tunnel ventilation, power supply switchgear. Essentially <strong>IoT for railways</strong>.</p>

        <h4>Passenger Information</h4>
        <p>Dot matrix displays, PA systems, real-time departure boards, mobile apps. The data pipeline from timetable &rarr; train describer &rarr; passenger display is a real-time data engineering problem.</p>

        <h3>Control Centres</h3>
        <p>Modern railways are managed from centralised control rooms integrating signalling control, traction power control, incident management, and passenger information. The software systems are large, complex, and safety-critical.</p>

        <div className="connections">
          <h4>Connections to Other Disciplines</h4>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m4')}>Signalling</span> — Telecom provides the communication layer modern signalling depends on. No GSM-R = no ETCS Level 2.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m5')}>Electrification</span> — SCADA monitors and controls the power supply network.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m8')}>Operations</span> — Real-time data from train describers and control systems enables timetable management.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <strong>All disciplines</strong> — Fibre and radio infrastructure needs cable routes, equipment rooms, mast sites, and power from every physical discipline.</div>
        </div>

        <div className="activities">
          <h4>Study Activities</h4>
          <ul>
            <li>Look up how GSM-R works and why railways need their own radio system</li>
            <li>Understand the data flow: train GPS/balise position &rarr; control system &rarr; departure board</li>
            <li>As a developer: look into the <strong>Darwin data feed</strong> (UK open data for real-time train information) — you could build something with it!</li>
          </ul>
        </div>

        <button
          className={`mark-complete-btn${progress.modules['m7'] ? ' completed' : ''}`}
          onClick={() => toggleModule('m7')}
        >
          {progress.modules['m7'] ? '\u2713 Module Complete' : 'Mark Module Complete'}
        </button>

        <div className="page-nav">
          <div className="page-nav-btn" onClick={() => goTo('m6-l3')}>&larr; Wheel-Rail Interface &amp; Gauging</div>
          <div className="page-nav-btn next" onClick={() => goTo('m8')}>Operations &rarr;</div>
        </div>
      </div>
    ),

    /* ═══════════ MODULE 8 — Operations, Timetabling & Integration ═══════════ */
    'm8': (
      <div className="page-inner page-enter">
        <div className="module-header">
          <div className="module-number">Module 8</div>
          <h2>Operations, Timetabling &amp; Integration</h2>
          <div className="discipline">How the railway is actually used — the timetable, capacity, and day-to-day running.</div>
          <div className="role"><strong>What these engineers/planners do:</strong> Create timetables, manage capacity, plan possessions (engineering access), coordinate incident response, and optimise system performance.</div>
        </div>

        <h3>Timetabling</h3>
        <p>The timetable is the master plan: every train's departure and arrival at every point, its route, platform allocations, and connections. Creating a timetable is a massive constraint satisfaction problem.</p>
        <p><strong>Inputs:</strong> Service requirements, rolling stock availability and performance, crew availability, infrastructure capability, and maintenance windows.</p>
        <p><strong>Constraints:</strong> Minimum headway, junction conflicts, platform reoccupation times, turnaround times, and crew rest requirements.</p>

        <div className="callout analogy">
          <div className="callout-label">Developer Analogy</div>
          <p style={{margin:0}}>Timetabling is a <strong>combinatorial optimisation problem — and it's NP-hard</strong> in the general case. In practice, it's solved with heuristics, simulation tools, and expert judgement. Think of it as resource scheduling with thousands of interdependent constraints.</p>
        </div>

        <h3>Capacity</h3>
        <p>Capacity isn't just about track — it's about the <strong>weakest link</strong>. A junction, flat crossing, single-track section, or busy station throat can be the bottleneck. Capacity depends on signalling headway, train type mix, junction complexity, and dwell times.</p>

        <div className="callout">
          <div className="callout-label">Non-Linear Degradation</div>
          <p style={{margin:0}}>Adding one more train to a busy railway doesn't just add one train's worth of complexity — it creates interactions with every other train. Capacity degrades non-linearly as utilisation increases, just like a network under load.</p>
        </div>

        <h3>Possessions (Engineering Access)</h3>
        <p>You can't maintain track while trains run. "Possessions" are planned closures for engineering work. Planning them is a negotiation between operations (who want trains) and engineering (who need access). On busy railways, heavy maintenance happens at night or weekends.</p>

        <h3>Performance and Delay Management</h3>
        <p>When things go wrong — signals fail, trains break down, weather happens — operational response is critical. Delay attribution, incident management, and real-time replanning are core activities.</p>

        <div className="connections">
          <h4>Connections to Every Discipline</h4>
          <p style={{marginBottom:'12px',fontSize:'0.9rem',color:'var(--text-dim)'}}>Operations is where everything comes together:</p>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m1')}>Track</span> determines line speeds and speed restrictions.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m3')}>Structures</span> impose weight limits and gauge restrictions.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m4')}>Signalling</span> determines headway and thus capacity.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m5')}>Electrification</span> determines which traction types can use which routes.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m6')}>Rolling Stock</span> performance determines journey times and timetable feasibility.</div>
          <div className="connection-item"><span className="connection-arrow">&rarr;</span> <span className="connection-link" onClick={() => goTo('m7')}>Telecoms</span> enables real-time operational management.</div>
        </div>

        <div className="activities">
          <h4>Study Activities</h4>
          <ul>
            <li>Try to read a <strong>Working Timetable (WTT)</strong> — the technical version, not the public one</li>
            <li>Understand headway and how signalling determines minimum train separation</li>
            <li>Use <strong>OpenTrainTimes</strong> (UK) to see real-time train movements</li>
            <li>Play <strong>"Mini Metro"</strong> or <strong>"Rail Route"</strong> for an intuitive feel for capacity constraints</li>
          </ul>
        </div>

        <button
          className={`mark-complete-btn${progress.modules['m8'] ? ' completed' : ''}`}
          onClick={() => toggleModule('m8')}
        >
          {progress.modules['m8'] ? '\u2713 Module Complete' : 'Mark Module Complete'}
        </button>

        <div className="page-nav">
          <div className="page-nav-btn" onClick={() => goTo('m7')}>&larr; Telecommunications</div>
          <div className="page-nav-btn next" onClick={() => goTo('m9')}>Capstone &rarr;</div>
        </div>
      </div>
    ),

    /* ═══════════ MODULE 9 — Capstone ═══════════ */
    'm9': (
      <div className="page-inner page-enter">
        <div className="module-header">
          <div className="module-number">Module 9</div>
          <h2>Capstone — How It All Fits Together</h2>
          <div className="discipline">The complete picture: project lifecycle, interfaces, and systems engineering.</div>
        </div>

        <h3>The Project Lifecycle</h3>
        <p>When a new line or upgrade is planned, all disciplines work in parallel with constant coordination:</p>

        <ol className="step-list">
          <li><strong>Feasibility / Options</strong> — Operations planners define service needs. Alignment options are sketched. High-level costs estimated.</li>
          <li><strong>Preliminary design</strong> — Track alignment refined with geotechnical surveys. Structures identified. Signalling principles established. Electrification and rolling stock requirements defined.</li>
          <li><strong>Detailed design</strong> — All disciplines produce detailed designs, constantly checking interfaces. Does the alignment fit through the tunnel with electrification clearance? Does signalling provide enough capacity?</li>
          <li><strong>Construction</strong> — Usually staged, with possessions for existing railways or greenfield for new lines.</li>
          <li><strong>Testing &amp; commissioning</strong> — Signalling tested exhaustively. Electrification energised section by section. Test trains before revenue service.</li>
          <li><strong>Operations &amp; maintenance</strong> — Every discipline shifts to inspecting, monitoring, repairing, and renewing their assets.</li>
        </ol>

        <h3>The Key Interfaces</h3>
        <p>These are where problems occur if disciplines don't coordinate — the "integration bugs" of railway engineering:</p>

        <table>
          <thead><tr><th>Interface</th><th>Why It Matters</th></tr></thead>
          <tbody>
            <tr><td><span className="connection-link" onClick={() => goTo('m1')}>Track</span> &harr; <span className="connection-link" onClick={() => goTo('m4')}>Signalling</span></td><td>Rails carry track circuit current. Insulated joints must be precisely located.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m5')}>Electrification</span> &harr; <span className="connection-link" onClick={() => goTo('m4')}>Signalling</span></td><td>Traction return current interferes with track circuits. Requires immunisation.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m5')}>Electrification</span> &harr; <span className="connection-link" onClick={() => goTo('m3')}>Structures</span></td><td>Clearance under bridges / in tunnels is often the critical constraint.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m6')}>Rolling Stock</span> &harr; <span className="connection-link" onClick={() => goTo('m1')}>Track</span></td><td>Wheel-rail interface: wear, ride quality, noise, derailment risk.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m6')}>Rolling Stock</span> &harr; <span className="connection-link" onClick={() => goTo('m5')}>Electrification</span></td><td>Pantograph/shoe must match. Voltage and frequency must be compatible.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m6')}>Rolling Stock</span> &harr; <span className="connection-link" onClick={() => goTo('m4')}>Signalling</span></td><td>Onboard equipment must match lineside. Braking curves must be consistent.</td></tr>
            <tr><td><span className="connection-link" onClick={() => goTo('m8')}>Operations</span> &harr; Everything</td><td>The timetable must be deliverable given all constraints.</td></tr>
          </tbody>
        </table>

        <h3>Systems Engineering</h3>
        <p>Modern railway projects use formal systems engineering to manage interfaces. Requirements are traced from operational need through system-level design to subsystem specifications. Interface control documents (ICDs) define what each discipline provides to and requires from others.</p>

        <div className="callout analogy">
          <div className="callout-label">Developer Analogy</div>
          <p style={{margin:0}}>This is <strong>API contracts and interface specifications</strong>. And just as in software, the interfaces are where most of the bugs live.</p>
        </div>

        <h3>Bringing It to Your Hobby</h3>
        <p>Your miniature railway is a microcosm of all these disciplines. When you lay track, you're doing permanent way engineering. Your baseboard is the subgrade. Your wiring is signalling and power supply. Your locomotive selection is rolling stock engineering. Your timetable (even an informal one) is operations.</p>
        <p>Understanding the real engineering makes the hobby richer — and the hobby gives you physical intuition for the engineering.</p>

        <h3>Glossary</h3>
        <table>
          <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>Ballast</td><td>Crushed stone bed supporting the track</td></tr>
            <tr><td>Cant</td><td>Superelevation of outer rail on curves</td></tr>
            <tr><td>CWR</td><td>Continuously welded rail</td></tr>
            <tr><td>ETCS</td><td>European Train Control System</td></tr>
            <tr><td>Gauge</td><td>Distance between inner rail faces</td></tr>
            <tr><td>Headway</td><td>Minimum time between successive trains</td></tr>
            <tr><td>Interlocking</td><td>Safety logic preventing conflicting movements</td></tr>
            <tr><td>Loading gauge</td><td>Maximum vehicle cross-section envelope</td></tr>
            <tr><td>OHL / OCS</td><td>Overhead line / overhead contact system</td></tr>
            <tr><td>Pantograph</td><td>Device on train roof collecting current from OHL</td></tr>
            <tr><td>Possession</td><td>Planned closure for engineering work</td></tr>
            <tr><td>Sleeper (tie)</td><td>Cross-member supporting rails</td></tr>
            <tr><td>Turnout</td><td>Track switch / points assembly</td></tr>
            <tr><td>WTT</td><td>Working timetable</td></tr>
          </tbody>
        </table>

        <button
          className={`mark-complete-btn${progress.modules['m9'] ? ' completed' : ''}`}
          onClick={() => toggleModule('m9')}
        >
          {progress.modules['m9'] ? '\u2713 Module Complete' : 'Mark Module Complete'}
        </button>

        <div className="page-nav">
          <div className="page-nav-btn" onClick={() => goTo('m8')}>&larr; Operations</div>
          <div className="page-nav-btn next" onClick={() => goTo('index')}>Back to Index &rarr;</div>
        </div>
      </div>
    ),

  };
}
