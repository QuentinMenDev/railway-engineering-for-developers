import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M3L1({ goTo }: LessonProps) {
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

export const quiz: QuizQuestion[] = [
  { text: 'Why are railway bridge loads more challenging than road bridge loads?', options: ['Trains are longer than lorries', 'Railway loads are much heavier and applied repeatedly over decades', 'Railways need wider bridges', 'Train vibrations damage concrete'], correct: 1, explanation: 'A freight wagon can weigh 100+ tonnes, and a busy line sees 200+ trains daily for a 120-year design life, requiring fatigue assessment.' },
  { text: 'What is the most common type of historic railway bridge in the UK?', options: ['Steel truss', 'Reinforced concrete', 'Masonry arch', 'Suspension bridge'], correct: 2, explanation: 'The UK has ~30,000 Victorian masonry arch bridges. Arches work in compression, which masonry handles very well.' },
  { text: 'What is the difference between an overbridge and an underbridge?', options: ['Overbridges are longer', 'An overbridge carries a road over the railway; an underbridge carries the railway over an obstacle', 'Overbridges are for pedestrians only', 'No standard difference'], correct: 1, explanation: 'Overbridge = carries something OVER the railway. Underbridge = carries the railway OVER something. Perspective is always from the railway.' },
  { text: 'What is "scour" at a bridge foundation?', options: ['Rust on steel beams', 'Erosion of soil around foundations by water flow', 'Wear of bridge deck surface', 'Noise from passing trains'], correct: 1, explanation: 'Scour erodes riverbed material around foundations, especially during floods. It is a leading cause of bridge failure worldwide.' },
];
