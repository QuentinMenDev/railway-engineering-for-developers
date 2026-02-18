import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M9L2({ goTo }) {
  return (
    <>
      <h3>Why Interfaces Matter Most</h3>
      <p>
        Railway engineering comprises multiple specialised disciplines — track, civil
        engineering, structures, signalling, electrification, rolling stock, telecommunications,
        and operations — each with its own standards, design tools, and professional culture.
        Individually, each discipline is well understood and mature. The problems arise at the
        <strong> interfaces</strong> between them. History shows that the majority of serious
        engineering failures on railways occur not because a single discipline made an error
        within its own domain, but because two or more disciplines made assumptions about each
        other that turned out to be incompatible.
      </p>
      <p>
        Interface management is therefore not a bureaucratic overhead but a core engineering
        activity. It is formalised through <strong>Interface Control Documents (ICDs)</strong>,
        which define the physical, electrical, functional, and procedural boundaries between
        disciplines. An ICD specifies what each discipline will provide and what it expects
        to receive — dimensions, loads, clearances, electrical characteristics, timing
        requirements, and data formats. When an ICD is agreed, both parties are contractually
        bound to deliver their side of the interface. When ICDs are incomplete, ambiguous, or
        not enforced, interface failures are almost inevitable.
      </p>

      <h3>The Interface Management Process</h3>
      <p>
        Effective interface management follows a structured four-stage process: identification,
        documentation, verification, and close-out. Each stage has specific activities and
        deliverables, and skipping or rushing any stage dramatically increases the risk of
        interface failure.
      </p>
      <p>
        <strong>Interface Identification</strong> begins at the earliest design stage and continues
        throughout the project. It involves systematically mapping every point where one discipline's
        design output affects another discipline's design input. The tool for this is an
        <strong> Interface Matrix</strong> — a grid with all disciplines (and all contracts, if
        responsibilities are split) on both axes. Each cell in the matrix represents a potential
        interface. For a railway project with six engineering disciplines and three construction
        contracts, the matrix may contain hundreds of interfaces. Each interface is assigned a
        unique identifier, an owner (the party responsible for managing the interface), and a
        criticality rating.
      </p>
      <p>
        <strong>Interface Documentation</strong> is the production of the ICD for each identified
        interface. The ICD specifies the interface boundary (often a physical location or a data
        exchange point), the requirements at that boundary (dimensions, loads, clearances,
        electrical characteristics, data formats), the responsibilities of each party, the
        tolerances and acceptance criteria, and the verification method. ICDs should be
        drafted during outline design and finalised during detailed design. Critically, both
        parties to an interface must formally agree the ICD — a unilateral ICD is worthless
        because the other party has not committed to delivering their side.
      </p>
      <p>
        <strong>Interface Verification</strong> confirms that both parties have actually delivered
        what the ICD requires. This occurs during detailed design (through design reviews and
        clash detection), during construction (through inspection and measurement), and during
        testing and commissioning (through integrated testing). Verification must be planned — each
        ICD should specify how compliance will be demonstrated and who will perform the verification.
      </p>
      <p>
        <strong>Interface Close-out</strong> is the formal confirmation that an interface has been
        fully resolved — both parties have delivered their commitments, verification has been
        completed, and no residual risks remain. The interface register is updated to show the
        closed-out status. On a well-managed project, all interfaces should be closed out before
        scheme hand-back; on a poorly managed project, unresolved interfaces persist into
        operations, creating ongoing maintenance and safety challenges.
      </p>

      <h3>Common Interface Failure Modes</h3>
      <p>
        Understanding the common patterns of interface failure helps engineers anticipate and
        prevent them. The following failure modes recur across railway projects worldwide.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Failure Mode</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Assumption mismatch</strong></td>
              <td>Two disciplines each assume the other is responsible for a requirement, or each designs to different assumed parameters</td>
              <td>Track designer assumes 20-tonne axle load; structures designer assesses bridge for 25.5-tonne axle load (RA10), wasting capacity. Or worse, the reverse — structures assessed for lower load than track permits.</td>
            </tr>
            <tr>
              <td><strong>Geometric clash</strong></td>
              <td>Physical elements from different disciplines occupy the same space</td>
              <td>OLE mast foundation clashes with signalling cable route. Discovered during construction when the cable trench is excavated and hits the mast foundation concrete.</td>
            </tr>
            <tr>
              <td><strong>Timing mismatch</strong></td>
              <td>One discipline's construction must precede another's but the programme does not reflect this dependency</td>
              <td>Signalling cables must be installed before track ballast is laid (cables run in troughs beneath the ballast), but the track contractor is scheduled to work first.</td>
            </tr>
            <tr>
              <td><strong>Electrical incompatibility</strong></td>
              <td>Electrical parameters (voltage, frequency, impedance, current capacity) at an interface are incompatible</td>
              <td>New track circuit equipment designed for a different rail impedance than the rail type actually installed, causing false occupancy indications.</td>
            </tr>
            <tr>
              <td><strong>Data format mismatch</strong></td>
              <td>Digital systems at an interface use incompatible data formats, protocols, or message structures</td>
              <td>ETCS onboard unit expects balise telegrams in a format different from the trackside balise encoder output, discovered during integration testing.</td>
            </tr>
            <tr>
              <td><strong>Maintenance access conflict</strong></td>
              <td>Equipment from one discipline is installed in a location that prevents maintenance access to another discipline's equipment</td>
              <td>An OLE structure is positioned so that it prevents access to a signal for lamp changing, requiring a full possession and overhead line isolation for a routine maintenance task.</td>
            </tr>
            <tr>
              <td><strong>Contractual gap</strong></td>
              <td>The interface falls between two contracts and neither contractor's scope includes resolving it</td>
              <td>The bond between the running rail and the earthing conductor is not in the track contract (electrical work) or the electrification contract (not a running rail), so it is never installed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The Systems Integration Contractor</h3>
      <p>
        On large, complex railway projects, the role of <strong>Systems Integration (SI)
        contractor</strong> has emerged as a critical function. The SI contractor is responsible
        for ensuring that the individual discipline designs and construction outputs combine
        into a working whole. This role is distinct from the individual discipline designers
        (who are expert in their own domain) and from the project manager (who manages cost,
        time, and commercial relationships). The SI contractor is an engineering role — it
        requires deep understanding of multiple disciplines and, most importantly, of the
        interfaces between them.
      </p>
      <p>
        The SI contractor's responsibilities typically include: maintaining the overall system
        requirements baseline, managing the interface register and chairing interface resolution
        meetings, conducting system-level design reviews (not reviewing each discipline's design
        in detail but verifying that the discipline designs are compatible at their interfaces),
        developing the integrated test strategy (defining how subsystems will be tested together),
        and managing the integrated commissioning programme. On Crossrail, the SI contractor role
        was critical in managing the interface between the conventional railway signalling on the
        surface sections and the CBTC (Communications-Based Train Control) signalling in the
        tunnel sections — an interface that required trains to seamlessly transition between
        two completely different signalling philosophies at speed.
      </p>

      <h3>Design Coordination and BIM for Railways</h3>
      <p>
        Traditional design coordination relied on overlay of 2D drawings — placing the track
        plan, the signalling plan, the OLE plan, and the cable routes drawing on a light table
        to check for clashes. This process was manual, error-prone, and could only detect
        geometric conflicts (not electrical, functional, or timing interfaces). Modern railway
        projects increasingly use <strong>Building Information Modelling (BIM)</strong> to manage
        design coordination digitally.
      </p>
      <p>
        BIM for railways involves creating a coordinated 3D model of all disciplines' designs
        in a shared digital environment. Each discipline produces its design in a 3D format —
        track alignment and cross-sections, structure geometry, OLE mast positions and wire
        profiles, signalling equipment locations, cable route corridors — and these are combined
        in a federated model. Automated <strong>clash detection</strong> identifies geometric
        conflicts (a cable duct passing through a foundation, a signal head within the OLE
        clearance zone) far earlier and more reliably than manual overlay. The model also
        enables <strong>4D simulation</strong> (adding time to the model to visualise the
        construction sequence) and <strong>5D estimation</strong> (linking model quantities
        to cost data).
      </p>
      <p>
        However, BIM for railways is less mature than BIM for buildings. Railway infrastructure
        is linear (extending for kilometres rather than fitting in a building footprint),
        operates within tight clearance envelopes, involves dynamic systems (moving trains,
        pantograph contact, thermal rail expansion), and must integrate with legacy infrastructure
        that predates digital records. The UK rail industry has adopted the <strong>BS EN ISO
        19650</strong> framework for information management using BIM, and Network Rail's
        <strong>Digital Railway</strong> programme is driving adoption, but full multi-discipline
        federated BIM remains an aspiration on many projects.
      </p>

      <h3>CAD and Digital Engineering Tools</h3>
      <p>
        Each railway discipline uses specialist CAD and engineering software, and the
        interoperability (or lack thereof) between these tools is itself an interface
        management challenge.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Common Tools</th>
              <th>Key Outputs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Track alignment</strong></td>
              <td>Bentley OpenRail Designer, MX Rail, 12d Model</td>
              <td>Horizontal and vertical alignment, cant diagram, setting-out data, cross-sections</td>
            </tr>
            <tr>
              <td><strong>Civil / earthworks</strong></td>
              <td>Bentley OpenRail Designer, Civil 3D, 12d Model</td>
              <td>Earthworks volumes, drainage design, formation levels, cut/fill balance</td>
            </tr>
            <tr>
              <td><strong>Structures</strong></td>
              <td>Autodesk Revit, Tekla Structures, LUSAS, MIDAS</td>
              <td>3D structural models, general arrangement drawings, reinforcement details, structural analysis</td>
            </tr>
            <tr>
              <td><strong>Signalling</strong></td>
              <td>Specialist tools (often proprietary to signalling supplier), AutoCAD for schematics</td>
              <td>Signalling layout plans, interlocking data, circuit diagrams, cable schedules</td>
            </tr>
            <tr>
              <td><strong>Electrification / OLE</strong></td>
              <td>Bentley OpenRail Overhead Line, Candy (wire run design), PLS-CADD</td>
              <td>OLE layout, mast positions, wire tensions, registration arm geometry, clearance analysis</td>
            </tr>
            <tr>
              <td><strong>Telecoms / power</strong></td>
              <td>AutoCAD, Bentley Substation, ETAP (power systems analysis)</td>
              <td>Cable route plans, equipment room layouts, power distribution diagrams</td>
            </tr>
            <tr>
              <td><strong>Federation / coordination</strong></td>
              <td>Bentley ProjectWise, Autodesk BIM 360, Navisworks (clash detection)</td>
              <td>Federated model, clash reports, 4D programme simulation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A persistent challenge is that signalling design tools are often proprietary to the
        signalling supplier and do not export data in standard formats (IFC, DWG, LandXML)
        compatible with the federation tools. This means that signalling equipment is often
        represented in the federated model as simplified placeholder geometry rather than
        detailed 3D objects, limiting the effectiveness of automated clash detection for
        signalling interfaces. This is an area of active development in the industry.
      </p>

      <h3>Configuration Management and Change Control</h3>
      <p>
        <strong>Configuration management</strong> is the discipline of tracking and controlling
        the design baseline — the set of approved design documents that defines what is being
        built. On a railway project with hundreds of drawings, specifications, and interface
        documents produced by multiple designers, maintaining control over which version of
        each document is current and approved is essential. Without configuration management,
        construction teams may build to superseded drawings, interfaces may reference different
        design revisions, and the as-built record may not reflect what was actually constructed.
      </p>
      <p>
        The configuration management system maintains a <strong>design baseline register</strong>
        listing every document, its current revision, its approval status, and its relationships
        to other documents (which interfaces it defines, which requirements it satisfies).
        When a change is proposed — whether initiated by a design team (to resolve a technical
        issue), by the client (to change a requirement), or by a contractor (to propose an
        alternative construction method) — it must pass through a formal <strong>change control
        process</strong>.
      </p>
      <p>
        The change control process typically involves: (1) documenting the proposed change and
        its justification, (2) assessing the impact on all affected disciplines and interfaces
        (the interface impact assessment is critical — a change that appears minor within one
        discipline may have major consequences for another), (3) assessing the cost and programme
        implications, (4) obtaining approval from the change authority (typically the project
        manager or a design review board), (5) implementing the change across all affected
        documents, and (6) notifying all affected parties and updating the design baseline
        register. On complex projects, change control can consume significant engineering
        resource — but the alternative (uncontrolled changes propagating through the design)
        is far more costly.
      </p>

      <h3>Track, Signalling, and Electrification Interfaces</h3>
      <p>
        The interface between <strong>track and signalling</strong> is one of the most
        fundamental on the railway. In conventional signalling, the rails themselves are part
        of the signalling system: track circuits use the running rails as electrical conductors
        to detect the presence of trains. This means that the track engineer cannot treat the
        rails purely as a structural element — they must also satisfy electrical requirements.
        Insulated rail joints (IRJs) must be positioned at specific locations to define track
        circuit boundaries, and these positions must be coordinated with the signalling
        engineer's track circuit plan. If a track engineer moves a rail joint for structural
        reasons without consulting the signalling engineer, a track circuit boundary may be
        in the wrong place, potentially creating a dangerous gap in train detection.
      </p>
      <p>
        The interface between <strong>electrification and signalling</strong> is equally
        critical. On electrified railways, the traction return current flows through the
        running rails — the same rails that carry track circuit signalling currents. Traction
        return current is many orders of magnitude larger than signalling current, and if it
        is not properly managed, it can overwhelm track circuits, causing false clear signals
        (extremely dangerous) or nuisance failures (operationally disruptive). Impedance bonds,
        return conductor rails, and careful bonding schemes are used to separate traction return
        current from signalling current, but the design requires intimate coordination between
        electrification and signalling engineers.
      </p>
      <p>
        The interface between <strong>electrification and structures</strong> governs whether
        the overhead line equipment (OLE) can physically fit under bridges and through tunnels.
        The contact wire must maintain a minimum height above rail level (typically 4,700 mm
        in the UK) and a minimum electrical clearance from earthed structures (typically 270 mm
        at 25 kV). When an existing bridge has insufficient clearance, the options are limited
        and expensive: lower the track (major civil engineering), raise or rebuild the bridge
        (major structural engineering), or use a reduced-height pantograph with special OLE
        design. Every structure on the route must be individually assessed — and there may
        be hundreds.
      </p>

      <h3>Electromagnetic Compatibility (EMC)</h3>
      <p>
        <strong>Electromagnetic compatibility</strong> is a critical cross-discipline interface
        that is often underestimated until problems emerge during testing and commissioning.
        A railway is an electrically noisy environment: traction motors draw high currents with
        rapid switching transients, pantograph arcing generates broadband electromagnetic
        interference, track circuits and axle counters use low-level signals that are
        susceptible to interference, and digital signalling systems (ETCS, GSM-R/FRMCS) rely
        on radio communications that must operate reliably in this hostile electromagnetic
        environment.
      </p>
      <p>
        EMC management requires each electrical and electronic system to be designed both to
        limit its own electromagnetic emissions and to tolerate the emissions from all other
        systems. This is defined through <strong>EMC zones</strong> — regions of the railway
        with defined electromagnetic characteristics — and <strong>emission and immunity
        limits</strong> for equipment installed in each zone. The relevant standards include
        <strong> EN 50121</strong> (railway EMC standard, covering rolling stock, signalling,
        fixed installations, and emission to the outside world) and <strong>EN 50238</strong>
        (compatibility between rolling stock and train detection systems).
      </p>
      <p>
        EMC failures on railways take several forms: interference with track circuits (causing
        wrong-side or right-side failures), interference with radio communications (GSM-R
        dropouts affecting ETCS data link availability), interference with level crossing
        equipment, and interference with lineside equipment from external sources (nearby
        mobile phone masts, power lines, industrial equipment). The resolution of EMC problems
        often requires changes to multiple disciplines — for example, resolving interference
        between a new rolling stock fleet and existing track circuits might require modifications
        to the train's traction converter filtering, the track circuit operating frequency,
        and the rail bonding arrangements, involving the rolling stock manufacturer, the
        signalling contractor, and the electrification contractor.
      </p>

      <h3>Rolling Stock Interfaces</h3>
      <p>
        Rolling stock sits at the centre of a web of interfaces. The <strong>wheel-rail
        interface</strong> connects rolling stock to track: wheel profiles must be compatible
        with rail profiles, axle loads must not exceed the track's design capacity, and vehicle
        dynamics must be stable at the operating speed. The <strong>rolling stock to
        electrification</strong> interface governs pantograph compatibility: the pantograph
        must be able to follow the contact wire across the full range of speeds and in all
        wind conditions, the collection strip material must be compatible with the contact
        wire material, and the static and dynamic uplift forces must stay within defined limits.
      </p>
      <p>
        The <strong>rolling stock to signalling</strong> interface is becoming increasingly
        complex as railways move towards digital signalling. Onboard equipment — ETCS, AWS,
        TPWS — must communicate correctly with the trackside systems. Braking curves calculated
        by the onboard computer must reflect the actual braking performance of the vehicle.
        Balise readers must be positioned at the correct height and offset relative to the
        track-mounted balises. Antenna patterns must not interfere with other radio systems.
        Each of these sub-interfaces has its own specification, test regime, and approval
        process.
      </p>
      <p>
        The <strong>operations to everything</strong> interface is perhaps the most overlooked
        and most consequential. The timetable — the ultimate product of the railway — depends
        on every other discipline delivering its promised performance. If the track alignment
        does not support the planned line speed, the journey time increases. If the signalling
        headway is longer than assumed, the service frequency decreases. If the rolling stock
        acceleration is slower than specified, the dwell times are wrong. If the electrification
        power supply cannot support the planned service, trains will lose power on steep
        gradients. The timetable must be <strong>deliverable</strong> — and proving that it is
        requires an integrated simulation that models track, signalling, rolling stock, and
        power supply together.
      </p>

      <h3>Testing and Commissioning Interfaces</h3>
      <p>
        The testing and commissioning phase is where interface failures that survived the design
        process become visible — and where they are most expensive to resolve because the
        infrastructure is built and changing anything requires physical modification. A structured
        approach to testing manages this risk.
      </p>
      <p>
        <strong>Individual subsystem testing</strong> verifies that each discipline's installation
        meets its own specifications: track geometry is within tolerance, signalling equipment
        passes its functional tests, OLE wire heights and staggers are correct, telecoms links
        achieve their required throughput. These are primarily single-discipline activities,
        though they require coordination (you cannot test OLE with trains until the track is
        available and the signalling permits train movements).
      </p>
      <p>
        <strong>Integrated testing</strong> verifies the interfaces between subsystems. This is
        where the system first operates as a whole: a test train runs under the OLE, controlled
        by the signalling system, over the new track, communicating via the telecoms network.
        Integrated testing reveals issues that no amount of single-discipline testing can detect:
        pantograph bounce at a particular OLE registration, signalling interference from traction
        current, GSM-R blackspots caused by structural interference, and ride quality issues at
        specific track features. Integrated testing requires all disciplines to be present and
        available to diagnose and resolve issues collaboratively.
      </p>
      <p>
        <strong>Shadow running</strong> (also called trial running or trial operations) is the
        final phase before revenue service. Trains run to the planned timetable, with operational
        staff in their normal roles, but without fare-paying passengers. This tests not just the
        engineering systems but the operational interfaces: do the drivers know the route, do the
        signallers know the new layout, do the control room staff know the new equipment, do the
        maintenance teams have access and procedures for every asset? Shadow running typically
        lasts two to four weeks, during which all systems must demonstrate sustained reliable
        performance. Any significant failures during shadow running delay the opening date.
      </p>

      <h3>Handover from Project to Operations and Maintenance</h3>
      <p>
        The transition from a project organisation (focused on building something new) to an
        operational organisation (focused on running and maintaining it) is itself a critical
        interface that is frequently mismanaged. The project team has deep knowledge of what was
        built and why; the operations and maintenance teams need to understand how to operate it
        safely and maintain it efficiently. This knowledge transfer must be planned and resourced,
        not assumed.
      </p>
      <p>
        The <strong>handover package</strong> typically includes: as-built drawings and records
        (reflecting what was actually constructed, not just what was designed), operation and
        maintenance manuals for all installed equipment, spare parts lists and initial spare
        holdings, training records for all operations and maintenance staff, the safety case
        (including all hazard log entries and mitigation measures), test certificates and
        commissioning records, warranty information, and the asset register data needed to
        integrate the new assets into the infrastructure manager's asset management system.
      </p>
      <p>
        On many projects, the maintenance team is involved from the detailed design stage onwards
        through a <strong>maintenance review</strong> process. This ensures that equipment is
        accessible for maintenance without requiring possessions or isolations that are
        disproportionate to the task, that standard maintenance tools and procedures can be used,
        that spare parts are compatible with existing inventory, and that the asset life and
        degradation characteristics are understood for maintenance planning. Involving the
        maintainer early is a form of interface management — it ensures the design-to-maintenance
        interface is resolved before construction rather than discovered during the first
        maintenance intervention.
      </p>

      <Callout type="analogy">
        Interfaces are where most bugs live — just like <strong>API contracts between
        microservices</strong>. Each railway discipline is a well-tested service in isolation,
        but the system fails at the integration points. An Interface Control Document is an
        API specification: it defines the request format, response format, error handling, and
        service level agreement between two disciplines. Configuration management is your
        version control system — without it, teams are working on different branches that will
        never merge cleanly. Change control is your pull request review process: every change
        must be assessed for its impact on all dependent services before it is merged. BIM
        clash detection is your automated integration test suite — it catches the obvious
        conflicts early, but it cannot catch semantic errors (a cable duct that is geometrically
        clear of a foundation but thermally incompatible with it). The systems integration
        contractor is your platform engineering team — responsible not for any one service but
        for ensuring they all work together. And handover to operations is your deployment
        runbook and on-call handoff combined: the project team must transfer not just the
        system but the knowledge needed to keep it running.
      </Callout>

      <Callout type="info" label="Interface Control Documents">
        A well-written ICD contains: (1) a clear definition of the interface boundary, (2)
        the physical and functional requirements at that boundary, (3) the responsibilities
        of each party, (4) the tolerances and acceptance criteria, (5) the process for managing
        changes to the interface, and (6) the verification and validation methods. ICDs are
        living documents that must be updated as the design evolves. On large projects, a
        dedicated interface manager maintains a register of all ICDs and tracks their status
        through design reviews.
      </Callout>

      <Callout type="info" label="EMC Standards for Railways">
        The EN 50121 series governs electromagnetic compatibility for the whole railway
        environment. Part 1 covers general concepts; Part 2 covers emission of the whole
        railway to the outside world; Part 3 covers rolling stock; Part 4 covers signalling
        and telecommunications apparatus; and Part 5 covers fixed power supply installations.
        EN 50238 specifically addresses the compatibility interface between rolling stock and
        infrastructure, particularly train detection systems. EMC compliance must be verified
        by measurement on the completed system — analysis and simulation alone are not sufficient
        because the electromagnetic environment of a real railway is too complex to model
        accurately.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0', label: 'Foundations', desc: 'The steel-on-steel contact and low adhesion principles that underpin the wheel-rail interface.' },
        { target: 'm1', label: 'Track', desc: 'Rails carry both trains and signalling currents — track design must satisfy both roles.' },
        { target: 'm2', label: 'Civil Engineering', desc: 'Earthworks and drainage interface with track formation and structure foundations.' },
        { target: 'm3', label: 'Structures', desc: 'Clearance under bridges and through tunnels is the critical electrification-structures interface.' },
        { target: 'm4', label: 'Signalling', desc: 'Track circuits, interlockings, and onboard equipment create interfaces with track, electrification, and rolling stock.' },
        { target: 'm5', label: 'Electrification', desc: 'Traction return current, OLE clearances, and pantograph compatibility are key interface areas.' },
        { target: 'm6', label: 'Rolling Stock', desc: 'Vehicles sit at the centre of the interface web — connecting to track, signalling, electrification, and operations.' },
        { target: 'm7', label: 'Telecoms', desc: 'GSM-R and ETCS data links must interface cleanly with signalling and onboard systems.' },
        { target: 'm8', label: 'Operations', desc: 'The timetable is the ultimate integration test — it depends on every other discipline delivering.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'Why is the track-signalling interface a common source of problems?', options: ['Because track and signalling engineers use different computer systems', 'Because track geometry changes (realignment, re-railing, S&C replacement) can affect signal sighting, track circuit boundaries, and axle counter positions, and these dependencies are often poorly documented or communicated between disciplines', 'Because track and signalling are always designed by the same team, causing groupthink', 'Because signalling does not interact with track at all'], correct: 1, explanation: 'Track and signalling are deeply coupled: signal positions depend on braking distances and sighting from specific track geometry, track circuits depend on rail joints and insulated blocks, and points machines must align with specific switch layouts. When one discipline changes something, the other may be affected in ways that are not immediately obvious — classic interface bugs arising from tightly coupled but separately managed subsystems.' },
  { text: 'What clearance issue arises at the electrification-structures interface?', options: ['Structures block the electricity supply from substations', 'Overhead line equipment requires minimum electrical clearances to earthed structures (bridges, tunnels, canopies), and existing structures may have insufficient headroom, requiring expensive raising, rebuilding, or track lowering', 'Electrification wires must never pass through any structure', 'Structures generate electromagnetic interference that disrupts traction power'], correct: 1, explanation: 'A 25 kV overhead wire needs defined electrical clearances to any earthed metalwork. Many Victorian-era bridges and tunnels were built with minimal headroom. Electrification projects frequently discover that structures need raising, tracks need lowering, or wire geometry needs complex arrangements to achieve clearance — often the most expensive and disruptive part of the project.' },
  { text: 'What is an Interface Control Document (ICD)?', options: ['A regulatory licence required to operate a railway interface', 'A formal document that defines the physical, electrical, data, and procedural interfaces between two subsystems or disciplines, including responsibilities and acceptance criteria', 'A user manual for the signalling control panel', 'A document that records all faults found during testing'], correct: 1, explanation: 'An ICD is the contractual and technical definition of how two systems connect. It specifies physical dimensions, electrical characteristics, data formats and protocols, timing requirements, environmental conditions, and which party is responsible for what. Without clear ICDs, each discipline makes assumptions about the other that may be wrong — the engineering equivalent of an API contract between microservices.' },
  { text: 'What is the most effective way to catch cross-discipline integration issues early?', options: ['Assign all disciplines to a single engineer to avoid communication problems', 'Conduct structured interface reviews and integrated design reviews involving all affected disciplines from early design stages, supported by interface registers and formal ICDs', 'Wait until testing and commissioning to discover interface issues, since they cannot be predicted', 'Use the same software tools across all engineering disciplines'], correct: 1, explanation: 'Cross-discipline integration reviews at early design stages are far more cost-effective than discovering interface problems during construction or commissioning. An interface register tracks all identified interfaces and their status. Regular multi-discipline design reviews ensure each team understands how their changes affect others — the engineering equivalent of architecture reviews and cross-team design documents in software development.' },
];
