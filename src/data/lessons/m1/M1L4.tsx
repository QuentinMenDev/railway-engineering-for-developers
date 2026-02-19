import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M1L4({ goTo }: LessonProps) {
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

      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 340 170" style={{ width: '100%', maxWidth: '340px' }}>
            <text x="170" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Schematic Drawing Symbols</text>
            {/* Track line */}
            <line x1="20" y1="45" x2="320" y2="45" stroke="var(--text-bright)" strokeWidth="2"/>
            {/* Turnout symbol */}
            <line x1="60" y1="45" x2="100" y2="65" stroke="var(--text-bright)" strokeWidth="2"/>
            <text x="75" y="78" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">turnout</text>
            {/* Stop signal — filled circle on stick */}
            <line x1="140" y1="45" x2="140" y2="28" stroke="var(--red)" strokeWidth="1.5"/>
            <circle cx="140" cy="26" r="4" fill="var(--red)"/>
            <text x="140" y="19" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">stop</text>
            {/* Distant signal — triangle on stick */}
            <line x1="180" y1="45" x2="180" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
            <polygon points="180,26 175,32 185,32" fill="var(--accent)"/>
            <text x="180" y="19" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">dist</text>
            {/* Track section — bracket */}
            <line x1="210" y1="50" x2="210" y2="55" stroke="var(--blue)" strokeWidth="1"/>
            <line x1="280" y1="50" x2="280" y2="55" stroke="var(--blue)" strokeWidth="1"/>
            <line x1="210" y1="55" x2="280" y2="55" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="245" y="65" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">track section</text>
            {/* Buffer stop */}
            <line x1="320" y1="38" x2="320" y2="52" stroke="var(--text-bright)" strokeWidth="3"/>
            <text x="315" y="34" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">buffer</text>
            {/* Double track with crossover */}
            <line x1="20" y1="110" x2="320" y2="110" stroke="var(--text-bright)" strokeWidth="2"/>
            <line x1="20" y1="130" x2="320" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
            <line x1="130" y1="110" x2="170" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
            <line x1="170" y1="110" x2="210" y2="130" stroke="var(--text-bright)" strokeWidth="2"/>
            <text x="170" y="148" fill="var(--text-dim)" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="middle">scissors crossover</text>
            <text x="30" y="105" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">Up →</text>
            <text x="290" y="143" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">← Dn</text>
          </svg>
        </div>
        <figcaption>Schematic symbols: Standard conventions for track, turnouts, signals, track sections, buffer stops, and crossovers.</figcaption>
      </figure>

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

export const quiz: QuizQuestion[] = [
  { text: 'What is the key difference between a geographic and a schematic track representation?', options: ['Geographic uses colour, schematic uses black and white', 'Geographic preserves true spatial positions; schematic preserves topology (connectivity and sequence)', 'Geographic is for engineers, schematic is only for passengers', 'There is no meaningful difference — both show the same information'], correct: 1, explanation: 'Geographic representations show true spatial positions and shapes. Schematics sacrifice geographic accuracy to show the logical structure clearly — what connects to what, in what order.' },
  { text: 'What representation does a signaller in a control room typically use?', options: ['Geographic (aerial view)', 'Schematic (track diagram)', 'A passenger map', 'A 3D model'], correct: 1, explanation: 'Control room displays show schematic track diagrams with real-time train positions, signal aspects, and point positions. Signallers need topology and connectivity, not geography.' },
  { text: 'What is a "linear referencing system" (chainage/mileage) used for?', options: ['Measuring train length', 'Identifying any point on the railway by its distance along the track from a datum', 'Calculating ticket prices', 'Timing train journeys'], correct: 1, explanation: 'Chainage or mileage identifies locations by distance from a datum (e.g., "42 miles 17 chains from London"). It bridges the schematic and geographic worlds.' },
  { text: "What did Harry Beck's 1931 London Underground map pioneer?", options: ['The first map printed in colour', 'Abandoning geographic accuracy in favour of topological clarity for passenger wayfinding', 'Using satellite imagery for transit maps', 'Showing real-time train positions'], correct: 1, explanation: 'Beck abandoned geography, using only horizontal, vertical, and 45-degree lines with equalised station spacing. This topological approach has been imitated by transit systems worldwide.' },
];
