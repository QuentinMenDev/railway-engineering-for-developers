import { VModelLifecycle } from '../../../components/symbols';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M9L3({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <VModelLifecycle style={{ maxWidth: '400px' }} />
        </div>
        <figcaption>CAD diagram: V-Model lifecycle — requirements decompose (left), implementation at bottom, verification traces back (right). Horizontal dashed lines show traceability.</figcaption>
      </figure>

      <h3>Systems Engineering for Railways</h3>
      <p>
        Railways are <strong>systems of systems</strong>. No single discipline can deliver a
        working railway in isolation — the value emerges only when track, signalling,
        electrification, rolling stock, telecommunications, and operations work together as
        an integrated whole. <strong>Systems engineering</strong> is the discipline that manages
        this integration. It ensures that the railway, as a complete system, meets the needs
        of its stakeholders — passengers, freight customers, operators, maintainers, and the
        public — not just the technical specifications of its individual subsystems.
      </p>
      <p>
        The foundation of systems engineering is <strong>requirements tracing</strong>. It
        begins with operational needs: "The railway must carry 20,000 passengers per hour in
        each direction at a peak-hour frequency of 24 trains per hour." This high-level
        requirement is decomposed into system-level requirements: signalling must deliver a
        headway of 150 seconds, track must support a line speed of 160 km/h, rolling stock
        must provide 1,000 seats per train with a dwell time of 30 seconds. These system-level
        requirements are further decomposed into subsystem specifications: the interlocking
        must process route requests within 3 seconds, the track geometry must support 150 mm
        of cant at the tightest curve, the traction motors must deliver 300 kW per axle.
        Every requirement at every level must be traceable back to an operational need and
        forward to a verification method.
      </p>

      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Diagram of the V-model showing the left side (decomposition: concept → system requirements → subsystem specs → component specs) and the right side (integration: component test → subsystem integration → system validation → acceptance). Or a photo of a systems engineering review/testing session.</p>
        </div>
        <figcaption>The V-model — the standard framework for railway systems engineering, ensuring every requirement is verified at its corresponding level.</figcaption>
      </figure>

      <h3>The V-Model in Practice</h3>
      <p>
        The <strong>V-model</strong> is the standard development framework for railway systems
        engineering. The left side of the V represents decomposition: from operational concept
        through system requirements, subsystem requirements, and component specifications. The
        bottom of the V is implementation: detailed design and manufacturing. The right side
        represents integration and verification: component testing, subsystem integration
        testing, system validation, and operational acceptance. Each level on the right side
        verifies the requirements defined at the corresponding level on the left side. The
        V-model ensures that nothing is built without a requirement and nothing is required
        without being verified.
      </p>
      <p>
        In practice, applying the V-model to a railway project means establishing clear
        <strong> verification and validation (V&V)</strong> plans at each level. At the system
        level, validation asks: "Are we building the right system? Does it meet the stakeholders'
        needs?" This is confirmed through operational acceptance testing — running the timetable,
        measuring journey times, surveying passenger satisfaction. At the subsystem level,
        verification asks: "Are we building the system right? Does each subsystem meet its
        specification?" This is confirmed through discipline-specific testing — signalling
        functional testing, track geometry measurement, OLE contact force testing.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>V-Model Level (Left)</th>
              <th>Activity</th>
              <th>V-Model Level (Right)</th>
              <th>Verification Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Operational Concept</strong></td>
              <td>Define service requirement, timetable concept, capacity targets</td>
              <td><strong>Operational Acceptance</strong></td>
              <td>Shadow running, trial operations, performance monitoring against service targets</td>
            </tr>
            <tr>
              <td><strong>System Requirements</strong></td>
              <td>Define headway, line speed, availability targets, safety targets (THR)</td>
              <td><strong>System Validation</strong></td>
              <td>Integrated testing with all subsystems, end-to-end functional testing, RAMS demonstration</td>
            </tr>
            <tr>
              <td><strong>Subsystem Requirements</strong></td>
              <td>Signalling principles, OLE design parameters, track standards, telecoms coverage</td>
              <td><strong>Subsystem Verification</strong></td>
              <td>Discipline-specific testing: signalling route proving, OLE clearance and tension tests, track geometry measurement</td>
            </tr>
            <tr>
              <td><strong>Component Specifications</strong></td>
              <td>Relay specifications, mast foundation designs, rail material standards, cable specifications</td>
              <td><strong>Component Testing</strong></td>
              <td>Type testing, factory acceptance testing (FAT), material certificates, installation checks</td>
            </tr>
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}><strong>Implementation (Bottom of V):</strong> Detailed design, manufacture, construction, installation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A critical principle of the V-model is that the verification plan on the right side must
        be written at the same time as the requirements on the left side — not after
        implementation. This is because the act of writing the verification plan exposes ambiguous,
        untestable, or contradictory requirements. If a requirement cannot be verified, it is not
        a valid requirement. For example, a requirement that "the signalling system shall be
        reliable" is not verifiable; a requirement that "the signalling system shall achieve an
        MTBF of not less than 50,000 hours, demonstrated through a 12-month reliability growth
        programme" is verifiable. Writing verification plans early also ensures that the testing
        infrastructure (test rigs, test trains, instrumentation, access to the railway during
        testing windows) is planned and resourced in the project programme.
      </p>

      <h3>The EN 50126 Lifecycle in Detail</h3>
      <p>
        <strong>EN 50126</strong> (Railway Applications — The Specification and Demonstration of
        Reliability, Availability, Maintainability and Safety) defines a complete lifecycle for
        RAMS management, consisting of 14 phases. This lifecycle is broader than just the design
        and construction phases — it extends from initial concept through to decommissioning.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Title</th>
              <th>Key RAMS Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td><strong>Concept</strong></td><td>Define system mission, preliminary RAMS targets, initial hazard identification</td></tr>
            <tr><td>2</td><td><strong>System Definition and Application Conditions</strong></td><td>Define system boundary, operating environment, external interfaces, relevant standards</td></tr>
            <tr><td>3</td><td><strong>Risk Analysis</strong></td><td>Systematic hazard identification, risk evaluation, definition of tolerable risk criteria, Preliminary Hazard Analysis (PHA)</td></tr>
            <tr><td>4</td><td><strong>System Requirements</strong></td><td>Allocate RAMS requirements to subsystems, define Safety Integrity Levels (SILs), establish RAM targets per subsystem</td></tr>
            <tr><td>5</td><td><strong>Apportionment of System Requirements</strong></td><td>Distribute RAMS targets across subsystems using reliability block diagrams, fault trees, and allocation techniques</td></tr>
            <tr><td>6</td><td><strong>Design and Implementation</strong></td><td>Design to meet RAMS requirements, apply safety techniques appropriate to SIL, design FMEA, software development per EN 50128</td></tr>
            <tr><td>7</td><td><strong>Manufacturing</strong></td><td>Quality assurance during manufacture, production testing, burn-in testing for early-life failures</td></tr>
            <tr><td>8</td><td><strong>Installation</strong></td><td>Installation verification, site acceptance testing, environmental testing (EMC, temperature, vibration)</td></tr>
            <tr><td>9</td><td><strong>System Validation</strong></td><td>Integrated system testing, RAMS demonstration testing, safety validation against requirements</td></tr>
            <tr><td>10</td><td><strong>System Acceptance</strong></td><td>Formal acceptance by railway authority, safety case approval, operational readiness confirmation</td></tr>
            <tr><td>11</td><td><strong>Operation and Maintenance</strong></td><td>Performance monitoring, failure data collection, reliability growth tracking, maintenance optimisation</td></tr>
            <tr><td>12</td><td><strong>Performance Monitoring</strong></td><td>Ongoing RAMS data analysis, trend monitoring, comparison against targets, degradation tracking</td></tr>
            <tr><td>13</td><td><strong>Modification and Retrofit</strong></td><td>Change impact assessment, regression testing, safety case update, revalidation</td></tr>
            <tr><td>14</td><td><strong>Decommissioning and Disposal</strong></td><td>Safe removal, environmental obligations, asset register update, knowledge preservation</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The lifecycle is not purely sequential — later phases may reveal issues that require
        revisiting earlier phases. For example, reliability data collected during Phase 11
        (Operation and Maintenance) may show that a component's actual MTBF is significantly
        below the target, triggering a Phase 13 modification. Similarly, a Phase 9 validation
        failure may require a return to Phase 6 to redesign a subsystem. The lifecycle includes
        feedback loops to manage this iteration systematically.
      </p>

      <h3>RAMS and Safety Cases</h3>
      <p>
        <strong>RAMS</strong> — Reliability, Availability, Maintainability, and Safety — is
        the framework for managing the non-functional performance of railway systems. Each
        element addresses a different aspect of dependability:
      </p>
      <ul>
        <li>
          <strong>Reliability:</strong> The probability that the system will perform its
          intended function without failure for a specified period. Measured in Mean Time
          Between Failures (MTBF). A signalling interlocking with an MTBF of 100,000 hours
          will, on average, experience one failure every 11 years.
        </li>
        <li>
          <strong>Availability:</strong> The proportion of time the system is operational and
          ready for use. Depends on both reliability (how often it fails) and maintainability
          (how quickly it can be repaired). A system with 99.9% availability is out of service
          for approximately 8.7 hours per year. Availability is calculated as
          MTBF / (MTBF + MTTR).
        </li>
        <li>
          <strong>Maintainability:</strong> The ease and speed with which the system can be
          restored to working condition after a failure. Measured in Mean Time To Repair (MTTR).
          Designing for maintainability means providing access for maintenance staff, using
          modular replaceable units, and ensuring diagnostic information is available. A low
          MTTR is particularly important on railways because every minute of repair time
          represents service disruption.
        </li>
        <li>
          <strong>Safety:</strong> Freedom from unacceptable risk of harm to people. Railway
          safety is governed by the European standards <strong>EN 50126</strong> (RAMS lifecycle),
          <strong> EN 50128</strong> (software for railway control and protection systems), and
          <strong> EN 50129</strong> (safety-related electronic systems for signalling). These
          standards define Safety Integrity Levels (SILs) from SIL 0 (no safety requirement)
          to SIL 4 (the highest integrity, required for signalling interlockings and train
          protection systems).
        </li>
      </ul>
      <div className="highlight-box">
        <strong>Safety Integrity Levels (SILs):</strong> SIL 0 — no safety requirement. SIL 1 —
        safety-related (e.g., passenger information systems where failure could cause confusion
        but not harm). SIL 2 — safety-relevant (e.g., level crossing obstacle detection). SIL 3
        — high safety integrity (e.g., axle counters for train detection). SIL 4 — the highest
        integrity (e.g., interlockings, ATP systems). The SIL determines the rigour of design,
        verification, and validation activities required — the higher the SIL, the more
        independent assessment, formal methods, and diverse redundancy are required.
      </div>

      <h3>Hazard Analysis Techniques</h3>
      <p>
        Hazard analysis is the systematic process of identifying hazards (conditions or events
        that could lead to harm), analysing their causes and consequences, and determining the
        risk they pose. Railway safety standards require the use of multiple complementary
        techniques because no single technique can identify all hazards. The following are the
        principal techniques used in railway safety engineering.
      </p>
      <p>
        <strong>Preliminary Hazard Analysis (PHA)</strong> is performed early in the project
        lifecycle (EN 50126 Phase 3) using brainstorming, checklists, and expert judgement to
        identify hazards at the system level. The PHA produces an initial <strong>Hazard
        Log</strong> — a living register of all identified hazards, their assessed risk, the
        required mitigations, and the current status of each mitigation. The Hazard Log is the
        central safety management tool throughout the project and operational life.
      </p>
      <p>
        <strong>Hazard and Operability Study (HAZOP)</strong> is a structured workshop-based
        technique that systematically examines deviations from the intended design or operating
        conditions. For each function or parameter, the team applies guide words (no, more, less,
        reverse, other than, early, late) to identify potential deviations and their consequences.
        HAZOP is particularly effective for identifying operational and procedural hazards that
        PHA may miss — for example, "what if the signaller sets a route late?" or "what if the
        maintenance team restores equipment in the wrong sequence?"
      </p>
      <p>
        <strong>Failure Mode and Effects Analysis (FMEA)</strong> is a bottom-up technique that
        systematically examines each component or function, identifies its possible failure modes,
        and assesses the effects of each failure on the subsystem and system. FMEA is particularly
        useful during detailed design when the component-level architecture is known. Each failure
        mode is rated for severity, occurrence probability, and detectability, producing a Risk
        Priority Number (RPN) that helps prioritise mitigation efforts.
      </p>
      <p>
        <strong>Fault Tree Analysis (FTA)</strong> is a top-down, deductive technique that starts
        with an undesirable top event (e.g., "collision between trains") and works backwards through
        logic gates (AND, OR) to identify all possible combinations of basic events that could
        cause it. FTA is valuable for quantitative risk assessment because the probabilities of
        basic events can be combined through the logic gates to calculate the probability of the
        top event. It is also used to demonstrate that the Tolerable Hazard Rate (THR) is met.
      </p>
      <p>
        <strong>Event Tree Analysis (ETA)</strong> is a forward-looking technique that starts with
        an initiating event and maps the possible outcomes depending on whether each subsequent
        barrier or mitigation succeeds or fails. Each path through the event tree represents a
        scenario with a calculable probability and consequence. ETA is useful for understanding
        the effectiveness of protection layers — for example, starting from a signal passed at
        danger (SPAD): does the overlap contain the train? If not, does the train protection
        system intervene? If not, is there a conflicting movement?
      </p>
      <p>
        <strong>Bow-tie analysis</strong> combines FTA (on the left, showing causes of the
        central hazardous event) with ETA (on the right, showing consequences and barriers).
        The bow-tie provides a powerful visual representation of the complete risk picture for
        a hazard, showing both prevention barriers (reducing the likelihood of the event) and
        mitigation barriers (reducing the consequences). Bow-tie diagrams are increasingly used
        in railway safety communication because they are accessible to non-specialists while
        retaining analytical rigour.
      </p>

      <h3>CSM-RA: Common Safety Method for Risk Evaluation and Assessment</h3>
      <p>
        The <strong>Common Safety Method for Risk Evaluation and Assessment (CSM-RA)</strong>,
        established by EU Regulation 402/2013 (and retained in UK law), provides a harmonised
        process for assessing whether a change to the railway system is acceptable from a safety
        perspective. CSM-RA applies to any "significant change" to the railway — whether
        technical, operational, or organisational — and is mandatory for all EU and UK railway
        undertakings and infrastructure managers.
      </p>
      <p>
        The CSM-RA process begins with a <strong>significance assessment</strong> — determining
        whether a proposed change is significant enough to require a formal risk evaluation. The
        criteria for significance include: novelty, complexity, consequences of failure, reversibility,
        similarity to previous changes, and monitoring capability. If the change is deemed significant,
        a full risk assessment is required.
      </p>
      <p>
        The risk assessment must demonstrate that the risk associated with the change is acceptable
        using one or more of three principles: (1) <strong>Codes of Practice</strong> — applying
        recognised standards and established engineering practice, (2) <strong>Reference
        Systems</strong> — demonstrating that the changed system is at least as safe as a similar
        system already in safe operation, or (3) <strong>Explicit Risk Estimation</strong> —
        quantitative risk analysis demonstrating that the residual risk is tolerable. In practice,
        most changes use a combination of these principles — codes of practice for well-understood
        aspects and explicit risk estimation for novel aspects.
      </p>
      <p>
        The risk assessment must be reviewed by an <strong>Assessment Body</strong> — an independent
        organisation accredited to assess CSM-RA compliance. The Assessment Body does not approve
        the change but provides an independent opinion on whether the risk assessment process has
        been correctly applied and the conclusions are justified. This independent oversight is a
        fundamental element of railway safety governance.
      </p>

      <h3>Safety Verification and Validation</h3>
      <p>
        <strong>Safety verification</strong> confirms that the system has been designed and built
        in accordance with the safety requirements — it answers the question "was it built right?"
        <strong> Safety validation</strong> confirms that the system, as implemented, actually
        achieves the required level of safety in its operational context — it answers "was the
        right thing built?" Both are required by EN 50126 and EN 50129, and they are complementary
        activities performed at different stages of the lifecycle.
      </p>
      <p>
        Verification activities include: design reviews (checking that the design implements the
        safety requirements), analysis (fault tree analysis, FMEA confirming that safety targets
        are met by the design), testing (functional testing, stress testing, environmental
        testing), and inspection (checking that the installation matches the design). Verification
        is typically performed by the designer or an independent verification team.
      </p>
      <p>
        Validation activities include: integrated system testing in the operational environment,
        demonstration of RAMS performance against targets, confirmation that all hazard mitigations
        identified in the Hazard Log are implemented and effective, and review of the complete
        safety case by the safety authority. Validation is typically performed by the project
        assessor or an independent safety assessor.
      </p>

      <h3>Independent Safety Assessment (ISA)</h3>
      <p>
        The <strong>Independent Safety Assessor (ISA)</strong> is a person or organisation
        independent of the project team that provides an independent assessment of whether
        the safety activities have been correctly performed and the safety arguments are sound.
        The ISA role is required by EN 50129 for safety-related electronic systems and is
        considered best practice for all railway safety assessments.
      </p>
      <p>
        The ISA's independence is critical — they must have no commercial interest in the
        project's outcome and no organisational reporting line to the project team. In the UK,
        ISA organisations are typically accredited by UKAS (United Kingdom Accreditation Service)
        to EN ISO/IEC 17020 (requirements for inspection bodies) and must demonstrate competence
        in the relevant railway safety standards.
      </p>
      <p>
        The ISA's role spans the project lifecycle. During design, the ISA reviews the safety
        plan, the hazard analysis, the safety requirements allocation, and the SIL assignments.
        During implementation, the ISA reviews the design verification evidence, the test plans,
        and the test results. During validation, the ISA reviews the safety case and provides
        an independent safety assessment report. This report, which states the ISA's opinion on
        whether the system is acceptably safe, is a key input to the safety authority's decision
        on whether to approve the system for entry into service.
      </p>
      <p>
        The ISA does not approve the system — that responsibility rests with the <strong>duty
        holder</strong> (typically the infrastructure manager or railway undertaking) through the
        safety authority. The ISA provides assurance that the safety arguments are robust and
        the evidence is sufficient, but the duty holder takes the decision and accepts the
        residual risk.
      </p>

      <h3>EN 50128: Software Safety</h3>
      <p>
        <strong>EN 50128</strong> (Railway Applications — Communication, Signalling and Processing
        Systems — Software for Railway Control and Protection Systems) specifies the requirements
        for developing, deploying, and maintaining software used in safety-related railway systems.
        Given that modern signalling, train control, and protection systems are predominantly
        software-based, EN 50128 is one of the most important standards in the railway safety
        framework.
      </p>
      <p>
        EN 50128 assigns required techniques and measures for each phase of the software
        development lifecycle, depending on the software's SIL. The higher the SIL, the more
        rigorous the required techniques. Key requirements include:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>SIL 0–1</th>
              <th>SIL 2</th>
              <th>SIL 3–4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Requirements specification</strong></td>
              <td>Semi-formal methods recommended</td>
              <td>Semi-formal methods highly recommended</td>
              <td>Formal methods highly recommended</td>
            </tr>
            <tr>
              <td><strong>Architecture design</strong></td>
              <td>Structured design</td>
              <td>Structured design with defensive programming</td>
              <td>Formal proof, diverse redundancy, safety bag</td>
            </tr>
            <tr>
              <td><strong>Coding standards</strong></td>
              <td>Recommended</td>
              <td>Highly recommended (e.g., MISRA C)</td>
              <td>Mandatory, restricted language subset</td>
            </tr>
            <tr>
              <td><strong>Testing</strong></td>
              <td>Functional testing, boundary value analysis</td>
              <td>Structural coverage (statement + branch), equivalence classes</td>
              <td>MC/DC coverage, formal verification, back-to-back testing</td>
            </tr>
            <tr>
              <td><strong>Independence</strong></td>
              <td>Self-assessment</td>
              <td>Independent verification team</td>
              <td>Independent verification and validation, independent ISA assessment</td>
            </tr>
            <tr>
              <td><strong>Tool qualification</strong></td>
              <td>Not required</td>
              <td>T2 tools must be validated</td>
              <td>All T2 and T3 tools must be qualified to the SIL of the output</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Tool qualification</strong> is a frequently underestimated aspect of EN 50128.
        Development tools are classified as T1 (no influence on the output, e.g., a text editor),
        T2 (could introduce errors that are detectable by subsequent activities, e.g., a compiler),
        or T3 (could introduce undetectable errors, e.g., a code generator or test tool). T2 and
        T3 tools used for SIL 3/4 software must themselves be qualified — their correct operation
        must be demonstrated with evidence appropriate to the SIL. This means that even the
        compiler, linker, and test framework used to build and test safety-critical signalling
        software must be shown to be trustworthy.
      </p>

      <h3>EN 50129: Safety Case Structure</h3>
      <p>
        <strong>EN 50129</strong> (Railway Applications — Communication, Signalling and Processing
        Systems — Safety Related Electronic Systems for Signalling) defines the structure and
        content of the safety case for electronic signalling systems. The standard establishes a
        three-tier safety case architecture that is widely used across the railway industry.
      </p>
      <p>
        The <strong>Generic Product Safety Case (GPSC)</strong> covers the safety of the product
        itself — the hardware and software platform — independent of any particular application.
        It is produced by the equipment manufacturer and demonstrates that the product is capable
        of achieving the claimed SIL when correctly applied. The GPSC includes evidence of the
        development process (compliance with EN 50128 for software and EN 50129 Annex A for
        hardware), type test results, reliability data, and a list of conditions and constraints
        that must be respected when the product is applied.
      </p>
      <p>
        The <strong>Generic Application Safety Case (GASC)</strong> covers the safety of the
        product as applied in a particular class of applications — for example, a signalling
        interlocking applied to a UK main-line junction. The GASC demonstrates that the generic
        product, when configured according to the generic application rules, will achieve the
        required safety for that class of application. It includes evidence that the application
        rules correctly implement the required safety functions, that the configuration process is
        controlled, and that the interface conditions from the GPSC are satisfied.
      </p>
      <p>
        The <strong>Specific Application Safety Case (SASC)</strong> covers the safety of the
        product as applied at a specific location — for example, the interlocking at Clapham
        Junction. The SASC demonstrates that the specific application data (the actual interlocking
        tables, signal positions, track circuit boundaries for that location) have been correctly
        derived from the operational requirements and correctly configured in the product. The
        SASC includes evidence of site-specific hazard analysis, verification of the application
        data, and site testing results.
      </p>
      <div className="highlight-box">
        <strong>The three-tier safety case architecture</strong> enables efficiency through
        reuse: the GPSC is produced once per product, the GASC once per application class,
        and only the SASC is specific to each installation. This is critical for signalling
        deployments where the same product may be installed at hundreds of locations — without
        the three-tier approach, each location would require a complete safety case from scratch.
      </div>

      <h3>Human Factors in Railway Safety</h3>
      <p>
        Technical safety measures — interlockings, train protection systems, safety-critical
        software — are essential but not sufficient. A large proportion of railway incidents
        involve <strong>human factors</strong>: errors in operation, maintenance, or design
        that arise from the interaction between people and the technical systems they use.
        Human factors engineering aims to design systems, procedures, and working environments
        that minimise the likelihood and consequences of human error.
      </p>
      <p>
        In the UK, <strong>GE/GN 8668 (Managing Human Factors Integration When Modifying or
        Introducing Rolling Stock and Infrastructure)</strong> provides guidance on integrating
        human factors into railway engineering projects. The standard requires that human factors
        be considered throughout the project lifecycle — not just as a retrospective review of
        the finished design but as an input to design decisions from the outset.
      </p>
      <p>
        Key human factors considerations for railway design include: <strong>display and control
        design</strong> (ensuring that signaller workstations, driver cab layouts, and maintenance
        interfaces present information clearly and allow reliable operation); <strong>task
        analysis</strong> (understanding what tasks operators and maintainers must perform and
        designing systems to support those tasks); <strong>workload management</strong> (ensuring
        that operators are neither overloaded nor underloaded, both of which increase error risk);
        <strong>error tolerance</strong> (designing systems that either prevent errors or detect
        and recover from them — interlockings are the classic example of error-tolerant design,
        preventing signallers from setting conflicting routes); and <strong>competence
        management</strong> (ensuring that all staff have the training, experience, and ongoing
        assessment needed to perform safety-critical tasks).
      </p>
      <p>
        Human factors analysis is also a required input to the hazard analysis process. For every
        hazard involving human interaction, the analysis must consider: the likelihood of human
        error given the task demands and environmental conditions, the detectability of the error
        before it leads to harm, and the effectiveness of any barriers or mitigations that depend
        on human action. Safety cases that rely on human vigilance as a primary barrier — without
        technical backup — are increasingly considered inadequate, reflecting the principle that
        safety-critical functions should be automated wherever practicable and that humans should
        serve as an additional layer of protection, not the primary one.
      </p>

      <h3>A safety case</h3>
      <p>
        A <strong>safety case</strong> is the documented argument that a system is acceptably
        safe. It combines evidence from hazard analysis, risk assessment, design verification,
        testing, and operational experience into a structured argument. The safety case must
        demonstrate that all identified hazards have been mitigated to a tolerable level,
        typically using the ALARP (As Low As Reasonably Practicable) principle. Safety cases
        are living documents that must be maintained throughout the system's operational life
        and updated whenever the system is modified.
      </p>
      <p>
        The <strong>ALARP principle</strong> requires that risk be reduced to a level that is as
        low as reasonably practicable — meaning that further risk reduction would require effort,
        time, or cost that is grossly disproportionate to the benefit achieved. ALARP is not
        the same as "as low as possible" — it acknowledges that zero risk is unachievable and
        that resources spent on marginal risk reduction in one area might achieve greater safety
        benefit if applied elsewhere. The ALARP demonstration is a key component of every safety
        case and requires explicit argument for each significant residual risk.
      </p>

      <h3>Whole-Life Cost and Asset Management</h3>
      <p>
        Railway infrastructure is long-lived — track structures may last 30–50 years, signalling
        systems 25–40 years, bridges and tunnels 100+ years. The <strong>whole-life cost
        (WLC)</strong> of a railway asset includes not just its initial capital cost but also
        its operating cost, maintenance cost, renewal cost, and disposal cost over its entire
        service life. For many railway assets, the maintenance and renewal costs over the asset
        life significantly exceed the initial capital cost — a decision that saves money at
        construction but increases maintenance cost may be a poor whole-life choice.
      </p>
      <p>
        <strong>ISO 55000</strong> (Asset Management) provides the international framework for
        managing physical assets to deliver value over their whole life. Applied to railways,
        asset management involves: understanding the current condition and performance of every
        asset (through inspection, monitoring, and data analysis), predicting future degradation
        and the consequences of failure, planning interventions (maintenance, renewal, enhancement)
        to optimise whole-life cost while meeting safety and performance requirements, and making
        investment decisions based on risk and value rather than age or condition alone.
      </p>
      <p>
        Whole-life cost analysis is essential during the design phase because the design determines
        the maintenance regime. For example, choosing a concrete sleeper over a timber sleeper
        increases the capital cost but reduces the maintenance cost (concrete sleepers have a
        design life of 50+ years vs 25–35 years for treated timber). Choosing ETCS Level 2 over
        conventional signalling may increase the initial system cost but reduces the lineside
        equipment (and therefore the maintenance access requirements and possession costs).
        Choosing stainless steel for overhead line fittings rather than galvanised steel increases
        the material cost but eliminates the need for periodic re-galvanising in aggressive
        environments (coastal, tunnels).
      </p>
      <p>
        The RAM parameters (reliability, availability, maintainability) directly feed into whole-life
        cost analysis. A more reliable system fails less often, requiring fewer unplanned maintenance
        interventions. A more maintainable system can be repaired faster, reducing the operational
        impact of failures. A more available system delivers more revenue service, generating more
        fare income. These relationships mean that RAMS engineering is not just a safety discipline
        but an economic discipline — investing in reliability and maintainability at the design
        stage reduces whole-life cost and improves the business case.
      </p>

      <h3>Miniature Railways: The Hobby as Microcosm</h3>
      <p>
        For those who come to railway engineering through the hobby of model or miniature
        railways, it is worth recognising that a well-designed miniature railway is a genuine
        microcosm of the full-size system. A 7.25-inch gauge miniature railway faces the same
        fundamental challenges: track must be aligned and gauged accurately, points must be
        interlocked, signals must enforce safe separation, structures must clear the loading
        gauge, and the timetable must be operationally deliverable. The physics scales
        differently (lighter axle loads, lower speeds, tighter curves), but the engineering
        principles are identical.
      </p>
      <p>
        Building a miniature railway is an excellent way to develop an intuitive understanding
        of railway engineering interfaces. When you discover that your signal cannot be seen
        past the bridge you just built, or that your point motor fouls the drainage channel,
        or that your locomotive stalls on the gradient you thought was acceptable — you are
        experiencing exactly the same interface failures that occur on full-size projects,
        just at a scale where the consequences are educational rather than catastrophic. Many
        professional railway engineers maintain an active involvement in miniature railways
        precisely because it keeps their systems thinking sharp.
      </p>

      <h3>Comprehensive Railway Glossary</h3>
      <p>
        The following glossary brings together key terms from every module in this curriculum.
        Understanding this shared vocabulary is essential for effective communication across
        disciplines — many interface failures begin with two engineers using the same word to
        mean different things, or different words to mean the same thing.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Term</th><th>Definition</th><th>Primary Module</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>ALARP</strong></td><td>As Low As Reasonably Practicable. The principle that risk must be reduced until further reduction would require effort grossly disproportionate to the benefit. Central to UK railway safety cases.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Ballast</strong></td><td>Crushed stone (typically granite) placed beneath and around sleepers to distribute load, provide drainage, and allow track geometry adjustment.</td><td>Track (M1)</td></tr>
            <tr><td><strong>BCR</strong></td><td>Benefit-Cost Ratio. The ratio of monetised benefits to costs used to assess value for money. A BCR above 2.0 is generally considered high value for money in UK transport appraisal.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Cant</strong></td><td>The superelevation of the outer rail on a curve, expressed in millimetres. Counteracts centrifugal force to improve passenger comfort and reduce rail wear.</td><td>Track (M1)</td></tr>
            <tr><td><strong>CSM-RA</strong></td><td>Common Safety Method for Risk Evaluation and Assessment. The EU-mandated process for assessing safety of railway changes, requiring demonstration that risk is acceptable.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>CWR</strong></td><td>Continuously Welded Rail. Rails welded into long strings (often several kilometres) eliminating joints. Reduces noise, maintenance, and rolling resistance but requires careful management of thermal stress.</td><td>Track (M1)</td></tr>
            <tr><td><strong>DCO</strong></td><td>Development Consent Order. The planning consent mechanism for nationally significant infrastructure projects under the Planning Act 2008.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Earthworks</strong></td><td>Cuttings (excavated) and embankments (built up) that create the railway formation at the required level. Subject to geotechnical risks including slope instability and settlement.</td><td>Civil (M2)</td></tr>
            <tr><td><strong>EMC</strong></td><td>Electromagnetic Compatibility. The ability of electrical and electronic equipment to function in its intended electromagnetic environment without introducing intolerable interference.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>ETCS</strong></td><td>European Train Control System. A digital signalling system that transmits movement authorities directly to the train via balises (Level 1/2) or radio (Level 2/3), replacing lineside signals.</td><td>Signalling (M4)</td></tr>
            <tr><td><strong>ETA</strong></td><td>Event Tree Analysis. A forward-looking hazard analysis technique that models the possible outcomes from an initiating event through successive barrier successes or failures.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>FMEA</strong></td><td>Failure Mode and Effects Analysis. A bottom-up technique that identifies component failure modes and assesses their effects on the system. Used in railway design per EN 50126.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Formation</strong></td><td>The prepared ground surface on which the track structure is built. Must provide adequate bearing capacity and drainage.</td><td>Civil (M2)</td></tr>
            <tr><td><strong>FTA</strong></td><td>Fault Tree Analysis. A top-down, deductive technique using logic gates to identify all combinations of basic events that could cause an undesirable top event.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Gauge (track)</strong></td><td>The distance between the inner faces of the two running rails, measured 14 mm below the rail surface. Standard gauge is 1,435 mm worldwide.</td><td>Track (M1)</td></tr>
            <tr><td><strong>GRIP</strong></td><td>Governance for Railway Investment Projects. Network Rail's eight-stage project lifecycle framework, being succeeded by PACE.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>GSM-R</strong></td><td>Global System for Mobile Communications — Railway. A dedicated mobile communications standard for voice and data on railways, being succeeded by FRMCS (Future Railway Mobile Communication System).</td><td>Telecoms (M7)</td></tr>
            <tr><td><strong>Hazard Log</strong></td><td>A living register of all identified hazards, their assessed risk, required mitigations, and current status. The central safety management document throughout the project lifecycle.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Headway</strong></td><td>The minimum time interval between successive trains on the same line. Determined by signalling system, braking distance, and operating practices. Typically 2-3 minutes on busy lines.</td><td>Operations (M8)</td></tr>
            <tr><td><strong>ICD</strong></td><td>Interface Control Document. A formal document defining the physical, electrical, functional, and procedural requirements at the boundary between two disciplines or systems.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Interlocking</strong></td><td>A safety system that prevents conflicting signal routes from being set simultaneously. Ensures that points are correctly set and locked before a signal clears. The core of railway safety.</td><td>Signalling (M4)</td></tr>
            <tr><td><strong>ISA</strong></td><td>Independent Safety Assessor. A person or organisation independent of the project that assesses whether safety activities are correct and safety arguments are sound. Required by EN 50129.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Loading Gauge</strong></td><td>The maximum cross-sectional envelope within which a rail vehicle must fit. Varies by railway — the UK has one of the most restrictive in Europe.</td><td>Rolling Stock (M6)</td></tr>
            <tr><td><strong>MTBF</strong></td><td>Mean Time Between Failures. A measure of reliability, representing the average time between consecutive failures of a repairable system.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>MTTR</strong></td><td>Mean Time To Repair. A measure of maintainability, representing the average time to restore a system to working condition after a failure.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>OHL / OCS</strong></td><td>Overhead Line / Overhead Contact System. The catenary and contact wire system that delivers electrical power to trains via a pantograph. Typically 25 kV AC on mainlines.</td><td>Electrification (M5)</td></tr>
            <tr><td><strong>Pantograph</strong></td><td>The spring-loaded, articulated arm on the roof of an electric train that maintains contact with the overhead wire to collect traction current.</td><td>Electrification (M5)</td></tr>
            <tr><td><strong>Possession</strong></td><td>A planned period during which a section of track is closed to train services and handed over to engineering staff for maintenance or construction work.</td><td>Operations (M8)</td></tr>
            <tr><td><strong>RAMS</strong></td><td>Reliability, Availability, Maintainability, and Safety. The framework for specifying and verifying the dependability of railway systems, governed by EN 50126.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>SIL</strong></td><td>Safety Integrity Level. A measure of the required safety performance of a function, from SIL 0 (no safety requirement) to SIL 4 (highest integrity, e.g., interlockings).</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Sleeper</strong></td><td>The transverse beam (concrete, timber, or steel) that supports the rails, maintains gauge, and transfers load to the ballast. Spaced at approximately 650 mm centres.</td><td>Track (M1)</td></tr>
            <tr><td><strong>Subgrade</strong></td><td>The natural ground beneath the formation. Its bearing capacity determines the required thickness of formation layers and the long-term stability of the track.</td><td>Civil (M2)</td></tr>
            <tr><td><strong>THR</strong></td><td>Tolerable Hazard Rate. The maximum acceptable rate of occurrence for a hazardous event, derived from the overall safety target and apportioned to individual hazards.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>Traction Return</strong></td><td>The path by which electric traction current returns from the train to the power supply. Usually through the running rails, creating interfaces with signalling track circuits.</td><td>Electrification (M5)</td></tr>
            <tr><td><strong>Turnout</strong></td><td>A track component (also called a switch or point) that allows a train to diverge from one track to another. Comprises switch rails, a crossing (frog), and closure rails.</td><td>Track (M1)</td></tr>
            <tr><td><strong>TWAO</strong></td><td>Transport and Works Act Order. The consent mechanism under the Transport and Works Act 1992 for authorising railway and tramway works in England and Wales.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>V-model</strong></td><td>The systems engineering development framework where the left side decomposes requirements, the bottom implements, and the right side verifies. Each right-side level corresponds to a left-side level.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>WLC</strong></td><td>Whole-Life Cost. The total cost of an asset over its entire service life, including capital, operating, maintenance, renewal, and disposal costs.</td><td>Capstone (M9)</td></tr>
            <tr><td><strong>WTT</strong></td><td>Working Timetable. The complete, detailed timetable used by railway staff, containing all train movements including empty stock, engineering trains, and pathing allowances not shown in the public timetable.</td><td>Operations (M8)</td></tr>
          </tbody>
        </table>
      </div>

      <Callout type="analogy">
        Systems engineering for railways is like <strong>architecture decision records combined
        with integration testing across all services</strong>. Requirements tracing is your
        dependency graph — every feature (operational need) maps to components (subsystem
        specifications) through well-defined interfaces. The V-model is your CI/CD pipeline
        run in slow motion: you cannot deploy (construct) until every test at every level has
        passed. RAMS is your SLA framework — MTBF is your uptime target, MTTR is your
        incident response time, and SIL levels are your criticality ratings. A safety case
        is your post-incident review written before the incident happens: a structured,
        evidence-based argument that the system will not fail in ways that harm people. EN 50128
        software safety requirements are your code quality standards on steroids — imagine if
        your linter, test framework, and CI pipeline all had to be independently certified
        before you could trust their output. The three-tier safety case is like your microservice
        architecture: a validated base image (GPSC), a tested deployment template (GASC), and
        a site-specific configuration (SASC). And the glossary? It is your team's ubiquitous
        language — because in both software and railways, half of all bugs start with a
        misunderstanding about what a word means.
      </Callout>

      <Callout type="info" label="The EN 5012x Standards">
        The three pillars of railway safety standards — EN 50126 (RAMS), EN 50128 (software),
        and EN 50129 (electronic systems) — form an interlocking framework. EN 50126 defines
        the lifecycle and RAMS requirements. EN 50128 specifies the software development
        practices required at each SIL level, including coding standards, testing coverage,
        and formal methods. EN 50129 defines the evidence structure for the safety case and
        the conditions for safety approval. Together, they ensure that safety is not an
        afterthought but is designed in, verified, and maintained throughout the system's life.
        These standards are complemented by EN 50159 (safety-related communication in railway
        systems), EN 50121 (electromagnetic compatibility), and EN 50238 (compatibility between
        rolling stock and train detection systems).
      </Callout>

      <Callout type="info" label="CSM-RA and the Assessment Body">
        The Common Safety Method for Risk Evaluation and Assessment (CSM-RA) is the legal
        framework for assessing safety changes on railways in the UK and EU. Any significant
        change — technical, operational, or organisational — must be assessed using one or
        more of three risk acceptance principles: application of codes of practice, comparison
        with a reference system, or explicit risk estimation. The assessment must be reviewed
        by an accredited Assessment Body that is independent of the project. The CSM-RA
        process ensures that safety is formally considered for every change to the railway,
        not just for new installations.
      </Callout>

      <Callout type="info" label="ISO 55000 and Whole-Life Asset Management">
        ISO 55000 provides the framework for managing assets to deliver value over their
        whole life. For railways, this means making design and investment decisions based on
        whole-life cost rather than capital cost alone. A decision that is cheapest to build
        may be the most expensive to maintain. RAMS engineering directly supports asset
        management: reliability data informs maintenance planning, maintainability design
        reduces repair costs and service disruption, and availability targets align engineering
        performance with operational and commercial objectives.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0', label: 'Foundations', desc: 'The fundamental physics and principles that all system requirements must respect.' },
        { target: 'm1', label: 'Track', desc: 'Track geometry, CWR stress management, and turnout design are subsystem specifications traced from operational needs.' },
        { target: 'm2', label: 'Civil Engineering', desc: 'Formation design, drainage, and earthworks stability are verified through the V-model right side.' },
        { target: 'm3', label: 'Structures', desc: 'Bridge and tunnel clearances, loading assessments, and structural safety cases follow EN standards.' },
        { target: 'm4', label: 'Signalling', desc: 'Interlockings are SIL 4 systems — the highest safety integrity level, requiring the most rigorous verification.' },
        { target: 'm5', label: 'Electrification', desc: 'Power supply reliability and OLE safety are key RAMS parameters for electrified railways.' },
        { target: 'm6', label: 'Rolling Stock', desc: 'Vehicle certification and type approval demonstrate compliance with system-level requirements.' },
        { target: 'm7', label: 'Telecoms', desc: 'Communications reliability directly impacts signalling availability, especially for ETCS Level 2/3.' },
        { target: 'm8', label: 'Operations', desc: 'Operational acceptance is the top of the V-model right side — the ultimate validation that the system works.' },
      ]} />
    </>
  );
}

export const quiz: QuizQuestion[] = [
  { text: 'What is the V-model in systems engineering?', options: ['A technique for calculating the speed of trains on curves', 'A development lifecycle where each decomposition stage on the left (requirements → design → implementation) has a corresponding verification/validation stage on the right, ensuring that every requirement is tested at the appropriate level', 'A model of voltage distribution in electrified railways', 'A management hierarchy shaped like the letter V'], correct: 1, explanation: 'The V-model ensures traceability from requirements through design to testing. System requirements are verified by system acceptance tests, subsystem requirements by integration tests, and component specifications by unit tests. The key principle is that you define how you will verify each requirement at the same time you write it — "test-driven development" applied to systems engineering.' },
  { text: 'What does RAMS stand for in railway systems engineering?', options: ['Railway Automated Management System', 'Reliability, Availability, Maintainability, and Safety — four key properties that must be specified, designed for, and demonstrated throughout the system lifecycle', 'Risk Assessment and Mitigation Strategy', 'Remote Access Monitoring System'], correct: 1, explanation: 'RAMS are interdependent system properties. Reliability (how often it fails), Availability (proportion of time it is operational), Maintainability (how quickly it can be restored), and Safety (freedom from unacceptable risk) must all be quantified as requirements and demonstrated through analysis and testing. Improving one may affect another — for example, adding redundancy improves availability but increases maintenance burden.' },
  { text: 'What role do EN 50126, EN 50128, and EN 50129 play in railway safety?', options: ['They specify the dimensions of railway rolling stock', 'EN 50126 covers the overall RAMS lifecycle, EN 50128 covers software safety, and EN 50129 covers safety-related electronic systems — together they form the framework for demonstrating that railway systems are acceptably safe', 'They are numbering schemes for European railway routes', 'They define the chemical composition of rail steel'], correct: 1, explanation: 'These three CENELEC standards form a coherent safety framework. EN 50126 defines the RAMS lifecycle process (hazard identification, risk analysis, safety requirements). EN 50128 specifies techniques for developing safety-related software (coding standards, testing, independence). EN 50129 defines how to build a safety case for electronic/programmable systems. Together they ensure that safety is systematically addressed, not left to chance.' },
  { text: 'What is "requirements traceability" and why is it essential?', options: ['The ability to trace the physical route of a railway on a map', 'The ability to link every high-level requirement through design decisions to implementation and then to the specific test that verifies it, ensuring nothing is missed and every feature exists for a documented reason', 'A technique for tracing faults in electrical wiring', 'Recording which engineer wrote each requirement'], correct: 1, explanation: 'Traceability creates a chain: stakeholder need → system requirement → subsystem requirement → design element → test case. Upward traceability confirms every implementation serves a real need (no gold-plating). Downward traceability confirms every requirement has been implemented and verified (no gaps). Without traceability, complex systems accumulate untested requirements and unjustified features — the same principle as code coverage and requirement tracking in software engineering.' },
];
