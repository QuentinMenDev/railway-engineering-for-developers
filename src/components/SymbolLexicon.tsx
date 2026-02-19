import type { GoToFn } from '../types';

interface SymbolEntry {
  name: string;
  desc: string;
  lessonId: string;
  lessonLabel: string;
  svg: React.ReactNode;
}

interface SymbolGroup {
  module: string;
  moduleId: string;
  color: string;
  symbols: SymbolEntry[];
}

export default function SymbolLexicon({ goTo }: { goTo: GoToFn }) {
  const groups: SymbolGroup[] = [
    /* ── Module 0 · Foundations ────────────────────────────── */
    {
      module: 'Foundations',
      moduleId: 'm0',
      color: 'var(--text-dim)',
      symbols: [
        {
          name: 'Rail Cross-Section (I-beam)',
          desc: 'The fundamental rail profile — an I-beam with head (wheel contact), web (vertical), and foot (load distribution). Standard rail: 60 kg/m (CEN60E1).',
          lessonId: 'm0-l1',
          lessonLabel: '0.1 Why Railways Work',
          svg: (
            <svg viewBox="0 0 120 60" style={{ width: '100%', maxWidth: '120px' }}>
              <rect x="25" y="5" width="30" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="35" y="11" width="10" height="26" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="20" y="37" width="40" height="6" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <text x="72" y="12" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">head</text>
              <text x="72" y="28" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">web</text>
              <text x="72" y="44" fill="var(--accent)" fontSize="8" fontFamily="JetBrains Mono, monospace">foot</text>
            </svg>
          ),
        },
        {
          name: 'Standard Gauge (1,435 mm)',
          desc: 'The distance between the inner faces of the two running rails, measured 14 mm below the rail surface. Used on ~60% of world railways.',
          lessonId: 'm0-l3',
          lessonLabel: "0.3 Developer's Mental Model",
          svg: (
            <svg viewBox="0 0 160 50" style={{ width: '100%', maxWidth: '160px' }}>
              {/* Sleeper */}
              <rect x="10" y="28" width="140" height="8" fill="var(--bg-hover)" stroke="var(--border)" strokeWidth="1" rx="1"/>
              {/* Left rail */}
              <rect x="25" y="16" width="12" height="14" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
              {/* Right rail */}
              <rect x="123" y="16" width="12" height="14" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="1"/>
              {/* Dimension arrow */}
              <line x1="37" y1="12" x2="123" y2="12" stroke="var(--accent)" strokeWidth="0.8"/>
              <polygon points="37,12 41,10 41,14" fill="var(--accent)"/>
              <polygon points="123,12 119,10 119,14" fill="var(--accent)"/>
              <text x="80" y="9" fill="var(--accent)" fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle">1,435 mm</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 1 · Permanent Way ─────────────────────────── */
    {
      module: 'Permanent Way',
      moduleId: 'm1',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Track Layer Stack',
          desc: 'The vertical structure supporting trains: rail → sleepers → ballast → sub-ballast → subgrade. Load distributes downward through each layer.',
          lessonId: 'm1-l1',
          lessonLabel: '1.1 Track Structure',
          svg: (
            <svg viewBox="0 0 130 80" style={{ width: '100%', maxWidth: '130px' }}>
              {[
                { y: 4, h: 10, label: 'Rail', fill: 'var(--text-bright)', op: 0.8 },
                { y: 16, h: 10, label: 'Sleeper', fill: 'var(--accent)', op: 0.5 },
                { y: 28, h: 12, label: 'Ballast', fill: 'var(--accent)', op: 0.35 },
                { y: 42, h: 12, label: 'Sub-ball.', fill: 'var(--accent)', op: 0.2 },
                { y: 56, h: 14, label: 'Subgrade', fill: 'var(--text-dim)', op: 0.2 },
              ].map((l, i) => (
                <g key={i}>
                  <rect x="4" y={l.y} width="80" height={l.h} fill={l.fill} opacity={l.op} stroke="var(--text-bright)" strokeWidth="0.5"/>
                  <text x="90" y={l.y + l.h / 2 + 3} fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">{l.label}</text>
                </g>
              ))}
            </svg>
          ),
        },
        {
          name: 'Cant / Superelevation',
          desc: 'The outer rail is raised on curves to counteract centrifugal force. Cant deficiency (D) is the difference between applied cant and equilibrium cant.',
          lessonId: 'm1-l2',
          lessonLabel: '1.2 Track Geometry',
          svg: (
            <svg viewBox="0 0 140 60" style={{ width: '100%', maxWidth: '140px' }}>
              {/* Tilted sleeper */}
              <line x1="20" y1="45" x2="120" y2="30" stroke="var(--text-bright)" strokeWidth="2.5"/>
              {/* Rail marks */}
              <rect x="25" y="38" width="6" height="10" fill="var(--accent)" transform="rotate(-8.5 28 43)"/>
              <rect x="109" y="23" width="6" height="10" fill="var(--accent)" transform="rotate(-8.5 112 28)"/>
              {/* D arrow */}
              <line x1="125" y1="22" x2="125" y2="45" stroke="var(--blue)" strokeWidth="0.8"/>
              <text x="130" y="36" fill="var(--blue)" fontSize="7" fontFamily="JetBrains Mono, monospace">D</text>
              {/* Force arrows */}
              <line x1="70" y1="38" x2="70" y2="20" stroke="var(--accent-secondary)" strokeWidth="0.8"/>
              <polygon points="70,20 67,24 73,24" fill="var(--accent-secondary)"/>
              <text x="72" y="17" fill="var(--accent-secondary)" fontSize="6" fontFamily="JetBrains Mono, monospace">↑gravity</text>
            </svg>
          ),
        },
        {
          name: 'Turnout (Switch & Crossing)',
          desc: 'A track component allowing trains to diverge. Key parts: switch toe (moveable point), closure rails, and crossing (frog) where rails intersect.',
          lessonId: 'm1-l3',
          lessonLabel: '1.3 Switches & Crossings',
          svg: (
            <svg viewBox="0 0 140 60" style={{ width: '100%', maxWidth: '140px' }}>
              {/* Straight route */}
              <line x1="5" y1="30" x2="135" y2="30" stroke="var(--text-bright)" strokeWidth="2"/>
              {/* Diverging route */}
              <line x1="35" y1="30" x2="135" y2="12" stroke="var(--text-bright)" strokeWidth="1.5"/>
              {/* Switch toe dot */}
              <circle cx="35" cy="30" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1"/>
              {/* Crossing mark */}
              <line x1="95" y1="20" x2="105" y2="26" stroke="var(--red)" strokeWidth="1.5"/>
              <line x1="105" y1="20" x2="95" y2="26" stroke="var(--red)" strokeWidth="1.5"/>
              {/* Labels */}
              <text x="35" y="48" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">toe</text>
              <text x="100" y="14" fill="var(--red)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">crossing</text>
            </svg>
          ),
        },
        {
          name: 'Schematic Symbols (Track)',
          desc: 'Standardised schematic drawing symbols used on signalling layouts: plain track, turnout, stop signal, distant signal, track section, buffer stop.',
          lessonId: 'm1-l4',
          lessonLabel: '1.4 Track Representations',
          svg: (
            <svg viewBox="0 0 180 70" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Track line */}
              <line x1="5" y1="10" x2="50" y2="10" stroke="var(--text-bright)" strokeWidth="2"/>
              <text x="55" y="13" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">track</text>
              {/* Turnout fork */}
              <line x1="5" y1="28" x2="35" y2="28" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="20" y1="28" x2="50" y2="18" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <text x="55" y="26" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">turnout</text>
              {/* Stop signal */}
              <line x1="12" y1="42" x2="12" y2="52" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <circle cx="12" cy="38" r="4" fill="var(--red)" stroke="var(--text-bright)" strokeWidth="1"/>
              <text x="55" y="42" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">stop sig.</text>
              {/* Buffer stop */}
              <line x1="5" y1="62" x2="25" y2="62" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="25" y1="56" x2="25" y2="68" stroke="var(--text-bright)" strokeWidth="3"/>
              <text x="55" y="65" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">buffer</text>
              {/* Distant signal */}
              <line x1="120" y1="10" x2="120" y2="20" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <polygon points="120,6 114,12 126,12" fill="var(--accent)" stroke="var(--text-bright)" strokeWidth="0.8"/>
              <text x="133" y="13" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">dist.</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 2 · Civil & Geotechnical ──────────────────── */
    {
      module: 'Civil & Geotechnical',
      moduleId: 'm2',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Borehole Log',
          desc: 'A geological section showing subsurface layers encountered during ground investigation, with depth scale, groundwater level (GWL), and test results.',
          lessonId: 'm2-l1',
          lessonLabel: '2.1 Ground Investigation',
          svg: (
            <svg viewBox="0 0 100 80" style={{ width: '100%', maxWidth: '100px' }}>
              {[
                { y: 5, h: 14, label: 'Topsoil', fill: 'var(--accent-secondary)', op: 0.3 },
                { y: 19, h: 18, label: 'Clay', fill: 'var(--accent)', op: 0.3 },
                { y: 37, h: 18, label: 'Sand', fill: 'var(--accent)', op: 0.15 },
                { y: 55, h: 18, label: 'Rock', fill: 'var(--text-dim)', op: 0.3 },
              ].map((l, i) => (
                <g key={i}>
                  <rect x="20" y={l.y} width="35" height={l.h} fill={l.fill} opacity={l.op} stroke="var(--text-bright)" strokeWidth="0.5"/>
                  <text x="60" y={l.y + l.h / 2 + 3} fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace">{l.label}</text>
                </g>
              ))}
              {/* GWL */}
              <line x1="18" y1="30" x2="57" y2="30" stroke="var(--blue)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="6" y="33" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace">GWL</text>
              {/* Depth scale */}
              <text x="16" y="10" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="end">0m</text>
              <text x="16" y="76" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="end">15m</text>
            </svg>
          ),
        },
        {
          name: 'Cutting & Embankment',
          desc: 'Cutting: excavated below original ground level (OGL). Embankment: fill placed above OGL. Both create the railway formation at required levels.',
          lessonId: 'm2-l2',
          lessonLabel: '2.2 Earthworks',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Cutting */}
              <line x1="5" y1="15" x2="30" y2="35" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="30" y1="35" x2="55" y2="35" stroke="var(--accent)" strokeWidth="1.5"/>
              <line x1="55" y1="35" x2="80" y2="15" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="5" y1="15" x2="80" y2="15" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="3,2"/>
              <text x="42" y="48" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">cutting</text>
              {/* Embankment */}
              <line x1="100" y1="35" x2="120" y2="15" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="120" y1="15" x2="155" y2="15" stroke="var(--accent)" strokeWidth="1.5"/>
              <line x1="155" y1="15" x2="175" y2="35" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="100" y1="35" x2="175" y2="35" stroke="var(--text-dim)" strokeWidth="0.5" strokeDasharray="3,2"/>
              <text x="137" y="48" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">embankment</text>
              <text x="42" y="12" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">OGL</text>
              <text x="137" y="40" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">OGL</text>
            </svg>
          ),
        },
        {
          name: 'Track Drainage',
          desc: 'Water percolates through ballast and is collected by cess drains at trackbed edges. Essential for formation stability and preventing frost heave.',
          lessonId: 'm2-l3',
          lessonLabel: '2.3 Drainage & Stability',
          svg: (
            <svg viewBox="0 0 140 55" style={{ width: '100%', maxWidth: '140px' }}>
              <rect x="10" y="5" width="120" height="8" fill="var(--text-bright)" opacity="0.5" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="70" y="12" fill="var(--bg)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">rail + sleepers</text>
              <rect x="5" y="13" width="130" height="14" fill="var(--accent)" opacity="0.15" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="70" y="23" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ballast</text>
              <rect x="0" y="27" width="140" height="10" fill="var(--text-dim)" opacity="0.15" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="70" y="34" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">formation</text>
              {/* Water arrows */}
              <line x1="40" y1="16" x2="12" y2="38" stroke="var(--blue)" strokeWidth="0.6" strokeDasharray="2,2"/>
              <line x1="100" y1="16" x2="128" y2="38" stroke="var(--blue)" strokeWidth="0.6" strokeDasharray="2,2"/>
              <text x="70" y="48" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">↙ cess drain      cess drain ↘</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 3 · Structures ────────────────────────────── */
    {
      module: 'Structures',
      moduleId: 'm3',
      color: 'var(--blue)',
      symbols: [
        {
          name: 'Bridge Types',
          desc: 'Three principal bridge forms: arch (compression), beam (bending), and box girder (torsion-resistant hollow section).',
          lessonId: 'm3-l1',
          lessonLabel: '3.1 Bridges',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Arch */}
              <rect x="2" y="12" width="6" height="25" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <rect x="47" y="12" width="6" height="25" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <path d="M 8,28 Q 27,8 47,28" fill="none" stroke="var(--text-bright)" strokeWidth="1.2"/>
              <line x1="0" y1="12" x2="55" y2="12" stroke="var(--text-bright)" strokeWidth="1"/>
              <text x="27" y="48" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Arch</text>
              {/* Beam */}
              <rect x="65" y="12" width="45" height="6" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <polygon points="67,18 72,28 62,28" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <polygon points="108,18 113,28 103,28" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="87" y="48" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Beam</text>
              {/* Box girder */}
              <rect x="125" y="12" width="45" height="18" fill="var(--border)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <rect x="133" y="17" width="29" height="8" fill="var(--bg)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="147" y="48" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Box</text>
            </svg>
          ),
        },
        {
          name: 'Tunnel Cross-Sections',
          desc: 'Bored tunnel: circular profile from TBM. Cut-and-cover: rectangular profile, built in open trench then buried.',
          lessonId: 'm3-l2',
          lessonLabel: '3.2 Tunnels & Retaining Walls',
          svg: (
            <svg viewBox="0 0 150 60" style={{ width: '100%', maxWidth: '150px' }}>
              {/* Bored */}
              <circle cx="35" cy="28" r="22" fill="none" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="15" y1="40" x2="55" y2="40" stroke="var(--accent)" strokeWidth="1"/>
              <text x="35" y="58" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bored (TBM)</text>
              {/* Cut-and-cover */}
              <rect x="80" y="6" width="50" height="44" fill="none" stroke="var(--text-bright)" strokeWidth="1.5" rx="2"/>
              <line x1="82" y1="40" x2="128" y2="40" stroke="var(--accent)" strokeWidth="1"/>
              <text x="105" y="58" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Cut & Cover</text>
            </svg>
          ),
        },
        {
          name: 'Platform Layouts',
          desc: 'Side platform: tracks between platforms. Island platform: platform between tracks. Bay platform: dead-end track within a through station.',
          lessonId: 'm3-l3',
          lessonLabel: '3.3 Stations & Clearances',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Side */}
              <rect x="5" y="5" width="45" height="6" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" strokeWidth="0.5"/>
              <line x1="5" y1="16" x2="50" y2="16" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="5" y1="22" x2="50" y2="22" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="5" y="27" width="45" height="6" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" strokeWidth="0.5"/>
              <text x="27" y="46" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Side</text>
              {/* Island */}
              <line x1="65" y1="8" x2="110" y2="8" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="65" y="14" width="45" height="10" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" strokeWidth="0.5"/>
              <line x1="65" y1="30" x2="110" y2="30" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <text x="87" y="46" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Island</text>
              {/* Bay */}
              <line x1="125" y1="8" x2="175" y2="8" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="125" y="14" width="45" height="6" fill="var(--accent)" opacity="0.3" stroke="var(--accent)" strokeWidth="0.5"/>
              <line x1="125" y1="24" x2="160" y2="24" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="160" y1="21" x2="160" y2="27" stroke="var(--text-bright)" strokeWidth="2.5"/>
              <text x="147" y="46" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bay</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 4 · Signalling & Control ──────────────────── */
    {
      module: 'Signalling & Control',
      moduleId: 'm4',
      color: 'var(--red)',
      symbols: [
        {
          name: 'Absolute Block Section',
          desc: 'Only one train allowed in a block section at a time. Two signals define the section boundary. The foundation of railway safety.',
          lessonId: 'm4-l1',
          lessonLabel: '4.1 Block System & Signals',
          svg: (
            <svg viewBox="0 0 160 50" style={{ width: '100%', maxWidth: '160px' }}>
              <line x1="5" y1="30" x2="155" y2="30" stroke="var(--text-bright)" strokeWidth="2"/>
              {/* Signal A */}
              <line x1="30" y1="30" x2="30" y2="14" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <circle cx="30" cy="10" r="5" fill="var(--red)" stroke="var(--text-bright)" strokeWidth="1"/>
              {/* Signal B */}
              <line x1="130" y1="30" x2="130" y2="14" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <circle cx="130" cy="10" r="5" fill="var(--accent-secondary)" stroke="var(--text-bright)" strokeWidth="1"/>
              {/* Block bracket */}
              <line x1="30" y1="40" x2="130" y2="40" stroke="var(--accent)" strokeWidth="0.8"/>
              <line x1="30" y1="37" x2="30" y2="43" stroke="var(--accent)" strokeWidth="0.8"/>
              <line x1="130" y1="37" x2="130" y2="43" stroke="var(--accent)" strokeWidth="0.8"/>
              <text x="80" y="48" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">block section</text>
            </svg>
          ),
        },
        {
          name: 'Track Circuit',
          desc: 'Train detection using an electrical circuit through the rails. A battery energises a relay; a train axle short-circuits the rails, de-energising the relay.',
          lessonId: 'm4-l2',
          lessonLabel: '4.2 Interlocking & Detection',
          svg: (
            <svg viewBox="0 0 160 50" style={{ width: '100%', maxWidth: '160px' }}>
              {/* Two rails */}
              <line x1="10" y1="15" x2="150" y2="15" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="10" y1="30" x2="150" y2="30" stroke="var(--text-bright)" strokeWidth="1.5"/>
              {/* Battery */}
              <rect x="10" y="18" width="18" height="9" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
              <text x="19" y="25" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">BAT</text>
              {/* Relay */}
              <rect x="132" y="18" width="18" height="9" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
              <text x="141" y="25" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RLY</text>
              {/* Labels */}
              <text x="80" y="10" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">rail 1</text>
              <text x="80" y="42" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">rail 2 · axle shorts circuit</text>
            </svg>
          ),
        },
        {
          name: 'ETCS Level 2',
          desc: 'Digital train control: onboard EVC receives movement authority via GSM-R radio from the Radio Block Centre (RBC). Balises provide position references.',
          lessonId: 'm4-l3',
          lessonLabel: '4.3 ETCS, CBTC & Future',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Train/EVC */}
              <rect x="5" y="5" width="35" height="18" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
              <text x="22" y="17" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EVC</text>
              {/* Radio */}
              <line x1="40" y1="14" x2="65" y2="14" stroke="var(--blue)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="52" y="10" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">radio</text>
              {/* RBC */}
              <rect x="65" y="5" width="35" height="18" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
              <text x="82" y="17" fill="var(--blue)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">RBC</text>
              {/* IXL */}
              <line x1="100" y1="14" x2="120" y2="14" stroke="var(--text-dim)" strokeWidth="0.8"/>
              <rect x="120" y="5" width="30" height="18" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="2"/>
              <text x="135" y="17" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">IXL</text>
              {/* Track + balises */}
              <line x1="5" y1="38" x2="175" y2="38" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <rect x="30" y="35" width="8" height="6" fill="var(--accent)" rx="1"/>
              <rect x="80" y="35" width="8" height="6" fill="var(--accent)" rx="1"/>
              <text x="90" y="50" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">balises</text>
              {/* MA arrow */}
              <line x1="5" y1="46" x2="130" y2="46" stroke="var(--accent-secondary)" strokeWidth="0.6" strokeDasharray="4,2"/>
              <text x="67" y="53" fill="var(--accent-secondary)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">← movement authority →</text>
            </svg>
          ),
        },
        {
          name: 'Point Machine & Level Crossing',
          desc: 'Point machine: electro-mechanical device that moves and locks switch blades. Level crossing: where a road crosses the railway at grade, protected by barriers.',
          lessonId: 'm4-l4',
          lessonLabel: '4.4 Points, Routes & Crossings',
          svg: (
            <svg viewBox="0 0 180 50" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Point machine */}
              <line x1="5" y1="25" x2="75" y2="25" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="25" y1="25" x2="65" y2="10" stroke="var(--text-bright)" strokeWidth="1"/>
              <rect x="30" y="28" width="16" height="12" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
              <text x="38" y="37" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">M</text>
              {/* Level crossing */}
              <line x1="100" y1="25" x2="175" y2="25" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="130" y1="5" x2="130" y2="45" stroke="var(--text-dim)" strokeWidth="1.5"/>
              <line x1="120" y1="15" x2="130" y2="15" stroke="var(--red)" strokeWidth="1.5"/>
              <line x1="130" y1="35" x2="140" y2="35" stroke="var(--red)" strokeWidth="1.5"/>
              <text x="130" y="50" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">LX</text>
              <text x="145" y="10" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">road</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 5 · Electrification & Power ───────────────── */
    {
      module: 'Electrification & Power',
      moduleId: 'm5',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'OLE & Third Rail',
          desc: 'Two traction power delivery methods: overhead line (25 kV AC via pantograph) and third rail (660–750 V DC via collector shoe).',
          lessonId: 'm5-l1',
          lessonLabel: '5.1 Traction Power Systems',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* OLE */}
              <line x1="25" y1="45" x2="25" y2="5" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="15" y1="12" x2="55" y2="12" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="10" y1="45" x2="60" y2="45" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <text x="35" y="35" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">25kV</text>
              <text x="35" y="55" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">OLE</text>
              {/* Third rail */}
              <line x1="100" y1="38" x2="170" y2="38" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="100" y1="45" x2="170" y2="45" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="105" y1="33" x2="165" y2="33" stroke="var(--accent)" strokeWidth="2"/>
              <text x="135" y="28" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">750V DC</text>
              <text x="135" y="55" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Third Rail</text>
            </svg>
          ),
        },
        {
          name: 'Catenary System',
          desc: 'Catenary wire suspended between masts supports the contact wire via droppers. Maintains consistent wire height for pantograph collection.',
          lessonId: 'm5-l2',
          lessonLabel: '5.2 Overhead Line Design',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Masts */}
              <line x1="20" y1="45" x2="20" y2="5" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="160" y1="45" x2="160" y2="5" stroke="var(--text-bright)" strokeWidth="1.5"/>
              {/* Catenary wire */}
              <path d="M 20,8 Q 90,22 160,8" fill="none" stroke="var(--text-dim)" strokeWidth="1"/>
              {/* Contact wire */}
              <line x1="20" y1="35" x2="160" y2="35" stroke="var(--accent)" strokeWidth="1.5"/>
              {/* Droppers */}
              <line x1="60" y1="14" x2="60" y2="35" stroke="var(--text-dim)" strokeWidth="0.5"/>
              <line x1="90" y1="18" x2="90" y2="35" stroke="var(--text-dim)" strokeWidth="0.5"/>
              <line x1="120" y1="14" x2="120" y2="35" stroke="var(--text-dim)" strokeWidth="0.5"/>
              {/* Labels */}
              <text x="90" y="5" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">catenary</text>
              <text x="90" y="44" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">contact wire</text>
              <text x="55" y="28" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">droppers</text>
            </svg>
          ),
        },
        {
          name: 'Traction Power Chain',
          desc: 'Power flows: national grid → feeder station → track sectioning cabin (TSC) → 25 kV overhead line → train.',
          lessonId: 'm5-l3',
          lessonLabel: '5.3 Power Supply & Protection',
          svg: (
            <svg viewBox="0 0 180 30" style={{ width: '100%', maxWidth: '180px' }}>
              {['GRID', 'FEEDER', 'TSC', '25kV', 'TRAIN'].map((label, i) => (
                <g key={i}>
                  <rect x={i * 36 + 2} y="5" width="30" height="16" fill="var(--bg-hover)" stroke={i === 4 ? 'var(--accent)' : 'var(--text-dim)'} strokeWidth="1" rx="2"/>
                  <text x={i * 36 + 17} y="16" fill={i === 4 ? 'var(--accent)' : 'var(--text-dim)'} fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{label}</text>
                  {i < 4 && <text x={i * 36 + 35} y="16" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>}
                </g>
              ))}
            </svg>
          ),
        },
      ],
    },

    /* ── Module 6 · Rolling Stock ─────────────────────────── */
    {
      module: 'Rolling Stock',
      moduleId: 'm6',
      color: 'var(--accent)',
      symbols: [
        {
          name: 'Vehicle Types',
          desc: 'Locomotive: power unit only. EMU: distributed traction, self-propelled. Freight wagon: unpowered, hauled by locomotive.',
          lessonId: 'm6-l1',
          lessonLabel: '6.1 Vehicle Types & Architecture',
          svg: (
            <svg viewBox="0 0 180 45" style={{ width: '100%', maxWidth: '180px' }}>
              {/* Loco */}
              <rect x="5" y="8" width="40" height="16" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
              <circle cx="15" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <circle cx="35" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <text x="25" y="43" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Loco</text>
              {/* EMU */}
              <rect x="65" y="8" width="50" height="16" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
              <circle cx="75" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <circle cx="105" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <line x1="90" y1="8" x2="90" y2="2" stroke="var(--accent)" strokeWidth="1"/>
              <line x1="85" y1="2" x2="95" y2="2" stroke="var(--accent)" strokeWidth="1"/>
              <text x="90" y="43" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">EMU</text>
              {/* Wagon */}
              <rect x="130" y="8" width="40" height="14" fill="var(--bg-hover)" stroke="var(--text-dim)" strokeWidth="1" rx="1"/>
              <circle cx="140" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <circle cx="160" cy="30" r="4" fill="none" stroke="var(--text-bright)" strokeWidth="1"/>
              <text x="150" y="43" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Wagon</text>
            </svg>
          ),
        },
        {
          name: 'Traction Power Flow',
          desc: '25 kV AC → main transformer → inverter (VVVF) → traction motor → wheel. Regenerative braking reverses the flow.',
          lessonId: 'm6-l2',
          lessonLabel: '6.2 Traction, Braking & Dynamics',
          svg: (
            <svg viewBox="0 0 180 30" style={{ width: '100%', maxWidth: '180px' }}>
              {['25kV', 'XFMR', 'INV', 'MOTOR', 'WHEEL'].map((label, i) => (
                <g key={i}>
                  <rect x={i * 36 + 2} y="5" width="30" height="16" fill="var(--bg-hover)" stroke={i === 0 ? 'var(--accent)' : 'var(--text-dim)'} strokeWidth="1" rx="2"/>
                  <text x={i * 36 + 17} y="16" fill={i === 0 ? 'var(--accent)' : 'var(--text-dim)'} fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{label}</text>
                  {i < 4 && <text x={i * 36 + 35} y="16" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>}
                </g>
              ))}
            </svg>
          ),
        },
        {
          name: 'Wheel Profile',
          desc: 'Conical tread (1:20 taper) provides self-centring. The flange prevents derailment. Tread contact patch is ~1 cm².',
          lessonId: 'm6-l3',
          lessonLabel: '6.3 Wheel-Rail Interface',
          svg: (
            <svg viewBox="0 0 120 55" style={{ width: '100%', maxWidth: '120px' }}>
              {/* Rail */}
              <rect x="35" y="38" width="50" height="8" fill="var(--text-dim)" stroke="var(--text-bright)" strokeWidth="0.5"/>
              <text x="60" y="53" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">rail</text>
              {/* Wheel body */}
              <rect x="30" y="14" width="55" height="24" fill="var(--bg-hover)" stroke="var(--text-bright)" strokeWidth="1" rx="2"/>
              {/* Flange */}
              <rect x="22" y="28" width="10" height="12" fill="var(--accent)" opacity="0.5" stroke="var(--accent)" strokeWidth="1" rx="1"/>
              <text x="10" y="36" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace">flange</text>
              {/* Tread label */}
              <text x="60" y="29" fill="var(--text-dim)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">tread 1:20</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 7 · Telecommunications ────────────────────── */
    {
      module: 'Telecommunications',
      moduleId: 'm7',
      color: 'var(--blue)',
      symbols: [
        {
          name: 'GSM-R Network',
          desc: 'Dedicated railway radio: cab radio → base transceiver station (BTS) → base station controller (BSC) → mobile switching centre (MSC) → control centre.',
          lessonId: 'm7-l1',
          lessonLabel: '7.1 Radio & GSM-R',
          svg: (
            <svg viewBox="0 0 180 30" style={{ width: '100%', maxWidth: '180px' }}>
              {['Train', 'BTS', 'BSC', 'MSC', 'Control'].map((label, i) => (
                <g key={i}>
                  <rect x={i * 36 + 2} y="5" width="30" height="16" fill="var(--bg-hover)" stroke={i === 0 ? 'var(--accent)' : 'var(--blue)'} strokeWidth="1" rx="2"/>
                  <text x={i * 36 + 17} y="16" fill={i === 0 ? 'var(--accent)' : 'var(--blue)'} fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{label}</text>
                  {i < 4 && <text x={i * 36 + 35} y="16" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>}
                </g>
              ))}
            </svg>
          ),
        },
        {
          name: 'Fibre Ring Topology',
          desc: 'Resilient ring: traffic can route in either direction. If one link fails, traffic automatically reverses around the ring.',
          lessonId: 'm7-l2',
          lessonLabel: '7.2 Fibre Optic Networks',
          svg: (
            <svg viewBox="0 0 100 70" style={{ width: '100%', maxWidth: '100px' }}>
              {[
                { x: 15, y: 5, label: 'Stn A' },
                { x: 60, y: 5, label: 'Stn B' },
                { x: 60, y: 40, label: 'Stn C' },
                { x: 15, y: 40, label: 'Stn D' },
              ].map((n, i) => (
                <g key={i}>
                  <rect x={n.x} y={n.y} width="28" height="14" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
                  <text x={n.x + 14} y={n.y + 10} fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{n.label}</text>
                </g>
              ))}
              {/* Ring connections */}
              <line x1="43" y1="12" x2="60" y2="12" stroke="var(--accent-secondary)" strokeWidth="1"/>
              <line x1="88" y1="19" x2="88" y2="40" stroke="var(--accent-secondary)" strokeWidth="1"/>
              <line x1="60" y1="47" x2="43" y2="47" stroke="var(--accent-secondary)" strokeWidth="1"/>
              <line x1="15" y1="40" x2="15" y2="19" stroke="var(--accent-secondary)" strokeWidth="1"/>
              <text x="50" y="66" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">resilient ring</text>
            </svg>
          ),
        },
        {
          name: 'PIS Data Flow',
          desc: 'Darwin (real-time data) → CIS server → station displays, PA system, and passenger apps. The passenger information chain.',
          lessonId: 'm7-l3',
          lessonLabel: '7.3 Passenger Information',
          svg: (
            <svg viewBox="0 0 160 45" style={{ width: '100%', maxWidth: '160px' }}>
              <rect x="5" y="12" width="35" height="16" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="1" rx="2"/>
              <text x="22" y="23" fill="var(--blue)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Darwin</text>
              <text x="47" y="22" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>
              <rect x="55" y="12" width="35" height="16" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="1" rx="2"/>
              <text x="72" y="23" fill="var(--accent)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">CIS</text>
              <text x="97" y="15" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>
              <text x="97" y="22" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>
              <text x="97" y="29" fill="var(--text-dim)" fontSize="7" fontFamily="JetBrains Mono, monospace">→</text>
              <text x="110" y="12" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">Displays</text>
              <text x="110" y="22" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">PA</text>
              <text x="110" y="32" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">App</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 8 · Operations ────────────────────────────── */
    {
      module: 'Operations & Timetabling',
      moduleId: 'm8',
      color: 'var(--accent-secondary)',
      symbols: [
        {
          name: 'Time-Distance Diagram',
          desc: 'The fundamental timetable planning tool. Time on X-axis, distance (stations) on Y-axis. Line slope = speed; horizontal = dwell. Where lines cross, trains pass.',
          lessonId: 'm8-l1',
          lessonLabel: '8.1 Timetabling & Scheduling',
          svg: (
            <svg viewBox="0 0 140 65" style={{ width: '100%', maxWidth: '140px' }}>
              <line x1="25" y1="5" x2="25" y2="50" stroke="var(--text-dim)" strokeWidth="0.8"/>
              <line x1="25" y1="50" x2="135" y2="50" stroke="var(--text-dim)" strokeWidth="0.8"/>
              <text x="22" y="14" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="end">A</text>
              <text x="22" y="32" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="end">B</text>
              <text x="22" y="50" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="end">C</text>
              <line x1="25" y1="10" x2="135" y2="10" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,3"/>
              <line x1="25" y1="30" x2="135" y2="30" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,3"/>
              {/* Fast train */}
              <polyline points="35,10 70,30 75,30 120,48" fill="none" stroke="var(--accent)" strokeWidth="1.2"/>
              {/* Stopping train */}
              <polyline points="50,10 80,30 90,30 130,48" fill="none" stroke="var(--blue)" strokeWidth="1.2"/>
              <text x="80" y="60" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">time →</text>
            </svg>
          ),
        },
        {
          name: 'Flat Junction Conflict',
          desc: 'Where routes cross at grade, conflicting movements consume capacity. Each branch train blocks the main line for 2–4 minutes.',
          lessonId: 'm8-l2',
          lessonLabel: '8.2 Capacity & Possessions',
          svg: (
            <svg viewBox="0 0 160 50" style={{ width: '100%', maxWidth: '160px' }}>
              <line x1="5" y1="22" x2="155" y2="22" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="5" y1="30" x2="155" y2="30" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <line x1="75" y1="22" x2="130" y2="5" stroke="var(--text-bright)" strokeWidth="1.5"/>
              <circle cx="78" cy="26" r="8" fill="none" stroke="var(--red)" strokeWidth="1" strokeDasharray="2,2"/>
              <text x="78" y="29" fill="var(--red)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">✕</text>
              <text x="78" y="46" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">conflict point</text>
              <text x="135" y="8" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace">branch</text>
            </svg>
          ),
        },
        {
          name: 'Disruption Response Flow',
          desc: 'Incident triggers a decision: short-turn/cancel, divert/reroute, or bus replacement. All paths lead to recovery and normal service.',
          lessonId: 'm8-l3',
          lessonLabel: '8.3 Performance & Delay',
          svg: (
            <svg viewBox="0 0 180 55" style={{ width: '100%', maxWidth: '180px' }}>
              <rect x="65" y="2" width="50" height="14" fill="var(--red)" opacity="0.2" stroke="var(--red)" strokeWidth="1" rx="2"/>
              <text x="90" y="12" fill="var(--red)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">INCIDENT</text>
              <line x1="90" y1="16" x2="30" y2="26" stroke="var(--text-dim)" strokeWidth="0.6"/>
              <line x1="90" y1="16" x2="90" y2="26" stroke="var(--text-dim)" strokeWidth="0.6"/>
              <line x1="90" y1="16" x2="150" y2="26" stroke="var(--text-dim)" strokeWidth="0.6"/>
              <rect x="5" y="26" width="50" height="12" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="0.8" rx="2"/>
              <text x="30" y="35" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Cancel/Turn</text>
              <rect x="65" y="26" width="50" height="12" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="0.8" rx="2"/>
              <text x="90" y="35" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Divert</text>
              <rect x="125" y="26" width="50" height="12" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="0.8" rx="2"/>
              <text x="150" y="35" fill="var(--accent-secondary)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Bus Repl.</text>
              <text x="90" y="50" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">→ recovery → normal service</text>
            </svg>
          ),
        },
      ],
    },

    /* ── Module 9 · Capstone ──────────────────────────────── */
    {
      module: 'Capstone',
      moduleId: 'm9',
      color: 'var(--accent-secondary)',
      symbols: [
        {
          name: 'GRIP Project Stages',
          desc: '8-stage lifecycle: Output Definition → Feasibility → Option Selection → Single Option → Detail Design → Build → T&C → Close Out.',
          lessonId: 'm9-l1',
          lessonLabel: '9.1 Project Lifecycle',
          svg: (
            <svg viewBox="0 0 180 30" style={{ width: '100%', maxWidth: '180px' }}>
              {[
                { label: '1', c: 'var(--text-dim)' },
                { label: '2', c: 'var(--text-dim)' },
                { label: '3', c: 'var(--blue)' },
                { label: '4', c: 'var(--blue)' },
                { label: '5', c: 'var(--accent)' },
                { label: '6', c: 'var(--accent)' },
                { label: '7', c: 'var(--accent-secondary)' },
                { label: '8', c: 'var(--accent-secondary)' },
              ].map((s, i) => (
                <g key={i}>
                  <rect x={i * 22 + 2} y="5" width="18" height="14" fill="var(--bg-hover)" stroke={s.c} strokeWidth="1" rx="2"/>
                  <text x={i * 22 + 11} y="15" fill={s.c} fontSize="7" fontFamily="JetBrains Mono, monospace" textAnchor="middle" fontWeight="bold">{s.label}</text>
                  {i < 7 && <text x={i * 22 + 22} y="15" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace">›</text>}
                </g>
              ))}
              <text x="90" y="28" fill="var(--text-dim)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">define → design → build → deliver</text>
            </svg>
          ),
        },
        {
          name: 'Interface Matrix',
          desc: 'Disciplines are interconnected: Track ↔ Signalling ↔ E&P ↔ Telecoms ↔ Civils ↔ Structures ↔ Rolling Stock. Failures cluster at interfaces.',
          lessonId: 'm9-l2',
          lessonLabel: '9.2 Key Interfaces',
          svg: (
            <svg viewBox="0 0 120 65" style={{ width: '100%', maxWidth: '120px' }}>
              {[
                { x: 50, y: 3, l: 'Track' },
                { x: 85, y: 18, l: 'Sig' },
                { x: 85, y: 40, l: 'E&P' },
                { x: 50, y: 55, l: 'Tel' },
                { x: 15, y: 40, l: 'Civ' },
                { x: 15, y: 18, l: 'RS' },
              ].map((n, i) => (
                <g key={i}>
                  <circle cx={n.x + 10} cy={n.y + 5} r="9" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="0.8"/>
                  <text x={n.x + 10} y={n.y + 8} fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">{n.l}</text>
                </g>
              ))}
              {/* Key interface lines */}
              <line x1="60" y1="12" x2="95" y2="18" stroke="var(--border-light)" strokeWidth="0.5"/>
              <line x1="95" y1="28" x2="95" y2="40" stroke="var(--border-light)" strokeWidth="0.5"/>
              <line x1="85" y1="50" x2="60" y2="55" stroke="var(--border-light)" strokeWidth="0.5"/>
              <line x1="50" y1="55" x2="25" y2="50" stroke="var(--border-light)" strokeWidth="0.5"/>
              <line x1="25" y1="40" x2="25" y2="28" stroke="var(--border-light)" strokeWidth="0.5"/>
              <line x1="25" y1="18" x2="50" y2="12" stroke="var(--border-light)" strokeWidth="0.5"/>
              {/* Cross-connections */}
              <line x1="60" y1="12" x2="25" y2="40" stroke="var(--red)" strokeWidth="0.4" strokeDasharray="2,2"/>
              <line x1="95" y1="23" x2="25" y2="23" stroke="var(--red)" strokeWidth="0.4" strokeDasharray="2,2"/>
            </svg>
          ),
        },
        {
          name: 'V-Model Lifecycle',
          desc: 'Left: requirements decompose. Bottom: implementation. Right: verification at each level. Horizontal dashed lines show traceability between left and right.',
          lessonId: 'm9-l3',
          lessonLabel: '9.3 Systems Engineering',
          svg: (
            <svg viewBox="0 0 160 60" style={{ width: '100%', maxWidth: '160px' }}>
              {/* Left side */}
              <rect x="2" y="5" width="38" height="12" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="0.8" rx="2"/>
              <text x="21" y="14" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Reqts</text>
              <rect x="20" y="20" width="38" height="12" fill="var(--bg-hover)" stroke="var(--accent)" strokeWidth="0.8" rx="2"/>
              <text x="39" y="29" fill="var(--accent)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Design</text>
              {/* Bottom */}
              <rect x="55" y="38" width="50" height="14" fill="var(--bg-hover)" stroke="var(--accent-secondary)" strokeWidth="1" rx="2"/>
              <text x="80" y="48" fill="var(--accent-secondary)" fontSize="6" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Build</text>
              {/* Right side */}
              <rect x="100" y="20" width="38" height="12" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="0.8" rx="2"/>
              <text x="119" y="29" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">IntTest</text>
              <rect x="120" y="5" width="38" height="12" fill="var(--bg-hover)" stroke="var(--blue)" strokeWidth="0.8" rx="2"/>
              <text x="139" y="14" fill="var(--blue)" fontSize="5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Valid.</text>
              {/* V-shape lines */}
              <line x1="21" y1="17" x2="39" y2="20" stroke="var(--text-dim)" strokeWidth="0.5"/>
              <line x1="58" y1="32" x2="70" y2="38" stroke="var(--text-dim)" strokeWidth="0.5"/>
              <line x1="90" y1="38" x2="100" y2="32" stroke="var(--text-dim)" strokeWidth="0.5"/>
              <line x1="119" y1="17" x2="139" y2="20" stroke="var(--text-dim)" strokeWidth="0.5"/>
              {/* Traceability */}
              <line x1="40" y1="11" x2="120" y2="11" stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2"/>
              <line x1="58" y1="26" x2="100" y2="26" stroke="var(--red)" strokeWidth="0.5" strokeDasharray="3,2"/>
              <text x="80" y="9" fill="var(--red)" fontSize="4" fontFamily="JetBrains Mono, monospace" textAnchor="middle">traceability</text>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="page-inner page-enter">
      <div className="lexicon-header">
        <div className="module-number">Reference</div>
        <h2>Symbol Lexicon</h2>
        <p className="lexicon-intro">
          Every schematic symbol used across the curriculum, organised by discipline.
          Each symbol links back to the lesson where it is introduced and explained in full context.
        </p>
      </div>

      <div className="lexicon-toc">
        {groups.map(g => (
          <span
            key={g.moduleId}
            className="lexicon-toc-chip"
            onClick={() => {
              const el = document.getElementById(`lex-${g.moduleId}`);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {g.module}
          </span>
        ))}
      </div>

      {groups.map(group => (
        <section key={group.moduleId} id={`lex-${group.moduleId}`} className="lexicon-group">
          <h3 className="lexicon-group-title">
            <span className="lexicon-group-num">{group.moduleId.slice(1)}</span>
            {group.module}
          </h3>

          <div className="lexicon-grid">
            {group.symbols.map((sym, i) => (
              <div key={i} className="lexicon-card">
                <div className="lexicon-card-symbol">
                  {sym.svg}
                </div>
                <div className="lexicon-card-body">
                  <div className="lexicon-card-name">{sym.name}</div>
                  <div className="lexicon-card-desc">{sym.desc}</div>
                  <div
                    className="lexicon-card-link"
                    onClick={() => goTo(sym.lessonId)}
                  >
                    {sym.lessonLabel} →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="lexicon-footer">
        <p>
          All symbols use simplified abstract geometry — rectangles, lines, and circles — designed for
          unambiguous correctness rather than physical detail. They follow the schematic conventions
          introduced in{' '}
          <span className="connection-link" onClick={() => goTo('m1-l4')}>
            Lesson 1.4: Track Representations
          </span>.
        </p>
      </div>
    </div>
  );
}
