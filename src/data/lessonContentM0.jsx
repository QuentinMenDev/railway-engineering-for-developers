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

// ─── Module 0: Foundations ────────────────────────────────────────────

function M0L1({ goTo }) {
  return (
    <>
      <h3>The Physics of Steel on Steel</h3>
      <p>
        Railways work because of a single, elegant physical fact: a steel wheel rolling on a
        steel rail produces extraordinarily low friction. The rolling resistance coefficient is
        just <strong>0.001 to 0.003</strong> (0.1–0.3%), compared with 0.01–0.02 (1–2%) for
        rubber tyres on asphalt. This order-of-magnitude advantage means a single locomotive
        can haul a hundred wagons — something no road vehicle could dream of.
      </p>
      <p>
        This efficiency translates directly into energy consumption. Rail freight uses roughly
        <strong>5–10 times less energy per tonne-kilometre</strong> than road haulage. For
        passenger transport, rail is 3–5 times more efficient than private cars and dramatically
        better than domestic aviation for comparable distances.
      </p>

      <h3>The Adhesion Trade-Off</h3>
      <p>
        Low rolling resistance comes at a cost: the coefficient of friction between steel wheel
        and steel rail is only <strong>0.15–0.35</strong>, depending on conditions. On a wet,
        leaf-contaminated autumn rail, it can plummet to 0.05. This places hard limits on
        what trains can do:
      </p>
      <ul>
        <li><strong>Gradient limits:</strong> Mainline railways are typically limited to 1–2.5% gradients. High-speed lines seldom exceed 3.5%. Anything steeper requires rack railways or cable haulage.</li>
        <li><strong>Braking distance:</strong> A train travelling at 200 km/h needs approximately <strong>3 km to stop</strong> — versus around 150 m for a car at the same speed. This single fact drives the entire signalling discipline.</li>
        <li><strong>Traction limits:</strong> Locomotives can only apply as much tractive effort as adhesion allows before wheels spin. Modern traction control systems manage this continuously.</li>
      </ul>

      <Callout type="analogy">
        Think of adhesion as an <strong>API rate limit</strong>. You can push data through the
        connection very efficiently (low rolling resistance), but there is a hard ceiling on how
        much force you can apply at any instant (the adhesion limit). Exceed the rate limit and
        everything degrades — wheels spin, braking fails, and the system enters an unstable state.
        The entire railway system is engineered around this constraint, just as a well-designed
        application is architected around its rate limits.
      </Callout>

      <h3>Continuously Welded Rail (CWR)</h3>
      <p>
        Steel expands and contracts with temperature. A rail that is 1 km long will change
        length by roughly 11.5 mm for every 1°C change in temperature. In jointed track (with
        gaps every 18–20 m), this is accommodated by expansion joints. But joints are noisy,
        cause wear, and limit speed.
      </p>
      <p>
        <strong>CWR</strong> eliminates joints by welding rails into continuous strings hundreds
        of metres (or kilometres) long. The rail is laid at a <em>stress-free temperature</em>
        (typically 21–27°C in temperate climates). Below this temperature, the rail is in
        tension — risking fracture. Above it, the rail is in compression — risking buckling.
        Managing this thermal stress is one of the key maintenance challenges on any railway.
      </p>

      <h3>Why This Matters for Every Other Discipline</h3>
      <p>
        Every subsystem in railway engineering exists because of these fundamental physics.
        Signalling exists because trains cannot stop quickly. Track geometry is constrained
        because adhesion limits the forces you can apply. Electrification voltage choices are
        influenced by the energy efficiency advantage that makes rail worthwhile. Understanding
        these foundations will make every subsequent lesson click into place.
      </p>

      <Connections goTo={goTo} items={[
        { target: 'm1-l1', label: 'Track Structure', desc: 'How the physical layers are built to exploit low rolling resistance.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'How gradient and curvature limits flow from adhesion constraints.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Why signalling exists — braking distance demands advance warning.' },
      ]} />
    </>
  );
}

function M0L2({ goTo }) {
  return (
    <>
      <h3>A Railway as a System of Systems</h3>
      <p>
        A railway is not a single thing — it is eight interlocking subsystems, each a deep
        engineering discipline in its own right. No single team owns the whole railway;
        understanding the boundaries, interfaces, and responsibilities between subsystems is
        essential for anyone working in the industry.
      </p>

      <h3>The Eight Subsystems</h3>
      <ol>
        <li>
          <strong>Track (Permanent Way)</strong> — The rails, sleepers, ballast, and fastenings
          that trains run on. Owned and maintained by the infrastructure manager (e.g. Network
          Rail in the UK, DB Netz in Germany). Example: UIC 60 rail on concrete sleepers, the
          workhorse of European mainlines.
        </li>
        <li>
          <strong>Civil Engineering &amp; Geotechnics</strong> — The earthworks beneath the
          track: cuttings, embankments, drainage, and ground stabilisation. Often the oldest
          parts of the railway (Victorian-era in the UK). Example: the embankments of the
          London–Birmingham mainline, built in the 1830s and still in daily use.
        </li>
        <li>
          <strong>Structures</strong> — Bridges, tunnels, retaining walls, and stations. The UK
          alone has over 30,000 bridges and 650 tunnels. Example: the Forth Bridge, an iconic
          cantilever structure carrying rail traffic since 1890.
        </li>
        <li>
          <strong>Signalling</strong> — The systems that keep trains safely separated: signals,
          interlocking, train detection, and train protection. Safety-critical (SIL 4). Example:
          the Solid State Interlocking (SSI) controlling a major junction.
        </li>
        <li>
          <strong>Electrification</strong> — The power supply infrastructure: substations,
          overhead line equipment (OLE / catenary), third rail, or conductor rail. Example:
          25 kV AC overhead electrification on the West Coast Main Line.
        </li>
        <li>
          <strong>Rolling Stock</strong> — The trains themselves: locomotives, coaches, multiple
          units, freight wagons. Owned by train operating companies (TOCs) or leasing companies
          (ROSCOs). Example: a Class 800 bi-mode intercity train.
        </li>
        <li>
          <strong>Telecommunications</strong> — The communications backbone: fibre optic
          networks, GSM-R radio, SCADA, CCTV, and passenger information systems. Example:
          the Fixed Telecom Network (FTN) that carries all operational data.
        </li>
        <li>
          <strong>Operations &amp; Timetabling</strong> — How trains are scheduled, dispatched,
          and managed in real-time. Covers timetable planning, possession planning, performance
          analysis, and incident management. Example: the integrated timetable planning process
          for a major timetable change.
        </li>
      </ol>

      <h3>Infrastructure Manager vs Train Operating Company</h3>
      <p>
        Most modern railways separate the <strong>infrastructure manager</strong> (who owns and
        maintains track, signalling, structures, and electrification) from the <strong>train
        operating companies</strong> (who run trains and serve passengers or freight customers).
        This separation — mandated by EU directives in Europe — creates clear interfaces but
        also introduces coordination challenges, particularly around timetabling and access.
      </p>

      <Callout type="analogy">
        Think of the eight subsystems as <strong>microservices with bounded contexts</strong>.
        Each subsystem has its own domain, its own experts, and its own lifecycle. The most
        dangerous bugs are always at the <em>interfaces</em> between services — where one
        team's assumptions clash with another's. A signalling upgrade that doesn't account for
        a civil speed restriction, or an electrification project that doesn't consider bridge
        clearances, is the railway equivalent of an API contract violation.
      </Callout>

      <Connections goTo={goTo} items={[
        { target: 'm0-l3', label: "Developer's Mental Model", desc: 'Map these eight subsystems to software equivalents.' },
        { target: 'm1-l1', label: 'Track Structure', desc: 'Deep dive into Subsystem #1.' },
        { target: 'm4-l1', label: 'Block System & Signals', desc: 'Deep dive into Subsystem #4.' },
      ]} />
    </>
  );
}

function M0L3({ goTo }) {
  return (
    <>
      <h3>Mapping Software to Railways</h3>
      <p>
        If you come from a software engineering background, you already have powerful mental
        models. The trick is mapping them correctly. Here is a reference table you can return
        to throughout this course:
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>Software Concept</th><th>Railway Equivalent</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr><td>Infrastructure / IaC</td><td>Earthworks &amp; civil</td><td>The foundation everything runs on; hard to change</td></tr>
            <tr><td>Network / transport</td><td>Track</td><td>Physical medium for movement of data/trains</td></tr>
            <tr><td>Protocol / flow control</td><td>Signalling</td><td>Rules that prevent collisions and manage capacity</td></tr>
            <tr><td>Application logic</td><td>Operations &amp; timetabling</td><td>What actually gets done; the business value</td></tr>
            <tr><td>API contracts / schemas</td><td>Loading gauge</td><td>Interface specification that must match on both sides</td></tr>
            <tr><td>Monitoring / observability</td><td>Telecoms &amp; SCADA</td><td>Knowing what is happening in real-time</td></tr>
            <tr><td>Hardware / compute</td><td>Rolling stock</td><td>The physical assets that do the work</td></tr>
            <tr><td>Power supply / electricity</td><td>Electrification</td><td>The energy source that makes everything move</td></tr>
          </tbody>
        </table>
      </div>

      <h3>The OSI Model Analogy</h3>
      <p>
        The OSI networking model maps remarkably well to railway engineering layers. The
        physical layer (Layer 1) is the rail and track bed. The data link layer (Layer 2) is
        the train detection system — track circuits and axle counters that detect presence.
        The network layer (Layer 3) is the interlocking and route-setting logic. The transport
        layer (Layer 4) is the block system ensuring safe spacing. And the application layers
        (5–7) are the timetable, operational rules, and passenger information services.
      </p>

      <h3>Gauge as Interface Specification</h3>
      <p>
        Track gauge — the distance between the inner faces of the rails — is the railway
        world's most fundamental API contract. Standard gauge is <strong>1,435 mm</strong>,
        used by roughly 60% of the world's railways. But India uses 1,676 mm, Russia and
        Finland use 1,520 mm, and many countries have metre-gauge or cape-gauge (1,067 mm)
        networks. A train built for one gauge physically cannot run on another.
      </p>

      <Callout type="analogy">
        Gauge standardisation is <strong>dependency injection</strong>. When George Stephenson's
        4 ft 8½ in gauge won the 19th-century "gauge war" against Brunel's 7 ft broad gauge,
        it was like the industry agreeing on a single interface. Every component — wheels,
        track, points, maintenance equipment — could be built to one specification and swapped
        freely. Brunel's broad gauge was arguably technically superior, but the network effects
        of standardisation won. This is the same dynamic that plays out with USB, HTTP, or any
        dominant API standard.
      </Callout>

      <h3>Recommended Resources</h3>
      <ul>
        <li><strong>Books:</strong> "The Railway: British Track Since 1804" (Lewis), "Railway Engineering" (Mundrey), "Modern Railway Track" (Esveld)</li>
        <li><strong>YouTube:</strong> Geoff Marshall, Jago Hazzard, The Tim Traveller, Gareth Dennis</li>
        <li><strong>Games &amp; simulations:</strong> OpenTTD, Train Simulator, SimSig (free signalling simulator used in industry training)</li>
        <li><strong>Standards bodies:</strong> RSSB (UK), ERA (EU), UIC (international)</li>
      </ul>

      <Connections goTo={goTo} items={[
        { target: 'm0-l2', label: 'The Eight Subsystems', desc: 'The subsystem map this mental model organises.' },
        { target: 'm3-l3', label: 'Stations & Clearances', desc: 'Loading gauge as API schema in detail.' },
        { target: 'm1-l2', label: 'Track Geometry', desc: 'Gauge specification explored in depth.' },
      ]} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────

export default function getM0Content(lessonId, goTo) {
  switch (lessonId) {
    case 'm0-l1': return <M0L1 goTo={goTo} />;
    case 'm0-l2': return <M0L2 goTo={goTo} />;
    case 'm0-l3': return <M0L3 goTo={goTo} />;
    default: return null;
  }
}
