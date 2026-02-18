import React from 'react';

// ─── Helper Components ───────────────────────────────────────────────

function Callout({ type = 'info', label, children }) {
  return (
    <div className={`callout${type === 'analogy' ? ' analogy' : ''}`}>
      <div className="callout-label">{label || (type === 'analogy' ? 'Developer Analogy' : 'Note')}</div>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}

function Connections({ items, goTo }) {
  return (
    <div className="connections">
      <h4>Connections to Other Disciplines</h4>
      {items.map((item, i) => (
        <div key={i} className="connection-item">
          <span className="connection-arrow">→</span>
          <span className="connection-link" onClick={() => goTo(item.target)}>{item.label}</span>
          {' — '}{item.desc}
        </div>
      ))}
    </div>
  );
}

// ─── Module 4: Signalling ────────────────────────────────────────────

function M4L1({ goTo }) {
  return (
    <>
      <h3>From Time-Interval to Absolute Block</h3>
      <p>
        Early railways used <strong>time-interval working</strong>: a train was allowed to
        depart a set number of minutes after the previous one, on the assumption that the gap
        would provide safety. This failed catastrophically in several disasters (notably
        the Clayton Tunnel collision of 1861) because a delayed train could be sitting just
        around the corner.
      </p>
      <p>
        The industry moved to <strong>space-interval working</strong>, where the line is
        divided into sections (blocks) and only one train is permitted in each block at a time.
        The <strong>absolute block system</strong> enforces this using a combination of signals
        and communication between signal boxes. The principle is simple and powerful: a signal
        is held at danger (red) until the signaller at the next box confirms the block section
        is clear.
      </p>
      <p>
        The absolute block system relies on three key elements operating together:
        the <strong>block telegraph instruments</strong> (electrical devices used to
        communicate between adjacent signal boxes), <strong>block regulations</strong>
        (the formal rules governing when a train may be accepted into a block section),
        and <strong>the signals themselves</strong> (which convey the authorisation to
        the driver). The signaller at Box A sends "Is Line Clear?" to Box B using the
        block instrument. Box B checks that the previous train has passed clear of the
        section, then returns "Line Clear." Only then does Box A clear the starting signal.
        When the train passes Box B, that signaller sends "Train Out of Section" to Box A,
        completing the cycle.
      </p>

      <h3>Block Instrument Types</h3>
      <p>
        Several types of block telegraph instrument have been used historically, each with
        specific safety characteristics:
      </p>
      <ul>
        <li>
          <strong>Tyer's Electric Tablet / Token:</strong> A physical token is electrically
          released from an instrument at one end of a single-track section. The driver must
          carry the token — only one can be released at a time, making it physically impossible
          for two trains to be in the section simultaneously. Used extensively on single-track
          lines.
        </li>
        <li>
          <strong>Preece Block Instrument:</strong> A three-position needle instrument
          showing "Line Blocked," "Line Clear," or "Train on Line." Used on double-track
          lines where the physical token system is unnecessary.
        </li>
        <li>
          <strong>Track circuit block:</strong> A modern semi-automatic system where track
          circuits detect train presence and block instruments are replaced by electronic
          indications. The signaller still authorises movements, but the system prevents
          them from clearing a signal when the section is occupied.
        </li>
      </ul>

      <h3>Four-Aspect Colour Light Signalling</h3>
      <p>
        Modern UK mainlines use four-aspect signals, providing three levels of advance
        information:
      </p>
      <ul>
        <li><strong>Green:</strong> Line clear — at least two block sections ahead are clear. Proceed at line speed.</li>
        <li><strong>Double yellow:</strong> Preliminary caution — two sections ahead are clear, but the third may not be. Begin preparing to brake.</li>
        <li><strong>Yellow:</strong> Caution — the next signal is at red. Brake to be able to stop at the next signal.</li>
        <li><strong>Red:</strong> Danger — stop and do not proceed. The section ahead is occupied or the route is not set.</li>
      </ul>
      <p>
        This cascade gives the driver enough braking distance at line speed. On very high-speed
        lines, even four aspects may be insufficient, which is one reason ETCS cab signalling
        is preferred for 200+ km/h operation. The signal spacing is determined by the
        <strong> braking distance</strong> of the worst-performing train type that uses the
        route: the distance from double-yellow to red must be sufficient for that train to
        brake from maximum line speed to a stand.
      </p>

      <h3>Signal Spacing and Braking Curves</h3>
      <p>
        The spacing of signals is not arbitrary — it is calculated from the <strong>braking
        performance</strong> of trains using the route. The key calculation is: given a train
        travelling at maximum line speed, receiving a double-yellow aspect, can it decelerate
        to a stand before reaching the red signal two sections ahead? The braking model must
        account for gradient (downhill trains take longer to stop), rail conditions (wet or
        contaminated rail reduces adhesion), brake type (disc brakes vs tread brakes), and
        a safety margin for driver reaction time.
      </p>
      <p>
        On a 125 mph (200 km/h) line with four-aspect signalling, typical signal spacing
        is approximately <strong>1,500 to 2,000 metres</strong> between each signal. This
        means a driver receiving a double-yellow has approximately 3,000 to 4,000 metres to
        stop. On lower-speed lines (e.g., 60 mph suburban routes), signals may be as close
        as 500–800 metres apart, which also enables shorter headways and higher train
        frequencies.
      </p>

      <div className="lesson-figure-row">
        <figure className="lesson-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/UK_Railway_Signal_-_4_Aspect_-_Danger.svg"
            alt="UK four-aspect colour light signal showing red (Danger)"
            loading="lazy"
          />
          <figcaption>Red — Danger</figcaption>
        </figure>
        <figure className="lesson-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/UK_Railway_Signal_-_4_Aspect_-_Caution.svg"
            alt="UK four-aspect colour light signal showing single yellow (Caution)"
            loading="lazy"
          />
          <figcaption>Yellow — Caution</figcaption>
        </figure>
        <figure className="lesson-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/UK_Railway_Signal_-_4_Aspect_-_Preliminary_Caution.svg"
            alt="UK four-aspect colour light signal showing double yellow (Preliminary Caution)"
            loading="lazy"
          />
          <figcaption>Double Yellow — Preliminary Caution</figcaption>
        </figure>
        <figure className="lesson-figure">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UK_Railway_Signal_-_4_Aspect_-_Proceed.svg"
            alt="UK four-aspect colour light signal showing green (Proceed)"
            loading="lazy"
          />
          <figcaption>Green — Proceed</figcaption>
        </figure>
      </div>

      <h3>Semaphore Signals (Historical)</h3>
      <p>
        Before colour lights, railways used mechanical <strong>semaphore</strong> signals —
        pivoting arms on tall posts, operated by wire from the signal box lever frame.
        Horizontal arm = danger; angled down at 45° = clear. A few semaphore-signalled lines
        survive in the UK and are being progressively replaced.
      </p>
      <p>
        Semaphore signals came in two principal types: <strong>home signals</strong> (with a
        square-ended arm, painted red with a white stripe) which controlled entry into the
        block section, and <strong>distant signals</strong> (with a fishtail/notched end,
        painted yellow with a black chevron) which gave advance warning of the home signal's
        state. A distant signal at "caution" warned the driver that the home signal ahead
        was at danger; a distant at "clear" indicated the home was also clear. This two-signal
        arrangement provided the Victorian equivalent of the yellow/green aspect system.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/British_home_and_distant_railway_semaphore_RYG_signals.svg"
          alt="Diagram showing British home and distant semaphore signals in their stop and clear positions, with colour coding"
          loading="lazy"
          style={{ maxWidth: '400px' }}
        />
        <figcaption>
          British home and distant semaphore signals. Horizontal arm = danger/caution; lowered arm = clear.
          Image: <a href="https://commons.wikimedia.org/wiki/File:British_home_and_distant_railway_semaphore_RYG_signals.svg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, Public Domain
        </figcaption>
      </figure>

      <h3>Signal Types and Functions</h3>
      <ul>
        <li><strong>Main signals (home/starter):</strong> Control movements into block sections. Can display danger (red) and proceed aspects. The <em>home signal</em> protects the approach to a station or junction; the <em>starter</em> authorises departure into the next block section.</li>
        <li><strong>Subsidiary signals:</strong> Small signals permitting movement at restricted speed (typically 15 mph). Includes <em>calling-on</em> signals (allowing a train to enter an occupied platform), <em>warning</em> signals, and <em>shunt-ahead</em> signals.</li>
        <li><strong>Shunting signals:</strong> Control low-speed movements within station/yard limits. Typically position-light (white lights in different arrangements). Two horizontal lights = stop; one diagonal pair = proceed.</li>
        <li><strong>Repeater signals:</strong> Repeat the aspect of a signal that has poor sighting (e.g. around a curve), giving the driver earlier warning. Identified by a distinctive triangular plate.</li>
        <li><strong>Banner repeaters:</strong> A miniature semaphore arm mounted on a post, repeating the aspect of the signal ahead. Used in locations where a full repeater is not practical.</li>
      </ul>

      <h3>Route Indicators and Feather Signals</h3>
      <p>
        At junctions where multiple routes diverge, the driver needs to know not just that
        the signal is clear, but <em>which route</em> has been set. This is communicated by
        <strong> junction indicators</strong>:
      </p>
      <ul>
        <li><strong>Feather (junction indicator):</strong> A row of white lights extending at an angle from the main signal, indicating the diverging route. A feather to the upper-left means the left-hand route is set; upper-right means the right-hand route. Multiple feathers can indicate multiple possible diverging routes.</li>
        <li><strong>Theatre indicator:</strong> A small alphanumeric display showing a route code (letter or number) indicating which platform or route has been set. Common at complex station approaches where multiple routes diverge.</li>
        <li><strong>Position-light junction indicator:</strong> Used on some routes where the diverging route has a lower speed limit. The driver must observe the indicator to know the permitted speed.</li>
      </ul>

      <h3>AWS and TPWS</h3>
      <p>
        <strong>AWS (Automatic Warning System):</strong> A magnet between the rails triggers an
        audible warning in the cab at every signal. At green, the driver hears a bell (actually
        a brief electronic tone on modern equipment). At any
        restrictive aspect, the driver hears a horn and must acknowledge within 2.5 seconds or
        brakes apply automatically. AWS was developed in the 1950s and is fitted across the
        UK network. Its limitation is that it does not distinguish between a single yellow
        (next signal is red) and a double yellow (two signals ahead are clear) — both
        give the same warning. The driver must observe the signal aspect visually.
      </p>
      <p>
        <strong>TPWS (Train Protection and Warning System):</strong> Two pairs of loops at
        signals measure the train's speed. If a train passes a red signal, or approaches one
        too fast to stop, TPWS triggers an emergency brake application. TPWS was installed
        across the UK network after the Ladbroke Grove disaster (1999). It works by comparing
        the time a train takes to pass between two closely spaced loops — from this, the
        train's speed is calculated. If the speed exceeds the permitted value, the onboard
        TPWS equipment immediately applies the emergency brake without any driver intervention.
      </p>
      <p>
        TPWS has two operating modes: <strong>Overspeed Sensor (OSS)</strong>, which checks
        the approach speed at a restrictive signal, and <strong>Train Stop System (TSS)</strong>,
        which triggers a brake application if the train passes a signal at danger. Together,
        they provide a safety net that catches the vast majority of SPADs (Signals Passed at
        Danger) and over-speed approaches. However, TPWS has limitations: at very high speeds,
        a train may be travelling too fast for even an emergency brake application to prevent
        it reaching the hazard point — this is one reason why ETCS is required on lines above
        125 mph.
      </p>

      <h3>SPADs: Signals Passed at Danger</h3>
      <p>
        A <strong>SPAD</strong> occurs when a train passes a signal displaying a red (danger)
        aspect without authority. SPADs are one of the most significant safety risks on the
        railway. Their severity depends on the <strong>overrun distance</strong> and what lies
        beyond the signal: an overlap (safe), an occupied section (collision risk), or a set
        of points (derailment risk). SPADs are categorised by risk: Category A (most serious,
        potential for collision or derailment) through to Category D (lowest risk, minimal
        overrun into an unoccupied overlap).
      </p>
      <p>
        Reducing SPADs is a multi-layered challenge. Engineering measures include AWS, TPWS,
        and ETCS (which physically prevents SPADs by supervising the train's speed profile).
        Operational measures include driver training, fatigue management, improved signal
        sighting, and signal positioning reviews. Human factors research has identified that
        the most common SPAD causes are <strong>distraction</strong>,
        <strong> misreading the signal</strong> (e.g., reading a signal intended for an
        adjacent track), and <strong>expectation</strong> (the driver expects a green signal
        based on previous experience and fails to register a red).
      </p>

      <Callout type="analogy">
        The block system is a <strong>mutex / semaphore</strong> — and this is not a coincidence.
        The computer science term "semaphore" was directly borrowed from railway signalling by
        Edsger Dijkstra in 1965. A railway semaphore controls access to a shared resource (the
        block section), permitting only one train (thread) at a time. The concepts of mutual
        exclusion, deadlock, and starvation all have direct railway parallels. A "deadlock" occurs
        when two trains on a single-track line face each other with nowhere to pass. "Starvation"
        occurs when low-priority freight trains are perpetually held for higher-priority passenger
        services and never get a path.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'The logic that enforces block rules and detects train positions.' },
        { target: 'm4-l3', label: 'ETCS, CBTC & Future', desc: 'How modern systems replace lineside signals with cab signalling.' },
        { target: 'm0-l1', label: 'Why Railways Work', desc: 'Braking distance — the reason signalling exists.' },
      ]} />
    </>
  );
}

function M4L2({ goTo }) {
  return (
    <>
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

function M4L3({ goTo }) {
  return (
    <>
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

function M4L4({ goTo }) {
  return (
    <>
      <h3>Point Machines</h3>
      <p>
        A <strong>point machine</strong> is the electromechanical device that moves switch
        blades between their normal and reverse positions. Key types:
      </p>
      <ul>
        <li>
          <strong>Clamp lock (e.g., HW 2000, Alstom/Clamp Lock):</strong> An electric motor
          drives the blades, and a separate clamp mechanism locks them in position and provides
          detection. The clamp must be fully engaged before the interlocking will accept that
          the points are "detected and locked." The clamp lock provides both locking force and
          detection in a single mechanism — if the clamp cannot fully engage (e.g., an
          obstruction between the blade and stock rail), detection is not achieved and the
          signal stays at red.
        </li>
        <li>
          <strong>HW (Hydraulic / Westinghouse) types (e.g., M63, Hy-Drive):</strong> Use
          hydraulic power for the throw and a mechanical locking mechanism. Capable of moving
          high-speed turnouts with very long switch blades (up to 40 metres on high-speed
          lines). The hydraulic system provides smooth, controlled movement that is less likely
          to damage the switch blades than a violent electric throw.
        </li>
        <li>
          <strong>In-bearer point machines (e.g., Vossloh Cogifer CEVA, Alstom MET):</strong>
          Mounted within the sleeper/bearer, minimising the lineside footprint. Particularly
          suited to slab track and tunnel installations where space adjacent to the track
          is extremely limited.
        </li>
        <li>
          <strong>Powered stretcher bars:</strong> Instead of a single point machine at the
          toe, multiple drive units along the length of the switch ensure that long, flexible
          switch blades are held firmly against the stock rail along their entire length. Used
          on high-speed turnouts where a single point of drive cannot guarantee blade-to-rail
          contact over the full switch length.
        </li>
      </ul>

      <h3>Detection and Proving</h3>
      <p>
        It is not sufficient to simply command the points to move — the system must
        <strong> detect</strong> that they have actually reached the commanded position and are
        properly secured. Detection circuits (mechanical contacts or electronic sensors) at
        both the toe and heel of the switch blades confirm position. If detection is not
        obtained within a timeout (typically 7–10 seconds), a "points failure" is declared and
        the interlocking holds all relevant signals at danger.
      </p>
      <p>
        The detection system must confirm two conditions: that the <strong>operating blade</strong>
        is firmly against the stock rail (the "closed" blade), and that the <strong>non-operating
        blade</strong> has moved sufficiently far from its stock rail (the "open" blade) to
        allow a wheel flange to pass safely. The required gap on the open side is typically
        100–115 mm. If the open blade is not fully clear, a flange could strike it and cause
        a derailment. The detection tolerances are measured in single-digit millimetres — this
        is precision engineering in a lineside environment exposed to weather, vibration, and
        contamination.
      </p>

      <h3>Points Heating</h3>
      <p>
        In cold weather, snow and ice can accumulate between the switch blade and the stock
        rail, preventing the blade from closing properly. <strong>Points heating</strong>
        systems combat this by warming the switch area. Technologies include:
      </p>
      <ul>
        <li><strong>Electric trace heating:</strong> Resistance heating elements installed along the stock rail and switch blade. Thermostatically controlled, activating when temperature drops below a threshold (typically 4°C) and moisture is detected.</li>
        <li><strong>Gas heating:</strong> Propane burners beneath the switch blades. More powerful than electric but requires gas supply infrastructure and is a fire risk near vegetation.</li>
        <li><strong>Geothermal:</strong> Some systems circulate warm water from underground heat exchangers through pipes beneath the track — a sustainable solution but high capital cost.</li>
      </ul>
      <p>
        Points heating is controlled by SCADA systems that monitor temperature and switch
        health remotely, activating heating proactively before conditions become hazardous.
        On the UK network, points heating failures during winter are one of the most common
        causes of disruption.
      </p>

      <h3>Route Setting Sequence</h3>
      <p>
        When a signaller (or an automated system) requests a route, the interlocking executes
        a rigorous five-step sequence:
      </p>
      <ol>
        <li><strong>Verify no conflict:</strong> Check that no conflicting route is currently set or locked. Check the route locking table for clashes.</li>
        <li><strong>Command points:</strong> Send movement commands to all points in the route that are not already in the required position.</li>
        <li><strong>Detect and lock:</strong> Wait for all points to report detection in the correct position. Lock them so they cannot be moved by another route request.</li>
        <li><strong>Check track clear:</strong> Verify that all track sections in the route (and the overlap beyond the destination signal) are unoccupied.</li>
        <li><strong>Clear signal:</strong> Only after all preceding steps are satisfied, the entrance signal is released to display a proceed aspect.</li>
      </ol>
      <p>
        The entire sequence typically takes 5–15 seconds, depending on how many points need
        to move and their travel time. On a busy junction where routes are set and released
        constantly, this cycle repeats dozens of times per hour. <strong>Automatic Route
        Setting (ARS)</strong> systems automate this process by reading the timetable and
        setting routes at the optimal time without signaller intervention, freeing the
        signaller to focus on disruption management.
      </p>

      <h3>Route Release and Approach Locking</h3>
      <p>
        After a train has traversed a route, the sections are released progressively:
      </p>
      <ul>
        <li><strong>Sequential release:</strong> Each track section is released as the train's tail clears it and a timer expires (ensuring a following train cannot immediately enter).</li>
        <li><strong>Sectional release:</strong> Similar but allows earlier release of sections behind the train, improving capacity at busy junctions. Points are released as soon as the train clears them, not waiting for the entire route to be released.</li>
      </ul>
      <p>
        <strong>Approach locking</strong> is a critical safety feature. Once a signal has
        cleared and a train is approaching, the route cannot be cancelled immediately — doing
        so could cause the train to enter a danger area at speed. Instead, the signal is
        returned to red and an approach release timer starts (typically 120 seconds on plain
        line, longer on high-speed approaches). Only after the timer expires (or the train has
        been proved stopped) can the route be released and the points freed for another route.
        This ensures that a signal is never pulled back to red without adequate protection
        for an approaching train.
      </p>

      <h3>Signal Overlaps</h3>
      <p>
        Beyond every stop signal, an <strong>overlap</strong> is provided — an additional
        length of track (typically 180 m, but up to 370 m or more on high-speed routes) that
        must be clear and locked before the signal can show a proceed aspect. The overlap
        provides protection in case a driver misjudges their braking and overruns the signal.
      </p>
      <p>
        Overlap design involves trade-offs. A longer overlap provides greater safety margin
        but "sterilises" more track — the overlap track sections cannot be used by conflicting
        routes, reducing junction capacity. <strong>Swinging overlaps</strong> allow the
        overlap to be set in different directions depending on which route is next required,
        improving flexibility. Some modern interlockings use <strong>approach-release
        overlaps</strong> that shorten or release the overlap after a defined time, freeing
        the track for other movements once the approaching train has had sufficient time to
        stop.
      </p>

      <h3>Level Crossings</h3>
      <p>
        Where roads cross railways at grade, <strong>level crossings</strong> are provided.
        Each type represents a different balance of safety, cost, and road-user delay:
      </p>
      <ul>
        <li><strong>AHB (Automatic Half Barrier):</strong> Barriers close automatically when a train approaches, covering the approach (left) side only. Road users must obey flashing red lights and not weave around barriers. Triggered by traction on approach track circuits. Minimum road closure time (MRT) is a key design parameter — too short and barriers don't close in time; too long and road users become frustrated and may attempt to cross.</li>
        <li><strong>AOCL (Automatic Open Crossing, Locally Monitored):</strong> Warning lights only, no barriers. The driver monitors the crossing and checks it is clear before passing over. Used at low-traffic crossings on low-speed lines.</li>
        <li><strong>MCB (Manually Controlled Barrier):</strong> Signaller-operated full barriers with CCTV monitoring. The signaller closes the barriers, observes the crossing on CCTV to confirm it is clear, then clears the signal. Higher safety, but road closure time depends on signaller workload and observation time.</li>
        <li><strong>MCB-OD (MCB with Obstacle Detection):</strong> Full barriers with radar-based obstacle detection that scans the crossing area and alerts the signaller if anything remains between the barriers. Provides an additional safety layer beyond CCTV observation.</li>
        <li><strong>UWC (User Worked Crossing):</strong> A gate that the user (farmer, pedestrian) opens and closes. Relies on the user checking for trains. Found on rural routes. Being progressively closed or upgraded.</li>
        <li><strong>Footpath crossings:</strong> Pedestrian-only crossings with miniature warning lights (MWL) or, on quieter lines, simply a "Stop, Look, Listen" sign. Represent a significant safety concern, particularly at locations near schools or with elderly users.</li>
      </ul>

      <h3>Level Crossing Risk Assessment</h3>
      <p>
        Level crossings are among the highest-risk locations on the railway. In the UK,
        Network Rail uses the <strong>All Level Crossing Risk Model (ALCRM)</strong> to assess
        and compare risk across all crossings on the network. The model combines factors
        including road and rail traffic volumes, train speed, sight lines, crossing type,
        historical incident data, and user behaviour patterns to produce a risk score for
        each crossing. This score drives prioritisation of investment in upgrades, closures,
        and alternative provision (bridges or underpasses).
      </p>
      <p>
        The long-term strategy is to <strong>reduce the number of level crossings</strong>
        through closure (where alternative routes exist) or replacement with grade-separated
        crossings. However, with over 6,000 level crossings in the UK alone, and each closure
        or grade separation costing millions of pounds, this is a generational programme.
      </p>

      <h3>The Role of the Signaller</h3>
      <p>
        The signaller (dispatcher in US terminology) is the human operator who sets routes,
        manages conflicts, responds to incidents, and maintains the safe flow of traffic.
        Even with high levels of automation, the signaller remains the decision-maker for
        abnormal situations — perturbations, failures, emergencies, and possessions.
      </p>
      <p>
        In the era of Automatic Route Setting (ARS), the signaller's role has shifted from
        routine route-setting (which the computer handles far more consistently and tirelessly)
        to <strong>exception management</strong>. When a service is cancelled, a train fails,
        a possession overruns, or an incident occurs, the signaller must intervene to replan
        the service, prioritise movements, and coordinate with control room staff and train
        operators. This requires a deep understanding of the railway infrastructure, the
        timetable, and the operational rules — and the ability to make rapid decisions under
        pressure with incomplete information. Signaller training takes approximately 12–18
        months and is considered one of the most demanding roles on the railway.
      </p>

      <Callout type="analogy">
        Route setting is a <strong>database transaction</strong>. It is atomic (all five steps
        succeed or the route is not set), consistent (the interlocking always transitions from
        one safe state to another), isolated (conflicting routes cannot be set simultaneously),
        and durable (once set, the route persists until properly released). If any step fails
        — points don't detect, track isn't clear, a conflict exists — the entire transaction
        rolls back and the signal stays at red. This is ACID compliance enforced by hardware
        and formal logic, with human lives depending on its correctness. The signaller's role
        has evolved from "manually executing transactions" to "DBA managing the cluster" — they
        monitor the automated system, intervene when it cannot cope, and handle the exceptions
        that the algorithms cannot resolve.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'The interlocking that executes the route-setting logic.' },
        { target: 'm1-l3', label: 'Switches & Crossings', desc: 'The physical track components that point machines operate.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'The signals controlled by route setting.' },
        { target: 'm7-l2', label: 'SCADA & Remote Monitoring', desc: 'Points heating and crossing equipment are monitored via SCADA.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM4Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm4-l1': return <M4L1 goTo={goTo} />;
    case 'm4-l2': return <M4L2 goTo={goTo} />;
    case 'm4-l3': return <M4L3 goTo={goTo} />;
    case 'm4-l4': return <M4L4 goTo={goTo} />;
    default: return null;
  }
}
