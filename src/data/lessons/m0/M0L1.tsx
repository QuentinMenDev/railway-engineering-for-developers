import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M0L1({ goTo }: LessonProps) {
  return (
    <>
      <h3>The Physics of Steel on Steel</h3>

      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 300 80" style={{ width: '100%', maxWidth: '300px' }}>
            {/* Simple I-beam rail symbol */}
            <rect x="55" y="8" width="30" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
            <rect x="65" y="14" width="10" height="30" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
            <rect x="50" y="44" width="40" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
            {/* Labels */}
            <text x="100" y="15" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← head</text>
            <text x="100" y="34" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← web</text>
            <text x="100" y="52" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace">← foot</text>
            {/* Rolling resistance comparison */}
            <text x="200" y="20" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">steel/steel: 0.1–0.3%</text>
            <text x="200" y="35" fill="var(--text-dim)" fontSize="9" fontFamily="JetBrains Mono, monospace">rubber/road: 1–2%</text>
            <text x="200" y="55" fill="var(--accent)" fontSize="9" fontFamily="JetBrains Mono, monospace">≈ 10× advantage</text>
          </svg>
        </div>
        <figcaption>Schematic: Simplified rail I-beam cross-section (head, web, foot) and the rolling resistance advantage of steel on steel.</figcaption>
      </figure>

      <p>
        Railways work because of a single, elegant physical fact: a steel wheel rolling on a
        steel rail produces extraordinarily low friction. The rolling resistance coefficient is
        just <strong>0.001 to 0.003</strong> (0.1–0.3%), compared with 0.01–0.02 (1–2%) for
        rubber tyres on asphalt. This order-of-magnitude advantage means a single locomotive
        can haul a hundred wagons — something no road vehicle could dream of.
      </p>
      <p>
        This efficiency translates directly into energy consumption. Rail freight uses roughly
        <strong>5–10 times less energy per tonne-kilometre</strong> than road haulage. For
        passenger transport, rail is 3–5 times more efficient than private cars and dramatically
        better than domestic aviation for comparable distances.
      </p>

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Close-up photo of a steel train wheel on a steel rail, showing the contact patch and the shiny wear strip on the rail head — illustrating the steel-on-steel interface that makes railways efficient.</p>
        </div>
        <figcaption>Steel wheel on steel rail — the fundamental low-friction interface that makes railways possible.</figcaption>
      </figure>

      <h3>The Adhesion Trade-Off</h3>
      <p>
        Low rolling resistance comes at a cost: the coefficient of friction between steel wheel
        and steel rail is only <strong>0.15–0.35</strong>, depending on conditions. On a wet,
        leaf-contaminated autumn rail, it can plummet to 0.05. This places hard limits on
        what trains can do:
      </p>
      <ul>
        <li><strong>Gradient limits:</strong> Mainline railways are typically limited to 1–2.5% gradients. High-speed lines seldom exceed 3.5%. Anything steeper requires rack railways or cable haulage.</li>
        <li><strong>Braking distance:</strong> A train travelling at 200 km/h needs approximately <strong>3 km to stop</strong> — versus around 150 m for a car at the same speed. This single fact drives the entire signalling discipline.</li>
        <li><strong>Traction limits:</strong> Locomotives can only apply as much tractive effort as adhesion allows before wheels spin. Modern traction control systems manage this continuously.</li>
      </ul>

      <Callout type="analogy">
        Think of adhesion as an <strong>API rate limit</strong>. You can push data through the
        connection very efficiently (low rolling resistance), but there is a hard ceiling on how
        much force you can apply at any instant (the adhesion limit). Exceed the rate limit and
        everything degrades — wheels spin, braking fails, and the system enters an unstable state.
        The entire railway system is engineered around this constraint, just as a well-designed
        application is architected around its rate limits.
      </Callout>

      <h3>Continuously Welded Rail (CWR)</h3>
      <p>
        Steel expands and contracts with temperature. A rail that is 1 km long will change
        length by roughly 11.5 mm for every 1°C change in temperature. In jointed track (with
        gaps every 18–20 m), this is accommodated by expansion joints. But joints are noisy,
        cause wear, and limit speed.
      </p>
      <p>
        <strong>CWR</strong> eliminates joints by welding rails into continuous strings hundreds
        of metres (or kilometres) long. The rail is laid at a <em>stress-free temperature</em>
        (typically 21–27°C in temperate climates). Below this temperature, the rail is in
        tension — risking fracture. Above it, the rail is in compression — risking buckling.
        Managing this thermal stress is one of the key maintenance challenges on any railway.
      </p>

      <h3>Why This Matters for Every Other Discipline</h3>
      <p>
        Every subsystem in railway engineering exists because of these fundamental physics.
        Signalling exists because trains cannot stop quickly. Track geometry is constrained
        because adhesion limits the forces you can apply. Electrification voltage choices are
        influenced by the energy efficiency advantage that makes rail worthwhile. Understanding
        these foundations will make every subsequent lesson click into place.
      </p>

      <Connections goTo={goTo} items={[
        { target: 'm1-l1', label: 'Track Structure', desc: 'How the physical layers are built to exploit low rolling resistance.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'How gradient and curvature limits flow from adhesion constraints.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Why signalling exists — braking distance demands advance warning.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the approximate rolling resistance of steel wheel on steel rail?', options: ['5–10% of the load', '1–2% of the load', '0.1–0.3% of the load', '0.01–0.03% of the load'], correct: 2, explanation: 'Steel on steel gives approximately 0.1–0.3% rolling resistance — about 10x less than rubber on asphalt. This is the fundamental reason railways are so energy-efficient for heavy loads.' },
  { text: "Why can't conventional railways climb steep gradients?", options: ['Rails would buckle under the strain', 'Low wheel-rail adhesion limits traction on slopes', 'Train engines are not powerful enough', 'Safety regulations prevent it'], correct: 1, explanation: 'The same low friction that makes railways efficient also limits adhesion. With a friction coefficient of only 0.15–0.35, trains struggle to maintain grip on steep slopes, typically limiting gradients to 2–3%.' },
  { text: 'Compared to road transport, how much less energy does rail typically use per tonne-km?', options: ['About the same', 'About 2x less', 'About 5–10x less', 'About 100x less'], correct: 2, explanation: 'Rail transport typically uses 5–10x less energy per tonne-km than road freight, primarily because of the much lower rolling resistance of steel on steel.' },
  { text: 'What happens to a continuously welded rail when temperature rises significantly?', options: ['It becomes more flexible', 'It develops compressive stress and risks buckling', 'It expands freely at the ends', 'Nothing — modern steel is temperature-resistant'], correct: 1, explanation: 'CWR cannot expand freely, so temperature increases create compressive stress in the rail. If this exceeds the restraining force from clips and ballast, the rail can buckle — a serious safety risk.' },
];
