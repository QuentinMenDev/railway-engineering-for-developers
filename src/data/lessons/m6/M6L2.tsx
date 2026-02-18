import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M6L2({ goTo }: LessonProps) {
  return (
    <>
      <h3>Electric Traction: The Modern Standard</h3>
      <p>
        The vast majority of new rolling stock uses <strong>AC induction motors</strong> (also
        called asynchronous motors), which have displaced the older DC motors that dominated for a
        century. An induction motor has no brushes, no commutator, and almost no wearing parts — it
        is mechanically simple and electrically robust. The speed of an induction motor is controlled
        by varying the frequency and voltage of the AC supply, which is the job of the
        <strong> IGBT inverter</strong> (Insulated-Gate Bipolar Transistor). Newer designs are
        adopting <strong>SiC (silicon carbide) MOSFETs</strong>, which switch faster, operate at
        higher temperatures, and reduce power losses by 20–30% compared to silicon IGBTs.
      </p>

      <h3>Permanent Magnet Synchronous Motors (PMSM)</h3>
      <p>
        <strong>Permanent magnet synchronous motors (PMSM)</strong> are emerging as the next
        generation, offering higher power density and efficiency than induction motors. The rotor
        contains rare-earth permanent magnets (neodymium-iron-boron) that create the magnetic
        field without external excitation, eliminating rotor losses. PMSMs are more compact and
        lighter for the same power output. Alstom's Coradia and some Bombardier/Alstom Talent
        variants use PMSMs. The main disadvantage is cost and dependence on rare-earth supply
        chains.
      </p>
      <p>
        The advantages of PMSM over asynchronous induction motors are significant and are driving
        adoption despite the higher procurement cost:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Parameter</th><th>Asynchronous Induction Motor</th><th>PMSM</th></tr>
          </thead>
          <tbody>
            <tr><td>Efficiency</td><td>90–94%</td><td>95–97%</td></tr>
            <tr><td>Power density (kW/kg)</td><td>1.0–1.5</td><td>2.0–3.0</td></tr>
            <tr><td>Rotor losses</td><td>Significant (induced currents)</td><td>Near zero (permanent magnets)</td></tr>
            <tr><td>Cooling requirements</td><td>Forced air or liquid cooling</td><td>Often self-cooled or simpler cooling</td></tr>
            <tr><td>Speed control</td><td>V/f control or vector control</td><td>Field-oriented control (FOC) mandatory</td></tr>
            <tr><td>Rare-earth dependency</td><td>None</td><td>High (neodymium, dysprosium)</td></tr>
            <tr><td>Fault mode risk</td><td>Relatively benign (can be de-excited)</td><td>Back-EMF persists at speed (cannot be de-excited), requires careful fault management</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        A critical safety consideration with PMSMs is that the permanent magnets generate a
        back-EMF (voltage) whenever the rotor turns, and this cannot be switched off. If a short
        circuit develops in the motor windings, the back-EMF will drive a fault current that
        generates heat and potentially fire. Induction motors can be de-excited (the field
        disappears when the inverter is disconnected), but PMSMs cannot. This requires additional
        fault management — for example, the ability to mechanically disconnect the motor from the
        axle (a clutch mechanism) or to short-circuit the motor windings in a controlled manner
        to limit fault current. Research into <strong>ferrite-based</strong> and
        <strong> magnet-free synchronous reluctance</strong> motors aims to reduce rare-earth
        dependency while retaining some efficiency advantages.
      </p>

      <h3>Power Electronics in Detail</h3>
      <p>
        The power electronics chain in a modern EMU looks like this: AC from the catenary is stepped
        down by the transformer, rectified to DC by a four-quadrant converter (which also handles
        regenerative braking and power factor correction), smoothed by a DC link capacitor, and
        then inverted back to variable-frequency AC by the IGBT inverter to feed the traction
        motors. The four-quadrant converter is "four-quadrant" because it can handle power flow
        in both directions and at both polarities — essential for regenerative braking. This
        chain also enables <strong>regenerative braking</strong>: when the motors are used as
        generators, kinetic energy is converted back to electrical energy and fed into the catenary
        for other trains to use — or dissipated in resistor banks if the catenary cannot accept it.
      </p>
      <p>
        The key semiconductor devices and their characteristics are:
      </p>
      <ul>
        <li>
          <strong>IGBT (Insulated-Gate Bipolar Transistor):</strong> The workhorse of modern
          traction inverters since the 1990s, replacing GTO thyristors. IGBTs combine the
          high-current capability of bipolar transistors with the voltage-controlled gate of
          MOSFETs. Traction-grade IGBTs handle 3.3 kV or 6.5 kV blocking voltage and 1,000–3,000 A
          continuous current. They switch at 500–2,000 Hz in traction applications. The switching
          frequency determines the quality of the AC waveform fed to the motors and the level
          of audible switching noise (the characteristic "whine" of modern EMUs is the inverter
          switching frequency and its harmonics). Higher switching frequencies produce smoother
          waveforms and less torque ripple but generate more switching losses (heat).
        </li>
        <li>
          <strong>SiC MOSFET (Silicon Carbide Metal-Oxide-Semiconductor Field-Effect Transistor):</strong>
          The emerging replacement for silicon IGBTs. SiC is a wide-bandgap semiconductor that
          can operate at higher temperatures (200 °C+ junction vs 150 °C for silicon), higher
          switching frequencies (5–20 kHz), and with significantly lower switching and conduction
          losses. A SiC-based traction inverter can be 30–50% smaller and 20–30% lighter than
          an equivalent silicon IGBT unit, while reducing energy consumption by 5–10% over a
          duty cycle. The Shinkansen N700S was one of the first high-speed trains to deploy SiC
          traction inverters in revenue service.
        </li>
      </ul>
      <p>
        <strong>Cooling</strong> is critical for power electronics. Traction inverters dissipate
        tens of kilowatts of heat in a compact volume. Cooling methods include forced-air cooling
        (air blown over heatsinks by fans — simple but bulky, and performance degrades in tunnels
        where ambient temperature rises), liquid cooling (water-glycol circuits with radiators —
        more effective and compact, dominant on modern high-power applications), and heat pipe
        cooling (passive two-phase systems used in some designs). The cooling system must maintain
        junction temperatures below the device rating across the full operating envelope, including
        worst-case scenarios like sustained full-power operation in a tunnel on a hot day with
        degraded cooling (fan failure or reduced airflow).
      </p>

      <h3>Diesel Traction: Three Transmission Types</h3>
      <p>
        Diesel traction comes in three transmission variants, though one dominates overwhelmingly:
      </p>
      <ul>
        <li>
          <strong>Diesel-electric:</strong> The diesel engine drives an alternator. The AC output
          is rectified and fed to traction motor inverters (or directly to DC motors in older
          designs). The engine and wheels are <em>never</em> mechanically coupled. This gives
          smooth, controllable power delivery across the full speed range and is by far the
          dominant type worldwide — from shunters to 4,000 hp mainline freight locomotives.
        </li>
        <li>
          <strong>Diesel-hydraulic:</strong> The engine drives a hydraulic torque converter, which
          transmits power to the wheels via a gearbox and cardan shafts. Lighter than diesel-electric
          for the same power, but more mechanically complex. Used historically in Germany (V200) and
          the UK (Western class). Now largely niche.
        </li>
        <li>
          <strong>Diesel-mechanical:</strong> A conventional gearbox connects the engine to the
          wheels, like a road vehicle. Only viable at low power (shunters, railcars). The torque
          multiplication limits make it impractical for heavy traction.
        </li>
      </ul>

      <h3>Braking Systems: Multiple Modes, One Goal</h3>
      <p>
        Railway braking is not a single system but a carefully orchestrated <strong>blend</strong> of
        multiple braking modes, each contributing at different speed ranges:
      </p>
      <ul>
        <li><strong>Friction braking (disc or tread):</strong> Brake pads pressed against disc rotors (modern) or directly against the wheel tread (older). The fundamental braking mode, effective at all speeds. Generates heat and wear.</li>
        <li><strong>Dynamic/regenerative braking:</strong> Traction motors run as generators, converting kinetic energy to electrical energy. Dominant at higher speeds where it is most efficient. Fades at low speed, so friction brakes must take over.</li>
        <li><strong>Magnetic track brakes:</strong> Electromagnets lowered onto the rail head, creating friction independent of wheel-rail adhesion. Used for emergency braking on high-speed trains (ICE, TGV) and trams.</li>
        <li><strong>Eddy current brakes:</strong> Magnets induce eddy currents in the rail, creating a retarding force without physical contact. Non-wearing but heats the rail. Used on some high-speed trains.</li>
      </ul>

      <h3>The Westinghouse Principle: Fail-Safe by Design</h3>
      <div className="highlight-box">
        <p>
          The <strong>continuous automatic air brake</strong>, invented by George Westinghouse in 1869,
          is one of the most elegant safety designs in all engineering. A brake pipe runs the entire
          length of the train, charged with compressed air (typically 5 bar). This air pressure
          <em>holds the brakes off</em>. When the driver (or any fault) reduces brake pipe pressure,
          a triple valve on each vehicle detects the drop and applies the brakes from a local
          reservoir. If the train separates, the brake pipe breaks, pressure drops to zero, and every
          vehicle brakes automatically. The default state is <strong>brakes on</strong>. The system
          must be actively maintained in the "brakes off" state. This is fail-safe by physics.
        </p>
      </div>

      <h3>Braking Distance Calculations</h3>
      <p>
        Braking distance is the fundamental constraint that determines safe signal spacing, approach
        speeds, and stopping margins. The calculation involves several components:
      </p>
      <ul>
        <li>
          <strong>Reaction/perception time:</strong> The time between the driver perceiving a stop
          signal (or receiving an automatic brake command) and the brake system beginning to
          apply force. For a driver-initiated brake application, this is typically 2–4 seconds.
          For an automatic system (TPWS, ETCS), it is the system reaction time — typically
          0.5–1.5 seconds depending on the technology.
        </li>
        <li>
          <strong>Brake build-up time:</strong> The time for brake cylinder pressure to reach
          full application after the command is given. In a long freight train with a
          conventional brake pipe, the propagation delay from the locomotive to the last wagon
          can be 10–20 seconds. In a modern EMU with electronically controlled brakes (EP
          braking), this is near-instantaneous (under 1 second).
        </li>
        <li>
          <strong>Deceleration phase:</strong> Governed by the available braking force (which
          depends on brake type, adhesion conditions, and speed) and the train's mass. The basic
          relationship is: distance = v²/(2a), where v is speed and a is deceleration. But the
          deceleration is not constant — regenerative braking fades at low speed, adhesion varies,
          and gradient affects the net force.
        </li>
      </ul>
      <p>
        For a typical modern passenger EMU travelling at 160 km/h (44.4 m/s) with a full-service
        deceleration of 0.9 m/s², the deceleration distance alone is approximately 1,100 metres.
        Adding reaction time, brake build-up, and safety margins, the total stopping distance from
        full speed might be 1,400–1,600 metres. Emergency braking (higher deceleration, typically
        1.0–1.3 m/s²) reduces the distance but at the cost of passenger comfort and increased
        wheel flat risk. For high-speed trains at 300 km/h, emergency braking distances can exceed
        3,000 metres — which is why high-speed lines require in-cab signalling (ETCS Level 2) with
        continuous supervision rather than lineside signals that might not be visible at such
        distances.
      </p>

      <Callout type="info" label="Key Calculation">
        The simplified braking distance formula on level track is: d = (v² / 2a) + (v × t), where
        d is stopping distance (m), v is initial speed (m/s), a is deceleration (m/s²), and t is
        the combined reaction and build-up time (s). On a gradient, the effective deceleration
        becomes (a ± g × sin θ), where θ is the gradient angle. A 1% falling gradient (1 in 100)
        reduces effective deceleration by approximately 0.1 m/s², adding significantly to the
        stopping distance at high speed.
      </Callout>

      <h3>Vehicle Dynamics: Hunting Oscillation</h3>
      <p>
        At speed, railway vehicles can develop a lateral oscillation called <strong>hunting</strong>.
        This arises from the conical profile of the wheel tread: as a wheelset displaces laterally,
        the difference in rolling radius between the two wheels causes it to steer back, but
        momentum carries it past centre, triggering an oscillation. Below the <strong>critical
        speed</strong>, the oscillation is damped and stable. Above it, the oscillation grows
        and can become violent — a severe safety risk. The critical speed depends on the cone angle
        (conicity), bogie design, and damping. <strong>Yaw dampers</strong> — hydraulic dampers
        resisting rotational movement of the bogie — are the primary means of raising the critical
        speed and ensuring stability at operating speeds.
      </p>

      <h3>Suspension: Two Stages</h3>
      <p>
        Railway vehicles use a <strong>two-stage suspension</strong> system:
      </p>
      <ul>
        <li><strong>Primary suspension:</strong> Between the axle (wheelset) and the bogie frame. Stiff springs (coil or rubber-chevron) and viscous dampers handling high-frequency inputs from rail irregularities. Must be stiff enough to maintain wheel-rail contact geometry while soft enough to isolate the bogie frame from the worst impacts. Rubber-chevron springs (V-shaped rubber elements bonded to metal plates) provide both spring and damping functions in a compact, maintenance-free unit.</li>
        <li><strong>Secondary suspension:</strong> Between the bogie frame and the carbody. Soft springs (air springs are now standard on passenger stock) providing ride comfort by isolating the body from bogie movements. Air springs consist of a rubber bellows filled with compressed air, whose stiffness varies with pressure. This allows <strong>automatic levelling</strong> — the air pressure is adjusted by a levelling valve to maintain constant floor height regardless of passenger load (an empty train and a crush-loaded train sit at the same height). Lateral and vertical dampers complement the air springs.</li>
      </ul>

      <h3>Active Suspension and Tilting Systems</h3>
      <p>
        Some high-speed trains use <strong>active tilting</strong> (e.g. Pendolino, Alstom Avelia)
        where the carbody is tilted into curves by hydraulic or electromechanical actuators,
        allowing higher curve speeds without exceeding passenger comfort limits. The tilt system
        senses lateral acceleration via accelerometers and gyroscopes and tilts the body up to
        8 degrees to compensate. Tilting trains can run 25–40% faster through curves than
        non-tilting stock on the same track, making them attractive for upgrading winding
        conventional lines (like the UK's West Coast Main Line) without rebuilding the alignment.
      </p>
      <p>
        Beyond tilting, <strong>active lateral suspension</strong> systems use actuators (hydraulic
        or electromechanical) between the bogie and carbody to counteract lateral oscillations and
        improve ride quality. These systems measure lateral acceleration of the carbody and apply
        corrective forces through the actuators. The control loop operates at frequencies up to
        10–20 Hz, addressing the body's lateral and yaw modes. Active suspension can reduce lateral
        acceleration at the passenger level by 30–50% compared to passive suspension alone, enabling
        either higher speeds on existing track or improved comfort at current speeds. The Shinkansen
        N700 series uses active suspension as standard.
      </p>

      <h3>Ride Quality Measurement</h3>
      <p>
        Ride quality is quantified using standardised metrics that relate measured accelerations to
        human comfort perception:
      </p>
      <ul>
        <li>
          <strong>EN 12299 (Ride comfort):</strong> The European standard for measuring and
          evaluating ride quality. It defines the <strong>NMV (N_MV)</strong> index, calculated
          from weighted RMS accelerations in lateral (y) and vertical (z) directions measured
          on the vehicle floor. The weighting filters model human sensitivity to vibration at
          different frequencies. An NMV value below 1.5 is considered "very comfortable", 1.5–2.5
          is "comfortable", 2.5–3.5 is "acceptable", and above 4.5 is "very uncomfortable".
          Measurements are taken over track sections of defined length and averaged.
        </li>
        <li>
          <strong>Sperling ride index (Wz):</strong> An older German standard still widely used,
          particularly in Asia. The Wz index uses a different frequency weighting but yields
          a similar comfort scale: Wz below 2.5 is "good", 2.5–3.0 is "acceptable for operation",
          and above 3.0 indicates a problem requiring investigation. The Sperling method evaluates
          lateral (Wz_y) and vertical (Wz_z) directions separately.
        </li>
      </ul>
      <p>
        Track recording vehicles and instrumented revenue trains continuously monitor ride quality
        across the network. Deterioration in ride indices triggers track maintenance (tamping,
        grinding) or vehicle investigation (suspension fault, flat wheel). The linkage between
        vehicle dynamics, track condition, and ride quality is one of the most data-intensive areas
        of modern railway engineering, and a prime candidate for machine learning approaches.
      </p>

      <h3>Tractive Effort and Power</h3>
      <p>
        A vehicle's performance is characterised by its <strong>tractive effort curve</strong> —
        a graph of force at the wheel rim against speed. At low speed, tractive effort is limited
        by <strong>adhesion</strong> (the maximum force the wheel-rail contact can transmit without
        slipping, typically 25–35% of axle weight). As speed increases, the motor reaches its
        maximum power and tractive effort falls as 1/V (since Power = Force × Velocity). At
        higher speeds, the motor reaches its maximum voltage and enters a "field weakening" or
        "constant power" regime where both torque and current decrease. The intersection of the
        tractive effort curve with the resistance curve (aerodynamic drag + rolling resistance +
        gradient) determines the vehicle's <strong>balancing speed</strong> — the maximum speed
        on level track.
      </p>

      <h3>Adhesion Management</h3>
      <p>
        Maximising the tiny adhesion budget between steel wheel and steel rail is a constant battle:
      </p>
      <ul>
        <li><strong>Wheel Slide Protection (WSP):</strong> The railway equivalent of ABS. Sensors monitor wheel speed; if a wheel decelerates too rapidly (indicating a slide), brake pressure to that axle is momentarily reduced to allow the wheel to recover grip. Essential for safe braking on contaminated rails.</li>
        <li><strong>Traction control:</strong> Monitors wheel speed during acceleration. If a wheel spins faster than adjacent wheels (indicating loss of adhesion), torque to that motor is reduced until grip is restored.</li>
        <li><strong>Sanders:</strong> Nozzles that deposit sand directly onto the rail ahead of the wheel to increase the friction coefficient. Activated automatically by WSP/traction control or manually by the driver. Critical in autumn leaf-fall conditions.</li>
      </ul>

      <h3>Sanding Systems in Detail</h3>
      <p>
        Sanding is deceptively simple in concept but operationally critical. Modern sanding
        systems are far more sophisticated than the gravity-fed sandboxes of steam-era locomotives:
      </p>
      <ul>
        <li>
          <strong>Pneumatic sanding:</strong> Compressed air feeds sand from a hopper through
          nozzles positioned precisely 20–30 mm above the rail, just ahead of the leading wheels.
          Sand delivery rate is typically 0.4–2.0 kg/minute per nozzle, depending on conditions.
          Too little sand and adhesion is not restored; too much and it can clog point mechanisms
          and insulate track circuits (preventing train detection — a safety-critical failure).
        </li>
        <li>
          <strong>Automatic activation:</strong> Modern vehicles activate sanding automatically
          under WSP intervention, during emergency braking, and when traction control detects
          wheelslip. Some systems use predictive activation based on GPS location (known
          low-adhesion locations) or railhead condition sensors.
        </li>
        <li>
          <strong>Sand capacity management:</strong> A typical EMU carries 40–80 kg of sand per
          vehicle. In severe autumn conditions (leaf mulch contamination), sand consumption can
          deplete supplies within a single shift, requiring mid-day depot visits for refilling —
          a serious operational disruption. Sand hoppers must be heated to prevent moisture
          ingress and clumping, which would block the delivery system precisely when it is
          most needed.
        </li>
        <li>
          <strong>Rail-head treatment trains (RHTT):</strong> During the autumn leaf-fall season,
          dedicated trains spray high-pressure water jets (and sometimes Sandite — a gel
          containing sand and steel particles) onto the railhead to remove the compressed leaf
          mulch layer that causes catastrophic adhesion loss. This contamination layer (sometimes
          called "black ice on rails") can reduce the friction coefficient from a normal 0.3–0.4
          down to 0.01–0.05, making braking almost impossible.
        </li>
      </ul>

      <h3>Wheel Flats: Development, Detection, and Consequences</h3>
      <p>
        A <strong>wheel flat</strong> develops when a wheel locks during braking and slides along
        the rail surface. The sliding contact grinds a flat spot into the circular tread. The
        severity depends on slide duration and speed — a brief slide at low speed might produce a
        minor flat of a few millimetres, while a prolonged slide at high speed can create a flat
        50–80 mm long and several millimetres deep. A flat wheel produces a periodic impact each
        revolution, with impact force proportional to the flat size, vehicle speed, and unsprung
        mass. These impacts:
      </p>
      <ul>
        <li>Damage the rail (creating dents that initiate rolling contact fatigue)</li>
        <li>Accelerate bearing degradation</li>
        <li>Cause unacceptable noise and vibration for passengers</li>
        <li>Can fracture the wheel if the flat is severe enough (thermal damage and stress concentration)</li>
      </ul>
      <p>
        <strong>Wheel Impact Load Detectors (WILD)</strong> are trackside monitoring systems that
        measure the dynamic vertical force each wheel applies to the rail as a train passes.
        Strain gauges or fibre-optic sensors mounted on the rail measure the force signature.
        A healthy wheel produces a smooth, sinusoidal force variation; a flat wheel produces a
        sharp impact spike once per revolution. WILD systems are deployed at strategic locations
        on the network and automatically flag vehicles with impact forces exceeding thresholds
        (typically three levels: alert, caution, and stop — requiring immediate withdrawal from
        service). Network Rail's GOTCHA system and the North American WILD network are examples.
        Real-time data feeds from WILD stations enable fleet managers to schedule re-profiling
        before a flat reaches the mandatory withdrawal limit.
      </p>

      <h3>Pantograph-Catenary Dynamic Interaction</h3>
      <p>
        For electric traction, the interface between the vehicle's <strong>pantograph</strong> and
        the overhead <strong>catenary</strong> (contact wire) is a critical dynamic system. The
        pantograph must maintain continuous electrical contact with the contact wire while
        accommodating height variations, wire sag between supports, changes at section breaks,
        and aerodynamic forces — all at speeds up to 300+ km/h. From the vehicle perspective:
      </p>
      <ul>
        <li>
          <strong>Contact force:</strong> The pantograph must apply an upward static force
          (typically 70–120 N) plus a dynamic component to follow the wire. Too little force and
          the pantograph lifts off, causing arcing that erodes both the carbon contact strip and
          the copper wire. Too much force and the wire is pushed up excessively, causing wave
          propagation in the catenary that can lead to dewirement (the wire being displaced from
          the pantograph head — a catastrophic event that can bring down the entire catenary span).
        </li>
        <li>
          <strong>Aerodynamic effects:</strong> At high speed, aerodynamic forces on the pantograph
          (both lift and drag) become significant and speed-dependent. The pantograph must be
          designed so that the aerodynamic uplift supplements the static force without exceeding
          the maximum contact force limit. Some high-speed pantographs use active control (actuators
          that adjust contact force based on real-time measurement) to maintain optimal contact
          across the speed range.
        </li>
        <li>
          <strong>Multiple pantograph operation:</strong> When two or more pantographs are raised
          on the same catenary span (as when two units are coupled), the trailing pantograph
          encounters the wave disturbance created by the leading pantograph. This "wake effect"
          limits the number of pantographs that can be raised simultaneously and may require
          reduced speed or increased pantograph spacing. EN 50367 specifies requirements for
          pantograph-catenary interaction performance.
        </li>
      </ul>

      <Callout type="analogy">
        The braking system is a <strong>consensus algorithm</strong>. Multiple independent braking
        modes (friction, dynamic, magnetic) must agree on the correct deceleration and blend their
        contributions smoothly. If regenerative braking fails (the catenary cannot accept power),
        friction brakes compensate automatically — like a node failure in a Raft cluster where
        remaining nodes maintain consensus. The Westinghouse brake is the ultimate fail-safe:
        its default state is "brakes on," like a dead man's switch or a watchdog timer. If the
        supervising process (brake pipe pressure) stops, the system reverts to the safe state
        without any active intervention. The power electronics chain is a <strong>data pipeline</strong>:
        raw power (input) passes through a series of transformations (transformer, rectifier,
        DC link, inverter) — each stage reshaping the signal for the next consumer, just like an
        ETL pipeline transforming raw data into the format required by downstream services. SiC
        MOSFETs replacing silicon IGBTs is like upgrading from HDD to SSD — the interface is the
        same, but throughput increases while energy consumption drops.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l1', label: 'Why Railways Work', desc: 'Adhesion fundamentals that constrain everything in this lesson.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'Cant and curvature create the forces that dynamics must handle.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Braking curves are the foundation of signal spacing.' },
        { target: 'm5-l1', label: 'Electrification Principles', desc: 'Catenary design determines pantograph interaction constraints.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the Westinghouse principle?', options: ['Brakes are applied by electrically energising the brake calipers', 'The continuous brake pipe is pressurised to hold brakes off; loss of pressure applies brakes automatically (fail-safe)', 'Each vehicle has an independent braking system with no train-wide connection', 'Braking force is proportional to train speed'], correct: 1, explanation: 'The Westinghouse automatic air brake keeps the brake pipe pressurised to hold brakes off. Any loss of pressure (including a train separation) automatically applies brakes throughout the train — an inherently fail-safe design.' },
  { text: 'What causes hunting oscillation in railway vehicles?', options: ['Uneven ballast beneath the track', 'The conical wheel profile creates lateral instability at high speed as the wheelset oscillates between the rails', 'Crosswinds push the train side to side', 'Worn brake pads cause vibration'], correct: 1, explanation: 'Conical wheel treads provide self-centring at low speed, but above a critical speed the wheelset oscillates laterally with increasing amplitude. Suspension damping and bogie design are critical to control this.' },
  { text: 'What is the purpose of wheel slide protection (WSP)?', options: ['To prevent wheels from spinning during acceleration', 'To prevent wheel lock-up during braking (like ABS in cars), maintaining adhesion and preventing flat spots on wheels', 'To protect the rail surface from excessive wear', 'To reduce noise during braking'], correct: 1, explanation: 'WSP modulates braking force to prevent wheels locking and sliding on the rail. Locked wheels lose adhesion and develop damaging flat spots that require expensive wheel re-profiling.' },
  { text: 'What is the difference between primary and secondary suspension?', options: ['Primary is for passenger vehicles; secondary is for freight', 'Primary (axle-to-bogie) handles high-frequency vibrations; secondary (bogie-to-body) provides ride comfort for low-frequency movements', 'Primary uses springs; secondary uses dampers', 'Primary is active; secondary is passive'], correct: 1, explanation: 'Primary suspension sits between wheelset and bogie frame, absorbing high-frequency track irregularities. Secondary suspension sits between bogie and vehicle body, filtering low-frequency movements for passenger comfort.' },
];
