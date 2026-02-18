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

// ─── Module 9: Capstone — How It All Fits Together ───────────────────

function M9L1({ goTo }) {
  return (
    <>
      <h3>The Stages of a Railway Project</h3>
      <p>
        A railway project does not begin with design and end with construction. It follows a
        structured lifecycle that may span a decade or more from initial concept to the first
        revenue service. Understanding this lifecycle is essential because decisions made in
        early stages constrain everything that follows — and mistakes discovered late are
        exponentially more expensive to fix. The typical lifecycle comprises six broad phases:
        feasibility, preliminary design, detailed design, construction, testing and
        commissioning, and operations and maintenance.
      </p>
      <p>
        In the UK, this lifecycle is formalised through <strong>GRIP (Governance for Railway
        Investment Projects)</strong>, which defines eight stages: Output Definition, Feasibility,
        Option Selection, Single Option Development, Detailed Design, Construction Test and
        Commission, Scheme Hand Back, and Project Close Out. Each stage has defined deliverables,
        review gates, and approval criteria. No stage can begin until the preceding gate has been
        passed. This staged approach exists because railways are safety-critical infrastructure
        where the cost of failure — measured in lives, not just money — demands rigorous control
        at every step.
      </p>
      <p>
        Network Rail has since evolved GRIP into the <strong>PACE (Project Acceleration in a
        Controlled Environment)</strong> framework, which aims to reduce bureaucratic overhead
        while maintaining governance rigour. PACE organises work into four phases — Develop,
        Design, Deliver, and Close — with decision gates between each phase. Regardless of whether
        a project follows GRIP or PACE, the underlying principle is the same: progressively commit
        resources only as uncertainty reduces and confidence in the solution grows.
      </p>

      <h3>GRIP Stages in Detail</h3>
      <p>
        Each GRIP stage has specific objectives, deliverables, and gate criteria. Understanding
        these in detail is essential for anyone working on UK rail projects, because the stage
        determines what design information is expected, what level of cost certainty is required,
        and what approvals must be obtained before progressing.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>GRIP Stage</th>
              <th>Key Deliverables</th>
              <th>Gate Review Focus</th>
              <th>Typical Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1 — Output Definition</strong></td>
              <td>Statement of need, high-level output specification, strategic fit assessment</td>
              <td>Does the project align with the railway's strategic objectives? Is the need genuine and evidenced?</td>
              <td>2–6 months</td>
            </tr>
            <tr>
              <td><strong>2 — Feasibility</strong></td>
              <td>Option long-list, initial environmental appraisal, order-of-magnitude cost estimates (±50%), initial programme</td>
              <td>Are there feasible options that could meet the output requirements within acceptable cost and programme ranges?</td>
              <td>3–9 months</td>
            </tr>
            <tr>
              <td><strong>3 — Option Selection</strong></td>
              <td>Multi-criteria option appraisal, preferred option recommendation, initial business case, environmental screening, preliminary surveys</td>
              <td>Has the preferred option been selected through a robust, auditable process? Does the initial business case demonstrate value for money?</td>
              <td>6–12 months</td>
            </tr>
            <tr>
              <td><strong>4 — Single Option Development (Outline Design)</strong></td>
              <td>Outline design drawings, preliminary hazard analysis, environmental impact assessment, land referencing, planning application preparation, cost estimate (±20%), detailed programme</td>
              <td>Is the design sufficiently mature to proceed to detailed design? Are consents obtainable? Is the cost estimate credible?</td>
              <td>12–24 months</td>
            </tr>
            <tr>
              <td><strong>5 — Detailed Design</strong></td>
              <td>Construction-ready drawings, specifications, method statements, procurement packages, final cost estimate (±10%), integrated test plan, safety verification plan</td>
              <td>Is the design complete, coordinated across all disciplines, and ready for construction? Are all interfaces resolved?</td>
              <td>12–24 months</td>
            </tr>
            <tr>
              <td><strong>6 — Construction, Test and Commission</strong></td>
              <td>As-built records, test certificates, commissioning reports, safety validation evidence, operational readiness assessment</td>
              <td>Has the constructed asset been tested and proven to meet the design requirements? Is it safe to enter service?</td>
              <td>12–60 months</td>
            </tr>
            <tr>
              <td><strong>7 — Scheme Hand Back</strong></td>
              <td>Defects liability handover, O&M manuals, asset register updates, training records, performance monitoring plan</td>
              <td>Has the project been formally handed over to the asset owner and operator? Are all residual defects documented?</td>
              <td>3–12 months</td>
            </tr>
            <tr>
              <td><strong>8 — Project Close Out</strong></td>
              <td>Final account, lessons learned report, benefits realisation plan, archived project records</td>
              <td>Have all contractual obligations been discharged? Are the promised benefits being realised?</td>
              <td>3–6 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Outline Design vs Detailed Design</h3>
      <p>
        The distinction between <strong>GRIP 4 (Single Option Development / Outline Design)</strong> and
        <strong> GRIP 5 (Detailed Design)</strong> is one of the most commonly misunderstood aspects of
        the project lifecycle, yet it is critical because it governs what decisions are fixed and what
        flexibility remains.
      </p>
      <p>
        <strong>Outline Design</strong> establishes the engineering solution in sufficient detail to
        confirm feasibility, obtain planning consents, and produce a reliable cost estimate. At this
        stage, the track alignment is defined to horizontal and vertical geometry level — curves,
        gradients, transitions — but not to individual sleeper positions. Structures are designed to
        general arrangement level: span lengths, deck types, foundation concepts, and clearance
        envelopes are confirmed, but reinforcement details, bearing schedules, and parapet designs
        are not. Signalling is defined at the principles level: signal positions, overlap lengths,
        track circuit boundaries, and interlocking tables in draft form. Electrification is defined
        at route-level: feeder station locations, sectioning strategy, wire run types, and mast
        spacing philosophy. The emphasis is on confirming that the overall solution works and that
        all critical interfaces between disciplines are identified and resolvable.
      </p>
      <p>
        <strong>Detailed Design</strong> produces everything needed for construction. Track engineers
        produce setting-out data to millimetre precision for every rail, sleeper, and fastening.
        Structures engineers produce reinforcement bar schedules, formwork drawings, and bearing
        installation procedures. Signalling engineers produce relay circuit diagrams, cable routing
        plans, and equipment room layouts. Electrification engineers produce mast foundation designs
        specific to each location's geotechnical conditions, wire run tension calculations, and
        bonding and earthing schedules. The critical shift from outline to detailed design is that
        all interface dimensions become contractually fixed — a change to any one discipline's
        detailed design may cascade through every other discipline's design, triggering costly
        rework.
      </p>
      <div className="highlight-box">
        <strong>Key principle:</strong> Outline design answers "what are we building and will it work?"
        Detailed design answers "exactly how do we build it, to what dimensions, with what materials,
        in what sequence?" The cost of changing the answer increases by roughly an order of magnitude
        between these two stages.
      </div>

      <h3>Feasibility and Options</h3>
      <p>
        The feasibility phase answers a deceptively simple question: is this project worth
        doing? It begins with understanding the <strong>service requirement</strong> — what
        transport need does this project address? This might be capacity relief on a congested
        corridor, connectivity to a new development, freight gauge enhancement, or speed
        improvement. The service requirement drives everything: it determines the type of
        infrastructure needed, the performance parameters, and ultimately the cost.
      </p>
      <p>
        At this stage, alignment options are sketched at a high level, typically using desktop
        studies with existing mapping and survey data. Engineers identify major constraints —
        rivers, motorways, protected habitats, flood plains, existing buildings — and develop
        several corridor options. High-level cost estimates (often within a range of -30% to
        +50%) are produced, along with initial assessments of environmental impact, land
        acquisition requirements, and interfaces with the existing railway network. The output
        is a strategic business case that determines whether the project proceeds to design.
      </p>
      <p>
        Multiple disciplines contribute even at this early stage. Track engineers assess
        whether the alignment geometry can achieve the desired line speed. Signalling engineers
        determine whether the existing signalling can accommodate additional services or
        whether a complete resignalling is required. Electrification engineers assess whether
        the existing power supply has capacity, or whether new feeder stations and switching
        sections are needed. Structures engineers identify every bridge, tunnel, and retaining
        wall that may need modification. The feasibility study is a whole-system exercise, not
        the province of any single discipline.
      </p>

      <h3>Business Case Development</h3>
      <p>
        No railway project proceeds without a robust <strong>business case</strong>. In the UK,
        the business case follows the HM Treasury <strong>Green Book</strong> five-case model, which
        requires five distinct arguments to be made before public funds are committed. This framework
        applies to all government-funded projects but is particularly significant for railways given
        their scale and multi-decade impacts.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Case</th>
              <th>Question Answered</th>
              <th>Key Content for Railway Projects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Strategic Case</strong></td>
              <td>Why is this project needed?</td>
              <td>Alignment with transport policy, evidence of demand, strategic fit with rail network plans, problem statement supported by data (overcrowding, journey times, connectivity gaps)</td>
            </tr>
            <tr>
              <td><strong>Economic Case</strong></td>
              <td>Does it represent value for money?</td>
              <td>Benefit-Cost Ratio (BCR) calculated using WebTAG methodology, monetised benefits (journey time savings, reliability, safety, reduced road congestion, wider economic impacts), sensitivity analysis, distributional impacts</td>
            </tr>
            <tr>
              <td><strong>Financial Case</strong></td>
              <td>Is it affordable?</td>
              <td>Capital cost estimate with contingency (Quantified Risk Assessment), whole-life operating costs, revenue projections, funding sources (DfT grant, fare revenue, third-party contributions), cash flow profile over construction and early operations</td>
            </tr>
            <tr>
              <td><strong>Commercial Case</strong></td>
              <td>Can it be procured?</td>
              <td>Procurement strategy (traditional, design-and-build, alliance), contract form (NEC, bespoke), market capacity and interest, risk allocation between client and contractor, supply chain readiness</td>
            </tr>
            <tr>
              <td><strong>Management Case</strong></td>
              <td>Can it be delivered?</td>
              <td>Project governance structure, programme and milestones, risk register and mitigation strategy, stakeholder management plan, benefits realisation plan, assurance and audit arrangements</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The <strong>Benefit-Cost Ratio (BCR)</strong> is the headline metric for the economic case.
        It compares the present value of benefits (typically over a 60-year appraisal period for rail
        infrastructure) against the present value of costs. A BCR greater than 2.0 is generally
        considered "high" value for money; between 1.5 and 2.0 is "medium"; and below 1.5 is "low."
        However, BCR alone does not determine whether a project proceeds — strategic and distributional
        considerations can justify projects with lower BCRs, particularly where connectivity to
        underserved regions is a policy objective.
      </p>
      <p>
        The Department for Transport's <strong>WebTAG (Web-based Transport Analysis Guidance)</strong>
        provides the detailed methodology for calculating benefits. Journey time savings are the
        largest benefit component for most rail schemes, calculated by multiplying the number of
        affected passengers by the time saving and by the value of time (which varies by journey
        purpose — commuting, business, leisure). Reliability benefits, crowding relief, accident
        reduction, noise reduction, air quality improvement, and greenhouse gas emission changes are
        also monetised. Wider economic impacts — agglomeration benefits from improved connectivity
        between labour markets — can be significant for major schemes but are subject to additionality
        tests to avoid double-counting.
      </p>

      <h3>Environmental Impact Assessment</h3>
      <p>
        Railway projects of any significant scale require an <strong>Environmental Impact Assessment
        (EIA)</strong> under the Town and Country Planning (Environmental Impact Assessment)
        Regulations or equivalent legislation for nationally significant infrastructure. The EIA
        process is not merely a regulatory hurdle — it shapes the engineering design by identifying
        constraints that must be respected or mitigated.
      </p>
      <p>
        The EIA process begins with <strong>screening</strong> — determining whether an EIA is
        required — followed by <strong>scoping</strong>, which defines the topics to be assessed.
        For railway projects, the typical scope includes: noise and vibration (both during
        construction and operation), air quality, landscape and visual impact, ecology and
        biodiversity (including protected species surveys that may take a full year due to seasonal
        constraints), water resources and flood risk, cultural heritage and archaeology, traffic
        and transport during construction, community effects (severance, loss of amenity), and
        climate change (both the project's carbon footprint and its resilience to climate change
        impacts such as increased flooding and extreme heat).
      </p>
      <p>
        The output is an <strong>Environmental Statement (ES)</strong> — a substantial document
        (often running to thousands of pages with technical appendices) that describes the
        baseline conditions, predicts the impacts, and sets out the mitigation measures. Mitigation
        for railway noise might include noise barriers, rail dampers, or building insulation.
        Ecological mitigation might include the translocation of protected species, creation of
        replacement habitats, or the design of wildlife crossings (green bridges, badger tunnels,
        bat gantries). These mitigation commitments become legally binding once planning consent
        is granted, and the project must demonstrate compliance during construction and operation.
      </p>

      <h3>Land Acquisition and Compulsory Purchase</h3>
      <p>
        Railways require land. New lines require land acquisition along the entire route corridor;
        enhancements to existing railways may require additional land for widening, new structures,
        or construction compounds. In the UK, where most land is privately owned, this is achieved
        through <strong>compulsory purchase</strong> — the legal power of a public authority to
        acquire land without the owner's consent, subject to the payment of compensation.
      </p>
      <p>
        For railway projects, compulsory purchase powers may be obtained through several
        mechanisms depending on the scale and nature of the project. The <strong>Transport and
        Works Act 1992</strong> provides powers through a <strong>Transport and Works Act Order
        (TWAO)</strong>, which is the most common route for significant rail schemes that are not
        nationally significant. <strong>Nationally Significant Infrastructure Projects (NSIPs)</strong>
        — typically new railways or very major enhancements — require a <strong>Development Consent
        Order (DCO)</strong> under the Planning Act 2008, which is determined by the relevant
        Secretary of State following examination by the Planning Inspectorate. Smaller works on
        existing railway land may be carried out under <strong>permitted development rights</strong>
        granted by the Town and Country Planning (General Permitted Development) Order, which
        allows certain railway works without specific planning permission.
      </p>
      <p>
        The land acquisition process requires detailed <strong>land referencing</strong> — identifying
        every parcel of land affected, every owner, tenant, and occupier, and every right that
        exists over the land (rights of way, wayleaves, easements). This is a substantial exercise
        that must be completed before the order application is submitted. Compensation is assessed
        on the basis of the land's open market value plus severance and injurious affection (the
        reduction in value of retained land), disturbance costs, and in some cases a loss payment
        for homeowners and businesses. The Lands Tribunal (now the Upper Tribunal) resolves disputes
        where compensation cannot be agreed.
      </p>

      <h3>Planning Consent Processes</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Consent Route</th>
              <th>Applicable To</th>
              <th>Determining Authority</th>
              <th>Typical Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>TWAO</strong></td>
              <td>Significant rail schemes (new stations, line reopenings, major enhancements)</td>
              <td>Secretary of State for Transport, following public inquiry if objections</td>
              <td>18–36 months from application</td>
            </tr>
            <tr>
              <td><strong>DCO</strong></td>
              <td>Nationally significant infrastructure (new railways, very major enhancements)</td>
              <td>Secretary of State, following examination by Planning Inspectorate</td>
              <td>24–48 months from application (pre-application consultation adds 12+ months)</td>
            </tr>
            <tr>
              <td><strong>Permitted Development</strong></td>
              <td>Works on existing operational railway land (track renewals, minor structures, equipment installation)</td>
              <td>No specific consent required, but prior approval may be needed for certain works</td>
              <td>N/A (but prior approval typically 8 weeks)</td>
            </tr>
            <tr>
              <td><strong>Planning Permission</strong></td>
              <td>Works outside railway land that do not qualify for TWAO/DCO (e.g., access roads, compound areas)</td>
              <td>Local Planning Authority</td>
              <td>8–16 weeks (longer if called in)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Preliminary and Detailed Design</h3>
      <p>
        Once an option is selected, <strong>preliminary design</strong> refines it with real
        data. Ground investigation boreholes are drilled along the alignment to characterise
        soil and rock conditions. Topographic surveys capture precise ground levels. Existing
        structures are inspected and assessed for capacity. The track alignment is designed
        in detail — horizontal curves, vertical curves, cant, transitions — constrained by
        the geotechnical findings and the structural interfaces. Signalling principles are
        established: signal positions, overlap lengths, track circuit boundaries. Electrification
        requirements are defined: feeder station locations, sectioning points, neutral sections,
        mast positions. The output is a design that is sufficiently developed to produce a
        reliable cost estimate (typically within -10% to +10%) and to obtain planning consents.
      </p>
      <p>
        <strong>Detailed design</strong> is where every discipline produces construction-ready
        drawings, specifications, and schedules. Track engineers produce rail setting-out data
        to millimetre precision. Structures engineers produce reinforcement drawings for every
        concrete pour. Signalling engineers produce circuit diagrams for every relay rack and
        interlocking table for every route. Electrification engineers produce mast foundation
        designs, wire run calculations, and bonding schedules. The critical activity in detailed
        design is <strong>interface management</strong> — ensuring that the outputs of one
        discipline are compatible with the inputs of every other. A mast foundation that
        conflicts with a cable route, a signal that cannot be seen past a new overhead line
        structure, a track drainage outfall that undermines a retaining wall — these are the
        interface failures that detailed design must catch before construction begins.
      </p>

      <h3>Programme Management vs Project Management</h3>
      <p>
        Large railway undertakings are often structured as <strong>programmes</strong> rather than
        single projects. A programme is a collection of related projects and activities managed in
        a coordinated way to achieve benefits that could not be obtained by managing them
        individually. The distinction matters because railway enhancements frequently involve
        multiple interdependent work packages — for example, a capacity enhancement might require
        track remodelling (one project), signalling renewal (another project), power supply upgrade
        (a third project), and new rolling stock procurement (a fourth project), all of which must
        be delivered in a coordinated sequence to achieve the capacity benefit.
      </p>
      <p>
        <strong>Project management</strong> focuses on delivering a defined scope within agreed cost,
        time, and quality parameters. <strong>Programme management</strong> focuses on managing the
        interdependencies between projects, sequencing the delivery to maximise benefits realisation,
        managing strategic risks that affect multiple projects, and ensuring that changes in one
        project are assessed for their impact on others. In UK rail, programme management typically
        follows the <strong>Managing Successful Programmes (MSP)</strong> framework, while individual
        projects follow <strong>PRINCE2</strong> or the GRIP/PACE lifecycle.
      </p>
      <p>
        The <strong>programme integration function</strong> is responsible for the interfaces between
        projects — ensuring that the signalling project delivers its enabling works in time for the
        track remodelling project's possession, that the power supply upgrade is commissioned before
        the new rolling stock arrives, and that the timetable change that unlocks the capacity benefit
        is planned to coincide with the completion of all infrastructure works. This coordination is
        often the most challenging aspect of railway delivery because delays in any one project
        cascade through the programme.
      </p>

      <h3>Supply Chain and Contract Models</h3>
      <p>
        The choice of contract model profoundly affects how a railway project is delivered, how risk
        is allocated, and how effectively interfaces are managed. The UK rail industry has
        experimented with several models over the past three decades.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Contract Model</th>
              <th>Description</th>
              <th>Interface Risk</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Traditional (Design-Bid-Build)</strong></td>
              <td>Client designs, then tenders construction separately. Contractor builds to client's design.</td>
              <td>High — interface between designer and constructor, and between multiple discipline designers, sits with the client</td>
              <td>Historically common on Network Rail renewals</td>
            </tr>
            <tr>
              <td><strong>Design and Build</strong></td>
              <td>Single contractor responsible for both design and construction. Client specifies outputs and performance requirements.</td>
              <td>Lower — contractor manages internal interfaces, but client-contractor interface for requirements becomes critical</td>
              <td>Thameslink Programme (some packages)</td>
            </tr>
            <tr>
              <td><strong>NEC Contracts</strong></td>
              <td>The NEC (New Engineering Contract) suite provides a family of contracts with options for different risk allocations (Options A–F). Emphasises early warning, risk reduction, and collaborative working.</td>
              <td>Depends on the option chosen — target cost (Option C) with pain/gain share incentivises collaboration</td>
              <td>Widely used across Network Rail projects</td>
            </tr>
            <tr>
              <td><strong>Alliance Contracting</strong></td>
              <td>Client and one or more contractors form a virtual organisation with shared objectives, shared risk/reward, and unanimous decision-making. No blame culture.</td>
              <td>Lowest — all parties are jointly responsible for all interfaces, incentivised to resolve issues collaboratively</td>
              <td>Crossrail (some packages), East West Rail</td>
            </tr>
            <tr>
              <td><strong>Framework Agreements</strong></td>
              <td>Pre-agreed terms with selected contractors for repeat work packages. Work is called off under the framework as needed.</td>
              <td>Variable — depends on scope of each call-off</td>
              <td>Network Rail CP6 frameworks for track renewals, signalling, electrification</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The NEC suite has become the default contract family for UK rail projects. <strong>NEC4
        Option C (target cost with activity schedule)</strong> is the most commonly used variant for
        construction works, providing a pain/gain share mechanism that incentivises the contractor
        to deliver below the target cost while protecting the client from unlimited cost overrun.
        The <strong>Early Warning Register</strong> and <strong>Risk Reduction Meeting</strong>
        mechanisms in NEC contracts are particularly valuable on railway projects where emerging
        risks (unexpected ground conditions, interface clashes, possession overruns) must be
        managed collaboratively rather than through adversarial claims processes.
      </p>

      <h3>Construction, Testing, and Commissioning</h3>
      <p>
        Railway construction is fundamentally different from most civil engineering because
        the railway must usually remain operational during the works. Work on or near the
        operational railway is carried out during <strong>possessions</strong> — planned periods
        when train services are suspended on the affected section and the track is handed over
        to the engineering team. Possessions are precious and tightly time-limited: a typical
        weekend possession might give 52 hours of access. Major works require blockades of a
        week or more, which must be planned years in advance and coordinated with the timetable
        and passenger information teams. Greenfield construction (new lines on new alignments)
        avoids these constraints but introduces its own challenges: land acquisition, earthworks,
        and the eventual connection to the existing network.
      </p>
      <p>
        <strong>Testing and commissioning</strong> is the phase that separates a construction
        site from a working railway. Signalling is tested exhaustively: every route is set and
        proven, every interlocking condition is verified, every track circuit is walked and
        confirmed. Electrification is energised section by section, with clearance tests under
        each structure and contact force measurements at every registration. Test trains run
        at progressively increasing speeds, with instrumentation measuring ride quality, track
        geometry, pantograph uplift, and signalling system response. Only when every subsystem
        has been individually tested and the integrated system has been proven does the
        infrastructure manager accept the works and hand back to operations.
      </p>

      <h3>Lessons from Major UK Railway Projects</h3>
      <p>
        The UK's recent experience with major railway projects provides invaluable lessons about
        the lifecycle, governance, and interfaces discussed throughout this module. Three projects
        in particular illustrate both what can go right and what can go wrong.
      </p>
      <p>
        <strong>Crossrail (Elizabeth Line):</strong> The largest infrastructure project in Europe
        when construction began, Crossrail delivered 42 km of new tunnels under central London,
        connecting existing surface railways to create a cross-city service. The project demonstrated
        the value of mature systems engineering — the interface between the new tunnel infrastructure
        and the existing surface railway (different signalling systems, different electrification
        voltages, different operating rules) was extraordinarily complex. However, the project also
        demonstrated the consequences of underestimating testing and commissioning complexity.
        The original opening date of December 2018 was delayed to May 2022 — primarily because the
        integration of signalling, train control, and station systems proved far more difficult than
        anticipated. The lesson: construction is not the hardest part of a railway project;
        integration and commissioning often is.
      </p>
      <p>
        <strong>Thameslink Programme:</strong> This programme enhanced the north-south rail corridor
        through central London, rebuilding London Bridge station (one of the busiest in the UK) while
        keeping it operational, and introducing new digital signalling (ETCS Level 2) on the core
        section. The London Bridge rebuild is widely regarded as a programme management success — the
        phased construction approach, with services progressively moved between platforms over several
        years, required extraordinary coordination between track, signalling, structures, and
        operations disciplines. The key lesson: meticulous phasing and interface management can
        deliver transformational change on a live, busy railway.
      </p>
      <p>
        <strong>HS2:</strong> The UK's high-speed railway from London to Birmingham (Phase 1) and
        onward (Phase 2, now substantially revised) illustrates the challenges of the political and
        planning dimensions of the project lifecycle. HS2 has faced sustained challenges around cost
        escalation, the DCO and parliamentary bill process for obtaining powers, environmental
        mitigation requirements (ancient woodland, archaeological sites), and the difficulty of
        maintaining political consensus for projects that span multiple parliamentary terms. The
        engineering is largely conventional (high-speed rail is well-understood technology), but the
        project underscores that technical capability is necessary but not sufficient — a railway
        project must also be deliverable within the political, financial, and social constraints of
        its environment.
      </p>

      <Callout type="analogy">
        The railway project lifecycle mirrors a <strong>software development lifecycle</strong>,
        but with a crucial difference: there is no agile iteration once the concrete is poured.
        Feasibility is your product discovery phase. Preliminary design is your architecture
        and system design. Detailed design is your implementation sprint — but every line of
        code must be complete and reviewed before any deployment begins. Construction is
        deployment to production, but you cannot roll back a bridge foundation. Testing and
        commissioning is your QA and UAT phase, and it must be exhaustive because there are
        no hotfixes in live railway operations. The GRIP gate reviews are your sprint reviews
        and stakeholder sign-offs — except that each gate governs expenditure commitments of
        tens or hundreds of millions of pounds. The business case is your product roadmap ROI
        analysis, and the five-case model is like having to justify your project to five
        different VPs simultaneously: strategy, finance, procurement, delivery, and value.
        This is why railways invest so heavily in upfront design: the cost of a production
        bug is measured in derailments, not downtime.
      </Callout>

      <Callout type="info" label="GRIP Stages">
        The eight GRIP stages provide a framework for managing risk and cost through progressive
        design maturity. Each gate review asks: do we understand the risks well enough to
        justify spending the next tranche of money? The early stages are cheap (studies and
        surveys); the later stages are expensive (construction and commissioning). The gate
        process ensures that expensive commitments are only made when the design is sufficiently
        mature to justify them. Many projects fail not because of technical problems but because
        they rush through early stages and discover fundamental issues during construction —
        when changes cost 10 to 100 times more than they would have in design.
      </Callout>

      <Callout type="info" label="Environmental and Planning Consents">
        Environmental Impact Assessment and planning consent are not administrative formalities —
        they are integral parts of the engineering process. Ecological survey windows (bat surveys
        in summer, great crested newt surveys in spring, breeding bird surveys in March–July) can
        add 12–18 months to the programme if not anticipated early. Archaeological investigations
        along a route corridor can uncover remains that require design changes (realignment to
        avoid, or redesign of foundations to preserve in situ). Flood risk assessments may require
        compensatory flood storage — engineered areas that must be excavated to replace the
        floodplain volume displaced by the railway embankment. These constraints must be identified
        in feasibility and resolved in outline design; discovering them in detailed design or
        construction leads to programme delays and cost overruns.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0', label: 'Foundations', desc: 'The fundamental principles that feasibility studies must account for from the very beginning.' },
        { target: 'm1', label: 'Track', desc: 'Alignment design is one of the first disciplines engaged in preliminary design.' },
        { target: 'm2', label: 'Civil Engineering', desc: 'Earthworks, drainage, and ground conditions shape the project from feasibility onwards.' },
        { target: 'm3', label: 'Structures', desc: 'Bridges, tunnels, and retaining walls are often the longest-lead and highest-cost items.' },
        { target: 'm4', label: 'Signalling', desc: 'Signalling principles must be established early as they drive track layout and operational capacity.' },
        { target: 'm5', label: 'Electrification', desc: 'Power supply capacity and OLE design are critical constraints identified in preliminary design.' },
        { target: 'm6', label: 'Rolling Stock', desc: 'Vehicle specifications define the loading gauge, braking curves, and power demands the infrastructure must accommodate.' },
        { target: 'm7', label: 'Telecoms', desc: 'Communications infrastructure must be planned alongside signalling and operations systems.' },
        { target: 'm8', label: 'Operations', desc: 'The timetable and operational concept are the ultimate test of whether the design delivers the service requirement.' },
      ]} />
    </>
  );
}

function M9L2({ goTo }) {
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

function M9L3({ goTo }) {
  return (
    <>
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
              <td colSpan="4" style={{ textAlign: 'center' }}><strong>Implementation (Bottom of V):</strong> Detailed design, manufacture, construction, installation</td>
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

// ─── Export ──────────────────────────────────────────────────────────

export default function getM9Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm9-l1': return <M9L1 goTo={goTo} />;
    case 'm9-l2': return <M9L2 goTo={goTo} />;
    case 'm9-l3': return <M9L3 goTo={goTo} />;
    default: return null;
  }
}
