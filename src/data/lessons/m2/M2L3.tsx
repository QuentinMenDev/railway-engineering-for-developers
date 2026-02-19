import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M2L3({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 300 130" style={{ width: '100%', maxWidth: '300px' }}>
            <text x="150" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Track Drainage</text>
            {/* Simplified layers */}
            <rect x="40" y="80" width="220" height="20" fill="var(--bg-hover)" stroke="var(--border-light)" strokeWidth="0.5"/>
            <text x="150" y="93" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">subgrade</text>
            <rect x="50" y="50" width="200" height="30" fill="var(--border)" opacity="0.5" stroke="var(--text-dim)" strokeWidth="1"/>
            <text x="150" y="70" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ballast</text>
            {/* Rails — simple rectangles */}
            <rect x="100" y="42" width="5" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
            <rect x="195" y="42" width="5" height="10" fill="var(--text-bright)" stroke="var(--text-bright)" strokeWidth="1"/>
            {/* Water flow arrows */}
            <line x1="130" y1="58" x2="60" y2="75" stroke="var(--blue)" strokeWidth="1" strokeDasharray="2,2"/>
            <polygon points="60,75 66,72 64,78" fill="var(--blue)"/>
            <line x1="170" y1="58" x2="240" y2="75" stroke="var(--blue)" strokeWidth="1" strokeDasharray="2,2"/>
            <polygon points="240,75 234,72 236,78" fill="var(--blue)"/>
            {/* Cess drains */}
            <text x="40" y="110" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">cess</text>
            <text x="260" y="110" fill="var(--blue)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">cess</text>
            {/* Rain */}
            <line x1="150" y1="22" x2="150" y2="40" stroke="var(--blue)" strokeWidth="0.5"/>
            <polygon points="150,40 148,36 152,36" fill="var(--blue)"/>
            <text x="150" y="30" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle" dy="-6">rain ↓</text>
          </svg>
        </div>
        <figcaption>Schematic: Water percolates through ballast and drains to cess (trackside) drains.</figcaption>
      </figure>

      <h3>Why Drainage Matters</h3>
      <p>
        Water is the enemy of railway earthworks. It softens subgrades, triggers slope
        failures, erodes ballast shoulders, causes frost heave, and accelerates deterioration
        of every material it contacts. Effective drainage is not an afterthought — it is
        fundamental to the integrity of the entire track structure. More railway earthwork
        failures are caused by water than any other factor.
      </p>
      <p>
        The relationship between water and soil strength is governed by the principle of
        <strong> effective stress</strong>: σ' = σ − u, where σ' is the effective stress
        (the stress carried by the soil skeleton), σ is the total stress, and u is the pore
        water pressure. As water pressure (u) increases, effective stress decreases, and so
        does the soil's shear strength. Drainage reduces pore water pressure, maintaining
        effective stress and hence stability.
      </p>

      <h3>Surface Drainage</h3>
      <ul>
        <li><strong>Cess drains:</strong> Channels running alongside the track at the edge of the ballast shoulder (the "cess"). They collect surface water runoff from the track bed and direct it to outfalls. Typically V-shaped or trapezoidal open channels, sometimes concrete-lined. Their capacity must handle the design storm event (often 1-in-100 year return period for railways).</li>
        <li><strong>Catch water drains:</strong> Located at the top of cutting slopes to intercept surface water before it flows down the cut face and causes erosion. Critical on long or steep cutting slopes where uncontrolled surface flow would cause severe gully erosion.</li>
        <li><strong>Track drainage:</strong> The ballast itself acts as a drainage medium — water percolates through the voids between stones. When ballast becomes fouled (clogged with fines), drainage fails and the track softens. This is a leading cause of geometry deterioration. Cleaning or replacing fouled ballast is one of the most expensive routine maintenance operations.</li>
        <li><strong>Formation drains:</strong> Where the formation (the surface on which the ballast sits) is impermeable clay, water cannot drain downward through the ballast and pools at the ballast/formation interface. Formation drains — either trenches or geocomposite strips at formation level — collect this trapped water and convey it to outfalls.</li>
      </ul>

      <h3>Subsurface Drainage</h3>
      <ul>
        <li>
          <strong>French drains (trench drains):</strong> Trenches filled with free-draining
          aggregate and wrapped in geotextile filter fabric. The geotextile prevents fine soil
          particles from entering and clogging the drain while allowing water to pass freely.
          Intercept groundwater flow and lower the water table within slopes or beneath
          formations.
        </li>
        <li>
          <strong>Carrier drains:</strong> Perforated pipes (typically perforated plastic or
          porous concrete) laid in trenches with granular surround. Used for higher-capacity
          subsurface drainage or where water must be conveyed over longer distances to an
          outfall. The perforations face downward (to minimise sediment ingress) and the pipe
          gradient must be sufficient to maintain self-cleansing velocity.
        </li>
        <li>
          <strong>Counterfort drains:</strong> A pattern of deep trench drains cut into the
          face of a cutting or embankment slope, typically in a herringbone pattern. They
          intercept water flowing through the slope body and direct it to a main collector
          drain. One of the most effective remedial measures for slopes suffering water-related
          deterioration.
        </li>
        <li>
          <strong>Horizontal drains:</strong> Small-diameter perforated pipes drilled
          sub-horizontally into a slope face to intersect a water-bearing layer. The pipe
          drains under gravity, lowering the water table within the slope. Used where
          conventional trench drains cannot reach the water.
        </li>
      </ul>

      <h3>Culverts</h3>
      <p>
        Where a watercourse (stream, ditch, or river) must cross beneath the railway, a
        <strong>culvert</strong> is provided. Types range from small-diameter pipe culverts
        (300 mm–1,200 mm) to large box culverts capable of handling major flows. Design
        considerations include:
      </p>
      <ul>
        <li><strong>Hydraulic capacity:</strong> The culvert must pass the design flood (typically 1-in-100 year or 1-in-200 year return period) without the upstream water level rising high enough to threaten the track. Climate change allowances (typically +20–40% on peak flow) are now standard.</li>
        <li><strong>Scour protection:</strong> Water velocity through and downstream of culverts can erode the bed and banks. Headwalls, wingwalls, aprons, and riprap protect against scour.</li>
        <li><strong>Blockage risk:</strong> Culvert blockage is a serious risk — backed-up water can saturate the embankment and cause failure. Trash screens protect culvert inlets but must themselves be maintained. Regular inspection and clearance is essential, particularly before and during flood seasons.</li>
        <li><strong>Fish passage:</strong> Environmental regulations increasingly require culverts to maintain fish passage. This affects the invert level (must be buried below bed level), flow velocity (must not exceed swimming capacity), and internal conditions (natural bed material within the culvert).</li>
      </ul>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg/1280px-Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg"
          alt="A small stream flowing through a culvert under a railway embankment, showing how watercourses are carried beneath the track"
          loading="lazy"
        />
        <figcaption>
          A culvert carrying a stream beneath a railway embankment. Blockage of culverts like this can saturate the embankment and lead to failure.
          Photo: <a href="https://commons.wikimedia.org/wiki/File:Small_stream_flowing_through_culvert_under_railway_and_footpath_bridge_-_geograph.org.uk_-_8127469.jpg" target="_blank" rel="noopener noreferrer">Geograph</a>, CC BY-SA 2.0
        </figcaption>
      </figure>

      <h3>Slope Stability</h3>
      <p>
        A slope fails when the driving forces (gravity, water pressure) exceed the resisting
        forces (soil shear strength). The <strong>Factor of Safety (FoS)</strong> is the ratio
        of resisting to driving forces. FoS &gt; 1 means stable; FoS &lt; 1 means failure.
        Design typically targets FoS of 1.3–1.5 for permanent slopes.
      </p>
      <ul>
        <li><strong>Circular slip:</strong> The most common failure mode in clay soils. The failure surface approximates a circular arc. Analysed by <strong>Bishop's simplified method</strong>, which divides the soil mass into vertical slices and checks equilibrium. Modern analysis uses software (GeoSlope, Plaxis) that can search thousands of potential slip circles to find the most critical one.</li>
        <li><strong>Wedge failure:</strong> Occurs in rock or structured soils where a planar discontinuity (bedding plane, joint) creates a sliding surface. Analysed by comparing the weight component along the plane with the shear resistance of the discontinuity surface.</li>
        <li><strong>Rotational failure:</strong> Deep-seated circular or non-circular failures, often extending well below the toe of the slope. These can affect the track even when the visible slope face appears intact.</li>
        <li><strong>Flow failure:</strong> In very soft or sensitive clays, or in saturated loose sands (liquefaction), the soil can behave as a fluid. Flow slides can travel large distances and are extremely destructive.</li>
      </ul>

      <h3>Slope Remediation Techniques</h3>
      <p>
        When a slope is found to be unstable or has failed, remediation options include:
      </p>
      <ul>
        <li><strong>Regrading:</strong> Reducing the slope angle (cutting back the top or building up the toe) to improve the FoS. Effective but requires land and generates/consumes material.</li>
        <li><strong>Drainage:</strong> Lowering the water table is often the most cost-effective remediation. Counterfort drains, horizontal drains, and pumped wells all reduce pore water pressure.</li>
        <li><strong>Soil nailing:</strong> Steel bars (typically 20–30 mm diameter) are drilled and grouted into the slope at regular spacings. They reinforce the soil mass in tension, increasing the resisting forces along potential slip surfaces. The slope face is often protected with a sprayed concrete facing or steel mesh.</li>
        <li><strong>Retaining structures:</strong> Sheet piles, contiguous or secant bored pile walls, or reinforced earth can provide structural restraint. These are expensive but may be the only option where space for regrading is unavailable.</li>
        <li><strong>Geosynthetic reinforcement:</strong> Geogrids or woven geotextiles placed within the slope body during reconstruction provide additional tensile resistance. Used extensively in reinforced-earth embankments.</li>
      </ul>

      <h3>Frost Heave &amp; Vegetation</h3>
      <p>
        In cold climates, water in the subgrade can freeze, forming ice lenses that push the
        track upward — <strong>frost heave</strong>. Ice lenses grow by drawing water from the
        surrounding unfrozen soil through capillary action. The heave can be severe — several
        centimetres of uplift — and is uneven, creating dangerous track geometry faults. The
        frost thaw cycle causes further damage: as ice melts, the previously frozen soil
        becomes saturated and extremely weak.
      </p>
      <p>
        Prevention involves ensuring adequate drainage (dry soil doesn't heave), using
        non-frost-susceptible subgrade materials (granular, not silty), and providing
        sufficient frost-free depth above the water table. In Scandinavia and Canada,
        insulation layers (expanded polystyrene boards) are placed beneath the ballast to
        reduce frost penetration.
      </p>
      <p>
        <strong>Vegetation management</strong> is a balancing act: tree roots can stabilise
        slopes through mechanical reinforcement and moisture extraction, but can also block
        drains, grow into culverts, and destabilise structures by root intrusion into
        masonry joints. Leaf fall contaminates the rail head and devastates autumn adhesion
        (the infamous "leaves on the line" — not a joke but a genuine and serious operational
        problem caused by a thin, compacted layer of leaf mulch that reduces wheel-rail
        friction below braking thresholds).
      </p>

      <h3>Climate Change and Earthworks</h3>
      <p>
        Climate change is intensifying the challenges for railway earthworks:
      </p>
      <ul>
        <li><strong>More intense rainfall:</strong> Higher peak rainfall leads to more surface erosion, higher pore water pressures in slopes, and increased flood risk for culverts. Many existing drainage systems were designed for historical rainfall patterns that no longer apply.</li>
        <li><strong>Hotter, drier summers:</strong> Extended dry periods cause deeper desiccation cracking in clay slopes. When heavy rain follows drought, water infiltrates rapidly through cracks, causing sudden instability.</li>
        <li><strong>Sea level rise:</strong> Coastal railways face increased erosion and flood risk. Entire sections of some coastal lines (e.g., the Dawlish sea wall on the UK's Great Western Main Line) are under threat.</li>
      </ul>

      <Callout type="analogy">
        Drainage is <strong>garbage collection</strong>. In a runtime without GC, memory
        (water) accumulates in places you don't want it, eventually causing crashes (slope
        failures). A well-designed drainage system continuously removes water before it causes
        problems — just as a garbage collector reclaims memory before it causes out-of-memory
        errors. Neglect either system and degradation is gradual, then sudden. Climate change
        is like a traffic spike that exceeds the GC's designed throughput — the system was
        sized for a different workload.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm2-l2', label: 'Earthworks', desc: 'The slopes and formations that drainage protects.' },
        { target: 'm2-l1', label: 'Ground Investigation', desc: 'Understanding groundwater before designing drainage.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'Ballast as both structural layer and drainage medium.' },
        { target: 'm3-l1', label: 'Bridges', desc: 'Scour and flood loading — drainage at structural interfaces.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the biggest enemy of railway earthworks?', options: ['Wind', 'Water', 'Temperature', 'Vegetation'], correct: 1, explanation: 'Water causes most problems: ballast fouling, subgrade softening, slope erosion, frost heave, and embankment slips.' },
  { text: 'What is a "cess drain" in railway terms?', options: ['A drain under the platform', 'A ditch running alongside the track at formation level', 'A pipe through an embankment', 'A drain inside a tunnel'], correct: 1, explanation: 'Cess drains run alongside the track collecting surface water and directing it to outfalls — the first line of defence against water damage.' },
  { text: 'What does "factor of safety" mean in slope stability?', options: ['The number of safety barriers', 'The ratio of resisting forces to driving forces in a potential slip', 'Distance from track to slope edge', 'Number of inspections per year'], correct: 1, explanation: 'FoS is resisting/driving forces ratio. FoS of 1.0 = verge of failure. Design standards require ≥ 1.3–1.5 for permanent slopes.' },
];
