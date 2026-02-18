import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M5L1({ goTo }) {
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

export const quiz = [
  { text: 'Why is 25 kV AC preferred for mainline electrification?', options: ['It is safer than DC systems', 'Higher voltage means lower current, allowing smaller conductors and wider substation spacing (40–80 km vs 3–5 km for DC)', 'AC motors are cheaper to manufacture', 'It was the first system invented'], correct: 1, explanation: 'Higher voltage means lower current for the same power. This allows lighter overhead wires, smaller conductors, and substations spaced 40–80 km apart instead of every 3–5 km for DC systems.' },
  { text: 'What voltage does a typical third rail system use?', options: ['25 kV AC', '1,500 V DC', '750 V DC', '400 V AC'], correct: 2, explanation: '750 V DC is the standard third rail voltage used on systems like the UK Southern Region and many metro networks.' },
  { text: 'What is the main disadvantage of DC traction systems?', options: ['DC motors are unreliable', 'Higher current requires closely-spaced substations (every 3–5 km) and thicker conductors', 'DC cannot power modern trains', 'DC systems are incompatible with signalling'], correct: 1, explanation: 'Lower voltage means higher current for the same power, requiring thicker (heavier, more expensive) conductors and substations every 3–5 km to limit voltage drop.' },
  { text: 'Why is the rail used as the traction return conductor?', options: ['It provides better electrical insulation', 'Regulations require it for safety reasons', 'It is already a continuous steel conductor running the full length of the route, avoiding a separate return wire', 'It reduces electromagnetic interference'], correct: 2, explanation: 'The running rail is already a continuous steel conductor along the entire route. Using it as the return path avoids the cost and complexity of installing a separate return wire.' },
];
