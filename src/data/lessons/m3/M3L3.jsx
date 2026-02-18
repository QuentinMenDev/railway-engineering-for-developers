import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M3L3({ goTo }) {
  return (
    <>
      <h3>Station Design Principles</h3>
      <p>
        Stations are where the railway meets the public. Design must balance operational
        efficiency, passenger flow, accessibility, safety, and commercial viability. A station
        is simultaneously a transport interchange, a public building, a retail space, and an
        emergency evacuation challenge.
      </p>
      <ul>
        <li><strong>Passenger flow:</strong> Modelled using pedestrian simulation software (Legion, MassMotion, PTV Viswalk). Peak flows determine gateline widths, staircase capacities, platform lengths, and the number of lifts. The critical design scenario is often the 15-minute peak arrival rate combined with dwell time of trains at platforms. Over-crowded platforms are a safety hazard — crowd crush incidents can occur when platform density exceeds about 4 persons/m².</li>
        <li><strong>Accessibility:</strong> Modern standards (Equality Act / DDA in the UK, ADA in the US, TSI PRM in Europe) require step-free access to all platforms — lifts, ramps, tactile paving, hearing loops, accessible ticket machines, and information in accessible formats (audio, visual, Braille). Retrofitting accessibility into Victorian stations is one of the biggest ongoing investment programmes — Access for All in the UK has spent billions upgrading step-free access at hundreds of stations, and thousands still lack it.</li>
        <li><strong>Interchange design:</strong> Many stations serve multiple modes — national rail, metro, bus, tram, cycling, walking. The design challenge is minimising interchange time and distance while maintaining legible wayfinding. Cross-platform interchange (step off one train, step onto the next across the same platform) is the gold standard but requires careful timetabling and platform allocation.</li>
        <li><strong>Fire safety and evacuation:</strong> Station design must allow complete platform evacuation within prescribed time limits (typically 4–6 minutes). This drives the number and width of exits, the capacity of escalators and stairs, and the design of ventilation to control smoke in underground stations. The King's Cross fire of 1987 led to a complete overhaul of fire safety standards for UK underground stations.</li>
      </ul>

      <h3>Platform Types</h3>
      <ul>
        <li><strong>Side platforms:</strong> One platform on each side of the tracks. The simplest and most common arrangement. Passengers access from the side, and the two platforms serve trains in opposite directions. Easy to extend by lengthening at one or both ends.</li>
        <li><strong>Island platform:</strong> A single platform between two tracks, served on both faces. Space-efficient but requires grade-separated access (subway or bridge) since passengers must cross the tracks to reach it. Common in suburban stations and metro systems. The platform must be wide enough to handle peak flows on both faces simultaneously.</li>
        <li><strong>Bay platform:</strong> A dead-end platform alongside a through platform, used for terminating branch services. The bay track ends at a buffer stop within the station. Allows branch trains to terminate without blocking through running lines.</li>
        <li><strong>Terminal platform:</strong> All platforms are dead-ends (e.g. London Paddington, Paris Gare du Nord, New York Penn Station). Operationally constrained because every arriving train must reverse out (or be hauled out by a shunter). Platform reoccupation time is the key capacity constraint — the time between one train departing and the next one arriving, including signal clearance, point setting, and approach time.</li>
        <li><strong>Through station:</strong> Platforms alongside through running lines. Trains stop, load/unload, and continue. Much more capacity-efficient than terminal stations because trains don't need to reverse. The majority of intermediate stations are through stations.</li>
      </ul>

      <h3>Platform-Train Interface</h3>
      <p>
        The gap between the platform edge and the train is one of the most critical safety
        interfaces on the railway. The gap has two components:
      </p>
      <ul>
        <li><strong>Lateral gap (stepping distance):</strong> The horizontal gap between the platform edge and the train body. Must be minimised (target &lt; 75 mm on straight platforms) but cannot be zero due to vehicle dynamic movement (sway, bounce). On curved platforms, the gap increases significantly because the straight train bodyshell diverges from the curved platform edge. This is why curved platforms often have "mind the gap" warnings.</li>
        <li><strong>Vertical gap (stepping height):</strong> The difference in height between the platform and the train floor. Modern accessibility standards target a step-free interface (zero or near-zero height difference), which requires matching the platform height to the train door sill height. Different rolling stock types have different door heights, making this problematic on routes with mixed stock.</li>
      </ul>
      <p>
        Solutions to platform gap issues include: <strong>platform humps</strong> (raised
        sections of platform aligned with door positions), <strong>Harrington humps</strong>
        (small ramps at specific door positions), <strong>gap fillers</strong> (mechanical
        extendable platforms), and <strong>train-mounted retractable steps</strong>.
      </p>

      <h3>Station Throat Design</h3>
      <p>
        The <strong>throat</strong> is the area of track between the station platforms and the
        open line, containing switches, crossovers, and junctions. Throat design determines
        operational flexibility — can trains cross between platforms? Can services arriving on
        one line depart on another? Can a terminating train reverse and depart from a different
        platform?
      </p>
      <p>
        The signalling implications are profound: every additional turnout adds complexity to
        the interlocking and increases the potential for conflicting routes. But too few
        turnouts restricts operational flexibility and reduces the station's capacity to
        handle disruption.
      </p>
      <p>
        Key throat design considerations:
      </p>
      <ul>
        <li><strong>Crossovers between running lines:</strong> Allow trains to switch between the up and down lines. Essential for handling perturbation (disruption). Without crossovers, a delayed train on one line blocks everything behind it with no ability to overtake or divert.</li>
        <li><strong>Turnout speed:</strong> The turnout geometry in the throat determines the speed at which trains can diverge. Higher-speed turnouts (1-in-20 or above) allow trains to enter platforms without slowing excessively, but they are longer and more expensive.</li>
        <li><strong>Simultaneous movements:</strong> A well-designed throat allows multiple train movements to occur simultaneously — one arriving while another departs, or two trains entering different platforms at the same time. This requires the interlocking to define non-conflicting routes.</li>
        <li><strong>Shunt moves:</strong> Terminal stations need the ability to move empty trains from arrival platforms to departure platforms (or to stabling sidings). These shunt moves consume throat capacity and must be factored into the timetable.</li>
      </ul>

      <h3>Loading Gauge vs Structure Gauge</h3>
      <p>
        Two critical clearance concepts govern what can physically operate on a railway:
      </p>
      <ul>
        <li><strong>Loading gauge (kinematic envelope):</strong> The maximum cross-sectional profile of a vehicle, including dynamic movement (sway, bounce, tilt, suspension deflection, and track irregularities). This is the <em>vehicle</em> constraint. It is calculated by taking the static vehicle profile and adding allowances for all possible movements. In the UK, the standard vehicle loading gauge reference profiles are W6a (the most restrictive standard gauge), W8, W9, W10, W12, and GW (the least restrictive).</li>
        <li><strong>Structure gauge:</strong> The minimum clearance that all lineside structures (bridges, tunnels, platforms, signal gantries, equipment cabinets) must provide. This is the <em>infrastructure</em> constraint. It must always be larger than the loading gauge, with a safety margin. The structure gauge is defined as a series of reference profiles that vary by line speed and location (straight vs curve, electrified vs non-electrified).</li>
      </ul>
      <p>
        The <strong>difference</strong> between the structure gauge and the loading gauge is
        the available clearance margin. On curves, additional clearance (overthrow and
        end-throw allowances) is needed because long vehicles sweep a wider path. On
        electrified lines, additional clearance above the vehicle is needed for the overhead
        line equipment and its pantograph sweep zone.
      </p>

      <h3>The UK Gauge Problem</h3>
      <p>
        Britain has one of the tightest loading gauges in the world — a legacy of the Victorian
        era when tunnels and bridges were built to just clear the trains of the day. Standard
        UK gauge (W6a) barely permits ISO containers on standard wagons. The height and width
        restrictions prevent the use of double-deck passenger trains, large freight containers,
        and standard European rolling stock without modification.
      </p>
      <p>
        Larger gauges (W8, W9, W10, W12) are being progressively cleared on strategic freight
        routes, but each enhancement requires:
      </p>
      <ul>
        <li>Surveying every structure on the route (using mobile laser scanning trains)</li>
        <li>Identifying all pinch points — structures where clearance is insufficient</li>
        <li>Designing and implementing modifications: bridge jacking, track lowering, platform edge trimming, signal repositioning, cable route diversion</li>
        <li>Coordinating possessions for the physical works</li>
      </ul>
      <p>
        The cost is measured in hundreds of millions per route. Yet the benefits — particularly
        for intermodal freight (larger containers = more goods per train = fewer lorries on
        roads) — make gauge clearance a strategic national priority.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png/800px-Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png"
          alt="Diagram comparing UIC loading gauge profiles with ISO container profiles, showing the clearance envelopes"
          loading="lazy"
        />
        <figcaption>
          UIC loading gauge profiles overlaid with ISO container profiles. The loading gauge defines the maximum vehicle cross-section; the structure gauge must always be larger.
          Image: <a href="https://commons.wikimedia.org/wiki/File:Railway_Loading_gauge_UIC_and_containers_profile_-ISO.png" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>
        </figcaption>
      </figure>

      <h3>Platform Height Standards</h3>
      <p>
        Platform height varies significantly across countries and even within the same country:
      </p>
      <ul>
        <li><strong>UK mainline:</strong> 915 mm above rail level — one of the highest in the world, designed for slam-door stock with high floor heights. Enables near-level boarding for most modern rolling stock.</li>
        <li><strong>European standard (TSI):</strong> 550 mm or 760 mm above rail level. The 760 mm standard is used for high-speed and intercity platforms; 550 mm for regional services.</li>
        <li><strong>Low platforms:</strong> Some heritage lines, freight-only lines, and some international systems use platforms as low as 200–300 mm. Passengers must climb steps to board.</li>
      </ul>
      <p>
        Mixed platform heights on the same network create significant vehicle design
        challenges. Trains serving both 550 mm and 760 mm platforms need either retractable
        steps or multi-height doorways. The mismatch between UK 915 mm platforms and
        European 550/760 mm platforms is one reason why through-running of European trains
        to UK domestic stations (beyond the international terminals) is not straightforward.
      </p>

      <Callout type="analogy">
        Loading gauge is an <strong>API schema contract</strong>. The loading gauge is the
        request schema; the structure gauge is the server's capacity to accept that schema.
        If you upgrade your payload (bigger trains, taller containers), every downstream service
        (bridge, tunnel, platform) must be verified and potentially upgraded to handle it.
        It is exactly like upgrading an API version — you must ensure every consumer is
        compatible before deploying, or things break at the interfaces. Platform height
        mismatches are like version incompatibilities — you need adapters (retractable steps)
        or you must upgrade the infrastructure.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l3', label: "Developer's Mental Model", desc: 'Gauge as API contract in the software mapping.' },
        { target: 'm3-l2', label: 'Tunnels & Retaining Walls', desc: 'Tunnels are often the binding gauge constraint.' },
        { target: 'm1-l3', label: 'Switches & Crossings', desc: 'The turnouts that form the station throat.' },
        { target: 'm6-l3', label: 'Wheel-Rail Interface & Gauging', desc: 'The vehicle side of the loading gauge equation.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'What is the difference between "loading gauge" and "structure gauge"?', options: ['They are the same thing', 'Loading gauge is max vehicle envelope; structure gauge is min clearance infrastructure must provide', 'Loading gauge is for bridges; structure gauge for tunnels', 'Loading gauge for freight; structure gauge for passengers'], correct: 1, explanation: 'Loading gauge = maximum vehicle cross-section including dynamic movements. Structure gauge = minimum clearance infrastructure provides. The gap is the safety margin.' },
  { text: 'Why does the UK have a notoriously tight loading gauge?', options: ['UK trains are smaller', 'Victorian-era tunnels and bridges were built to smaller clearances', 'UK regulations are stricter', 'The UK uses narrower rails'], correct: 1, explanation: 'Early construction in the 1830s–1860s created thousands of tight structures. Enlarging them is enormously expensive.' },
  { text: 'What is a "bay platform" at a station?', options: ['A platform facing the sea', 'A dead-end platform where trains arrive/depart from one end', 'A curved platform', 'A maintenance platform'], correct: 1, explanation: 'A bay platform is a stub platform alongside a through platform, commonly used for branch line terminating services.' },
];
