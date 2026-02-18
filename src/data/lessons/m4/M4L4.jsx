import React from 'react';
import { Callout } from '../../components/Callout';
import { Connections } from '../../components/Connections';

export default function M4L4({ goTo }) {
  return (
    <>
      <h3>Point Machines</h3>
      <p>
        A <strong>point machine</strong> is the electromechanical device that moves switch
        blades between their normal and reverse positions. Key types:
      </p>
      <ul>
        <li>
          <strong>Clamp lock (e.g., HW 2000, Alstom/Clamp Lock):</strong> An electric motor
          drives the blades, and a separate clamp mechanism locks them in position and provides
          detection. The clamp must be fully engaged before the interlocking will accept that
          the points are "detected and locked." The clamp lock provides both locking force and
          detection in a single mechanism — if the clamp cannot fully engage (e.g., an
          obstruction between the blade and stock rail), detection is not achieved and the
          signal stays at red.
        </li>
        <li>
          <strong>HW (Hydraulic / Westinghouse) types (e.g., M63, Hy-Drive):</strong> Use
          hydraulic power for the throw and a mechanical locking mechanism. Capable of moving
          high-speed turnouts with very long switch blades (up to 40 metres on high-speed
          lines). The hydraulic system provides smooth, controlled movement that is less likely
          to damage the switch blades than a violent electric throw.
        </li>
        <li>
          <strong>In-bearer point machines (e.g., Vossloh Cogifer CEVA, Alstom MET):</strong>
          Mounted within the sleeper/bearer, minimising the lineside footprint. Particularly
          suited to slab track and tunnel installations where space adjacent to the track
          is extremely limited.
        </li>
        <li>
          <strong>Powered stretcher bars:</strong> Instead of a single point machine at the
          toe, multiple drive units along the length of the switch ensure that long, flexible
          switch blades are held firmly against the stock rail along their entire length. Used
          on high-speed turnouts where a single point of drive cannot guarantee blade-to-rail
          contact over the full switch length.
        </li>
      </ul>

      <h3>Detection and Proving</h3>
      <p>
        It is not sufficient to simply command the points to move — the system must
        <strong> detect</strong> that they have actually reached the commanded position and are
        properly secured. Detection circuits (mechanical contacts or electronic sensors) at
        both the toe and heel of the switch blades confirm position. If detection is not
        obtained within a timeout (typically 7–10 seconds), a "points failure" is declared and
        the interlocking holds all relevant signals at danger.
      </p>
      <p>
        The detection system must confirm two conditions: that the <strong>operating blade</strong>
        is firmly against the stock rail (the "closed" blade), and that the <strong>non-operating
        blade</strong> has moved sufficiently far from its stock rail (the "open" blade) to
        allow a wheel flange to pass safely. The required gap on the open side is typically
        100–115 mm. If the open blade is not fully clear, a flange could strike it and cause
        a derailment. The detection tolerances are measured in single-digit millimetres — this
        is precision engineering in a lineside environment exposed to weather, vibration, and
        contamination.
      </p>

      <h3>Points Heating</h3>
      <p>
        In cold weather, snow and ice can accumulate between the switch blade and the stock
        rail, preventing the blade from closing properly. <strong>Points heating</strong>
        systems combat this by warming the switch area. Technologies include:
      </p>
      <ul>
        <li><strong>Electric trace heating:</strong> Resistance heating elements installed along the stock rail and switch blade. Thermostatically controlled, activating when temperature drops below a threshold (typically 4°C) and moisture is detected.</li>
        <li><strong>Gas heating:</strong> Propane burners beneath the switch blades. More powerful than electric but requires gas supply infrastructure and is a fire risk near vegetation.</li>
        <li><strong>Geothermal:</strong> Some systems circulate warm water from underground heat exchangers through pipes beneath the track — a sustainable solution but high capital cost.</li>
      </ul>
      <p>
        Points heating is controlled by SCADA systems that monitor temperature and switch
        health remotely, activating heating proactively before conditions become hazardous.
        On the UK network, points heating failures during winter are one of the most common
        causes of disruption.
      </p>

      <h3>Route Setting Sequence</h3>
      <p>
        When a signaller (or an automated system) requests a route, the interlocking executes
        a rigorous five-step sequence:
      </p>
      <ol>
        <li><strong>Verify no conflict:</strong> Check that no conflicting route is currently set or locked. Check the route locking table for clashes.</li>
        <li><strong>Command points:</strong> Send movement commands to all points in the route that are not already in the required position.</li>
        <li><strong>Detect and lock:</strong> Wait for all points to report detection in the correct position. Lock them so they cannot be moved by another route request.</li>
        <li><strong>Check track clear:</strong> Verify that all track sections in the route (and the overlap beyond the destination signal) are unoccupied.</li>
        <li><strong>Clear signal:</strong> Only after all preceding steps are satisfied, the entrance signal is released to display a proceed aspect.</li>
      </ol>
      <p>
        The entire sequence typically takes 5–15 seconds, depending on how many points need
        to move and their travel time. On a busy junction where routes are set and released
        constantly, this cycle repeats dozens of times per hour. <strong>Automatic Route
        Setting (ARS)</strong> systems automate this process by reading the timetable and
        setting routes at the optimal time without signaller intervention, freeing the
        signaller to focus on disruption management.
      </p>

      <h3>Route Release and Approach Locking</h3>
      <p>
        After a train has traversed a route, the sections are released progressively:
      </p>
      <ul>
        <li><strong>Sequential release:</strong> Each track section is released as the train's tail clears it and a timer expires (ensuring a following train cannot immediately enter).</li>
        <li><strong>Sectional release:</strong> Similar but allows earlier release of sections behind the train, improving capacity at busy junctions. Points are released as soon as the train clears them, not waiting for the entire route to be released.</li>
      </ul>
      <p>
        <strong>Approach locking</strong> is a critical safety feature. Once a signal has
        cleared and a train is approaching, the route cannot be cancelled immediately — doing
        so could cause the train to enter a danger area at speed. Instead, the signal is
        returned to red and an approach release timer starts (typically 120 seconds on plain
        line, longer on high-speed approaches). Only after the timer expires (or the train has
        been proved stopped) can the route be released and the points freed for another route.
        This ensures that a signal is never pulled back to red without adequate protection
        for an approaching train.
      </p>

      <h3>Signal Overlaps</h3>
      <p>
        Beyond every stop signal, an <strong>overlap</strong> is provided — an additional
        length of track (typically 180 m, but up to 370 m or more on high-speed routes) that
        must be clear and locked before the signal can show a proceed aspect. The overlap
        provides protection in case a driver misjudges their braking and overruns the signal.
      </p>
      <p>
        Overlap design involves trade-offs. A longer overlap provides greater safety margin
        but "sterilises" more track — the overlap track sections cannot be used by conflicting
        routes, reducing junction capacity. <strong>Swinging overlaps</strong> allow the
        overlap to be set in different directions depending on which route is next required,
        improving flexibility. Some modern interlockings use <strong>approach-release
        overlaps</strong> that shorten or release the overlap after a defined time, freeing
        the track for other movements once the approaching train has had sufficient time to
        stop.
      </p>

      <h3>Level Crossings</h3>
      <p>
        Where roads cross railways at grade, <strong>level crossings</strong> are provided.
        Each type represents a different balance of safety, cost, and road-user delay:
      </p>
      <ul>
        <li><strong>AHB (Automatic Half Barrier):</strong> Barriers close automatically when a train approaches, covering the approach (left) side only. Road users must obey flashing red lights and not weave around barriers. Triggered by traction on approach track circuits. Minimum road closure time (MRT) is a key design parameter — too short and barriers don't close in time; too long and road users become frustrated and may attempt to cross.</li>
        <li><strong>AOCL (Automatic Open Crossing, Locally Monitored):</strong> Warning lights only, no barriers. The driver monitors the crossing and checks it is clear before passing over. Used at low-traffic crossings on low-speed lines.</li>
        <li><strong>MCB (Manually Controlled Barrier):</strong> Signaller-operated full barriers with CCTV monitoring. The signaller closes the barriers, observes the crossing on CCTV to confirm it is clear, then clears the signal. Higher safety, but road closure time depends on signaller workload and observation time.</li>
        <li><strong>MCB-OD (MCB with Obstacle Detection):</strong> Full barriers with radar-based obstacle detection that scans the crossing area and alerts the signaller if anything remains between the barriers. Provides an additional safety layer beyond CCTV observation.</li>
        <li><strong>UWC (User Worked Crossing):</strong> A gate that the user (farmer, pedestrian) opens and closes. Relies on the user checking for trains. Found on rural routes. Being progressively closed or upgraded.</li>
        <li><strong>Footpath crossings:</strong> Pedestrian-only crossings with miniature warning lights (MWL) or, on quieter lines, simply a "Stop, Look, Listen" sign. Represent a significant safety concern, particularly at locations near schools or with elderly users.</li>
      </ul>

      <h3>Level Crossing Risk Assessment</h3>
      <p>
        Level crossings are among the highest-risk locations on the railway. In the UK,
        Network Rail uses the <strong>All Level Crossing Risk Model (ALCRM)</strong> to assess
        and compare risk across all crossings on the network. The model combines factors
        including road and rail traffic volumes, train speed, sight lines, crossing type,
        historical incident data, and user behaviour patterns to produce a risk score for
        each crossing. This score drives prioritisation of investment in upgrades, closures,
        and alternative provision (bridges or underpasses).
      </p>
      <p>
        The long-term strategy is to <strong>reduce the number of level crossings</strong>
        through closure (where alternative routes exist) or replacement with grade-separated
        crossings. However, with over 6,000 level crossings in the UK alone, and each closure
        or grade separation costing millions of pounds, this is a generational programme.
      </p>

      <h3>The Role of the Signaller</h3>
      <p>
        The signaller (dispatcher in US terminology) is the human operator who sets routes,
        manages conflicts, responds to incidents, and maintains the safe flow of traffic.
        Even with high levels of automation, the signaller remains the decision-maker for
        abnormal situations — perturbations, failures, emergencies, and possessions.
      </p>
      <p>
        In the era of Automatic Route Setting (ARS), the signaller's role has shifted from
        routine route-setting (which the computer handles far more consistently and tirelessly)
        to <strong>exception management</strong>. When a service is cancelled, a train fails,
        a possession overruns, or an incident occurs, the signaller must intervene to replan
        the service, prioritise movements, and coordinate with control room staff and train
        operators. This requires a deep understanding of the railway infrastructure, the
        timetable, and the operational rules — and the ability to make rapid decisions under
        pressure with incomplete information. Signaller training takes approximately 12–18
        months and is considered one of the most demanding roles on the railway.
      </p>

      <Callout type="analogy">
        Route setting is a <strong>database transaction</strong>. It is atomic (all five steps
        succeed or the route is not set), consistent (the interlocking always transitions from
        one safe state to another), isolated (conflicting routes cannot be set simultaneously),
        and durable (once set, the route persists until properly released). If any step fails
        — points don't detect, track isn't clear, a conflict exists — the entire transaction
        rolls back and the signal stays at red. This is ACID compliance enforced by hardware
        and formal logic, with human lives depending on its correctness. The signaller's role
        has evolved from "manually executing transactions" to "DBA managing the cluster" — they
        monitor the automated system, intervene when it cannot cope, and handle the exceptions
        that the algorithms cannot resolve.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm4-l2', label: 'Interlocking & Train Detection', desc: 'The interlocking that executes the route-setting logic.' },
        { target: 'm1-l3', label: 'Switches & Crossings', desc: 'The physical track components that point machines operate.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'The signals controlled by route setting.' },
        { target: 'm7-l2', label: 'SCADA & Remote Monitoring', desc: 'Points heating and crossing equipment are monitored via SCADA.' },
      ]} />
    </>
  );
}

export const quiz = [
  { text: 'What is the correct sequence for setting a signalled route?', options: ['Clear signal, then move points, then check route', 'Move points, verify position, check route clear, then clear signal', 'Check route, clear signal, then move points', 'No fixed sequence'], correct: 1, explanation: 'The strict sequence: (1) verify no conflict, (2) move points, (3) detect points locked, (4) verify route clear, (5) clear signal.' },
  { text: 'What is a "signal overlap"?', options: ['Two signals showing same aspect', 'A safe distance beyond a red signal kept clear in case of overrun', 'A redundant signal', 'Distance between signals on same post'], correct: 1, explanation: 'The overlap keeps track beyond a red signal clear and locked, providing a safety margin if a driver fails to stop exactly.' },
  { text: 'What type of level crossing uses automatic barriers triggered by approaching trains?', options: ['Manually controlled (MCB)', 'Automatic half-barrier (AHB)', 'User-worked (UWC)', 'Occupation crossing'], correct: 1, explanation: 'AHB crossings use treadles or track circuits to detect trains and lower barriers automatically. Barriers cover only the approach side.' },
];
