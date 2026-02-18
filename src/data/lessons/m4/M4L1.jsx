import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M4L1({ goTo }) {
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

export const quiz = [
  { text: 'What is the fundamental rule of the block system?', options: ['Trains must travel at constant speed', 'Only one train may occupy a block section at a time', 'Signals must change every 60 seconds', 'All blocks must be the same length'], correct: 1, explanation: 'The absolute block system ensures only one train per section. Everything in signalling exists to enforce this rule.' },
  { text: 'In four-aspect signalling, what does a double yellow signal mean?', options: ['Stop immediately', 'Proceed with caution — next signal is red', 'Preliminary caution — expect next signal to be yellow', 'Proceed at full speed'], correct: 2, explanation: 'Double yellow = preliminary caution. The next signal will be yellow, and the one after that red. This gives enough advance warning for high-speed braking.' },
  { text: 'What was the original purpose of the semaphore signal?', options: ['To decorate stations', 'To communicate movement authority using visible arm positions', 'To measure wind speed', 'To signal to passengers'], correct: 1, explanation: 'Semaphores use movable arms: horizontal = stop, lowered 45° = clear. They replaced time-interval working which had caused collisions.' },
  { text: 'What does AWS (Automatic Warning System) do?', options: ['Automatically drives the train', 'Provides audible/visual cab warning when passing signals at caution or danger', 'Controls level crossing barriers', 'Manages station announcements'], correct: 1, explanation: "AWS uses track magnets to trigger cab alerts. If the driver doesn't acknowledge a warning within seconds, brakes apply automatically." },
];
