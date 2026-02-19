import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M4L2({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 320 100" style={{ width: '100%', maxWidth: '320px' }}>
            <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Track Circuit Principle</text>
            {/* Two rails */}
            <line x1="30" y1="38" x2="290" y2="38" stroke="var(--text-bright)" strokeWidth="2"/>
            <line x1="30" y1="52" x2="290" y2="52" stroke="var(--text-bright)" strokeWidth="2"/>
            {/* Battery */}
            <rect x="30" y="56" width="22" height="10" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="1"/>
            <text x="41" y="64" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BAT</text>
            {/* Relay */}
            <rect x="268" y="56" width="22" height="10" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="1"/>
            <text x="279" y="64" fill="var(--blue)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RLY</text>
            {/* Current flow */}
            <text x="160" y="34" fill="var(--accent-secondary)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">current → relay energised = CLEAR</text>
            {/* Occupied text */}
            <text x="160" y="80" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">axle short-circuits → relay drops = OCCUPIED</text>
            <text x="160" y="94" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">fail-safe: power loss = OCCUPIED</text>
          </svg>
        </div>
        <figcaption>Schematic: Track circuit — current flows through rails to a relay. A train axle short-circuits the current, indicating occupation.</figcaption>
      </figure>

      <h3>What Is Interlocking?</h3>
      <p>
        An <strong>interlocking</strong> is the safety logic that prevents conflicting
        movements. It enforces rules such as: a signal cannot clear unless all points in the
        route are set and detected in the correct position; points cannot move under a train;
        conflicting routes cannot be set simultaneously. The interlocking is the most
        safety-critical component of any signalling system.
      </p>
      <p>
        The concept emerged after a series of catastrophic accidents in the mid-19th century
        where signallers inadvertently set conflicting routes. The key insight was that
        the rules governing safe movements could be mechanised — removing the reliance on
        human memory and discipline. John Saxby patented the first interlocking frame in
        1856, and by the 1880s interlocking was mandatory on British railways. The principle
        has remained unchanged for 170 years, even as the implementation technology has
        evolved from mechanical levers to computers.
      </p>

      <h3>Types of Interlocking</h3>
      <ul>
        <li>
          <strong>Mechanical:</strong> Victorian-era lever frames in signal boxes, using
          physical tappets and locking bars to prevent conflicting lever movements. Each
          lever operates a signal or set of points via a wire or rod run. The locking is
          achieved by steel tappets on the lever mechanisms that physically prevent one lever
          from moving when another is in a particular position. Some are
          still in use — engineering marvels of 19th-century logic. A large mechanical frame
          like that at Shrewsbury had over 100 levers, each requiring significant physical
          effort to operate.
        </li>
        <li>
          <strong>Relay:</strong> Electrical relay circuits that implement the same logic
          using relays wired in series and parallel. Dominated the 20th century. Fail-safe
          because relays are designed to drop to the safe (restrictive) state when de-energised.
          A typical relay interlocking room contains hundreds or thousands of
          relays wired into a logic network. Each relay is a vital component — designed with
          special materials and construction to ensure that failure always results in the
          contact opening (safe state). The logic is "wired in" — changing the interlocking
          requires physically rewiring relay circuits, a costly and time-consuming process.
        </li>
        <li>
          <strong>SSI (Solid State Interlocking):</strong> First-generation computer-based
          interlocking, developed in the UK in the 1980s by BR Research, GEC, and Westinghouse.
          Uses triple-redundant processors with 2-out-of-3 voting. The interlocking logic is
          held in geographic data (the "data prep") rather than wired circuits. SSI was
          revolutionary because it separated the safety-critical platform (the hardware and
          operating software) from the application-specific data (the geographic configuration),
          allowing the same hardware to be deployed at different locations simply by loading
          different data. Over 1,200 SSIs have been installed in the UK.
        </li>
        <li>
          <strong>CBI (Computer Based Interlocking):</strong> Modern generic computer
          platforms running formally verified interlocking software. Multiple vendors:
          Siemens (Trackguard Sinet), Alstom (Smartlock), Hitachi Rail (MicroLok). All must be
          certified to SIL 4. CBIs typically use diverse redundancy — two independent
          processing channels using different hardware and/or software, both of which must
          agree before a safety-critical output is produced. Some CBIs implement the
          interlocking logic in a formally specified language that can be mathematically
          proven correct.
        </li>
      </ul>

      <h3>Interlocking Tables (Control Tables)</h3>
      <p>
        The core specification of an interlocking is the <strong>control table</strong>: a
        matrix listing every route, and for each route, the required position of every point,
        the track sections that must be clear, the conflicting routes that must not be set,
        and the overlap beyond the end signal. The data prep engineer translates track layout
        drawings into control tables; any error can have catastrophic consequences.
      </p>
      <p>
        A typical control table entry looks like this: Route S1 to S5 requires points 101
        Normal, points 103 Reverse, track sections T1-T4 clear, overlap sections T5-T6
        clear, no conflict with routes S2-S3 or S7-S9. The table is exhaustive — every
        possible route and every possible conflict must be enumerated. For a large station
        with dozens of routes and hundreds of track sections, the control table can run to
        thousands of entries. Verification of control tables is performed using a combination
        of peer review, automated consistency checking, and formal methods.
      </p>

      <h3>Safety Integrity Level 4</h3>
      <p>
        Railway signalling interlocking must meet <strong>SIL 4</strong> — the highest level
        defined by IEC 61508 and EN 50129. This requires a tolerable hazard rate (THR) of less
        than <strong>10<sup>-9</sup> dangerous failures per hour</strong> — roughly one
        dangerous failure per 114,000 years of continuous operation. Achieving this requires
        formal methods, independent verification, diverse redundancy, and exhaustive testing.
      </p>
      <p>
        The SIL 4 requirement has profound implications for the development process. EN 50128
        mandates specific software development techniques at each SIL level. At SIL 4, the
        standard "highly recommends" formal specification (mathematical description of
        requirements), formal proof (mathematical verification that the implementation
        satisfies the specification), and model checking (exhaustive exploration of all
        possible system states). The development lifecycle includes independent safety
        assessment (ISA) by an assessor who has had no involvement in the design, and
        independent verification and validation (IV&V) of the safety case.
      </p>

      <h3>Train Detection: Track Circuits</h3>
      <p>
        A <strong>track circuit</strong> feeds a low-voltage electrical current through one
        rail and returns it through the other. When a train is present, its steel wheelsets
        short-circuit (shunt) the rails, causing a relay to de-energise. This is inherently
        <strong> fail-safe</strong>: a broken rail, disconnected wire, or equipment failure all
        cause the relay to drop, indicating "occupied" (the safe state).
      </p>
      <p>
        Track circuits come in several variants:
      </p>
      <ul>
        <li>
          <strong>DC track circuits:</strong> The simplest form. A battery feeds current
          through one rail, and a relay at the far end detects it. Limited range (typically
          up to about 600 m) due to ballast resistance and rail-to-rail leakage. Susceptible
          to interference from traction return currents on electrified railways.
        </li>
        <li>
          <strong>AC track circuits (jointless):</strong> Use audio-frequency signals
          (typically 1.5–2.5 kHz for TI21 type, or 833 Hz–10 kHz for FS2500/TI21 types) that
          can propagate over longer distances and coexist with DC traction return currents.
          Frequency coding allows adjacent track circuits to use different frequencies,
          preventing interference. Jointless track circuits eliminate the need for insulated
          rail joints, which are a maintenance liability and a point of failure.
        </li>
        <li>
          <strong>Reed relay track circuits:</strong> Use tuned reed relays that respond
          only to specific frequencies, providing immunity to interference. Common on UK
          AC-electrified routes.
        </li>
      </ul>
      <p>
        A key vulnerability of all track circuits is <strong>poor shunting</strong>: if the
        rail-head is contaminated (rust, leaf mulch, sand, or oil), the train's wheels may
        not make adequate electrical contact with the rail, and the track circuit fails to
        detect the train. This is a right-side failure (dangerous) because the track circuit
        shows "clear" when a train is actually present. Mitigation includes rail-head
        conditioning (running trains to keep the rail surface clean), enhanced shunting
        arrangements (additional detection points), and operational procedures for lines
        prone to contamination.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Clear_track_circuit.svg"
          alt="Schematic diagram of a clear (unoccupied) track circuit, showing electrical current flowing through the rails to a relay"
          loading="lazy"
          style={{ maxWidth: '500px' }}
        />
        <figcaption>
          Track circuit principle: current flows through the rails to energise a relay. When a train's wheelsets short-circuit (shunt) the rails, the relay drops — indicating the section is occupied.
          Image: <a href="https://commons.wikimedia.org/wiki/File:Clear_track_circuit.svg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
        </figcaption>
      </figure>

      <h3>Train Detection: Axle Counters</h3>
      <p>
        <strong>Axle counters</strong> use wheel sensors at each end of a section to count
        axles in and out. Each sensor typically consists of two coils that detect the passage
        of a steel wheel through changes in the electromagnetic field. The two coils are
        arranged so that the direction of travel can be determined — an axle passing left-to-right
        produces a different signal sequence than right-to-left. When the count of axles
        entering equals the count leaving, the section is clear.
      </p>
      <p>
        Unlike track circuits, axle counters do not require the current to flow through the
        rails (beneficial for electrified track and poor-conductivity rail). They are not
        affected by rail-head contamination, making them immune to the poor-shunting problem
        that plagues track circuits. However, they are <em>not</em> inherently fail-safe: if
        the count becomes corrupted (e.g. after a power failure, a sensor malfunction, or an
        electromagnetic disturbance), the section enters a <strong>"disturbed" state</strong>
        and requires a manual reset procedure — a technician must physically verify that the
        section is clear before resetting the counter. This is a significant operational
        constraint, particularly on routes with no alternative paths.
      </p>
      <p>
        Modern axle counter systems (such as Frauscher RSR123 or Thales AzLM) incorporate
        extensive self-diagnostic capabilities, non-volatile counting registers that survive
        power failures, and redundant sensor pairs to reduce the probability of entering a
        disturbed state. Some systems now achieve a count accuracy better than 10<sup>-9</sup>
        per axle passage, making them viable for SIL 4 applications — but the fundamental
        architectural difference from track circuits (count-based vs. continuous-presence-detection)
        remains.
      </p>

      <h3>Track Circuit vs Axle Counter: Design Choice</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Criterion</th><th>Track Circuit</th><th>Axle Counter</th></tr>
          </thead>
          <tbody>
            <tr><td>Fail-safe mode</td><td>Inherently fail-safe (shows occupied on failure)</td><td>Not inherently fail-safe (may enter disturbed state)</td></tr>
            <tr><td>Rail-head contamination</td><td>Vulnerable (poor shunting)</td><td>Immune</td></tr>
            <tr><td>Broken rail detection</td><td>Can detect (current path broken)</td><td>Cannot detect</td></tr>
            <tr><td>Electrified lines</td><td>Complex (traction return current interference)</td><td>No rail interaction needed</td></tr>
            <tr><td>Insulated joints</td><td>Required (for conventional types)</td><td>Not required</td></tr>
            <tr><td>Power failure recovery</td><td>Immediate (relay drops to safe state)</td><td>May require manual reset</td></tr>
            <tr><td>Maintenance burden</td><td>Higher (rail bonds, insulated joints, relay calibration)</td><td>Lower (sensors are lineside, no rail-dependent components)</td></tr>
          </tbody>
        </table>
      </div>

      <Callout type="analogy">
        An interlocking is a <strong>formally verified state machine</strong>. Each state
        represents a valid configuration of signals and points. Transitions (route setting,
        route release) are only permitted if preconditions are met. The SIL 4 requirement is
        essentially the railway industry demanding the rigour of formal methods — model
        checking, theorem proving, and exhaustive testing — long before these techniques
        became fashionable in software. Railway signalling is one of the oldest and most
        successful applications of formal verification in engineering. Track circuits are
        like <strong>heartbeat monitors</strong> — they continuously confirm presence by
        measuring a physical property. Axle counters are like <strong>reference counting</strong>
        in memory management — they track allocations and deallocations, but if the count
        gets corrupted, you have a memory leak (or in railway terms, a phantom train).
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'The signals that the interlocking controls.' },
        { target: 'm4-l4', label: 'Points, Routes & Level Crossings', desc: 'How routes are set through the interlocking.' },
        { target: 'm4-l3', label: 'ETCS, CBTC & Future', desc: 'How modern systems build on interlocking principles.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the purpose of an interlocking?', options: ['To lock the signalling room door', 'To prevent conflicting train movements by enforcing safety logic', 'To connect signal boxes together', 'To record train positions'], correct: 1, explanation: 'An interlocking enforces safety: if a route is set, all conflicting routes are locked out and all points locked in position.' },
  { text: 'What SIL is required for railway signalling interlockings?', options: ['SIL 1', 'SIL 2', 'SIL 3', 'SIL 4'], correct: 3, explanation: 'SIL 4 — the highest level, meaning <1 dangerous failure per 10⁹ hours. Same as nuclear safety systems and aviation fly-by-wire.' },
  { text: 'How does a track circuit detect a train?', options: ['Using cameras', 'By sensing the short-circuit created by steel wheels bridging the rails', 'By weighing the track', "By detecting the train's radio signal"], correct: 1, explanation: 'Current flows through the rails. When wheelsets bridge (shunt) the rails, a relay de-energises indicating "occupied." It\'s fail-safe — a broken rail also triggers occupation.' },
  { text: 'What is the main disadvantage of axle counters vs track circuits?', options: ['They are less accurate', 'They cannot detect broken rails, and miscounts require manual reset', 'They are more expensive', 'They only work in tunnels'], correct: 1, explanation: 'Miscounts require a technician to physically verify the section is clear before resetting — a slow process causing delays.' },
];
