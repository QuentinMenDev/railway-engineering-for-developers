import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M5L3({ goTo }) {
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

export const quiz = [
  { text: 'What is the typical substation spacing for 25 kV AC systems?', options: ['1–3 km', '5–10 km', '15–25 km', '40–80 km'], correct: 3, explanation: 'The high voltage of 25 kV AC allows substations to be spaced 40–80 km apart, compared to every 3–5 km for DC systems, significantly reducing infrastructure cost.' },
  { text: 'What does an auto-transformer feeding system do?', options: ['Automatically adjusts voltage for different train types', 'Reduces electromagnetic interference with telecoms and signalling by balancing the current flow through a return conductor', 'Converts AC to DC for third rail sections', 'Provides backup power during substation outages'], correct: 1, explanation: 'Auto-transformers split the supply into +25 kV and −25 kV relative to the rail, balancing current flow through a dedicated return conductor. This greatly reduces electromagnetic interference with nearby telecoms and signalling cables.' },
  { text: 'What is the main risk of stray current in DC systems?', options: ['Interference with train radio communications', 'Electrolytic corrosion of buried metallic structures (pipes, cable sheaths, reinforcement)', 'Overheating of the running rails', 'Damage to overhead line equipment'], correct: 1, explanation: 'In DC systems, return current can leak from the rails into the ground and flow through buried metallic structures. This causes electrolytic corrosion that damages water pipes, gas mains, cable sheaths, and reinforced concrete.' },
  { text: 'What happens during regenerative braking?', options: ['The brakes generate heat that warms the carriages', 'The train’s motors act as generators, converting kinetic energy to electrical energy fed back to the supply', 'Compressed air is recovered and stored for later use', 'The track magnets slow the train electromagnetically'], correct: 1, explanation: 'During regenerative braking, traction motors run as generators. The kinetic energy of the moving train is converted to electrical energy and fed back into the supply network (or consumed by other nearby trains).' },
];
