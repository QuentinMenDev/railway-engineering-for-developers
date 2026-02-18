import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M3L2({ goTo }: LessonProps) {
  return (
    <>
      <h3>Tunnel Construction Methods</h3>
      <p>
        Tunnels are among the most expensive and complex elements of railway infrastructure.
        The choice of construction method depends on ground conditions, depth, diameter, and
        length:
      </p>
      <ul>
        <li>
          <strong>Cut-and-cover:</strong> Excavate a trench from the surface, build the tunnel
          structure, then backfill. Only feasible at shallow depth. Causes major surface
          disruption but is technically straightforward. Used extensively for early underground
          railways (the original Metropolitan Railway in London, opened 1863). Modern
          cut-and-cover uses secant pile walls or diaphragm walls to create a "box" excavation
          with minimal disturbance to adjacent structures. The technique is still used for
          shallow metro stations and portal approaches.
        </li>
        <li>
          <strong>TBM (Tunnel Boring Machine):</strong> A massive rotating cutter head
          excavates full-face while the machine simultaneously installs precast concrete
          segment rings behind it. Minimal surface disruption, consistent progress rates,
          but very high capital cost (the TBM itself costs tens of millions, and each machine
          is designed for a specific diameter). TBMs come in several variants depending on
          ground conditions:
          <ul>
            <li><strong>EPB (Earth Pressure Balance):</strong> For soft ground. The excavated soil is retained at the face under pressure to support the ground ahead. A screw conveyor controls the rate of material removal to maintain face pressure. Used on Crossrail (Elizabeth line) through London's clay, gravel, and chalk.</li>
            <li><strong>Slurry TBM:</strong> Bentonite slurry is pumped to the face under pressure to support the ground. Excavated material is mixed with slurry and pumped out. Suited to granular soils below the water table. Used on the Channel Tunnel's marine sections.</li>
            <li><strong>Hard rock TBM:</strong> Disc cutters on the head break the rock by compression. No face support needed in competent rock. Progress depends on rock hardness. Used on the Gotthard Base Tunnel (57 km through the Alps).</li>
          </ul>
          <figure className="lesson-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2012_Eurotunnel_tunnel_boring_machine_02.JPG/1280px-2012_Eurotunnel_tunnel_boring_machine_02.JPG"
              alt="A Channel Tunnel boring machine displayed as a monument, showing the massive rotating cutterhead"
              loading="lazy"
            />
            <figcaption>
              A TBM used to construct the Channel Tunnel, now displayed at the Eurotunnel site. The rotating cutterhead excavates the full tunnel face.
              Photo: <a href="https://commons.wikimedia.org/wiki/File:2012_Eurotunnel_tunnel_boring_machine_02.JPG" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY-SA 3.0
            </figcaption>
          </figure>
        </li>
        <li>
          <strong>NATM / SCL (New Austrian Tunnelling Method / Sprayed Concrete Lining):</strong>
          Excavation in stages with immediate application of sprayed concrete (shotcrete) and
          rock bolts to support the ground. The key principle is that the ground itself is
          the primary structural element — the lining provides support while the ground
          redistributes stress around the opening. Instrumentation (extensometers,
          convergence points, pressure cells) monitors the ground's behaviour in real time,
          and the support is adjusted accordingly. Flexible and adaptable to varying conditions.
          Requires skilled operatives and intensive monitoring. Used for complex geometries
          (station caverns, cross-passages) where a circular TBM profile is unsuitable.
        </li>
        <li>
          <strong>Drill-and-blast:</strong> In hard rock where TBMs are impractical (short
          tunnels where TBM mobilisation cost is not justified, or unusual cross-sections),
          patterns of holes are drilled into the rock face, charged with explosives, and
          detonated. The broken rock is removed (mucked out), and the cycle repeats.
          Controlled blasting techniques (smooth blasting, pre-splitting) minimise overbreak
          and damage to the surrounding rock.
        </li>
      </ul>

      <h3>Tunnel Cross-Sections</h3>
      <p>
        The internal shape of a tunnel is determined by the construction method, ground
        conditions, and the space needed:
      </p>
      <ul>
        <li><strong>Circular:</strong> The natural TBM profile. Structurally efficient (the circular shape distributes ground pressure uniformly), but wastes space at the bottom and top for a rectangular loading gauge. Most modern bored tunnels are circular.</li>
        <li><strong>Horseshoe:</strong> Common in NATM construction and older tunnels. A flattened arch over straight or slightly inclined walls, with a curved invert. More space-efficient for the loading gauge than a circle.</li>
        <li><strong>Rectangular (box):</strong> Used in cut-and-cover construction. Simple to build as a reinforced concrete frame but structurally less efficient (the flat roof span is the critical design element).</li>
        <li><strong>Twin-bore vs single-bore:</strong> A major design decision for double-track railways. Twin single-track bores (each ~7 m diameter) are safer (one bore can serve as an evacuation route) but cost more than a single large-bore twin-track tunnel (~12–13 m diameter). The Channel Tunnel uses twin running tunnels with a central service tunnel. Crossrail uses twin bores. In contrast, some high-speed rail tunnels (like the CTRL/HS1) use twin single-track bores linked by cross-passages.</li>
      </ul>

      <h3>Tunnel Linings</h3>
      <ul>
        <li><strong>Victorian brick:</strong> Many UK tunnels have multi-ring brick linings, typically 3–5 rings thick (each ring ~115 mm), totalling 350–575 mm of brickwork. Remarkably durable — some have lasted 180+ years — but increasingly requiring strengthening and waterproofing. Defects include spalling (freeze-thaw damage), mortar loss, ring separation (where the rings delaminate), and deformation under increased loading.</li>
        <li><strong>Precast concrete segments:</strong> Modern TBM tunnels use bolted or gasketed precast segments forming a watertight ring. Typically 6–8 segments per ring plus a smaller key segment that locks the ring together. Segment thickness is typically 200–400 mm depending on diameter and ground loads. Gaskets (EPDM rubber) between segments provide watertightness. The standard for new construction.</li>
        <li><strong>Sprayed concrete (shotcrete):</strong> Applied in layers (typically 50–100 mm per pass) with welded wire mesh or steel fibre reinforcement. Can be shaped to any profile. Often the primary lining in NATM construction. Steel fibres (30–50 kg/m³ of concrete) are increasingly replacing mesh, as they are faster to apply and avoid the need for manual installation of mesh in the dangerous zone near the face.</li>
        <li><strong>Cast-in-place concrete:</strong> A secondary lining cast inside the primary support using travelling formwork (a "shutter"). Common in older tunnels and as a secondary lining over shotcrete. Provides a smooth interior surface and additional structural support.</li>
      </ul>

      <h3>Tunnel Safety Systems</h3>
      <p>
        Long tunnels (over approximately 1 km) require dedicated safety systems:
      </p>
      <ul>
        <li><strong>Cross-passages:</strong> Connecting doors between twin-bore tunnels at regular intervals (typically every 250–500 m). Allow passengers and crew to evacuate from an incident tunnel into the adjacent safe tunnel.</li>
        <li><strong>Emergency walkways:</strong> Continuous raised walkways alongside the track, allowing passengers to walk to safety. Must be at least 700–800 mm wide with handrails.</li>
        <li><strong>Ventilation:</strong> Critical for diesel traction (exhaust fumes), fire scenarios, and passenger comfort. Tunnel ventilation can be <strong>natural</strong> (relying on the piston effect of trains pushing air), <strong>longitudinal</strong> (jet fans pushing air in one direction to keep smoke downstream of the evacuation direction), or <strong>transverse</strong> (supply and extract ducts along the tunnel length). The Channel Tunnel has a supplementary ventilation system that can provide fresh air and extract smoke in a fire scenario.</li>
        <li><strong>Fire detection and suppression:</strong> Linear heat detection cables, CCTV, and in some cases (particularly road tunnels) fixed firefighting systems. The Gotthard Base Tunnel has two multifunction stations within the tunnel where trains can stop in an emergency, with dedicated ventilation and access for emergency services.</li>
        <li><strong>Communication:</strong> Radio communication (GSM-R or TETRA) must work throughout the tunnel. Leaky feeder cables or distributed antenna systems provide coverage in the confined space.</li>
      </ul>

      <h3>Tunnel Maintenance Challenges</h3>
      <ul>
        <li><strong>Water ingress:</strong> The persistent enemy. Water degrades linings, causes icicle formation in winter (a falling hazard and potential OLE short-circuit risk), and creates electrical hazards in electrified tunnels. Waterproofing membranes (PVC or HDPE sheets) are installed between primary and secondary linings in modern tunnels. In older tunnels, remedial waterproofing is applied by injecting resins or installing drainage channels.</li>
        <li><strong>Ventilation:</strong> Critical for diesel traction (exhaust fumes accumulate rapidly in the confined space) and for emergency evacuation. Long tunnels require mechanical ventilation — draught-relief shafts, jet fans, or full transverse ventilation systems.</li>
        <li><strong>Gauging for electrification:</strong> Many Victorian tunnels have tight clearances that must be enlarged to fit overhead line equipment. Solutions include track lowering (digging out the tunnel floor to lower the rail level), lining reconstruction (removing brick rings and rebuilding with a thinner concrete lining), or a combination. These are extraordinarily expensive and disruptive operations, often requiring complete closure for months.</li>
        <li><strong>Air quality and temperature:</strong> Deep tunnels (like the London Underground's deep tube lines) can reach temperatures exceeding 35°C in summer. Cooling is a major engineering challenge — the Crossrail tunnels include a chilled-water cooling system.</li>
      </ul>

      <h3>Notable Railway Tunnels</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Tunnel</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Length</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Opened</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Notable feature</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Gotthard Base (Switzerland)</td>
            <td style={{ padding: '8px' }}>57.1 km</td>
            <td style={{ padding: '8px' }}>2016</td>
            <td style={{ padding: '8px' }}>World's longest railway tunnel; twin bore through the Alps</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Seikan (Japan)</td>
            <td style={{ padding: '8px' }}>53.9 km</td>
            <td style={{ padding: '8px' }}>1988</td>
            <td style={{ padding: '8px' }}>Undersea tunnel linking Honshu and Hokkaido</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Channel Tunnel (UK-France)</td>
            <td style={{ padding: '8px' }}>50.5 km</td>
            <td style={{ padding: '8px' }}>1994</td>
            <td style={{ padding: '8px' }}>Three bores (two running, one service); undersea</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Lötschberg Base (Switzerland)</td>
            <td style={{ padding: '8px' }}>34.6 km</td>
            <td style={{ padding: '8px' }}>2007</td>
            <td style={{ padding: '8px' }}>Part of the NRLA Alpine transit project</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Crossrail tunnels (London)</td>
            <td style={{ padding: '8px' }}>21 km each</td>
            <td style={{ padding: '8px' }}>2022</td>
            <td style={{ padding: '8px' }}>Twin bores through central London; EPB TBMs</td>
          </tr>
        </tbody>
      </table>

      <h3>Retaining Walls</h3>
      <p>
        Where space is insufficient for natural slopes, <strong>retaining walls</strong> hold
        back the earth. The design of a retaining wall must resist the lateral earth pressure
        from the retained soil, plus any surcharge loads (such as highway traffic behind the
        wall). Lateral earth pressure increases with depth and is classified as:
      </p>
      <ul>
        <li><strong>At-rest pressure (K₀):</strong> When the wall cannot move. Applies to rigid structures like basement walls.</li>
        <li><strong>Active pressure (Kₐ):</strong> When the wall moves slightly away from the soil. The minimum lateral pressure. Applies to most free-standing retaining walls.</li>
        <li><strong>Passive pressure (Kₚ):</strong> When the wall is pushed into the soil. The maximum lateral pressure. Mobilised at the toe of embedded walls, providing resistance.</li>
      </ul>

      <p>Retaining wall types:</p>
      <ul>
        <li><strong>Gravity walls:</strong> Rely on their own mass (masonry, mass concrete). Simple but bulky. Many Victorian railway walls are gravity masonry walls, still functioning but often showing signs of distress (bulging, leaning, mortar loss).</li>
        <li><strong>Cantilever walls:</strong> Reinforced concrete L-shape or T-shape, using the weight of retained earth on the base to resist overturning. Economical for heights up to about 6–8 m. The stem, base heel, and base toe are all designed as reinforced concrete elements.</li>
        <li><strong>Sheet pile walls:</strong> Interlocking steel sheets driven into the ground. Common for temporary works (excavation support during bridge construction) and permanent waterfront structures. Can be cantilevered for modest retained heights or propped/anchored for greater heights.</li>
        <li><strong>Contiguous/secant bored pile walls:</strong> Rows of bored concrete piles forming a wall. Contiguous piles have small gaps between them (suitable above the water table); secant piles overlap (one set is drilled first as unreinforced "female" piles, then reinforced "male" piles are drilled overlapping them), forming a watertight wall. Standard for deep urban excavations.</li>
        <li><strong>Diaphragm walls:</strong> Thin concrete walls cast in deep, narrow trenches excavated under bentonite slurry. Used for the deepest excavations (metro stations, deep basements). Provide both temporary and permanent structural support plus groundwater cutoff.</li>
        <li><strong>Reinforced earth (mechanically stabilised earth, MSE):</strong> Layers of compacted fill with horizontal reinforcement strips (steel or geosynthetic) and a facing panel (precast concrete or wire mesh). Flexible, economical, and increasingly popular for railway embankment retaining, bridge abutments, and noise barriers. Can accommodate significant differential settlement.</li>
      </ul>

      <Callout type="analogy">
        Tunnels are <strong>VPN tunnels</strong>. Both create a protected pathway through a
        hostile environment (rock/soil vs the public internet). Both require careful
        construction of the "lining" (encryption / waterproof concrete), have capacity
        constraints (cross-sectional area / bandwidth), and need continuous monitoring for
        "leaks" (water ingress / data leaks). Both are enormously expensive to retrofit
        once built. And the choice between twin-bore and single-bore is exactly like choosing
        between dedicated redundant links and a single high-bandwidth connection — twin bore
        costs more but gives you failover.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm3-l1', label: 'Bridges', desc: 'The other major structural discipline.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'How tunnel clearances constrain the loading gauge.' },
        { target: 'm2-l1', label: 'Ground Investigation', desc: 'Tunnelling method depends entirely on ground conditions.' },
        { target: 'm5-l2', label: 'Overhead Line Design', desc: 'Electrification constraints that drive tunnel gauge clearance.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the key advantage of a TBM over cut-and-cover?', options: ['It is always cheaper', 'It can bore deep tunnels without disturbing the surface', 'It is faster in all conditions', 'It produces a better-shaped tunnel'], correct: 1, explanation: 'TBMs bore at depth without surface disruption — essential in urban areas. The trade-off is higher equipment cost.' },
  { text: 'What is the biggest ongoing maintenance concern for Victorian-era tunnels?', options: ['They are too small for modern trains', 'Water ingress through deteriorating brick linings', 'Ventilation for diesel trains', 'Lack of lighting'], correct: 1, explanation: 'Water ingress through ageing brick linings is the primary issue. Water attacks mortar, freeze-thaw spalls bricks, and leaks can create voids.' },
  { text: 'What type of retaining wall uses soil reinforcement with geotextiles or steel strips?', options: ['Gravity wall', 'Cantilever wall', 'Sheet pile wall', 'Reinforced earth wall'], correct: 3, explanation: 'Reinforced earth walls use geotextile or steel strip layers within compacted fill. They are cost-effective for large heights.' },
];
