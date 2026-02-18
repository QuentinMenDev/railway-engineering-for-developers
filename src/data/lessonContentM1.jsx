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

// ─── Module 1: Permanent Way ─────────────────────────────────────────

function M1L1({ goTo }) {
  return (
    <>
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

function M1L2({ goTo }) {
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

function M1L3({ goTo }) {
  return (
    <>
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

function M1L4({ goTo }) {
  return (
    <>
      <h3>Why Two Kinds of Map?</h3>
      <p>
        A railway network can be drawn in fundamentally different ways, depending on what
        question you're trying to answer. The two dominant representation styles
        are <strong>geographic</strong> (true-to-location) and <strong>schematic</strong>
        (topologically simplified). Each exists because different users need different
        information — and cramming everything into one drawing makes it unreadable.
      </p>
      <p>
        This duality shows up everywhere in railways: control room displays, engineering
        drawings, passenger maps, and digital systems all choose one representation or the
        other (or layer both). Understanding when to use which is a core skill.
      </p>

      <h3>Geographic Representation</h3>
      <p>
        A geographic representation preserves the real spatial position and shape of the
        track. Every curve, gradient, and turnout is drawn at its true position on the
        Earth's surface. This is the representation used for:
      </p>
      <ul>
        <li><strong>Alignment design:</strong> The horizontal and vertical geometry of the track, drawn on Ordnance Survey (or equivalent) mapping. This is where the clothoids, radii, and gradients from Lesson 1.2 live.</li>
        <li><strong>Engineering plans:</strong> Plan and profile drawings showing the track in relation to land boundaries, structures, earthworks, drainage, and other infrastructure. Typically drawn at scales of 1:500 to 1:2,500.</li>
        <li><strong>GIS (Geographic Information Systems):</strong> Modern railways maintain their asset data in geospatial databases where every rail, sleeper, signal, and cable route has precise coordinates. Network Rail's GEOGIS, SNCF's Atlas, and DB Netz's ISR are examples.</li>
        <li><strong>Satellite and aerial survey:</strong> LiDAR and photogrammetry produce detailed 3D models of the railway corridor, used for vegetation management, clearance checks, and asset condition surveys.</li>
      </ul>
      <p>
        Geographic plans are essential for anyone doing physical work on the railway —
        construction, maintenance, land acquisition, environmental assessment. They answer
        the question: <em>"Where exactly is this, and what's around it?"</em>
      </p>
      <p>
        The challenge of geographic representation is scale and complexity. A busy station
        throat with 20 turnouts, multiple platforms, and interlaced routes is almost impossible
        to read on a geographic plan at a useful scale. The lines are close together, labels
        overlap, and the logical structure of the track layout is obscured by physical geometry.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/OSM_Gare_Saint-Lazare.png"
          alt="OpenStreetMap view of Paris Gare Saint-Lazare showing the geographic track layout with curves, platforms, and the station throat"
          loading="lazy"
        />
        <figcaption>
          Geographic view of Paris Gare Saint-Lazare from OpenStreetMap — the true spatial layout of tracks, platforms, and the complex station throat. Note how individual turnout arrangements become hard to trace at this scale.
          Image: <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>, ODbL
        </figcaption>
      </figure>

      <h3>Schematic Representation</h3>
      <p>
        A schematic (or diagrammatic) representation strips away geographic accuracy to reveal
        the <strong>topological structure</strong> — what is connected to what, in what order.
        Curves are straightened, distances are distorted, and the layout is rearranged to
        maximise clarity. The information preserved is <em>connectivity</em> and <em>sequence</em>,
        not position and shape.
      </p>
      <p>
        The most famous example is the passenger network map — descended from Harry Beck's
        1931 London Underground diagram, which abandoned geography in favour of a clean
        circuit-diagram style. Beck's insight was that underground passengers don't need to
        know the geographic shape of the route — they need to know which stations are on which
        lines, where to change, and the order of stops.
      </p>
      <p>
        But schematic representations are far more than passenger maps. In railway engineering,
        the most critical schematic is the <strong>signalling control table diagram</strong>
        (or track layout diagram), used in control rooms and design offices:
      </p>
      <ul>
        <li>
          <strong>Single-line diagrams:</strong> Show each track as a single horizontal line,
          with turnouts represented as angular forks. Distances are not to scale — a 200 m
          station throat might get the same drawing space as a 20 km plain-line section if the
          station has more equipment to show. Signals, track circuits, axle counters, and point
          machines are all marked using standard symbols.
        </li>
        <li>
          <strong>Control room displays:</strong> The screens in a signal control centre show a
          schematic view of the track layout with real-time train positions, signal aspects,
          and point positions overlaid. Signallers work entirely from this schematic — they
          never see a geographic view during normal operations.
        </li>
        <li>
          <strong>Interlocking data:</strong> The logic tables that define which signal routes
          are safe reference the schematic layout, not the physical layout. Route "A to B" is
          defined by a sequence of track sections and point positions on the diagram.
        </li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Signalbox_diagram%2C_Shrewsbury.jpg"
          alt="Signalling diagram from Shrewsbury signal box showing a schematic track layout with tracks as horizontal lines, turnouts as angular forks, and signal symbols"
          loading="lazy"
        />
        <figcaption>
          Schematic track diagram from Shrewsbury signal box. Each track is a straight line, turnouts are shown as angular forks, and signals appear as standard symbols. Geography is irrelevant — connectivity and sequence are everything.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Signalbox_diagram,_Shrewsbury.jpg" target="_blank" rel="noopener noreferrer">mattbuck</a>, CC BY-SA 3.0
        </figcaption>
      </figure>

      <Callout type="analogy">
        Geographic vs schematic is <strong>physical network topology vs logical network
        topology</strong> in IT. A physical diagram shows where cables actually run through
        ducts and rooms. A logical diagram shows VLANs, subnets, and routing relationships —
        which may bear no resemblance to the physical cable layout. You need both: the
        physical view to install and maintain cable, the logical view to configure routing
        and debug connectivity. A signaller working from a schematic track diagram is exactly
        like a network engineer working from a logical topology diagram.
      </Callout>

      <h3>Schematic Drawing Conventions</h3>
      <p>
        Railway schematics use a well-established set of conventions that vary by country but
        share common principles:
      </p>
      <ul>
        <li><strong>Track:</strong> Drawn as single lines (one line per track), typically horizontal. Up direction (toward London, in UK convention) is usually shown on the right or at the top.</li>
        <li><strong>Turnouts:</strong> Shown as angular forks diverging from the main line. The angle is exaggerated for visibility — a real 1-in-40 turnout with an almost imperceptible angle is drawn with a clearly visible divergence.</li>
        <li><strong>Signals:</strong> Small symbols on the track line — a filled circle for a stop signal, an arrow for a distant signal, with the type indicated by additional markers.</li>
        <li><strong>Track circuits / axle counter sections:</strong> Labelled sections between signals or between joints, often colour-coded on control displays (red = occupied, clear = green/white).</li>
        <li><strong>Distances (chainage / mileage):</strong> Marked at key points — signals, turnouts, structures. This bridges the schematic back to the geographic world. A signaller might say "there's a track fault at 42 miles 17 chains" — a geographic reference interpreted via the schematic.</li>
        <li><strong>Platforms:</strong> Shown as thick bars or rectangles beside the track line, numbered.</li>
      </ul>

      <h3>The Passenger Map: A Special Case</h3>
      <p>
        The passenger-facing schematic (like the London Underground map, Paris Metro map,
        or Tokyo subway map) is a further simplification. It strips away even operational
        detail (signals, track circuits) and retains only:
      </p>
      <ul>
        <li>Lines (colour-coded by route)</li>
        <li>Stations (in correct topological order)</li>
        <li>Interchange points</li>
        <li>Zones or fare boundaries</li>
      </ul>
      <p>
        Harry Beck's design principles — using only horizontal, vertical, and 45-degree lines;
        enlarging the central area; equalising station spacing — have been imitated worldwide.
        The key design tension is between <strong>topological clarity</strong> and
        <strong>geographic expectation</strong>. Beck's map distorts London's geography
        dramatically (the central area is vastly enlarged relative to the suburbs), which can
        mislead passengers about walking distances between stations. Many modern maps use a
        hybrid approach, preserving rough geographic proportions while still simplifying
        the route geometry.
      </p>
      <p>
        Mainline rail passenger maps face an even harder design problem. Unlike metro maps
        where stations are close together and lines are largely self-contained, mainline networks
        have huge distance variations, complex branching, and overlapping services (multiple
        train operators on the same tracks). The UK's National Rail map, for instance, uses
        a geographic layout but simplifies route geometry — it's a compromise between the two
        extremes.
      </p>

      <h3>Digital Track Models</h3>
      <p>
        Modern railways increasingly maintain a <strong>digital twin</strong> of the
        infrastructure — a unified data model that supports both geographic and schematic
        views from a single source of truth. Key standards and systems include:
      </p>
      <ul>
        <li>
          <strong>railML:</strong> An XML-based open data standard for exchanging railway data.
          It defines schemas for infrastructure (track topology, geometry, assets), timetables,
          and rolling stock. railML uses a topological model — the track is described as a graph
          of nodes (switches, crossings, buffer stops) and edges (track segments) with
          geographic coordinates and engineering attributes layered on.
        </li>
        <li>
          <strong>EU Agency for Railways RINF:</strong> The Register of Infrastructure is a
          European database describing every line section, track, tunnel, platform, and loading
          gauge on the EU rail network. It enables interoperability checks — can this train
          physically run on this route?
        </li>
        <li>
          <strong>BIM (Building Information Modelling):</strong> Increasingly adopted for new
          rail construction, BIM creates 3D parametric models of the track and its context
          (earthworks, structures, services). The UK's HS2 project was designed entirely in BIM.
        </li>
        <li>
          <strong>OpenStreetMap (OSM):</strong> The crowd-sourced mapping platform includes
          surprisingly detailed railway data — tracks, stations, signals, platforms, gauges,
          and electrification are all tagged in the OSM data model. The OpenRailwayMap
          rendering layer visualises this data with railway-specific styling.
        </li>
      </ul>

      <h3>Chainage and Mileage Systems</h3>
      <p>
        The bridge between schematic and geographic worlds is the <strong>linear referencing
        system</strong> — a way of identifying any point on the railway by its distance along
        the track from a datum. Different countries use different systems:
      </p>
      <ul>
        <li><strong>UK: Miles and chains.</strong> Inherited from the original railway companies. 1 chain = 22 yards ≈ 20.1 m. "42m 17ch" means 42 miles and 17 chains from the London terminus. Some lines count from a different origin.</li>
        <li><strong>Most of Europe: Kilometres.</strong> "PK 127+450" means 127 km and 450 m from the line origin (PK = Point Kilométrique in French).</li>
        <li><strong>Engineering chainage:</strong> Used during design and construction. Measured in metres from an arbitrary start point. "Ch 15,230" means 15,230 m from the project datum.</li>
      </ul>
      <p>
        These systems are not always monotonic — historical line mergers, realignments, and
        errors can create discontinuities (jumps or overlaps in the chainage). Modern GIS
        systems overlay geographic coordinates on the legacy mileage system, allowing both
        to coexist.
      </p>

      <Callout type="analogy">
        Chainage is like <strong>array indexing with legacy offsets</strong>. The underlying
        data (track position) is continuous, but the indexing scheme (mileage) has historical
        quirks — skipped values, off-by-one errors from line mergers, and different
        start-of-array points for different routes. Modern GIS systems are the equivalent of
        wrapping the legacy array in an abstraction layer that maps logical indices to physical
        positions.
      </Callout>

      <h3>When to Use Which Representation</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1em' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border)' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Task</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Representation</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Designing a new alignment</td>
            <td style={{ padding: '8px' }}>Geographic</td>
            <td style={{ padding: '8px' }}>Must fit within real land boundaries, earthworks, and structures</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Controlling train movements</td>
            <td style={{ padding: '8px' }}>Schematic</td>
            <td style={{ padding: '8px' }}>Signallers need connectivity and sequence, not geography</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Maintenance planning</td>
            <td style={{ padding: '8px' }}>Both</td>
            <td style={{ padding: '8px' }}>Identify assets on schematic, locate them on the ground with geographic</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Passenger wayfinding</td>
            <td style={{ padding: '8px' }}>Schematic</td>
            <td style={{ padding: '8px' }}>Topological clarity more useful than geographic accuracy</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Signalling design</td>
            <td style={{ padding: '8px' }}>Schematic (with chainage)</td>
            <td style={{ padding: '8px' }}>Route logic is topological; chainage provides distance for braking calculations</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '8px' }}>Environmental impact assessment</td>
            <td style={{ padding: '8px' }}>Geographic</td>
            <td style={{ padding: '8px' }}>Must show relationship to habitats, water courses, communities</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>Timetabling and simulation</td>
            <td style={{ padding: '8px' }}>Topological graph</td>
            <td style={{ padding: '8px' }}>The network is modelled as a directed graph of nodes and edges with distance/time attributes</td>
          </tr>
        </tbody>
      </table>

      <Connections goTo={goTo} items={[
        { target: 'm1-l2', label: 'Track Geometry', desc: 'The alignment geometry that geographic representations must capture.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Signalling schematics — the most operationally critical schematic diagrams.' },
        { target: 'm4-l2', label: 'Interlocking & Detection', desc: 'How interlocking logic references the schematic track layout.' },
        { target: 'm8-l1', label: 'Timetabling & Scheduling', desc: 'Timetabling uses topological network models, not geographic ones.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM1Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm1-l1': return <M1L1 goTo={goTo} />;
    case 'm1-l2': return <M1L2 goTo={goTo} />;
    case 'm1-l3': return <M1L3 goTo={goTo} />;
    case 'm1-l4': return <M1L4 goTo={goTo} />;
    default: return null;
  }
}
