import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M7L3({ goTo }) {
  return (
    <>
      <h3>Passenger Information Systems: From Boards to Broadband</h3>
      <p>
        Getting accurate, timely information to passengers is one of the most visible aspects of
        railway telecommunications. The evolution of <strong>passenger information systems (PIS)</strong>
        mirrors the broader digital transformation of railways. Early systems consisted of printed
        timetable boards and manual announcements by station staff. These gave way to electromechanical
        split-flap (Solari) displays, then to <strong>dot matrix LED displays</strong> capable of
        showing dynamic real-time information, and most recently to full-colour TFT/LCD screens
        that can display rich content including maps, service alerts, and advertising.
      </p>
      <p>
        At a modern station, the <strong>Customer Information System (CIS)</strong> encompasses
        multiple display and audio technologies working in concert:
      </p>
      <ul>
        <li>
          <strong>Main departure boards:</strong> Large LED or LCD screens in concourses showing
          the next 10–20 departures with platform numbers, calling points, expected times, and
          delay/cancellation information.
        </li>
        <li>
          <strong>Platform indicators:</strong> Displays on each platform showing the next 1–3
          services from that platform, with calling points and expected arrival times.
        </li>
        <li>
          <strong>Customer help points:</strong> Interactive screens or audio intercoms providing
          direct communication with a control centre or information staff.
        </li>
        <li>
          <strong>Public address (PA) systems:</strong> Automated and live audio announcements
          covering arrivals, departures, delays, platform changes, and safety information.
          Modern PA systems use <strong>text-to-speech (TTS)</strong> engines to automatically
          generate announcements from data feeds, supplemented by pre-recorded station-specific
          messages and live announcements from staff.
        </li>
        <li>
          <strong>Visual alert systems:</strong> Hearing loops and visual notification displays
          that meet accessibility requirements under the Persons of Reduced Mobility Technical
          Specification for Interoperability (PRM-TSI).
        </li>
      </ul>
      <p>
        All of these systems are driven by a common data source — the real-time train running
        information provided by Darwin or equivalent national systems.
      </p>

      <h3>Darwin Architecture: The Data Engine</h3>
      <p>
        In the UK, the central system that fuses timetable information with real-time train running
        data is called <strong>Darwin</strong> — a real-time data aggregation and prediction platform
        operated by National Rail Enquiries (a subsidiary of the Rail Delivery Group). Darwin is the
        authoritative source of real-time train information for the entire GB rail network, serving
        data to every station departure board, every rail app, and every journey planner in the country.
      </p>
      <p>
        Darwin ingests data from multiple upstream sources:
      </p>
      <ul>
        <li><strong>ITPS (Integrated Train Planning System):</strong> The planned timetable — the baseline schedule that defines every service.</li>
        <li><strong>TRUST (Train Running Under System TOPS):</strong> Real-time train movement events from the signalling system, reporting when each train arrives at, departs from, or passes timing points.</li>
        <li><strong>Train Describer feeds:</strong> Fine-grained train position data from signalling berth-stepping (described below).</li>
        <li><strong>TOC/FOC inputs:</strong> Train Operating Companies and Freight Operating Companies provide cancellation notices, short-formation alerts, and other service-level information.</li>
        <li><strong>Platform allocations:</strong> From station management systems or manual input.</li>
        <li><strong>Delay attribution:</strong> Reasons for delays, fed back from the delay attribution process.</li>
      </ul>
      <p>
        Darwin processes these inputs through <strong>prediction algorithms</strong> that estimate
        future arrival and departure times at all downstream stations. The algorithms account for
        timetabled dwell times, sectional running times, speed restrictions, junction conflicts,
        rolling stock performance characteristics, and historical patterns. When a train is running
        late, Darwin does not simply add the current delay to all future scheduled times; it models
        the likely recovery (or further deterioration) based on the specific circumstances. This is
        why estimated times on departure boards sometimes change non-linearly as a train approaches.
      </p>

      <h3>Darwin Data Distribution: Push Port and APIs</h3>
      <p>
        Darwin distributes its output through several channels:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Interface</th><th>Technology</th><th>Consumers</th><th>Use Case</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Push Port</strong></td>
              <td>Apache ActiveMQ (STOMP protocol), XML messages</td>
              <td>Station CIS systems, TOC back-office systems, data analytics platforms</td>
              <td>Real-time streaming of all train status updates; consumers subscribe to topics and receive push notifications</td>
            </tr>
            <tr>
              <td><strong>OpenLDBWS</strong></td>
              <td>SOAP web service</td>
              <td>Third-party app developers, journey planners</td>
              <td>Request/response queries for departure boards, service details, arrivals at specific stations</td>
            </tr>
            <tr>
              <td><strong>LDBWS Staff</strong></td>
              <td>SOAP web service (extended version)</td>
              <td>Licensed industry users</td>
              <td>Enhanced version with additional fields (e.g., reasons for cancellation, formation data)</td>
            </tr>
            <tr>
              <td><strong>Huxley2</strong></td>
              <td>Open-source REST proxy</td>
              <td>Developers who prefer REST/JSON over SOAP/XML</td>
              <td>Wraps OpenLDBWS in a RESTful JSON API for easier consumption</td>
            </tr>
            <tr>
              <td><strong>Knowledge Base</strong></td>
              <td>XML reference data</td>
              <td>All consumers</td>
              <td>Station codes, TOC codes, CRS codes, and other reference data needed to interpret Darwin messages</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The Push Port is the primary real-time interface. It publishes XML messages for every train
        status change: schedule updates, platform changes, delay reasons, cancellations, and
        formation changes. Consumers connect to the ActiveMQ message broker, subscribe to relevant
        topics, and receive a continuous stream of updates. A typical Push Port feed generates
        thousands of messages per minute during peak hours.
      </p>

      <h3>Onboard PIS and Train Connectivity</h3>
      <p>
        Passenger information is not limited to stations — modern trains carry their own
        <strong>onboard PIS</strong> systems that provide information inside the train. These
        typically include:
      </p>
      <ul>
        <li>
          <strong>Interior display screens:</strong> LCD screens above doors or in vestibules
          showing the next station, calling points, connection information, and service
          disruption messages.
        </li>
        <li>
          <strong>Automated PA announcements:</strong> GPS-triggered or beacon-triggered
          announcements ("The next station is...") using pre-recorded or synthesised speech.
        </li>
        <li>
          <strong>External destination displays:</strong> LED or LCD displays on the train
          exterior showing the service destination and via points.
        </li>
        <li>
          <strong>Seat reservation displays:</strong> Small screens above or beside each seat
          showing reservation status on services that offer reservations.
        </li>
      </ul>
      <p>
        Modern onboard PIS systems receive their data via <strong>cellular connectivity</strong>
        (4G/5G modems on the train roof), which also provides the <strong>passenger Wi-Fi</strong>
        service. The train's onboard network typically aggregates multiple cellular connections
        (bonding connections from different mobile operators for redundancy and bandwidth), and
        distributes internet access and PIS data throughout the train via Ethernet and Wi-Fi access
        points in each coach.
      </p>
      <p>
        The quality of onboard connectivity is a major passenger satisfaction factor and a significant
        engineering challenge. Trains move at high speed through varying terrain — urban areas with
        good cellular coverage, rural areas with sparse coverage, tunnels with no coverage, and
        railway cuttings that attenuate signals. Solutions include trackside small cells (dedicated
        base stations along the route), train-mounted multi-operator SIM arrays, and in-tunnel
        connectivity systems. Some operators are investing in <strong>trackside Wi-Fi</strong>
        infrastructure — a continuous chain of access points along the route that provides
        dedicated high-bandwidth connectivity to passing trains.
      </p>

      <h3>Train Describers: Tracking Every Train</h3>
      <p>
        The data that drives passenger information ultimately originates from the
        <strong> signalling system</strong>. When a train passes a signal or occupies a track
        circuit, the interlocking registers the event. A <strong>train describer (TD)</strong>
        system takes these raw signalling events and associates them with train identities.
        Each train service is assigned a four-character <strong>headcode</strong> (e.g., 1A23)
        that identifies its class, route, and sequence. As the train progresses through the
        signalling system, the train describer "steps" the headcode forward from berth to berth
        (a berth being a defined location in the signalling system, typically a signal or track
        section).
      </p>
      <p>
        The data flow is remarkably elegant: trackside detection equipment (track circuits or
        axle counters) detects the presence of a train. The interlocking registers the occupation
        and reports it to the train describer. The train describer matches the occupation to a
        known train identity and publishes a berth-step message. This message propagates to the
        control centre displays (showing the signaller where every train is), to Darwin (which
        calculates estimated arrival times), and ultimately to the departure boards on platforms
        and the apps on passengers' phones. The entire chain — from wheel touching rail to
        information appearing on a screen — typically completes in under 10 seconds.
      </p>

      <h3>Train Describer Message Types</h3>
      <p>
        Train describer systems communicate using standardised message types. In the UK, the two
        primary message classes are:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Message Class</th><th>Type</th><th>Content</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="4"><strong>S-class (Signalling)</strong></td>
              <td>SF</td>
              <td>Signal state change (aspect change)</td>
              <td>Signal EC410 changed to Green</td>
            </tr>
            <tr>
              <td>SG</td>
              <td>Signal state change to new aspect</td>
              <td>Signal KX001 changed to Double Yellow</td>
            </tr>
            <tr>
              <td>SH</td>
              <td>Signal state change to another aspect</td>
              <td>Signal KX001 changed to Red</td>
            </tr>
            <tr>
              <td>SP / SS</td>
              <td>Route set / cancelled indicators</td>
              <td>Route set from signal EC410 via point 401A</td>
            </tr>
            <tr>
              <td rowSpan="4"><strong>C-class (Train movement)</strong></td>
              <td>CA</td>
              <td>Berth step — train steps from one berth to another</td>
              <td>Headcode 1A23 stepped from berth EC0410 to EC0412</td>
            </tr>
            <tr>
              <td>CB</td>
              <td>Berth cancel — train identity removed from berth (usually at end of journey)</td>
              <td>Headcode 1A23 cancelled from berth KX0001</td>
            </tr>
            <tr>
              <td>CC</td>
              <td>Berth interpose — train identity manually placed in berth (e.g., at origin station)</td>
              <td>Headcode 1A23 interposed into berth EC0401</td>
            </tr>
            <tr>
              <td>CT</td>
              <td>Heartbeat — periodic message confirming the TD link is alive</td>
              <td>TD area EC heartbeat at 14:30:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>C-class messages</strong> are the primary source of real-time train position data. The
        CA (berth step) message is the most common and most important — it indicates that a known
        train has moved from one location to another. These messages are published to the Network
        Rail data feeds and consumed by TRUST, Darwin, and numerous other downstream systems.
        <strong>S-class messages</strong> provide signalling state information — signal aspects, route
        settings, and track circuit states — which are used by control centre displays and can be
        analysed to understand junction utilisation, signal approach patterns, and infrastructure
        performance.
      </p>
      <p>
        Each train describer covers a defined geographic area (typically aligned with a signalling
        control area) and publishes messages to a feed identified by the TD area code (a two-character
        identifier like "EC" for East Coast, "WA" for Waterloo, etc.). The Network Rail Open Data
        platform provides access to TD feeds for registered developers, enabling third-party
        applications to track train movements in near-real-time.
      </p>

      <h3>Automatic Route Setting (ARS)</h3>
      <p>
        In a modern signalling control centre, the signaller does not manually set every route for
        every train. <strong>Automatic Route Setting (ARS)</strong> is a software system that
        automatically sets routes (clears signals and moves points) for trains according to the
        timetable, freeing signallers to focus on exception handling and disruption management.
      </p>
      <p>
        The ARS algorithm works by maintaining a model of the current track state (which sections
        are occupied, which routes are set, which signals are showing what aspect) and the planned
        timetable (which train is due at which location at what time). For each approaching train,
        ARS calculates the optimal time to set the route — typically a few minutes before the train
        arrives — considering:
      </p>
      <ul>
        <li>
          <strong>Timetable compliance:</strong> Routes are set to deliver trains according to
          the planned schedule, maintaining the correct order and timing.
        </li>
        <li>
          <strong>Conflict resolution:</strong> When two trains need conflicting routes through
          a junction, ARS uses priority rules (typically based on the timetable and delay status)
          to determine which train goes first.
        </li>
        <li>
          <strong>Route availability:</strong> ARS will not attempt to set a route if the points
          are locked by another route, if the track sections are occupied, or if there are any
          safety restrictions in place.
        </li>
        <li>
          <strong>Advance route setting:</strong> ARS aims to set routes far enough in advance
          that trains see a clear signal sequence (green or double-yellow) and do not need to
          brake unnecessarily, improving line speed and capacity.
        </li>
        <li>
          <strong>Regulation decisions:</strong> In some implementations, ARS can make simple
          regulation decisions — for example, holding a train at a platform for an additional
          30 seconds to improve a connection or to let a faster train pass on an adjacent line.
        </li>
      </ul>
      <p>
        During normal operation, ARS handles 80–95% of route-setting automatically. The signaller
        monitors the system and intervenes when the situation departs from the timetable — for
        example, during disruption when trains are running out of sequence, or when special
        movements (engineering trains, light engine movements) need manual routing. The signaller
        can override ARS at any time, and ARS will not set a route that the interlocking considers
        unsafe — it works within the safety envelope provided by the interlocking, not outside it.
      </p>

      <h3>Centralised Control Centres</h3>
      <p>
        The trend in modern railway operation is towards <strong>centralised control centres</strong>
        that integrate multiple functions previously handled in separate locations. A traditional
        railway might have signallers in local signal boxes, electrical controllers in traction
        power control rooms, incident managers in a separate operations centre, and passenger
        information staff at individual stations. A modern integrated control centre brings all
        of these functions together under one roof, enabling faster decision-making and better
        coordination during disruption.
      </p>
      <p>
        Network Rail's <strong>Rail Operating Centres (ROCs)</strong> are the UK example of this
        approach. Each ROC controls signalling across a wide geographic area using workstation-based
        signalling controls (replacing traditional lever frames and panel displays), monitors
        traction power distribution, manages incidents, coordinates passenger information, and
        interfaces with train operators and emergency services. The ROC concept consolidates
        what was previously distributed across hundreds of signal boxes into roughly a dozen
        large centres, each staffed 24/7 with signallers, electrical controllers, incident
        officers, and customer information specialists.
      </p>

      <h3>Traffic Management Systems (TMS)</h3>
      <p>
        Beyond basic ARS, modern control centres increasingly use sophisticated <strong>Traffic
        Management Systems (TMS)</strong> that provide a higher level of operational intelligence.
        While ARS automates route setting for individual trains, a TMS takes a network-wide view
        and optimises the overall flow of traffic, resolving conflicts and minimising total delay
        across the network.
      </p>
      <p>
        Key TMS platforms used on the UK railway include:
      </p>
      <ul>
        <li>
          <strong>IECC (Integrated Electronic Control Centre):</strong> The original Network Rail
          workstation-based signalling control system, providing electronic route setting with
          ARS capability. IECC replaced panel signal boxes from the 1990s onward and remains
          in widespread use.
        </li>
        <li>
          <strong>Gemini:</strong> A more recent signalling control system with enhanced TMS
          capabilities, including improved conflict prediction, better decision-support tools
          for signallers during disruption, and tighter integration with passenger information
          and traction power SCADA.
        </li>
        <li>
          <strong>Luminate (formerly TM):</strong> Network Rail's next-generation Traffic
          Management system, designed to provide network-wide optimisation. Luminate uses
          advanced algorithms to predict conflicts 30–60 minutes ahead, suggest optimal
          regulation strategies, and calculate the network-wide impact of different
          operational decisions.
        </li>
      </ul>
      <p>
        A TMS differs from simple ARS in that it considers the <strong>global optimum</strong>
        rather than just the local situation at each junction. For example, ARS at a junction might
        give priority to the train that arrives first, but a TMS might recognise that holding that
        train for 60 seconds would allow a heavily delayed connecting service to pass first,
        reducing total passenger delay across the network. This kind of network-level optimisation
        requires real-time data about every train on the network, sophisticated prediction
        algorithms, and decision-support tools that present options to the signaller or controller.
      </p>

      <h3>Video Walls and Display Technologies</h3>
      <p>
        The visual centrepiece of a modern control centre is the <strong>video wall</strong> — a
        large-format display system that presents the geographic overview of the controlled area,
        showing track layout, train positions, signal aspects, and traction power status. Video
        walls serve as the shared situational awareness display for the entire control room team.
      </p>
      <p>
        Modern video walls use several technologies:
      </p>
      <ul>
        <li>
          <strong>Rear-projection cubes:</strong> DLP (Digital Light Processing) projection units
          tiled together. Each cube is an independent display unit, and they are arranged in a
          grid to create a seamless large display. This was the dominant technology for control
          room video walls for many years due to reliability and image quality.
        </li>
        <li>
          <strong>Narrow-bezel LCD panels:</strong> Thin-bezel LCD screens tiled together. Modern
          panels have bezels as thin as 0.88 mm, making the joins nearly invisible. Lower cost
          than rear-projection but requires more careful calibration to match brightness and
          colour across panels.
        </li>
        <li>
          <strong>LED direct-view displays:</strong> Arrays of LED modules creating a seamless
          display with no bezels at all. Increasingly favoured for new installations due to
          zero-bezel appearance, high brightness, and excellent viewing angles. Pixel pitch
          (typically 1.2–2.5 mm for control room applications) determines the minimum
          comfortable viewing distance.
        </li>
      </ul>
      <p>
        The video wall is driven by a <strong>video wall controller</strong> — a specialised
        computing system that composites multiple input sources (signalling overview, CCTV feeds,
        SCADA displays, weather information) and distributes them across the display surface. The
        controller allows operators to dynamically resize and reposition windows, zoom into areas
        of interest, and bring up additional information sources as needed.
      </p>

      <h3>Human Factors in Control Room Design</h3>
      <p>
        The design of a railway control room is not just a technology challenge — it is a
        <strong>human factors</strong> challenge. Operators work 8–12 hour shifts monitoring complex
        systems, making safety-critical decisions under time pressure, and coordinating with
        multiple teams. Poor control room design leads to fatigue, errors, missed alarms, and
        slower response to incidents.
      </p>
      <p>
        <strong>ISO 11064</strong> (Ergonomic design of control centres) provides the framework
        for control room design, covering:
      </p>
      <ul>
        <li>
          <strong>Workstation layout:</strong> Optimal positioning of screens, input devices,
          and communication equipment to minimise head and eye movement. Primary displays should
          be within 15 degrees of the operator's natural line of sight; secondary information
          within 30 degrees.
        </li>
        <li>
          <strong>Lighting:</strong> Controlled ambient lighting (typically 300–500 lux) that
          allows screen readability without glare, with task lighting for paper-based activities.
          Windows require automated blinds to control daylight.
        </li>
        <li>
          <strong>Noise:</strong> Background noise levels below 45 dB(A) for tasks requiring
          concentration, with acoustic treatment to manage noise from multiple operators,
          telephones, and equipment.
        </li>
        <li>
          <strong>Alarm management:</strong> A rationalised alarm system that presents only
          actionable alarms at an appropriate rate (ISO 11064 guidance suggests no more than
          6–12 alarms per operator per hour during normal operation). Alarm floods during
          incidents must be managed by suppression, shelving, and prioritisation so that
          critical alarms are not lost in noise.
        </li>
        <li>
          <strong>Colour coding and symbology:</strong> Standardised use of colour and symbols
          across all displays, so that information is immediately interpretable. Red for danger
          / occupied, green for clear, yellow for caution — applied consistently across
          signalling, SCADA, and passenger information displays.
        </li>
        <li>
          <strong>Team coordination:</strong> The physical layout must support communication
          between roles — signallers need to confer with electrical controllers, incident
          managers need line of sight to the signalling overview, and customer information
          staff need access to operational status. The layout should facilitate this without
          creating excessive noise or distraction.
        </li>
      </ul>

      <div className="highlight-box">
        <p>
          Research into control room incidents consistently shows that the majority of operational
          errors are not caused by technology failures but by <strong>human factors</strong>: alarm
          fatigue (operators ignoring or acknowledging alarms without investigating), mode confusion
          (not understanding the current state of an automated system), and communication failures
          (between roles or between shifts). Good control room design directly mitigates these
          risks and is as much a safety investment as the signalling interlocking itself.
        </p>
      </div>

      <h3>Modern Control Room Software Architecture</h3>
      <p>
        The software systems in a modern control centre are complex, safety-critical, and highly
        integrated. The signalling control system presents a geographic overview of track layout,
        signal aspects, point positions, and train locations on large video walls and individual
        workstations. Operators interact through a point-and-click interface to set routes, place
        or remove restrictions, and manage the ARS system.
      </p>
      <p>
        Alongside the signalling system, the control centre runs traction power SCADA displays
        (showing substation status, feeder currents, and section switch positions), CCTV systems
        (aggregating feeds from hundreds of platform and level crossing cameras), the train
        describer display (showing the real-time position map of every train), and communications
        systems (GSM-R voice terminals, telephone recording, and intercom). All of these systems
        must interoperate. When an incident occurs — say a traction power fault causing a section
        to de-energise — the SCADA system alerts the electrical controller, the signalling system
        shows affected signals reverting to red, the train describer shows trains stopping, and
        the incident management system is activated to coordinate the response and push passenger
        information updates. This integrated view, with all systems visible in a single space,
        dramatically reduces response times compared to the old model of separate control rooms
        communicating by telephone.
      </p>
      <p>
        Modern control centre architectures are increasingly moving toward <strong>service-oriented
        and microservice-based designs</strong>, where individual functional components (signalling
        HMI, SCADA display, train describer, ARS, TMS, CCTV viewer) are independently developed
        and deployed services that communicate through defined APIs and message brokers. This
        architectural approach improves maintainability, allows individual components to be updated
        without replacing the entire system, and enables integration of new data sources and
        applications as they become available.
      </p>

      <Callout type="analogy">
        The data pipeline from timetable to train describer to passenger display is a
        <strong> real-time streaming architecture</strong>. The trackside detection is the event
        source (like a Kafka producer emitting click events). The train describer is the stream
        processor (a Kafka Streams or Flink job) that enriches raw events with state (train
        identity). Darwin is the downstream consumer that joins the stream with a reference
        dataset (the timetable), applies windowed aggregations (arrival time predictions), and
        publishes to multiple sinks (departure boards, web APIs, mobile push notifications).
        The whole system is event-driven, near-real-time, and must handle thousands of events
        per second with low latency. The Push Port is literally an ActiveMQ message broker —
        this is enterprise messaging middleware running at national scale. ARS is like an
        auto-scaling controller or Kubernetes scheduler — it makes routine decisions autonomously
        based on declared intent (the timetable), but escalates exceptions to the human operator
        (the signaller). The TMS is like a fleet orchestrator that optimises across the whole
        cluster rather than making decisions per-node. And the control room video wall is your
        Grafana dashboard — a single pane of glass showing all the metrics that matter, designed
        so that a human can spot anomalies at a glance.
      </Callout>

      <Callout type="info" label="Open Data">
        The UK's Darwin data feeds are available as open data, enabling third-party developers
        to build apps and services on top of real-time train running information. The Huxley2
        open-source proxy and the National Rail OpenLDBWS SOAP/REST APIs provide access to
        departure boards, service details, and real-time predictions. Network Rail's Open Data
        Feeds provide direct access to train describer (TD) messages, TRUST movements, and
        timetable data via authenticated STOMP connections. This open data ecosystem has spawned
        dozens of independent rail apps, journey planners, and data visualisations — a rare
        example of a safety-critical industry embracing open data principles.
      </Callout>

      <Callout type="info" label="Key Standards">
        ISO 11064 governs ergonomic design of control centres. IEC 62682 provides guidance on
        alarm management. The Darwin system interfaces are documented by National Rail Enquiries.
        Network Rail Open Data feeds are specified in the NROD wiki. Train describer message
        formats follow the Signal Box Area ID and Berth naming conventions defined in Network
        Rail's sectional appendices.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l2', label: 'Interlockings', desc: 'Train describers derive their data directly from interlocking indications and track circuit states.' },
        { target: 'm8-l1', label: 'Timetable Planning', desc: 'The planned timetable is the baseline against which all real-time information is compared, and ARS uses it to set routes automatically.' },
        { target: 'm6-l1', label: 'Rolling Stock Types', desc: 'Onboard passenger information systems receive data from Darwin and display it within the train.' },
        { target: 'm4-l3', label: 'ETCS & Moving Block', desc: 'Under ETCS Level 2/3, train position data comes from the RBC rather than traditional track circuits, changing how train describers work.' },
        { target: 'm7-l2', label: 'Fibre Networks & SCADA', desc: 'All control centre systems depend on the fibre backbone for data transport, and SCADA displays are integrated alongside signalling controls.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'What is a "train describer" in railway operations?', options: ['A printed timetable showing train descriptions to passengers', 'A system that tracks train identities (headcodes) as they move through the signalling system, passing the identity from one berth to the next as track circuits activate', 'A database containing technical specifications of every locomotive', 'A radio system where drivers describe their train consist to the signaller'], correct: 1, explanation: 'Train describers automatically step a four-character train identity (headcode like 1A42) from berth to berth as the train occupies and clears track circuits. This gives signallers and downstream systems a real-time picture of which train is where, forming the basis of all passenger information and performance monitoring.' },
  { text: 'What is the data pipeline from train detection to a passenger departure screen?', options: ['GPS on trains sends location directly to platform screens', 'Track circuits/axle counters detect the train → the train describer identifies it → the control system calculates expected times → data is published to Darwin/feeds → departure boards display the information', 'Drivers manually radio their position, which is typed into the display system by station staff', 'Satellite tracking feeds a central AI that predicts arrivals'], correct: 1, explanation: 'The pipeline starts with physical detection (track circuits or axle counters), which feeds the train describer to identify the train. Timetable and real-time data are combined in systems like TRUST, published via Darwin (the UK data feed), and consumed by station departure boards, apps, and websites — a chain of systems from trackside sensor to passenger screen.' },
  { text: 'What role does a centralised control centre play in modern railway operations?', options: ['It replaces all local signal boxes but has no involvement in passenger information', 'It integrates signalling control, train regulation, incident management, and information coordination into one location, enabling a unified operational view and faster decision-making', 'It only manages freight movements, not passenger services', 'It is purely an administrative office with no real-time operational function'], correct: 1, explanation: 'Modern control centres (like the UK Rail Operating Centres) bring together signallers, train controllers, information staff, and incident managers in one room. This co-location dramatically improves communication and decision speed during disruption compared to the traditional model of hundreds of separate signal boxes.' },
  { text: 'What is Darwin in the context of UK railway passenger information?', options: ['A biological research programme funded by Network Rail', 'A national real-time data feed that aggregates timetable, train running, and disruption information and distributes it to apps, websites, and station displays', 'A software tool used only by train drivers to view their schedule', 'An internal staff rostering system for train operating companies'], correct: 1, explanation: 'Darwin is the UK rail industry data hub operated by National Rail Enquiries. It ingests schedule data, real-time train movements from TRUST, and operator-entered disruption messages, then publishes a unified feed that third-party apps (Trainline, Citymapper, etc.) and station departure boards consume to show passengers accurate live information.' },
];
