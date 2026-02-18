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

// ─── Module 6: Rolling Stock ──────────────────────────────────────────

function M6L1({ goTo }) {
  return (
    <>
      <h3>A Brief History of Locomotive Development</h3>
      <p>
        The evolution of the locomotive mirrors the broader arc of industrial technology. Understanding
        where traction technology came from illuminates <em>why</em> modern rolling stock is designed
        the way it is.
      </p>
      <p>
        <strong>The steam era (1804–1960s):</strong> Richard Trevithick's 1804 locomotive at Penydarren
        demonstrated that smooth steel wheels on smooth steel rails could generate enough adhesion
        to haul useful loads — a fact that was far from obvious at the time. The Stephensons' Rocket
        (1829) established the multi-tube boiler and blast pipe arrangement that made steam
        locomotives practical. For over a century, steam dominated. The technology peaked with
        machines like the LNER A4 Pacifics (holder of the world steam speed record at 126 mph),
        the GWR Kings, and the massive American "Big Boy" 4-8-8-4 articulated locomotives for
        Union Pacific freight. Steam locomotives were thermally inefficient (typically 6–8% thermal
        efficiency), labour-intensive to operate (requiring a driver and fireman), and required
        extensive infrastructure — water troughs, coaling facilities, ash pits, and turntables.
      </p>
      <p>
        <strong>The diesel transition (1930s–1970s):</strong> Diesel traction offered transformative
        advantages: 25–35% thermal efficiency, one-person operation, instant availability (no hours
        of "raising steam"), lower maintenance costs, and the ability to run in multiple with other
        locomotives under a single driver's control. The UK's Modernisation Plan of 1955 accelerated
        the transition, though the rush to dieselise produced some unreliable early types (the
        notorious Clayton Class 17 and North British Class 21). By the late 1960s, steam had been
        eliminated from mainline service in most industrialised nations. Successful UK types like the
        Class 47 (512 built) and Class 37 (309 built) served for decades.
      </p>
      <p>
        <strong>The electric age (1880s–present):</strong> Electric traction appeared early — the
        first electric railway was Siemens' demonstration line in 1879 — but required costly
        infrastructure. Where electrification was justified by traffic density, electric traction
        proved superior: higher power-to-weight ratio, zero point-of-use emissions, lower maintenance,
        and the ability to regenerate braking energy. The UK electrified the West Coast Main Line
        (25 kV AC) in the 1960s and the East Coast Main Line progressively through the 1980s–1991.
        Today, electric traction handles the vast majority of passenger-km in countries with extensive
        electrification (Switzerland: 100%, Netherlands: 76%, UK: approximately 38% of route-km but
        carrying over 70% of passenger journeys).
      </p>
      <p>
        <strong>Emerging technologies (2020s–):</strong> Battery, hydrogen fuel cell, and bi-mode
        traction are filling the gap on non-electrified routes where full electrification is not
        economically justified. The UK's HydroFLEX demonstrator (Class 799) and Germany's Coradia
        iLint hydrogen trains represent the frontier. Battery-electric multiple units like the
        Class 230 are being trialled for branch-line services.
      </p>

      <h3>Locomotives: The Dedicated Traction Unit</h3>
      <p>
        A <strong>locomotive</strong> is a vehicle whose sole purpose is to produce tractive effort.
        It hauls coaches (passenger) or wagons (freight) but carries no payload itself. Locomotives
        come in three main flavours based on their power source:
      </p>
      <ul>
        <li>
          <strong>Diesel-electric:</strong> A diesel engine drives a generator (or alternator),
          which produces electricity to power traction motors on the axles. The diesel engine
          never directly drives the wheels. This decoupling allows the engine to run at optimal
          speed while the electrical transmission handles the variable speed/torque demands.
          Dominant for freight and non-electrified passenger services worldwide. Modern examples
          include the Class 66 (3,300 hp, EMD prime mover, used extensively for UK freight)
          and the GE Evolution Series in North America (4,400 hp, Tier 4 emissions compliant).
        </li>
        <li>
          <strong>Electric:</strong> Draws power from the infrastructure (overhead catenary or
          third rail) and feeds it through a transformer and power electronics to traction motors.
          Higher power-to-weight ratio than diesel, lower maintenance costs, and zero point-of-use
          emissions. The workhorse of electrified mainlines. Multi-system electric locomotives
          like the Siemens Vectron can operate under four different voltage systems (1.5 kV DC,
          3 kV DC, 15 kV 16.7 Hz AC, 25 kV 50 Hz AC), enabling seamless cross-border operation.
        </li>
        <li>
          <strong>Battery and hydrogen:</strong> Emerging alternatives for non-electrified routes
          where full electrification is not economically justified. Battery locos store energy in
          lithium-ion packs; hydrogen locos use fuel cells to generate electricity. Both are
          zero-emission at point of use but face range and refuelling/recharging constraints.
          Battery-electric shunters are already commercially viable for depot and yard duties
          where routes are short and charging infrastructure can be concentrated.
        </li>
      </ul>

      <h3>Multiple Units: Distributed Traction</h3>
      <p>
        A <strong>multiple unit (MU)</strong> is a self-propelled train where traction equipment is
        distributed throughout the formation rather than concentrated in a single locomotive. The
        principal types are:
      </p>
      <ul>
        <li><strong>DMU (Diesel Multiple Unit):</strong> Each power car has its own diesel engine and transmission. Common on rural and branch lines. UK examples include the Class 158 (express) and Class 156 (regional).</li>
        <li><strong>EMU (Electric Multiple Unit):</strong> Draws current from OLE or third rail. The dominant type for suburban, regional, and high-speed passenger services. The UK fleet includes Class 395 Javelin (HS1), Class 700 Thameslink, and Class 385 (Scotland).</li>
        <li><strong>BMU (Battery Multiple Unit):</strong> Charges batteries under electrified sections and runs on battery power beyond the wires. A bridge technology for partially electrified routes.</li>
        <li><strong>Bi-mode (BMX):</strong> Carries both electric and diesel traction equipment. Runs on electric power under the wires, switches to diesel beyond. The UK's Class 800/801/802 Azuma fleet is the largest bi-mode fleet in the world.</li>
      </ul>
      <p>
        Why distribute traction? Because spreading motors across more axles gives <strong>better
        adhesion utilisation</strong> (more driven wheels sharing the tractive effort), faster
        acceleration, more uniform braking, and lower axle loads. A 12-car EMU with motors on
        half its axles can accelerate far more briskly than a locomotive hauling 12 passive coaches
        with the same total power, because it has six times as many driven axles sharing the effort.
      </p>

      <h3>EMU and DMU Formation Types</h3>
      <p>
        Multiple units are built in fixed formations of varying length, designed to be coupled
        together in revenue service to match capacity to demand:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Formation</th><th>Typical Configuration</th><th>Use Case</th><th>UK Example</th></tr>
          </thead>
          <tbody>
            <tr><td>2-car</td><td>DMSO + DMS (both motor cars, or one motor + one trailer)</td><td>Branch lines, rural services, low-demand routes</td><td>Class 150/153/156 DMU</td></tr>
            <tr><td>3-car</td><td>DMSO + TS + DMS (driving motor + trailer + driving motor)</td><td>Regional services, medium demand</td><td>Class 158/170 DMU</td></tr>
            <tr><td>4-car</td><td>DMSO + MSO + TS + DMS (two motor cars, one trailer with pantograph, one driving trailer)</td><td>Suburban and intercity, backbone formation</td><td>Class 350/377/700 EMU</td></tr>
            <tr><td>5-car</td><td>DMS + TS + MS + TS + DMS</td><td>High-capacity suburban</td><td>Class 345 (Elizabeth line)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Vehicle designation codes follow a standard pattern: <strong>D</strong> = Driving (has a cab),
        <strong>M</strong> = Motor (has traction equipment), <strong>S</strong> = Standard class,
        <strong>F</strong> = First class, <strong>O</strong> = Open saloon, <strong>T</strong> = Trailer
        (unpowered), <strong>P</strong> = Pantograph. So "DMSO" is a Driving Motor Standard Open vehicle.
        When units couple, the electrical and pneumatic connections are made through automatic couplers
        at the outer ends, and the TMS of both units establishes communication over the WTB so that
        the driver in the leading cab can control the entire formation as a single entity. Coupling
        and uncoupling in service typically takes 2–5 minutes and is performed by the driver from the cab
        (for automatic couplers) or by a shunter on the ground (for semi-permanent bar couplers).
      </p>

      <h3>High-Speed Trainsets</h3>
      <p>
        High-speed trains (250+ km/h) fall into two architectural families:
      </p>
      <ul>
        <li><strong>Power-car (locomotive) bookends:</strong> The original TGV concept — two power cars at each end with unpowered articulated coaches between them. The power cars contain all traction equipment. This concentrates complexity in two vehicles and keeps the coaches simple and lightweight. TGV, KTX, and early Eurostar use this layout.</li>
        <li><strong>Distributed traction:</strong> Traction motors distributed under some or all coaches. Used by ICE 3, Shinkansen N700, AGV, and modern Eurostar e320. Better adhesion utilisation, no wasted space in power cars, and more seats per metre of train length. The dominant trend for new high-speed trains.</li>
      </ul>
      <p>
        Articulation — where adjacent vehicles share a bogie at the joint rather than each having
        its own bogies — is used on TGV, AGV, and some metro trainsets. Articulated trains are
        shorter, lighter, and have better ride quality (fewer bogies, lower centre of gravity at the
        joints), but individual vehicles cannot be easily detached for maintenance.
      </p>

      <h3>High-Speed Families in Detail</h3>
      <p>
        The world's major high-speed train families each reflect distinct engineering philosophies:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Family</th><th>Country</th><th>Max Speed</th><th>Architecture</th><th>Key Innovation</th></tr>
          </thead>
          <tbody>
            <tr><td>Shinkansen (N700S)</td><td>Japan</td><td>300 km/h</td><td>Distributed traction, non-articulated, 16-car fixed formation</td><td>Supreme earthquake resilience (ECDS braking), extreme reliability (average delay under 1 minute/year), tilting on N700S</td></tr>
            <tr><td>TGV (Duplex/M)</td><td>France</td><td>320 km/h (service)</td><td>Power-car bookends, articulated coaches</td><td>Double-deck cars maximising capacity (1,268 seats in duplex), world rail speed record holder (574.8 km/h, 2007)</td></tr>
            <tr><td>ICE (3neo/4)</td><td>Germany</td><td>320 km/h</td><td>Distributed traction, non-articulated</td><td>Multi-system capability (Germany, Austria, Switzerland, Belgium, Netherlands under different voltages), wide-body design</td></tr>
            <tr><td>Pendolino (ETR 675)</td><td>Italy</td><td>250 km/h</td><td>Distributed traction with active tilting</td><td>Active tilt up to 8 degrees allows 25-40% higher curve speeds on conventional lines without track modification</td></tr>
            <tr><td>AVE (Talgo/S-106)</td><td>Spain</td><td>330 km/h</td><td>Power-car bookends, Talgo articulated coaches with independent wheels</td><td>Gauge-changing bogies for seamless 1,435 mm to 1,668 mm transition</td></tr>
            <tr><td>CR400 (Fuxing)</td><td>China</td><td>350 km/h (service)</td><td>Distributed traction, 8/16-car</td><td>Highest sustained commercial speed worldwide, Chinese-developed standards (replacing CRH licence-built designs)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Coaches: Hauled Passenger Vehicles</h3>
      <p>
        Traditional <strong>coaches</strong> are unpowered passenger vehicles hauled by a locomotive.
        They persist for long-distance and sleeper services where flexibility matters: a loco-hauled
        train can be lengthened or shortened by adding or removing coaches, and a failed locomotive
        can be swapped without withdrawing the entire train. Multiple units, by contrast, are fixed
        formations — you cannot easily detach a single car.
      </p>

      <h3>Interior Design and Accessibility</h3>
      <p>
        Interior design is driven by both commercial requirements and mandatory standards, particularly
        for accessibility. The <strong>PRM TSI</strong> (Persons with Reduced Mobility Technical
        Specification for Interoperability) and the UK's RVAR (Rail Vehicle Accessibility Regulations)
        2010 define minimum requirements:
      </p>
      <ul>
        <li><strong>Wheelchair spaces:</strong> Minimum dimensions (1,300 mm x 750 mm), located adjacent to accessible doors, with appropriate restraint systems and call-for-aid buttons.</li>
        <li><strong>Accessible toilets:</strong> Universal access toilets (UAT) large enough for wheelchair users (minimum 1,700 mm x 1,500 mm), with grab rails, emergency alarms, and controlled-emission toilet (CET) systems that use vacuum to minimise water usage and eliminate trackside discharge.</li>
        <li><strong>Seat pitch:</strong> Standard class seat pitch is typically 780–840 mm (comparable to premium economy in aviation). First class offers 1,000–1,100 mm. Seat width in standard class is typically 440–480 mm in a 2+2 layout or 420–450 mm in a 2+3 layout. These dimensions are fiercely debated because they directly affect capacity and revenue.</li>
        <li><strong>Gangway width:</strong> Minimum 550 mm clear width throughout the train for accessibility, with 850 mm preferred for smooth passenger flow.</li>
        <li><strong>Visual and audible information:</strong> Next-stop displays, audio announcements, and tactile indicators for visually impaired passengers. Real-time information screens showing connections, delays, and onward travel options.</li>
        <li><strong>Step-free access:</strong> Platform-train interface gap must not exceed 75 mm horizontal and 50 mm vertical at designated accessible doors. Where this cannot be achieved by platform design, manual or automatic boarding ramps are provided.</li>
      </ul>

      <h3>Freight Wagons: A Diverse Fleet</h3>
      <p>
        The freight wagon fleet is enormously diverse because cargo types vary so widely:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Wagon Type</th><th>Cargo</th><th>Key Feature</th></tr>
          </thead>
          <tbody>
            <tr><td>Flat wagon</td><td>Steel, timber, containers</td><td>Open deck, versatile loading</td></tr>
            <tr><td>Hopper</td><td>Coal, aggregate, grain</td><td>Bottom-discharge doors for rapid unloading</td></tr>
            <tr><td>Tank wagon</td><td>Petroleum, chemicals, milk</td><td>Sealed cylindrical vessel, hazmat rated</td></tr>
            <tr><td>Intermodal (well/spine)</td><td>ISO containers</td><td>Low deck height to fit containers within gauge</td></tr>
            <tr><td>Box wagon (van)</td><td>Packaged goods, automotive</td><td>Enclosed, weatherproof, side or end doors</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Standardisation of the freight fleet is notoriously difficult because each commodity demands
        different loading, unloading, containment, and environmental protection. The result is
        hundreds of sub-types, each with unique maintenance requirements.
      </p>

      <h3>Freight Wagon Coupling Types</h3>
      <p>
        The coupling system used on freight wagons has profound implications for operational efficiency
        and is one of the most persistent legacy constraints in European railways:
      </p>
      <ul>
        <li>
          <strong>Buffers-and-chain (screw coupling):</strong> The traditional European system.
          Two side buffers on each wagon end absorb compressive forces, while a central screw
          coupling (a threaded link tightened by hand) transmits tensile forces. Coupling and
          uncoupling requires a shunter to stand between the wagons — a dangerous task and one
          of the most significant sources of freight railway injuries. The system limits train
          length (longitudinal forces become unmanageable beyond about 750 m), restricts
          maximum trailing load, and prevents automatic coupling. It persists because the
          European freight wagon fleet numbers approximately 600,000 vehicles, and retrofitting
          them all simultaneously is logistically and financially enormous.
        </li>
        <li>
          <strong>Automatic couplers (AAR/Janney type):</strong> The North American standard
          since 1893. A knuckle coupler that mates automatically when wagons are pushed together.
          No person needs to stand between vehicles. Can transmit both tensile and compressive
          forces through a single coupler, enabling heavier trains (up to 3+ km, 15,000+ tonnes
          in North America). The Russian SA-3 coupler is a similar automatic type used across
          the former Soviet Union railway network.
        </li>
        <li>
          <strong>Digital Automatic Coupling (DAC):</strong> The European rail freight sector is
          developing DAC to replace buffers-and-chain. DAC combines mechanical coupling with
          automatic air brake and electrical/data connections (power supply and communication
          for smart wagon applications). The EU-funded DAC4EU project is testing prototypes.
          Migration requires a "big bang" conversion or extended dual-compatibility transition,
          neither of which is straightforward. The business case rests on enabling longer,
          heavier trains, reducing shunting time, improving safety, and enabling digitalisation
          of freight operations.
        </li>
      </ul>

      <h3>Vehicle Architecture</h3>
      <p>
        Modern rolling stock is modular. The principal architectural components are:
      </p>
      <ul>
        <li><strong>Carbody:</strong> The structural shell — aluminium extrusion (lightweight, corrosion-resistant, used on most modern EMUs), stainless steel (durable, fire-resistant, used on metro stock), or mild steel with anti-corrosion coatings (heavier but cheaper, used on freight wagons and some coaches). The carbody must meet crashworthiness standards (EN 15227) defining resistance to collision scenarios — a front-end impact at 36 km/h, an impact with a heavy road vehicle at a level crossing, and a train-to-train collision at the coupling.</li>
        <li><strong>Bogies (trucks):</strong> The wheel assemblies that carry the carbody. Contain wheelsets, primary and secondary suspension, traction motors (if powered), brake discs, and associated equipment. Fabricated from welded steel. The bogie frame is one of the most fatigue-critical components — it experiences millions of stress cycles during its service life. Non-destructive testing (ultrasonic, magnetic particle inspection) is performed at regular overhaul intervals.</li>
        <li><strong>Couplers:</strong> Mechanical, pneumatic, and electrical connections between vehicles. <strong>Automatic couplers</strong> (Scharfenberg type is dominant in Europe; Dellner is common in Scandinavia) combine all three — mechanical coupling, pneumatic brake pipe connection, and electrical/data connections — in a single unit that mates automatically when the vehicles are pushed together. Screw couplings with side buffers persist on freight and loco-hauled stock in the UK and Europe.</li>
        <li><strong>Gangways:</strong> Enclosed walkways between vehicles allowing passenger and crew movement through the train. Modern gangways are wide (800+ mm), fully enclosed, and provide a continuous floor for accessibility. They incorporate bellows (rubber or fabric) that accommodate the relative movement between vehicles on curves and through turnouts.</li>
        <li><strong>Doors:</strong> Sliding plug doors with obstacle detection, controlled by the driver or guard. Safety-critical: a door open on the wrong side at a platform is a serious hazard. Modern door control systems include platform detection (using transponders or position systems), selective door opening (opening only on the platform side), and door-state monitoring reported to the TMS. Dwell time is strongly influenced by door width and number — wide doors (1,300 mm+) significantly reduce boarding/alighting time and hence station stop time.</li>
        <li><strong>HVAC:</strong> Heating, ventilation, and air conditioning units mounted on the roof or underfloor. Must maintain comfort across a wide temperature range (−20 °C to +40 °C external) and highly variable passenger loads (empty to crush-loaded). Modern units use heat pump technology for energy efficiency. Fresh air supply rates are specified in EN 13129 and are critical for passenger health — lessons reinforced during the COVID-19 pandemic.</li>
        <li><strong>Passenger information systems (PIS):</strong> Internal displays, audio announcements, real-time journey information, and external destination indicators. Fed by the TMS and increasingly by real-time data feeds (next-stop information, connection status, service alerts).</li>
      </ul>

      <h3>Crashworthiness: Passive Safety Design</h3>
      <p>
        <strong>EN 15227</strong> defines four collision design scenarios that all new rolling stock
        must address:
      </p>
      <ul>
        <li><strong>Scenario 1:</strong> Front-end collision between two identical trains at a closing speed determined by vehicle category (e.g. 36 km/h for Category C-I passenger trains).</li>
        <li><strong>Scenario 2:</strong> Collision with a freight wagon at 36 km/h (freight wagon stationary on an adjacent track).</li>
        <li><strong>Scenario 3:</strong> Collision with a large road vehicle (15 tonnes) at a level crossing at the train's line speed up to 110 km/h.</li>
        <li><strong>Scenario 4:</strong> Impact with a low obstacle (e.g. car on a level crossing, or animal) — the vehicle must remain on the track and the driver's survival space must be maintained.</li>
      </ul>
      <p>
        Compliance is achieved through <strong>crash energy management (CEM)</strong> — controlled
        progressive deformation of sacrificial structures at the vehicle ends. Modern cab-end designs
        incorporate multiple crush zones: an anti-climber (prevents one vehicle riding up over another),
        a main energy absorber (typically an aluminium honeycomb or tube-deformation element designed to
        absorb a specified energy at a controlled force level), and a strong structural backbone
        behind the sacrificial zone that protects the driver and passengers. The survival space for
        the driver must be maintained after the design collision scenario — there must be no intrusion
        into the cab beyond defined limits. Finite element analysis (FEA) is the primary tool for
        demonstrating compliance, validated by component crush tests and sometimes full-scale impact
        tests.
      </p>

      <Callout type="info" label="Key Standard">
        EN 15227 (Railway applications — Crashworthiness requirements for railway vehicle bodies) classifies
        vehicles into categories C-I through C-IV based on their operational context. Category C-I covers
        mainline passenger vehicles and requires the most stringent collision performance. Category C-III
        covers freight locomotives. The standard specifies mean deformation forces, maximum deceleration
        limits (5g for passengers in seats with tables, 10g for standing passengers), and survival space
        requirements for crew and passengers.
      </Callout>

      <h3>The Train Management System (TMS)</h3>
      <p>
        The <strong>TMS</strong> is the onboard computer network that monitors and controls all
        vehicle subsystems. It uses standardised bus architectures:
      </p>
      <ul>
        <li><strong>MVB (Multifunction Vehicle Bus):</strong> IEC 61375. A real-time fieldbus within a single vehicle, connecting doors, HVAC, brakes, traction, and diagnostics controllers.</li>
        <li><strong>WTB (Wire Train Bus):</strong> IEC 61375. A train-wide bus connecting vehicles in a consist, allowing the driver's cab to communicate with every car.</li>
        <li><strong>TCN Ethernet:</strong> Modern fleets are migrating to Ethernet-based train communication networks (ETB, ECN) for higher bandwidth, supporting CCTV, PIS, and predictive maintenance data streams.</li>
      </ul>
      <p>
        The TMS architecture is event-driven and message-passing. Subsystem controllers publish
        status and subscribe to commands. The driver's display aggregates data from every node in
        the train — fault codes, temperatures, speeds, door states, brake pressures — into a single
        operational picture.
      </p>

      <h3>Vehicle Numbering Systems</h3>
      <p>
        Every rail vehicle carries a unique identifier used for fleet management, maintenance tracking,
        and operational control. Two systems dominate:
      </p>
      <ul>
        <li>
          <strong>TOPS (Total Operations Processing System):</strong> The UK system, introduced by
          British Rail in the 1970s, based on an IBM mainframe system originally developed for
          Southern Pacific Railroad. TOPS assigns each locomotive and multiple unit a class number
          and individual number. Diesel locomotives are Classes 01–69, electric locomotives 70–99 (though
          many gaps exist), DMUs 100–199, and EMUs 300–399 (broadly). The system is still used
          by Network Rail and operators for real-time tracking of every vehicle on the network.
          TOPS numbers appear as (for example) "66 001" — Class 66, vehicle number 001.
        </li>
        <li>
          <strong>UIC (EVN — European Vehicle Number):</strong> A 12-digit number assigned to
          every rail vehicle in Europe under the ERA's vehicle register. The structure
          is: 2 digits for interoperability capability and vehicle type, 2 digits for country
          code (e.g. 70 = United Kingdom), 4 digits for technical characteristics and serial
          number, 3 digits for individual vehicle number, and 1 check digit calculated using
          the Luhn algorithm. This number is painted on the vehicle side and recorded in the
          European Centralised Virtual Vehicle Register (ECVVR). It enables cross-border
          vehicle tracking and maintenance record management.
        </li>
      </ul>

      <h3>Maintenance Regimes</h3>
      <p>
        Rolling stock maintenance follows a structured regime of increasing depth and interval:
      </p>
      <ul>
        <li><strong>Daily/pre-service checks:</strong> Walk-around inspection, fluid levels, brake tests, door function, PIS check. Performed by the driver or depot staff before each service day.</li>
        <li><strong>A-exam (minor):</strong> Every 2–6 weeks. More detailed inspection, lubrication, consumable replacement (brake pads, wiper blades, toilet servicing), and download of diagnostic data from the TMS.</li>
        <li><strong>B-exam (intermediate):</strong> Every 3–6 months. Component testing, bogie inspection, wheel profile measurement, underframe cleaning, and replacement of life-limited parts.</li>
        <li><strong>C-exam (major):</strong> Every 4–8 years. Full vehicle strip-down, bogie overhaul, wheelset replacement or re-profiling, motor overhaul, carbody repaint, interior refurbishment. Requires the vehicle to be out of service for weeks.</li>
        <li><strong>D-exam (heavy overhaul):</strong> Every 12–20 years (if the vehicle has that lifespan). Complete structural inspection, rewiring, system upgrades, and life extension works.</li>
      </ul>

      <h3>Depot Operations and Fleet Maintenance</h3>
      <p>
        A train maintenance depot is a complex industrial facility optimised for throughput of
        maintenance activities while minimising the time vehicles spend out of service:
      </p>
      <ul>
        <li>
          <strong>Depot layout:</strong> Typically includes a reception area for incoming trains,
          a washing plant (automatic external wash), a fuelling point (for diesel stock) or
          stabling roads with shore power supply (for electric stock), internal maintenance
          roads with inspection pits, wheel lathes for in-situ wheel re-profiling, overhead
          cranes for component swaps (bogies, traction motors, transformers), and a stores
          facility for spare parts. Large depots can stable and maintain 50–100 vehicles
          simultaneously.
        </li>
        <li>
          <strong>Wheel lathe operations:</strong> Underfloor wheel lathes allow wheel re-profiling
          without removing the wheelset from the vehicle. The vehicle is driven over the lathe,
          which machines the wheel tread back to the design profile. A full re-profile takes 20–40
          minutes per wheelset. Wheel diameter is recorded after each cut; when the wheel reaches
          its minimum diameter (typically 50–80 mm less than new), the entire wheelset must be
          replaced — a much more invasive operation requiring the bogie to be dropped.
        </li>
        <li>
          <strong>Bogie drop:</strong> For major maintenance, the entire bogie is removed from
          under the vehicle using a bogie drop — a section of track that can be lowered hydraulically
          while the carbody is supported on jacks. The bogie is then moved to a separate workshop
          for overhaul (wheelset replacement, bearing renewal, suspension component inspection,
          motor overhaul, brake rigging inspection).
        </li>
        <li>
          <strong>Fleet management software:</strong> Modern depots use enterprise asset management
          (EAM) systems that schedule maintenance based on mileage, calendar time, and condition
          data from the TMS. The system tracks every component's life, generates work orders,
          manages parts inventory, and reports fleet availability and reliability KPIs.
        </li>
      </ul>
      <p>
        The industry is moving toward <strong>condition-based maintenance (CBM)</strong> — using
        real-time data from onboard sensors (vibration, temperature, current, pressure) to predict
        when components will need attention, rather than maintaining on fixed time intervals. This
        reduces both costs and unplanned failures. Predictive analytics and machine learning are
        increasingly applied to fleet telemetry data to identify degrading components before they
        fail.
      </p>

      <Callout type="info" label="Key Metric">
        Fleet availability is typically measured as MTIN (Mean Time In service / (Mean Time In service
        + Mean Time Out of service)). A well-maintained passenger fleet targets 85–92% availability,
        meaning that on any given day, at least 85% of the fleet is available for traffic. The
        remaining vehicles are undergoing scheduled maintenance, awaiting parts, or being repaired
        after faults. Unplanned failures that cause in-service disruption ("fleet incidents") are
        tracked separately as MDBF (Mean Distance Between Failures) — a key contractual KPI in
        modern franchise and concession agreements.
      </Callout>

      <h3>Certification and Approvals</h3>
      <p>
        Before a new vehicle can enter service, it must be <strong>authorised</strong>. In Europe,
        this means compliance with <strong>TSIs (Technical Specifications for Interoperability)</strong>
        covering rolling stock, noise, accessibility, safety in tunnels, and more. The process
        involves type testing (demonstrating compliance with each requirement through laboratory
        and on-track tests), independent safety assessment (ISA), review by a Notified Body
        (NoBo), and formal authorisation by the national safety authority (e.g. ORR in the UK) or
        the European Union Agency for Railways (ERA). The process typically takes 2–4 years and
        costs millions.
      </p>
      <p>
        Key test campaigns include:
      </p>
      <ul>
        <li><strong>Dynamic testing:</strong> Running the vehicle at line speed (and typically 10% above) on a test track, measuring ride quality, stability, and wheel-rail forces to EN 14363.</li>
        <li><strong>Electromagnetic compatibility (EMC):</strong> Verifying the vehicle does not interfere with signalling track circuits or other railway systems.</li>
        <li><strong>Brake testing:</strong> Emergency and service brake performance across the speed range, in dry and wet conditions, on gradients.</li>
        <li><strong>Crashworthiness:</strong> Demonstrating compliance with collision scenarios (EN 15227) — usually through finite element simulation validated by component tests.</li>
        <li><strong>Fire safety:</strong> Material fire testing (EN 45545) for all interior materials — flame spread, smoke density, toxicity.</li>
      </ul>

      <Callout type="analogy">
        A train is a <strong>distributed system on wheels</strong>. Each vehicle is a node. The TMS
        is the message bus (think Kafka or RabbitMQ). Doors, HVAC, traction, and braking are all
        microservices communicating over the bus, publishing events and subscribing to commands. The
        driver's cab is the dashboard or CLI — a single pane of glass aggregating telemetry from
        every node. When you couple two trains together, you are merging two clusters and the WTB
        handles service discovery. When a subsystem faults, it publishes a diagnostic event and
        degrades gracefully, just like a circuit breaker pattern. The vehicle numbering system
        (TOPS/UIC EVN) is the DNS of the railway — a unique, globally resolvable identifier for every
        node on the network, enabling fleet management systems to track, query, and command any
        vehicle anywhere.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm5-l1', label: 'Electrification Principles', desc: 'How electric traction draws power from the infrastructure.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Onboard signalling equipment (AWS, TPWS, ETCS) fitted to rolling stock.' },
        { target: 'm8-l1', label: 'Timetable Planning', desc: 'Vehicle performance characteristics determine journey times and headways.' },
      ]} />
    </>
  );
}

function M6L2({ goTo }) {
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

function M6L3({ goTo }) {
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

// ─── Export ──────────────────────────────────────────────────────────

export default function getM6Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm6-l1': return <M6L1 goTo={goTo} />;
    case 'm6-l2': return <M6L2 goTo={goTo} />;
    case 'm6-l3': return <M6L3 goTo={goTo} />;
    default: return null;
  }
}
