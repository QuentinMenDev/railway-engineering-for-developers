import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M6L3({ goTo }) {
  return (
    <>
      <h3>The Wheel Profile: Why Cones Steer</h3>
      <p>
        A railway wheel is not cylindrical — its tread has a <strong>conical taper</strong>,
        typically between 1:20 and 1:40 (the tread slopes inward by 1 mm for every 20-40 mm of
        width). This simple geometric fact is what allows railway vehicles to steer without any
        steering mechanism. When a wheelset shifts laterally, the wheel on the side towards which
        it has shifted rolls on a larger diameter, while the opposite wheel rolls on a smaller
        diameter. Since both wheels are rigidly connected by the axle and rotate at the same angular
        velocity, the difference in rolling radius causes the wheelset to naturally steer back
        towards the centre — a self-centering behaviour called <strong>kinematic steering</strong>.
      </p>
      <p>
        The key parts of the wheel profile are:
      </p>
      <ul>
        <li><strong>Tread:</strong> The conical running surface that contacts the rail head. Carries the vertical load.</li>
        <li><strong>Flange:</strong> The raised inner edge that acts as a safety net, preventing derailment when the conical self-steering is insufficient (tight curves, switches). The flange should <em>not</em> contact the rail in normal running — it only engages on sharp curves and through turnouts.</li>
        <li><strong>Flange root:</strong> The transition zone between tread and flange. A critical area for stress concentration and wear.</li>
      </ul>

      <h3>Wheel Profile Optimisation</h3>
      <p>
        The choice of wheel profile has profound effects on vehicle dynamics, wear rates, noise,
        and curving behaviour. Different profiles represent different engineering trade-offs:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Profile</th><th>Origin</th><th>Equivalent Conicity</th><th>Characteristics</th></tr>
          </thead>
          <tbody>
            <tr><td>S1002</td><td>UIC/Europe standard</td><td>Moderate (0.10–0.20 on 60E1 rail)</td><td>The "universal" European freight and passenger profile. Good all-round performance but relatively high conicity can cause hunting on high-speed stock. Widely used as a reference profile for standardisation.</td></tr>
            <tr><td>P8</td><td>UK (BR/RSSB)</td><td>Low-moderate (0.05–0.15 on CEN60E1)</td><td>Designed for UK conditions. Lower conicity than S1002 for better high-speed stability. Narrower flange tip to improve switch negotiation. The default profile for UK passenger stock.</td></tr>
            <tr><td>P12</td><td>UK (freight)</td><td>Higher than P8</td><td>Designed for UK freight wagons. Thicker flange to accommodate higher wear rates and less frequent re-profiling on freight stock.</td></tr>
            <tr><td>UIC-ORE S1002</td><td>UIC (worn)</td><td>Variable</td><td>A "pre-worn" variant designed to reach a stable worn shape quickly, reducing the initial period of rapid profile change after re-profiling.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Equivalent conicity (λ)</strong> is the key parameter characterising the wheel-rail
        profile combination. It represents the effective taper of the contact geometry and determines
        the wavelength of the kinematic oscillation (sinusoidal movement) and the critical speed
        for hunting. Conicity depends on both the wheel and rail profiles and changes as they wear.
        EN 14363 specifies conicity ranges for vehicle acceptance testing: if conicity falls outside
        the acceptable range for the vehicle type, either the wheel or rail profile must be changed.
        Too low conicity means poor self-centering (the vehicle "wanders" laterally); too high
        conicity reduces the critical speed and may cause hunting within the operating speed range.
      </p>

      <h3>The Rail Profile: Matching Partner</h3>
      <p>
        The standard European rail profile is <strong>60E1</strong> (formerly UIC60), weighing
        60 kg per metre. The rail head has a carefully designed radius (typically 300 mm crown
        radius) that must be compatible with the wheel profile to ensure the correct contact
        geometry. The <strong>gauge face</strong> — the inner face of the rail head — is where
        the wheel flange makes contact on curves. The interaction between wheel profile and rail
        profile determines contact stresses, wear patterns, noise generation, and vehicle dynamic
        behaviour.
      </p>

      <h3>The Contact Patch: Hertzian Contact Theory</h3>
      <div className="highlight-box">
        <p>
          The contact area between a single wheel and the rail is approximately <strong>1 cm²</strong>
          — roughly the size of a postage stamp. A typical passenger vehicle has 8 wheels, meaning
          the entire weight of a 45-tonne vehicle (carrying 200 passengers) is transmitted to the
          rails through eight postage-stamp-sized patches. A fully loaded freight wagon at 25 tonnes
          per axle concentrates over 12 tonnes on each of these tiny areas, generating contact
          stresses exceeding <strong>1,000 MPa</strong> — comparable to the yield strength of the
          steel itself. This extreme stress concentration drives wear, fatigue, and noise.
        </p>
      </div>
      <p>
        The contact mechanics are described by <strong>Hertz theory</strong> (for the normal
        contact — the vertical force and contact area shape) and <strong>Kalker's theory</strong>
        (for the tangential contact — creep forces that provide traction, braking, and steering).
        The contact patch is elliptical, typically 10–15 mm long and 8–12 mm wide. The pressure
        distribution is parabolic, peaking at the centre. The exact size and shape depend on
        the profiles of both wheel and rail, the normal load, and the material properties.
        Computer programs like CONTACT (Kalker's program) and FASTSIM are used to calculate
        contact forces for vehicle dynamics simulation.
      </p>
      <p>
        <strong>Hertzian contact</strong> in more detail: Heinrich Hertz's 1882 theory describes
        the elastic contact between two curved bodies. For the wheel-rail case, the two "bodies"
        are the wheel tread (with its transverse and longitudinal radii of curvature) and the rail
        head (with its crown radius and effectively infinite longitudinal radius). The theory
        predicts:
      </p>
      <ul>
        <li>The contact patch is an ellipse with semi-axes a (in the rolling direction) and b (transverse).</li>
        <li>The patch dimensions scale as the cube root of the normal force: doubling the force increases the contact area by only 26% (2^(1/3) ≈ 1.26), so the peak pressure increases significantly with load.</li>
        <li>The maximum contact pressure (at the centre of the ellipse) is p₀ = (3N)/(2πab), where N is the normal force.</li>
        <li>The subsurface stress field has a maximum shear stress at a depth of approximately 0.5b below the surface — this is where fatigue cracks typically initiate.</li>
      </ul>
      <p>
        <strong>Kalker's theory</strong> extends Hertz to handle the tangential (shear) forces
        that arise from "creep" — the tiny relative sliding between wheel and rail surfaces that
        is essential for traction, braking, and curving. Creep is not slipping in the conventional
        sense; it is an elastic phenomenon where part of the contact patch adheres while the rest
        slides. The ratio of tangential force to normal force increases with creep (the relative
        velocity difference divided by the rolling velocity) up to a saturation point, beyond which
        gross sliding occurs. Kalker's CONTACT program provides an exact numerical solution; his
        simplified algorithm FASTSIM (used in most real-time vehicle dynamics simulations) approximates
        the solution with high accuracy at a fraction of the computational cost.
      </p>

      <h3>Wear Patterns and Maintenance</h3>
      <p>
        The relentless contact between wheel and rail produces characteristic wear patterns:
      </p>
      <ul>
        <li><strong>Hollow wear (wheels):</strong> The tread wears into a concave profile over time, changing the contact geometry, worsening dynamic behaviour, and eventually requiring re-profiling. Wheel lathes cut the tread back to the design profile — a costly but essential maintenance activity.</li>
        <li><strong>Gauge-corner wear (rails):</strong> On curves, the wheel flange contacts the gauge corner of the high rail, wearing it away and potentially creating a dangerously thin rail head. Rail grinding restores the profile and removes surface-initiated fatigue cracks.</li>
        <li><strong>Rolling Contact Fatigue (RCF):</strong> Repeated high stresses cause subsurface cracks (head checking, squats, shells) that can propagate to rail breaks if not managed. A balance must be struck between wear (which removes cracked material) and fatigue (which creates it).</li>
      </ul>

      <h3>Rail Grinding Strategies</h3>
      <p>
        Rail grinding is one of the most important maintenance activities for managing the wheel-rail
        interface. Specialised grinding trains carry rotating grinding stones that reprofile the
        rail head to a target cross-section. There are fundamentally different strategies:
      </p>
      <ul>
        <li>
          <strong>Preventive grinding:</strong> Regular, light grinding passes (removing 0.1–0.3 mm
          per pass) at relatively frequent intervals (annually or bi-annually) to maintain the
          rail profile close to the design shape and to remove surface-initiated fatigue cracks
          before they propagate. This "little and often" approach is widely considered best
          practice because it keeps contact geometry optimal, controls rolling contact fatigue,
          and maximises rail life. The total metal removed over the rail's life is less than with
          corrective grinding, because the rail is never allowed to deteriorate to a point
          where heavy metal removal is needed.
        </li>
        <li>
          <strong>Corrective grinding:</strong> Heavy grinding (removing 0.5–2.0 mm per pass,
          multiple passes) to restore a severely worn or damaged rail profile. Required when
          preventive grinding has not been performed or when defects have developed. More metal
          is removed, more grinding passes are required (consuming more possessions and more
          grinding stone life), and the rail's total service life is reduced compared to a
          preventive regime.
        </li>
        <li>
          <strong>Asymmetric rail profiles:</strong> On curves, the high rail and low rail
          experience very different contact conditions. Modern grinding practice often specifies
          <strong>different target profiles</strong> for the high and low rails to optimise the
          contact geometry for curving. For example, the high rail may be ground with a wider
          gauge-face relief to reduce flange contact forces, while the low rail may receive a
          profile that steers the contact patch towards the centre of the rail head. This approach
          can reduce wear rates, noise, and RCF simultaneously but requires careful profile
          design and quality control during grinding.
        </li>
        <li>
          <strong>Acoustic grinding:</strong> A variant of preventive grinding specifically
          targeting the very short-wavelength roughness (10–100 mm) that is responsible for
          rolling noise. By smoothing the rail to a roughness level below −5 dB re 1 μm
          (measured as the roughness level spectrum to EN 15610), rolling noise can be reduced
          by 3–8 dB — a significant improvement given that 3 dB represents a halving of
          acoustic power.
        </li>
      </ul>

      <h3>Wheel and Rail Defect Types</h3>
      <p>
        Beyond general wear patterns, specific defect types require monitoring and intervention:
      </p>
      <ul>
        <li><strong>Wheel flats:</strong> Caused by wheel slide during braking — the locked wheel slides along the rail, grinding a flat spot. Creates a periodic impact noise and can damage the rail. Wheel Slide Protection (WSP) systems prevent most flats, but contaminated rails can still cause them. Wheel flats exceeding 40–60 mm in length (depending on the standard) require the vehicle to be taken out of service for re-profiling.</li>
        <li><strong>Head checking (gauge corner cracking):</strong> A family of fine surface cracks on the rail head, angled at 10–30° to the running direction. Caused by repeated shearing forces at the contact patch. If not removed by grinding, cracks can propagate downward and lead to rail breaks.</li>
        <li><strong>Squats:</strong> Dark depressions on the rail head with associated subsurface cracking. A form of rolling contact fatigue that develops where surface irregularities (dents, welds) create stress concentrations. Advanced squats can cause sudden rail breaks.</li>
        <li><strong>Corrugation:</strong> Periodic undulations of the rail surface (wavelength typically 30–80 mm for "short pitch" or 150–450 mm for "long pitch"). Causes excessive noise and vibration. Multiple mechanisms including differential wear, plastic flow, and dynamic instabilities. Removed by rail grinding.</li>
        <li><strong>Shelling:</strong> Subsurface fatigue cracking that causes pieces of the rail head to break away, leaving a rough, pitted surface. Occurs in the gauge corner of high rails on curves.</li>
      </ul>

      <h3>Flange Climb Derailment: The Nadal Criterion</h3>
      <p>
        One of the most critical safety concerns at the wheel-rail interface is <strong>flange
        climb derailment</strong> — a mechanism where the wheel flange rides up and over the rail
        head, causing the vehicle to leave the track. This typically occurs on sharp curves,
        particularly through turnouts and crossings, when lateral forces are high and vertical
        load is low.
      </p>
      <p>
        The <strong>Nadal criterion</strong> (published by M.J. Nadal in 1908) establishes the
        limiting ratio of lateral force (Y) to vertical force (Q) at the wheel-rail contact
        beyond which flange climb can occur:
      </p>
      <div className="highlight-box">
        <p>
          <strong>Y/Q ≤ tan(δ − arctan μ) / (1 + μ tan δ)</strong><br/>
          where δ is the flange angle (typically 68–72° for modern profiles) and μ is the friction
          coefficient at the flange-rail contact (typically 0.3–0.5). For typical values, the
          critical Y/Q ratio is approximately <strong>0.8</strong>. If Y/Q exceeds this limit for
          a sufficient duration and distance, the flange will climb over the rail.
        </p>
      </div>
      <p>
        The Nadal criterion is conservative because it assumes steady-state conditions, whereas
        real flange climb requires the high Y/Q ratio to be sustained over a sufficient distance
        (the "climb distance" — typically at least 2 metres). Nonetheless, it remains the
        fundamental safety criterion used in vehicle acceptance testing (EN 14363) and operational
        monitoring. Factors that increase the risk of flange climb include:
      </p>
      <ul>
        <li>Low vertical wheel load (unloaded or lightly loaded vehicle, or dynamic load reduction on uneven track)</li>
        <li>High lateral force (tight curves, misaligned track, switch negotiation)</li>
        <li>High friction coefficient at the flange contact (dry conditions, contaminated rail)</li>
        <li>Worn wheel profiles with low flange angle</li>
        <li>Stiff bogie designs with poor curving capability</li>
      </ul>
      <p>
        Mitigation strategies include maintaining adequate flange angles through re-profiling,
        gauge-face lubrication to reduce flange friction, track geometry maintenance to limit
        lateral forces, and bogie designs with radial steering (allowing the wheelsets to adopt
        a more nearly radial position in curves, reducing the angle of attack and hence the
        lateral flange force).
      </p>

      <h3>Noise: The Unavoidable Consequence</h3>
      <p>
        The wheel-rail interface is the dominant source of railway noise:
      </p>
      <ul>
        <li><strong>Rolling noise:</strong> Generated by surface roughness on both wheel and rail. The rougher the surfaces, the louder the noise. Acoustic rail grinding smooths the rail to reduce roughness and can cut rolling noise by 3-5 dB.</li>
        <li><strong>Curve squeal:</strong> A high-pitched tonal noise caused by the wheel flange sliding against the gauge face of the rail on tight curves. Mitigation includes friction modifiers (top-of-rail lubrication), wheel dampers, and flange lubrication.</li>
        <li><strong>Impact noise:</strong> Generated at rail joints, switches, and crossings where the wheel encounters a discontinuity. Swing-nose crossings and continuously welded rail reduce this significantly.</li>
      </ul>
      <p>
        Additional mitigation measures include <strong>rail dampers</strong> (tuned absorbers
        clamped to the rail web that reduce radiation from the rail), <strong>wheel dampers</strong>
        (constrained-layer damping rings fitted to the wheel web), and <strong>noise barriers</strong>
        alongside the track.
      </p>

      <h3>EU Noise TSI and Freight Wagon Retrofit</h3>
      <p>
        The <strong>EU Noise TSI</strong> (Technical Specification for Interoperability relating to
        noise) sets mandatory pass-by noise limits for new rolling stock, measured at 25 metres from
        the track centreline at a reference speed. For freight wagons, the dominant noise mitigation
        measure has been the replacement of <strong>cast-iron brake blocks</strong> with
        <strong> composite (K-block or LL-block) brake blocks</strong>. Cast-iron blocks roughen the
        wheel tread through wear, creating a corrugated surface that radiates significantly more
        noise. Composite blocks produce a smooth tread, reducing rolling noise by approximately
        8–10 dB — a dramatic reduction (10 dB represents a halving of perceived loudness).
      </p>
      <p>
        The retrofit of Europe's approximately 600,000 freight wagons from cast-iron to composite
        brake blocks has been one of the largest noise reduction programmes in transport history.
        Some countries (Switzerland, Germany, the Netherlands) have implemented noise-differentiated
        track access charges — <strong>charging higher fees for noisy wagons</strong> to incentivise
        the retrofit. Switzerland went further and banned wagons with cast-iron brake blocks on its
        network from 2020. The programme has reduced rail freight noise levels along heavily
        trafficked corridors by 5–10 dB, benefiting millions of residents alongside railway lines.
      </p>

      <h3>Loading Gauge, Structure Gauge, and Kinematic Envelope</h3>
      <p>
        Three nested envelopes define what can physically fit on the railway:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Envelope</th><th>Definition</th><th>Controlled By</th></tr>
          </thead>
          <tbody>
            <tr><td>Static vehicle outline</td><td>The physical cross-section of the vehicle at rest, centred on track</td><td>Vehicle manufacturer</td></tr>
            <tr><td>Kinematic envelope</td><td>Static outline + dynamic movements (suspension deflection, body roll, lateral play) + tolerances</td><td>Vehicle + track interaction</td></tr>
            <tr><td>Structure gauge</td><td>The minimum clearance all infrastructure must provide, always larger than the kinematic envelope</td><td>Infrastructure manager</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The UK's tight loading gauge (a legacy of the Victorian era when tunnels and bridges were
        built to just clear the trains of the day) is one of the most persistent constraints in
        British railway engineering. Standard UK gauge profiles (W6a, W7, W8, W9, W10, W12) define
        progressively larger envelopes. Clearing a route for a larger gauge means surveying every
        bridge, tunnel, platform, signal gantry, and piece of lineside equipment and modifying
        anything that infringes — a process costing hundreds of millions of pounds per route.
      </p>

      <h3>Gauge Clearance Process</h3>
      <p>
        When a new or modified vehicle is introduced, or when infrastructure changes, a <strong>gauge
        clearance</strong> assessment is required. The vehicle's static outline is calculated, then
        all dynamic movements are added: suspension deflections, body roll on canted track, lateral
        displacement from track irregularities, and manufacturing tolerances. The result is the
        kinematic envelope, which must fit within the structure gauge at every point on the route.
        Modern gauge clearance uses 3D digital models of both the vehicle and the infrastructure,
        but on older routes, physical measurement trains (New Measurement Train, track recording
        vehicles) are still used to verify clearances.
      </p>

      <h3>Interoperability: Crossing Borders</h3>
      <p>
        Cross-border rail operation faces formidable technical barriers: different track gauges,
        electrification voltages, signalling systems, and loading gauges. Solutions include:
      </p>
      <ul>
        <li><strong>Gauge-changing bogies:</strong> The Talgo system (used on Spanish trains crossing to France) automatically adjusts wheelset spacing as the train passes through a gauge-change facility at walking speed. The wheels are unlocked, spread or narrowed by guide rails, and re-locked — all without stopping.</li>
        <li><strong>Multi-system locomotives:</strong> Locomotives like the Siemens Vectron or Alstom Prima can operate under multiple voltages and frequencies (1.5 kV DC, 3 kV DC, 15 kV 16.7 Hz AC, 25 kV 50 Hz AC) and switch between them on the fly. They also carry multiple signalling systems (ETCS + national systems).</li>
        <li><strong>TSI compliance:</strong> The EU's Technical Specifications for Interoperability define common standards for rolling stock, infrastructure, signalling, noise, accessibility, and safety in tunnels, aiming to create a single European railway area where any compliant vehicle can operate on any compliant route.</li>
      </ul>

      <h3>Gauge Conversion Projects</h3>
      <p>
        Some of the world's most ambitious railway engineering projects involve converting entire
        networks from one track gauge to another:
      </p>
      <ul>
        <li>
          <strong>Spain:</strong> The Spanish national network was built to Iberian gauge (1,668 mm),
          incompatible with the standard gauge (1,435 mm) used in the rest of Europe. Spain's
          high-speed network was built to standard gauge from the outset, creating a dual-gauge
          country. Talgo's gauge-changing technology allows passenger trains to transition between
          gauges seamlessly. Freight interoperability remains a challenge — a third rail (allowing
          both gauges on the same track) has been installed on some corridors, and full gauge
          conversion of the conventional network is under long-term consideration.
        </li>
        <li>
          <strong>Baltic states (Rail Baltica):</strong> Estonia, Latvia, and Lithuania inherited
          Russian broad gauge (1,520 mm) from the Soviet era. The Rail Baltica project is
          constructing a new standard-gauge (1,435 mm) high-speed line connecting Tallinn to the
          Polish border, integrating the Baltic states into the European standard-gauge network.
          This is a greenfield new-build rather than a conversion, but it will transform the
          region's rail connectivity with the rest of Europe.
        </li>
        <li>
          <strong>Australia:</strong> Australia historically had three different gauges across its
          states (1,600 mm in Victoria, 1,435 mm in New South Wales, 1,067 mm in Queensland),
          requiring passengers and freight to change trains at state borders. Standardisation to
          1,435 mm has been progressively implemented on key interstate corridors, though
          substantial sections of narrow gauge remain in Queensland and Western Australia.
        </li>
      </ul>

      <h3>Vehicle Dynamics Simulation Tools</h3>
      <p>
        Modern rolling stock design and certification relies heavily on multi-body dynamics (MBD)
        simulation software that models the complete vehicle as a system of interconnected rigid
        and flexible bodies moving over a track with realistic geometry and irregularities:
      </p>
      <ul>
        <li>
          <strong>VAMPIRE (Vehicle dynAMic Performance Investigation Running on a computEr):</strong>
          Developed by British Rail Research, now maintained by DeltaRail/Resonate. The dominant
          tool in the UK for vehicle dynamics assessment and acceptance testing. VAMPIRE models
          the vehicle as a multi-body system with detailed wheel-rail contact geometry, suspension
          elements, and track irregularity inputs. It is used to demonstrate compliance with
          EN 14363 (running behaviour) and the Nadal criterion (derailment safety), and to
          calculate forces for fatigue assessment of track components. Network Rail requires
          VAMPIRE assessments for vehicle acceptance on the UK network.
        </li>
        <li>
          <strong>SIMPACK:</strong> A commercial MBD simulation package from Dassault Systemes,
          widely used internationally. SIMPACK can model highly complex vehicle configurations
          including flexible bodies (for carbody structural vibration), detailed suspension
          models (non-linear springs, hydraulic dampers with temperature dependence), and
          multiple wheel-rail contact algorithms. It integrates with FEA software for
          stress analysis and with control system tools (Simulink) for modelling active
          suspension and traction/braking control.
        </li>
        <li>
          <strong>VI-Rail (VI-Grade):</strong> Another widely used commercial MBD tool for
          railway vehicle dynamics, based on the Adams solver. Used by manufacturers including
          Alstom and Siemens for vehicle design optimisation.
        </li>
        <li>
          <strong>GENSYS:</strong> A Swedish MBD code developed by DEsolver, particularly
          strong in wheel-rail contact modelling and used extensively in Scandinavian markets.
        </li>
      </ul>
      <p>
        These simulation tools are essential for the vehicle approval process because physical
        testing of every operating scenario is prohibitively expensive and time-consuming.
        Simulations model the vehicle response to thousands of track sections with varying
        geometry, irregularities, and speed, predicting forces, accelerations, and safety
        metrics that are then validated against a targeted set of physical track tests. The
        combination of simulation and selective physical testing is codified in EN 14363, which
        defines when simulation can substitute for testing and the validation requirements.
      </p>

      <h3>Track Access Charges and Vehicle Characteristics</h3>
      <p>
        The forces a vehicle imposes on the track infrastructure are not merely a technical
        concern — they have direct financial consequences through <strong>track access charges</strong>.
        Infrastructure managers (like Network Rail in the UK) charge train operators for the
        damage their vehicles cause to the track. The charge structure reflects the key vehicle
        characteristics that drive infrastructure wear:
      </p>
      <ul>
        <li>
          <strong>Axle load:</strong> The single most important factor. Track damage (rail wear,
          ballast degradation, formation stress) increases approximately with the <strong>fourth
          power of axle load</strong> — doubling axle load increases damage by roughly 16 times.
          This is why a 25-tonne-per-axle freight wagon causes dramatically more damage than a
          7-tonne-per-axle passenger coach, even per tonne of payload.
        </li>
        <li>
          <strong>Unsprung mass:</strong> The mass of components below the primary suspension
          (wheelsets, axleboxes, traction motors on axle-hung designs, brake discs). High
          unsprung mass amplifies dynamic forces at rail joints, switches, and track
          irregularities. Reducing unsprung mass (e.g. by using frame-mounted rather than
          axle-hung motors, or by using lighter wheel designs) reduces track damage and is
          reflected in lower variable charges on some networks.
        </li>
        <li>
          <strong>Speed:</strong> Higher speed increases dynamic forces and aerodynamic effects
          (ballast disturbance from air pressure waves). Track damage generally increases
          with speed, reflected in distance-based charges that may vary by speed band.
        </li>
        <li>
          <strong>Suspension characteristics:</strong> Vehicles with poor curving behaviour
          (stiff bogies, high angle of attack) impose higher lateral forces on curves,
          accelerating gauge-face wear. Some charging frameworks include a "vehicle track
          interaction" factor based on curving performance.
        </li>
        <li>
          <strong>Brake type:</strong> As noted in the noise section, cast-iron tread brakes
          roughen the wheel, which in turn roughens the rail through the dynamic interaction.
          Networks with noise-differentiated charging penalise vehicles with cast-iron brake
          blocks.
        </li>
      </ul>

      <Callout type="info" label="Key Principle">
        Network Rail's Variable Usage Charge (VUC) is the primary mechanism for recovering
        infrastructure wear costs from train operators. The charge per vehicle-mile varies by
        vehicle type, reflecting the damage relationship. A loaded freight wagon at 25.5 tonnes
        per axle may pay 10–20 times the per-mile charge of a passenger EMU coach at 10 tonnes
        per axle. This creates a direct financial incentive for freight operators to invest in
        track-friendly vehicle designs (lower axle loads, improved suspension, composite brake
        blocks) — aligning commercial incentives with infrastructure sustainability.
      </Callout>

      <Callout type="analogy">
        The wheel-rail contact patch is like a <strong>network socket</strong> — incredibly small
        but carrying enormous loads. All the data (forces) between vehicle and infrastructure passes
        through this tiny interface. Hertzian contact theory is the <strong>protocol specification</strong>
        for this socket — it defines the relationship between the input (normal force, geometry) and
        the output (contact area, pressure distribution), just as TCP defines the relationship
        between data payload and packet structure. Kalker's creep theory adds the <strong>flow
        control layer</strong>, governing how tangential forces (throughput) relate to creep
        (congestion). The loading gauge is a <strong>strict API schema</strong>. If
        your vehicle (the request payload) exceeds the structure gauge (the server's accepted
        schema), it physically cannot pass — it hits a bridge or platform. Unlike software, there is
        no graceful degradation, no 413 Payload Too Large response. It is a bridge strike: violent,
        expensive, and potentially fatal. This is why gauge clearance is treated with the same rigour
        as API contract testing in safety-critical systems. Track access charges are the
        <strong>cloud computing bill</strong> — heavier resource usage (higher axle loads, worse
        suspension) generates proportionally higher charges, incentivising efficient resource
        consumption.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm1-l1', label: 'Track Structure', desc: 'Rail profiles and how the track layer interfaces with wheels.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Structure gauge and loading gauge clearance envelopes in detail.' },
        { target: 'm5-l1', label: 'Electrification Principles', desc: 'Pantograph height and gauge constraints on overhead line equipment.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'Curvature and cant determining the forces at the wheel-rail contact.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'What is the approximate size of the contact patch between a wheel and rail?', options: ['About 100 cm² — the size of a playing card', 'About 10 cm² — the size of a coin', 'About 1 cm² — the size of a postage stamp', 'About 0.1 cm² — the size of a pinhead'], correct: 2, explanation: 'The contact patch is only about 1 cm² — roughly the size of a small coin or postage stamp. This tiny area carries the entire load of the vehicle, creating very high contact stresses.' },
  { text: 'Why does the railway wheel have a conical tread profile?', options: ['To reduce contact area and minimise friction', 'The cone enables self-centring/self-steering: the wheel traces a larger radius on the outer rail on curves, naturally guiding the wheelset', 'To allow the wheel to run on different gauge tracks', 'To improve braking performance on wet rails'], correct: 1, explanation: 'The conical profile means a lateral shift changes the effective rolling radius on each wheel. On a curve, the outer wheel runs on a larger diameter, covering more distance per revolution — naturally steering the wheelset around the curve.' },
  { text: 'What is the difference between loading gauge and structure gauge?', options: ['They are interchangeable terms', 'Loading gauge is the maximum vehicle envelope (including dynamics); structure gauge is the minimum clearance infrastructure must provide. Structure gauge must be larger than loading gauge.', 'Loading gauge applies only to freight; structure gauge to passengers', 'Loading gauge is a European standard; structure gauge is a UK standard'], correct: 1, explanation: 'Loading gauge defines the maximum space a vehicle can occupy including dynamic movements. Structure gauge defines the minimum clearance that infrastructure (bridges, tunnels, platforms) must provide. The difference is the safety margin.' },
  { text: 'What is gauge-corner cracking?', options: ['Cracking in the rail web caused by temperature changes', 'Fatigue cracking on the rail head gauge corner caused by repeated wheel contact, which can lead to rail breaks if undetected', 'Cracks in the wheel flange from hitting the rail gauge face', 'Damage to check rails in turnouts'], correct: 1, explanation: 'Gauge-corner cracking (a type of rolling contact fatigue) develops where the wheel contacts the gauge corner of the rail head. Cracks propagate downward and can cause sudden rail fractures if not detected and treated by grinding or re-railing.' },
];
