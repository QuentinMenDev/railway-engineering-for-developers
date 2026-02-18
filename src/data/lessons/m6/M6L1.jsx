import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M6L1({ goTo }) {
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

export const quiz = [
  { text: 'What advantage does distributed traction (multiple units) have over locomotive-hauled trains?', options: ['Lower manufacturing cost per vehicle', 'Better adhesion utilisation, acceleration, and braking because powered axles are spread throughout the train', 'Simpler maintenance requirements', 'Higher maximum speed capability'], correct: 1, explanation: 'Distributing traction across the train means more axles contribute to adhesion, giving better acceleration and braking. It also spreads the weight more evenly and eliminates the need to run a locomotive around at termini.' },
  { text: 'What bus system is commonly used for onboard train communication?', options: ['CAN bus from the automotive industry', 'MVB (Multifunction Vehicle Bus) or Ethernet-based TCN (Train Communication Network)', 'USB connected devices throughout the train', 'Bluetooth mesh networking'], correct: 1, explanation: 'MVB and TCN (standardised in IEC 61375) are purpose-built train communication networks. Modern trains increasingly use Ethernet-based TCN for higher bandwidth and easier integration.' },
  { text: 'What does TSI stand for in railway certification?', options: ['Train Safety Inspection', 'Technical Specification for Interoperability — EU standards ensuring cross-border compatibility', 'Traction System Interface', 'Track-Side Infrastructure'], correct: 1, explanation: 'TSIs are EU regulations that define requirements each subsystem must meet to allow trains to operate across national borders. They cover rolling stock, signalling, infrastructure, energy, and more.' },
  { text: 'Why are multiple units (EMUs/DMUs) preferred for commuter services?', options: ['They are quieter than locomotive-hauled trains', 'Fast acceleration from distributed traction, no need to run around the locomotive at termini, and efficient use of platform length', 'They can carry more passengers per train', 'They require fewer staff to operate'], correct: 1, explanation: 'Multiple units accelerate faster (more powered axles), can depart in either direction without a locomotive run-around, and every metre of the train is usable passenger space — all critical for high-frequency commuter operations.' },
];
