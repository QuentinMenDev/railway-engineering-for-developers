import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M7L1({ goTo }: LessonProps) {
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

export const quiz: QuizQuestion[] = [
  { text: 'Why do railways operate their own dedicated radio network (GSM-R) instead of using public mobile networks?', options: ['Public networks are too expensive for railway use', 'Railways need guaranteed coverage along the track, priority access, and safety-critical features like railway emergency calls that public networks cannot provide', 'Public networks do not support voice calls', 'Government regulations prohibit railways from using commercial networks'], correct: 1, explanation: 'Public networks are optimised for population density, not linear coverage along rail corridors. GSM-R guarantees continuous coverage, offers priority pre-emption during emergencies, and provides railway-specific features such as functional addressing and group calls that commercial networks lack.' },
  { text: 'What is "functional addressing" in GSM-R?', options: ['Assigning a fixed phone number to each base station', 'Calling a role or function (e.g. "driver of train 1A42") rather than a personal number, so the call reaches whoever currently holds that role', 'Encrypting voice calls for security purposes', 'Routing calls through the nearest control centre automatically'], correct: 1, explanation: 'Functional addressing decouples the call destination from a specific SIM or person. A signaller can call "the driver of 1A42" without knowing who is driving or which handset they carry. The network resolves the function to the current registered user, which is essential for operational flexibility.' },
  { text: 'How does ETCS Level 2 depend on GSM-R?', options: ['GSM-R powers the onboard ETCS computer', 'GSM-R provides the radio data link over which the Radio Block Centre sends movement authorities to the train', 'GSM-R is only used for voice communication, not for ETCS data', 'ETCS Level 2 uses Wi-Fi, not GSM-R'], correct: 1, explanation: 'At ETCS Level 2, lineside signals are removed and movement authorities are transmitted digitally from the Radio Block Centre (RBC) to the train via GSM-R circuit-switched data. If the GSM-R link is lost, the train must brake to a stop, making GSM-R a safety-critical dependency.' },
  { text: 'What is FRMCS and why is it being developed?', options: ['A new type of train detection system to replace track circuits', 'The Future Railway Mobile Communication System, a successor to GSM-R based on modern broadband standards (e.g. 5G/LTE) to support higher data rates and future digital railway needs', 'A fibre-optic cable standard for railway tunnels', 'A French signalling protocol used on high-speed lines'], correct: 1, explanation: 'GSM-R is based on 2G technology that is approaching obsolescence, with limited data bandwidth. FRMCS will use LTE/5G bearers to provide higher throughput for video, IoT, and next-generation train control (ETCS over IP), while maintaining the railway-specific features that GSM-R provides.' },
];
