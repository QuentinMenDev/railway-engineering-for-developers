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

// ─── Module 7: Telecommunications & Control Systems ──────────────────

function M7L1({ goTo }) {
  return (
    <>
      <h3>A Brief History of Railway Communications</h3>
      <p>
        Communication has been essential to railway safety since the very earliest lines. The first
        railways had no means of communication between stations at all — policemen stood at intervals
        along the line and used hand signals (flags by day, oil lamps by night) to indicate whether the
        line ahead was clear. The <strong>electric telegraph</strong>, adopted by the Great Western Railway
        in the 1830s, was the first transformative technology: it allowed signalmen at adjacent stations to
        exchange messages about train movements faster than the trains themselves could travel. The block
        signalling system described in Module 4 was built entirely on the telegraph as its communication
        bearer.
      </p>
      <p>
        As railways grew more complex, so did their communication needs. <strong>Lineside telephones</strong>
        were installed at signals and in tunnels so that drivers of failed trains could contact the signaller.
        These were typically connected to omnibus circuits — a single pair of wires shared by multiple
        phones along a section of route, with selective ringing to call specific locations. Internal
        telephone networks connected signal boxes, stations, depots, and control offices using dedicated
        railway switchboard exchanges, entirely separate from the public telephone network.
      </p>
      <p>
        The introduction of <strong>cab radio</strong> from the 1960s onward was a major leap. In the UK,
        the National Radio Network (NRN) provided open-channel VHF radio for general communication, while
        <strong>Cab Secure Radio (CSR)</strong>, introduced in the 1980s, gave each driver a direct,
        selectable speech link to the signaller controlling their section. CSR operated in the UHF band
        and used a system of shore-based base stations connected to the signalling control point. However,
        these analogue systems were proprietary, offered no data capability, provided poor audio quality
        in many areas, and were specific to individual countries — a train crossing from France into
        Belgium had to switch to entirely different radio equipment.
      </p>

      <h3>The Birth of GSM-R</h3>
      <p>
        The transition from analogue to digital radio was driven by two forces: the need for
        interoperable cross-border communication in Europe, and the requirement for a reliable data
        bearer to support ETCS (European Train Control System). Public mobile networks like GSM were
        considered but rejected because railways need guaranteed coverage along track corridors
        (including tunnels and cuttings), prioritised access during emergencies, and specialised
        features that commercial networks do not provide. The result was <strong>GSM-R</strong> —
        a dedicated railway variant of the GSM standard, specified by the <strong>EIRENE</strong>
        (European Integrated Railway Radio Enhanced Network) project under UIC coordination.
      </p>
      <p>
        The EIRENE specifications comprise two key documents: the <strong>Functional Requirements
        Specification (FRS)</strong>, which defines what the system must do from an operational perspective,
        and the <strong>System Requirements Specification (SRS)</strong>, which defines the technical
        implementation. Together these mandate the railway-specific features that distinguish GSM-R from
        commercial GSM, while keeping the underlying technology standard enough to leverage commercial
        GSM equipment and chipsets.
      </p>

      <h3>GSM-R Architecture and Frequency Planning</h3>
      <p>
        <strong>GSM-R (Global System for Mobile Communications — Railway)</strong> operates in
        dedicated frequency bands (876–880 MHz uplink, 921–925 MHz downlink) reserved exclusively
        for railway use across Europe. This is a narrow allocation — just 4 MHz in each direction,
        providing 19 ARFCN (Absolute Radio Frequency Channel Number) carriers. The architecture
        follows the standard GSM model — Base Transceiver Stations (BTS) along the track connected
        via a Base Station Controller (BSC) to a Mobile Switching Centre (MSC) — but adds
        railway-specific functionality.
      </p>
      <p>
        Cell planning for GSM-R is fundamentally different from commercial mobile networks. Commercial
        networks optimise for <strong>area coverage</strong> — serving populations distributed across
        a two-dimensional plane. GSM-R optimises for <strong>linear corridor coverage</strong> — serving
        trains moving along a one-dimensional track. This means base stations are placed along the
        trackside, typically every 3–7 km in open terrain, with directional antennas aimed along the
        track in both directions. The coverage pattern is a long, narrow strip rather than the
        hexagonal cells of commercial planning.
      </p>

      <div className="highlight-box">
        <p>
          GSM-R coverage requirements mandate a minimum field strength of <strong>-92 dBm</strong> at
          the train antenna for 95% of the time and 95% of locations along the track. In practice, network
          planners target significantly better coverage to ensure reliability. Coverage must be continuous —
          there must be <strong>no gaps</strong>, even in cuttings, on embankments, in tunnels, on
          bridges, or at stations.
        </p>
      </div>

      <h3>Coverage in Challenging Environments</h3>
      <p>
        Providing seamless coverage in tunnels is one of the most demanding aspects of GSM-R
        deployment. Tunnels block radio signals from external base stations, requiring dedicated
        in-tunnel coverage solutions. Three approaches are commonly used:
      </p>
      <ul>
        <li>
          <strong>Leaky feeder (radiating cable):</strong> A coaxial cable with slots cut in its
          outer conductor, strung along the tunnel wall. Radio energy leaks continuously from the
          cable, providing uniform coverage throughout the tunnel. This is the most common solution
          for railway tunnels and is also used in deep cuttings.
        </li>
        <li>
          <strong>Distributed antenna systems (DAS):</strong> Discrete antennas spaced along the
          tunnel, fed by fibre optic links from a base station at the tunnel portal. Suitable for
          longer tunnels where leaky feeder attenuation would be excessive.
        </li>
        <li>
          <strong>Dedicated tunnel base stations:</strong> Small BTS units installed in equipment
          niches within the tunnel, connected to the core network by fibre. Used in very long
          tunnels (such as the Channel Tunnel or base tunnels in the Alps).
        </li>
      </ul>
      <p>
        Adjacent cells must have sufficient <strong>overlap</strong> — typically 200–500 metres of
        dual coverage — to ensure reliable handover. This overlap distance must account for the
        maximum train speed: at 300 km/h, a train covers 500 metres in just 6 seconds, so the
        handover procedure must complete well within that window.
      </p>

      <h3>GSM-R Features for Railway Operations</h3>
      <p>
        GSM-R provides several features that distinguish it from commercial mobile networks:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Feature</th><th>Description</th><th>Operational Purpose</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Railway Emergency Call (REC)</strong></td>
              <td>High-priority group call that pre-empts all other traffic and connects immediately to all parties in the affected area</td>
              <td>Broadcast emergency warnings (e.g., obstruction on track, runaway vehicle) to all trains and the signaller simultaneously</td>
            </tr>
            <tr>
              <td><strong>Voice Group Call Service (VGCS)</strong></td>
              <td>One signaller can speak to all trains in a defined group call area</td>
              <td>Broadcasting speed restrictions, operational instructions, or coordinating during degraded working</td>
            </tr>
            <tr>
              <td><strong>Voice Broadcast Service (VBS)</strong></td>
              <td>One-to-many announcement — listeners cannot respond</td>
              <td>Mass notifications where responses are not needed</td>
            </tr>
            <tr>
              <td><strong>Functional Addressing</strong></td>
              <td>Calls routed by operational identity (train running number, controller role) rather than physical phone number</td>
              <td>Call "the 14:30 Edinburgh" regardless of which handset or cab is running that service</td>
            </tr>
            <tr>
              <td><strong>Location-Dependent Addressing</strong></td>
              <td>Calls routed based on the train's current geographic location</td>
              <td>A driver pressing "call signaller" is automatically connected to whichever signaller controls the area they are currently in</td>
            </tr>
            <tr>
              <td><strong>enhanced Multi-Level Precedence and Pre-emption (eMLPP)</strong></td>
              <td>Priority system with multiple levels — emergency calls pre-empt lower-priority traffic</td>
              <td>Ensures safety-critical calls always get through, even when the network is busy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Enhanced Railway Emergency Call (eREC)</h3>
      <p>
        The Railway Emergency Call is arguably the most safety-critical feature of GSM-R. When a driver
        or signaller initiates an REC, the system must establish the call to all relevant parties within
        a defined area in under <strong>2 seconds</strong> (the EIRENE requirement). The call is
        established with the highest priority level and will pre-empt any existing lower-priority
        calls if network resources are constrained.
      </p>
      <p>
        The <strong>enhanced REC (eREC)</strong> adds further capabilities to the basic emergency call.
        It supports multiple simultaneous emergency call areas, allows the call originator's location to
        be transmitted to all recipients, and provides confirmation that the call has been received. The
        eREC also supports a "shunting emergency stop" variant for use in yards and depots where the
        standard geographic emergency call area may not be appropriate. When an eREC is initiated, all
        trains in the affected area receive an audible and visual alert in the cab, and the call is
        automatically recorded for subsequent investigation.
      </p>

      <h3>Why Railways Need Their Own Network</h3>
      <p>
        The question of why railways cannot simply use commercial 4G or 5G networks is frequently
        asked. The answer lies in the unique requirements of safety-critical railway communication.
        Commercial networks are designed for best-effort service — coverage may be excellent in urban
        areas but sparse in rural cuttings and tunnels where railways run. During major incidents or
        public events, commercial networks become congested as thousands of users compete for
        capacity, precisely when railway communication is most critical. Railways require
        <strong> guaranteed Quality of Service (QoS)</strong>, deterministic call setup times (under
        2 seconds for emergency calls), and continuous coverage along every metre of track regardless
        of population density.
      </p>
      <p>
        Furthermore, ETCS Level 2 and Level 3 rely on a continuous data connection between the
        Radio Block Centre (RBC) and the onboard ETCS computer. This data link carries Movement
        Authorities, position reports, and emergency stop commands. If the radio link fails, the
        train must assume the worst case and brake to a stop. GSM-R provides this data bearer with
        the reliability, coverage, and handover performance that safety-critical train control
        demands. The data rates are modest (9.6 kbps circuit-switched) because ETCS messages are
        small, but the reliability and latency requirements are stringent.
      </p>

      <h3>Handover Performance for ETCS</h3>
      <p>
        When a train moves from one GSM-R cell to the next, the radio connection must be handed over
        without interrupting the ETCS data session. The EIRENE and UNISIG specifications define strict
        handover performance requirements:
      </p>
      <div className="highlight-box">
        <p>
          The maximum permissible communication interruption during handover for ETCS is
          <strong> less than 0.5 seconds</strong>. If the interruption exceeds this threshold, the
          ETCS onboard system begins a connection supervision timer. If the connection is not
          restored within approximately <strong>20 seconds</strong> (configurable per route), the
          train initiates an <strong>emergency brake application</strong>. This makes handover
          reliability a direct safety concern — a poorly performing radio network does not just
          degrade service quality, it stops trains.
        </p>
      </div>
      <p>
        The EuroRadio protocol (UNISIG Subset-037) sits on top of the GSM-R bearer and provides a
        safe application layer for ETCS messages. It uses cryptographic authentication to prevent
        spoofing of train control messages, sequence numbering to detect lost or duplicated messages,
        and session management to handle the inevitable radio interruptions during handover or
        coverage gaps. The protocol is designed to be tolerant of brief interruptions while still
        detecting genuine communication failures that require the train to stop.
      </p>
      <p>
        At high speeds, handovers occur frequently. A train travelling at 300 km/h through cells
        spaced 5 km apart will perform a handover approximately every 60 seconds. On routes with
        smaller cells (urban areas, complex junctions), the handover rate can be much higher. Each
        handover must succeed reliably, making radio network quality a persistent engineering concern
        on high-speed routes.
      </p>

      <h3>The GSM-R Interference Problem</h3>
      <p>
        GSM-R faces a growing interference problem from commercial mobile networks. The GSM-R downlink
        band (921–925 MHz) is immediately adjacent to the commercial 900 MHz band used by public
        operators for 4G LTE and, increasingly, 5G NR. Commercial base stations transmitting at high
        power levels in the 925 MHz and above range can cause <strong>adjacent channel interference</strong>
        and <strong>intermodulation products</strong> that degrade GSM-R reception on trains.
      </p>
      <p>
        The problem is particularly acute because GSM-R train-mounted antennas are designed to receive
        weak signals from distant lineside base stations (as low as -92 dBm), while simultaneously being
        exposed to powerful commercial signals from nearby urban base stations. The dynamic range
        required of the receiver is enormous. Even with guard bands and receiver filtering, the
        sheer power differential between the wanted GSM-R signal and the unwanted commercial signal
        can cause receiver desensitisation — effectively "blinding" the GSM-R radio.
      </p>
      <p>
        Mitigation strategies include fitting improved receiver filters to train radios, coordinating
        with commercial operators to limit transmission power near railway lines, and in some cases
        deploying additional GSM-R base stations to increase the wanted signal level. This interference
        issue is one of the factors driving the urgency of the migration to FRMCS, which will operate
        in different frequency bands with modern wideband technology less susceptible to narrowband
        interference.
      </p>

      <Callout type="info" label="Key Standard">
        ECC Report 229 and subsequent updates from CEPT document the GSM-R interference problem and
        define mitigation measures. National regulators (such as Ofcom in the UK and BNetzA in Germany)
        have imposed specific conditions on commercial operators to protect railway communications,
        but the problem intensifies as commercial networks densify.
      </Callout>

      <h3>FRMCS: The Future of Railway Communication</h3>
      <p>
        GSM-R is based on 2G technology that is approaching end of life. The mobile industry has
        ceased developing GSM chipsets, and spectrum pressure from commercial operators is increasing.
        The railway sector is therefore developing <strong>FRMCS (Future Railway Mobile Communication
        System)</strong>, which will be based on <strong>3GPP standards (4G LTE and 5G NR)</strong> with
        railway-specific enhancements defined by the <strong>Mission Critical (MCX)</strong> service
        framework.
      </p>
      <p>
        The MCX framework, originally developed for public safety (police, fire, ambulance), provides
        three core services that map directly to railway needs:
      </p>
      <ul>
        <li>
          <strong>MCPTT (Mission Critical Push-to-Talk):</strong> Replaces GSM-R voice group calls
          and emergency calls with an IP-based push-to-talk service that supports group calls,
          broadcast calls, priority, and pre-emption — but over a broadband bearer.
        </li>
        <li>
          <strong>MCData (Mission Critical Data):</strong> Provides reliable data transport for
          ETCS messages and other safety-critical data, replacing the circuit-switched 9.6 kbps
          data channel with packet-switched broadband data.
        </li>
        <li>
          <strong>MCVideo (Mission Critical Video):</strong> Enables real-time video streaming
          from trains — a capability that GSM-R simply cannot support. Applications include
          forward-facing camera feeds for remote monitoring, CCTV for security, and video
          communication between drivers and controllers.
        </li>
      </ul>

      <h3>FRMCS Architecture: Network Slicing and Edge Computing</h3>
      <p>
        One of the most significant architectural advances in FRMCS is the use of <strong>5G network
        slicing</strong>. A network slice is a logically isolated virtual network running on shared
        physical infrastructure, with guaranteed performance characteristics. FRMCS defines multiple
        slices for different classes of railway traffic:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Network Slice</th><th>Traffic Type</th><th>QoS Requirements</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Critical communications</strong></td>
              <td>ETCS data, emergency calls</td>
              <td>Ultra-high reliability (99.999%), low latency (&lt;100 ms), guaranteed bandwidth</td>
            </tr>
            <tr>
              <td><strong>Performance communications</strong></td>
              <td>Operational voice, CCTV, diagnostics</td>
              <td>High reliability (99.99%), moderate latency, substantial bandwidth</td>
            </tr>
            <tr>
              <td><strong>Business communications</strong></td>
              <td>Passenger Wi-Fi, infotainment</td>
              <td>Best-effort, high bandwidth, standard reliability</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        This slicing architecture means that a single FRMCS network can simultaneously carry
        safety-critical ETCS messages (with guaranteed ultra-low latency and high reliability),
        operational CCTV streams (with high bandwidth), and passenger internet access (with best-effort
        delivery) — all without the different traffic types interfering with each other. Each slice
        has its own dedicated resource allocation, QoS policies, and security isolation.
      </p>
      <p>
        <strong>Multi-access Edge Computing (MEC)</strong> is another key FRMCS concept. By placing
        computing resources at the network edge (at or near base stations), latency-sensitive
        applications can process data locally without round-tripping to a central data centre. For
        railways, this enables applications like real-time video analytics at lineside locations,
        low-latency ETCS message processing, and local caching of data for trains in areas with
        limited backhaul capacity.
      </p>

      <h3>The Transition Period: Dual-Mode Operation</h3>
      <p>
        The migration from GSM-R to FRMCS is a multi-decade programme that cannot be achieved as a
        "big bang" cutover. During the transition period, which may extend from the late 2020s into
        the 2040s, the railway must operate both networks simultaneously. This creates significant
        engineering challenges:
      </p>
      <ul>
        <li>
          <strong>Dual-mode train radios:</strong> Trains must carry radios capable of operating on
          both GSM-R and FRMCS, automatically selecting the appropriate network depending on
          which is available in the current location. The onboard ETCS system must be able to
          maintain a data session regardless of which bearer network is in use.
        </li>
        <li>
          <strong>Network interworking:</strong> A train on the FRMCS network must be able to
          communicate with a signaller whose control centre is still connected via GSM-R, and vice
          versa. Interworking gateways must translate between the two systems transparently.
        </li>
        <li>
          <strong>Parallel infrastructure:</strong> During the transition, infrastructure managers
          must maintain both GSM-R base stations and FRMCS base stations — doubling the lineside
          radio infrastructure until GSM-R can be decommissioned on each route.
        </li>
        <li>
          <strong>Spectrum management:</strong> The allocation of spectrum for FRMCS must be
          coordinated with the eventual release of the GSM-R spectrum. Candidate bands include
          the 900 MHz range (refarmed from GSM-R), 1900 MHz, and portions of the 700 MHz band.
        </li>
      </ul>
      <p>
        The first pilot deployments of FRMCS are expected in the late 2020s on new high-speed lines
        and greenfield routes, where there is no legacy GSM-R to interwork with. Brownfield migration
        of existing routes will follow, with the pace dictated by the lifecycle of existing GSM-R
        equipment and the availability of dual-mode train radios. Full migration across the European
        network is not expected before 2040–2050.
      </p>

      <h3>Cybersecurity for Railway Communications</h3>
      <p>
        As railway communication systems move from isolated analogue networks to IP-based digital
        infrastructure, cybersecurity becomes a critical concern. GSM-R, being based on 2G technology,
        has known security weaknesses — the A5/1 encryption algorithm has been publicly broken, and
        the lack of mutual authentication means that rogue base stations (IMSI catchers) could
        theoretically intercept or spoof railway communications.
      </p>
      <p>
        The European standard <strong>TS 50701</strong> (Railway applications — Cybersecurity) provides
        a framework for managing cyber risk in railway systems, including telecommunications. It is
        based on the IEC 62443 series for industrial automation and control system security, adapted
        for the railway domain. Key principles include:
      </p>
      <ul>
        <li>
          <strong>Defence in depth:</strong> Multiple layers of security controls, so that the
          failure of any single control does not compromise the system.
        </li>
        <li>
          <strong>Security zones and conduits:</strong> The railway network is divided into zones
          with defined security levels, and all communication between zones passes through
          controlled conduits with appropriate filtering and monitoring.
        </li>
        <li>
          <strong>Secure by design:</strong> Security requirements are integrated from the earliest
          stages of system specification, not bolted on after deployment.
        </li>
        <li>
          <strong>Lifecycle security management:</strong> Security is maintained throughout the
          system lifecycle — from procurement through operation to decommissioning — with regular
          vulnerability assessments and patching.
        </li>
      </ul>
      <p>
        FRMCS inherits the significantly stronger security architecture of 4G/5G, including mutual
        authentication (the train authenticates the network and vice versa), strong encryption
        (128-bit or 256-bit AES), and secure key management. However, the expanded attack surface
        of an IP-based broadband network — with more applications, more interfaces, and more
        connected devices — means that ongoing security management will be more complex than for
        the relatively simple GSM-R system it replaces.
      </p>

      <Callout type="analogy">
        GSM-R is like a <strong>dedicated VPN for railway operations</strong>. Just as a corporate
        VPN provides guaranteed bandwidth, encryption, and priority over the public internet, GSM-R
        provides a private, prioritised communication channel that cannot be degraded by public
        traffic. The railway emergency call is like a P0 incident alert that pre-empts all other
        traffic and pages every on-call engineer simultaneously. Functional addressing is like
        DNS for trains — you address the service by name ("the 14:30 to Edinburgh") and the
        network resolves it to the correct physical endpoint, no matter which hardware is running
        that service instance. The migration from GSM-R to FRMCS is like migrating from a
        monolithic VPN to a <strong>zero-trust architecture with service mesh</strong> — the new
        system provides finer-grained security, better observability, and the ability to run
        multiple isolated services (network slices) on shared infrastructure. And just like any
        major infrastructure migration, you must run both systems in parallel during the transition,
        with careful interworking to ensure nothing breaks.
      </Callout>

      <Callout type="info" label="Key Standard">
        The EIRENE specifications (Functional Requirements Specification and System Requirements
        Specification) define all GSM-R features. ETCS data communication over GSM-R is specified
        in UNISIG Subset-037 (EuroRadio protocol) and Subset-039 (radio interface). FRMCS is
        specified in UIC FRMCS Functional Working Group documents, building on 3GPP MCX standards
        (TS 22.280, TS 22.179, TS 22.282). Cybersecurity for railway communications is addressed
        by TS 50701 and the IEC 62443 series.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l3', label: 'ETCS & Moving Block', desc: 'ETCS Level 2/3 depends entirely on GSM-R (and future FRMCS) for its radio data link to the train. Handover reliability directly affects train operation.' },
        { target: 'm8-l2', label: 'Disruption Management', desc: 'Emergency calls and group communication are critical tools during operational disruption.' },
        { target: 'm5-l1', label: 'Electrification Principles', desc: 'Radio masts and power supplies share lineside infrastructure corridors with electrification equipment.' },
        { target: 'm7-l2', label: 'Fibre Networks & SCADA', desc: 'The fibre backbone provides the backhaul connectivity that connects GSM-R/FRMCS base stations to the core network.' },
      ]} />
    </>
  );
}

function M7L2({ goTo }) {
  return (
    <>
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

function M7L3({ goTo }) {
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

// ─── Export ──────────────────────────────────────────────────────────

export default function getM7Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm7-l1': return <M7L1 goTo={goTo} />;
    case 'm7-l2': return <M7L2 goTo={goTo} />;
    case 'm7-l3': return <M7L3 goTo={goTo} />;
    default: return null;
  }
}
