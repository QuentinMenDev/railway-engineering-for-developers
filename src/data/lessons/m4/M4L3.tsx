import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M4L3({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 320 110" style={{ width: '100%', maxWidth: '320px' }}>
            <text x="160" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ETCS Level 2</text>
            {/* Track */}
            <line x1="20" y1="70" x2="300" y2="70" stroke="var(--text-bright)" strokeWidth="2"/>
            {/* Train (EVC) */}
            <rect x="50" y="56" width="50" height="12" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
            <text x="75" y="65" fill="var(--bg)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EVC</text>
            {/* Radio link */}
            <line x1="75" y1="56" x2="200" y2="30" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="130" y="38" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">radio</text>
            {/* RBC box */}
            <rect x="180" y="18" width="45" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1.5" rx="2"/>
            <text x="202" y="30" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RBC</text>
            {/* IXL box */}
            <rect x="240" y="18" width="40" height="18" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1.5" rx="2"/>
            <text x="260" y="30" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">IXL</text>
            <line x1="225" y1="27" x2="240" y2="27" stroke="var(--text-dim)" strokeWidth="1"/>
            {/* Eurobalises */}
            <rect x="120" y="68" width="8" height="4" fill="var(--accent)" rx="1"/>
            <rect x="180" y="68" width="8" height="4" fill="var(--accent)" rx="1"/>
            <text x="155" y="64" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">balises</text>
            {/* Movement authority */}
            <line x1="100" y1="85" x2="250" y2="85" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
            <polygon points="250,85 244,82 244,88" fill="var(--accent-secondary)"/>
            <text x="175" y="100" fill="var(--accent-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Movement Authority</text>
          </svg>
        </div>
        <figcaption>Schematic: ETCS Level 2 — on-board EVC receives movement authority from Radio Block Centre via radio link.</figcaption>
      </figure>

      <h3>ETCS: European Train Control System</h3>
      <p>
        ETCS is the signalling component of ERTMS (European Rail Traffic Management System),
        designed to replace the dozens of incompatible national signalling systems across
        Europe. It defines a series of <strong>levels</strong> representing increasing degrees
        of integration:
      </p>
      <ul>
        <li>
          <strong>Level 0:</strong> ETCS on-board equipment supervises speed limits but the
          existing national signalling system remains in control. A compatibility/migration
          mode.
        </li>
        <li>
          <strong>Level 1:</strong> <strong>Eurobalises</strong> (transponders between the
          rails) transmit movement authorities as the train passes over them. Lineside signals
          are retained. Train detection is via conventional track circuits or axle counters.
          An overlay on existing infrastructure. An optional enhancement is the use of
          <strong> Euroloops</strong> or <strong>radio infill</strong> to update the movement
          authority between balise groups, reducing the "information gap" problem where a
          train must wait to reach the next balise to receive an updated MA.
        </li>
        <li>
          <strong>Level 2:</strong> Movement authorities are transmitted continuously via
          radio (GSM-R) from a <strong>Radio Block Centre (RBC)</strong>. Eurobalises are
          retained only for position calibration. Lineside signals can be removed. Train
          detection still uses conventional track circuits or axle counters. This is the level
          being deployed most widely today — it is the backbone of UK's Digital Railway
          programme, the core of high-speed lines across Europe, and the standard for
          new installations worldwide.
        </li>
        <li>
          <strong>Level 3:</strong> Eliminates the need for trackside train detection
          entirely. Trains report their position and integrity directly via radio. Enables
          <strong> moving block</strong> — trains are separated by a safe braking distance
          rather than fixed block sections, dramatically increasing capacity. Still largely
          in development/pilot phase. The key technical challenge is <strong>train
          integrity</strong> — the train must be able to confirm that it is complete
          (no vehicles have become detached) because there is no trackside equipment to
          verify this.
        </li>
      </ul>

      <h3>ETCS Modes of Operation</h3>
      <p>
        The ETCS onboard computer operates in various <strong>modes</strong> depending on
        the operational situation:
      </p>
      <ul>
        <li><strong>Full Supervision (FS):</strong> The normal operating mode. The onboard computer has a complete MA and speed profile, and continuously supervises the train's speed and position against it.</li>
        <li><strong>On Sight (OS):</strong> The train is permitted to proceed but must be prepared to stop within sight. Used when entering an occupied section (e.g., coupling to another train).</li>
        <li><strong>Staff Responsible (SR):</strong> The driver takes responsibility for safe movement. Used during degraded operation when the signalling system cannot provide a full MA.</li>
        <li><strong>Shunting (SH):</strong> Low-speed movements within a defined area, without a formal MA. Used for yard and depot operations.</li>
        <li><strong>Trip:</strong> The train has exceeded its authority (passed the end of MA) and the emergency brake is applied. The train must come to a complete stop before any further movement is possible.</li>
        <li><strong>Post Trip:</strong> After a trip, the driver must acknowledge the situation and can only proceed under specific conditions with restricted speed.</li>
      </ul>

      <h3>Eurobalise &amp; RBC Architecture</h3>
      <p>
        A <strong>Eurobalise</strong> is a passive or active transponder mounted between the
        rails. When energised by the passing train's antenna, it transmits a telegram
        containing position information and (in Level 1) the movement authority. Balises are
        installed in <strong>groups</strong> — typically pairs or triplets — to provide
        redundancy and direction information. The spacing between balises in a group is
        precisely known, allowing the onboard computer to verify its position calibration.
      </p>
      <p>
        The <strong>Radio Block Centre (RBC)</strong> is the server-side processor in Level 2+
        that manages movement authorities for all trains in its area, communicating with both
        trains (via radio) and the interlocking (via a standardised interface). An RBC
        typically manages an area of 100–300 km of route. RBCs at adjacent areas communicate
        through a <strong>handover protocol</strong> — as a train approaches the boundary
        between two RBC areas, the current RBC transfers responsibility to the next,
        ensuring seamless continuity of movement authority. The protocol is specified in
        UNISIG Subset-039 and must handle the transition without any gap in supervision.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Siemens_Eurobalise.jpg"
          alt="A Siemens Eurobalise transponder — a yellow unit mounted between the rails that transmits data to passing trains"
          loading="lazy"
        />
        <figcaption>
          A Siemens Eurobalise — the passive transponder mounted between the rails. When energised by a passing train's antenna, it transmits position data and movement authorities.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Siemens_Eurobalise.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
        </figcaption>
      </figure>

      <h3>Movement Authority</h3>
      <p>
        The <strong>movement authority (MA)</strong> is the fundamental concept: a permission
        to occupy a specific section of track up to a defined end point (End of Authority, or
        EOA), with a supervised speed profile. The on-board computer continuously monitors the
        train's position and speed against the MA and applies brakes if limits are exceeded.
        This provides continuous protection, unlike discrete lineside signals.
      </p>
      <p>
        The MA includes far more information than a simple "go" command. It contains the
        <strong> static speed profile</strong> (permanent speed limits along the route),
        <strong> gradient profile</strong> (used for braking calculations),
        <strong> temporary speed restrictions</strong>, and the
        <strong> danger point</strong> (the point beyond the EOA where a hazard exists, such
        as a set of points or an occupied section). From all this data, the onboard computer
        calculates <strong>braking curves</strong>: the permitted speed at every point along
        the route, taking into account the train's specific braking performance, the gradient,
        and a margin for intervention. If the train exceeds the <strong>warning speed</strong>,
        the driver receives an audible/visual alert. If it exceeds the
        <strong> intervention speed</strong>, the brakes are applied automatically.
      </p>

      <h3>Fixed Block vs Moving Block</h3>
      <div className="highlight-box">
        <p>
          In <strong>fixed block</strong> signalling (conventional and ETCS Levels 1/2), the
          track is divided into predetermined block sections defined by track circuits or axle
          counter boundaries. Only one train may occupy a block at a time, and the block must
          be completely clear before the next train may enter. This means the minimum headway
          includes the block length plus the braking distance, regardless of the actual
          position of the leading train within the block.
        </p>
        <p>
          In <strong>moving block</strong> (ETCS Level 3 and CBTC), there are no fixed block
          boundaries. Each train continuously reports its precise position, and the following
          train's movement authority extends to the last confirmed rear of the preceding
          train, plus a safety margin. This means the minimum separation is the actual
          braking distance plus a safety margin — no wasted space from block boundaries.
          Moving block can increase capacity by 20–40% on busy lines.
        </p>
        <p style={{ margin: 0 }}>
          The challenge of moving block is that it requires extremely reliable and continuous
          position reporting, guaranteed train integrity confirmation, and very low-latency
          radio communication. Any gap in communication forces the train to assume the worst
          case and brake to a stop.
        </p>
      </div>

      <h3>CBTC for Metro/Urban Rail</h3>
      <p>
        <strong>CBTC (Communications-Based Train Control)</strong> is the metro equivalent,
        using continuous radio communication between trains and a zone controller. It enables
        headways as short as <strong>90 seconds</strong> with moving block, and supports full
        <strong> ATO (Automatic Train Operation)</strong>. CBTC is now the standard for new
        metro construction worldwide and is being retrofitted to existing metros to increase
        capacity without building new tunnels.
      </p>
      <p>
        CBTC systems typically use Wi-Fi-based radio (IEEE 802.11) operating in the 2.4 GHz
        or 5.8 GHz bands, with track-mounted access points providing continuous coverage
        throughout tunnels and stations. The zone controller manages train separation by
        calculating safe movement authorities for each train based on the position and speed
        of surrounding trains, track topology, and station dwell requirements.
      </p>
      <p>
        Grades of Automation (GoA) defined by IEC 62290:
      </p>
      <ul>
        <li><strong>GoA 0:</strong> On-sight train operation (no protection system)</li>
        <li><strong>GoA 1:</strong> Non-automated (driver operates with ATP protection)</li>
        <li><strong>GoA 2:</strong> Semi-automated (ATO with driver for door operation and emergency) — e.g. London Elizabeth line, Paris RER A</li>
        <li><strong>GoA 3:</strong> Driverless (attendant on board but no driver) — e.g. London DLR</li>
        <li><strong>GoA 4:</strong> Unattended (no staff on board) — e.g. Dubai Metro, Paris Line 14, Copenhagen Metro, Nuremberg U-Bahn</li>
      </ul>
      <p>
        The transition from GoA 2 to GoA 4 requires increasingly sophisticated
        <strong> platform screen doors</strong> (to prevent track intrusion),
        <strong> obstacle detection</strong> systems, <strong>automated train dispatch</strong>,
        and <strong>remote supervision</strong> from a control centre. The engineering
        challenge shifts from train control to managing the uncontrolled human environment
        around the train.
      </p>

      <h3>Future: FRMCS and Beyond</h3>
      <p>
        GSM-R (the railway-specific mobile radio system) is approaching end-of-life.
        <strong> FRMCS (Future Railway Mobile Communication System)</strong> will replace it
        using 5G technology, providing higher bandwidth, lower latency, and support for
        video, IoT, and next-generation ETCS applications. The higher bandwidth opens
        possibilities for virtual coupling (trains running in close formation without
        physical coupling, communicating wirelessly to coordinate braking) and satellite-based
        positioning to supplement or replace Eurobalises.
      </p>
      <p>
        The <strong>Digital Railway</strong> programme in the UK aims to deploy ETCS Level 2
        across the busiest parts of the network, combined with traffic management systems that
        optimise train running in real time. The expected benefits include a 40% increase in
        capacity on key corridors, reduced signalling equipment at trackside (lowering
        maintenance costs and improving reliability), and enabling automatic train operation
        on mainline railways.
      </p>

      <Callout type="analogy">
        The progression from Level 0 to Level 3 ETCS is a <strong>monolith-to-microservices
        migration</strong>. Level 0 wraps the legacy system with a thin modern layer. Level 1
        adds point-to-point data exchange (like adding REST APIs to a monolith). Level 2
        centralises control in a dedicated service (the RBC) communicating over a network.
        Level 3 fully distributes intelligence to the edge (trains report their own position),
        eliminating legacy infrastructure (trackside detection). Each level adds capability
        but introduces new failure modes and migration complexity — exactly like a
        microservices migration. And just like in software, the hardest part is not building
        the new system — it's migrating from the old one while keeping the railway running.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'The conventional signalling that ETCS replaces.' },
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'The interlocking remains even under ETCS.' },
        { target: 'm4-l4', label: 'Points, Routes & Level Crossings', desc: 'How route-setting works in the ETCS world.' },
        { target: 'm7-l1', label: 'Railway Telecoms', desc: 'GSM-R and FRMCS provide the radio bearer for ETCS Level 2/3.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'At ETCS Level 2, what happens to lineside signals?', options: ['Painted a different colour', 'Removed — movement authority sent directly to cab via radio', 'They flash instead of steady aspects', 'Kept as backup'], correct: 1, explanation: 'ETCS L2 eliminates lineside signals. The RBC sends movement authority via GSM-R radio to the cab display (DMI).' },
  { text: 'What is a "movement authority" in ETCS?', options: ['A government permit to run trains', 'Permission to proceed to a specific point, with a speed profile', 'A timetable allocation', "A driver's licence"], correct: 1, explanation: 'An MA tells the train how far it may proceed and at what speeds, including a supervised speed profile and target point.' },
  { text: 'What does GoA 4 mean?', options: ['Partially automated with driver override', 'Semi-automated with driver present', 'Driverless with an attendant', 'Fully unattended operation with no staff on train'], correct: 3, explanation: 'GoA 4 = Unattended Train Operation (UTO). No driver, no attendant. Examples: Docklands Light Railway, many modern metros.' },
  { text: 'What is the biggest challenge of migrating from legacy to digital signalling?', options: ['Digital systems are unreliable', 'The old system must keep running safely during transition', 'Not enough software engineers', 'Digital signals use too much electricity'], correct: 1, explanation: 'You cannot stop the railway. Legacy and digital must coexist during transition — like refactoring a monolith to microservices in production.' },
];
