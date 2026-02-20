import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import { TrackLayerStack } from '../../../components/symbols';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M1L1({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <TrackLayerStack style={{ maxWidth: '300px' }} />
        </div>
        <figcaption>Schematic: Track layer stack — each layer provides services to the one above, like a protocol stack.</figcaption>
      </figure>

      <h3>The Track Layer Stack</h3>
      <p>
        Railway track is a carefully engineered stack of layers, each providing services to
        the one above it — exactly like a protocol stack. From top to bottom:
      </p>

      <div className="layer-stack">
        <div className="layer layer-rail">
          <strong>Rail</strong> — UIC 60 profile, 60 kg/m. High-carbon steel, head-hardened
          for wear resistance. Carries and guides the wheels, transfers loads to fastenings.
        </div>
        <div className="layer layer-fastenings">
          <strong>Fastenings</strong> — Pandrol e-clips or Vossloh systems. Resilient pads,
          baseplates, and clips that hold the rail to the sleeper while allowing controlled
          movement under thermal expansion and dynamic loading.
        </div>
        <div className="layer layer-sleepers">
          <strong>Sleepers (Ties)</strong> — Primarily prestressed concrete (B70 type, ~300 kg
          each, at 600–650 mm spacing). Timber sleepers survive in heritage and specific
          applications. Steel Y-sleepers used in niche cases. Distribute rail loads to ballast.
        </div>
        <div className="layer layer-ballast">
          <strong>Ballast</strong> — Angular crushed granite or equivalent hard stone,
          250–350 mm deep. Distributes load, provides drainage, allows geometry correction by
          tamping. Degrades over time as stones round off and fines accumulate.
        </div>
        <div className="layer layer-sub-ballast">
          <strong>Sub-ballast</strong> — A graded filter/separation layer (sand or geotextile)
          preventing subgrade fines from migrating up into the ballast and ballast stones from
          punching down.
        </div>
        <div className="layer layer-subgrade">
          <strong>Subgrade</strong> — The natural ground or engineered formation. Its bearing
          capacity determines everything above. Weak subgrade demands thicker ballast or ground
          improvement.
        </div>
      </div>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Cross_section_of_railroad_ballast.jpg"
          alt="Cross-section of a ballasted railway track showing the layered structure: rail, sleepers, ballast, and subgrade"
          loading="lazy"
        />
        <figcaption>
          Cross-section of ballasted track showing the layer stack in practice.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Cross_section_of_railroad_ballast.jpg" target="_blank" rel="noopener noreferrer">Mathieu Landretti</a>, CC BY-SA 4.0
        </figcaption>
      </figure>

      <h3>Rail Metallurgy & Profiles</h3>
      <p>
        Modern mainline rail is made from high-carbon manganese steel (0.6–0.82% carbon,
        0.8–1.3% manganese). The steel is continuously cast and hot-rolled to the desired
        profile. The <strong>UIC 60</strong> profile (60.21 kg/m) is the European standard
        for mainlines. Lighter profiles exist: UIC 54 (54.43 kg/m) for secondary lines, and
        UIC 46 for branch lines. North American railways use profiles like RE 136
        (136 lb/yd ≈ 67.5 kg/m) for heavy-haul corridors.
      </p>
      <p>
        The rail head is the critical wear surface. <strong>Head-hardening</strong> (controlled
        cooling from the rolling heat) produces a pearlitic microstructure with hardness up to
        400 HBW, dramatically extending rail life on curves and high-traffic lines.
        <strong> Premium rail grades</strong> include R350HT (heat-treated, 350 HBW minimum)
        and R400HT for the most demanding applications. Bainitic rail steels are emerging
        for even higher wear resistance.
      </p>
      <p>
        A rail's cross-section has three parts: the <strong>head</strong> (the running surface
        and gauge face), the <strong>web</strong> (the thin vertical section providing shear
        resistance), and the <strong>foot</strong> (the broad base that sits on the sleeper and
        is gripped by the fastening). The head-to-foot geometry is carefully designed to resist
        bending and distribute wheel loads over the maximum possible length of rail.
      </p>

      <h3>Sleeper Types in Depth</h3>
      <p>
        The choice of sleeper type has major implications for cost, maintenance, and noise:
      </p>
      <ul>
        <li>
          <strong>Prestressed concrete (monoblock):</strong> The B70 type dominates European
          mainlines. Each sleeper weighs approximately 300 kg and has a service life of 40–50
          years. Prestressing wires are tensioned before the concrete is cast, ensuring the
          sleeper remains in compression under load. The main disadvantage is weight (making
          manual handling impossible) and higher noise/vibration transmission compared to timber.
        </li>
        <li>
          <strong>Twin-block concrete:</strong> Two concrete blocks connected by a steel bar,
          common in France (the Bibloc and Vagneux types). Lighter per block than monoblocs
          and offer good lateral resistance in ballast.
        </li>
        <li>
          <strong>Timber:</strong> Still used for switches & crossings (where complex geometries
          require custom lengths), in heritage railways, and where vibration damping is critical
          (e.g., near sensitive buildings). Hardwood species like jarrah, oak, and azobe are
          preferred. Service life is 20–35 years. Timber sleepers are treated with creosote
          or copper-chrome-arsenic (CCA), though environmental regulations are phasing these out.
        </li>
        <li>
          <strong>Steel Y-sleepers:</strong> Inverted Y-shape steel sleepers used in Australia
          and some African railways. Lightweight (around 70 kg) and suitable for remote locations
          with manual installation, but prone to corrosion and offer poor electrical insulation.
        </li>
        <li>
          <strong>Composite/plastic:</strong> Emerging alternatives made from recycled plastics
          or fibre-reinforced polymers, designed to replace timber. They offer good damping and
          resistance to rot and insects. Still unproven at scale on heavy-traffic mainlines.
        </li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Pandrol-on-concrete.jpg"
          alt="Close-up of a Pandrol e-clip rail fastening on a concrete sleeper, showing the clip, resilient pad, and rail foot"
          loading="lazy"
        />
        <figcaption>
          Pandrol e-clip fastening holding a rail to a concrete sleeper. The clip grips the rail foot while the resilient pad absorbs dynamic loads.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Pandrol-on-concrete.jpg" target="_blank" rel="noopener noreferrer">Marcus Wong</a>, CC BY-SA 4.0
        </figcaption>
      </figure>

      <h3>Fastening Systems</h3>
      <p>
        Fastenings must achieve four things simultaneously: hold the rail to gauge, resist
        lateral and longitudinal forces, provide electrical insulation between rails (for
        track circuits), and accommodate thermal movement. The two dominant systems are:
      </p>
      <ul>
        <li>
          <strong>Pandrol e-clip:</strong> A spring-steel clip driven into cast-in shoulders on
          the sleeper. Simple, low-maintenance, and field-replaceable with a basic tool. The
          clip provides a consistent toe load (typically ~9 kN per clip) holding the rail down
          onto a resilient pad. Used worldwide, particularly in the UK, Australia, and Africa.
        </li>
        <li>
          <strong>Vossloh W-series:</strong> A tension-clamp system with a screw-and-dowel
          arrangement. Offers higher toe loads (up to 20 kN), adjustable gauge, and is favoured
          on high-speed lines and in continental Europe. More complex to install but more
          tuneable.
        </li>
      </ul>
      <p>
        Beneath the rail foot sits a <strong>rail pad</strong> — a resilient elastomeric layer
        (typically 5–10 mm thick, made of EVA or rubber-cork composite) that attenuates dynamic
        impact loads and reduces noise transmission into the sleeper and ballast. Pad stiffness
        is a critical design parameter: too stiff and the sleeper takes excessive punishment;
        too soft and gauge-holding suffers.
      </p>

      <h3>Ballast: Lifecycle and Degradation</h3>
      <p>
        Fresh ballast consists of angular, uniformly-sized stones (typically 25–50 mm nominal
        size) of hard, durable rock — granite, basalt, or gneiss are preferred.
        The <strong>angularity</strong> of the stones is critical: angular faces interlock,
        providing lateral and longitudinal resistance to track movement. Over time, the stones
        degrade through several mechanisms:
      </p>
      <ul>
        <li><strong>Abrasion:</strong> Repeated vibration causes stones to rub against each other, rounding off the angular faces and producing fine particles.</li>
        <li><strong>Breakage:</strong> High point loads from heavy axles can fracture stones, especially softer rock types.</li>
        <li><strong>Fouling:</strong> Fine material (from stone wear, mud pumped up from the subgrade, coal dust from freight, or organic debris) fills the voids between stones, destroying drainage and load distribution.</li>
        <li><strong>Chemical weathering:</strong> Some limestone ballast is vulnerable to dissolution, and all ballast degrades faster in wet environments.</li>
      </ul>
      <p>
        Once fouling exceeds approximately 30–40% of voids, the ballast can no longer be
        effectively tamped and must be cleaned (by a ballast cleaning machine that excavates,
        screens, and returns clean stone) or completely replaced. A well-maintained ballast
        layer can last 30–60 years before requiring complete renewal, but tamping frequency
        increases as it ages.
      </p>

      <h3>CWR vs Jointed Rail</h3>
      <p>
        Traditional jointed track uses 18–20 m rail lengths with expansion gaps at joints.
        <strong>Continuously Welded Rail (CWR)</strong> eliminates these joints, reducing noise,
        vibration, and wear dramatically. CWR is now the universal standard on mainlines.
      </p>
      <p>
        The physics of CWR revolves around <strong>thermal stress</strong>. Because the rail
        cannot expand or contract freely (it is restrained by fastenings and ballast), temperature
        changes create internal stress. A temperature rise above the <strong>stress-free
        temperature (SFT)</strong> — the temperature at which the rail was last destressed —
        produces compressive stress that can cause lateral <strong>buckling</strong> (sun kinks).
        A temperature drop below SFT produces tensile stress that can cause <strong>rail
        breaks</strong>. The SFT is deliberately set at a temperature above the midpoint of the
        local range (typically 21–27 °C in temperate climates) to bias toward tensile stress,
        which is less dangerous than buckling.
      </p>
      <p>
        <strong>Destressing</strong> is the process of cutting the rail, allowing it to reach its
        natural length at a target temperature, then re-welding it. This resets the SFT.
        Rails are destressed after installation, after significant track realignment, and when
        monitoring detects SFT drift. Failure to maintain correct SFT is a significant safety risk.
      </p>

      <h3>Slab Track vs Ballasted Track</h3>
      <p>
        High-speed lines and tunnels increasingly use <strong>slab track</strong>: rails
        mounted on a concrete slab rather than ballast. Benefits include lower maintenance,
        better geometric stability, and no ballast-flight risk at high speeds. Downsides are
        higher initial cost, difficult correction of settlement, and higher noise emissions.
        Japan's Shinkansen, Germany's Rheda system, and many metro systems use slab track.
      </p>
      <p>
        Major slab track systems include:
      </p>
      <ul>
        <li><strong>Rheda 2000:</strong> Concrete sleepers embedded in a continuous concrete slab, used on German and Dutch high-speed lines. The sleepers provide the rail attachment points while the slab provides the structural platform.</li>
        <li><strong>Shinkansen slab:</strong> Precast concrete slabs on a cement-asphalt (CA) mortar layer, allowing some adjustment after installation. The CA mortar provides vibration damping.</li>
        <li><strong>BBEST (Balfour Beatty):</strong> Used in tunnels (including HS1 in the UK), with rails mounted on discrete support blocks embedded in the slab.</li>
        <li><strong>LVT (Low Vibration Track):</strong> Concrete trough with a boot-mounted sleeper floating on a resilient mat — used where vibration isolation is paramount (above sensitive buildings, metro tunnels under hospitals, etc.).</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/60/RHEDA_2000_-_02.JPG"
          alt="RHEDA 2000 slab track system under construction on the HSL-Zuid high-speed line in the Netherlands, showing rails mounted on a concrete slab with embedded sleepers"
          loading="lazy"
        />
        <figcaption>
          RHEDA 2000 slab track on the HSL-Zuid (Netherlands). Rails sit on embedded sleepers cast into a continuous concrete slab — no ballast required.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:RHEDA_2000_-_02.JPG" target="_blank" rel="noopener noreferrer">Spoorjan</a>, CC BY-SA 3.0
        </figcaption>
      </figure>

      <h3>Welding Methods</h3>
      <ul>
        <li><strong>Flash-butt welding:</strong> Factory or on-site process using electrical resistance heating. Rail ends are clamped, brought into light contact, and a high current passed through them. The contact resistance generates intense heat, the ends are then forged together under hydraulic pressure, and the flash (upset metal) is trimmed. Produces the highest quality welds with consistent metallurgy. Used in rail welding depots to create long strings (typically 216 m or 288 m in the UK, up to 400 m elsewhere).</li>
        <li><strong>Thermit (aluminothermic) welding:</strong> A crucible of iron oxide and aluminium powder is ignited, producing molten steel at ~2,500 °C that fills a mould around the rail gap. The exothermic reaction (8Fe₃O₄ + 8Al → 9Fe + 4Al₂O₃) yields enough liquid metal to fill the joint. Used extensively for field joints, closure welds, and emergency repairs. Lower quality than flash-butt (the cast structure is less homogeneous) but highly portable — only a crucible, moulds, and a gas torch are needed.</li>
      </ul>

      <h3>Track Maintenance Machines</h3>
      <p>
        Modern track maintenance is heavily mechanised. The key machines are:
      </p>
      <ul>
        <li><strong>Tamping machine:</strong> Inserts vibrating tines into the ballast beside each sleeper and squeezes them together, packing ballast tightly under the sleeper to restore correct geometry. The machine lifts and lines the track simultaneously using laser-guided systems.</li>
        <li><strong>Ballast regulator:</strong> Distributes ballast evenly across the track bed and profiles the shoulder using ploughs and brooms. Usually follows a tamper.</li>
        <li><strong>Dynamic track stabiliser:</strong> Vibrates the track laterally at controlled frequency to settle ballast after tamping, restoring lateral resistance faster than natural consolidation by traffic.</li>
        <li><strong>Ballast cleaner:</strong> Excavates contaminated ballast by an endless chain, screens it to remove fines, returns clean stone, and adds new ballast as needed. Operates at very slow speeds (200–800 m/h) and is one of the most expensive maintenance operations.</li>
        <li><strong>Rail grinding train:</strong> Grinds the rail head to remove surface defects (head checking, corrugation, squats) and restore the correct transverse profile. Grinding is proactive maintenance that extends rail life significantly.</li>
      </ul>

      <Callout type="analogy">
        The track layer stack is the <strong>OSI model</strong> of railways. Each layer provides
        defined services upward and has clear interface requirements downward. You can swap
        implementations at any layer (e.g. timber sleepers for concrete) without redesigning
        the whole stack — as long as you honour the interface. A rail does not care what
        sleeper type it sits on, just as TCP does not care whether it runs over Ethernet or Wi-Fi.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l1', label: 'Why Railways Work', desc: 'The physics that drive every design choice in the layer stack.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'How the track is arranged horizontally and vertically.' },
        { target: 'm1-l4', label: 'Track Representations', desc: 'How the track layout is drawn — schematic vs geographic views.' },
        { target: 'm2-l2', label: 'Earthworks', desc: 'What lies beneath the subgrade — the civil engineering foundation.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the primary function of ballast in the track structure?', options: ['Provide a smooth surface for trains', 'Distribute load, drain water, and enable geometry adjustment', 'Prevent electromagnetic interference', 'Insulate the track thermally'], correct: 1, explanation: 'Ballast (angular crushed rock) distributes axle loads, allows drainage, and enables geometry adjustment by tamping machines.' },
  { text: 'What is the standard rail profile weight used in Europe?', options: ['UIC 40 (40 kg/m)', 'UIC 54 (54 kg/m)', 'UIC 60 (60 kg/m)', 'UIC 80 (80 kg/m)'], correct: 2, explanation: 'UIC 60 (60 kg/m) is the modern European standard for mainline track. Heavier rail distributes loads better and resists wear longer.' },
  { text: 'What does "CWR" stand for and why is it important?', options: ['Central Wire Routing — for signal cables', 'Continuously Welded Rail — eliminates jointed rail problems', 'Controlled Wheel Resistance — for braking', 'Concrete Wall Reinforcement — for structures'], correct: 1, explanation: 'Continuously Welded Rail eliminates joints (causing noise and wear) by welding rails into 200m+ lengths. The trade-off is thermal stress management.' },
  { text: 'What layer sits immediately below the ballast?', options: ['Subgrade', 'Rail', 'Sub-ballast', 'Sleepers'], correct: 2, explanation: 'Sub-ballast is a filter/transition layer between ballast and subgrade, preventing fine particles migrating upward and providing additional load distribution.' },
];
