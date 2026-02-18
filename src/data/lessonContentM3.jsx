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

// ─── Module 3: Structures ────────────────────────────────────────────

function M3L1({ goTo }) {
  return (
    <>
      <h3>Bridge Types by Material</h3>
      <p>
        Railway bridges carry some of the heaviest, most repetitive loads of any structure.
        The choice of material and form depends on span, loading, site constraints, and era
        of construction:
      </p>
      <ul>
        <li>
          <strong>Masonry arch:</strong> The UK alone has roughly 30,000 masonry arch bridges,
          many dating from the 1840s–1870s. Their compressive-strength advantage makes them
          remarkably durable, but they are vulnerable to scour, water ingress, and increased
          axle loads. Assessment of their capacity is a specialist discipline. The arch works
          by transferring loads through the stonework in compression to the abutments and
          foundations. The shape of the <strong>thrust line</strong> (the path of compressive
          force through the arch) determines whether the arch is stable — if the thrust line
          lies within the middle third of the arch ring, the entire section is in compression
          and no tensile cracking occurs.
          <figure className="lesson-figure">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ribblehead_Viaduct_Arches_-_geograph.org.uk_-_2016200.jpg/1280px-Ribblehead_Viaduct_Arches_-_geograph.org.uk_-_2016200.jpg"
              alt="The Ribblehead Viaduct in North Yorkshire, England — a Victorian masonry arch railway viaduct"
              loading="lazy"
            />
            <figcaption>
              Ribblehead Viaduct, North Yorkshire — a classic Victorian masonry arch railway structure, still carrying trains since 1875.
              Photo: <a href="https://commons.wikimedia.org/wiki/File:Ribblehead_Viaduct_Arches_-_geograph.org.uk_-_2016200.jpg" target="_blank" rel="noopener noreferrer">Geograph</a>, CC BY-SA 2.0
            </figcaption>
          </figure>
        </li>
        <li>
          <strong>Steel:</strong> Plate girders for short-medium spans (up to ~30 m), trusses
          for longer spans (30–100+ m), and box girders for the largest. Steel is strong in
          tension and bending, but vulnerable to <strong>fatigue</strong> — the progressive
          growth of cracks under repeated cyclic loading. Railway bridges experience millions
          of stress cycles over their design life. Welded details are classified into fatigue
          categories (from Class 160 down to Class 36), with each detail having a characteristic
          endurance curve. Poor welding details — particularly those with high stress
          concentration — can initiate fatigue cracks after relatively few cycles.
        </li>
        <li>
          <strong>Wrought iron:</strong> Predating steel, wrought iron was the dominant
          structural material of the 1850s–1880s. Many Victorian railway bridges are wrought
          iron plate girders, riveted together. Wrought iron has different properties from
          steel — lower strength, more variable quality, but better corrosion resistance and
          more ductile behaviour. Assessment of wrought iron bridges requires specialist
          knowledge, and testing for defects like <strong>laminations</strong> (internal
          separation of the rolled plates) is essential.
        </li>
        <li>
          <strong>Concrete:</strong> Reinforced concrete for shorter spans, prestressed
          concrete for longer spans. Modern precast beam designs allow rapid construction
          during short possessions (track closures). Prestressed concrete uses high-strength
          steel tendons, tensioned before or after the concrete is cast, to keep the concrete
          in compression under working loads — since concrete is strong in compression but
          weak in tension. Less fatigue-sensitive than steel but can suffer from alkali-silica
          reaction (ASR), chloride-induced corrosion of reinforcement, and carbonation.
        </li>
        <li>
          <strong>Composite:</strong> Steel beams acting compositely with a concrete deck
          slab, connected by shear studs welded to the top flange. Combines the tensile
          strength of steel with the compressive strength of concrete. The composite section
          is significantly stiffer and stronger than either material alone. Common in modern
          construction, particularly for underbridges with spans of 10–40 m.
        </li>
      </ul>

      <h3>Bridge Types by Function</h3>
      <ul>
        <li><strong>Underbridge:</strong> The railway crosses over another feature (road, river, valley). The railway is on top. The bridge must carry the full railway loading plus its own dead weight.</li>
        <li><strong>Overbridge:</strong> Another feature crosses over the railway. The railway is underneath. The bridge must provide clearance for trains (the structure gauge) and may need strengthening or replacement when electrification requires increased headroom.</li>
        <li><strong>Footbridge:</strong> Pedestrian crossing, often at stations. Must meet accessibility standards (step-free access, handrails, tactile surfaces). Can be open or enclosed.</li>
        <li><strong>Viaduct:</strong> A long multi-span bridge, typically crossing a valley or floodplain. May contain dozens or even hundreds of spans.</li>
        <li><strong>Aqueduct:</strong> Carries a waterway (canal or river) over the railway. Rare but operationally critical where they exist, as failure would flood the railway.</li>
      </ul>

      <h3>Foundation Types</h3>
      <p>
        The bridge superstructure transfers its loads to the ground through foundations. The
        choice depends on ground conditions (determined by the ground investigation):
      </p>
      <ul>
        <li><strong>Spread foundations (pad/strip):</strong> Shallow foundations bearing directly on competent ground. Used where adequate bearing capacity exists at shallow depth. The foundation distributes the concentrated column/abutment load over a larger area of soil.</li>
        <li><strong>Piled foundations:</strong> Where the surface soil is too weak, loads are transferred to deeper strata through piles. <strong>Bored piles</strong> (drilled and concreted in-situ, typically 600–1,500 mm diameter) are common for railway bridges. <strong>Driven piles</strong> (precast concrete or steel, hammered into the ground) are used where the ground conditions suit and vibration is not a concern.</li>
        <li><strong>Caisson foundations:</strong> For major river crossings, large hollow chambers (caissons) are sunk to bedrock or a firm bearing stratum. The caisson is then filled with concrete. This technique was used for many 19th-century river bridges and is still used for large bridge piers in deep water.</li>
      </ul>

      <h3>Railway Loading</h3>
      <p>
        Railway loading is <strong>heavy</strong> (up to 25 tonnes per axle for freight, even
        higher on some international heavy-haul networks),
        <strong> repetitive</strong> (hundreds of trains per day for a 120-year design life),
        and generates significant <strong>dynamic amplification</strong> (impact from rail
        joints, wheel flats, hunting oscillation, and speed effects).
      </p>
      <p>
        Design loading standards include:
      </p>
      <ul>
        <li><strong>UK RA system:</strong> Route Availability (RA) units quantify the equivalent static loading effect of different vehicle types. RA1 is the lightest (small railcars); RA10 is the heaviest standard loading. Bridges are assessed for their RA capacity, and vehicles are assigned RA ratings — a vehicle can only use a route if every bridge on it has sufficient RA capacity.</li>
        <li><strong>UIC Load Model 71 (LM71):</strong> The international standard loading model: four 250 kN point loads at 1.6 m spacing on a distributed load of 80 kN/m. Represents the static effect of normal rail traffic. This is multiplied by a <strong>dynamic amplification factor</strong> (Φ) to account for impact effects, and by a classification factor (α) to adjust for different traffic types (α = 1.0 for standard, up to 1.46 for heavy freight routes).</li>
        <li><strong>SW/0 and SW/2:</strong> Special load models for continuous bridges (SW/0) and heavy freight (SW/2) in the Eurocode system. SW/2 represents exceptional vehicles like nuclear flask wagons.</li>
      </ul>

      <h3>Bridge Assessment vs Design</h3>
      <p>
        Designing a new bridge and assessing an existing one are fundamentally different
        tasks. New design uses conservative assumptions and generous safety factors. Assessment
        of existing bridges must determine the <em>actual</em> capacity of a structure that
        may be 150 years old, built to unknown standards, with deterioration that has reduced
        its strength.
      </p>
      <p>
        The UK's bridge assessment process uses a tiered approach:
      </p>
      <ul>
        <li><strong>Level 1 — Simple assessment:</strong> Conservative hand calculations using worst-case assumptions. If the bridge passes, no further work needed.</li>
        <li><strong>Level 2 — Refined assessment:</strong> More sophisticated analysis, using measured material properties and accounting for load distribution effects. Reduces conservatism.</li>
        <li><strong>Level 3 — Detailed assessment:</strong> Includes site-specific load testing, finite element modelling, and reliability analysis. Used for bridges that fail Level 2 but where the cost of strengthening is very high.</li>
      </ul>
      <p>
        If a bridge cannot be proved adequate at any level, the options are:
        <strong> strengthening</strong> (adding material or external reinforcement),
        <strong> weight restrictions</strong> (limiting the vehicles that can cross), or
        <strong> replacement</strong>.
      </p>

      <h3>Key Maintenance Concerns</h3>
      <ul>
        <li><strong>Scour:</strong> Water erosion around bridge foundations, especially during floods. The leading cause of bridge collapse worldwide. Scour assessment examines the depth of erosion that could occur during a design flood event and whether the foundations extend deep enough to remain stable. <strong>Scour protection</strong> measures include riprap (dumped rock armour), concrete aprons, sheet pile collars, and grouted mattresses.</li>
        <li><strong>Fatigue in steel:</strong> Crack initiation and growth at welds, rivet holes, and stress concentrations. Requires regular inspection (often using ultrasonic testing or magnetic particle inspection). Cracks are monitored, and if growth rates suggest the remaining fatigue life is insufficient, repairs (grinding, welding, bolted cover plates) or load restrictions are applied.</li>
        <li><strong>Corrosion:</strong> Steel bridges require periodic painting (a full repaint cycle on a large bridge can take years and cost millions). Weathering steel (Corten) forms a protective rust layer and needs no painting, but is unsuitable in coastal or heavily polluted environments. Masonry bridges suffer mortar deterioration and water ingress that can freeze and spall stone faces.</li>
        <li><strong>Bridge strikes:</strong> Over-height road vehicles hitting underbridges. A chronic problem causing millions in damage and disruption annually. Prevention includes height warning signs, goal-post-mounted impact beams, and electronic over-height detection systems that trigger warning signals to drivers.</li>
        <li><strong>Clearance for electrification:</strong> Many older overbridges have insufficient headroom for overhead line equipment, requiring either track lowering, bridge jacking (lifting the bridge on hydraulic jacks and packing the abutments), or complete bridge reconstruction. This is one of the biggest cost items in electrification programmes.</li>
      </ul>

      <h3>Bridge Replacement and Possessions</h3>
      <p>
        Replacing a railway bridge is a major logistical challenge because it requires closing
        the line (a "possession"). Modern techniques minimise possession time:
      </p>
      <ul>
        <li><strong>Weekend/bank-holiday possessions:</strong> The most common approach — demolish the old bridge, install the new one, and reinstate the track within a 52-hour or 72-hour possession window. Requires meticulous planning and rehearsal.</li>
        <li><strong>Self-propelled modular transporters (SPMTs):</strong> The new bridge deck is prebuilt alongside the railway, then wheeled into position on computer-controlled multi-wheeled transporters in a few hours. Dramatically reduces possession time.</li>
        <li><strong>Slide-in replacement:</strong> The new bridge deck is built on a temporary platform parallel to the railway. During the possession, the old deck is slid out and the new one slid in on Teflon sliding bearings. The entire swap can be completed in under 24 hours.</li>
        <li><strong>Incremental launching:</strong> For multi-span viaducts, segments are cast behind one abutment and pushed forward over the piers incrementally. No crane access or temporary supports needed over the obstacle being crossed.</li>
      </ul>

      <Callout type="analogy">
        Bridges are <strong>load balancers</strong>. They distribute concentrated forces
        (train axle loads) across foundations and the ground below, just as a load balancer
        distributes traffic spikes across backend servers. An overloaded bridge fails structurally;
        an overloaded server cluster fails in availability. Both require capacity assessment,
        monitoring, and periodic upgrades as demand increases. And bridge replacement during
        a possession is exactly like a zero-downtime deployment — build the new version
        alongside, then swap it in during a maintenance window.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm3-l2', label: 'Tunnels & Retaining Walls', desc: 'Other major structures on the railway.' },
        { target: 'm2-l1', label: 'Ground Investigation', desc: 'Foundation design depends entirely on ground conditions.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Clearance constraints that affect bridge design.' },
        { target: 'm2-l3', label: 'Drainage & Stability', desc: 'Scour — where drainage and structural engineering meet.' },
      ]} />
    </>
  );
}

function M3L2({ goTo }) {
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

function M3L3({ goTo }) {
  return (
    <>
      <h3>Station Design Principles</h3>
      <p>
        Stations are where the railway meets the public. Design must balance operational
        efficiency, passenger flow, accessibility, safety, and commercial viability. A station
        is simultaneously a transport interchange, a public building, a retail space, and an
        emergency evacuation challenge.
      </p>
      <ul>
        <li><strong>Passenger flow:</strong> Modelled using pedestrian simulation software (Legion, MassMotion, PTV Viswalk). Peak flows determine gateline widths, staircase capacities, platform lengths, and the number of lifts. The critical design scenario is often the 15-minute peak arrival rate combined with dwell time of trains at platforms. Over-crowded platforms are a safety hazard — crowd crush incidents can occur when platform density exceeds about 4 persons/m².</li>
        <li><strong>Accessibility:</strong> Modern standards (Equality Act / DDA in the UK, ADA in the US, TSI PRM in Europe) require step-free access to all platforms — lifts, ramps, tactile paving, hearing loops, accessible ticket machines, and information in accessible formats (audio, visual, Braille). Retrofitting accessibility into Victorian stations is one of the biggest ongoing investment programmes — Access for All in the UK has spent billions upgrading step-free access at hundreds of stations, and thousands still lack it.</li>
        <li><strong>Interchange design:</strong> Many stations serve multiple modes — national rail, metro, bus, tram, cycling, walking. The design challenge is minimising interchange time and distance while maintaining legible wayfinding. Cross-platform interchange (step off one train, step onto the next across the same platform) is the gold standard but requires careful timetabling and platform allocation.</li>
        <li><strong>Fire safety and evacuation:</strong> Station design must allow complete platform evacuation within prescribed time limits (typically 4–6 minutes). This drives the number and width of exits, the capacity of escalators and stairs, and the design of ventilation to control smoke in underground stations. The King's Cross fire of 1987 led to a complete overhaul of fire safety standards for UK underground stations.</li>
      </ul>

      <h3>Platform Types</h3>
      <ul>
        <li><strong>Side platforms:</strong> One platform on each side of the tracks. The simplest and most common arrangement. Passengers access from the side, and the two platforms serve trains in opposite directions. Easy to extend by lengthening at one or both ends.</li>
        <li><strong>Island platform:</strong> A single platform between two tracks, served on both faces. Space-efficient but requires grade-separated access (subway or bridge) since passengers must cross the tracks to reach it. Common in suburban stations and metro systems. The platform must be wide enough to handle peak flows on both faces simultaneously.</li>
        <li><strong>Bay platform:</strong> A dead-end platform alongside a through platform, used for terminating branch services. The bay track ends at a buffer stop within the station. Allows branch trains to terminate without blocking through running lines.</li>
        <li><strong>Terminal platform:</strong> All platforms are dead-ends (e.g. London Paddington, Paris Gare du Nord, New York Penn Station). Operationally constrained because every arriving train must reverse out (or be hauled out by a shunter). Platform reoccupation time is the key capacity constraint — the time between one train departing and the next one arriving, including signal clearance, point setting, and approach time.</li>
        <li><strong>Through station:</strong> Platforms alongside through running lines. Trains stop, load/unload, and continue. Much more capacity-efficient than terminal stations because trains don't need to reverse. The majority of intermediate stations are through stations.</li>
      </ul>

      <h3>Platform-Train Interface</h3>
      <p>
        The gap between the platform edge and the train is one of the most critical safety
        interfaces on the railway. The gap has two components:
      </p>
      <ul>
        <li><strong>Lateral gap (stepping distance):</strong> The horizontal gap between the platform edge and the train body. Must be minimised (target &lt; 75 mm on straight platforms) but cannot be zero due to vehicle dynamic movement (sway, bounce). On curved platforms, the gap increases significantly because the straight train bodyshell diverges from the curved platform edge. This is why curved platforms often have "mind the gap" warnings.</li>
        <li><strong>Vertical gap (stepping height):</strong> The difference in height between the platform and the train floor. Modern accessibility standards target a step-free interface (zero or near-zero height difference), which requires matching the platform height to the train door sill height. Different rolling stock types have different door heights, making this problematic on routes with mixed stock.</li>
      </ul>
      <p>
        Solutions to platform gap issues include: <strong>platform humps</strong> (raised
        sections of platform aligned with door positions), <strong>Harrington humps</strong>
        (small ramps at specific door positions), <strong>gap fillers</strong> (mechanical
        extendable platforms), and <strong>train-mounted retractable steps</strong>.
      </p>

      <h3>Station Throat Design</h3>
      <p>
        The <strong>throat</strong> is the area of track between the station platforms and the
        open line, containing switches, crossovers, and junctions. Throat design determines
        operational flexibility — can trains cross between platforms? Can services arriving on
        one line depart on another? Can a terminating train reverse and depart from a different
        platform?
      </p>
      <p>
        The signalling implications are profound: every additional turnout adds complexity to
        the interlocking and increases the potential for conflicting routes. But too few
        turnouts restricts operational flexibility and reduces the station's capacity to
        handle disruption.
      </p>
      <p>
        Key throat design considerations:
      </p>
      <ul>
        <li><strong>Crossovers between running lines:</strong> Allow trains to switch between the up and down lines. Essential for handling perturbation (disruption). Without crossovers, a delayed train on one line blocks everything behind it with no ability to overtake or divert.</li>
        <li><strong>Turnout speed:</strong> The turnout geometry in the throat determines the speed at which trains can diverge. Higher-speed turnouts (1-in-20 or above) allow trains to enter platforms without slowing excessively, but they are longer and more expensive.</li>
        <li><strong>Simultaneous movements:</strong> A well-designed throat allows multiple train movements to occur simultaneously — one arriving while another departs, or two trains entering different platforms at the same time. This requires the interlocking to define non-conflicting routes.</li>
        <li><strong>Shunt moves:</strong> Terminal stations need the ability to move empty trains from arrival platforms to departure platforms (or to stabling sidings). These shunt moves consume throat capacity and must be factored into the timetable.</li>
      </ul>

      <h3>Loading Gauge vs Structure Gauge</h3>
      <p>
        Two critical clearance concepts govern what can physically operate on a railway:
      </p>
      <ul>
        <li><strong>Loading gauge (kinematic envelope):</strong> The maximum cross-sectional profile of a vehicle, including dynamic movement (sway, bounce, tilt, suspension deflection, and track irregularities). This is the <em>vehicle</em> constraint. It is calculated by taking the static vehicle profile and adding allowances for all possible movements. In the UK, the standard vehicle loading gauge reference profiles are W6a (the most restrictive standard gauge), W8, W9, W10, W12, and GW (the least restrictive).</li>
        <li><strong>Structure gauge:</strong> The minimum clearance that all lineside structures (bridges, tunnels, platforms, signal gantries, equipment cabinets) must provide. This is the <em>infrastructure</em> constraint. It must always be larger than the loading gauge, with a safety margin. The structure gauge is defined as a series of reference profiles that vary by line speed and location (straight vs curve, electrified vs non-electrified).</li>
      </ul>
      <p>
        The <strong>difference</strong> between the structure gauge and the loading gauge is
        the available clearance margin. On curves, additional clearance (overthrow and
        end-throw allowances) is needed because long vehicles sweep a wider path. On
        electrified lines, additional clearance above the vehicle is needed for the overhead
        line equipment and its pantograph sweep zone.
      </p>

      <h3>The UK Gauge Problem</h3>
      <p>
        Britain has one of the tightest loading gauges in the world — a legacy of the Victorian
        era when tunnels and bridges were built to just clear the trains of the day. Standard
        UK gauge (W6a) barely permits ISO containers on standard wagons. The height and width
        restrictions prevent the use of double-deck passenger trains, large freight containers,
        and standard European rolling stock without modification.
      </p>
      <p>
        Larger gauges (W8, W9, W10, W12) are being progressively cleared on strategic freight
        routes, but each enhancement requires:
      </p>
      <ul>
        <li>Surveying every structure on the route (using mobile laser scanning trains)</li>
        <li>Identifying all pinch points — structures where clearance is insufficient</li>
        <li>Designing and implementing modifications: bridge jacking, track lowering, platform edge trimming, signal repositioning, cable route diversion</li>
        <li>Coordinating possessions for the physical works</li>
      </ul>
      <p>
        The cost is measured in hundreds of millions per route. Yet the benefits — particularly
        for intermodal freight (larger containers = more goods per train = fewer lorries on
        roads) — make gauge clearance a strategic national priority.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png/800px-Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png"
          alt="Diagram comparing UIC loading gauge profiles with ISO container profiles, showing the clearance envelopes"
          loading="lazy"
        />
        <figcaption>
          UIC loading gauge profiles overlaid with ISO container profiles. The loading gauge defines the maximum vehicle cross-section; the structure gauge must always be larger.
          Image: <a href="https://commons.wikimedia.org/wiki/File:Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
        </figcaption>
      </figure>

      <h3>Platform Height Standards</h3>
      <p>
        Platform height varies significantly across countries and even within the same country:
      </p>
      <ul>
        <li><strong>UK mainline:</strong> 915 mm above rail level — one of the highest in the world, designed for slam-door stock with high floor heights. Enables near-level boarding for most modern rolling stock.</li>
        <li><strong>European standard (TSI):</strong> 550 mm or 760 mm above rail level. The 760 mm standard is used for high-speed and intercity platforms; 550 mm for regional services.</li>
        <li><strong>Low platforms:</strong> Some heritage lines, freight-only lines, and some international systems use platforms as low as 200–300 mm. Passengers must climb steps to board.</li>
      </ul>
      <p>
        Mixed platform heights on the same network create significant vehicle design
        challenges. Trains serving both 550 mm and 760 mm platforms need either retractable
        steps or multi-height doorways. The mismatch between UK 915 mm platforms and
        European 550/760 mm platforms is one reason why through-running of European trains
        to UK domestic stations (beyond the international terminals) is not straightforward.
      </p>

      <Callout type="analogy">
        Loading gauge is an <strong>API schema contract</strong>. The loading gauge is the
        request schema; the structure gauge is the server's capacity to accept that schema.
        If you upgrade your payload (bigger trains, taller containers), every downstream service
        (bridge, tunnel, platform) must be verified and potentially upgraded to handle it.
        It is exactly like upgrading an API version — you must ensure every consumer is
        compatible before deploying, or things break at the interfaces. Platform height
        mismatches are like version incompatibilities — you need adapters (retractable steps)
        or you must upgrade the infrastructure.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l3', label: "Developer's Mental Model", desc: 'Gauge as API contract in the software mapping.' },
        { target: 'm3-l2', label: 'Tunnels & Retaining Walls', desc: 'Tunnels are often the binding gauge constraint.' },
        { target: 'm1-l3', label: 'Switches & Crossings', desc: 'The turnouts that form the station throat.' },
        { target: 'm6-l3', label: 'Wheel-Rail Interface & Gauging', desc: 'The vehicle side of the loading gauge equation.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM3Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm3-l1': return <M3L1 goTo={goTo} />;
    case 'm3-l2': return <M3L2 goTo={goTo} />;
    case 'm3-l3': return <M3L3 goTo={goTo} />;
    default: return null;
  }
}
