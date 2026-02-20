import { FibreRingTopology } from '../../../components/symbols';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M7L2({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <FibreRingTopology style={{ maxWidth: '280px' }} />
        </div>
        <figcaption>Schematic: Fibre optic network in resilient ring topology — if one link fails, traffic reroutes the other way.</figcaption>
      </figure>

      <h3>The Railway Fibre Backbone</h3>
      <p>
        Modern railways are underlaid by extensive <strong>fibre optic networks</strong> that run
        alongside the track in cable troughs, buried ducts, or strung from overhead line equipment
        structures. These fibre backbones carry an enormous variety of data: signalling commands
        and indications between interlockings and control centres, CCTV feeds from stations and
        level crossings, voice and data traffic for operational telephony, passenger information
        system updates, traction power SCADA telemetry, train describer data, and increasingly
        the backhaul for GSM-R and FRMCS base stations. A major railway route may have fibre cables
        containing 48, 96, or even 288 individual fibres, with each fibre capable of carrying tens
        of gigabits per second using wavelength-division multiplexing (WDM).
      </p>
      <p>
        Railway fibre networks have a significant advantage over commercial telecoms in one respect:
        they follow <strong>linear corridors</strong> that connect major population centres, which
        is exactly the topology that long-haul telecoms networks need. Many railway infrastructure
        managers lease spare fibre capacity (or dark fibre) to commercial telecommunications
        providers, generating revenue that helps fund railway maintenance. Network Rail's subsidiary
        Network Rail Telecom, for example, operates one of the largest fibre networks in the UK,
        with commercial telecoms companies paying to use spare fibres that run alongside the tracks.
        This symbiotic relationship means that the railway's telecom infrastructure is often far
        more capable than what the railway itself needs operationally.
      </p>

      <h3>Network Topology: Core, Distribution, and Access</h3>
      <p>
        A well-designed railway telecoms network follows a <strong>three-tier hierarchical
        architecture</strong>, analogous to the core/distribution/access model used in enterprise
        networking:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Layer</th><th>Function</th><th>Typical Equipment</th><th>Locations</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Core</strong></td>
              <td>High-capacity backbone connecting major nodes; carries aggregated traffic between regions</td>
              <td>DWDM optical transponders, core routers, SDH/OTN multiplexers</td>
              <td>Major control centres, data centres, regional hubs (typically 5–15 per national network)</td>
            </tr>
            <tr>
              <td><strong>Distribution</strong></td>
              <td>Aggregates traffic from access nodes and routes it to the core; provides resilient ring structures</td>
              <td>CWDM/DWDM mux, MPLS PE routers, Ethernet aggregation switches</td>
              <td>Major stations, signalling centres, junctions (every 20–50 km along routes)</td>
            </tr>
            <tr>
              <td><strong>Access</strong></td>
              <td>Connects end devices (signals, CCTV cameras, phones, SCADA RTUs) to the distribution layer</td>
              <td>Industrial Ethernet switches, media converters, serial-to-IP gateways</td>
              <td>Signal equipment rooms, lineside equipment rooms, stations, substations</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The core layer typically operates at 10 Gbps or 100 Gbps per wavelength, with multiple
        wavelengths per fibre. The distribution layer runs at 1–10 Gbps, and the access layer
        connects end devices at 100 Mbps to 1 Gbps. This hierarchical structure allows the
        network to scale efficiently: adding a new CCTV camera at a station only affects the
        local access switch and its uplink to the distribution layer, without impacting the core.
      </p>

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Photo of fibre optic cable trough running alongside railway track, or a railway equipment room showing fibre patch panels, Ethernet switches, and DWDM equipment in standard rack cabinets.</p>
        </div>
        <figcaption>Railway fibre backbone — cables running alongside the track carry signalling, CCTV, SCADA, and communication data at gigabit speeds.</figcaption>
      </figure>

      <h3>DWDM and CWDM on Railway Fibre</h3>
      <p>
        <strong>Wavelength Division Multiplexing (WDM)</strong> is the technology that makes railway
        fibre networks so versatile. Instead of using a single wavelength of light on each fibre,
        WDM sends multiple wavelengths (colours) simultaneously, each carrying an independent data
        stream. This effectively multiplies the capacity of each fibre by the number of wavelengths.
      </p>
      <p>
        Two variants are used on railway networks:
      </p>
      <ul>
        <li>
          <strong>CWDM (Coarse WDM):</strong> Uses widely spaced wavelengths (20 nm apart),
          supporting up to 18 channels per fibre. CWDM is lower cost because it uses
          uncooled lasers, but supports shorter distances (typically up to 80 km without
          amplification). Used on the distribution layer where moderate capacity is needed
          at reasonable cost.
        </li>
        <li>
          <strong>DWDM (Dense WDM):</strong> Uses tightly spaced wavelengths (0.8 nm or less apart),
          supporting 40, 80, or even 96+ channels per fibre. DWDM requires temperature-stabilised
          lasers and optical amplifiers (EDFAs) but can carry enormous capacity over long distances.
          Used on the core backbone where maximum capacity and reach are needed.
        </li>
      </ul>
      <p>
        The practical benefit is that different railway systems can each be assigned their own
        wavelength on the same fibre: one wavelength for signalling, another for SCADA, another for
        CCTV, another for operational telephony, and so on. Each wavelength is logically independent,
        providing isolation between different traffic types without needing separate physical fibres.
        If a new application needs connectivity (say, a new FRMCS backhaul service), a new wavelength
        can be provisioned on the existing fibre without disturbing anything already running.
      </p>

      <h3>From SDH to IP/MPLS: The Transmission Migration</h3>
      <p>
        Many railway fibre networks were originally built using <strong>SDH (Synchronous Digital
        Hierarchy)</strong> transmission technology — the standard backbone technology of the 1990s
        and 2000s. SDH provides fixed-bandwidth circuits with deterministic latency and
        <strong>sub-50ms protection switching</strong> (automatic rerouting around a fibre break in
        under 50 milliseconds). These characteristics made SDH ideal for carrying safety-critical
        signalling data, where predictable performance matters more than raw bandwidth efficiency.
      </p>
      <p>
        However, SDH is a circuit-switched technology that allocates fixed bandwidth whether or not
        it is being used, making it inefficient for bursty IP traffic like CCTV, web browsing, and
        file transfers. As more railway applications become IP-based, infrastructure managers are
        migrating their backbone networks to <strong>IP/MPLS (Multi-Protocol Label Switching)</strong>.
        MPLS provides the traffic engineering, QoS guarantees, and fast reroute capabilities that
        railways need, while efficiently supporting both legacy circuit-emulation services (for older
        signalling equipment that still expects SDH-like interfaces) and modern IP services.
      </p>

      <div className="highlight-box">
        <p>
          The migration from SDH to IP/MPLS is one of the most significant — and most delicate —
          infrastructure transformations on modern railways. Signalling systems designed to run over
          SDH circuits must be migrated to IP-based transport without any interruption to service.
          This typically involves <strong>circuit emulation services (CES)</strong> that make the
          MPLS network appear as a traditional SDH circuit to legacy equipment, allowing gradual
          migration without requiring simultaneous replacement of all end equipment.
        </p>
      </div>

      <h3>Network Architecture and Resilience</h3>
      <p>
        Railway fibre networks are typically configured in <strong>ring topologies</strong> to
        provide resilience. If a cable is cut at one point (a frequent occurrence during construction
        work, cable theft, or flooding), traffic can be rerouted around the ring in the opposite
        direction. The transmission technology provides automatic protection switching that restores
        connectivity within 50 milliseconds of a fibre break — fast enough that signalling systems
        do not lose communication.
      </p>
      <p>
        Modern MPLS networks implement multiple resilience mechanisms:
      </p>
      <ul>
        <li>
          <strong>Fast Reroute (FRR):</strong> Pre-computed backup paths that traffic can switch
          to within 50 ms of detecting a link failure, matching SDH protection performance.
        </li>
        <li>
          <strong>Dual-homing:</strong> Critical sites (control centres, major interlockings) are
          connected to two different distribution nodes via diverse fibre routes, so that a
          single cable cut cannot isolate the site.
        </li>
        <li>
          <strong>Geographic diversity:</strong> Ring fibres are routed via physically different
          paths where possible (e.g., one fibre along the up line, one along the down line, or
          one along the railway and one via a third-party duct route) to minimise the risk of a
          single incident (such as a contractor cutting through a cable trough) severing both paths.
        </li>
      </ul>

      <h3>Lineside Equipment Rooms (LERs)</h3>
      <p>
        The active network equipment that connects the fibre backbone to end devices is housed in
        <strong>Lineside Equipment Rooms (LERs)</strong> — small, secure buildings or cabinets
        located at intervals along the railway. LERs are the railway equivalent of a telecommunications
        exchange or a network PoP (Point of Presence). They typically contain:
      </p>
      <ul>
        <li>Network switches and routers for the distribution and access layers</li>
        <li>Optical fibre termination panels and patch frames</li>
        <li>Power distribution boards with battery backup (typically 2–8 hours autonomy)</li>
        <li>SCADA Remote Terminal Units (RTUs) for local infrastructure monitoring</li>
        <li>GSM-R or FRMCS base station equipment (where co-located)</li>
        <li>Environmental monitoring sensors (temperature, humidity, intrusion detection)</li>
      </ul>
      <p>
        The environment inside an LER must be carefully controlled. Railway equipment rooms face
        extreme conditions: temperatures can range from -25 to +55 degrees C (particularly in
        unventilated metal cabinets in summer sun), humidity varies with weather and ventilation,
        and electromagnetic interference from traction power systems and passing trains can be
        severe. Equipment must be rated for extended temperature ranges (typically EN 50155 for
        railway rolling stock applications or EN 50121 for EMC compliance). Power supplies must
        handle the voltage fluctuations common on railway DC distribution systems, and battery
        backup ensures continued operation during power interruptions.
      </p>

      <h3>SCADA: Supervisory Control and Data Acquisition</h3>
      <p>
        <strong>SCADA (Supervisory Control and Data Acquisition)</strong> systems are the eyes and
        hands of railway infrastructure management. A SCADA system collects real-time data from
        sensors distributed across the railway and presents it to operators in a control centre,
        allowing them to monitor conditions and send commands to remote equipment. In the railway
        context, SCADA monitors and controls a wide range of assets:
      </p>
      <ul>
        <li><strong>Point heaters:</strong> Electric heaters fitted to switches and crossings to prevent them freezing in winter. SCADA monitors ambient temperature and activates heaters automatically or on operator command.</li>
        <li><strong>Pumping stations:</strong> Railways in low-lying areas or with deep cuttings need pumps to remove groundwater and rainwater. SCADA monitors water levels and pump status, alerting operators to failures before flooding occurs.</li>
        <li><strong>Tunnel ventilation:</strong> Fans in long tunnels that manage air quality, temperature, and smoke extraction in emergencies. SCADA controls fan speed and direction and monitors air quality sensors.</li>
        <li><strong>Traction power switchgear:</strong> Circuit breakers and isolators in substations and track sectioning points. SCADA allows remote switching of power sections for maintenance or fault isolation without sending a technician to site.</li>
        <li><strong>Level crossing equipment:</strong> Barrier mechanisms, warning lights, and detection loops at road-rail interfaces. SCADA monitors equipment health and logs operational events.</li>
        <li><strong>Bridge and tunnel monitoring:</strong> Structural sensors, water level gauges at river crossings, and movement detectors on bridges and embankments.</li>
        <li><strong>Lineside equipment rooms:</strong> Temperature, humidity, power supply status, and intruder alarms in remote equipment cabinets.</li>
      </ul>

      <h3>SCADA Protocols and Data Transport</h3>
      <p>
        The communication between SCADA field devices (sensors, actuators, RTUs) and the central
        SCADA master station uses specialised protocols designed for reliable telemetry over
        potentially unreliable communication links:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Protocol</th><th>Standard</th><th>Characteristics</th><th>Railway Usage</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>IEC 60870-5-101</strong></td>
              <td>IEC</td>
              <td>Serial (RS-232/485), poll-response, low bandwidth</td>
              <td>Legacy installations, serial links to older RTUs</td>
            </tr>
            <tr>
              <td><strong>IEC 60870-5-104</strong></td>
              <td>IEC</td>
              <td>TCP/IP based, event-driven with spontaneous reporting, standardised timestamps</td>
              <td>Most new railway SCADA deployments in Europe; the de facto standard for IP-based railway SCADA</td>
            </tr>
            <tr>
              <td><strong>DNP3</strong></td>
              <td>IEEE 1815</td>
              <td>TCP or serial, multi-drop, robust error checking, report-by-exception</td>
              <td>Common in North American railways and some UK installations</td>
            </tr>
            <tr>
              <td><strong>OPC-UA</strong></td>
              <td>IEC 62541</td>
              <td>Platform-independent, service-oriented, built-in security, information modelling</td>
              <td>Emerging standard for next-generation systems; enables SCADA-to-IT integration and data analytics platforms</td>
            </tr>
            <tr>
              <td><strong>Modbus TCP</strong></td>
              <td>Modbus.org</td>
              <td>Simple register-based protocol, widely supported, minimal security</td>
              <td>Simple devices (temperature sensors, power meters) where full SCADA protocol is overkill</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        IEC 60870-5-104 (often shortened to "IEC 104") is the dominant protocol for new railway SCADA
        installations in Europe. It supports spontaneous event reporting (the RTU sends data when a
        state changes, rather than waiting to be polled), timestamped data (essential for post-incident
        analysis), and a structured information model that standardises how different types of
        measurement and command are represented.
      </p>
      <p>
        The trend in newer systems is toward <strong>OPC-UA (Unified Architecture)</strong>, which
        provides a richer information model, built-in security (encryption, authentication,
        authorisation), and platform independence. OPC-UA also bridges the traditional gap between
        SCADA (Operational Technology / OT) and enterprise IT systems, enabling SCADA data to be
        consumed directly by analytics platforms, digital twin applications, and asset management
        systems without custom protocol translation.
      </p>

      <h3>Remote Condition Monitoring and IoT</h3>
      <p>
        Traditionally, railway infrastructure was maintained by regular manual inspection: a
        technician walking the track, checking point mechanisms, verifying signal lamp voltages,
        and inspecting lineside equipment. This approach is labour-intensive, exposes workers to
        the hazards of the railway environment, and can only detect failures after they have
        occurred (or are visibly imminent). SCADA and remote condition monitoring represent a
        fundamental shift towards <strong>predictive and condition-based maintenance</strong>.
      </p>
      <p>
        Modern SCADA systems do far more than simple alarm monitoring. They capture time-series
        data that reveals trends: a point machine taking progressively longer to complete its
        stroke indicates developing mechanical resistance that will eventually cause a failure.
        Pump run-times increasing over weeks suggest rising water tables or deteriorating pump
        performance. By analysing these trends, maintenance teams can intervene before a failure
        disrupts train services — the difference between a planned overnight repair and an
        emergency closure during the morning peak.
      </p>
      <p>
        Beyond traditional SCADA, railways are increasingly deploying <strong>IoT (Internet of Things)
        sensors</strong> for more granular condition monitoring:
      </p>
      <ul>
        <li>
          <strong>Vibration monitoring:</strong> Accelerometers mounted on bearings, rail joints,
          and bridge structures detect developing mechanical faults through changes in vibration
          signature. Frequency-domain analysis can distinguish between different failure modes
          (e.g., bearing wear vs. rail corrugation vs. loose fastening).
        </li>
        <li>
          <strong>Acoustic monitoring:</strong> Microphones mounted trackside listen for the
          characteristic sounds of flat wheels, cracked rails, or failing bearings as trains
          pass. Machine learning classifiers can identify specific defect types from audio
          patterns.
        </li>
        <li>
          <strong>Temperature and strain gauges:</strong> Continuous monitoring of rail temperature
          (critical for predicting rail buckling in hot weather) and structural strain on bridges
          and viaducts.
        </li>
        <li>
          <strong>Weather stations:</strong> Lineside weather sensors providing localised wind
          speed, temperature, rainfall, and humidity data for operational decision-making
          (e.g., imposing speed restrictions during high winds).
        </li>
        <li>
          <strong>Water level sensors:</strong> Ultrasonic or pressure-based sensors in drainage
          systems, culverts, and at flood-prone locations, providing early warning of flooding.
        </li>
      </ul>

      <h3>Digital Twin Concepts for Infrastructure</h3>
      <p>
        The concept of a <strong>digital twin</strong> — a continuously updated digital replica of a
        physical asset — is gaining traction in railway infrastructure management. A digital twin of a
        railway route would integrate data from multiple sources: the design-as-built 3D model,
        real-time SCADA and IoT sensor data, historical maintenance records, inspection reports,
        traffic loading data, and environmental conditions. This integrated model allows engineers
        to visualise the current state of the infrastructure, simulate the effect of different
        maintenance interventions, and predict future degradation.
      </p>
      <p>
        For example, a digital twin of a bridge might combine the structural finite element model
        (from original design), real-time strain gauge and accelerometer data (from IoT sensors),
        traffic loading records (from train describer data showing the mass and speed of every
        crossing), temperature records (from weather stations), and inspection photographs (from
        drone surveys). By feeding all of this into a structural analysis engine, the twin can
        estimate remaining structural life, flag locations where degradation is accelerating, and
        recommend optimal maintenance timing.
      </p>
      <p>
        Digital twins are still in relatively early adoption on railways, but pilot projects are
        demonstrating significant benefits: reduced inspection costs (by targeting inspections where
        the twin indicates concern), better maintenance planning (by predicting failures before they
        cause operational impact), and improved renewal planning (by understanding true asset condition
        rather than relying on age-based assumptions).
      </p>

      <h3>Cybersecurity for Operational Technology (OT) Networks</h3>
      <p>
        Railway SCADA and condition monitoring systems are <strong>Operational Technology (OT)</strong>
        networks — they control physical processes and equipment, not just process data. A
        cybersecurity breach in an OT network has fundamentally different consequences from an IT
        breach: rather than data theft or service disruption, the risk is physical damage, safety
        incidents, or loss of control over critical infrastructure.
      </p>
      <p>
        The convergence of OT and IT networks — driven by the migration to IP-based SCADA protocols,
        IoT sensor deployments, and the desire to integrate operational data with enterprise
        analytics — creates new attack vectors that did not exist when SCADA systems ran on isolated
        serial networks. Key cybersecurity principles for railway OT include:
      </p>
      <ul>
        <li>
          <strong>Network segmentation:</strong> OT networks must be isolated from corporate IT
          networks and the internet by industrial demilitarised zones (DMZ) with firewalls and
          data diodes. Data can flow from OT to IT for analytics, but IT systems should never
          have direct access to OT control functions.
        </li>
        <li>
          <strong>Secure-by-design protocols:</strong> Migrating from legacy protocols (like
          Modbus, which has no authentication) to secure protocols (like OPC-UA with TLS
          encryption) reduces the attack surface at the protocol level.
        </li>
        <li>
          <strong>Intrusion detection:</strong> Network monitoring tools that understand OT
          protocols can detect anomalous traffic patterns that might indicate an attack — for
          example, an unexpected SCADA command being sent to a traction power circuit breaker.
        </li>
        <li>
          <strong>Supply chain security:</strong> Ensuring that firmware updates for RTUs, PLCs,
          and network equipment come from verified sources and have not been tampered with.
        </li>
        <li>
          <strong>Incident response:</strong> OT-specific incident response plans that account
          for the safety implications of taking systems offline — you cannot simply "patch and
          reboot" a SCADA system that is currently controlling live traction power distribution.
        </li>
      </ul>
      <p>
        The integration of SCADA data with asset management systems creates a powerful feedback
        loop: real-time condition data informs maintenance planning, maintenance records are linked
        to asset performance histories, and the whole system feeds into lifecycle cost models that
        guide renewal and investment decisions. This data-driven approach to infrastructure
        management is one of the most significant transformations occurring in railway engineering
        today — but it must be built on a foundation of robust cybersecurity.
      </p>

      <Callout type="analogy">
        The three-tier railway telecoms architecture is <strong>exactly like a cloud-native
        application stack</strong>. The core fibre network is your cloud backbone (AWS Transit
        Gateway or Azure Virtual WAN). The distribution layer is your regional VPCs with their
        peering connections. The access layer is your application subnets and security groups.
        DWDM wavelengths are like VLANs or VPC subnets — logical isolation on shared physical
        infrastructure. SCADA is <strong>Prometheus and Grafana for physical assets</strong>.
        Every point heater, pump, and ventilation fan is an instrumented service emitting metrics.
        IEC 104 is the scrape protocol (like Prometheus's HTTP pull), the fibre network is the
        transport layer, and the control centre dashboard is Grafana — visualising time-series data,
        setting alert thresholds, and enabling operators to drill down into anomalies. The OT
        cybersecurity challenge is like securing a Kubernetes cluster that controls physical actuators —
        you need network policies, RBAC, image scanning, and runtime monitoring, but the consequences
        of a breach are physical rather than digital.
      </Callout>

      <Callout type="info" label="Key Standards">
        IEC 60870-5-104 defines the dominant SCADA protocol for IP-based railway telemetry. OPC-UA
        (IEC 62541) is the emerging standard for next-generation OT integration. Cybersecurity for
        railway OT is governed by TS 50701 (railway-specific) and the IEC 62443 series (industrial
        automation security). Network equipment for railway environments must comply with EN 50155
        (rolling stock electronics) and EN 50121 (electromagnetic compatibility).
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm5-l2', label: 'Power Supply & Substations', desc: 'SCADA monitors and controls traction power distribution switchgear and substations.' },
        { target: 'm4-l2', label: 'Interlockings', desc: 'Signalling systems share the fibre backbone and interlocking data flows through the same network.' },
        { target: 'm1-l3', label: 'Maintenance & Inspection', desc: 'SCADA-driven condition monitoring and digital twins are replacing traditional manual inspection regimes.' },
        { target: 'm8-l2', label: 'Disruption Management', desc: 'SCADA alerts on infrastructure failures feed directly into disruption management processes.' },
        { target: 'm7-l1', label: 'Railway Telecoms — GSM-R & FRMCS', desc: 'GSM-R and FRMCS base stations rely on the fibre backbone for backhaul connectivity to the core network.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the primary purpose of a railway fibre-optic backbone network?', options: ['Providing Wi-Fi to passengers on board trains', 'Carrying high-bandwidth data for signalling control, SCADA telemetry, telephony, and operational communications between locations along the route', 'Replacing copper rails for traction return current', 'Broadcasting live CCTV footage to the public'], correct: 1, explanation: 'Railway fibre networks run along the lineside connecting signalling centres, stations, depots, and control rooms. They carry safety-critical signalling data, SCADA telemetry, operational voice and data, and corporate traffic — forming the digital backbone of railway operations.' },
  { text: 'What does SCADA stand for, and what does it do on a railway?', options: ['Signal Control And Data Acquisition — it sets signal aspects', 'Supervisory Control And Data Acquisition — it remotely monitors and controls distributed equipment such as points heaters, pumps, and power supplies', 'Standard Communication And Display Architecture — it drives passenger information screens', 'Systematic Check And Diagnostic Analysis — it runs automated track inspections'], correct: 1, explanation: 'SCADA systems collect real-time telemetry from thousands of remote sensors and devices (water pumps, point heaters, tunnel ventilation fans, electrical switchgear) and present it to operators who can monitor status and send control commands without visiting the site.' },
  { text: 'How does remote condition monitoring via SCADA improve maintenance compared to manual inspection?', options: ['It completely eliminates the need for any human involvement in maintenance', 'It detects faults and trends continuously in real time, enabling predictive maintenance and faster response, rather than relying on periodic manual visits that might miss developing failures', 'It is cheaper because SCADA hardware costs less than employing staff', 'It only provides historical data and cannot alert on live conditions'], correct: 1, explanation: 'Manual inspection is periodic — a fault developing between visits goes undetected until the next check. SCADA provides continuous monitoring with real-time alarms and trend analysis, allowing maintainers to intervene before failure occurs and to prioritise work based on actual condition rather than fixed schedules.' },
  { text: 'How can a railway generate commercial revenue from its fibre-optic network?', options: ['By charging passengers to use on-train Wi-Fi', 'By leasing spare fibre capacity (dark fibre) to telecommunications companies, since the railway corridor provides a valuable continuous duct route between cities', 'By selling the copper cables that fibre replaced', 'By providing broadband to lineside residents for free and claiming government subsidies'], correct: 1, explanation: 'Railway routes provide continuous wayleaves between major population centres — exactly what telecoms companies need. Spare fibres (dark fibre) in railway cable routes can be leased to commercial providers, generating significant non-fare revenue. Network Rail in the UK does this through its telecoms business.' },
];
