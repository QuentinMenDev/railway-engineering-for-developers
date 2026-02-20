import { DisruptionResponseFlow } from '../../../components/symbols';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';
import type { LessonProps, QuizQuestion } from '../../../types';

export default function M8L3({ goTo }: LessonProps) {
  return (
    <>
      <figure className="lesson-figure">
        <div className="cad-symbol">
          <DisruptionResponseFlow style={{ maxWidth: '400px' }} />
        </div>
        <figcaption>CAD diagram: Disruption response decision flow — incident triggers decision between operational response strategies.</figcaption>
      </figure>

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
      <figure className="lesson-figure">
        <div className="image-placeholder">
          <p>IMAGE NEEDED: Photo of a modern railway control centre/control room showing operators at workstations with large display screens showing train positions and network status (a signalling control centre or Network Rail ROC).</p>
        </div>
        <figcaption>A railway control centre — where operators monitor train movements, manage disruptions, and coordinate real-time responses across the network.</figcaption>
      </figure>

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

export const quiz: QuizQuestion[] = [
  { text: 'What is "delay attribution" and why does it matter?', options: ['Assigning blame to passengers who delay trains by holding doors', 'The process of formally identifying the cause of each delay minute and assigning it to the responsible party (infrastructure manager, operator, or external), which drives contractual penalties and improvement targets', 'A method of predicting future delays using weather data', 'Recording delays only when they exceed 30 minutes'], correct: 1, explanation: 'Every delay of 3+ minutes is investigated and attributed to a cause code and responsible party. This matters because it determines who pays performance penalties, drives targeted investment (fix the biggest delay causes first), and provides the evidence base for industry improvement plans. It is analogous to post-incident root-cause analysis in software reliability engineering.' },
  { text: 'What did the PPM (Public Performance Measure) metric measure?', options: ['The percentage of trains arriving at all stops on time', 'The percentage of trains arriving at their final destination within a threshold (5 minutes for commuter, 10 for long-distance) AND not cancelled — combining punctuality and reliability into one figure', 'The average speed of all trains across the network', 'The number of trains running per day compared to the timetable'], correct: 1, explanation: 'PPM combined punctuality (arriving within threshold) and reliability (not cancelled) into a single percentage. A train had to both run and arrive on time to count. This single metric, while useful for public communication, could mask issues — for example, a service arriving 4 min 59 sec late counted as "on time" while a 5 min 01 sec arrival did not.' },
  { text: 'What is "recovery time" (or engineering allowance) in a timetable?', options: ['Time allocated for trains to be repaired after a breakdown', 'Extra minutes deliberately built into the schedule beyond the pure technical running time, allowing trains to absorb minor delays and return to their timetabled path', 'The time between the last train at night and the first train in the morning', 'Time reserved for crew meal breaks during a journey'], correct: 1, explanation: 'Recovery time is slack added to the timetable so that a train running slightly late can catch up before its next key timing point. Too little recovery time makes the timetable fragile (any perturbation cascades); too much wastes capacity and extends journey times. Balancing resilience against efficiency is a core timetabling trade-off.' },
  { text: 'How does effective incident management limit the impact of disruption?', options: ['By preventing all incidents from occurring in the first place', 'By having pre-planned contingency timetables, clear escalation procedures, and rapid coordination between control centres to restore normal service quickly rather than letting degradation spread', 'By cancelling all trains until the incident is fully resolved', 'By automatically rerouting all trains via GPS'], correct: 1, explanation: 'Good incident management uses pre-planned contingency plans (degraded-mode timetables, predetermined diversionary routes), clear decision-making authority, and rapid cross-industry communication. The goal is to contain disruption to the affected area and restore the plan progressively, rather than allowing a local problem to cascade across the network — much like incident response runbooks in site reliability engineering.' },
];
