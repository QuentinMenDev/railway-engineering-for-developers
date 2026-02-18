import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M8L2({ goTo }) {
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
