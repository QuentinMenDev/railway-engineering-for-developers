export default function IndexPage({ goTo }) {
  return (
    <div className="page-inner page-enter">
      <div className="hero">
        <h1>Railway Engineering</h1>
        <p className="tagline">A comprehensive course connecting every discipline — designed for a fullstack developer with a passion for trains.</p>
        <div className="meta">
          <span>📐 31 Lessons across 10 Modules</span>
          <span>⏱ 60–80 hours</span>
          <span>🔗 Fully cross-referenced</span>
        </div>
      </div>

      <p>This course is organized into <strong>10 modules</strong> (with 31 lessons total) covering every railway engineering discipline. Each lesson includes expanded content, developer analogies, and a knowledge-check quiz.</p>
      <p>Think of it like a software architecture: each discipline is a service with its own responsibilities, but they all communicate through shared interfaces and constraints.</p>

      <div className="section-label">Modules</div>
      <div className="module-cards">
        {[
          { num: '0', id: 'm0-l1', title: 'Foundations — The Railway as a System', desc: '3 lessons: Physics, subsystems, and the developer\'s mental model' },
          { num: '1', id: 'm1-l1', title: 'Permanent Way (Track Engineering)', desc: '3 lessons: Track structure, geometry, switches & crossings' },
          { num: '2', id: 'm2-l1', title: 'Civil & Geotechnical Engineering', desc: '3 lessons: Ground investigation, earthworks, drainage' },
          { num: '3', id: 'm3-l1', title: 'Structures', desc: '3 lessons: Bridges, tunnels, stations & clearances' },
          { num: '4', id: 'm4-l1', title: 'Signalling & Train Control', desc: '4 lessons: Block systems, interlocking, ETCS, operations — the developer\'s favourite' },
          { num: '5', id: 'm5-l1', title: 'Electrification & Power Supply', desc: '3 lessons: Traction power, overhead line design, power supply & protection' },
          { num: '6', id: 'm6-l1', title: 'Rolling Stock', desc: '3 lessons: Vehicle types, traction & braking, wheel-rail interface & gauging' },
          { num: '7', id: 'm7-l1', title: 'Telecommunications & Control Systems', desc: '3 lessons: Radio & GSM-R, fibre & SCADA, passenger info & control centres' },
          { num: '8', id: 'm8-l1', title: 'Operations, Timetabling & Integration', desc: '3 lessons: Timetabling, capacity & possessions, performance & delays' },
          { num: '9', id: 'm9-l1', title: 'Capstone — How It All Fits Together', desc: '3 lessons: Project lifecycle, key interfaces, systems engineering' },
        ].map(m => (
          <div key={m.id} className="module-card" onClick={() => goTo(m.id)}>
            <span className="card-num">{m.num}</span>
            <div className="card-content">
              <div className="card-title">{m.title}</div>
              <div className="card-desc">{m.desc}</div>
            </div>
            <span className="card-arrow">→</span>
          </div>
        ))}
      </div>

      <h3>The Developer's Mental Model</h3>
      <table>
        <thead><tr><th>Software Concept</th><th>Railway Equivalent</th></tr></thead>
        <tbody>
          <tr><td>Infrastructure / bare metal</td><td>Geotechnical & civil earthworks</td></tr>
          <tr><td>Network / physical layer</td><td>Track (permanent way)</td></tr>
          <tr><td>Protocol / transport layer</td><td>Signalling rules and interlocking</td></tr>
          <tr><td>Application logic</td><td>Train operations & timetabling</td></tr>
          <tr><td>API contracts</td><td>Gauge, loading gauge, signalling interfaces</td></tr>
          <tr><td>Monitoring & observability</td><td>Telecommunications & SCADA</td></tr>
          <tr><td>Hardware</td><td>Rolling stock</td></tr>
          <tr><td>Power supply</td><td>Electrification</td></tr>
        </tbody>
      </table>

      <h3>Recommended Learning Path</h3>
      <div className="timeline">
        {[
          { week: 'Weeks 1–2', links: [['m0-l1', 'Foundations'], ['m1-l1', 'Track']], text: ' — visit a railway and observe track structure.' },
          { week: 'Weeks 3–4', links: [['m2-l1', 'Civil'], ['m3-l1', 'Structures']], text: ' — focus on how the ground constrains track design.' },
          { week: 'Weeks 5–7', links: [['m4-l1', 'Signalling']], text: ' in depth — the richest module for a developer. Try a signalling sim.' },
          { week: 'Weeks 8–9', links: [['m5-l1', 'Electrification'], ['m6-l1', 'Rolling Stock']], text: ' — focus on power, vehicle, and track interfaces.' },
          { week: 'Weeks 10–11', links: [['m7-l1', 'Telecoms'], ['m8-l1', 'Operations']], text: ' — explore real-time train data and timetabling.' },
          { week: 'Week 12', links: [['m9-l1', 'Capstone']], text: ' — review all connections. If you can explain the whole system, you\'ve understood it.' },
        ].map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-week">{item.week}</div>
            <div className="timeline-desc">
              {item.links.map(([id, label], j) => (
                <span key={id}>
                  {j > 0 && ' and '}
                  <span className="connection-link" onClick={() => goTo(id)}>{label}</span>
                </span>
              ))}
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div className="page-nav">
        <span></span>
        <div className="page-nav-btn next" onClick={() => goTo('m0-l1')}>Start: Foundations →</div>
      </div>
    </div>
  );
}
