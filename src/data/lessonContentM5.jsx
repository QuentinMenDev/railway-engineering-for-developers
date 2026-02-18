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

// ─── Module 5: Electrification & Power Supply ────────────────────────

function M5L1({ goTo }) {
  return (
    <>
      <h3>A Brief History of Railway Electrification</h3>
      <p>
        Railway electrification is not a modern idea. The first electric railway demonstrations
        took place in the 1870s and 1880s — Werner von Siemens demonstrated an electric railway at
        the Berlin Industrial Exhibition in 1879, and the Volk's Electric Railway opened in Brighton
        in 1883 (and still operates today). These early systems were all <strong>direct current (DC)</strong>,
        because DC motors were the only practical traction technology available. The challenge was
        always the same: DC cannot be easily transformed to higher voltages, so the supply voltage
        was limited to what the motors could accept directly — typically 500–750 V.
      </p>
      <p>
        This low voltage meant enormous currents for any meaningful power output, requiring
        heavy conductors and closely spaced substations. Early mainline electrification in the
        1900s–1930s used DC at 1,500 V or 3,000 V — higher than metro systems, but still
        fundamentally limited. Italy electrified major routes at 3 kV DC from the 1930s. The
        Netherlands adopted 1.5 kV DC. The UK Southern Railway committed to 660 V DC third rail
        in the 1920s–1930s, a decision whose consequences persist a century later.
      </p>
      <p>
        The breakthrough for mainline electrification came with <strong>alternating current (AC)</strong> systems.
        Early AC traction experiments began in the 1900s — the key advantage being that AC voltage
        can be stepped up for efficient long-distance transmission and stepped down onboard the
        train using transformers. However, early AC motors were problematic: induction motors
        lacked the torque characteristics needed for traction, and series-wound commutator motors
        (which worked well on DC) suffered from severe arcing at the commutator brushes when fed
        with standard 50 Hz AC.
      </p>
      <p>
        The solution adopted in Germanic countries and Scandinavia was to use a <strong>lower
        frequency</strong>. At 16⅔ Hz (later standardised to 16.7 Hz), the commutator arcing problem
        was greatly reduced, and series-wound motors could operate satisfactorily on AC. This is the
        origin of the <strong>15 kV 16.7 Hz</strong> system that still serves Germany, Austria,
        Switzerland, Sweden, and Norway. The frequency was chosen as exactly one-third of the 50 Hz
        mains frequency, allowing frequency conversion by rotary converters.
      </p>
      <p>
        The modern era of railway electrification arrived in the 1950s–1960s with the development
        of silicon rectifiers and, later, thyristor-based power electronics. These allowed trains
        to accept standard <strong>50 Hz (or 60 Hz) AC</strong> from the overhead line and rectify
        it onboard to DC for the traction motors. France pioneered the <strong>25 kV 50 Hz</strong> system
        on the Valenciennes–Thionville line in 1954, proving that standard industrial frequency AC
        could power mainline railways efficiently. This system became the global standard for new
        electrification — it was adopted by British Rail for the West Coast Main Line in the 1960s,
        by China, India, Turkey, and virtually every country electrifying from the 1960s onward.
      </p>

      <h3>The Fundamental Choice: AC vs DC</h3>
      <p>
        Every electrified railway must make a foundational decision: alternating current (AC) or
        direct current (DC)? This choice, once made, is essentially permanent — it determines
        the design of substations, the overhead line or third rail, the onboard traction equipment,
        and even the maintenance regime for decades to come. The global railway network is split
        between both systems, each with distinct engineering trade-offs.
      </p>
      <p>
        The physics are straightforward. <strong>Power = Voltage × Current</strong>. For a given
        power demand, higher voltage means lower current. Lower current means thinner conductors,
        less resistive loss (I²R losses), and fewer substations needed along the route. This is
        why AC systems, which can use transformers to step voltage up and down efficiently, dominate
        modern mainline electrification.
      </p>

      <h3>Voltage Systems Compared</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>System</th>
              <th>Voltage</th>
              <th>Where Used</th>
              <th>Advantages</th>
              <th>Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 kV AC 50 Hz</td>
              <td>25,000 V</td>
              <td>UK mainlines, France (TGV), China, India, most new builds worldwide</td>
              <td>Fewest substations, standard grid frequency, lowest conductor weight</td>
              <td>Greater clearance needed, more complex onboard equipment, EMC challenges</td>
            </tr>
            <tr>
              <td>15 kV AC 16.7 Hz</td>
              <td>15,000 V</td>
              <td>Germany, Austria, Switzerland, Sweden, Norway</td>
              <td>High voltage benefits, lower frequency reduces inductive interference</td>
              <td>Requires dedicated power generation or frequency converters, legacy system</td>
            </tr>
            <tr>
              <td>3 kV DC</td>
              <td>3,000 V</td>
              <td>Italy, Spain (conventional), Belgium, Poland, Russia, South Africa</td>
              <td>Moderate voltage, simpler onboard equipment than AC</td>
              <td>Heavy conductors, substations every 15-25 km, significant resistive losses</td>
            </tr>
            <tr>
              <td>1.5 kV DC</td>
              <td>1,500 V</td>
              <td>France (suburban), Netherlands, Japan (some lines), Hong Kong</td>
              <td>Simple proven technology, adequate for suburban services</td>
              <td>Substations every 5-10 km, heavy conductors, high current draw</td>
            </tr>
            <tr>
              <td>750 V DC third rail</td>
              <td>750 V</td>
              <td>UK Southern region, London Underground, many metro systems</td>
              <td>No overhead structures needed, lower visual impact, simpler infrastructure</td>
              <td>Substations every 2-5 km, safety hazard at track level, limited power capacity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Why AC Won for Mainlines</h3>
      <p>
        The mathematics are compelling. At 25 kV, a train drawing 4 MW of power requires only
        <strong> 160 A</strong>. The same train on a 750 V DC system would draw over
        <strong> 5,300 A</strong> — thirty-three times more current. This means the DC system needs
        conductors with thirty-three times the cross-sectional area (or accepting enormous resistive
        losses), and substations spaced every few kilometres instead of every 40-80 km. AC systems
        can also tap directly into the national grid via standard transformers, whereas DC requires
        rectifier substations to convert AC from the grid.
      </p>
      <p>
        The 25 kV 50 Hz system has a further advantage: it uses the standard industrial frequency,
        so substations simply step down the grid voltage. No frequency conversion is needed,
        and standard grid protection equipment can be employed. The onboard transformer steps
        25 kV down to a level suitable for the traction converter (typically 1–2 kV), and the
        four-quadrant converter rectifies it and feeds the DC link that supplies the inverter-fed
        traction motors.
      </p>

      <h3>The 15 kV 16.7 Hz System: Why the Odd Frequency?</h3>
      <p>
        The 15 kV 16.7 Hz system merits special attention because it represents a fascinating
        historical engineering compromise that has shaped an entire continent's railway
        infrastructure. The frequency of 16⅔ Hz (later redefined as 16.7 Hz in 1995 to
        accommodate the slight frequency drift of modern static converters) was chosen in the early
        1900s because it was exactly <strong>one-third of the 50 Hz mains frequency</strong>. This
        ratio allowed relatively simple rotary frequency converters — essentially a 50 Hz motor
        mechanically coupled to a 16.7 Hz generator — to produce the railway frequency from the
        public grid.
      </p>
      <p>
        At 16.7 Hz, the series-wound commutator motors used in early AC locomotives experienced
        far less commutator arcing than at 50 Hz, because the rate of change of current (di/dt)
        was three times lower. The inductance of motor windings also presented less reactance
        at the lower frequency, allowing more power to be delivered. These motors could be designed
        to work satisfactorily on AC without the complex power electronics that would not be
        available for another half-century.
      </p>
      <p>
        The consequence of this choice was the need for a <strong>dedicated railway power
        grid</strong>. Germany, Austria, and Switzerland operate an entirely separate single-phase
        16.7 Hz transmission network, including:
      </p>
      <ul>
        <li><strong>Dedicated power stations:</strong> Several power plants generate exclusively at 16.7 Hz, including hydroelectric stations in the Alps and thermal plants. In Germany, DB Energie operates dedicated railway power stations.</li>
        <li><strong>A 110 kV single-phase transmission network:</strong> This network runs alongside or near the railway, distributing 16.7 Hz power from the generating stations and converter plants to the traction substations. Germany alone has over 7,700 km of 110 kV 16.7 Hz transmission line.</li>
        <li><strong>Rotary and static frequency converters:</strong> Where dedicated 16.7 Hz generation is insufficient, converter stations draw power from the 50 Hz public grid and convert it to 16.7 Hz. Modern static frequency converters using IGBT technology are gradually replacing the older rotary machines, offering higher efficiency and faster response to load changes.</li>
        <li><strong>Central load dispatch:</strong> DB Energie operates a dedicated dispatch centre that manages this railway power grid, balancing generation and load across the network independently of the public grid operator.</li>
      </ul>
      <p>
        The cost of maintaining this parallel power infrastructure is substantial, but it provides
        a robust, railway-optimised supply. The lower frequency also has the incidental advantage
        of reduced inductive interference with lineside signalling and telecommunications cables.
        Modern power electronics have made the frequency choice technically obsolete — IGBT-based
        traction converters can equally well accept 16.7 Hz or 50 Hz — but the infrastructure
        legacy means the system will persist for many decades.
      </p>

      <Callout type="info" label="Key Standard">
        EN 50163 defines the nominal voltages and permissible limits for all standard railway
        electrification systems. For 25 kV AC, the permanent minimum is 19 kV and the permanent
        maximum is 27.5 kV. For 750 V DC, the permanent limits are 500 V to 900 V. These limits
        drive the substation spacing calculations and protection settings.
      </Callout>

      <h3>Power Factor and Reactive Power</h3>
      <p>
        AC traction systems do not simply draw real (active) power from the grid — they also
        draw <strong>reactive power</strong>, which loads the supply system without performing
        useful work. The power factor is the ratio of real power (kW) to apparent power (kVA).
        Early AC traction with phase-controlled thyristor converters had notoriously poor power
        factor, especially at low throttle settings — sometimes as low as 0.6–0.7. This meant
        the supply system had to be rated for 40–70% more current than the real power demand alone
        would require.
      </p>
      <p>
        Modern <strong>four-quadrant converters</strong> (using IGBT technology) achieve near-unity
        power factor (0.95–0.99) across the full power range, dramatically reducing the reactive
        power burden on the supply. However, legacy rolling stock with thyristor drives may still
        be in service, and the supply system must be designed to accommodate their reactive power
        demands.
      </p>
      <p>
        At the system level, <strong>reactive power compensation</strong> equipment may be
        installed at substations or at intermediate points along the route. Static VAR compensators
        (SVCs) or static synchronous compensators (STATCOMs) inject or absorb reactive power
        dynamically to maintain the voltage profile within limits. This is particularly important
        on long feeder sections where voltage drop under heavy loading can push the railhead
        voltage below the EN 50163 minimum. Compensation also reduces the reactive power demand
        on the national grid connection, avoiding penalty charges from the grid operator and
        freeing up capacity in the supply transformers.
      </p>

      <h3>Why DC Persists</h3>
      <p>
        DC systems survive for two main reasons. First, <strong>legacy</strong>: many networks were
        electrified with DC in the early 20th century when AC traction technology was immature, and
        converting an entire network is prohibitively expensive (new substations, new overhead line,
        modified or replaced rolling stock, new onboard transformers). The UK's Southern region
        third-rail network covers 4,000+ track-km — converting to 25 kV AC overhead would cost
        billions and take decades. Second, <strong>simplicity for metros</strong>: short-distance
        urban railways with frequent stops benefit from dense substation spacing (needed anyway
        for the short headways) and third rail avoids the need for overhead structures in tight
        tunnels. Modern power electronics (IGBT inverters) have largely eliminated the onboard
        simplicity argument, but the infrastructure legacy remains.
      </p>
      <p>
        There is a third, often overlooked factor: <strong>electromagnetic compatibility</strong>.
        DC traction current does not create the alternating magnetic fields that interfere with
        audio-frequency track circuits and telecommunications cables. On densely signalled metro
        networks with track circuit train detection, the absence of 50 Hz interference simplifies
        the signalling design. However, DC systems bring their own EMC challenges — the harmonic
        content of modern IGBT inverter drives on DC trains can interfere with signalling equipment
        at specific frequencies, and stray DC current causes corrosion of buried metalwork (discussed
        in M5-L3).
      </p>

      <h3>Third Rail Systems</h3>
      <p>
        In a third rail system, power is delivered through a <strong>conductor rail</strong> mounted
        at track level, typically alongside the running rails. Trains collect current through
        <strong> shoe gear</strong> — spring-loaded contact shoes that press against the conductor
        rail. The running rails serve as the return conductor, carrying current back to the
        substation. Third rail is almost universally 750 V DC in modern applications (some older
        systems use 630 V or 660 V).
      </p>

      <h3>Third Rail Contact Arrangements</h3>
      <p>
        The geometry of how the current collection shoe contacts the conductor rail varies
        significantly between systems. Each arrangement has distinct advantages:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contact Type</th>
              <th>Description</th>
              <th>Where Used</th>
              <th>Advantages</th>
              <th>Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Top contact</td>
              <td>Shoe rides on the upper surface of the conductor rail, which is mounted on insulators at approximately 350 mm from the running rail and about 100 mm above rail level.</td>
              <td>UK Southern region (Network Rail), some US commuter systems</td>
              <td>Simple mounting, easy visual inspection, straightforward shoe gear design</td>
              <td>Exposed to weather (ice, snow, leaves), accessible to trespassers, prone to ice formation</td>
            </tr>
            <tr>
              <td>Bottom contact</td>
              <td>Shoe presses upward against the underside of the conductor rail, which has an inverted profile protected by a cover board on top.</td>
              <td>Some European metros, parts of the Berlin S-Bahn</td>
              <td>Protected from weather and debris, reduced accidental contact risk, less ice accumulation</td>
              <td>More complex mounting, harder to inspect, shoe gear must push upward against gravity</td>
            </tr>
            <tr>
              <td>Side contact</td>
              <td>Shoe presses horizontally against the side of a specially profiled conductor rail, often protected by a shroud above.</td>
              <td>London Underground, New York Subway, many metro systems worldwide</td>
              <td>Good weather protection, compact profile, effective shrouding possible</td>
              <td>Lateral forces on shoe gear, more complex rail profile, alignment-critical</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Some systems use a <strong>fourth rail</strong> — a separate conductor rail for the return
        current, avoiding the use of the running rails for electrical return. London Underground
        uses a four-rail system: the positive conductor rail (side-contact, at +420 V relative to
        the running rails) is outside the running rails, and the negative return rail (top-contact,
        at −210 V relative to the running rails) is positioned between the running rails. The total
        traction voltage is 630 V. This arrangement keeps return current out of the running rails,
        which is essential for the reliable operation of DC track circuits on the Underground. It
        also significantly reduces stray current leakage into the tunnel structure.
      </p>

      <h3>Current Collection: Shoe Gear and Gaps</h3>
      <p>
        The current collection shoe is a critical component. Shoe gear types include:
      </p>
      <ul>
        <li><strong>Gravity shoes:</strong> The simplest type — a cast iron or steel shoe resting on the conductor rail under its own weight plus a light spring. Used on older stock and in low-speed applications. Contact force is relatively uncontrolled.</li>
        <li><strong>Spring-loaded shoes (beam type):</strong> A more sophisticated design where a pivoting beam carries the contact shoe, pressed against the conductor rail by a calibrated spring. The spring force is set to provide consistent contact pressure (typically 100–200 N) regardless of vertical position. Used on UK Southern region EMUs.</li>
        <li><strong>Pneumatic shoes:</strong> Contact pressure is provided by an air cylinder, allowing the shoe to be raised and lowered on command (e.g., to retract the shoes when entering a depot for maintenance). Common on modern metro trains.</li>
        <li><strong>Retractable shoe gear:</strong> Can be mechanically or pneumatically retracted flush with the bogie frame. Essential on dual-system trains that operate on both third rail and overhead electrification — the shoes must be retracted when running under overhead wires, and the pantograph lowered when running on third rail.</li>
      </ul>
      <p>
        At <strong>switches, crossings, and junctions</strong>, gaps in the conductor rail are
        unavoidable because the conductor rail cannot cross the path of wheels or moving switch
        blades. These gaps (typically 5–15 m long, sometimes longer at complex junctions) create
        momentary power interruptions. Trains must carry sufficient momentum to coast through
        the gaps, or — on modern stock — use brief battery backup to maintain auxiliary systems
        (lighting, HVAC, train management computers) during the interruption. On UK Southern
        region, some trains experience gaps of 40+ metres at complex junctions, requiring careful
        speed management. The conductor rail is ramped at each end of a gap to guide the shoe
        on and off smoothly, with a gentle vertical profile that prevents the shoe from snagging
        or bouncing.
      </p>
      <p>
        <strong>Ice and contamination</strong> are a persistent problem for third rail systems.
        Ice on the conductor rail surface prevents electrical contact, causing arcing, power loss,
        and potentially shoe gear damage. Mitigation includes anti-icing fluid applied by
        spraying trains, electric heating pads at critical locations, and running empty trains
        overnight to keep the rail surface clean. Autumn leaf fall can deposit a conductive
        organic layer on the conductor rail surface that, paradoxically, can cause both reduced
        contact quality and increased stray current leakage. The UK Southern region network
        is heavily affected by autumn adhesion issues on the conductor rail as well as on the
        running rails.
      </p>

      <h3>Multi-System Rolling Stock</h3>
      <p>
        Where different electrification systems meet, trains must be capable of operating on
        multiple voltage systems. This is increasingly common:
      </p>
      <ul>
        <li><strong>Eurostar (Class 374):</strong> Operates under 25 kV AC (HS1 and LGV), 3 kV DC (Belgium), and 1.5 kV DC (older Belgian lines). Three voltage systems, one train.</li>
        <li><strong>UK Class 319 / Class 377:</strong> Dual-system trains that switch between 25 kV AC overhead and 750 V DC third rail at the Thameslink/Brighton line boundary — using both pantograph and shoe gear.</li>
        <li><strong>Siemens Vectron multi-system:</strong> Freight/passenger locomotive capable of operating under 1.5 kV DC, 3 kV DC, 15 kV 16.7 Hz AC, and 25 kV 50 Hz AC — all four European voltages on one machine.</li>
        <li><strong>Alstom Coradia Polyvalent:</strong> A modular regional train platform designed for multi-system operation across French electrification boundaries (1.5 kV DC and 25 kV AC), with bi-mode diesel variants.</li>
        <li><strong>Stadler KISS for Westbahn:</strong> Operates under both 15 kV 16.7 Hz (Austria/Germany) and 25 kV 50 Hz (planned cross-border services), demonstrating the modern approach to multi-system design for high-capacity double-deck trains.</li>
      </ul>

      <h3>Multi-System Changeover: How It Works</h3>
      <p>
        The changeover between systems can happen automatically (on-the-fly switching as the
        train crosses a voltage boundary) or at a halt (typically at a border station). The
        onboard systems detect the incoming voltage and reconfigure the power electronics chain
        accordingly. The key components enabling multi-system operation are:
      </p>
      <ul>
        <li><strong>Multi-system transformer:</strong> Contains multiple taps or separate windings for different AC voltages. A single transformer may have a 25 kV winding and a 15 kV winding, with the appropriate one selected automatically.</li>
        <li><strong>Four-quadrant converter (4QC):</strong> The front-end power converter that can accept either AC or DC input. For AC input, it operates as an active rectifier with power factor correction. For DC input, it is bypassed or operates as a line filter. The 4QC feeds a common DC link bus.</li>
        <li><strong>DC link bus:</strong> A common intermediate DC voltage (typically 1.5–3.6 kV) that isolates the input supply from the traction inverter. Regardless of whether the input is 750 V DC, 3 kV DC, 15 kV AC, or 25 kV AC, the DC link operates at the same voltage, and the downstream traction inverter and motors see identical conditions.</li>
        <li><strong>Voltage detection system:</strong> Automated sensors detect the incoming supply voltage and frequency, commanding the main circuit breaker and input contactors to reconfigure the power chain. On-the-fly changeover occurs in a dead section (neutral zone) lasting 200–400 m, during which the train coasts with the main breaker open. Detection typically uses voltage transformers on the pantograph circuit.</li>
        <li><strong>Multiple current collectors:</strong> Dual-system AC/DC trains carry both pantographs and shoe gear. Multi-system AC trains may carry different pantograph types optimised for different overhead line systems — for example, a wider pan head for the German/Swiss system versus a narrower one for the French system, to comply with different gauge limits.</li>
      </ul>

      <Callout type="info" label="Key Standard">
        EN 50388 specifies the requirements for the power supply interface between rolling
        stock and the traction power system, including voltage limits, current limits, power
        factor requirements, and harmonic emission limits. Multi-system rolling stock must comply
        with this standard for each voltage system under which it operates.
      </Callout>

      <h3>Battery and Hydrogen Traction</h3>
      <p>
        Not every route justifies the capital cost of full electrification. Emerging alternatives
        include:
      </p>
      <ul>
        <li><strong>Battery-electric trains (BEMU):</strong> Charge batteries under electrified sections and run on battery power over non-electrified gaps. Hitachi's Class 802 AT300 platform supports battery operation, and the Stadler FLIRT Akku operates in Germany. Typical battery range is 40–80 km depending on speed and load. Charging happens rapidly at line voltage while running under the wires.</li>
        <li><strong>Hydrogen fuel cell trains:</strong> The Alstom Coradia iLint (in commercial service in Germany since 2022) and the Stadler FLIRT H2 use hydrogen fuel cells to generate electricity. Range of 600+ km. The key challenge is hydrogen infrastructure — production, storage, and refuelling depots. Green hydrogen (from electrolysis using renewable electricity) is the target but remains expensive.</li>
        <li><strong>Bi-mode trains:</strong> A bridge technology — trains with both electric (pantograph/shoe gear) and diesel traction equipment. Run under electric power where wires exist, switch to diesel beyond. The UK's Class 800/801/802 Hitachi Azuma fleet is bi-mode, running under 25 kV AC on the electrified sections and on diesel elsewhere.</li>
      </ul>

      <h3>Battery Traction: Technical Challenges</h3>
      <p>
        Battery-electric multiple units (BEMUs) face several significant engineering challenges
        that distinguish them from road electric vehicles:
      </p>
      <ul>
        <li>
          <strong>Energy density:</strong> A modern lithium-ion battery pack achieves approximately
          150–250 Wh/kg at the cell level, but at the system level (including cooling, structure,
          battery management system, and fire protection), this drops to 100–170 Wh/kg. A regional
          train may need 400–600 kWh of usable battery capacity for a 60–80 km non-electrified
          section, representing 3–5 tonnes of battery mass per vehicle. This mass penalty reduces
          payload capacity (fewer passengers or luggage) and increases energy consumption per km.
        </li>
        <li>
          <strong>Charging rate:</strong> Rapid charging under the wires at 25 kV is technically
          straightforward — the onboard transformer and converter can charge the batteries at
          high rates (500–1,000 kW). However, battery thermal management during rapid charging
          is critical: lithium-ion cells degrade rapidly if charged at high rates when hot.
          Active liquid cooling of the battery packs is essential, adding further mass and complexity.
        </li>
        <li>
          <strong>Cycle life and degradation:</strong> Railway batteries must endure 3,000–5,000
          charge-discharge cycles over a 15–20 year vehicle life. Calendar ageing and cycle ageing
          reduce capacity over time. Battery management systems must carefully control the state
          of charge (typically operating between 20% and 80% to maximise cycle life) and
          balance cells within the pack. Mid-life battery replacement is typically planned, adding
          to the whole-life cost.
        </li>
        <li>
          <strong>Fire safety:</strong> Lithium-ion battery thermal runaway is a serious safety
          concern, particularly in enclosed train environments. Battery packs must comply with
          fire safety standards (EN 45545 for railway rolling stock fire protection), with
          fire-resistant enclosures, thermal runaway propagation barriers between cell modules,
          gas venting systems, and fire detection and suppression systems. Battery packs are
          typically mounted under the vehicle floor in steel enclosures with downward venting,
          keeping any fire products away from the passenger saloon.
        </li>
      </ul>

      <h3>Hydrogen Traction: Infrastructure Challenges</h3>
      <p>
        Hydrogen fuel cell trains produce electricity from the electrochemical reaction of
        hydrogen and oxygen, with water as the only exhaust product. The technical challenges
        are primarily around the hydrogen supply chain:
      </p>
      <ul>
        <li>
          <strong>Hydrogen production:</strong> "Green" hydrogen from electrolysis using
          renewable electricity is the environmental target, but currently accounts for less
          than 1% of global hydrogen production. "Grey" hydrogen from steam methane reforming
          is cheaper but generates CO₂. "Blue" hydrogen adds carbon capture and storage (CCS)
          to the reforming process. The cost of green hydrogen (currently EUR 4–8/kg) must fall
          below approximately EUR 2–3/kg to be economically competitive with diesel traction
          over the whole vehicle life.
        </li>
        <li>
          <strong>Storage and distribution:</strong> Hydrogen is stored onboard the train as
          compressed gas at 350 bar (some newer designs use 700 bar for higher energy density)
          in composite pressure vessels mounted on the vehicle roof. A single FLIRT H2 carries
          approximately 160 kg of hydrogen for a 600+ km range. Refuelling infrastructure
          requires high-pressure hydrogen storage, compression equipment, and dispensers at
          depots — a single refuelling facility can cost EUR 10–15 million.
        </li>
        <li>
          <strong>Fuel cell durability:</strong> Proton exchange membrane (PEM) fuel cells
          for railway use must achieve 25,000–35,000 hours of service life. Current technology
          achieves 20,000+ hours, with ongoing improvements. Fuel cell degradation is
          accelerated by dynamic load cycling (frequent starts and stops), which is mitigated
          by hybridising the fuel cell with a battery pack that handles transient power demands
          while the fuel cell operates at a more constant output.
        </li>
        <li>
          <strong>Depot safety:</strong> Hydrogen is flammable in air at concentrations of
          4–75%, and its flame is nearly invisible. Depot facilities must be designed with
          adequate ventilation, hydrogen leak detection, and exclusion zone management.
          Refuelling operations require trained personnel and automated safety interlocks.
        </li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>Comparison of alternative traction energy densities:</strong>
        </p>
        <p>Diesel fuel: ~12,000 Wh/kg (at 40% engine efficiency, ~4,800 Wh/kg useful)</p>
        <p>Hydrogen (compressed 350 bar): ~33,000 Wh/kg (at 50% fuel cell efficiency, ~16,500 Wh/kg useful, but tank system mass reduces effective density to ~1,500–2,000 Wh/kg system level)</p>
        <p>Lithium-ion battery: ~150–250 Wh/kg cell level, ~100–170 Wh/kg system level (at ~90% round-trip efficiency)</p>
        <p style={{ margin: 0 }}>
          The energy density gap between batteries and liquid fuels remains approximately
          50:1 at the system level, which is why batteries are suited to short non-electrified
          gaps (40–80 km) while hydrogen targets longer diesel-replacement routes (200–600+ km).
        </p>
      </div>

      <Callout type="analogy">
        AC vs DC is like choosing between a <strong>thin, efficient protocol and a simpler but
        bandwidth-heavy one</strong>. AC at 25 kV is like sending compressed, high-efficiency data
        packets — you need fewer repeaters (substations) and thinner cables (conductors), but the
        encoding/decoding (transformer and rectifier onboard) is more complex. DC is like sending
        uncompressed data — the sender and receiver are simpler, but you need far more repeaters
        along the route to maintain signal strength, and the pipes must be much fatter to handle
        the bandwidth. Multi-system rolling stock is the polyglot microservice that can consume
        APIs in four different protocols. Battery and hydrogen traction are like edge computing —
        processing locally when you cannot reach the cloud, with the trade-off of limited local
        storage capacity.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm1-l1', label: 'Track Structure', desc: 'The running rails serve as the electrical return conductor in both AC and DC systems.' },
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'Traction current can interfere with track circuits used for train detection.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Overhead line equipment requires adequate clearance through bridges and tunnels.' },
        { target: 'm6-l2', label: 'Traction & Braking', desc: 'The onboard power electronics that interface with the supply system.' },
      ]} />
    </>
  );
}

function M5L2({ goTo }) {
  return (
    <>
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

function M5L3({ goTo }) {
  return (
    <>
      <h3>The Power Supply Chain</h3>
      <p>
        Railway electrification does not generate its own power — it draws from the national
        electricity grid and distributes it to trains through a carefully engineered chain of
        assets. Understanding this chain is essential for appreciating both the capability and
        the vulnerability of an electrified railway:
      </p>
      <ol>
        <li><strong>National grid:</strong> High-voltage transmission network (275 kV or 400 kV in the UK) operated by the National Grid ESO.</li>
        <li><strong>Grid supply point:</strong> The interface between the national grid and the railway, typically at a 132 kV or 275 kV sub-transmission level.</li>
        <li><strong>Feeder station:</strong> Connects the railway to the national grid, stepping voltage down from grid levels to the railway traction voltage. Contains transformers, circuit breakers, protection relays, and SCADA interfaces.</li>
        <li><strong>Track sectioning cabin / switching station:</strong> Distributes power along the route and provides section switches for isolation. Located between feeder stations, they allow flexible power routing and section isolation.</li>
        <li><strong>Overhead line or third rail:</strong> The final distribution medium that delivers power to the train.</li>
        <li><strong>The train:</strong> Collects power via pantograph or shoe gear, transforms/rectifies it onboard, and drives the traction motors.</li>
      </ol>

      <h3>Substation Types</h3>
      <p>
        The type of substation depends on whether the system is AC or DC:
      </p>
      <ul>
        <li>
          <strong>AC substations</strong> contain transformers that step the grid supply down
          to the traction voltage (25 kV). The transformer is the critical and most expensive
          component — a typical 25 kV traction transformer is rated at 20–40 MVA and weighs
          30–60 tonnes. In modern systems, <strong>auto-transformer feeding</strong> is used:
          the supply is actually 50 kV (25 kV above rail and 25 kV below, with the rail as
          the midpoint), and auto-transformers at regular intervals along the route balance the
          currents and reduce the electromagnetic footprint.
          <strong> Booster transformers</strong> are an older approach that forces return current
          to flow through a dedicated return conductor rather than through the earth, reducing
          interference with telecoms and signalling.
        </li>
        <li>
          <strong>DC substations</strong> contain rectifiers (typically 12-pulse diode or
          thyristor bridges) that convert the incoming AC from the grid to the required DC
          voltage. A 12-pulse arrangement (two 6-pulse bridges with a 30° phase shift) reduces
          harmonic distortion injected back into the grid. Rectifier substations are relatively
          compact but must be closely spaced due to the lower voltage and higher current demands
          of DC systems. A typical 750 V DC substation for a metro system contains two or
          three rectifier units, each rated at 2–4 MW, with DC circuit breakers and negative
          return busbars.
        </li>
      </ul>

      <h3>Substation Spacing</h3>
      <p>
        Substation spacing is one of the most visible consequences of the AC vs DC choice:
      </p>
      <div className="highlight-box">
        <p>
          <strong>25 kV AC:</strong> Substations every <strong>40–80 km</strong>. Some high-speed
          lines manage with substations as far as 80 km apart, though 50 km is more typical for
          heavily trafficked routes.
        </p>
        <p>
          <strong>3 kV DC:</strong> Substations every <strong>15–25 km</strong>, due to lower
          voltage and greater resistive losses.
        </p>
        <p>
          <strong>750 V DC:</strong> Substations every <strong>2–5 km</strong>. On busy metro
          lines, substations may be as close as 1.5 km apart.
        </p>
        <p style={{ margin: 0 }}>
          This spacing directly drives infrastructure cost: a 100 km route electrified at 25 kV AC
          might need 2–3 substations, while the same route at 750 V DC would need 20–50.
        </p>
      </div>

      <h3>Auto-Transformer vs Booster Transformer Feeding</h3>
      <p>
        The two main feeding arrangements for 25 kV AC systems represent different approaches
        to managing the electromagnetic impact of traction current on the surrounding environment.
        Understanding their differences is essential for electrification design:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Booster Transformer (BT) Feeding</th>
              <th>Auto-Transformer (AT) Feeding</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Principle</td>
              <td>1:1 ratio transformer in series with the return conductor, forcing return current through a dedicated aerial return conductor rather than through the rails/earth.</td>
              <td>Feeder supplies 50 kV (25 kV positive feeder to rail, 25 kV rail to negative feeder). ATs at regular intervals provide 25 kV to the contact wire from the 50 kV supply, balancing currents between positive and negative feeders.</td>
            </tr>
            <tr>
              <td>Supply voltage</td>
              <td>25 kV between contact wire and rail</td>
              <td>50 kV between positive and negative feeders; 25 kV between contact wire and rail</td>
            </tr>
            <tr>
              <td>Substation spacing</td>
              <td>30–50 km typical</td>
              <td>50–80 km typical (because the 50 kV supply halves the current for given power, reducing voltage drop)</td>
            </tr>
            <tr>
              <td>AT/BT spacing</td>
              <td>BTs every 3–5 km along the route</td>
              <td>ATs every 10–15 km along the route</td>
            </tr>
            <tr>
              <td>EMC performance</td>
              <td>Good — forces return current off the earth. However, the return conductor is aerial (overhead), so some residual magnetic field remains.</td>
              <td>Excellent — the anti-phase currents in the positive and negative feeders create cancelling magnetic fields, dramatically reducing the net electromagnetic field at distance. Typically 10–20 dB lower than BT feeding.</td>
            </tr>
            <tr>
              <td>Cost</td>
              <td>Lower capital cost per substation, but more substations needed due to shorter feeding distances.</td>
              <td>Higher capital cost (AT units, negative feeder, 50 kV insulation), but fewer substations. Increasingly preferred for new-build due to superior EMC and longer feeding distances.</td>
            </tr>
            <tr>
              <td>Where used</td>
              <td>Older UK electrification (WCML original installation), some French conventional lines</td>
              <td>Modern UK schemes (GWML electrification, HS2), Japan (Shinkansen), many new-build worldwide</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In practice, many railways are converting from BT to AT feeding as they renew ageing
        infrastructure. The AT system's superior electromagnetic compatibility is particularly
        valuable on routes where the railway runs close to residential areas, hospitals, or
        sensitive electronic installations. The reduced interference with audio-frequency track
        circuits is also a significant operational benefit.
      </p>

      <h3>Harmonic Distortion and Power Quality</h3>
      <p>
        Railway traction loads are among the most electrically demanding and disruptive loads on
        the national grid. The power electronics onboard trains draw current in a non-sinusoidal
        pattern, injecting <strong>harmonic currents</strong> back into the supply system. These
        harmonics cause voltage distortion at the grid supply point, affecting other grid users
        and potentially interfering with railway signalling equipment.
      </p>
      <p>
        Key harmonic issues include:
      </p>
      <ul>
        <li>
          <strong>Low-order harmonics (3rd, 5th, 7th):</strong> Produced by older thyristor-based
          traction converters. These are particularly problematic because they are close to the
          fundamental frequency and difficult to filter. A fleet of phase-controlled thyristor
          trains can cause total harmonic distortion (THD) of 10–20% at the supply point.
        </li>
        <li>
          <strong>High-order harmonics and switching noise:</strong> Modern IGBT converters
          switch at frequencies of 1–4 kHz, producing harmonic clusters around the switching
          frequency and its multiples. While these are at higher frequencies (easier to filter),
          they can interfere with audio-frequency track circuits (which operate at specific
          frequencies from 83 Hz to 10 kHz, depending on the system) and with lineside
          telecommunications.
        </li>
        <li>
          <strong>Inter-harmonics and sub-harmonics:</strong> Some converter topologies produce
          frequencies that are not integer multiples of the fundamental. These are particularly
          insidious because they can beat with the fundamental frequency, creating low-frequency
          voltage fluctuations (flicker) that affect lighting and sensitive equipment connected
          to the same grid supply.
        </li>
        <li>
          <strong>Resonance:</strong> The combination of the railway's capacitance (long overhead
          line), inductance (transformers), and the grid impedance can create resonant circuits at
          specific harmonic frequencies. If a harmonic produced by a train coincides with a
          resonant frequency of the supply system, the harmonic voltage can be greatly amplified,
          causing equipment damage or protection relay maloperation.
        </li>
      </ul>
      <p>
        Power quality requirements are defined by grid codes and standards. <strong>EN 50388</strong> specifies
        the harmonic emission limits for railway rolling stock, and the grid operator typically
        imposes limits at the grid supply point as part of the connection agreement. Harmonic
        filters — passive (tuned LC circuits) or active (power electronic devices that inject
        anti-phase currents) — may be installed at feeder stations to ensure compliance.
      </p>

      <h3>Earthing and Bonding Systems</h3>
      <p>
        The <strong>earthing and bonding</strong> system is a critical but often overlooked
        aspect of railway electrification. Its functions are:
      </p>
      <ul>
        <li>Providing a low-impedance return path for traction current</li>
        <li>Ensuring that exposed metalwork (masts, structures, fences) cannot reach dangerous voltages during a fault</li>
        <li>Draining static charge and lightning-induced voltages safely to earth</li>
        <li>Providing a reference potential for signalling and telecommunications equipment</li>
      </ul>
      <p>
        On AC electrified railways, the earthing philosophy falls into two categories:
      </p>
      <ul>
        <li>
          <strong>Solidly earthed systems:</strong> The running rails (and the structures bonded
          to them) are connected to the general earth mass at every substation and at regular
          intervals along the route. This ensures low touch voltages on metalwork during
          normal operation, but during a short-circuit fault, significant current flows
          through the earth, potentially causing step and touch voltage hazards and
          interference with buried services. This approach is common in the UK.
        </li>
        <li>
          <strong>Impedance-earthed (floating) systems:</strong> The running rails are
          insulated from the general earth mass (by insulated rail fastenings and insulated
          track-to-earth connections) and connected to earth only through a defined impedance
          at the substation. This limits earth fault current and reduces step and touch
          voltages on remote structures, but allows the rail potential to rise during fault
          conditions. Common on European continental railways and essential for DC systems
          where stray current management is critical.
        </li>
      </ul>
      <p>
        The <strong>bonding network</strong> connects all metalwork within the railway
        environment — masts, signal gantries, fences, cable troughs, equipment enclosures,
        platform structures — to the running rails or to the earthing system. This ensures
        equipotential bonding: all metalwork that a person could simultaneously touch is at the
        same voltage, preventing dangerous potential differences. Bond connections must be
        low-resistance (typically less than 0.01 ohm), regularly tested, and protected against
        corrosion. On third-rail DC systems, bonding is particularly critical because the
        running rails carry hundreds of amps of return current — a broken or high-resistance
        rail bond can cause localised rail potential rise, creating a shock hazard at platforms
        and crossings.
      </p>

      <Callout type="info" label="Key Standard">
        EN 50122-1 specifies the protective provisions relating to electrical safety and earthing
        in fixed installations for railway traction systems. It defines permissible touch voltages,
        step voltages, and rail potential limits for both AC and DC systems, and specifies the
        requirements for earthing and bonding design.
      </Callout>

      <h3>SCADA and Remote Control</h3>
      <p>
        The entire traction power network is monitored and controlled by a <strong>SCADA
        (Supervisory Control and Data Acquisition)</strong> system. From an electrical control
        room (ECR), operators can:
      </p>
      <ul>
        <li>Open and close section switches remotely to isolate faulted sections</li>
        <li>Monitor voltages, currents, and temperatures at every substation and switching point</li>
        <li>Receive automatic fault reports and alarm notifications</li>
        <li>Manage planned isolations for maintenance possessions</li>
        <li>Coordinate with signalling control centres to ensure track and power isolations are aligned</li>
      </ul>
      <p>
        The SCADA system must itself be highly reliable — loss of SCADA does not cause a power
        failure, but it blinds the operators to the state of the network, requiring fallback
        to manual (on-site) switching. Redundant communication paths (fibre optic and
        microwave radio) ensure resilience.
      </p>

      <h3>Section Switching and Isolation</h3>
      <p>
        The overhead line or third rail is divided into electrically separate <strong>sections</strong>,
        each of which can be independently energised or de-energised. <strong>Section switches</strong>
        (motorised disconnectors) at switching stations allow maintenance teams to isolate a specific
        section while adjacent sections remain live. This is essential for safe working: before any
        work on or near the overhead line, the section must be:
      </p>
      <ol>
        <li><strong>Switched out:</strong> The section switch is opened, disconnecting the section from the supply.</li>
        <li><strong>Proved dead:</strong> A voltage detector confirms the section is de-energised.</li>
        <li><strong>Earthed:</strong> Portable earthing equipment is connected to short-circuit the section to earth, ensuring it cannot be accidentally re-energised.</li>
        <li><strong>Permit to work issued:</strong> A formal document authorising work on the isolated section, signed by the authorised person and the electrical control room.</li>
      </ol>
      <p>
        This four-step isolation procedure is safety-critical. Failure to follow it — working
        on a live section — is invariably fatal. The vast majority of electrocution incidents on
        railways involve failures in the isolation procedure rather than equipment faults.
      </p>

      <h3>Protection Relay Types and Coordination</h3>
      <p>
        Electrical faults on the traction power system can be catastrophic — a short circuit
        between the overhead line and earth can deliver tens of thousands of amps. Protection
        systems must detect and clear faults within milliseconds. The principal protection
        relay types used in traction power systems are:
      </p>
      <ul>
        <li>
          <strong>Overcurrent (OC) relays:</strong> Trip the circuit breaker when current
          exceeds a defined threshold for a defined time. May be configured as instantaneous
          (trips immediately above a high threshold, for close-up faults) or inverse-time
          (trips after a delay that decreases as the current increases, for remote faults
          where some discrimination time is needed). Must be set above the maximum normal
          load current (including the inrush current of accelerating trains, which can be
          300+ A per train) but below the minimum fault current at the far end of the
          protected section.
        </li>
        <li>
          <strong>Distance (impedance) relays:</strong> Measure both voltage and current to
          calculate the impedance (and therefore the distance) to a fault. The relay has
          multiple zones: Zone 1 covers approximately 80% of the protected section and trips
          instantaneously (50–100 ms); Zone 2 covers 120% of the section and trips after a
          short delay (300–500 ms), providing backup for the adjacent section's Zone 1; Zone 3
          covers a larger area with a longer delay, providing remote backup. Distance protection
          is the primary protection for long 25 kV AC feeder sections.
        </li>
        <li>
          <strong>Earth fault relays:</strong> Detect current leaking to earth through damaged
          insulation, fallen wires, or flashover from the OLE to grounded structures. Sensitive
          earth fault relays can detect very low earth fault currents (down to a few amps) that
          might not trigger overcurrent protection — for example, a broken contact wire touching
          a wet wooden mast might present a high-impedance earth fault path.
        </li>
        <li>
          <strong>Directional relays:</strong> Determine whether fault current is flowing toward
          or away from the relay location. Essential for parallel-fed systems and ring
          configurations where fault current can flow in either direction. A directional
          overcurrent relay will only trip for faults in the protected direction, preventing
          unnecessary tripping for faults on adjacent sections.
        </li>
        <li>
          <strong>Auto-reclosure:</strong> Many faults on the OLE are transient (e.g., a bird
          or branch causing a momentary flashover). The protection system trips the circuit
          breaker, waits a short time (typically 10–30 seconds), and attempts to re-energise.
          If the fault persists, the breaker trips permanently and an alarm is raised.
          Auto-reclosure is typically allowed once; a second trip locks out the breaker.
        </li>
      </ul>
      <p>
        <strong>Protection coordination</strong> (also called grading or selectivity) ensures
        that only the circuit breaker closest to the fault trips, minimising the extent of the
        disruption. This is achieved by setting time delays and impedance zones so that relays
        closer to the fault trip before relays further away. If the local protection fails
        to clear the fault (breaker failure), the next relay upstream will trip after its
        backup delay, isolating a larger section. Protection coordination studies are performed
        using network simulation software, modelling fault currents at multiple locations under
        various network configurations (e.g., with one substation out of service for
        maintenance).
      </p>

      <h3>Power Supply Simulation and Modelling</h3>
      <p>
        Before any new electrification scheme is built — and when changes to the timetable or
        rolling stock fleet are planned — detailed <strong>power supply simulation</strong> is
        performed to verify that the system can deliver adequate voltage and current to every
        train under all operating conditions. Simulation involves:
      </p>
      <ul>
        <li>
          <strong>Multi-train simulation:</strong> Models every train on the network
          simultaneously, calculating its position, speed, and power demand at each time step
          (typically 1-second intervals). The timetable defines the starting conditions; the
          simulation applies the train's traction characteristics, the gradient profile, speed
          limits, and signalling constraints to compute the power drawn or regenerated at each
          moment.
        </li>
        <li>
          <strong>Electrical network model:</strong> The catenary, feeders, rails, auto-transformers,
          and substations are modelled as an electrical network with impedances, voltage sources,
          and load nodes. At each time step, the train power demands are applied as loads, and
          the network equations are solved to calculate voltage at every point, current in
          every conductor, and power flow through every transformer and circuit breaker.
        </li>
        <li>
          <strong>Worst-case scenarios:</strong> Simulation is run for the peak timetable
          (maximum number of trains), degraded conditions (one substation out of service),
          and abnormal operating conditions (delayed trains bunching together). The pass/fail
          criteria are: (a) railhead voltage must remain within EN 50163 limits at all times
          and locations; (b) transformer and rectifier ratings must not be exceeded; (c)
          conductor temperatures must remain within thermal limits.
        </li>
        <li>
          <strong>Software tools:</strong> Specialist power supply simulation packages are used,
          including products such as OpenTrack/OpenPowerNet (ETH Zurich origin), OSLO/TPSS
          (Network Rail/Atkins), and Siemens Sitras Sidytrac. These tools integrate the train
          dynamics, electrical network, and timetable into a unified simulation environment.
        </li>
      </ul>
      <p>
        Simulation outputs drive critical design decisions: the number and rating of substations,
        conductor cross-sections, auto-transformer locations, and the maximum number of trains
        that can operate simultaneously. They also inform operational decisions — if simulation
        shows that a particular timetable perturbation would cause voltage collapse in a section,
        operators can plan mitigation in advance.
      </p>

      <h3>Electrification Clearance Assessment</h3>
      <p>
        Before overhead line equipment can be installed on an existing route, every structure
        along the route — bridges, tunnels, footbridges, signal gantries, platform canopies,
        cable crossings — must be assessed for <strong>electrical clearance</strong>. This
        process is one of the most time-consuming and expensive aspects of an electrification
        programme:
      </p>
      <ul>
        <li>
          <strong>Minimum electrical clearance:</strong> For 25 kV AC, a minimum air gap of
          270 mm must be maintained between any live conductor and any earthed structure at all
          times, including under worst-case thermal expansion, wind deflection, and pantograph
          uplift. With the addition of a safety margin and installation tolerances, the
          practical design clearance is typically 300+ mm.
        </li>
        <li>
          <strong>Structure assessment:</strong> Every bridge, tunnel, and overline structure is
          surveyed (often using laser scanning / LiDAR to produce a 3D model) and assessed
          against the required clearance envelope. The envelope accounts for the contact wire
          at its maximum height (including uplift from the pantograph), the pantograph horn
          dimensions, and electrical clearance to the nearest earthed surface.
        </li>
        <li>
          <strong>Mitigation options:</strong> Where clearance is insufficient, options include:
          lowering the track (expensive, may affect drainage and level crossings); raising
          the bridge (often impractical for masonry arch bridges); lowering the contact wire
          height below the normal minimum (requires reduced speed through the restriction);
          installing a rigid conductor bar (reduces the required height); or reconstructing the
          bridge entirely.
        </li>
        <li>
          <strong>Gauge clearance envelopes:</strong> Standards such as Railway Group Standard
          GE/GN8573 (UK) define the electrical clearance profiles that must be maintained.
          The profiles are specific to the voltage system and whether the structure is earthed
          (bonded to the railway earth system) or not. An unearthed structure requires a
          larger clearance because it could develop a dangerous voltage during a flashover.
        </li>
      </ul>
      <p>
        On the UK's Great Western Main Line electrification, bridge clearance issues were one of
        the primary sources of cost escalation and delay. Many Victorian-era overbridges had
        insufficient headroom for standard OLE installation, requiring track lowering or bridge
        reconstruction at significant cost.
      </p>

      <h3>Stray Current and Corrosion</h3>
      <p>
        In DC systems, the return current flows through the running rails — but rails are not
        perfectly insulated from the ground. Some current inevitably leaks into the earth,
        seeking the lowest-resistance path back to the substation. This <strong>stray current</strong>
        can flow through buried metallic structures — gas pipes, water mains, building foundations,
        steel-reinforced concrete — causing <strong>electrolytic corrosion</strong> that progressively
        destroys them. The anodic areas (where current leaves the structure) experience metal
        dissolution; the cathodic areas (where current enters) experience hydrogen evolution.
      </p>
      <p>
        Mitigation strategies include:
      </p>
      <ul>
        <li>Improving rail-to-earth resistance (insulated rail fastenings, maintaining clean ballast)</li>
        <li>Installing drainage bonds to provide a controlled return path</li>
        <li>Cathodic protection of buried structures (imposing an external voltage to counter the stray current effect)</li>
        <li>Monitoring stray current levels continuously and triggering alarms when thresholds are exceeded</li>
        <li>Stray current collection mats in tunnel inverts</li>
      </ul>
      <p>
        AC systems largely avoid this problem because alternating current does not cause sustained
        electrolytic corrosion — the alternating polarity means the corrosive and depositing
        effects cancel out over each cycle.
      </p>

      <h3>Regenerative Braking</h3>
      <p>
        Modern electric trains use <strong>regenerative braking</strong>: when braking, the traction
        motors act as generators, converting kinetic energy back into electrical energy and feeding
        it into the supply network. On AC systems, this energy flows naturally back through the
        grid. On DC systems, however, the rectifier substations are one-directional — they cannot
        feed energy back to the grid. If no other train in the section is drawing power to absorb
        the regenerated energy, the line voltage rises dangerously. Mitigation options include:
      </p>
      <ul>
        <li><strong>Onboard resistor banks (rheostatic braking):</strong> Dissipate excess energy as heat when the line cannot accept it. Simple and reliable but wasteful.</li>
        <li><strong>Inverting substations:</strong> Bi-directional substations using thyristor inverters that can feed energy back to the AC grid. More expensive but recoup energy cost.</li>
        <li><strong>Lineside energy storage:</strong> Batteries, supercapacitors, or flywheels absorb regenerated energy and release it when the next train accelerates, smoothing demand peaks and capturing otherwise wasted energy.</li>
      </ul>
      <p>
        On a well-optimised metro system, regenerative braking can recover 25–40% of the
        traction energy, significantly reducing the railway's electricity consumption and
        carbon footprint. Timetable optimisation — synchronising one train's braking with
        another's acceleration — maximises the proportion of regenerated energy that is
        reused in real time.
      </p>

      <h3>Smart Grids, Energy Storage, and Future Technologies</h3>
      <p>
        The railway industry is increasingly adopting <strong>smart grid</strong> concepts:
        real-time monitoring and optimisation of power flow across the traction network, demand
        forecasting based on timetable data, and integration of trackside energy storage systems.
        <strong> Wayside energy storage</strong> — typically lithium-ion batteries or supercapacitors
        installed at substations — can capture regenerative braking energy, provide voltage support
        during peak demand, and reduce the peak power drawn from the national grid (lowering
        electricity costs through reduced Triad charges in the UK). Some railways are also
        exploring trackside solar panels on south-facing embankments and lineside wind generation
        to supplement the grid supply.
      </p>
      <p>
        Specific energy storage technologies being deployed or trialled include:
      </p>
      <ul>
        <li>
          <strong>Lithium-ion battery energy storage systems (BESS):</strong> Installed at
          substations or trackside, these systems store regenerative braking energy and release
          it during peak demand. A typical installation might be 1–5 MWh capacity with 1–3 MW
          peak power. Battery management systems optimise charge/discharge cycles to maximise
          battery life (targeting 10+ years). Network Rail has trialled BESS installations on
          the Merseyrail network to reduce peak demand charges.
        </li>
        <li>
          <strong>Supercapacitor (ultracapacitor) systems:</strong> Offer very high power density
          (able to absorb or deliver large currents for short durations) but lower energy density
          than batteries. Ideal for capturing short regenerative braking bursts on metro systems
          where trains brake and accelerate frequently. Cycle life is effectively unlimited
          (millions of cycles). Siemens Sitras SES and ABB EnergiStore are examples deployed on
          metro networks worldwide.
        </li>
        <li>
          <strong>Flywheel energy storage:</strong> A spinning rotor in a vacuum enclosure stores
          kinetic energy. Very fast response time, high cycle life, and no chemical degradation.
          However, standby losses (due to bearing friction and air resistance) make flywheels
          less efficient for long-duration storage. The Beacon Power flywheel system was trialled
          on the Los Angeles Metro.
        </li>
      </ul>
      <p>
        Looking further ahead, the concept of the <strong>digital railway power system</strong> is
        emerging: an integrated platform that combines real-time traction power SCADA data,
        train location and power demand data (from the traffic management system), weather
        forecasts (affecting demand through heating/cooling loads and wind resistance), energy
        market data (electricity pricing), and energy storage state-of-charge into a unified
        optimisation engine. This engine would dynamically manage the power network to minimise
        cost, carbon, and risk — adjusting substation loading, energy storage dispatch, and even
        providing recommendations to the traffic management system to adjust train speeds or
        ordering to reduce peak power demand.
      </p>
      <p>
        Another area of active development is <strong>vehicle-to-grid (V2G)</strong> capability
        for battery-electric trains. When BEMUs are parked at depots overnight, their batteries
        could potentially provide grid balancing services — absorbing excess renewable generation
        (e.g., overnight wind power) and feeding it back during morning peak. This requires
        bidirectional depot charging infrastructure, battery management systems that can manage
        the additional cycles, and commercial arrangements with the grid operator. While still
        largely theoretical for railways, the concept has been demonstrated for road EVs and is
        being studied by several railway administrations.
      </p>

      <Callout type="analogy">
        The traction power supply network is <strong>cloud infrastructure</strong>. Substations
        are availability zones — lose one, and traffic must be served by its neighbours. Section
        switches are circuit breakers in your network layer, allowing you to isolate a failed
        component without bringing down the whole system. SCADA is your monitoring dashboard
        (Grafana/Datadog) — it does not control the service directly but gives operators
        visibility to make informed decisions. Protection relays are automated incident
        response — they detect anomalies (faults) and take corrective action (trip breakers)
        within milliseconds, faster than any human could react. Regenerative braking is like a
        serverless function returning compute credits to the pool — elegant when there is demand
        to absorb them, but problematic when there is not, requiring a buffer (energy storage) to
        avoid overloading the system. Power supply simulation is load testing your infrastructure —
        you model every concurrent user (train), calculate the resource demands, and verify that
        your capacity (substation ratings, conductor thermal limits) can handle the peak load with
        margin to spare. Harmonic distortion is like noisy neighbours on a shared server —
        your workload's side effects can degrade the performance of other tenants on the same
        grid, and you must comply with the provider's acceptable use policy.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'Traction power creates EMC challenges for signalling — auto-transformer feeding reduces interference with track circuits.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'The running rails carry traction return current — rail bonds and insulated joints are critical for both track and power systems.' },
        { target: 'm5-l2', label: 'Overhead Line Design', desc: 'The OLE is the final link in the power supply chain from substation to train.' },
        { target: 'm6-l2', label: 'Traction & Braking', desc: 'Regenerative braking feeds energy back into the power supply system.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM5Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm5-l1': return <M5L1 goTo={goTo} />;
    case 'm5-l2': return <M5L2 goTo={goTo} />;
    case 'm5-l3': return <M5L3 goTo={goTo} />;
    default: return null;
  }
}
