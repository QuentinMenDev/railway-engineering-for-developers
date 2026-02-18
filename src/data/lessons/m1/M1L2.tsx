import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M1L2({ goTo }: LessonProps) {
  return (
    <>
      <h3>Gauge: The Fundamental Interface</h3>
      <p>
        Track gauge is the perpendicular distance between the inner faces of the two rails,
        measured 14 mm below the running surface. <strong>Standard gauge</strong> is
        1,435 mm (4 ft 8½ in), used across most of Europe, North America, China, and
        Australia's main corridors. But the world has many gauges:
      </p>
      <ul>
        <li><strong>Indian broad gauge:</strong> 1,676 mm — the widest major system</li>
        <li><strong>Russian/Finnish gauge:</strong> 1,520 mm — a strategic deliberate difference</li>
        <li><strong>Iberian gauge:</strong> 1,668 mm — Spain and Portugal's legacy gauge, now being replaced by standard gauge on high-speed lines</li>
        <li><strong>Metre gauge:</strong> 1,000 mm — widespread in Southeast Asia, South America</li>
        <li><strong>Cape gauge:</strong> 1,067 mm — Southern Africa, Japan (narrow gauge lines), Queensland</li>
        <li><strong>Narrow gauge:</strong> 600 mm and 750 mm — industrial, mining, and light railways</li>
      </ul>
      <p>
        Gauge breaks at borders require bogie-changing facilities, break-of-gauge transfers,
        or variable-gauge wheelsets (as used on the Spanish Talgo trains crossing between
        Iberian 1,668 mm and standard gauge). The most dramatic solution is <strong>dual
        gauge</strong> track — three or four rails on shared sleepers allowing trains of
        different gauges to share the same corridor. This is common in Australia where
        standard and broad gauge lines merge.
      </p>

      <Callout type="info" label="Why 1,435 mm?">
        The standard gauge derives from the track width used by George Stephenson on early
        colliery railways in northeast England. It became dominant through the UK's Gauge
        Act of 1846, which mandated it after the destructive "gauge wars" between Stephenson's
        narrow gauge and Brunel's 7 ft broad gauge on the Great Western Railway. Brunel's
        gauge was technically superior for speed and stability, but the network effect of
        existing narrow-gauge mileage won.
      </Callout>

      <h3>Horizontal Alignment</h3>
      <p>
        A horizontal alignment consists of three element types: <strong>straights</strong>
        (tangent track), <strong>transition curves</strong> (clothoids / Euler spirals), and
        <strong>circular curves</strong>. You never place a circular curve directly after a
        straight — the transition curve provides a gradual change of curvature from zero
        (straight) to 1/R (the circular curve radius), preventing sudden lateral forces
        on passengers and track.
      </p>
      <p>
        The <strong>clothoid</strong> (Euler spiral) is the standard transition curve form
        because its curvature increases linearly with arc length. This means the rate of
        change of lateral acceleration is constant — giving passengers a smooth, predictable
        onset of lateral force. The clothoid is defined by a single parameter <em>A</em>,
        where A² = R × L (R = radius of the circular curve, L = length of the transition).
        Longer transitions (higher A) give a gentler ride but consume more alignment length.
      </p>
      <p>
        In alignment design, curves are described by their <strong>radius</strong> (in metres).
        Tighter curves have smaller radii and impose greater constraints. Typical minimum
        radii are:
      </p>
      <ul>
        <li><strong>High-speed (300 km/h):</strong> R ≥ 5,000–7,000 m</li>
        <li><strong>Conventional mainline (160 km/h):</strong> R ≥ 1,000–1,500 m</li>
        <li><strong>Regional/suburban (80–120 km/h):</strong> R ≥ 300–600 m</li>
        <li><strong>Depots and yards (15–30 km/h):</strong> R ≥ 150–200 m</li>
        <li><strong>Tramways:</strong> R as low as 20–25 m (with special rail and bogies)</li>
      </ul>

      <Callout type="analogy">
        Transition curves are <strong>CSS easing functions</strong>. Just as a CSS
        <code>ease-in-out</code> provides a smooth acceleration and deceleration rather than
        a jarring instant change, a clothoid transition provides a linear increase of curvature
        from zero to the target radius. The maths is different (cubic Bezier vs Euler spiral),
        but the design intent is identical: smooth the change to avoid abrupt discontinuities.
      </Callout>

      <h3>Cant (Superelevation)</h3>
      <p>
        On curves, the outer rail is raised above the inner rail. This <strong>cant</strong>
        (or superelevation) tilts the train inward, counteracting centrifugal force. The
        <em>equilibrium cant</em> is the theoretical cant where the resultant force is
        perpendicular to the rail — passengers feel no lateral force. In practice, trains run
        at varying speeds, so designers use a <strong>cant deficiency</strong>: the difference
        between the applied cant and the equilibrium cant for the fastest train.
      </p>
      <p>
        The equilibrium cant formula is: <em>E<sub>q</sub> = G × V² / (g × R)</em>, where
        G is the gauge (1,435 mm), V is speed (m/s), g is gravitational acceleration, and
        R is the curve radius. In practical units:
        <em> E<sub>q</sub> (mm) ≈ 11.8 × V²(km/h) / R(m)</em>.
      </p>
      <p>
        Typical limits:
      </p>
      <ul>
        <li><strong>Maximum applied cant:</strong> 150–180 mm (limited by freight trains stopped on curves — too much cant causes the load to shift inward)</li>
        <li><strong>Cant deficiency (conventional):</strong> 90–110 mm</li>
        <li><strong>Cant deficiency (tilting trains):</strong> 150–275 mm — tilting compensates for the missing cant, so passengers feel comfortable even at high deficiency</li>
        <li><strong>Cant excess:</strong> Occurs when slow trains (especially freight) run on track canted for faster trains. Excessive cant excess causes rail corrugation on the inner (low) rail</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Railway_superelevation_at_Dunbar%2C_July_2012.jpg"
          alt="A train on superelevated (canted) track at Dunbar, Scotland, showing the outer rail raised above the inner rail on a curve"
          loading="lazy"
        />
        <figcaption>
          Superelevation (cant) clearly visible on curved track at Dunbar, Scotland. The outer rail is raised to counteract centrifugal force.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Railway_superelevation_at_Dunbar,_July_2012.jpg" target="_blank" rel="noopener noreferrer">Calvinps</a>, Public Domain
        </figcaption>
      </figure>

      <h3>Vertical Alignment</h3>
      <p>
        Vertical alignment is described by <strong>gradients</strong> (slope as a percentage
        or as a ratio, e.g., "1 in 100" = 1%)
        and <strong>vertical curves</strong> (parabolic transitions between different gradients).
        Where two gradients meet, a vertical curve smooths the change to prevent harsh
        vertical acceleration on rolling stock. The minimum radius of a vertical curve depends
        on line speed: higher speeds require larger radii to keep vertical acceleration within
        passenger comfort limits (typically ≤ 0.3 m/s²).
      </p>
      <p>
        Mainline gradient limits are typically 1–2.5% for heavy mixed traffic. High-speed lines may
        reach 3.5% since they carry only lightweight EMUs with high power-to-weight ratios.
        Freight railways aim for even flatter gradients, as hauling 2,000 tonnes up a 1% grade
        requires enormous tractive effort. Some notable steep gradients:
      </p>
      <ul>
        <li><strong>Lickey Incline (UK):</strong> 1 in 37.7 (2.65%) — the steepest sustained adhesion gradient on a UK mainline</li>
        <li><strong>Gotthard Base Tunnel (Switzerland):</strong> Maximum 1.25% — kept flat for 2,000-tonne freight trains</li>
        <li><strong>Rack railways:</strong> The Pilatus Railway in Switzerland reaches 48% using a Locher rack system — the steepest rack railway in the world</li>
      </ul>

      <h3>Speed–Radius–Cant Relationship</h3>
      <p>
        The permitted speed on a curve depends on three variables: the curve radius, the
        applied cant, and the maximum permissible cant deficiency. The simplified
        relationship is: <em>V<sub>max</sub> = √(R × (D + I) / 11.8)</em>, where V is in
        km/h, R in metres, D is the applied cant in mm, and I is the maximum cant deficiency
        in mm.
      </p>
      <p>
        This relationship drives the entire alignment design process:
        faster railways need wider curves, which means more land, longer tunnels, and higher
        construction costs. A curve designed for 160 km/h with D=150 mm and I=100 mm needs a
        minimum radius of about 1,215 m. Doubling the speed to 320 km/h (with the same
        parameters) demands R ≈ 4,860 m — four times larger. This quadratic relationship
        between speed and radius is why high-speed lines require such sweeping alignments
        and why upgrading existing lines to higher speeds is geometrically constrained.
      </p>

      <h3>Track Geometry Tolerances and Measurement</h3>
      <p>
        Real track is not perfect. The quality of track geometry is measured by recording
        deviations from the design alignment. Key parameters include:
      </p>
      <ul>
        <li><strong>Gauge variation:</strong> Deviation from nominal gauge (tight gauge risks wheel climb; wide gauge risks derailment)</li>
        <li><strong>Twist:</strong> The rate of change of cant over a given length — excessive twist causes one wheel to unload and is a primary derailment risk</li>
        <li><strong>Top (longitudinal level):</strong> Vertical irregularities along each rail — causes pitching and bouncing</li>
        <li><strong>Alignment:</strong> Lateral position errors — causes hunting and lateral oscillation</li>
        <li><strong>Cross-level:</strong> The difference in height between the two rails at any point (effectively, cant at that point)</li>
      </ul>
      <p>
        These are measured by <strong>track recording vehicles</strong> — instrumented trains
        or trolleys that run at line speed (or close to it) and record geometry continuously.
        Network Rail's New Measurement Train (NMT), for example, records track geometry,
        rail profile, overhead wire position, and ride quality at up to 200 km/h, producing a
        complete survey of the network multiple times per year. The data feeds directly into
        maintenance planning systems.
      </p>

      <Connections goTo={goTo} items={[
        { target: 'm0-l3', label: "Developer's Mental Model", desc: 'Gauge as API contract / interface specification.' },
        { target: 'm1-l3', label: 'Switches & Crossings', desc: 'Where geometry gets most complex — the turnout.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'The physical layers that carry these geometric alignments.' },
        { target: 'm1-l4', label: 'Track Representations', desc: 'How this geometry is represented in schematic and geographic drawings.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the standard gauge measurement?', options: ['1,000 mm', '1,435 mm', '1,524 mm', '1,668 mm'], correct: 1, explanation: '1,435 mm (4 ft 8½ in) is the international standard gauge, used on ~55% of world railways. It originated from early colliery tramways.' },
  { text: 'What is the purpose of cant (superelevation) on curved track?', options: ['To improve drainage', 'To counteract centrifugal force on trains in curves', 'To reduce noise from wheel flanges', 'To allow higher loads on curves'], correct: 1, explanation: 'Cant raises the outer rail to counteract centrifugal force. The amount depends on design speed and curve radius.' },
  { text: 'What type of mathematical curve is used for transitions on railways?', options: ['Circular arc', 'Parabola', 'Clothoid (Euler spiral)', 'Hyperbola'], correct: 2, explanation: 'Clothoids have curvature increasing linearly with distance, giving a gradual transition — like an easing function in animation.' },
  { text: 'What is the typical maximum gradient for a mainline railway?', options: ['0.1–0.5%', '1–2.5%', '5–8%', '10–15%'], correct: 1, explanation: 'Mainlines stay below 1–2.5%. High-speed lines aim for under 3.5%. Mountain railways with rack systems can exceed 7–8%.' },
];
