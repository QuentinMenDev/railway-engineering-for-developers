import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M8L1({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <svg viewBox="0 0 400 140" style={{ width: '100%', maxWidth: '400px' }}>
            <text x="200" y="14" fill="var(--text-dim)" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Time-Distance (String) Diagram</text>
            {/* Y-axis (stations) */}
            <line x1="60" y1="25" x2="60" y2="120" stroke="var(--text-dim)" strokeWidth="1"/>
            {/* X-axis (time) */}
            <line x1="60" y1="120" x2="380" y2="120" stroke="var(--text-dim)" strokeWidth="1"/>
            {/* Station labels */}
            <text x="55" y="35" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn A</text>
            <text x="55" y="60" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn B</text>
            <text x="55" y="85" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn C</text>
            <text x="55" y="115" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="end">Stn D</text>
            {/* Station grid lines */}
            <line x1="60" y1="32" x2="380" y2="32" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
            <line x1="60" y1="57" x2="380" y2="57" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
            <line x1="60" y1="82" x2="380" y2="82" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
            <line x1="60" y1="112" x2="380" y2="112" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2,3"/>
            {/* Time labels */}
            <text x="80" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">06:00</text>
            <text x="180" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">07:00</text>
            <text x="280" y="132" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">08:00</text>
            {/* Fast train (A→D, stopping at B only) */}
            <polyline points="80,32 120,57 125,57 180,112" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
            {/* Stopping train (A→D, all stops) */}
            <polyline points="100,32 140,57 148,57 190,82 198,82 260,112" fill="none" stroke="var(--blue)" strokeWidth="1.5"/>
            {/* Return train (D→A) */}
            <polyline points="200,112 250,82 255,82 300,57 308,57 360,32" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
            {/* Legend */}
            <line x1="240" y1="28" x2="260" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
            <text x="265" y="31" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">fast</text>
            <line x1="290" y1="28" x2="310" y2="28" stroke="var(--blue)" strokeWidth="1.5"/>
            <text x="315" y="31" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">stopping</text>
          </svg>
        </div>
        <figcaption>CAD diagram: Time-distance (string) diagram — the fundamental timetable planning tool. Lines represent train paths; horizontal segments show station dwell times.</figcaption>
      </figure>

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

export const quiz: QuizQuestion[] = [
  { text: 'Why is railway timetabling often described as a constraint-satisfaction problem?', options: ['Because trains must satisfy passenger complaints', 'Because the timetable must simultaneously satisfy many hard constraints (infrastructure capacity, junction conflicts, turnaround times, crew rules) and soft constraints (even spacing, connections) with limited resources', 'Because there is always exactly one valid timetable solution', 'Because constraints only apply to freight, not passenger services'], correct: 1, explanation: 'A timetable must respect infrastructure limits (block sections, junction conflicts, platform availability), rolling stock and crew diagrams, minimum turnaround times, connection requirements, and maintenance windows — all simultaneously. Finding a feasible solution that also optimises commercial objectives is a classic constraint-satisfaction/optimisation problem.' },
  { text: 'What is the difference between the Working Timetable (WTT) and the public timetable?', options: ['They are identical documents published in different formats', 'The WTT contains precise timings to the half-minute at every timing point including passing times and pathing allowances, while the public timetable shows only scheduled station stops rounded to whole minutes', 'The WTT is only used during engineering works, and the public timetable is for normal operations', 'The public timetable is more detailed because it includes platform numbers'], correct: 1, explanation: 'The WTT is the operational document with half-minute precision at every timing point (including junctions and passing loops where the train does not stop), plus engineering and pathing allowances. The public timetable is a simplified extract showing only calling points at rounded minutes — the same relationship as internal API contracts vs. a public-facing user interface.' },
  { text: 'Which of the following is NOT a typical input to the timetabling process?', options: ['Infrastructure capability (line speeds, platform lengths, junction capacity)', 'Rolling stock fleet availability and performance characteristics', 'The colour scheme of the train operating company', 'Crew working-time regulations and depot locations'], correct: 2, explanation: 'Timetabling inputs include infrastructure data (routes, speeds, capacity), rolling stock (fleet size, acceleration, max speed), crew constraints (shift length, route knowledge), commercial requirements (frequency, connections), and maintenance windows. The livery or branding of the operator has no bearing on the timetable.' },
  { text: 'Why is the general railway timetabling problem considered NP-hard?', options: ['Because railways use a non-polynomial track gauge', 'Because the number of possible combinations of train paths, platforms, and timings grows combinatorially, making it computationally infeasible to guarantee finding an optimal solution for real-sized networks in polynomial time', 'Because timetables must be recalculated every day', 'Because NP stands for "National Planning" which is always difficult'], correct: 1, explanation: 'With thousands of trains, hundreds of junctions, and minute-by-minute time slots, the solution space is astronomically large. The problem has been formally shown to be NP-hard, meaning no known algorithm can guarantee an optimal solution in polynomial time. In practice, heuristics, decomposition, and iterative methods are used to find good-enough solutions.' },
];
