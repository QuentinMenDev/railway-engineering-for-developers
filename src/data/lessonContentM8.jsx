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

// ─── Module 8: Operations, Timetabling & Integration ─────────────────

function M8L1({ goTo }) {
  return (
    <>
      <h3>The Timetable as the Master Plan</h3>
      <p>
        The <strong>timetable</strong> is the single document that coordinates every element of a
        railway into a coherent whole. It specifies, for every train on the network, the departure
        and arrival time at every calling point, the route to be taken, the platform to be used, the
        connections to be maintained with other services, and the rolling stock formation to be
        deployed. It is the contract between the railway and its passengers, and the instruction set
        that drives the entire operational machine. Without a timetable, a railway is merely
        infrastructure sitting idle.
      </p>
      <p>
        A timetable is not simply a list of times. It is the output of an extraordinarily complex
        planning process that must reconcile the demands of passenger and freight customers with the
        physical constraints of the infrastructure, the availability and capability of rolling stock,
        the working patterns of train crew, and the maintenance needs of every asset on the railway.
        Getting this wrong means trains that cannot physically run, crews that are unavailable,
        conflicts at junctions, and a cascade of delays across the network.
      </p>

      <h3>Inputs to Timetable Planning</h3>
      <p>
        Building a timetable requires assembling a vast collection of inputs from across every
        engineering and operational discipline. <strong>Service requirements</strong> come first:
        the desired frequency, stopping pattern, journey time, and first/last service for each route,
        driven by demand analysis and franchise or concession obligations. On a busy commuter corridor,
        this might mean 12 trains per hour in the peak; on a rural branch, one every two hours.
      </p>
      <p>
        <strong>Rolling stock availability and performance</strong> defines what is physically
        possible. Each train type has a known acceleration curve, maximum speed, and braking
        performance, which together determine the minimum journey time between any two points. The
        number of available units constrains the maximum number of simultaneous services. Maintenance
        schedules remove vehicles from service at regular intervals, and depot capacity limits how
        many trains can be stabled and prepared overnight.
      </p>
      <p>
        <strong>Crew availability</strong> is equally critical. Drivers and conductors have legal
        limits on continuous driving time (typically 4.5 hours without a break in the UK), daily and
        weekly working hours, mandatory rest periods, and route knowledge requirements. A driver can
        only work a service if they are signed off to operate the traction type and know the route.
        Crew diagrams must be built in parallel with the timetable, and a service that is feasible
        from a rolling stock perspective may be impossible if no qualified crew is available.
      </p>
      <p>
        <strong>Infrastructure capability</strong> is the hard ceiling. Line speeds, the number of
        tracks, signalling headways, junction layouts, platform lengths, and the capacity of station
        throats all impose absolute constraints. If a junction can only handle 24 movements per hour
        and you are already scheduling 22, adding two more express services is not a simple matter of
        finding free slots.
      </p>

      <h3>Time-Distance Diagrams (Train Graphs / Bildfahrplan)</h3>
      <p>
        The <strong>time-distance diagram</strong> — known in German-speaking railways as a
        <em>Bildfahrplan</em> and sometimes called a <strong>train graph</strong> or{' '}
        <strong>string diagram</strong> — is the single most important tool in timetable planning.
        It is a two-dimensional graph with <strong>time</strong> on the horizontal axis and{' '}
        <strong>distance along the route</strong> on the vertical axis. Each train is represented
        by a line whose slope indicates speed: a steep line (covering distance quickly) represents a
        fast train, while a shallow line indicates a slow service. A horizontal line segment means the
        train is stationary (dwelling at a station or waiting in a loop).
      </p>
      <p>
        Reading a time-distance diagram reveals the entire operational picture at a glance. Where
        two lines cross, the trains pass each other (on double track, this is routine; on single
        track, one must wait in a loop). Where two lines converge, they are using the same track
        in the same direction — the gap between them represents the headway. Where lines diverge
        or merge at a junction, the spacing reveals whether there are conflicts. Stations appear as
        horizontal bands, and the dwell time is visible as the width of the horizontal segment where
        a train line flattens.
      </p>
      <p>
        The power of this representation is that <strong>capacity constraints become visual</strong>.
        A bottleneck section appears as a zone where lines are tightly packed. A conflict at a flat
        junction shows up as lines crossing within the junction zone. A missed connection is visible
        as a departing train line beginning before the arriving train line reaches the station.
        Timetable planners spend much of their working lives constructing and adjusting these
        diagrams, threading new train paths through gaps in the existing pattern.
      </p>

      <figure className="lesson-figure">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bildfahrplan_Zuerich-Bern_2016.svg/1280px-Bildfahrplan_Zuerich-Bern_2016.svg.png"
          alt="Time-distance diagram (Bildfahrplan) showing train paths between Zurich and Bern, with time on the horizontal axis and stations on the vertical axis"
          loading="lazy"
        />
        <figcaption>
          A Bildfahrplan (time-distance diagram) for the Zurich–Bern corridor. Each diagonal line is
          a train path; steeper lines are faster services. The regular, symmetric pattern reflects the
          Swiss Taktfahrplan (clock-face timetable).
          Image: <a href="https://commons.wikimedia.org/wiki/File:Bildfahrplan_Zuerich-Bern_2016.svg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY-SA 4.0
        </figcaption>
      </figure>

      <div className="highlight-box">
        <p>
          <strong>How to read a train graph:</strong> (1) Identify the time axis — hours are marked
          along the top or bottom, usually in 24-hour format. (2) Identify station names along the
          vertical axis — distance between them is to scale. (3) Each diagonal line is one train:
          follow it left to right to see its journey through time. (4) Where a line flattens
          horizontally, the train is stopped. (5) Parallel lines moving in the same direction
          represent successive trains; their horizontal gap is the headway. (6) Lines moving in
          opposite directions crossing at a point represent trains passing each other. (7) Convergence
          of lines toward a single point indicates a capacity pinch point.
        </p>
      </div>

      <h3>Running Time Calculation</h3>
      <p>
        Before a train path can be placed on the timetable, the planner must know how long the
        journey takes. The <strong>running time calculation</strong> is a step-by-step process that
        determines the <strong>technical minimum running time</strong> (the fastest the train can
        physically complete the journey) and then adds various allowances to produce the{' '}
        <strong>sectional running time</strong> used in the timetable. The steps are as follows:
      </p>
      <p>
        <strong>Step 1: Build the speed profile.</strong> For each section of track, determine the
        maximum permitted speed. This is the lower of the <strong>line speed</strong> (set by the
        infrastructure — track geometry, signalling, and structures) and the <strong>rolling stock
        maximum speed</strong>. The output is a stepped profile of maximum speed against distance.
        At junctions, crossovers, and temporary speed restrictions, the profile dips. Through
        stations where the train does not stop, the profile may be limited by platform curvature
        or point speed restrictions.
      </p>
      <p>
        <strong>Step 2: Apply gradient and curvature resistance.</strong> On uphill gradients, the
        available tractive effort is partly consumed overcoming gravity, reducing the achievable
        speed. On curves, cant deficiency limits the speed independently of the line speed. The
        running time calculation must model the train's acceleration and speed maintenance on each
        gradient and curve, using the known tractive effort and resistance curves for the specific
        rolling stock type. The <strong>Davis equation</strong> models resistance as a function of
        speed: R = A + B·v + C·v², where A is rolling resistance, B is flange and track
        resistance, and C is aerodynamic drag.
      </p>
      <p>
        <strong>Step 3: Calculate acceleration and braking.</strong> At each calling point, the
        train must decelerate from line speed to a stop and then accelerate back to line speed. The
        braking distance depends on the initial speed, braking rate (typically 0.5–1.0 m/s² for
        service braking), and gradient. The acceleration distance depends on the power-to-weight
        ratio. Both consume time beyond what a non-stopping train would take. For a typical
        suburban EMU stopping at a station on level track, the time penalty for the stop is
        approximately 30–60 seconds depending on line speed, plus the dwell time.
      </p>
      <p>
        <strong>Step 4: Add dwell times.</strong> At each calling point, the train must stop for
        passengers to board and alight. Dwell times range from 30 seconds at a quiet suburban station
        to 2–3 minutes at a busy interchange. The planned dwell time must be realistic based on
        observed passenger volumes, door width and number, step-free access requirements, and
        whether the station is a crew change point or has on-train catering operations.
      </p>
      <p>
        <strong>Step 5: Sum the components.</strong> The total of running time between each station
        pair, plus dwell times, gives the <strong>technical minimum journey time</strong>. This is
        the fastest the service can run under ideal conditions with no other traffic on the railway.
      </p>

      <h3>Pathing Allowances</h3>
      <p>
        The technical minimum running time is never used directly in the timetable. Several
        categories of allowance are added to produce the timetabled running time:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Allowance Type</th><th>Purpose</th><th>Typical Magnitude</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Engineering allowance</strong> (pathing time)</td>
              <td>Time added to resolve conflicts with other train paths. If a fast train must follow a slower train for a section before overtaking, the additional time beyond the technical minimum is captured here. It reflects the reality that trains do not run in isolation.</td>
              <td>Variable — 0 to several minutes per section, depending on congestion</td>
            </tr>
            <tr>
              <td><strong>Performance allowance</strong> (recovery time)</td>
              <td>Time added beyond the technical minimum to allow a train to recover from minor delays. Provides resilience so that a small perturbation does not cascade. Distributed along the route, typically weighted toward the end of the journey where cumulative delays are greatest.</td>
              <td>Typically 5–8% of the technical minimum running time (e.g., 3–5 min on a 60-min journey)</td>
            </tr>
            <tr>
              <td><strong>Station allowance</strong></td>
              <td>Additional dwell time above the operational minimum to allow for passenger flow variability, accessibility needs, and operational contingency. Provides buffer for higher-than-expected boarding times.</td>
              <td>15–30 seconds per calling point, more at major stations</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The art of placing recovery time is crucial to timetable quality. Placing too little
        leaves the timetable fragile — any delay propagates to the destination. Placing too much
        wastes capacity and delivers unnecessarily slow journeys. Modern practice uses historical
        performance data to identify where delays most commonly arise and concentrates recovery
        time at those points. After a known bottleneck (a busy junction, a constrained station
        approach), a larger allowance is inserted. On free-running sections with few interactions,
        minimal allowance is needed.
      </p>

      <h3>Rolling Stock Diagramming</h3>
      <p>
        Once the timetable defines every train service, the next planning stage is the{' '}
        <strong>rolling stock diagram</strong> (unit diagram or vehicle diagram). This assigns
        specific train units to specific services throughout the day, ensuring that every timetabled
        service has a vehicle and that every vehicle returns to a location where it can be maintained,
        refuelled, or stabled overnight.
      </p>
      <p>
        A rolling stock diagram is a graph showing, for each unit, its sequence of duties through
        the day: the first service it works, where it goes, what it does next, when and where it is
        coupled or uncoupled, and when it returns to depot. The key constraints are:
      </p>
      <ul>
        <li>
          <strong>Fleet size:</strong> The number of available units sets the absolute maximum number
          of simultaneous services. If 40 units are available and the peak timetable requires 38 in
          service, only 2 are spare for failures or maintenance. This is an extremely thin margin.
        </li>
        <li>
          <strong>Mileage balancing:</strong> Maintenance is triggered by mileage and calendar
          intervals. Units should accumulate mileage at roughly equal rates so that they present for
          exam at predictable intervals and do not all become due simultaneously.
        </li>
        <li>
          <strong>Coupling and uncoupling:</strong> On many routes, peak-hour trains are formed of
          multiple units coupled together (e.g., two 4-car units making an 8-car train) which are
          then split for off-peak services. Coupling and uncoupling takes 5–15 minutes depending on
          coupler type and requires a shunter or trained driver. The diagram must schedule these
          operations at stations with suitable facilities and in time windows that do not delay
          revenue services.
        </li>
        <li>
          <strong>Depot access:</strong> Units must visit a depot at regular intervals for fuelling
          (diesel), cleaning, and scheduled examinations. The diagram must route each unit through a
          depot visit at intervals compliant with the maintenance plan.
        </li>
      </ul>

      <h3>Crew Diagrams</h3>
      <p>
        In parallel with rolling stock diagrams, <strong>crew diagrams</strong> (driver and
        conductor rosters) must be built. A crew diagram assigns each driver or conductor to a
        sequence of duties through their working day, complying with a complex set of rules:
      </p>
      <ul>
        <li>
          <strong>Route knowledge:</strong> A driver may only operate over routes for which they
          hold current route knowledge. This requires initial route learning (riding the route with
          an instructor, learning signals, gradients, speed restrictions, and unusual features) and
          periodic refresher trips to maintain competence. If a driver has not worked a route for
          a defined period (typically 6–12 months), their route knowledge lapses and they must
          re-learn it before working services on that route.
        </li>
        <li>
          <strong>Traction knowledge:</strong> Similarly, drivers must be trained and assessed on
          each type of rolling stock they operate. A driver qualified on a Class 390 Pendolino
          cannot simply step onto a Class 800 Azuma without conversion training.
        </li>
        <li>
          <strong>Hours of work and fatigue management:</strong> The Railways and Other Guided
          Transport Systems (Safety) Regulations 2006 (ROGS) require that train operating companies
          have fatigue management systems. Typical limits include: maximum 12-hour shift, maximum
          4.5 hours continuous driving without a break, minimum 12-hour rest between duties, and
          limits on the proportion of night shifts in a roster cycle. Fatigue risk scoring tools
          are used to assess whether proposed rosters create unacceptable fatigue risk.
        </li>
        <li>
          <strong>Sign-on and sign-off time:</strong> A driver does not simply walk onto a train.
          They must sign on at their home depot, receive any notices (speed restrictions, altered
          working), check their route and traction competence for the day's diagram, and walk to
          the platform. This takes 15–30 minutes. Similarly, at the end of duty they must complete
          any defect reports and sign off. The crew diagram must account for these non-revenue
          periods.
        </li>
      </ul>

      <h3>Depot Planning and Empty Coaching Stock Movements</h3>
      <p>
        Trains do not materialise at platforms. Every service that begins at a terminus must first
        travel from a depot or stabling point to the platform as an{' '}
        <strong>Empty Coaching Stock (ECS)</strong> movement. These movements are invisible to
        passengers but must be timetabled, pathed through the signalling system, and resourced with
        a driver. On a major network, ECS movements can account for 10–15% of all train movements.
      </p>
      <p>
        <strong>Depot planning</strong> determines where each unit is stabled overnight and how it
        reaches its first service of the day. Key considerations include:
      </p>
      <ul>
        <li>
          <strong>Depot capacity:</strong> The number of stabling roads and their length. A depot
          designed for 20 x 4-car units cannot stable 25 without creative stacking (berthing units
          behind each other on the same road), which complicates morning departures as inner units
          cannot leave until outer ones are moved.
        </li>
        <li>
          <strong>Servicing facilities:</strong> Fuelling points, cleaning roads, watering points
          (for toilet tanks), and maintenance bays. Not all depots have all facilities, so some
          units must make positioning moves to depots with specific capabilities.
        </li>
        <li>
          <strong>ECS journey time:</strong> A depot 30 minutes from the terminus means the first
          ECS move must depart 30+ minutes before the first revenue service, consuming path capacity
          on the approach tracks during a period when other early services are also starting.
        </li>
        <li>
          <strong>Strategic stabling:</strong> To reduce ECS mileage, some units are stabled at
          intermediate stations or in dedicated sidings close to where they start service, rather
          than returning to the main depot every night. This requires secure stabling facilities
          and local servicing capability.
        </li>
      </ul>

      <h3>Freight Path Planning</h3>
      <p>
        Freight trains present unique timetabling challenges. They are typically much slower than
        passenger services (75 mph maximum for most UK freight versus 125 mph for express passenger
        trains), much heavier (up to 2,000+ tonnes gross), and much longer (up to 775 metres on
        permitted routes). Their slower speed means they occupy track sections for longer, consuming
        more capacity per path than a passenger train.
      </p>
      <p>
        Freight paths must be planned with regard to several specific constraints:
      </p>
      <ul>
        <li>
          <strong>Gauge clearance:</strong> Certain freight flows (e.g., 9'6" high-cube shipping
          containers on standard wagons) exceed the normal loading gauge and require routes that have
          been gauge-cleared with sufficient structure clearances. These{' '}
          <strong>gauge-cleared routes</strong> (such as the W10, W12, or W12a gauges in the UK)
          constrain which paths freight can use.
        </li>
        <li>
          <strong>Route availability (RA):</strong> Heavy freight trains impose high axle loads
          (up to 25.5 tonnes on some flows) that not all routes can support. The route availability
          number of each line section limits which wagons can use it.
        </li>
        <li>
          <strong>Dangerous goods:</strong> Trains carrying dangerous goods (petroleum, chemicals,
          nuclear flasks) have specific routing restrictions, speed limits, and requirements for
          avoiding certain tunnels, stations, and populated areas. These are governed by the
          Regulations concerning the International Carriage of Dangerous Goods by Rail (RID).
        </li>
        <li>
          <strong>Pathing slots:</strong> In the UK, Network Rail offers standardised freight
          path slots at key capacity constraints. Freight operators bid for these slots during
          the timetable planning process. Where demand exceeds available capacity (common at
          bottleneck locations), paths are allocated according to a defined priority framework.
        </li>
        <li>
          <strong>Terminal access:</strong> Freight trains must be able to enter and leave freight
          terminals, private sidings, and intermodal yards. Access often requires running over
          single-lead junctions that have limited capacity. The time needed for loading and
          unloading constrains the number of train paths the terminal can handle per day.
        </li>
      </ul>

      <h3>Timetable Modelling Tools</h3>
      <p>
        Modern timetable planning relies on specialist software tools to model the infrastructure,
        simulate train movements, and identify conflicts. The most widely used tools include:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Tool</th><th>Developer</th><th>Key Capabilities</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>RailSys</strong></td>
              <td>Rail Management Consultants (RMCon), Germany</td>
              <td>Microscopic simulation of train movements on detailed infrastructure models. Used for timetable construction, capacity analysis, and delay propagation studies. Widely used across European railways and by consultancies.</td>
            </tr>
            <tr>
              <td><strong>OpenTrack</strong></td>
              <td>OpenTrack Railway Technology, ETH Zurich spin-off</td>
              <td>Microscopic simulation with detailed signalling and interlocking modelling. Strong in ETCS simulation. Used by SBB, DB, and many academic institutions for research and operational planning.</td>
            </tr>
            <tr>
              <td><strong>VISION</strong></td>
              <td>Resonate (formerly Luminary), UK</td>
              <td>The primary timetable planning tool used by Network Rail. Produces working timetables, validates conflicts, and generates train graph outputs. Integrated with the UK's timetable planning process.</td>
            </tr>
            <tr>
              <td><strong>LUKS</strong></td>
              <td>VIA Consulting, Germany</td>
              <td>Capacity analysis tool implementing the UIC 406 compression method. Used for strategic capacity studies.</td>
            </tr>
            <tr>
              <td><strong>OnTime</strong></td>
              <td>Bane NOR / Jernbanedirektoratet, Norway</td>
              <td>Delay propagation simulation using stochastic methods. Models the probability distribution of delays rather than deterministic times.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        These tools model the railway at a <strong>microscopic</strong> level: every signal, every
        point, every gradient, and the exact speed profile of each train type. They can validate
        whether a proposed timetable is feasible (no two trains in the same block section
        simultaneously), estimate running times to the second, and simulate the effect of
        perturbations through stochastic delay injection. Macroscopic models provide faster but
        less detailed analysis for strategic planning.
      </p>

      <h3>Constraints and Conflicts</h3>
      <p>
        The timetable planner must satisfy a long list of physical constraints simultaneously.
        <strong> Minimum headway</strong> is the closest spacing at which two successive trains can
        safely follow each other, set by the signalling system. On a four-aspect colour-light route,
        this is typically 2 to 3 minutes; with ETCS Level 2, it can be brought below 2 minutes
        under ideal conditions. Every pair of successive trains on the same track must respect this
        minimum.
      </p>
      <p>
        <strong>Junction conflicts</strong> arise wherever routes cross or converge. Two trains
        approaching a flat junction from different directions cannot occupy the junction simultaneously.
        The timetable must sequence them with sufficient separation, including the time for points
        to move and be detected. At complex junctions like those found approaching major termini, the
        number of possible conflicts multiplies rapidly, and resolving them is one of the hardest parts
        of timetable construction.
      </p>
      <p>
        <strong>Platform reoccupation time</strong> sets a minimum gap between one train departing a
        platform and the next arriving. This includes the time for the departing train to clear the
        platform, the signal controlling the platform to clear, and the approaching train to be
        signalled in and brought to a stand. Typically 3 to 5 minutes at a terminus, less at a
        through station. <strong>Turnaround times</strong> at terminal stations must allow for the
        driver to change ends, the train to be checked, and any cleaning or coupling/uncoupling to
        be completed. <strong>Crew rest</strong> requirements may further extend the minimum
        turnaround if the driver has reached the end of their permitted driving period.
      </p>

      <h3>Working Timetable vs Public Timetable</h3>
      <p>
        The <strong>Working Timetable (WTT)</strong> is the railway's internal operational document.
        It contains every scheduled train movement, including empty coaching stock (ECS) workings,
        light engine movements, freight paths, engineering trains, and test runs that passengers never
        see. Times are given to the half-minute (e.g. 14:32:30). The WTT also specifies routing,
        line usage, speed restrictions, and any special operating instructions for each service. This
        is the document that signallers and controllers work from.
      </p>
      <p>
        The <strong>public timetable</strong> is a simplified extract showing only passenger-carrying
        services, rounded to the nearest minute, with user-friendly station names and connection
        information. The difference between the two can be significant: on a busy main line, up to
        half of all train movements may be non-passenger workings that are invisible to the travelling
        public but critical to railway operation.
      </p>

      <h3>The December 2018 Timetable Crisis</h3>
      <p>
        The May 2018 timetable change on the UK railway stands as a cautionary tale about the
        consequences of timetable planning failure. Govia Thameslink Railway (GTR) and Northern
        introduced new timetables that represented the most ambitious changes in a generation —
        thousands of services altered simultaneously to take advantage of the Thameslink Programme
        infrastructure. The result was months of chaos: mass cancellations, severe overcrowding,
        stranded passengers, and enormous reputational damage to the railway industry.
      </p>
      <p>
        The root causes were multiple and systemic. The infrastructure works (particularly at London
        Bridge) were delivered late, compressing the time available for timetable validation. Driver
        training on new routes could not be completed in time because the training paths required
        access to the same infrastructure that was still under construction. Rolling stock diagrams
        were built on optimistic assumptions about fleet availability. The scale of change was
        unprecedented — rather than incremental adjustments, entire timetable structures were
        rewritten — and the interdependencies between the Thameslink core, GTR suburban services,
        and Northern meant that problems in one area cascaded across all three.
      </p>
      <div className="highlight-box">
        <p>
          <strong>Key lessons from the 2018 timetable crisis:</strong> (1) Never introduce
          large-scale timetable changes until all infrastructure, rolling stock, and crew
          prerequisites are confirmed as delivered. (2) Build in fallback positions — a known-good
          timetable that can be reverted to if the new one fails. (3) Validate the complete system
          (timetable + rolling stock diagrams + crew diagrams) as an integrated whole, not as
          separate workstreams. (4) Allow adequate time for crew route learning and traction training
          before the implementation date. (5) Test the timetable through simulation under degraded
          conditions, not just the ideal case.
        </p>
      </div>

      <Callout type="analogy">
        Timetable planning is a <strong>combinatorial optimisation problem</strong> and, in the general
        case, it is NP-hard. The planner is attempting to fit hundreds or thousands of train paths into
        a finite time-space graph while satisfying hard constraints (headways, junction conflicts,
        platform occupancy) and optimising soft objectives (journey time, connections, crew efficiency).
        No algorithm can guarantee the global optimum in polynomial time. In practice, railways use a
        combination of heuristic search, simulation, and iterative refinement, much like solving a large
        constraint-satisfaction problem with backtracking. Think of it as scheduling thousands of
        long-running processes on a distributed system with shared resources, mutex locks (junctions),
        and strict latency requirements (journey times) where the scheduler itself takes months to run.
        Rolling stock and crew diagrams are like container orchestration and on-call rosters — they
        must be solved jointly with the workload schedule, because a perfectly planned timetable that
        has no drivers or no trains is useless, exactly as a Kubernetes deployment with no nodes or
        an incident runbook with no on-call engineers.
      </Callout>

      <Callout label="Timetable Development Cycle">
        In the UK, the timetable changes twice a year (May and December). The planning process begins
        around 18 months before the change date, with train operators submitting bids for paths to
        Network Rail. These are processed through the <strong>Informed Traveller</strong> milestones:
        D-40 weeks (draft timetable offered), D-26 weeks (firm timetable published internally), D-12
        weeks (public timetable published). Late changes after D-12 require formal approval and are
        strongly discouraged because they disrupt crew and stock planning that has already been built
        around the timetable. The European equivalent is the annual timetable change in December,
        coordinated across all member railways through the Forum Train Europe (FTE) process, which
        allocates international paths up to 18 months in advance.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Signalling headway is the fundamental constraint on timetable density.' },
        { target: 'm6-l1', label: 'Rolling Stock Types', desc: 'Vehicle performance characteristics (acceleration, max speed) determine feasible journey times.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'Line speed and curvature constraints feed directly into timetable journey times.' },
        { target: 'm3-l1', label: 'Earthworks & Drainage', desc: 'Infrastructure capability and maintenance needs shape available capacity.' },
      ]} />
    </>
  );
}

function M8L2({ goTo }) {
  return (
    <>
      <h3>What Is Capacity?</h3>
      <p>
        Railway capacity is not a single number. It is a complex, context-dependent measure of how
        many trains can use a piece of infrastructure in a given time period while maintaining an
        acceptable level of performance. A line that can theoretically handle 30 trains per hour when
        every train is identical and perfectly timed may manage only 20 in practice once you account
        for a mix of fast and slow services, junction conflicts, dwell time variability, and the need
        for recovery time. Capacity is always a trade-off between <strong>volume</strong> (number of
        trains), <strong>heterogeneity</strong> (mix of train types), <strong>average speed</strong>,
        and <strong>reliability</strong>.
      </p>
      <p>
        The <strong>weakest link</strong> determines the capacity of the whole route. A four-track
        main line can carry enormous volumes, but if it funnels through a two-track section, a flat
        junction, or a constrained station throat, the capacity of the entire corridor is limited to
        what that bottleneck can handle. Identifying and relieving these bottlenecks is one of the
        most important tasks in railway planning. Common bottlenecks include single-track sections,
        flat junctions (where routes cross at grade), station approaches with insufficient platform
        tracks, and terminal stations with limited platform reoccupation rates.
      </p>

      <h3>Factors Driving Capacity</h3>
      <p>
        <strong>Signalling headway</strong> is the starting point. The minimum time between
        successive trains is set by the signalling system: on conventional four-aspect signalling,
        headways are typically 2 to 3 minutes; ETCS Level 2 with moving block can reduce this toward
        90 seconds in ideal conditions. But signalling headway is only the theoretical minimum. In
        practice, several other factors consume capacity.
      </p>
      <p>
        <strong>Train type mix</strong> is a major capacity killer. When fast and slow trains share
        the same tracks, the fast trains catch up with the slower ones, consuming more capacity than
        either type would in isolation. A stopping service occupying a platform for two minutes at
        each station creates gaps that a following express cannot use. Segregating fast and slow
        traffic onto separate tracks (where available) dramatically increases capacity, which is why
        many major routes have four tracks: two fast, two slow.
      </p>
      <p>
        <strong>Junction complexity</strong> consumes capacity through conflicting movements.
        At a flat junction where two routes merge, every train from one route blocks trains from the
        other. The capacity cost is proportional to the number of conflicting movements and the time
        each conflict occupies the junction. Grade-separated junctions (flyovers or dive-unders)
        eliminate these conflicts entirely but cost tens or hundreds of millions to build.
        <strong> Dwell times</strong> at stations are another variable: if a train dwells for 60
        seconds instead of the planned 45, it consumes 15 seconds of the following train's headway,
        and that perturbation propagates backward through every following service.
      </p>

      <h3>UIC Code 406 Capacity Methodology</h3>
      <p>
        The International Union of Railways (UIC) published <strong>UIC Code 406</strong> in 2004
        (revised 2013) as the standard methodology for measuring and comparing railway line
        capacity. It provides a rigorous, reproducible method that is now used across Europe and
        beyond. The method works through a defined sequence of steps:
      </p>
      <p>
        <strong>Step 1: Define the infrastructure section.</strong> The line is divided into
        sections between junctions, where the traffic pattern is homogeneous. Each section is
        analysed independently.
      </p>
      <p>
        <strong>Step 2: Assemble the timetable.</strong> All train paths in the section for the
        analysis period (typically one hour or the peak period) are plotted on a time-distance
        diagram.
      </p>
      <p>
        <strong>Step 3: Compression.</strong> This is the core of the method. All train paths are
        slid together on the time axis until each consecutive pair is separated by exactly the{' '}
        <strong>minimum headway time</strong>. No buffer time, no recovery time — just the bare
        minimum safe separation defined by the signalling system. The result is the{' '}
        <strong>compressed timetable graph</strong>, which represents the minimum time window in
        which the same set of trains could theoretically run.
      </p>
      <p>
        <strong>Step 4: Calculate the capacity consumption ratio.</strong> The{' '}
        <strong>capacity consumption</strong> is expressed as:
      </p>
      <div className="highlight-box">
        <p>
          <strong>Capacity consumption = (compressed time + buffer time supplement) / available
          time</strong>
        </p>
        <p>
          Where <em>compressed time</em> is the duration of the compressed timetable graph,{' '}
          <em>buffer time supplement</em> is additional time recommended for quality and stability
          (typically calculated as a function of the number of trains and average buffer time), and{' '}
          <em>available time</em> is the total time window being analysed (e.g., 60 minutes for an
          hourly analysis, or the full peak period).
        </p>
      </div>
      <p>
        UIC 406 provides recommended thresholds for capacity consumption. These thresholds indicate
        when a line section is approaching its practical limit:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Line Type</th><th>Recommended Maximum Capacity Consumption</th></tr>
          </thead>
          <tbody>
            <tr><td>Dedicated suburban / commuter</td><td>85%</td></tr>
            <tr><td>Dedicated high-speed line</td><td>75%</td></tr>
            <tr><td>Mixed-traffic line (suburban + intercity + freight)</td><td>75%</td></tr>
            <tr><td>Peak hour on any line type</td><td>85% (accepting reduced quality)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Exceeding these thresholds does not mean trains will crash — it means the timetable becomes
        increasingly fragile. Small perturbations cannot be absorbed, delays cascade, and punctuality
        deteriorates rapidly. The thresholds are lower for mixed-traffic lines because heterogeneity
        increases the number of potential conflicts and the buffer time consumed by speed differences.
      </p>

      <h3>Headway Calculations: A Worked Example</h3>
      <p>
        Understanding headway calculations requires working through the components that determine
        how closely two trains can follow each other. The <strong>minimum headway</strong> at any
        point on the network is the sum of several time components:
      </p>
      <p>
        <strong>Signalling headway on plain line</strong> (four-aspect colour-light): The minimum
        headway is the time for the first train to clear enough block sections ahead of the second
        train that the second train always sees a green (or at worst, double-yellow) aspect. With
        four-aspect signalling, the second train needs three clear block sections ahead. The headway
        therefore depends on block section length, train speed, and train length:
      </p>
      <div className="highlight-box">
        <p>
          <strong>Minimum headway = sighting time + (3 × block section running time) + clearing
          time</strong>
        </p>
        <p>
          Where <em>sighting time</em> is the time from when the driver can see the signal to when
          the train reaches it (typically 7–10 seconds), <em>block section running time</em> is the
          time to traverse one block section at the prevailing speed, and <em>clearing time</em> is
          the time for the entire train to pass beyond the signal and for the track circuit to clear
          (train length ÷ speed + track circuit de-energisation time, typically 3–5 seconds).
        </p>
      </div>
      <p>
        For a typical UK main line with 1,200-metre block sections and trains running at 160 km/h
        (44 m/s): block section running time = 1200 ÷ 44 = 27 seconds. Minimum headway =
        10 + (3 × 27) + 8 = 99 seconds, or approximately 1 minute 40 seconds. In practice, 2
        minutes is a common minimum headway on well-designed four-aspect routes.
      </p>
      <p>
        <strong>Station headway</strong> is more complex because it includes additional components:
        the <strong>approach locking time</strong> (the time a signal must remain at danger after
        being set, before the route can be released — typically 120 seconds on UK infrastructure),
        the <strong>route setting and proving time</strong> (interlocking processing + points
        movement + detection, typically 10–20 seconds), and the <strong>overlap clearing
        time</strong> (the time for the departing train to clear the overlap beyond the platform
        starting signal). These components mean station headway is typically 3–4 minutes, even
        where plain-line headway is 2 minutes.
      </p>

      <h3>Flat Junction vs Grade-Separated Junction</h3>
      <p>
        The capacity impact of junction design is dramatic and often underestimated. Consider a
        junction where a branch line diverges from a main line. At a <strong>flat
        junction</strong>, trains from the branch must cross the main line tracks at grade, creating
        conflicting movements. Each conflict occupies the junction for a defined period (typically
        2–4 minutes including approach locking and overlap clearing), during which no other
        conflicting movement can occur.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Junction Type</th><th>Conflicting Moves</th><th>Typical Capacity Impact</th><th>Cost to Build</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Flat junction (two routes merge)</td>
              <td>Every branch train conflicts with opposing main-line trains</td>
              <td>Each branch train consumes 3–5 minutes of main-line capacity</td>
              <td>Minimal (just track and points)</td>
            </tr>
            <tr>
              <td>Grade-separated (flyover / dive-under)</td>
              <td>Zero conflicting movements</td>
              <td>Branch and main-line trains are independent</td>
              <td>Typically £50–200M depending on site</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        To illustrate: if a main line runs 16 trains per hour (tph) and a branch adds 4 tph via a
        flat junction, the 4 branch trains each consume approximately 3 minutes of main-line
        capacity, totalling 12 minutes lost per hour. This effectively reduces the main-line
        capacity to 12 tph — a 25% reduction — unless the timetable can arrange for branch trains
        to use natural gaps between main-line services. With a flyover, the branch trains impose
        zero capacity cost on the main line.
      </p>
      <p>
        Major grade-separation projects in the UK include the Hitchin flyover (2014, enabling
        additional Thameslink services), the proposed flyover at Croydon on the Brighton Main Line,
        and the flat junctions at places like Castlefield in Manchester that constrain capacity
        across an entire region.
      </p>

      <h3>Four-Tracking and Line Capacity Improvements</h3>
      <p>
        When a two-track railway is at capacity, the most direct (though most expensive) solution
        is <strong>four-tracking</strong>: adding two additional tracks alongside the existing two.
        This roughly doubles capacity and, crucially, allows the separation of fast and slow traffic.
        The fast pair carries express and intercity services at full line speed; the slow pair carries
        stopping services and freight. This eliminates the capacity-killing effect of speed
        differential.
      </p>
      <p>
        Four-tracking is extremely expensive in built-up areas because it requires land acquisition,
        bridge widening, station reconstruction, and often the relocation of utilities. Alternatives
        that deliver partial capacity benefits at lower cost include:
      </p>
      <ul>
        <li>
          <strong>Passing loops:</strong> Short sections of double track on an otherwise single-track
          line, allowing trains to pass. Each loop adds capacity but the overall line capacity remains
          constrained by the single-track sections between loops.
        </li>
        <li>
          <strong>Dynamic passing loops:</strong> On double track, short sections of additional track
          that allow a fast train to overtake a slow one. Effective where the speed differential is
          large and overtaking opportunities are limited.
        </li>
        <li>
          <strong>Signalling upgrades:</strong> Shortening block sections reduces headway without
          any civil engineering. Migrating from three-aspect to four-aspect signalling, or from
          fixed-block to ETCS Level 2, can deliver 20–40% headway improvement.
        </li>
        <li>
          <strong>Platform lengthening:</strong> Running longer trains (more carriages) carries more
          passengers without increasing the number of train paths required.
        </li>
        <li>
          <strong>Junction grade separation:</strong> As discussed above, eliminating flat junction
          conflicts frees capacity on the main line.
        </li>
      </ul>

      <h3>Non-Linear Capacity Degradation</h3>
      <div className="highlight-box">
        <p>
          Railway capacity degrades <strong>non-linearly</strong>. Adding one more train to a lightly
          loaded network has almost no impact on performance. But adding one more train to a network
          already running at 85% of theoretical capacity can cause widespread delay because every
          interaction between trains becomes a potential conflict. Each additional train does not just
          occupy its own path; it interacts with every other train it passes, follows, or meets at a
          junction. The number of pairwise interactions grows quadratically with the number of trains,
          and the probability that at least one interaction causes a delay grows exponentially. This is
          why railways typically plan to use only 75-85% of theoretical capacity, reserving the remainder
          as <strong>buffer time</strong> to absorb perturbations without them cascading into systemic
          delay.
        </p>
      </div>

      <h3>Possessions: Engineering Access</h3>
      <p>
        Railway infrastructure requires regular maintenance: rail grinding, tamping, signalling
        renewals, bridge inspections, vegetation clearance, electrification maintenance, and major
        renewals of track, structures, and systems. Most of this work cannot be done while trains are
        running, either because it is physically impossible (you cannot tamp track under a moving
        train) or because it is unsafe. The <strong>possession</strong> is the formal mechanism by
        which a section of track is closed to traffic and handed over to engineering teams.
      </p>
      <p>
        Possessions represent a fundamental tension in railway management. Operations wants every
        minute of every day to run trains. Engineering wants long, frequent access windows to
        maintain the infrastructure efficiently. Short possessions (a few hours at night) are
        operationally convenient but inefficient for engineering: significant time is lost setting up
        and closing down worksites, and complex work cannot be completed. Long weekend possessions
        are more efficient for engineering but disrupt services and require expensive bus replacement
        arrangements.
      </p>

      <h3>Possession Management Lifecycle</h3>
      <p>
        A possession does not simply happen. It passes through a defined lifecycle of planning,
        approval, delivery, and handback, governed by rigorous processes to ensure safety and
        minimise disruption:
      </p>
      <p>
        <strong>Planning phase:</strong> The engineering team identifies the work required, the
        access needed (which tracks, for how long, at what times), the plant and materials to be
        delivered, and the impact on train services. This planning begins months or even years in
        advance for major possessions. The request is submitted to the capacity planning team,
        who assess the impact and seek to minimise disruption by combining work packages, using
        mid-week overnight access where possible, and scheduling the heaviest disruption outside
        peak travel periods.
      </p>
      <p>
        <strong>T-12 to T-3 milestones:</strong> In the UK, Network Rail's planning milestones
        count backward from the timetable implementation date. These milestones impose discipline
        on the planning process:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Milestone</th><th>Weeks Before</th><th>Key Activity</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>T-36</strong></td>
              <td>36 weeks</td>
              <td>Strategic planning: major possessions and blockades confirmed in principle. Engineering access strategy agreed.</td>
            </tr>
            <tr>
              <td><strong>T-26</strong></td>
              <td>26 weeks</td>
              <td>Firm dates and durations confirmed for all major possessions. Train service impact assessment begins.</td>
            </tr>
            <tr>
              <td><strong>T-18</strong></td>
              <td>18 weeks</td>
              <td>Detailed possession plans published. Train operators begin planning revised timetables and bus replacements.</td>
            </tr>
            <tr>
              <td><strong>T-12</strong></td>
              <td>12 weeks</td>
              <td>Informed Traveller: public timetable published. Passenger information about disruption must be available. Late possession requests after T-12 require exceptional approval.</td>
            </tr>
            <tr>
              <td><strong>T-6</strong></td>
              <td>6 weeks</td>
              <td>Confirmed Plan of Work: all engineering works confirmed, safe systems of work designed, plant and material deliveries scheduled.</td>
            </tr>
            <tr>
              <td><strong>T-3</strong></td>
              <td>3 weeks</td>
              <td>Final confirmation. All changes frozen. Possession pack issued containing detailed timings, safe work plans, and handback procedures.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Worksite Protection and Safe Systems of Work</h3>
      <p>
        When engineering staff enter the railway to work, they must be protected from moving trains.
        The <strong>safe system of work</strong> defines how this protection is provided. On Network
        Rail infrastructure, the primary methods are:
      </p>
      <ul>
        <li>
          <strong>Possession of the line:</strong> The formal closure of the line to all traffic.
          Protection is provided by placing <strong>protection limits</strong> — detonators, marker
          boards, and blocked signals — at defined distances from the worksite. The{' '}
          <strong>Engineering Supervisor (ES)</strong> or{' '}
          <strong>Person in Charge of Possession (PICOP)</strong> is responsible for confirming
          protection is in place before work begins and for ensuring it is maintained throughout.
        </li>
        <li>
          <strong>Line blockage:</strong> A less formal arrangement for lower-risk work, where
          the signaller blocks the signals protecting the section and confirms to the person in
          charge that no trains will enter. Suitable for short-duration, low-risk work such as
          inspections.
        </li>
        <li>
          <strong>Separated work:</strong> Work that does not require line closure because it is
          carried out at a safe distance from the running line (e.g., work on a structure adjacent
          to but not fouling the track). Workers must still be briefed on the hazards and must not
          encroach within the minimum safe distance.
        </li>
      </ul>
      <p>
        The handback process is equally critical. Before the line is returned to traffic, the
        engineering team must confirm that all equipment and personnel are clear of the line, all
        temporary speed restrictions are in place if required, and the infrastructure is safe for
        the passage of trains. The signaller then removes the protection and restores normal
        working. Any failure in this process can have catastrophic consequences — a train entering
        a worksite is one of the most serious safety scenarios on the railway.
      </p>

      <h3>Line Blockage and Alternative Transport</h3>
      <p>
        When a line is closed for engineering work, passengers must still be able to travel. The
        arrangements for <strong>alternative transport</strong> (typically rail replacement bus
        services) are a major logistical undertaking. Bus companies must be contracted months in
        advance, routes planned, stops identified (often not at the station itself but at nearby
        road access points), and drivers briefed. Journey times by bus are typically 2–3 times
        longer than by train, and capacity is much lower: a single 12-car train carries 800+
        passengers; a bus carries 50–70.
      </p>
      <p>
        Where possible, train services are diverted via alternative routes rather than replaced by
        buses, but this depends on the availability of diversionary routes with appropriate
        clearances, electrification, and capacity. For major blockades, a combination of diversions
        and bus replacements is usually needed, along with extensive passenger information campaigns
        starting weeks before the closure. The cost of alternative transport and the economic impact
        of longer journey times are significant factors in the business case for any possession.
      </p>

      <h3>The Beeching Report and Capacity Decisions</h3>
      <p>
        No discussion of British railway capacity is complete without reference to the{' '}
        <strong>Beeching Report</strong>. In 1963, Dr Richard Beeching, Chairman of British
        Railways, published <em>The Reshaping of British Railways</em>, recommending the closure
        of approximately 6,000 route-miles (over a third of the network) and 2,363 stations. The
        analysis was based on traffic data showing that many rural lines and branch lines carried
        tiny volumes of traffic at enormous cost: one-third of the route-miles carried only 1% of
        the traffic.
      </p>
      <p>
        The closures were implemented through the mid-1960s, permanently removing capacity from
        the network. While many of the closed lines were genuinely uneconomic at the time, the
        decisions were made without anticipating future growth. Several closed routes are now
        sorely missed as the railway has grown — particularly former cross-country links that
        would today relieve pressure on congested routes via London. The cost of reinstating
        closed railways is vastly higher than the savings from closing them: land has been sold,
        buildings demolished, formations built over, and planning consent for new railways in
        populated areas is extraordinarily difficult to obtain.
      </p>
      <div className="highlight-box">
        <p>
          <strong>Capacity decisions are irreversible.</strong> Closing a railway line or removing
          a track saves money today but eliminates optionality for the future. Building new capacity
          is orders of magnitude more expensive than retaining existing capacity. This asymmetry
          means that capacity reduction decisions should be made with extreme caution and a long
          time horizon. The Beeching closures are the most dramatic illustration of this principle
          in British railway history, but the same logic applies to every decision to remove a
          passing loop, close a station, or single a double-track section.
        </p>
      </div>

      <Callout type="analogy">
        Railway capacity degrades like <strong>network performance under load</strong>. A network
        link at 50% utilisation handles traffic smoothly. At 80%, queuing theory tells us that
        latency rises sharply. At 95%, the system is effectively saturated: any packet (train) that
        arrives slightly out of expected timing causes a queue that propagates backward. The
        relationship between utilisation and delay follows a hockey-stick curve, not a straight line.
        This is why network engineers provision bandwidth well below theoretical maximum, and why
        railway planners never fill the timetable to 100%. Possessions are the railway equivalent of
        scheduled maintenance windows in production systems: you must take systems offline to patch and
        upgrade them, and the negotiation over when and for how long mirrors exactly the tension between
        SRE teams and product teams arguing over deployment windows. The UIC 406 compression method
        is essentially the same as calculating the theoretical throughput of a pipeline by removing
        all idle cycles and measuring the minimum cycle time — the ratio of busy cycles to total
        available cycles gives you utilisation, and queuing theory tells you the rest.
      </Callout>

      <Callout label="UIC Capacity Method">
        The International Union of Railways (UIC) defines a standard methodology for capacity
        analysis in UIC Code 406. It works by compressing all train paths in a timetable onto a
        time-distance diagram until they are separated by exactly the minimum headway, then measuring
        the ratio of <strong>consumed capacity</strong> (compressed timetable duration) to
        <strong> available capacity</strong> (the time window). A ratio above 0.75 on mixed-traffic
        lines indicates that the infrastructure is approaching its practical limit and further
        services will degrade reliability. The method is applied per infrastructure section (between
        junctions), and the section with the highest consumption ratio is the binding constraint
        for the corridor. Importantly, the method captures the effect of heterogeneity: a mix of
        fast and slow trains compresses less efficiently than a homogeneous service pattern, correctly
        reflecting the higher capacity cost of mixed traffic.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Signalling headway is the fundamental determinant of line capacity.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'Track maintenance (tamping, grinding) drives the need for engineering possessions.' },
        { target: 'm5-l1', label: 'Electrification Principles', desc: 'OLE maintenance adds another dimension to possession planning.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Station throat layout and platform capacity are common bottlenecks.' },
      ]} />
    </>
  );
}

function M8L3({ goTo }) {
  return (
    <>
      <h3>When Things Go Wrong</h3>
      <p>
        No railway runs to time every day. Disruptions are an inherent part of railway operation,
        arising from an enormous range of causes: <strong>infrastructure failures</strong> (signal
        faults, points failures, rail breaks, power supply trips, overhead line damage),
        <strong> rolling stock failures</strong> (traction faults, door failures, brake faults,
        pantograph damage), <strong>external events</strong> (trespass, fatalities, flooding, extreme
        heat causing rail buckling, autumn leaf contamination, snow and ice), and <strong>operational
        causes</strong> (crew unavailability, late dispatch, extended dwell times from heavy loading).
        Each type of disruption has different characteristics in terms of duration, geographic extent,
        and the number of services affected.
      </p>
      <p>
        The scale of disruption varies enormously. A single points failure at a busy junction can
        delay dozens of trains within minutes as the conflict propagates through the network. A
        fatality on the line typically closes the route for at least 90 minutes. A major
        infrastructure failure, such as a signalling power supply losing all feeds, can shut down an
        entire area for hours. The interconnected nature of railway networks means that a disruption
        in one location rarely stays local: delays propagate along routes, across junctions, and into
        connecting services, amplifying far beyond the original incident.
      </p>

      <h3>Delay Attribution in Detail</h3>
      <p>
        Understanding why trains are late is critical for both performance management and financial
        accountability. <strong>Delay attribution</strong> is the process of determining the root
        cause of every delay above a threshold (typically 3 minutes in the UK) and assigning
        responsibility to the party that caused it. In a vertically separated railway like the UK's,
        where one company (Network Rail) manages the infrastructure and dozens of operators run the
        trains, this has direct financial consequences: the responsible party pays compensation to
        those affected through the <strong>Schedule 8</strong> performance regime.
      </p>
      <p>
        The <strong>TRUST</strong> (Train Running Under System TOPS) system is the backbone of delay
        attribution in the UK. TRUST automatically records the actual arrival and departure time of
        every train at every timing point, by reading train describer data and comparing it with the
        planned timetable. When a train passes a timing point more than a defined threshold late
        (3 minutes for delay attribution, 1 minute for On Time measurement), TRUST generates a
        delay record. The <strong>delay attributor</strong> — typically a staff member in the
        Network Rail control centre or the train operator's control — then assigns a{' '}
        <strong>cause code</strong> and <strong>responsible manager</strong> to each delay.
      </p>
      <p>
        Attribution is harder than it sounds. A train arriving 10 minutes late at its destination may
        have been delayed by a signal fault (infrastructure), a door fault (operator), and congestion
        caused by a preceding train that was itself delayed by a crew shortage (a different operator).
        Unpicking these chains of causation requires detailed logs from signalling systems, train
        describer records, control room logs, and often professional judgement. The UK system uses a
        standardised set of <strong>delay attribution codes</strong> grouped by category: track
        faults (100-series), signalling faults (200-series), electrical supply faults (300-series),
        rolling stock faults (400-series), traincrew causes (500-series), station causes (600-series),
        external causes (700-series), and miscellaneous/unattributed (800/900-series).
      </p>
      <p>
        <strong>Delay minutes</strong> are the fundamental unit of measurement. A train that arrives
        5 minutes late at one timing point and 7 minutes late at the next has accumulated 2 additional
        delay minutes in that section. The total delay minutes across all trains, all timing points,
        and all causes is the master metric for railway performance. In a typical year, the UK
        network generates tens of millions of delay minutes, and reducing this figure by even a few
        percent requires sustained effort across every discipline.
      </p>
      <p>
        <strong>Reactionary delay</strong> is the delay suffered by one train as a consequence of
        another train's lateness. It is typically larger than the primary delay that caused it. A
        single 5-minute primary delay at a busy junction can generate 30 or more minutes of
        reactionary delay across following and connecting services. The{' '}
        <strong>reactionary delay multiplier</strong> — the ratio of total reactionary delay to
        primary delay — is a key indicator of network resilience. A high multiplier (above 2.5–3.0)
        indicates that the timetable and infrastructure are so congested that small perturbations
        amplify severely. Reducing this multiplier is a central concern of real-time traffic
        management.
      </p>

      <h3>Schedule 8 Performance Regime</h3>
      <p>
        The <strong>Schedule 8</strong> regime is the financial mechanism that incentivises
        performance in the UK's vertically separated railway. It is part of every track access
        agreement between Network Rail and train operators. The core principle is simple: the
        party that causes delay pays the party that suffers it.
      </p>
      <p>
        Each train operator has a <strong>benchmark</strong> — an agreed level of performance
        (delay minutes per service) that represents the expected performance under normal conditions.
        Network Rail also has benchmarks for infrastructure-caused delay. When actual performance
        is worse than the benchmark, the responsible party pays compensation. When it is better, the
        party receives a bonus. The payment rates are calibrated to reflect the financial impact of
        delay on operators (lost revenue from passengers claiming delay-repay compensation, reduced
        demand from poor reliability) and are expressed in pounds per delay minute.
      </p>
      <p>
        The Schedule 8 payment rates vary by operator and by time of day, reflecting the different
        revenue impacts of delay. A delay minute on a packed commuter service in the morning peak
        has a higher financial impact (and hence a higher Schedule 8 rate) than the same delay on
        a lightly loaded mid-morning service. Typical payment rates range from £20 to over £100 per
        delay minute depending on the operator and service. In aggregate, Schedule 8 payments
        transfer hundreds of millions of pounds per year between Network Rail and operators.
      </p>
      <div className="highlight-box">
        <p>
          <strong>Schedule 8 is a two-way mechanism.</strong> When Network Rail causes delay (e.g.,
          signal failure), it pays the affected operators. When an operator causes delay (e.g., a
          train breaks down and blocks the line), that operator pays Network Rail and any other
          operators whose services were disrupted. When an operator performs better than its benchmark,
          Network Rail pays the operator a bonus. This creates financial incentives for all parties
          to invest in reliability and minimise the impact of disruptions.
        </p>
      </div>

      <h3>Contingency Planning</h3>
      <p>
        <strong>Contingency plans</strong> are pre-prepared responses to foreseeable disruption
        scenarios. Rather than replanning from scratch under time pressure, control staff can reach
        for a documented plan that has been developed, reviewed, and agreed in advance. For a major
        junction, the contingency plan might specify: if the junction is blocked, divert services A
        and B via route X, cancel services C and D, and terminate service E at station Y. Having
        these plans ready allows faster, more consistent responses than ad-hoc replanning under
        pressure.
      </p>
      <p>
        Contingency plans are developed through a structured process:
      </p>
      <ul>
        <li>
          <strong>Scenario identification:</strong> Determine the most likely and most impactful
          disruption scenarios for each part of the network. These typically include: loss of a key
          junction, loss of a major station, power supply failure, and complete line blockage between
          key nodes. Historical incident data guides the selection.
        </li>
        <li>
          <strong>Response design:</strong> For each scenario, design a service plan that can be
          implemented quickly. This includes which services to cancel, which to divert, where to
          terminate and turn services, how to manage rolling stock and crew that become displaced,
          and how to provide passenger information.
        </li>
        <li>
          <strong>Resource validation:</strong> Confirm that the contingency plan is physically
          feasible — that the diversionary routes have capacity, that rolling stock can be turned
          at the proposed short-termination points, and that crew have route knowledge for the
          alternative workings.
        </li>
        <li>
          <strong>Tabletop exercises:</strong> Rehearse the plan with all parties (signallers,
          controllers, operators, station staff) to test understanding and identify gaps. Lessons
          are fed back into plan revisions.
        </li>
      </ul>
      <p>
        The best contingency plans are <strong>scenario-specific and pre-calculated</strong>. They
        specify exact train identities, revised stopping patterns, platform allocations, and crew
        movements. They can be implemented within minutes of the triggering incident being confirmed.
        Poor contingency plans are vague (stating only general principles), untested, and require
        significant on-the-spot invention that delays the response.
      </p>

      <h3>Control Room Communication Protocols</h3>
      <p>
        During a significant incident, <strong>communication</strong> between multiple parties
        determines whether the response is coordinated or chaotic. The key parties in a major
        incident are: the <strong>signaller</strong> controlling the affected area, the{' '}
        <strong>Network Rail control centre</strong> (route control or the national operations
        centre), the affected <strong>train operators' control rooms</strong>, the{' '}
        <strong>British Transport Police</strong> (if a safety or security incident), and{' '}
        <strong>station staff</strong> at affected stations.
      </p>
      <p>
        Protocols specify:
      </p>
      <ul>
        <li>
          <strong>Initial notification:</strong> The signaller or first-aware party notifies the
          Network Rail route control centre immediately. A standard template captures the key facts:
          location, nature of incident, lines affected, estimated duration, trains immediately
          affected.
        </li>
        <li>
          <strong>Conference call:</strong> For significant incidents, a conference call is
          established within minutes, bringing together all affected parties. The Network Rail
          controller chairs the call, and a formal structure is followed: situation update, agreed
          actions, next call time.
        </li>
        <li>
          <strong>Decision authority:</strong> Clearly defined roles determine who can authorise
          cancellations, diversions, and bus replacements. In the UK, the Network Rail route
          controller can authorise changes to the operational plan; the operator's controller
          authorises cancellations of their own services.
        </li>
        <li>
          <strong>Structured communication:</strong> The use of standard terminology and
          structured message formats (similar to aviation communication protocols) reduces
          misunderstanding. Key information is repeated back to confirm understanding.
        </li>
      </ul>

      <h3>Customer Information During Disruption</h3>
      <p>
        Passengers stranded by disruption need accurate, timely information to make decisions. The
        information chain runs from the control room through multiple channels to the passenger:
      </p>
      <ul>
        <li>
          <strong>National Rail Enquiries (NRE):</strong> The central information source, providing
          real-time updates via its website, app, and phone service. NRE receives data from the
          Darwin system, which aggregates real-time train running information from TRUST and
          operator feeds.
        </li>
        <li>
          <strong>Station announcements and displays:</strong> Customer Information Systems (CIS)
          at stations display real-time departures fed by Darwin. During disruption, these should
          show revised departure times, cancellations, and platform changes. However, the quality
          of station announcements varies: automated announcements may lag behind the real situation,
          and manual announcements depend on station staff being informed by the control room.
        </li>
        <li>
          <strong>Social media:</strong> Train operators and Network Rail use Twitter/X and other
          platforms for real-time disruption updates. Social media has become one of the primary
          channels through which passengers receive disruption information, often faster than
          official station displays.
        </li>
        <li>
          <strong>On-train announcements:</strong> The driver or conductor should make regular
          announcements to passengers on affected trains. This depends on the control room
          communicating the situation to train crew promptly — a weak link in many incidents.
        </li>
      </ul>
      <p>
        The quality of customer information during disruption is consistently identified as one of
        the weakest aspects of the UK railway's disruption response. Common failures include
        conflicting information from different channels, delays in updating departure boards,
        failure to communicate the reason for disruption, and the absence of clear advice on
        alternative routing options.
      </p>

      <h3>Real-Time Replanning and Recovery Strategies</h3>
      <p>
        When a significant disruption occurs, <strong>signallers</strong> and <strong>control room
        staff</strong> must replan the service in real time. This involves deciding which trains to
        hold, which to cancel, which to divert via alternative routes, where to short-terminate
        services and turn them around, and how to manage passenger connections. These decisions must
        be made rapidly under pressure, often with incomplete information about when the disruption
        will be resolved.
      </p>
      <p>
        Modern railways use <strong>Traffic Management Systems (TMS)</strong> to support this
        process. A TMS displays the real-time position and predicted path of every train, highlights
        emerging conflicts, and can suggest or automatically implement replanning strategies. The
        system continuously recalculates arrival predictions based on current positions, speeds, and
        the state of the infrastructure, providing controllers with a rolling forecast of the
        network state. However, the most complex decisions, particularly those involving service
        cancellations, diversions, and passenger information, still require human judgement and
        coordination across multiple control centres and operators.
      </p>
      <p>
        Specific <strong>recovery strategies</strong> used during and after disruption include:
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Strategy</th><th>Description</th><th>When Used</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Skip-stopping</strong></td>
              <td>A late-running stopping service skips one or more intermediate stations to recover time. Passengers for skipped stations must wait for the next service.</td>
              <td>Moderate delay on a frequent stopping service where the next service is close behind</td>
            </tr>
            <tr>
              <td><strong>Short-forming</strong></td>
              <td>Running a service with fewer carriages than planned (e.g., a 4-car unit instead of 8-car) because the additional unit is unavailable due to failure or displacement. Reduces capacity but maintains the service.</td>
              <td>Rolling stock shortage due to failure or displacement during disruption</td>
            </tr>
            <tr>
              <td><strong>Turn-short (short-termination)</strong></td>
              <td>Terminating a service before its planned destination and turning the train around to form a return working. Passengers for beyond the termination point must use alternative services.</td>
              <td>Line blockage ahead, or to recover a train to the right part of the network for its next working</td>
            </tr>
            <tr>
              <td><strong>Diversion</strong></td>
              <td>Routing a train via an alternative route to avoid a blocked section. May involve a longer journey time and different calling pattern.</td>
              <td>Complete blockage of the normal route where an alternative exists</td>
            </tr>
            <tr>
              <td><strong>Cancellation</strong></td>
              <td>Removing a service entirely from the operating plan. The rolling stock and crew are redeployed to other services or returned to depot.</td>
              <td>Severe disruption where maintaining the service is impossible or would cause greater overall delay</td>
            </tr>
            <tr>
              <td><strong>Stepping back</strong></td>
              <td>Restarting the service pattern from a known-good state. Rather than trying to recover individual trains to their correct diagram positions, all services are reset to a regular interval pattern from a defined time.</td>
              <td>After prolonged disruption where rolling stock and crew are badly out of position</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Autumn Leaf-Fall Management</h3>
      <p>
        Every autumn, falling leaves create one of the railway's most persistent operational
        challenges. Leaves are crushed by wheel-rail contact into a hard, black, Teflon-like
        layer of compressed leaf mulch that dramatically reduces adhesion between wheel and rail.
        The coefficient of friction drops from the normal 0.25–0.35 to as low as 0.01–0.05 —
        comparable to ice. This causes two critical problems: trains cannot brake effectively
        (leading to station overruns and signals passed at danger), and powered wheels spin on
        acceleration (leading to wheelflat damage and delayed departures).
      </p>
      <p>
        The railway's response is a major annual operation:
      </p>
      <ul>
        <li>
          <strong>Railhead treatment trains (RHTTs):</strong> Dedicated trains that spray
          high-pressure water jets to clean the railhead, followed by application of{' '}
          <strong>sandite</strong> — a gel containing sand and a steel-shot abrasive that restores
          adhesion. RHTTs run overnight and in the early morning on affected routes throughout the
          leaf-fall season (typically October to December). Network Rail operates a fleet of{' '}
          <strong>Multi-Purpose Vehicles (MPVs)</strong> and locomotive-hauled treatment trains for
          this purpose.
        </li>
        <li>
          <strong>Timetable adjustments:</strong> During the leaf-fall season, additional running
          time is added to timetables on affected routes to allow for reduced braking performance.
          In some cases, services are altered or reduced to provide additional recovery time.
        </li>
        <li>
          <strong>Vegetation management:</strong> Cutting back lineside trees and vegetation
          reduces the volume of leaves falling onto the track. This is a year-round activity but
          is targeted at the worst-affected locations. However, cutting trees near the railway is
          constrained by environmental regulations (nesting birds, protected species, tree
          preservation orders).
        </li>
        <li>
          <strong>Rolling stock measures:</strong> Trains operating in leaf-fall areas are fitted
          with wheel-slide protection (WSP) systems and sanders. WSP detects wheel lock-up during
          braking and releases the brake momentarily, similar to ABS in road vehicles. Sanders
          deposit sand ahead of the wheels to improve adhesion.
        </li>
      </ul>

      <h3>Extreme Weather Management</h3>
      <p>
        Climate change is increasing the frequency and severity of extreme weather events that
        disrupt railway operations. The railway must manage several distinct weather risks:
      </p>
      <p>
        <strong>Extreme heat:</strong> When rail temperature exceeds approximately 46°C (which
        corresponds to an air temperature of around 30°C in direct sunlight), the risk of{' '}
        <strong>rail buckling</strong> increases sharply. Continuously welded rail under compression
        from thermal expansion can buckle laterally, creating a kink in the track that would
        derail any train passing over it. The response is to impose{' '}
        <strong>heat speed restrictions</strong> — reducing the maximum speed to 60 mph or lower
        — because slower trains impose less lateral force on the track and are less likely to
        trigger a buckle. Network Rail uses weather forecasts and a network of rail temperature
        sensors to predict when restrictions will be needed and communicates them to signallers
        and operators in advance. Speed restrictions during hot weather cause significant delay,
        particularly on long-distance routes where the cumulative impact is large.
      </p>
      <p>
        <strong>Flooding:</strong> Heavy rainfall can flood track formations, wash out embankments,
        and overwhelm drainage systems. The immediate response is line closure until the water level
        drops and the track can be inspected. In severe cases, the formation may be damaged and
        require weeks of repair. Network Rail's weather monitoring capability includes rain gauges,
        river level sensors, and landslide detection systems at vulnerable locations. Pre-positioned
        emergency response teams can deploy pumps, temporary drainage, and track repair equipment.
      </p>
      <p>
        <strong>Snow and ice:</strong> Snow accumulation on tracks, frozen points mechanisms, ice on
        conductor rails (third-rail electrification), and blocked drainage all disrupt operations.
        Points heaters prevent freezing at critical locations, and de-icing trains treat conductor
        rails. However, prolonged cold spells can overwhelm these measures.
      </p>
      <p>
        <strong>High winds:</strong> Winds above defined thresholds (typically 60–70 mph) trigger
        speed restrictions or line closures, particularly on exposed sections such as coastal routes,
        viaducts, and bridges. The primary risks are train overturning (for lightweight vehicles
        with high side profiles), overhead line damage from falling trees, and debris on the track.
      </p>

      <h3>Performance Metrics and Timetable Resilience</h3>
      <p>
        Railway performance is measured through a hierarchy of metrics. Historically, the UK used
        <strong> Public Performance Measure (PPM)</strong>: the percentage of trains arriving at
        their final destination within 5 minutes of the scheduled time (10 minutes for long-distance
        services). This has been supplemented and partly replaced by <strong>On Time</strong> (arrival
        within 1 minute of schedule), <strong>right-time departure</strong>, and
        <strong> cancellations and significant lateness (CaSL)</strong> as a measure of the worst
        outcomes. Each metric tells a different story: a railway can have good PPM (most trains
        within 5 minutes) but poor On Time (many trains 2-4 minutes late) or low CaSL but poor PPM
        (few catastrophic failures but widespread small delays).
      </p>
      <p>
        <strong>Timetable resilience</strong> is the ability of a timetable to absorb perturbations
        without delays cascading. Resilience is built into the timetable through several mechanisms:
        <strong> recovery time</strong> (also called pathing time or engineering allowance) is
        additional running time beyond the technical minimum, allowing a slightly delayed train to
        recover to schedule. <strong>Buffer time</strong> is additional headway between trains beyond
        the signalling minimum, providing a cushion so that one late train does not immediately
        delay the following service. <strong>Dwell time margin</strong> allows for slower-than-planned
        station stops without delaying departure.
      </p>
      <p>
        There is a fundamental trade-off between timetable efficiency and resilience. A "tight"
        timetable with minimal recovery and buffer time offers faster journey times and more train
        paths but is fragile: any perturbation cascades. A "padded" timetable is more robust but
        wastes capacity and delivers slower journeys. The art of timetable design is finding the
        right balance, placing recovery time where it is most needed (after known bottlenecks, at
        busy junctions) rather than spreading it evenly, and sizing buffers to match the observed
        variability at each point in the timetable.
      </p>

      <h3>Performance Analysis and Continuous Improvement</h3>
      <p>
        Performance improvement on the railway is a data-driven, continuous process. The cycle
        follows a structured approach:
      </p>
      <ul>
        <li>
          <strong>Data collection:</strong> TRUST delay data, GPS-based train tracking, signalling
          logs, maintenance records, and customer complaint data are all inputs. Modern systems
          generate terabytes of performance data daily.
        </li>
        <li>
          <strong>Root cause analysis:</strong> The delay attribution data is analysed to identify
          the largest contributors to poor performance. Pareto analysis typically reveals that a
          small number of locations and failure types account for a large proportion of total delay.
          For example, 10 junctions may account for 40% of all infrastructure-caused delay on a
          route.
        </li>
        <li>
          <strong>Intervention design:</strong> For each identified hot-spot, specific interventions
          are designed. These might include: targeted maintenance (replacing a failure-prone set of
          points), timetable adjustment (adding recovery time after a known bottleneck), operational
          change (revised station dispatch procedures), or investment (grade-separating a flat
          junction, lengthening a platform).
        </li>
        <li>
          <strong>Implementation and monitoring:</strong> Interventions are implemented and their
          effect monitored through the same data systems. If the intervention reduces delay at the
          target location, it is sustained. If not, the analysis is revisited.
        </li>
        <li>
          <strong>Periodic performance review:</strong> Network Rail and operators hold regular
          (typically 4-weekly) performance review meetings, examining trends, reviewing the
          effectiveness of interventions, and agreeing priorities for the next period. These reviews
          feed into longer-term investment planning — if a reliability problem cannot be resolved
          through maintenance and operational changes, it may justify a capital investment in
          infrastructure renewal.
        </li>
      </ul>
      <p>
        The <strong>Joint Performance Improvement Plan (JPIP)</strong> is the formal mechanism by
        which Network Rail and each train operator agree on their shared performance improvement
        priorities and actions. It is reviewed quarterly and is a contractual requirement of the
        track access agreement. The discipline of structured performance analysis, combined with
        the financial incentives of Schedule 8, has driven significant reliability improvements on
        the UK railway over the past two decades — though much remains to be done.
      </p>

      <Callout type="analogy">
        Delay attribution is like <strong>distributed tracing in a microservices architecture</strong>.
        When a user request fails or is slow, you need to trace the call chain across services to
        find the root cause. Was it the database, the authentication service, or a downstream API?
        Railway delay attribution does the same thing: following the chain of causation from the
        original incident (root cause) through every service it affected (reactionary delay),
        tagging each segment with the responsible party. Just as distributed tracing tools like
        Jaeger or Zipkin propagate correlation IDs through service calls, railway delay attribution
        propagates incident codes through the sequence of affected trains. And just as in software,
        the hardest bugs to diagnose are the ones where multiple independent failures coincide,
        making the causal chain ambiguous. The Schedule 8 regime is like an SLA with financial
        penalties — your cloud provider credits you when uptime falls below the guarantee, and
        the railway pays out when delay exceeds the benchmark. The continuous improvement cycle
        mirrors SRE practice: blameless postmortems (root cause analysis), error budgets
        (performance benchmarks), and toil reduction (targeted interventions at hot-spots).
      </Callout>

      <Callout label="Recovery Time in Practice">
        Recovery time is not free time. On a 60-minute journey, a railway might add 3-5 minutes
        of recovery time distributed across the route. This means the timetabled journey time is 63-65
        minutes even though the train could run the route in 60 minutes under perfect conditions.
        Passengers perceive this as a slow journey, and there is constant commercial pressure to
        remove it. But without recovery time, a 2-minute delay at the start of the journey arrives
        as a 2-minute delay at the destination, triggering compensation payments and eroding public
        confidence. The optimal amount of recovery time depends on the observed variability at each
        point, and modern analytical tools use historical performance data to place it precisely
        where it delivers the greatest benefit to punctuality.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Signal failures are among the most common and disruptive infrastructure faults.' },
        { target: 'm7-l1', label: 'Railway Telecoms', desc: 'Communication systems are critical for real-time incident management and coordination.' },
        { target: 'm6-l2', label: 'Traction & Braking', desc: 'Rolling stock failures (traction, brakes, doors) are a major source of delay.' },
        { target: 'm5-l2', label: 'Power Supply & Distribution', desc: 'Electrical supply failures disrupt all services in the affected area.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM8Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm8-l1': return <M8L1 goTo={goTo} />;
    case 'm8-l2': return <M8L2 goTo={goTo} />;
    case 'm8-l3': return <M8L3 goTo={goTo} />;
    default: return null;
  }
}
