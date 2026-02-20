import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import { CatenarySystem } from '../../../components/symbols';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M5L2({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <CatenarySystem style={{ maxWidth: '320px' }} />
        </div>
        <figcaption>Schematic: Catenary system — catenary wire supports contact wire via droppers, keeping it level for the pantograph.</figcaption>
      </figure>

      <h3>Catenary System Anatomy</h3>
      <p>
        The overhead line equipment (OLE) that delivers power to trains is far more than a simple
        wire strung between poles. A modern <strong>catenary system</strong> is a precisely
        engineered assembly of components, each with a specific function:
      </p>
      <ul>
        <li>
          <strong>Contact wire:</strong> The lower wire that the pantograph actually touches.
          Made from hard-drawn copper or copper-silver alloy (Cu-Ag provides higher strength
          and wear resistance at elevated temperatures), typically 107–120 mm² cross-section.
          Must maintain a consistent height and be free of hard spots or kinks that could damage
          the pantograph or cause arcing. The contact wire has a figure-of-eight or grooved
          profile to allow it to be gripped by the dropper clips.
        </li>
        <li>
          <strong>Catenary (messenger) wire:</strong> The upper wire that supports the contact
          wire. Made from bronze or copper-cadmium alloy, it follows a natural catenary curve
          between support points. Its role is to keep the contact wire at a uniform height —
          without it, the contact wire would sag under its own weight between support points.
        </li>
        <li>
          <strong>Droppers:</strong> Vertical or near-vertical hangers connecting the catenary
          wire to the contact wire at regular intervals (typically 5–12 m). They transfer the
          weight of the contact wire to the catenary wire. The dropper closest to the support
          (the "Y-dropper" or first dropper) is critical for controlling the dynamic behaviour
          of the contact wire as the pantograph passes the support point.
        </li>
        <li>
          <strong>Registration arms:</strong> Horizontal arms attached to masts or portals that
          hold the contact wire at a precise lateral position relative to the track centreline.
          They allow the wire to move vertically (as the pantograph pushes it up) while
          constraining its lateral position. The registration arm pivots at its mast attachment
          to accommodate thermal movement.
        </li>
        <li>
          <strong>Steady arms:</strong> Arms at the registration point that prevent the contact
          wire from being pushed sideways by the passing pantograph, maintaining the stagger
          pattern.
        </li>
        <li>
          <strong>Masts and portals:</strong> The support structures. Single-track masts carry
          a cantilever arm; multi-track portals span across several tracks. Typically steel or
          concrete, spaced 50–70 m apart on tangent track and closer on curves (down to 30 m
          on tight curves where the wire pull is significant).
        </li>
        <li>
          <strong>Insulators:</strong> Porcelain or composite (silicone rubber) insulators
          isolate the live overhead line from the earthed support structures. They must
          withstand the full system voltage plus transient overvoltages from lightning and
          switching operations. On 25 kV systems, the creepage distance (the path over
          the insulator surface) must be long enough to prevent flashover even in contaminated
          or wet conditions.
        </li>
      </ul>

      <h3>Catenary Types</h3>
      <p>
        Different catenary configurations are used depending on line speed and performance
        requirements. The choice is driven by the need for uniform elasticity along the span
        — that is, the contact wire should deflect by the same amount regardless of where along
        the span the pantograph makes contact:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Speed Range</th>
              <th>Where Used</th>
              <th>Key Characteristic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simple suspension</td>
              <td>Contact wire only, no messenger wire. Hung directly from span wires or bracket arms.</td>
              <td>Up to ~70 km/h</td>
              <td>Tramways, depot areas, sidings</td>
              <td>Large sag between supports, poor dynamic performance, cheapest to install</td>
            </tr>
            <tr>
              <td>Simple catenary</td>
              <td>One messenger wire and one contact wire, connected by droppers. The messenger follows a catenary curve; the contact wire is nominally level.</td>
              <td>Up to ~160 km/h</td>
              <td>Most conventional mainlines, suburban routes</td>
              <td>Significant elasticity variation between mid-span (soft) and support (stiff), adequate for moderate speeds</td>
            </tr>
            <tr>
              <td>Stitched catenary</td>
              <td>As simple catenary, but with short "stitch wires" connecting the contact wire to the messenger wire at each support point. The stitch wire runs alongside the registration arm.</td>
              <td>Up to ~200 km/h</td>
              <td>UK mainlines (Series 1 and Series 2 OLE), some European conventional lines</td>
              <td>Stitching softens the hard spot at supports, reducing the elasticity variation. Improves dynamic contact quality at higher speeds.</td>
            </tr>
            <tr>
              <td>Compound catenary</td>
              <td>An auxiliary (secondary) messenger wire is added between the main messenger and the contact wire, with its own droppers to the contact wire. Creates a three-level system.</td>
              <td>250–350+ km/h</td>
              <td>TGV lines (France), Shinkansen (Japan), some Chinese high-speed lines</td>
              <td>Near-uniform elasticity across the entire span. The auxiliary wire redistributes forces, eliminating the soft-in-middle/stiff-at-support problem. Essential for reliable current collection at very high speed.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The German high-speed approach (Re330 catenary, used on ICE lines at 300 km/h) uses a
        heavily optimised simple catenary with carefully computed dropper lengths, very high wire
        tension (up to 27 kN on the contact wire), and close mast spacing (approximately 65 m on
        tangent, less on curves). This achieves sufficient elasticity uniformity for 300 km/h
        without the additional complexity and cost of compound catenary — demonstrating that
        speed capability is a function of the entire system design, not just the catenary
        configuration.
      </p>

      <h3>Wave Propagation and Pantograph Dynamics</h3>
      <p>
        When the pantograph pushes up against the contact wire, it creates a <strong>transverse
        wave</strong> that propagates along the wire in both directions at a speed determined by the
        wire tension and mass per unit length:
      </p>
      <div className="highlight-box">
        <p>
          <strong>Wave propagation speed:</strong> c = √(T / m)
        </p>
        <p>
          Where T = wire tension (N) and m = mass per unit length (kg/m).
        </p>
        <p>
          For a typical 25 kV contact wire (120 mm² Cu-Ag, ~1.07 kg/m) at 20 kN tension:
          c = √(20,000 / 1.07) ≈ <strong>137 m/s ≈ 493 km/h</strong>
        </p>
        <p style={{ margin: 0 }}>
          For a high-speed system with 27 kN tension:
          c = √(27,000 / 1.07) ≈ <strong>159 m/s ≈ 572 km/h</strong>
        </p>
      </div>
      <p>
        The critical design parameter is the ratio of train speed to wave propagation speed. If the
        train approaches the wave speed, a "bow wave" effect occurs: the disturbance created by the
        pantograph cannot propagate ahead fast enough, causing the contact wire to pile up in front
        of the pantograph and lose contact behind it. The practical speed limit is typically
        <strong> 70–75% of the wave propagation speed</strong>. At higher ratios, contact quality
        degrades rapidly, with increasing arcing, wire uplift, and risk of dewirement.
      </p>
      <p>
        This is why high-speed OLE uses higher wire tensions — increasing tension raises the wave
        speed, raising the maximum operating speed. A 350 km/h train needs a wave propagation speed
        of at least 470–500 km/h, requiring contact wire tensions of 25–30 kN. But higher tension
        means stronger support structures, heavier foundations, and greater thermal stress on the
        wire — the entire support infrastructure must be designed for these forces.
      </p>
      <p>
        The interaction between pantograph and catenary is a <strong>coupled dynamic system</strong>.
        The pantograph has its own natural frequencies (typically 2–10 Hz for the first few modes),
        and the catenary has natural frequencies determined by the span length and wire properties.
        If these frequencies coincide, resonance can cause violent oscillation and contact loss.
        OLE design must ensure that the span frequencies and pantograph frequencies do not align at
        any operating speed — this is verified through mathematical simulation and validated by
        field testing.
      </p>

      <Callout type="info" label="Key Standard">
        EN 50318 specifies the validation requirements for simulation of pantograph-catenary
        dynamic interaction. Simulation models must be validated against measured data before
        they can be used to approve new OLE or pantograph designs. The standard defines
        acceptance criteria for contact force statistics (mean, standard deviation, maximum)
        and percentage of loss of contact.
      </Callout>

      <h3>Contact Wire Height</h3>
      <p>
        In the UK, the nominal contact wire height is <strong>4,700 mm to 5,500 mm</strong> above
        rail level, with a standard design height of around 4,900 mm on open track. The
        minimum height is constrained by the structure gauge (must clear any vehicle even at
        maximum dynamic deflection); the maximum by the pantograph's reach. Consistency is
        critical: the pantograph must maintain contact with the wire across the full speed range.
        A sudden change in height — at a bridge approach, for example — can cause the pantograph
        to lose contact (creating destructive arcing) or collide with the wire at excessive uplift
        force. Gradual height transitions are engineered with precision, typically not exceeding a
        1-in-500 gradient. In tunnels, the wire height is reduced to the minimum (as low as
        4,165 mm on some UK routes) to fit within the restricted clearance.
      </p>

      <h3>Stagger: The Zig-Zag Pattern</h3>
      <p>
        The contact wire is not positioned directly above the track centreline. Instead, it follows
        a deliberate <strong>zig-zag (stagger) pattern</strong>, offset alternately to one side
        and then the other at each registration point — typically <strong>+/−200 to 300 mm</strong>.
        This ensures that the pantograph carbon strip wears evenly across its full width rather
        than cutting a groove down the centre. Without stagger, the pantograph strip would develop
        a notch, leading to wire entanglement and potential dewirement.
      </p>
      <p>
        On curves, the contact wire naturally offsets toward the outside of the curve (the wire
        cuts across the chord between registration points). This offset must be controlled to
        keep the wire within the pantograph's collection area (typically ±275 mm from the track
        centre). On sharp curves, closer registration spacing and computed offset values ensure
        the wire remains within limits.
      </p>

      <h3>Auto-Tensioning</h3>
      <p>
        Both the contact wire and the catenary wire must be maintained at <strong>constant
        tension</strong> regardless of temperature. Copper wire changes length by approximately
        17 mm per degree Celsius per kilometre. Over a typical tensioning length of 1.5 km, a
        temperature swing from −10 °C to +60 °C would cause a length change of nearly
        <strong> 1.8 metres</strong>. Auto-tensioning equipment — typically <strong>balance
        weights</strong> (concrete blocks on a pulley system with a 3:1 or 4:1 mechanical
        advantage) or <strong>spring-based tensioners</strong> — at each end of a tensioning
        section takes up this slack automatically, maintaining wire tension at a constant value
        (typically 10–15 kN for the contact wire, 10–14 kN for the messenger wire).
      </p>
      <p>
        Where two tensioning sections meet, a <strong>midpoint anchor</strong> fixes the wire
        at a specific location, with overlap sections allowing continuity of contact as the
        pantograph transitions from one tensioning section to the next.
      </p>

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Close-up photo of a catenary system showing the messenger wire, droppers, contact wire, and registration arm at a mast. Ideally annotated or with visible components clearly distinct.</p>
        </div>
        <figcaption>Catenary system anatomy — messenger wire above, contact wire below, connected by droppers, held in position by registration arms.</figcaption>
      </figure>

      <h3>Pantograph Types and Design</h3>
      <p>
        The <strong>pantograph</strong> is the train's current collector — a spring-loaded,
        articulated arm that presses a carbon or carbon-composite <strong>contact strip</strong>
        against the overhead wire. The evolution of pantograph design reflects the increasing
        demands of higher speeds and heavier current collection duties:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Advantages</th>
              <th>Disadvantages</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diamond pantograph</td>
              <td>Two lower arms pivot outward from the base, meeting two upper arms that converge at the pan head. Forms a diamond shape when raised.</td>
              <td>Symmetrical operation in both directions, robust, good lateral stability</td>
              <td>Heavy (50–80 kg mechanism), high aerodynamic drag and noise, complex linkage</td>
              <td>Older rolling stock, some Japanese trains, heritage applications. Increasingly replaced.</td>
            </tr>
            <tr>
              <td>Single-arm (Z-type)</td>
              <td>One lower arm and one upper arm, arranged in a Z-configuration. The arm pivots at the base and at a knee joint. The pan head is mounted on top.</td>
              <td>Lightweight (30–50 kg), low aerodynamic drag, simple mechanism, direction-insensitive with correct design</td>
              <td>Asymmetric — may have slightly different characteristics depending on direction of travel. Requires careful aerodynamic profiling.</td>
              <td>Dominant type worldwide for both conventional and high-speed. Brecknell Willis, Schunk, Stemmann-Technik all manufacture variants.</td>
            </tr>
            <tr>
              <td>Actively controlled pantograph</td>
              <td>A single-arm pantograph with an actuator (pneumatic, hydraulic, or electromagnetic) at the pan head that can adjust contact force in real-time based on sensor feedback.</td>
              <td>Maintains optimal contact force regardless of speed, wind, or catenary irregularities. Reduces arcing, wire wear, and strip wear.</td>
              <td>Expensive, complex, requires sensors and control electronics. Failure mode must default to passive operation.</td>
              <td>High-speed applications (350+ km/h). Experimental and entering service on latest-generation high-speed trains. Being developed for the next generation of European high-speed rolling stock.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Key pantograph design parameters:
      </p>
      <ul>
        <li><strong>Static contact force:</strong> The upward force when the train is stationary — typically 60–90 N. Too little and the contact resistance causes heating and arcing; too much and the wire is pushed excessively high, changing its geometry and causing premature wear.</li>
        <li><strong>Aerodynamic compensation:</strong> At speed, the airflow over the pantograph generates additional lift or downforce depending on the design. Modern pantographs are aerodynamically profiled to maintain a consistent contact force across the speed range. The target is a uniform mean force of about 70–120 N with minimal variation.</li>
        <li><strong>Carbon strip wear:</strong> The carbon strip wears during service and must be periodically replaced. Typical life is 10,000–30,000 km depending on speed, current, and wire condition. Worn strips are detected by ultrasonic or laser measurement during depot inspections.</li>
        <li><strong>Pan head width:</strong> Varies by application and standard. European TSI specifies 1,600 mm for high-speed (AC) and 1,950 mm for conventional DC lines. The wider strip provides a larger collection area, compensating for greater stagger on DC overhead lines and for thermal movement at lower wire heights.</li>
      </ul>

      <h3>Contact Force Measurement and Standards</h3>
      <p>
        The quality of current collection is ultimately determined by the <strong>contact
        force</strong> between pantograph and wire — and its variation over time. Contact force
        must stay within a specific band: high enough to maintain electrical contact (preventing
        arcing and wire burns) but low enough to avoid excessive wire uplift and wear. Standards
        governing this are:
      </p>
      <ul>
        <li>
          <strong>EN 50317</strong> — specifies the requirements for measuring pantograph
          current collection quality in service. Defines the measurement methodology for
          contact force (using instrumented pantographs with accelerometers and strain gauges),
          arcing (optical or electrical detection), and uplift at the support (laser
          measurement). Tests are performed at different speeds to characterise the
          pantograph-catenary system across the operating range.
        </li>
        <li>
          <strong>EN 50367</strong> — specifies the technical criteria for the interaction
          between pantograph and overhead contact line. Defines the mean contact force targets
          and the acceptable standard deviation as a function of speed. For high-speed AC
          lines, the mean contact force Fm is defined as: Fm = 0.00097 × v² + 70 (in newtons,
          where v is speed in km/h). At 300 km/h, this gives a target mean force of
          approximately 157 N. The standard deviation must be low enough that the statistical
          minimum (Fm − 3σ) remains above zero at all times — a negative contact force means
          loss of contact.
        </li>
        <li>
          <strong>TSI Energy</strong> — the European Technical Specification for
          Interoperability (Energy subsystem) mandates contact force and current collection
          quality requirements for interoperable high-speed and conventional railways. It
          references EN 50317 and EN 50367 and sets the acceptance criteria for new
          infrastructure and rolling stock.
        </li>
      </ul>
      <p>
        Loss of contact between the pantograph and wire produces <strong>arcing</strong> — an
        electric arc that spans the gap. Arcing causes localised heating of both the contact wire
        and the carbon strip, accelerating wear and potentially causing hard spots (annealed
        copper) or burn marks on the wire. At high power draw (during acceleration), arcing can be
        particularly destructive. The percentage of arcing time (proportion of measurement time
        during which arcing occurs) is a key quality metric — modern high-speed OLE targets less
        than 0.1% arcing time at maximum speed.
      </p>

      <h3>High-Speed OLE Design Approaches</h3>
      <p>
        Designing OLE for speeds above 250 km/h demands a fundamentally different engineering
        approach from conventional systems. The three major high-speed railway traditions have
        developed distinct philosophies:
      </p>
      <ul>
        <li>
          <strong>French TGV approach:</strong> Uses <strong>compound catenary</strong> with
          relatively moderate wire tensions (15–20 kN contact wire). The auxiliary messenger
          wire creates the elasticity uniformity needed for high speed. Mast spacing is
          typically 54–63 m. The system is designed for 25 kV 50 Hz at 300–320 km/h. The
          French approach favours the sophistication of the catenary geometry over brute-force
          tension.
        </li>
        <li>
          <strong>German ICE approach:</strong> Uses <strong>highly tensioned simple catenary</strong>
          (Re330 system, with contact wire tensions up to 27 kN and messenger wire at 21 kN).
          The very high tension raises the wave propagation speed, allowing 300 km/h without
          compound catenary. Mast spacing is approximately 65 m on tangent. This approach
          favours simplicity (fewer components) but requires stronger support structures
          and foundations to resist the high wire loads.
        </li>
        <li>
          <strong>Japanese Shinkansen approach:</strong> Uses <strong>compound catenary</strong>
          (called "composite catenary" in Japanese terminology) with very high tensions on newer
          lines. The Tokaido Shinkansen originally used a heavy compound catenary design; newer
          lines (Tohoku, Hokkaido) have evolved to lighter, higher-tension designs. The Japanese
          are also pioneers in <strong>actively controlled pantographs</strong> — using real-time
          actuators to adjust contact force — enabling reliable current collection at 320+ km/h.
          Aerodynamic noise from the pantograph is a major concern in Japan due to strict
          community noise regulations, leading to extensive pantograph fairing and noise
          barrier development.
        </li>
      </ul>
      <p>
        In all cases, high-speed OLE requires extremely tight installation tolerances. Contact wire
        height must be maintained within ±30 mm of design value (compared to ±50 mm on conventional
        lines). Stagger must be precise. Every dropper length is individually calculated to account
        for the as-built mast positions. Installation is typically performed using specialist OLE
        construction trains with laser-guided wire positioning.
      </p>

      <h3>Series vs Parallel Feeding</h3>
      <p>
        In a <strong>series-fed</strong> system, the overhead line is simply fed from one end
        by the substation. This is straightforward but suffers from voltage drop along the length,
        especially under heavy loading. In a <strong>parallel-fed</strong> system, a separate
        return conductor (or the rails) runs alongside the OLE and is bonded to it at intervals,
        creating a lower-impedance path and better voltage regulation. Most modern 25 kV systems
        use some form of parallel feeding, often combined with auto-transformer feeding for optimal
        performance.
      </p>

      <h3>Dewirement and Wind</h3>
      <p>
        <strong>Dewirement</strong> — when the contact wire becomes dislodged from the pantograph
        and falls to one side — is one of the most disruptive OLE failures. A dewired contact
        wire typically wraps around the pantograph or drapes across adjacent tracks, requiring
        hours to repair and potentially damaging multiple trains. It can be caused by
        high winds, pantograph damage, foreign objects on the OLE, or wire fatigue.
      </p>
      <p>
        <strong>Galloping</strong> occurs when ice formation on the wire creates an aerodynamic
        profile that causes the wire to oscillate violently in wind, potentially leading to
        mechanical failure. <strong>Wind-blown contact wire</strong> can move outside the
        pantograph's collection area, causing loss of contact and arcing. Many railways impose
        speed restrictions or line closures when wind speeds exceed 50–70 mph, particularly on
        exposed routes and viaducts. The Great Western Main Line through the Thames Valley and
        the East Coast Main Line through exposed sections of Yorkshire are particularly
        vulnerable.
      </p>

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Photo of a raised single-arm (Z-type) pantograph pressing against the overhead contact wire, showing the carbon strip contact area. Bonus if arcing is slightly visible or the pantograph is at speed.</p>
        </div>
        <figcaption>A single-arm pantograph collecting current from the overhead contact wire — the interface between train and power supply.</figcaption>
      </figure>

      <h3>Neutral Sections and Phase Breaks</h3>
      <p>
        The overhead line is divided into electrically separate sections, each fed from a different
        substation or a different phase of the three-phase supply. Where two sections meet, a
        <strong> neutral section (phase break)</strong> is installed — a short length of unpowered
        wire that the train must coast through with its circuit breaker open. This prevents the
        train from bridging two out-of-phase supplies, which would cause a massive short circuit
        (the phase difference between two phases at 25 kV is 43.3 kV).
      </p>
      <p>
        Drivers receive lineside indicators warning them to open the circuit breaker before
        entering the neutral section. Modern trains have automatic neutral section detection
        (using transponders or GPS) that opens and closes the circuit breaker without driver
        intervention. The neutral section itself is typically 200–400 m long on high-speed
        lines to ensure the pantograph has fully cleared one electrical section before
        entering the next.
      </p>

      <h3>Section Insulator Types and Design</h3>
      <p>
        The <strong>section insulator</strong> (also called a section break or insulated overlap)
        is the physical device that creates the electrical separation between adjacent fed sections
        or between a live section and a neutral section. Several types exist:
      </p>
      <ul>
        <li>
          <strong>Air gap section insulator:</strong> The simplest form — a physical gap in the
          contact wire, bridged by insulated horns or guides that direct the pantograph across
          the gap. Used at low speeds (depots, sidings) and on some conventional lines. The
          pantograph briefly loses contact as it crosses the gap, causing a transient power
          interruption. Not suitable for high-speed operation due to the mechanical shock and
          arcing.
        </li>
        <li>
          <strong>Insulated overlap:</strong> Two contact wires run in parallel for a short
          distance (typically 200–300 m), each belonging to a different electrical section.
          The pantograph transfers from one wire to the other within the overlap zone. At
          the midpoint of the overlap, both wires are at the same height and the pantograph
          is in contact with both; at the ends, one wire is raised above the pantograph's
          reach while the other is at normal running height. The two wires are never
          electrically connected because the pantograph is always in the dead section
          (neutral zone) when it touches both. This is the standard arrangement at phase
          breaks on high-speed lines.
        </li>
        <li>
          <strong>Articulated section insulator:</strong> A compact device (typically 3–6 m
          long) that allows the pantograph to pass continuously from one electrical section
          to the next without loss of contact. The device uses interleaved insulating and
          conducting elements — the pantograph slides along conducting runners separated by
          insulating gaps, ensuring that at any point the pantograph contacts only one electrical
          section. Types include the Pfisterer and Siemens designs. These are used between
          sub-sections within the same phase (where no neutral zone is needed) and must
          withstand the voltage difference between adjacent sections (typically a few hundred
          volts from different feeder impedances, not the full phase-to-phase voltage).
        </li>
      </ul>

      <Callout type="info" label="Key Standard">
        EN 50119 defines the requirements for the design and installation of overhead contact
        lines. It specifies mechanical, electrical, and geometric parameters including minimum
        and maximum contact wire heights, stagger limits, wire tensions, insulation requirements,
        and clearance distances for voltages from 750 V DC to 25 kV AC.
      </Callout>

      <h3>Rigid Conductor Bar</h3>
      <p>
        In tunnels and other locations with extremely tight clearances, conventional catenary may
        not fit. A <strong>rigid conductor bar</strong> — an aluminium or copper bar mounted on
        insulators — replaces the flexible wire system. The pantograph slides along the underside
        of the bar. There are several types:
      </p>
      <ul>
        <li>
          <strong>T-profile conductor bar:</strong> An aluminium extrusion with a T-shaped
          cross-section, mounted inverted on insulators. The pantograph contacts the flat
          underside of the T. Used extensively on metro systems (Paris Métro, for example)
          and in some mainline tunnel sections. Typical current capacity: 1,000–2,000 A
          continuous.
        </li>
        <li>
          <strong>Composite conductor bar:</strong> An aluminium rail enclosing a copper
          contact surface on its underside. The aluminium provides the structural strength
          and current-carrying cross-section, while the copper provides the contact surface
          for the pantograph strip. This combination optimises both electrical conductivity
          and mechanical wear resistance.
        </li>
        <li>
          <strong>Catenary-to-rigid transition:</strong> At the boundary between flexible
          catenary and rigid conductor bar (typically at tunnel portals), a carefully designed
          transition section ensures the pantograph transfers smoothly between the two systems.
          The transition must accommodate the different dynamic behaviours — flexible catenary
          deflects under the pantograph, while rigid bar does not — and prevent the pantograph
          from bouncing or losing contact at the changeover point. Transition sections are
          typically 10–20 m long with gradually increasing stiffness.
        </li>
      </ul>
      <p>
        Rigid conductor bar is also used at depot and maintenance facility roofs where overhead
        clearance is very limited, and in cut-and-cover tunnel sections. Its main disadvantage is
        thermal expansion — a 100 m length of aluminium bar expands by approximately 2.3 mm per
        degree Celsius, so expansion joints must be provided at regular intervals (typically every
        12–18 m) to prevent buckling or gap formation. These expansion joints must maintain
        electrical continuity and a smooth running surface for the pantograph.
      </p>

      <h3>OLE Inspection and Maintenance</h3>
      <p>
        OLE is inspected using a combination of methods:
      </p>
      <ul>
        <li><strong>Non-contact measurement trains:</strong> Instrumented pantographs with lasers and cameras measure contact wire height, stagger, wear, and uplift at line speed. Network Rail's NMT (New Measurement Train) captures OLE geometry alongside track geometry on every pass.</li>
        <li><strong>Visual inspection:</strong> Foot patrols and helicopter/drone surveys identify physical damage, vegetation encroachment, and insulator contamination.</li>
        <li><strong>Contact strip analysis:</strong> Examination of worn pantograph carbon strips reveals information about the OLE condition — uneven wear, burn marks, or gouges indicate wire defects.</li>
        <li><strong>Thermal imaging:</strong> Infrared cameras detect hot spots at connections and joints, indicating high resistance that could lead to failure.</li>
      </ul>

      <Callout type="analogy">
        The catenary system is a <strong>content delivery network (CDN)</strong>. You are
        distributing power (content) to moving consumers (trains/users) with strict latency
        requirements (voltage drop/page load time). The substations are origin servers, the
        overhead line is the delivery network, and the registration arms are edge servers keeping
        the wire (delivery path) precisely positioned. Auto-tensioning is like auto-scaling — the
        system adapts to changing environmental conditions (temperature/traffic) to maintain
        consistent quality of service. Neutral sections are like DNS zone boundaries where you
        must ensure a clean handover between providers. Wave propagation speed is your network
        bandwidth — if the train (data throughput) approaches it, packets start dropping
        (contact loss). Actively controlled pantographs are like adaptive bitrate streaming —
        the client dynamically adjusts to maintain quality of service despite varying
        network conditions.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Structure gauge must accommodate OLE — bridges and tunnels are the binding constraints.' },
        { target: 'm5-l1', label: 'Traction Power Systems', desc: 'The voltage system determines the OLE design parameters.' },
        { target: 'm5-l3', label: 'Power Supply & Protection', desc: 'How substations feed the overhead line and manage faults.' },
        { target: 'm6-l3', label: 'Wheel-Rail Interface & Gauging', desc: 'Pantograph gauge clearance is part of the kinematic envelope calculation.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'Why does the contact wire follow a zig-zag pattern (stagger)?', options: ['To reduce wind resistance on the wire', 'To spread wear evenly across the full width of the pantograph strip', 'To compensate for thermal expansion', 'To improve electrical conductivity'], correct: 1, explanation: 'Stagger offsets the contact wire alternately left and right of the track centreline so the pantograph strip wears evenly across its width, rather than cutting a groove in one spot.' },
  { text: 'What is a neutral section?', options: ['A section of track with no signalling', 'A short de-energised gap where two power feeding sections meet, which the train must coast through', 'A platform area where trains are not allowed to stop', 'A section reserved for unpowered rolling stock'], correct: 1, explanation: 'Neutral sections are short gaps with no power that separate different feeding sections (potentially from different phases or substations). Trains coast through them to avoid short-circuiting between sections.' },
  { text: 'What maintains constant wire tension across temperature changes?', options: ['Rigid supports at each mast', 'Auto-tensioning equipment (counterweights or spring systems) compensating for thermal expansion', 'The catenary wire absorbs all expansion', 'Expansion joints in the contact wire every 100 m'], correct: 1, explanation: 'Auto-tensioning systems use counterweights or springs at anchor points to maintain constant tension as the wire expands and contracts with temperature changes, ensuring consistent pantograph contact.' },
  { text: 'What is "dewirement"?', options: ['Routine removal of old overhead wire', 'When the pantograph catches and pulls down the contact wire, typically caused by high winds or a damaged pantograph', 'Disconnecting a section for maintenance', 'A method of installing new wire'], correct: 1, explanation: 'Dewirement occurs when the pantograph snags and tears down the contact wire. It causes extensive damage and lengthy line closures. Common causes include high winds, ice, or a damaged pantograph.' },
];
