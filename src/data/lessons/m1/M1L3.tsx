import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import { Turnout } from '../../../components/symbols';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M1L3({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <Turnout style={{ maxWidth: '320px' }} />
        </div>
        <figcaption>Schematic: Turnout plan view — switch toe, diverging route, crossing point, and point machine (M).</figcaption>
      </figure>

      <h3>Turnout Anatomy</h3>
      <p>
        A turnout (switch and crossing, or "set of points") is the most complex and
        maintenance-intensive piece of track on the railway. It allows a train to diverge
        from one route to another. The key components are:
      </p>
      <ul>
        <li><strong>Switch blades (switch rails):</strong> Tapered, movable rails that divert the wheel flange. They sit against the stock rails and are moved by a point machine. The taper starts from a fine tip (the "toe") and thickens over 3–6 m until it becomes full-section rail. The blade must fit tightly against the stock rail when closed to avoid creating a gap that could catch a wheel flange.</li>
        <li><strong>Stock rails:</strong> The fixed rails against which the switch blades close. They are machined on the gauge face to receive the blade tip precisely.</li>
        <li><strong>Closure rails:</strong> Connect the switch blades to the crossing. On the diverging route, these follow a curved alignment.</li>
        <li><strong>Crossing (frog):</strong> Where the two running paths intersect. The wheel must cross a gap in the rail — the "flangeway gap" — which is a significant source of noise and wear. The crossing nose (the point of the V) bears the most concentrated impact.</li>
        <li><strong>Check rails (guard rails):</strong> Positioned opposite the crossing to hold the wheel firmly and prevent it from taking the wrong path through the flangeway gap. They constrain the back-to-back dimension of the wheelset.</li>
        <li><strong>Wing rails:</strong> The rails forming the vee of the crossing nose, guiding the wheel through the flangeway gap.</li>
        <li><strong>Stretcher bars:</strong> Steel bars connecting the two switch blades to ensure they move together as a unit. If one blade is tight against the stock rail, the other must be held open at the correct distance.</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/Railway_turnout_labelled.jpg"
          alt="Overhead photograph of a railway turnout with labelled components: switch rails, stock rails, closure rails, frog/crossing, and guard rails"
          loading="lazy"
        />
        <figcaption>
          A simple turnout with key components labelled: switch blades, stock rails, closure rails, crossing (frog), and check/guard rails.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Railway_turnout_labelled.jpg" target="_blank" rel="noopener noreferrer">TeVe / Picapica</a>, Public Domain
        </figcaption>
      </figure>

      <h3>Point Machines and Detection</h3>
      <p>
        Point machines are the actuators that move the switch blades. They must meet exacting
        requirements: move the blades reliably in all weather, lock them in position, and
        report their state back to the signalling system. There are two main types:
      </p>
      <ul>
        <li>
          <strong>Electro-mechanical (clamp-lock):</strong> A motor drives a gearbox that moves
          the blades via a drive rod. Once in position, a mechanical clamp locks the blades
          against the stock rail. Detection is via separate electrical contacts that verify
          blade position. The classic UK type is the HW (hand-worked) or M63 clamp-lock machine.
          These are robust but have many moving parts subject to wear.
        </li>
        <li>
          <strong>Electro-hydraulic:</strong> Hydraulic cylinders move the blades, with the
          hydraulic pressure itself providing the locking force. Used on high-speed lines
          (e.g., the Alstom CSEE type). The hydraulic system provides smoother, more powerful
          actuation for the long, heavy blades used in high-speed turnouts.
        </li>
        <li>
          <strong>In-bearer (machine integrated into the sleeper):</strong> Modern designs like
          the Vossloh Cogifer Easyswitch integrate the actuator within the switch bearer itself,
          eliminating external rodding and reducing vandalism risk.
        </li>
      </ul>
      <p>
        <strong>Detection</strong> is safety-critical: the signalling system must know with
        certainty that the blades are correctly positioned and locked before clearing a route
        over the turnout. Detection circuits verify that the closed blade is within a tight
        tolerance (typically 3–4 mm) of the stock rail and that the open blade is far enough
        away. If detection fails, the signal protecting that turnout cannot be cleared — the
        route is "locked out."
      </p>

      <h3>Turnout Geometry: The 1-in-N System</h3>
      <p>
        Turnouts are classified by their <strong>crossing angle</strong>, expressed as 1-in-N
        (where N is the ratio of longitudinal to lateral distance). Larger N values mean
        shallower angles and higher permissible speeds:
      </p>
      <ul>
        <li><strong>1-in-9:</strong> ~40 km/h diverging speed — typical yard/station turnout</li>
        <li><strong>1-in-12:</strong> ~60 km/h — common junction turnout</li>
        <li><strong>1-in-15 to 1-in-18.5:</strong> ~80–100 km/h — used where moderate diverging speed is needed</li>
        <li><strong>1-in-20:</strong> ~100 km/h — fast junction</li>
        <li><strong>1-in-26 to 1-in-32:</strong> ~130–160 km/h — used on upgraded conventional lines</li>
        <li><strong>1-in-40 to 1-in-65:</strong> ~160–220+ km/h — high-speed turnouts, requiring movable-nose crossings</li>
      </ul>
      <p>
        A 1-in-9 turnout is about 30 m long. A 1-in-65 high-speed turnout can exceed 200 m —
        the length and cost increase dramatically with N.
      </p>

      <h3>Movable-Nose Crossings (Swing-Nose Crossings)</h3>
      <p>
        On conventional turnouts, the crossing has a fixed nose with a flangeway gap that all
        wheels must traverse. This gap creates noise, impact, and a point of unsupported running.
        For high-speed turnouts (typically 1-in-40 and above), this is unacceptable —
        the impact at speed would cause rapid wear and poor ride quality.
      </p>
      <p>
        The solution is a <strong>movable-nose crossing</strong>: the crossing nose itself
        swings to close the gap on whichever route is set. This means the wheel always runs on
        a continuous rail surface through the crossing, eliminating the impact. The nose is
        moved by its own point machine and has its own detection circuit. Movable-nose crossings
        are mechanically complex and expensive but essential for high-speed operation. They are
        standard on TGV, ICE, and Shinkansen networks.
      </p>

      <h3>Facing vs Trailing Movements</h3>
      <p>
        A <strong>facing</strong> movement is when a train approaches the switch blades first
        (the points split the route ahead). A <strong>trailing</strong> movement is when a
        train approaches the crossing first and trails through the blades. Facing movements are
        more safety-critical: if the points are set incorrectly, a facing movement will derail.
        A trailing movement will simply "trail through" and force the blades over (in older
        spring-point designs). Modern signalling pays special attention to facing point locks
        and detection.
      </p>
      <p>
        In signalling terms, any route that includes a facing movement through a set of
        points requires that those points are <strong>detected, locked, and proved</strong>
        before the signal can clear. The interlocking logic guarantees this — it is one of
        the fundamental safety principles of railway signalling.
      </p>

      <h3>Complex Layouts</h3>
      <p>
        Beyond simple turnouts, railways use several compound track formations:
      </p>
      <ul>
        <li><strong>Crossover:</strong> Two turnouts connecting adjacent parallel tracks, allowing a train to cross from one track to the other. A <strong>scissors crossover</strong> is two crossovers overlaid, allowing movement in both directions between two tracks — it contains a diamond crossing at the centre.</li>
        <li><strong>Diamond crossing:</strong> Two tracks crossing without connecting. Contains four flangeway gaps (or four movable noses). The crossing angle may be acute or obtuse.</li>
        <li><strong>Single slip:</strong> A diamond with one connecting turnout — allows a train to cross straight OR diverge in one direction.</li>
        <li><strong>Double slip:</strong> A diamond with turnouts in both directions — maximum flexibility in minimum space, but extremely complex mechanically (up to four point machines, four or more detection circuits).</li>
        <li><strong>Ladder track / tandem turnouts:</strong> A series of turnouts off one running line providing access to multiple parallel sidings, common in yards.</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Aiguillage.jpg"
          alt="Double slip points at a railway junction in Lille, France, showing two tracks crossing with switchable connections in both directions"
          loading="lazy"
        />
        <figcaption>
          Double slip points in Lille, France — two tracks cross with switchable connections in both directions, allowing maximum flexibility in minimal space.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Aiguillage.jpg" target="_blank" rel="noopener noreferrer">Remi Jouan</a>, CC BY-SA 3.0
        </figcaption>
      </figure>

      <h3>Common Failure Modes</h3>
      <ul>
        <li><strong>Wear:</strong> The crossing nose and switch blade tips suffer concentrated impact loading and wear rapidly. On busy routes, crossing noses may need replacement every 2–5 years. Manganese steel castings are used for their work-hardening properties — they get harder as they're hammered.</li>
        <li><strong>Point machine failure:</strong> Mechanical or electrical failure preventing the blades from moving or being detected. This is the single most common cause of signalling delays on many networks.</li>
        <li><strong>Gauge-corner cracking:</strong> Rail head fatigue from repeated wheel contact at unfavourable angles, especially on curved closure rails.</li>
        <li><strong>Stretcher bar breakage:</strong> The bars connecting the two switch blades can fracture, causing asymmetric movement.</li>
        <li><strong>Obstruction:</strong> Ballast stones, ice, debris, or rail clips fallen between blade and stock rail can prevent the points from closing fully, blocking detection.</li>
        <li><strong>Rail creep:</strong> Longitudinal movement of the rail through the turnout, misaligning the switch blades relative to the stock rails.</li>
      </ul>

      <Callout type="analogy">
        A turnout is an <strong>API router</strong>. Incoming requests (trains) are directed to
        one of several handlers (routes) based on the current configuration (point position).
        The 1-in-N geometry is your latency budget — a shallow angle (high N) means lower
        latency (higher speed) but requires more resources (a longer, costlier turnout). Facing
        points are like incoming request routing where getting it wrong causes a crash; trailing
        points are like response routing where errors are more forgiving.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l4', label: 'Points, Routes & Level Crossings', desc: 'How signalling controls and detects point positions.' },
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'The safety logic that prevents conflicting point movements.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'The geometric principles underlying turnout design.' },
        { target: 'm1-l4', label: 'Track Representations', desc: 'How turnout layouts are drawn in schematic and geographic views.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What are the main components of a railway turnout?', options: ['Points, rails, and signals', 'Switch rails, crossing (frog), and check rails', 'Sleepers, ballast, and clips', 'Motors, detectors, and locks'], correct: 1, explanation: 'A turnout has switch rails (movable blades), a crossing/frog (where rails intersect), and check rails (guiding opposite wheel).' },
  { text: 'What does a "1-in-9" turnout geometry mean for train speed?', options: ['Trains can pass at up to 90 km/h', 'Diverging speed is limited to about 40 km/h', 'Only freight trains can use it', 'It requires no speed restriction'], correct: 1, explanation: 'A 1-in-9 has a sharp diverging angle, limiting speed to ~40 km/h. A 1-in-40 allows 160+ km/h diverging.' },
  { text: 'What is the difference between a facing and trailing movement through points?', options: ['Facing is faster, trailing is slower', 'Facing means the train approaches switch tips first (riskier); trailing approaches from the heel', 'They are interchangeable terms', 'Facing is for passengers, trailing for freight'], correct: 1, explanation: 'In a facing movement, incorrect point setting risks derailment. In trailing, wheels naturally deflect the blades — inherently safer.' },
];
